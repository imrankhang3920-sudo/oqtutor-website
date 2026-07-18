import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Refund Policy | OQTutor - Online Quran Academy',
  description: 'Read the OQTutor Refund Policy. Review our terms regarding monthly subscription refunds, trial classes, makeup classes, and cancellation guidelines.',
  alternates: {
    canonical: 'https://www.oqtutor.com/refund-policy',
  },
};

export default async function RefundPolicyPage() {
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
              Refund Policy
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-xs text-muted-text">
              Last updated: July 19, 2026
            </p>
          </div>

          <div className="glass p-8 sm:p-12 rounded-3xl border border-card-border shadow-xl space-y-8 text-sm sm:text-base leading-relaxed text-muted-text font-normal">
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. Trial Classes</h2>
              <p>
                OQTutor offers a <strong className="text-foreground">3-class free trial period</strong> for new students. These classes are 100% free with no credit card required. This trial period allows you to evaluate our tutors, teaching quality, and online platform before committing to any paid plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. Monthly Subscriptions and Payments</h2>
              <p>
                Our services are billed on a monthly subscription basis, paid in advance before the start of each tutoring billing cycle.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Once a monthly payment is processed and classes start, the fee is generally non-refundable.</li>
                <li>Subscriptions cover a set number of classes per week/month depending on your plan. Unused classes due to student absence are governed by our cancellation and makeup policy.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Missed Classes and Rescheduling (Makeup Class Policy)</h2>
              <p>
                To qualify for a refund evaluation or a rescheduling of a class, the following rules apply:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>If you miss a class and fail to inform the tutor or admin support at least <strong className="text-foreground">4 hours in advance</strong>, the class is marked as completed and will not be refunded or rescheduled.</li>
                <li>If you give more than 4 hours' notice, we will coordinate with your tutor to arrange a <strong className="text-foreground">makeup class</strong>. No refunds will be issued for missed classes that can be rescheduled as makeup classes.</li>
                <li>If OQTutor or our assigned tutor is unable to deliver a scheduled class, we will arrange a makeup session. If a makeup session cannot be scheduled due to our tutor's unavailability, a pro-rata credit or refund for that specific class hour will be offered.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Refund Eligibility Criteria</h2>
              <p>
                Refunds are evaluated case-by-case under the following exceptional circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Technical Failure:</strong> If technical issues on the academy's side prevent the tutor from conducting classes for more than 3 consecutive sessions and no backup teacher or makeup time can be arranged, you are eligible for a refund of the unused sessions.</li>
                <li><strong className="text-foreground">Early Cancellations:</strong> If you register and pay for a monthly plan but decide to cancel the registration <strong className="text-foreground">before the first official class starts</strong>, a full refund (minus transaction gateway charges) will be issued.</li>
                <li><strong className="text-foreground">Unsatisfactory Service:</strong> If you are unhappy with the tutor's quality and report it within the first week of starting classes, we will offer to change the tutor. If you still wish to discontinue, we will issue a pro-rata refund for the remaining unused classes of the month.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Processing of Refunds</h2>
              <p>
                Approved refund requests will be processed and credited back to the original payment method (Bank Transfer, Credit Card, PayPal, or Stripe) within <strong className="text-foreground">7 to 10 business days</strong>. Note that processing fees charged by card issuers are non-refundable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Contact and Refund Requests</h2>
              <p>
                To request a refund or raise billing questions, please submit an official request through email or WhatsApp:
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
