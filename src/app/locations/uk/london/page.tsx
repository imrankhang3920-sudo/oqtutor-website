import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, HelpCircle, Shield, Sparkles, BookOpen } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes London for Kids & Adults | Qualified Tutors",
    description: "One-to-one online Quran classes for London families. Qualified, DBS-checked male & female tutors, GMT/BST scheduling, free trial. Serving all London boroughs.",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/uk/london",
      languages: {
        'en-GB': 'https://www.oqtutor.com/locations/uk/london',
        'en-US': 'https://www.oqtutor.com/locations/usa',
        'en-CA': 'https://www.oqtutor.com/locations/canada',
        'en-AU': 'https://www.oqtutor.com/locations/australia',
        'x-default': 'https://www.oqtutor.com/locations/uk/london',
      },
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/uk/london",
      title: "Online Quran Classes London for Kids & Adults | Qualified Tutors",
      description: "One-to-one online Quran classes for London families. Qualified, DBS-checked male & female tutors, GMT/BST scheduling, free trial. Serving all London boroughs.",
      images: [
        {
          url: "https://www.oqtutor.com/logo.jpg",
          width: 1200,
          height: 630,
          alt: "OQTutor London Online Quran Classes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Online Quran Classes London for Kids & Adults | Qualified Tutors",
      description: "One-to-one online Quran classes for London families. Qualified, DBS-checked male & female tutors, GMT/BST scheduling, free trial. Serving all London boroughs.",
      images: ["https://www.oqtutor.com/logo.jpg"],
    },
  };
}

