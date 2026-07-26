import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Check, X, Shield, Users, CreditCard, Sparkles } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Affordable Fee Plans | Online Quran Academy Packages',
  description: 'Online Quran learning pricing plans: Starter ($30/mo), Standard ($40/mo), and Premium ($50/mo). Get 15% family discounts and a 7-day money-back guarantee.',
  keywords: ['online quran classes fees', 'affordable quran tutor', 'quran learning prices', 'private quran lesson cost'],
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    url: '/pricing',
  },
};

export default async function PricingPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oqtutor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://oqtutor.com/pricing"
      }
    ]
  };

  const comparisonFeatures = [
    { name: 'Class Frequency', Starter: '3 Classes / Week', Standard: '5 Classes / Week', Premium: 'Daily (7 / Week)' },
    { name: 'Session Duration', Starter: '30 Minutes', Standard: '30 Minutes', Premium: '30 Minutes' },
    { name: 'One-on-One Classes', Starter: true, Standard: true, Premium: true },
    { name: 'Male / Female Tutors', Starter: true, Standard: true, Premium: true },
    { name: 'Noorani Qaida & Basic Tajweed', Starter: true, Standard: true, Premium: true },
    { name: 'Advanced Tajweed & Pronunciation', Starter: false, Standard: true, Premium: true },
    { name: 'Islamic Studies & Daily Duas', Starter: false, Standard: true, Premium: true },
    { name: 'Customized Hifz Program', Starter: false, Standard: 'Basic only', Premium: 'Custom / Full Hifz' },
    { name: 'Quran Translation & Tafseer', Starter: false, Standard: false, Premium: true },
    { name: 'Monthly Progress Reports', Starter: false, Standard: true, Premium: true },
    { name: 'Priority Scheduling & Support', Starter: false, Standard: false, Premium: true },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow bg-background">
        
        {/* Header Hero */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Affordable Education
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Simple, Affordable Fee Plans
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              We believe in high-quality Quranic education accessible to everyone. Select a plan below that fits your schedule. Enjoy a 100% Free Trial before making any commitment.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-24">
              {dbData.pricing.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass rounded-3xl border-card-border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.isPopular 
                      ? 'ring-2 ring-primary bg-primary/[0.03] md:scale-105 shadow-xl shadow-primary/10 md:z-10' 
                      : 'hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.title}</h3>
                    <div className="flex items-baseline mt-4 mb-6">
                      <span className="text-4xl sm:text-5xl font-extrabold text-foreground">${plan.price}</span>
                      <span className="text-sm text-muted-text ml-2">/ {plan.frequency}</span>
                    </div>
                    <div className="h-px bg-card-border w-full mb-6" />

                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/book-free-trial"
                      className={`flex items-center justify-center w-full py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                        plan.isPopular
                          ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'
                          : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversion Enhancing Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24 text-center">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col items-center">
                <div className="p-3.5 rounded-2xl bg-secondary/15 text-secondary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2">7-Day Money-Back Guarantee</h4>
                <p className="text-xs text-muted-text max-w-xs leading-relaxed">
                  Not satisfied with your assigned tutor? Cancel within your first week and receive a full, hassle-free refund.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col items-center">
                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2">15% Family Discount</h4>
                <p className="text-xs text-muted-text max-w-xs leading-relaxed">
                  We offer sibling and family packages to support multi-student households. Receive up to 15% discount for registrations.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col items-center">
                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary mb-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-base text-foreground mb-2">Secure Transactions</h4>
                <p className="text-xs text-muted-text max-w-xs leading-relaxed">
                  Easily pay via credit card, Stripe, PayPal, or bank transfers. Your billing detail statements are 100% encrypted.
                </p>
              </div>
            </div>

            {/* Comparison Table Section */}
            <div className="max-w-5xl mx-auto mb-20 overflow-hidden">
              <div className="text-center mb-10">
                <h3 className="text-xl font-bold text-foreground">Package Comparison</h3>
                <p className="text-xs text-muted-text mt-1.5">Detailed view of features included in each plan.</p>
              </div>
              <div className="overflow-x-auto rounded-3xl border border-card-border glass">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-foreground/[0.02] border-b border-card-border">
                      <th className="p-5 text-sm font-bold text-foreground w-[40%]">Features</th>
                      <th className="p-5 text-sm font-bold text-foreground text-center">Starter</th>
                      <th className="p-5 text-sm font-bold text-foreground text-center bg-primary/5">Standard</th>
                      <th className="p-5 text-sm font-bold text-foreground text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feat, idx) => (
                      <tr key={idx} className="border-b border-card-border/60 hover:bg-foreground/[0.01] transition-colors last:border-0">
                        <td className="p-5 text-sm font-semibold text-foreground">{feat.name}</td>
                        <td className="p-5 text-sm text-muted-text text-center">
                          {typeof feat.Starter === 'boolean' 
                            ? (feat.Starter ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />) 
                            : feat.Starter}
                        </td>
                        <td className="p-5 text-sm text-muted-text text-center bg-primary/[0.02] font-medium text-foreground">
                          {typeof feat.Standard === 'boolean' 
                            ? (feat.Standard ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />) 
                            : feat.Standard}
                        </td>
                        <td className="p-5 text-sm text-muted-text text-center font-medium">
                          {typeof feat.Premium === 'boolean' 
                            ? (feat.Premium ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-red-500 mx-auto" />) 
                            : feat.Premium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
