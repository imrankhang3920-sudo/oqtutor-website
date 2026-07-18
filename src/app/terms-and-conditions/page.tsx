import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Terms and Conditions | OQTutor - Online Quran Academy',
  description: 'Read the OQTutor Terms and Conditions. Review our terms of service, class rules, cancellation policy, payments, and guidelines for online Quran tutoring.',
  alternates: {
    canonical: 'https://www.oqtutor.com/terms-and-conditions',
  },
};

export default async function TermsAndConditionsPage() {
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
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Terms & Conditions
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-xs text-muted-text">
              Last updated: July 19, 2026
            </p>
          </div>

          <div className="glass p-8 sm:p-12 rounded-3xl border border-card-border shadow-xl space-y-8 text-sm sm:text-base leading-relaxed text-muted-text font-normal">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. Agreement to Terms</h2>
              <p>
                By accessing or using the OQTutor website (https://www.oqtutor.com) and registering for our online Quran classes, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. Description of Services</h2>
              <p>
                OQTutor provides online one-on-one Quran tutoring classes, including Tajweed, Noorani Qaida, Quran Memorization (Hifz), Islamic Studies, and Arabic Language instruction. Classes are conducted online by certified male and female tutors.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Student Registration and Accounts</h2>
              <p>
                To attend classes, parents or adult students must fill out the booking form. You agree to provide accurate and complete contact details (name, email, phone number, and age category). You are responsible for keeping your contact information updated.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Payment and Billing</h2>
              <p>
                Classes are billed monthly in advance based on the pricing plan chosen. 
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment must be made before classes start for each monthly cycle.</li>
                <li>OQTutor reserves the right to suspend or cancel student classes if monthly fees are not received on time.</li>
                <li>Rates and tutoring hours are subject to review, and students will be notified of any changes at least 15 days in advance.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Class Schedules and Cancellations</h2>
              <p>
                Both OQTutor and the students must respect the scheduled class times.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Rescheduling / Makeup Classes:</strong> If a student cannot attend a scheduled class, they must notify their tutor or academy coordinator at least <strong className="text-foreground">4 hours</strong> before the class start time to qualify for a makeup session. Makeup classes are subject to tutor availability.</li>
                <li><strong className="text-foreground">No-Shows:</strong> If a student fails to attend a class without prior notice, the class is marked as completed and will not be refunded or rescheduled.</li>
                <li><strong className="text-foreground">Tutor Absence:</strong> If a tutor is absent, OQTutor will arrange a makeup class or assign a substitute teacher.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Code of Conduct</h2>
              <p>
                OQTutor aims to maintain a respectful and productive learning environment.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Students and tutors must maintain professional behavior, appropriate dress codes, and respect during online sessions.</li>
                <li>Sharing personal contact information (social media, private phone numbers) directly between tutors and students is strictly prohibited. All scheduling and billing coordination must go through the academy's official support desk.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">7. Intellectual Property</h2>
              <p>
                All tutoring syllabus materials, PDFs, interactive graphics, brand assets, logos, and content published on this website are the property of OQTutor. You may not reproduce, distribute, or modify these materials without express written authorization.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">8. Limitation of Liability</h2>
              <p>
                OQTutor is not liable for technical interruptions due to general internet downtime, power cuts, or third-party online software failures (Zoom, Skype, WhatsApp). We will make reasonable efforts to reschedule classes affected by technical faults.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of Pakistan and the United Kingdom, where our operations and support offices serve global audiences.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">10. Contact Us</h2>
              <p>
                For questions or clarifications regarding our Terms & Conditions, please contact us at:
              </p>
              <ul className="list-none space-y-1 text-foreground font-semibold">
                <li>Email: {dbData.contact.email}</li>
                <li>Phone/WhatsApp: {dbData.contact.phone}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer data={dbData.contact} />
    </div>
  );
}