export default async function LondonQuranClassesPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const londonFaqs = [
    {
      question: "Do you teach students in every London borough, or only certain areas?",
      answer: "Yes — because classes are fully online, we teach families anywhere in Greater London, including areas with no nearby physical madrasa."
    },
    {
      question: "What time zone do London lessons run on?",
      answer: "All scheduling is set to GMT/BST automatically, so lesson times shift with UK clock changes — you don't need to adjust anything manually."
    },
    {
      question: "Can two siblings at different London schools share one plan?",
      answer: "Each plan is built around one student's pace, but siblings can be booked back-to-back in the same evening slot so you're only managing one login window."
    },
    {
      question: "Is there a London-based contact number, or only the head office line?",
      answer: "Support is available via UK phone, WhatsApp, and email from a single support line covering all UK locations — see Contact for current numbers."
    },
    {
      question: "How does half-term affect my child's schedule?",
      answer: "You can pause or shift lessons for any UK school half-term or holiday period without losing your plan or being charged a cancellation fee."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": londonFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oqtutor.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.oqtutor.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "UK",
        "item": "https://www.oqtutor.com/locations/uk"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "London",
        "item": "https://www.oqtutor.com/locations/uk/london"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Online Quran Tuition",
    "areaServed": {
      "@type": "City",
      "name": "London",
      "containedInPlace": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com"
    }
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb Bar */}
        <div className="border-b border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-xs text-muted-text">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations/uk" className="hover:text-primary transition-colors">UK</Link>
              <span>/</span>
              <span className="text-foreground font-semibold">London</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-primary/[0.03] via-background to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary tracking-wide">
                  <Shield className="h-3.5 w-3.5" />
                  <span>DBS-Checked Quran Tutors • GMT/BST London Timings</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes in London for Kids &amp; Adults | Qualified Tutors – OQTutor
                </h1>

                <p className="text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                  London families juggle school runs, half-terms, and shift work — which is exactly why a fixed weekly madrasa slot often falls apart by week three. OQTutor pairs your child or family with a qualified, DBS-checked, one-to-one Quran tutor and builds the lesson around your London week, not the other way around.
                </p>

                <p className="text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                  We currently teach students across Tower Hamlets, Newham, Redbridge, Waltham Forest, Barking and Dagenham, and every other London borough — lessons are fully online, so there&apos;s no commute either way.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Book Free Trial</span>
                    <ArrowRight className="h-4.5 w-4.5" />
                  </Link>
                  <Link
                    href="/locations/uk#pricing"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-sm font-semibold transition-all duration-300"
                  >
                    <span>See UK Pricing</span>
                  </Link>
                </div>
              </div>

              {/* Hero Image Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3 rounded-3xl border border-card-border shadow-2xl overflow-hidden bg-white">
                    <Image
                      src="/online-quran-classes-uk.jpg"
                      alt="Student in London studying Quran online with a certified tutor"
                      width={500}
                      height={380}
                      priority
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                    <div className="p-3 text-center text-xs text-muted-text font-medium bg-foreground/[0.01]">
                      1-on-1 personalized lessons tailored for families across Greater London.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 1: Why London Families Choose Online Over a Local Madrasa */}
        <section className="py-16 md:py-20 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Local Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Why London Families Choose Online Over a Local Madrasa
              </h2>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground">Commute Fatigue</h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  A 20-minute drive each way for a 30-minute class isn&apos;t sustainable through a London winter with evening traffic and parking challenges.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground">Rigid Group Timings</h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  One missed session for illness or a school event and the child falls behind the group in overcrowded local classrooms.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground">Sitting in on Lessons</h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  Parents want to actively observe their child&apos;s progress — something a drop-off madrasa doesn&apos;t allow, but a home video class does.
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm sm:text-base text-muted-text max-w-3xl leading-relaxed">
              Online learning gives London parents total visibility and flexibility, connecting their children with a qualified <Link href="/tutors" className="text-primary font-semibold hover:underline">Quran teacher in London</Link> without the daily travel disruption.
            </p>
          </div>
        </section>

        {/* SECTION 2: Scheduling Around a London Week */}
        <section className="py-16 md:py-20 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Flexible Timetable
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Scheduling Around a London Week
              </h2>
              <div className="h-1 w-20 bg-secondary mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Before-School Slots</span>
                </div>
                <div className="text-xs font-bold text-foreground bg-foreground/[0.04] px-2.5 py-1 rounded-lg inline-block">
                  7:00 – 8:15 AM
                </div>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Popular with primary-age students in Newham and Redbridge before the morning school run starts.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <Clock className="h-4 w-4" />
                  <span>After-School Window</span>
                </div>
                <div className="text-xs font-bold text-foreground bg-foreground/[0.04] px-2.5 py-1 rounded-lg inline-block">
                  4:00 – 6:30 PM
                </div>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  The most-booked window across London boroughs, optimal for kids right after returning home.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Evening Adult Slots</span>
                </div>
                <div className="text-xs font-bold text-foreground bg-foreground/[0.04] px-2.5 py-1 rounded-lg inline-block">
                  7:00 – 9:30 PM GMT/BST
                </div>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  For professionals commuting from Canary Wharf, the City, or working varied shifts.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>Weekend Blocks</span>
                </div>
                <div className="text-xs font-bold text-foreground bg-foreground/[0.04] px-2.5 py-1 rounded-lg inline-block">
                  Saturday &amp; Sunday
                </div>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  For families who prefer to consolidate Hifz revision and Tajweed practice on weekends.
                </p>
              </div>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/20 flex items-start space-x-3 max-w-3xl">
              <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-muted-text">
                <strong className="text-foreground">Automated UK Timezone:</strong> All timing runs on GMT/BST automatically — no manual conversion needed, and lessons can be paused without penalty during UK school half-terms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Courses Available in London */}
        <section className="py-16 md:py-20 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Courses Available in London
              </h2>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full" />
            </div>

            <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border max-w-4xl space-y-6">
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Every course on our main syllabus —{' '}
                <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>,{' '}
                <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran Reading</Link>,{' '}
                <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed</Link>,{' '}
                <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz-ul-Quran</Link>,{' '}
                <Link href="/courses" className="text-primary font-semibold hover:underline">Quran Translation</Link>, and{' '}
                <Link href="/courses/islamic-studies" className="text-primary font-semibold hover:underline">Islamic Studies</Link>{' '}
                — is available to London students at the same GBP pricing as the rest of the UK. See full course details and the fee table on our{' '}
                <Link href="/locations/uk" className="text-primary font-bold hover:underline">UK classes page</Link>.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {[
                  { name: "Noorani Qaida", href: "/courses/noorani-qaida" },
                  { name: "Quran Reading", href: "/courses/quran-reading" },
                  { name: "Tajweed Rules", href: "/courses/tajweed" },
                  { name: "Hifz-ul-Quran", href: "/courses/hifz" },
                  { name: "Islamic Studies", href: "/courses/islamic-studies" },
                  { name: "Adult Quran Track", href: "/courses/quran-for-adults" }
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-3.5 rounded-xl glass border border-card-border hover:border-primary/40 text-xs font-semibold text-foreground hover:text-primary text-center transition-all flex items-center justify-center space-x-1.5"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-primary" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Getting Started */}
        <section className="py-16 md:py-20 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Simple Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Getting Started
              </h2>
              <div className="h-1 w-20 bg-secondary mt-3 rounded-full" />
            </div>

            <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border max-w-4xl space-y-6">
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Getting started takes one step:{' '}
                <Link href="/book-free-trial" className="text-primary font-bold hover:underline">
                  book a free trial
                </Link>{' '}
                and we&apos;ll match you with a tutor based on your preferred London time slot. Full details on how lessons run are on our{' '}
                <Link href="/how-it-works" className="text-primary font-bold hover:underline">
                  How It Works
                </Link>{' '}
                page.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                <Link
                  href="/book-free-trial"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-sm font-semibold transition-all"
                >
                  <span>See How Lessons Run</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Frequently Asked Questions — London */}
        <section id="faq" className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Clear Answers
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions — London
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {londonFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="glass p-6 sm:p-8 rounded-2xl border border-card-border/80 hover:border-primary/30 transition-all shadow-sm"
                >
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center space-x-3 mb-3">
                    <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Start Learning Quran Online in London (Closing CTA) */}
        <section className="py-20 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 sm:p-12 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 shadow-xl text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Start Learning Quran Online in London
              </h2>
              <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Connect your child or yourself with certified, DBS-vetted male and female Quran tutors structured around your London routine. Experience our personalized 1-on-1 virtual lessons with a no-obligation free trial.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-free-trial"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  <span>Book Your Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/locations/uk#pricing"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-sm font-bold uppercase tracking-wider transition-all w-full sm:w-auto"
                >
                  <span>View UK Pricing</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact data={dbData.contact} />
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
