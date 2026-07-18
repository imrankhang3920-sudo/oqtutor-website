import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Cookie Policy | OQTutor - Online Quran Academy',
  description: 'Read the OQTutor Cookie Policy. Learn how we use cookies to improve your user experience, analyze traffic, and track conversions.',
  alternates: {
    canonical: 'https://www.oqtutor.com/cookie-policy',
  },
};

export default async function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-xs text-muted-text">
              Last updated: July 18, 2026
            </p>
          </div>

          <div className="glass p-8 sm:p-12 rounded-3xl border border-card-border shadow-xl space-y-8 text-sm sm:text-base leading-relaxed text-muted-text font-normal">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. Introduction</h2>
              <p>
                Welcome to OQTutor. This Cookie Policy explains how we use cookies and similar tracking technologies on our website (https://www.oqtutor.com) to provide you with a secure, customized, and efficient experience. By browsing our website, you agree to our use of cookies as described in this policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. What are Cookies?</h2>
              <p>
                Cookies are small text files stored on your browser or device when you visit a website. They serve various purposes, such as keeping you logged in, remembering your site settings, analyzing traffic trends, and helping with marketing campaign metrics.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Types of Cookies We Use</h2>
              <p>
                We classify cookies into three core categories:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-foreground">Essential Cookies:</strong> These cookies are required for fundamental site operations (such as security verification and system logins). You cannot disable these cookies, and they do not collect personal data.
                </li>
                <li>
                  <strong className="text-foreground">Analytics & Performance Cookies:</strong> We use tools like Google Analytics to track site traffic, understand user engagement, and locate pages that experience technical issues. These cookies compile anonymous aggregated user metrics.
                </li>
                <li>
                  <strong className="text-foreground">Marketing & Tracking Cookies:</strong> These cookies track ad clicks and conversion events from marketing networks (such as Google Ads or Facebook campaigns). This helps us measure ad performance and run target marketing events.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Managing Your Cookie Settings</h2>
              <p>
                You can change your cookie settings at any time by clicking the "Cookie Settings" button on our cookie consent banner. Additionally, most modern browsers allow you to block or delete cookies through browser settings. Please note that blocking essential cookies may affect site functionality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Policy Updates</h2>
              <p>
                We may modify this Cookie Policy periodically to align with legal updates or modifications in our tracking technologies. Any updates will be posted here with an updated revision date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Contact Information</h2>
              <p>
                If you have any questions regarding our use of cookies or privacy practices, please contact us at:
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
