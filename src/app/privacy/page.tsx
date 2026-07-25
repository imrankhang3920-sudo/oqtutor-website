import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Privacy Policy | OQTutor - Online Quran Academy',
  description: 'Read the privacy policy for OQTutor. Learn how we collect, protect, and use personal information for students worldwide studying Quran, Tajweed, and Islamic classes.',
  keywords: ['privacy policy oqtutor', 'quran academy privacy', 'online learning security', 'data protection quran class'],
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    url: '/privacy',
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
              Privacy Policy
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-sm text-muted-text">
              Last Updated: July 2026
            </p>
          </div>

          {/* Legal content */}
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl space-y-8 text-sm sm:text-base leading-relaxed text-foreground/90">
            <section>
              <p>
                Welcome to <strong>OQTutor</strong> ("we," "our," "us"). We are committed to protecting your personal information and your right to privacy. OQTutor provides one-on-one Online Quran Classes, Tajweed, Hifz, Tafseer, Arabic Language, and Islamic Studies for students worldwide.
              </p>
              <p className="mt-4">
                This Privacy Policy explains how we collect, use, disclose, store, and safeguard your information when you visit our website <a href="https://www.oqtutor.com" className="text-primary hover:underline font-semibold">www.oqtutor.com</a> and use our learning platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <h3 className="text-base font-bold text-foreground mt-4 mb-2">Personal Data</h3>
              <p>
                Personally identifiable information, such as your name, parent or guardian name (for minors), shipping address, email address, WhatsApp number, telephone number, student age, and preferred class timings that you voluntarily give to us when you register for a <strong>Free Trial Class</strong> or subscribe to our courses.
              </p>
              <h3 className="text-base font-bold text-foreground mt-4 mb-2">Derivative Data</h3>
              <p>
                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>Having accurate information about you allows us to provide you with a smooth, efficient, and customized learning experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Create and manage your student account.</li>
                <li>Schedule and coordinate class times with certified male and female tutors.</li>
                <li>Customize tutoring pedagogy to match the student's age and skills level.</li>
                <li>Process payments and subscription renewals.</li>
                <li>Email or message you regarding class updates, assignments, or billing notifications.</li>
                <li>Improve the performance, structure, and user experience of our website.</li>
                <li>Prevent fraudulent transactions and monitor against theft.</li>
              </ul>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">3. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies (such as Google Analytics) to access and store information. These tracking technologies help us analyze web traffic, understand which features are popular, and measure user engagement.
              </p>
              <p className="mt-3">
                You can choose to remove or reject cookies through your browser settings. However, please be aware that doing so could affect the availability and functionality of our Site.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">4. Payment Security</h2>
              <p>
                All student payments and billing details are processed securely. We do not store your credit card or billing details on our servers. All subscriptions are processed through secure, PCI-DSS compliant third-party payment gateways (such as Stripe or PayPal) that employ industry-grade encryption.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">5. Children's Privacy</h2>
              <p>
                OQTutor provides Quran classes for kids and teenagers. We do not knowingly collect personal information directly from children under the age of 13 without verifiable parent or guardian consent. 
              </p>
              <p className="mt-3">
                If you are a parent or guardian and believe that your child has provided us with personal information without your authorization, please contact us immediately, and we will take steps to remove such data.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law. When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have rights regarding your personal information, including the right to request access to, correction of, or deletion of your personal data. You also have the right to opt-out of marketing communications. To exercise any of these rights, please contact us using the details below.
              </p>
            </section>

            <hr className="border-card-border" />

            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <div className="mt-4 p-6 bg-foreground/[0.02] border border-card-border rounded-2xl space-y-2">
                <p><strong>Email:</strong> <a href={`mailto:${dbData.contact.email}`} className="text-primary hover:underline font-semibold">{dbData.contact.email}</a></p>
                <p><strong>WhatsApp Support:</strong> <a href={dbData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">{dbData.contact.phone}</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer data={dbData.contact} />
    </div>
  );
}
