import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { siteConfig } from '@/lib/structuredData';

function getSmtpCredentials() {
  const smtpHost = (process.env.SMTP_HOST || 'smtp.gmail.com').trim();
  const smtpPort = parseInt((process.env.SMTP_PORT || '587').trim(), 10);
  
  const clean = (val?: string) => (val || '').trim().replace(/^["']|["']$/g, '');
  const isPlaceholder = (val: string) => 
    !val || val.includes('your_gmail') || val.includes('your-gmail') || val.includes('your_16_char');

  let smtpUser = clean(process.env.SMTP_USER);
  if (isPlaceholder(smtpUser)) {
    smtpUser = clean(process.env.EMAIL_USER);
  }

  let smtpPass = clean(process.env.SMTP_PASS);
  if (isPlaceholder(smtpPass)) {
    smtpPass = clean(process.env.EMAIL_PASS);
  }

  if (smtpHost.includes('gmail')) {
    smtpPass = smtpPass.replace(/\s+/g, '');
  }

  let smtpTo = clean(process.env.CONTACT_EMAIL);
  if (isPlaceholder(smtpTo)) {
    smtpTo = clean(process.env.SMTP_TO) || siteConfig.contactEmail;
  }

  return { smtpHost, smtpPort, smtpUser, smtpPass, smtpTo };
}

export async function GET() {
  const { smtpHost, smtpPort, smtpUser, smtpPass } = getSmtpCredentials();

  const maskedUser = smtpUser ? (smtpUser.substring(0, 3) + '***@' + (smtpUser.split('@')[1] || '')) : 'NOT SET';
  const passLength = smtpPass ? `${smtpPass.length} characters` : '0 characters (NOT SET)';

  if (!smtpUser || !smtpPass) {
    return NextResponse.json({
      status: 'error',
      message: 'SMTP credentials missing. Please set SMTP_USER/PASS or EMAIL_USER/PASS environment variables.',
      debug: { host: smtpHost, port: smtpPort, user: maskedUser, passLength }
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000
  } as SMTPTransport.Options);

  try {
    await transporter.verify();
    return NextResponse.json({
      status: 'success',
      message: 'SMTP Server is ready and authenticated successfully!',
      debug: { host: smtpHost, port: smtpPort, user: maskedUser, passLength }
    });
  } catch (err: any) {
    return NextResponse.json({
      status: 'auth_failed',
      error: err?.message || String(err),
      debug: { host: smtpHost, port: smtpPort, user: maskedUser, passLength },
      solution: 'Please check: 1) 2-Step Verification is ON in Google Account, 2) You generated a 16-character Google App Password, 3) SMTP_USER matches the exact Gmail account that generated the App Password.'
    }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, phone, age, country, course, preferredTime, message } = body;
    const studentName = body.studentName || body.name;

    // 1. Validation
    if (!studentName || !studentName.trim()) {
      return NextResponse.json({ success: false, error: 'Full Name is required.' }, { status: 400 });
    }
    if (!email || !email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, error: 'A valid Email Address is required.' }, { status: 400 });
    }
    if (!phone || !phone.trim()) {
      return NextResponse.json({ success: false, error: 'Phone/WhatsApp number is required.' }, { status: 400 });
    }
    if (!course || !course.trim()) {
      return NextResponse.json({ success: false, error: 'Selected Course is required.' }, { status: 400 });
    }

    // 2. Extract Client IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : (request.headers.get('x-real-ip') || '127.0.0.1');

    const submissionDate = new Date().toLocaleString();

    // 3. SMTP configuration
    const { smtpHost, smtpPort, smtpUser, smtpPass, smtpTo } = getSmtpCredentials();

    // Verify SMTP configuration exists
    const hasSmtpConfig = Boolean(smtpUser && smtpPass);

    if (!hasSmtpConfig) {
      const errorMsg = 'SMTP credentials are not configured. Please set SMTP_USER & SMTP_PASS (or EMAIL_USER & EMAIL_PASS) in environment variables.';
      console.error(`[Contact Form] Configuration Error: ${errorMsg}`);
      return NextResponse.json({ 
        success: false, 
        error: errorMsg
      }, { status: 500 });
    }

    const isPort465 = smtpPort === 465;

    // Initialize transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isPort465, // True for 465 (SSL), false for 587 (TLS/STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 10000 // 10s timeout
    } as SMTPTransport.Options);

    const mailOptions = {
      from: `"${studentName} via OQTutor" <${smtpUser}>`,
      to: smtpTo,
      replyTo: email,
      subject: `New Free Trial Request - ${studentName} (${course})`,
      text: `
=== New Free Trial Request ===
Full Name: ${studentName}
Email Address: ${email}
Phone/WhatsApp: ${phone}
Student Age: ${age || 'Not specified'}
Country: ${country || 'Not specified'} ${body.countryCode ? `(${body.countryCode})` : ''}
Selected Course: ${course}
Preferred Time Slot: ${preferredTime || 'Not specified'}
Message: ${message || 'No message provided'}

Submission Date: ${submissionDate}
Sender IP Address: ${clientIp}
==============================
      `,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #111827; padding: 24px; text-align: center; color: white;">
            <h2 style="margin: 0; font-size: 20px; font-weight: bold; color: #10B981;">New Free Trial Request</h2>
            <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.85;">OQTutor Online Quran Academy</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6; width: 180px;">Full Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${studentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Email Address:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #2563EB; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Phone / WhatsApp:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="tel:${phone}" style="color: #2563EB; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Student Age:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${age || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Country:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${country || 'Not specified'} ${body.countryCode ? `(${body.countryCode})` : ''}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Selected Course:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><span style="background-color: #D1FAE5; color: #065F46; padding: 4px 10px; border-radius: 9999px; font-size: 12px; font-weight: bold;">${course}</span></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; border-bottom: 1px solid #f3f4f6;">Preferred Time Slot:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${preferredTime || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px 0; white-space: pre-wrap;">${message || 'No message provided'}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f9fafb; padding: 16px 24px; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between;">
            <span>Date: ${submissionDate}</span>
            <span>IP Address: ${clientIp}</span>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log(`[Contact Form] Email notification sent successfully to ${smtpTo} for ${studentName}`);
      return NextResponse.json({
        success: true,
        message: 'Your request has been successfully registered! We have received your booking details.'
      });
    } catch (sendError: any) {
      console.error('[Contact Form] SMTP sendMail failed:', sendError);

      const errorMessage = sendError?.message || String(sendError);
      const isAuthError = 
        sendError?.code === 'EAUTH' || 
        sendError?.responseCode === 535 || 
        errorMessage.includes('535') || 
        errorMessage.includes('Invalid login') ||
        errorMessage.includes('Username and Password not accepted');

      if (isAuthError) {
        return NextResponse.json({
          success: false,
          error: 'Gmail SMTP Authentication Failed (535-5.7.8). Please check: 1) 2-Step Verification MUST be ON in your Google Account. 2) Generate a 16-character Google App Password (Google Account > Security > 2-Step Verification > App Passwords). 3) Do NOT use your normal Gmail password. 4) Set EMAIL_USER (or SMTP_USER) and EMAIL_PASS (or SMTP_PASS) in your environment variables without quotes.'
        }, { status: 401 });
      }

      return NextResponse.json({
        success: false,
        error: `Failed to deliver email: ${errorMessage}`
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error('[Contact Form] Request processing failed:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
