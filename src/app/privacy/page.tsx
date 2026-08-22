import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Privacy Policy | OQTutor - Online Quran Academy',
  description: 'Read the official Privacy Policy for OQTutor. Learn how we collect, protect, and use personal information for students and parents worldwide.',
  keywords: ['privacy policy oqtutor', 'quran academy privacy', 'online learning security', 'data protection quran class'],
  alternates: {
    canonical: 'https://www.oqtutor.com/privacy',
  },
  openGraph: {
    url: 'https://www.oqtutor.com/privacy',
    title: 'Privacy Policy | OQTutor',
    description: 'Read the official Privacy Policy for OQTutor. Learn how we collect, protect, and use personal information for students and parents worldwide.',
  },
};

export default async function PrivacyPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar adminLoggedIn={adminLoggedIn} />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Privacy Policy — OQTutor
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-sm font-semibold text-primary">
              Last Updated: 17 August 2023
            </p>
          </div>

          {/* Legal content */}
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl space-y-8 text-sm sm:text-base leading-relaxed text-foreground/90">
            <section className="space-y-4">
              <p>
                Welcome to <strong>OQTutor</strong> (&quot;OQTutor,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We provide one-on-one online Quran, Tajweed, Hifz, Islamic Studies, and Arabic Language classes to students worldwide via our website <Link href="https://www.oqtutor.com" className="text-primary hover:underline font-semibold">www.oqtutor.com</Link> (the &quot;Site&quot;) and our online classroom platform (together, the &quot;Services&quot;).
              </p>
              <p>
                This Privacy Policy explains what personal information we collect, how we use and protect it, who we share it with, and the choices and rights you have. Please read it carefully. By using our Site or Services, you agree to the practices described here. If you do not agree, please do not use the Site or Services.
              </p>
              <p>
                If you are a parent or guardian registering a child for classes, this policy applies to you and to the information you provide about your child.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Who We Are</h2>
              <p>
                OQTutor is an online Quran education platform operating at <Link href="https://www.oqtutor.com" className="text-primary hover:underline font-semibold">www.oqtutor.com</Link>, providing certified male and female tutors for one-on-one Quran, Tajweed, Hifz, Islamic Studies, and Arabic Language classes to students in the USA, UK, Canada, Australia, and worldwide.
              </p>
              <div className="mt-4 p-6 bg-foreground/[0.02] border border-card-border rounded-2xl space-y-2 text-sm">
                <p><strong>Business Name:</strong> OQTutor</p>
                <p><strong>Business Address:</strong> Bahawalpur, Punjab, Pakistan</p>
                <p><strong>Email:</strong> <a href="mailto:hello@oqtutor.com" className="text-primary hover:underline font-semibold">hello@oqtutor.com</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/923478704442" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">+92 347 8704442</a> / <a href="tel:+12487826565" className="text-primary hover:underline font-semibold">+1 (248) 782-6565</a></p>
              </div>
            </section>

            <hr className="border-card-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              
              <div>
                <h3 className="text-base font-bold text-foreground mb-2">a) Information you give us directly</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Full name, and parent/guardian name where the student is a minor</li>
                  <li>Email address, phone number, and WhatsApp number</li>
                  <li>Student&apos;s age and preferred class timings</li>
                  <li>Country/location (for time-zone scheduling and tutor matching)</li>
                  <li>Course selection and any notes or special requirements you submit</li>
                  <li>Billing name and address (for invoicing — see Section 5 on payments)</li>
                  <li>Messages you send us via contact forms, email, or WhatsApp</li>
                  <li>Feedback, survey responses, and testimonials you choose to provide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">b) Information collected automatically</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address, browser type, device and operating system</li>
                  <li>Pages visited, referring URL, time and duration of visits</li>
                  <li>Cookie and analytics identifiers (see Section 6)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">c) Information generated during classes</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Attendance records, lesson summaries, and progress/Tajweed evaluation notes entered by tutors</li>
                  <li>Scheduling and rescheduling history</li>
                </ul>
                <p className="mt-2 text-sm text-muted-text font-medium">
                  We do <strong>not</strong> record video or audio of live classes. Classes take place in real time between the student and tutor and are not stored by us.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground mb-2">d) Information from third parties</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>If you sign in or interact with us via Facebook, Instagram, or WhatsApp, those platforms may share limited profile or contact information with us, governed by their own privacy policies.</li>
                  <li>Our payment processor(s) share limited transaction confirmation data with us (see Section 5) — we never receive or store your full card number.</li>
                </ul>
              </div>
            </section>

            <hr className="border-card-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">3. Children&apos;s Privacy</h2>
              <p>
                OQTutor&apos;s core service is education for children as well as adults. We take special care with information relating to minors:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We collect a child&apos;s information (name, age, and class progress notes) only with the consent and active involvement of a parent or guardian, who registers the child and manages the account.</li>
                <li>We do not knowingly collect personal information directly from a child without parental involvement, and a parent/guardian may contact us at any time to review, correct, or delete their child&apos;s information.</li>
                <li>Female students and young children may request a female tutor; tutor-assignment preferences are used only to arrange appropriate classes.</li>
                <li>We do not use children&apos;s information for targeted advertising.</li>
                <li>If you believe a child has provided us with information without appropriate parental consent, contact us at the email above and we will delete it.</li>
              </ul>
              <p className="mt-3">
                All classes for children are booked, managed, and paid for by a parent or guardian through our free trial and enrollment process — children do not register themselves. Parents can log in to monitor attendance, read lesson summaries, and review teacher feedback through the parental dashboard at any time.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Create and manage student/parent accounts</li>
                <li>Match students with suitable tutors and schedule/reschedule classes</li>
                <li>Deliver the free trial and paid class services, and track student progress</li>
                <li>Process payments and send billing or renewal notices</li>
                <li>Communicate with you about your classes, account, or support requests, via email or WhatsApp</li>
                <li>Send you marketing or promotional messages, where you&apos;ve agreed to receive them (you can opt out any time)</li>
                <li>Analyze and improve our Site, curriculum, and platform performance</li>
                <li>Detect and prevent fraud, abuse, or security incidents</li>
                <li>Comply with legal obligations and enforce our Terms &amp; Conditions</li>
              </ul>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Payments</h2>
              <p>
                We currently accept class fee payments via international money transfer services, including MoneyGram, Western Union, Remitly, Ria, and TapTap Send. When you pay through one of these services, we receive transaction details such as the sender&apos;s name, transfer/reference number, amount, and date, which we use to confirm and record your payment. We do not process or store full card numbers, CVVs, or bank account credentials — that information stays with the transfer provider you use, under its own privacy and security policies. You should also review the privacy policy of whichever transfer service you use to send payment.
              </p>
            </section>

            <hr className="border-card-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground mb-4">6. Cookies and Analytics</h2>
              <p>
                We use cookies and similar technologies to operate the Site and understand how visitors use it, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential cookies</strong> — required for the Site and booking forms to function</li>
                <li><strong>Analytics cookies</strong> (e.g., Google Analytics) — help us understand traffic and usage patterns</li>
                <li><strong>Advertising/pixel cookies</strong> (e.g., Meta/Facebook Pixel) — help us measure the effectiveness of our ads, if we run any</li>
              </ul>
              <p>
                You can control or disable cookies through your browser settings. Disabling cookies may affect parts of the Site, such as the trial-booking form. See our separate <Link href="/cookie-policy" className="text-primary hover:underline font-semibold">Cookie Policy</Link> for details.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. How We Share Information</h2>
              <p>We do not sell your personal information. We share it only with:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Tutors</strong>, so they can teach and evaluate the student&apos;s progress</li>
                <li><strong>Service providers</strong> who support our operations — website hosting, payment processing, email/WhatsApp communication tools, and analytics providers — under confidentiality and data-protection obligations</li>
                <li><strong>Legal and regulatory authorities</strong>, where required by law or to protect our rights, users, or the public</li>
                <li><strong>A buyer or successor</strong>, if OQTutor is ever involved in a merger, acquisition, or sale of assets, subject to this policy continuing to apply</li>
              </ul>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">8. International Data Transfers</h2>
              <p>
                OQTutor serves students in the USA, UK, Canada, Australia, and other countries, and works with service providers (hosting, analytics, payments) that may process data outside your home country, including in the United States. Where required, we rely on appropriate safeguards (such as standard contractual clauses or provider-level certifications) for these transfers.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">9. Data Retention</h2>
              <p>
                We keep personal information only as long as needed to provide the Services, maintain accurate class/progress records, meet legal and accounting obligations, and resolve disputes. When information is no longer needed, we delete or anonymize it. You may request earlier deletion — see Section 10.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">10. Your Rights and Choices</h2>
              <p>Depending on where you live (e.g., under GDPR in the UK/EU or similar laws elsewhere), you may have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access the personal information we hold about you or your child</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information (&quot;right to be forgotten&quot;)</li>
                <li>Object to or restrict certain processing (e.g., marketing)</li>
                <li>Request a portable copy of your data</li>
                <li>Withdraw consent at any time, without affecting past processing</li>
                <li>Opt out of marketing emails/WhatsApp messages using the unsubscribe link or by contacting us directly</li>
                <li>Lodge a complaint with your local data protection authority</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, email <a href="mailto:hello@oqtutor.com" className="text-primary hover:underline font-semibold">hello@oqtutor.com</a>. We will respond within a reasonable time.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">11. Data Security</h2>
              <p>
                We use reasonable technical and organizational measures — including access controls and secure hosting — to protect your information. No method of transmission or storage is 100% secure, so we cannot guarantee absolute security, but we work to protect your data against unauthorized access, alteration, or loss.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">12. Third-Party Links</h2>
              <p>
                Our Site may link to third-party sites (e.g., Facebook, Instagram, Trustpilot, WhatsApp). We are not responsible for the privacy practices of those sites — please review their own policies before sharing information with them.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">13. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the revised version here with an updated &quot;Last Updated&quot; date, and where changes are material, we will take reasonable steps to notify you.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">14. Contact Us</h2>
              <p>Questions, requests, or concerns about this Privacy Policy or your data:</p>
              <div className="mt-4 p-6 bg-foreground/[0.02] border border-card-border rounded-2xl space-y-2">
                <p><strong>Email:</strong> <a href="mailto:hello@oqtutor.com" className="text-primary hover:underline font-semibold">hello@oqtutor.com</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/923478704442" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Chat with us</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer data={dbData.contact} />
    </div>
  );
}
