import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { saveSubmission } from '@/lib/submissions';

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
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpTo = process.env.SMTP_TO || 'imrankhang3920@gmail.com';

    // Verify SMTP configuration exists
    const hasSmtpConfig = smtpUser && smtpPass && smtpPass !== 'your-gmail-app-password';

    if (!hasSmtpConfig) {
      const errorMsg = 'SMTP credentials not configured or using default placeholders in .env.local';
      console.warn(`[Contact Form] ${errorMsg}. Fallback: Saving to database.`);
      
      // Save to database
      const dbRecord = saveSubmission({
        studentName,
        email,
        phone,
        age: age || 'Not specified',
        country: country || 'Not specified',
        course,
        preferredTime: preferredTime || 'Not specified',
        message: message || '',
        ip: clientIp,
        emailStatus: 'failed',
        errorLog: errorMsg
      });

      return NextResponse.json({
        success: true,
        emailSent: false,
        message: 'Your request has been successfully registered! (Saved in local database)',
        submission: dbRecord
      });
    }

    // Initialize transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // True for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
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
Country: ${country || 'Not specified'}
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
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">${country || 'Not specified'}</td>
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
      
      // Also save to database as sent record
      const dbRecord = saveSubmission({
        studentName,
        email,
        phone,
        age: age || 'Not specified',
        country: country || 'Not specified',
        course,
        preferredTime: preferredTime || 'Not specified',
        message: message || '',
        ip: clientIp,
        emailStatus: 'sent'
      });

      return NextResponse.json({
        success: true,
        emailSent: true,
        message: 'Your request has been successfully registered! We have received your booking details.',
        submission: dbRecord
      });
    } catch (sendError: any) {
      console.error('[Contact Form] SMTP sendMail failed:', sendError);
      
      // Save failed email submission to database with error log
      const dbRecord = saveSubmission({
        studentName,
        email,
        phone,
        age: age || 'Not specified',
        country: country || 'Not specified',
        course,
        preferredTime: preferredTime || 'Not specified',
        message: message || '',
        ip: clientIp,
        emailStatus: 'failed',
        errorLog: sendError?.message || String(sendError)
      });

      return NextResponse.json({
        success: true, // Still return success to front-end to ensure booking is registered
        emailSent: false,
        message: 'Your request was registered successfully! (Admin notification queued)',
        submission: dbRecord
      });
    }
  } catch (error: any) {
    console.error('[Contact Form] Request processing failed:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
