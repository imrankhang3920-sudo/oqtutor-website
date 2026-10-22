import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  HelpCircle, 
  Shield, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Users, 
  UserCheck, 
  CheckCircle, 
  Star, 
  MapPin, 
  GraduationCap, 
  HeartHandshake, 
  Laptop, 
  Check, 
  X, 
  ChevronDown,
  Quote,
  Zap,
  Award,
  Video
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes Birmingham | 1-to-1 Tutors (From £18/mo) - OQTutor";
  const metaDescription = "Learn Quran online in Birmingham with vetted male & female tutors. 1-to-1 live Noorani Qaida, Tajweed & Hifz classes for kids & adults. Book 3 free lessons!";
  const canonicalUrl = "https://www.oqtutor.com/locations/uk/birmingham";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-GB': canonicalUrl,
        'en-US': 'https://www.oqtutor.com/locations/usa',
        'en-CA': 'https://www.oqtutor.com/locations/canada',
        'en-AU': 'https://www.oqtutor.com/locations/australia',
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      type: "website",
      images: [
        {
          url: "https://www.oqtutor.com/online-quran-classes-birmingham.jpg",
          width: 1200,
          height: 630,
          alt: "Online Quran Classes Birmingham - OQTutor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["https://www.oqtutor.com/online-quran-classes-birmingham.jpg"],
    },
  };
}

export default async function BirminghamQuranClassesPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const birminghamFaqs = [
    {
      question: "How does the 3-day free trial work, and do I need to enter payment details?",
      answer: "You receive 3 free one-to-one trial lessons with a qualified tutor before paying a single penny. We do not ask for credit card or bank details during trial registration. There is zero obligation—you only enrol in a paid monthly plan if you are completely satisfied after completing your trial classes."
    },
    {
      question: "What age should my child start online Quran lessons?",
      answer: "Most children in Birmingham start between ages 4 and 5 (around the time they enter Reception or Year 1). Because our classes are strictly one-to-one and last 30 minutes, tutors keep young children engaged using interactive visual Qaida boards and short, varied activities."
    },
    {
      question: "Can we choose a female Quran tutor for our daughters or sisters?",
      answer: "Yes, absolutely. Simply select \"Female Tutor\" when booking your free trial. Our certified female scholars (Ustadhas and Alimas) teach sisters of all ages and young boys/girls in a completely private virtual setting."
    },
    {
      question: "What happens during Birmingham school half-terms, summer holidays, or Eid?",
      answer: "Unlike physical madrasas or rigid tuition contracts, OQTutor allows you to reschedule lessons with 24 hours' notice or pause your subscription during UK school holidays, family travel, or exam weeks at no extra cost."
    },
    {
      question: "What equipment or textbooks do we need to get started?",
      answer: "You only need a stable internet connection and any device with a screen and microphone—such as a laptop, desktop computer, iPad/tablet, or smartphone. You do not need to buy physical books; your tutor provides all digital PDF copies of Noorani Qaida, colour-coded Tajweed Mushaf, and Islamic Studies workbooks free of charge."
    },
    {
      question: "Can I keep the same tutor after the free trial ends?",
      answer: "Yes. The tutor who conducts your trial lessons is matched based on your permanent preferred schedule, meaning your child continues with the exact same familiar teacher once you enrol. If you ever wish to switch tutors in the future, our support team arranges a replacement immediately."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "Service"],
    "name": "OQTutor - Online Quran Classes Birmingham",
    "description": "Learn Quran online in Birmingham with vetted male & female tutors. 1-to-1 live Noorani Qaida, Tajweed & Hifz classes for kids & adults. Book 3 free lessons!",
    "url": "https://www.oqtutor.com/locations/uk/birmingham",
    "provider": {
      "@type": "Organization",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com",
      "logo": "https://www.oqtutor.com/logo.jpg"
    },
    "areaServed": {
      "@type": "City",
      "name": "Birmingham",
      "containedInPlace": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    },
    "priceRange": "£18 - £35",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Birmingham Online Quran Classes Pricing Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Weekend / Lite Plan",
          "description": "2 Days / Week, 8 Lessons (30 mins each) - Best For: Busy schedules, Saturday & Sunday mornings, or adult refreshers.",
          "price": "18.00",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://www.oqtutor.com/locations/uk/birmingham#pricing"
        },
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "description": "3 Days / Week, 12 Lessons (30 mins each) - Best For: Steady after-school progress in Noorani Qaida & Tajweed.",
          "price": "24.00",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://www.oqtutor.com/locations/uk/birmingham#pricing"
        },
        {
          "@type": "Offer",
          "name": "Standard Plan",
          "description": "4 Days / Week, 16 Lessons (30 mins each) - Best For: Fast-track Quran reading fluency + Islamic Studies.",
          "price": "30.00",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://www.oqtutor.com/locations/uk/birmingham#pricing"
        },
        {
          "@type": "Offer",
          "name": "Intensive / Hifz Plan",
          "description": "5 Days / Week, 20 Lessons (30 mins each) - Best For: Daily weekday continuity, Hifz memorisation & beginners.",
          "price": "35.00",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "url": "https://www.oqtutor.com/locations/uk/birmingham#pricing"
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": birminghamFaqs.map((faq) => ({
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
        "name": "Birmingham",
        "item": "https://www.oqtutor.com/locations/uk/birmingham"
      }
    ]
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="min-h-screen bg-background">
        {/* Breadcrumb Bar */}
        <div className="border-b border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center space-x-2 text-xs text-muted-text">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
              <span>/</span>
              <Link href="/locations/uk" className="hover:text-primary transition-colors">UK</Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Birmingham</span>
            </nav>
          </div>
        </div>

        {/* SECTION 1: HERO SECTION */}
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-primary/[0.04] via-background to-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary tracking-wide">
                  <span>🇬🇧 Online Quran Tuition for Birmingham &amp; West Midlands Families</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes in Birmingham for Children &amp; Adults | Private 1-to-1 Quran Tutors
                </h1>

                <p className="text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                  Learn the Holy Quran from the comfort of your Birmingham home with structured, one-to-one live lessons tailored around your family&apos;s daily routine. Whether your child is taking their very first steps with Noorani Qaida in Sparkhill, or you are a working professional in Edgbaston refining your Tajweed and Hifz, OQTutor connects your household with qualified, safeguarding-vetted male and female Quran teachers aligned with UK time (GMT/BST).
                </p>

                {/* Hero Feature Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start space-x-2.5 p-3 rounded-xl glass border border-card-border/80">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      100% Private 1-to-1 Live Lessons (Zero crowded group classrooms)
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-3 rounded-xl glass border border-card-border/80">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      Certified Male &amp; Female Tutors (Fluent English, Urdu, Punjabi &amp; Arabic speakers)
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-3 rounded-xl glass border border-card-border/80">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      Aligned with Birmingham School Terms (Flexible after-school &amp; weekend slots)
                    </span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-3 rounded-xl glass border border-card-border/80">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      Affordable Monthly Plans from £18/month (Billed in GBP • Sibling discounts)
                    </span>
                  </div>
                </div>

                {/* CTA Group */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                      href="/book-trial"
                      className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center"
                    >
                      <span>Start Your 3 Free Trial Lessons</span>
                      <ArrowRight className="h-4.5 w-4.5" />
                    </Link>
                    <a
                      href="#pricing"
                      className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-sm font-bold transition-all duration-300 text-center"
                    >
                      <span>View GBP Pricing Plans</span>
                    </a>
                  </div>
                  <p className="mt-3 text-xs text-muted-text font-medium flex items-center space-x-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-secondary shrink-0" />
                    <span>3 Free Trial Classes • No Credit Card Required • Cancel or Pause Anytime</span>
                  </p>
                </div>
              </div>

              {/* Right Hero Visual & Live Classroom Preview Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3 rounded-3xl border border-card-border shadow-2xl overflow-hidden bg-white dark:bg-slate-900">
                    <div className="relative rounded-2xl overflow-hidden aspect-square">
                      <Image
                        src="/online-quran-classes-birmingham.jpg"
                        alt="British Muslim students in Birmingham studying Quran online with an OQTutor instructor"
                        width={600}
                        height={600}
                        priority
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center space-x-1.5 shadow-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live 1-to-1 Virtual Classroom • GMT / BST Synced</span>
                      </div>
                    </div>

                    {/* Preview Feature List */}
                    <div className="p-4 space-y-2.5 bg-foreground/[0.015] rounded-2xl mt-3 border border-card-border/50">
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span>3 Free Trial Lessons Included</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                        <span>Less than 1 in 10 Tutors Pass Vetting</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <Laptop className="h-4 w-4 text-primary shrink-0" />
                        <span>Real-Time Audio &amp; Digital Whiteboard</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span>Weekly &amp; Monthly Parent Progress Reports</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: THE LOCAL MADRASA ALTERNATIVE (PROBLEM & SOLUTION + COMPARISON TABLE) */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Convenience, Safety &amp; Focus
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Birmingham Families Are Choosing Online 1-to-1 Quran Tuition Over Traditional Evening Madrasas
              </h2>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground">Vibrant Heritage, Modern Logistics</h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  Birmingham is home to one of the largest, most vibrant Muslim communities in the United Kingdom. From iconic Islamic centres along Coventry Road and Green Lane to local neighbourhood mosques across Alum Rock, Small Heath, and Lozells, traditional religious education has always been at the heart of West Midlands family life.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary font-bold text-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground">The Rush-Hour Commute Strain</h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  However, for thousands of modern Birmingham parents, the Monday-to-Friday evening madrasa routine has become increasingly difficult to sustain. Navigating heavy rush-hour traffic along the A38, Stratford Road, or Coventry Road between 4:30 PM and 7:00 PM—especially during dark, rainy West Midlands winters—leaves both parents and primary school children exhausted before the lesson even begins.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border space-y-3">
                <div className="h-10 w-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold text-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground">Crowded Classrooms &amp; Lost Focus</h3>
                <p className="text-sm text-muted-text leading-relaxed">
                  Even after arriving at a local mosque class, children often sit in crowded rooms of 20 to 25 students per teacher. In a two-hour session, a child may only receive three to four minutes of direct, individual recitation time with the Ustadh or Ustadha, spending the rest of the evening waiting passively or becoming distracted by peers.
                </p>
              </div>
            </div>

            {/* Solution Header & Comparison Table */}
            <div className="mt-14 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  How OQTutor Solves the Birmingham Madrasa Challenge
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                  OQTutor brings the spiritual discipline and scholarly authenticity of a traditional Islamic academy directly into your living room, eliminating the stress of the daily commute while multiplying the quality of your child&apos;s learning time.
                </p>
              </div>

              {/* Styled Responsive Comparison Table */}
              <div className="glass rounded-3xl border border-card-border overflow-hidden shadow-xl bg-white/70 dark:bg-slate-900/60">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-card-border bg-foreground/[0.04]">
                        <th className="py-4.5 px-6 text-xs sm:text-sm font-extrabold text-foreground uppercase tracking-wider">
                          Learning Factor
                        </th>
                        <th className="py-4.5 px-6 text-xs sm:text-sm font-bold text-muted-text">
                          Traditional Birmingham Madrasa
                        </th>
                        <th className="py-4.5 px-6 text-xs sm:text-sm font-extrabold text-primary bg-primary/10">
                          OQTutor 1-to-1 Online Classes
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-card-border/60 text-xs sm:text-sm">
                      <tr className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground">Class Size</td>
                        <td className="py-4 px-6 text-muted-text">15 to 25+ students per room</td>
                        <td className="py-4 px-6 font-extrabold text-primary bg-primary/[0.04]">
                          Strictly 1-to-1 private tuition
                        </td>
                      </tr>
                      <tr className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground">Individual Teacher Focus</td>
                        <td className="py-4 px-6 text-muted-text">3–5 minutes per child</td>
                        <td className="py-4 px-6 font-extrabold text-primary bg-primary/[0.04]">
                          Full 30 minutes of undivided attention
                        </td>
                      </tr>
                      <tr className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground">Daily Commute</td>
                        <td className="py-4 px-6 text-muted-text">30–60 mins in Birmingham rush-hour traffic</td>
                        <td className="py-4 px-6 font-extrabold text-primary bg-primary/[0.04]">
                          Zero commute — learn safely from home
                        </td>
                      </tr>
                      <tr className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground">Timetable Flexibility</td>
                        <td className="py-4 px-6 text-muted-text">Fixed 5:00 PM – 7:00 PM weekday block</td>
                        <td className="py-4 px-6 font-extrabold text-primary bg-primary/[0.04]">
                          Custom slots (After-school, evenings, or weekends)
                        </td>
                      </tr>
                      <tr className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground">Mistake Correction</td>
                        <td className="py-4 px-6 text-muted-text">Subtle Makharij errors often go unnoticed</td>
                        <td className="py-4 px-6 font-extrabold text-primary bg-primary/[0.04]">
                          Instant, real-time audio &amp; visual correction
                        </td>
                      </tr>
                      <tr className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground">Parental Visibility</td>
                        <td className="py-4 px-6 text-muted-text">Limited feedback until annual exams</td>
                        <td className="py-4 px-6 font-extrabold text-primary bg-primary/[0.04]">
                          Watch live anytime + monthly progress reports
                        </td>
                      </tr>
                      <tr className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground">Missed Classes</td>
                        <td className="py-4 px-6 text-muted-text">Lesson lost if child is unwell or travelling</td>
                        <td className="py-4 px-6 font-extrabold text-primary bg-primary/[0.04]">
                          Easy rescheduling &amp; free holiday pausing
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: KIDS & ADULTS PROGRAMMES (2-COLUMN DETAILED CARDS) */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Tailored for Every Age Group
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Tailored Online Quran Programmes for Birmingham Learners of All Ages
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Every Muslim household in Birmingham has unique educational goals. Some parents want a nurturing, phonics-based introduction for a four-year-old starting Reception, while others want structured Hifz supervision for a teenager attending a local grammar school, or private evening Tajweed classes for adults.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Card 1: Kids */}
              <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border flex flex-col justify-between hover:border-primary/40 transition-all shadow-lg hover:shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full">
                      Primary &amp; Secondary School Learners
                    </span>
                    <span className="text-xs font-bold text-muted-text">Ages 4–16</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                    Online Quran Classes for Kids in Birmingham (Ages 4–16)
                  </h3>

                  <p className="text-sm text-muted-text leading-relaxed">
                    Children thrive when learning feels encouraging, interactive, and structured rather than intimidating. Our children&apos;s curriculum is designed to complement Key Stage 1, Key Stage 2, and Secondary school workloads, ensuring your child builds a lifelong love for the Book of Allah without feeling overwhelmed after a long day at school.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-foreground block mb-0.5">Visual Digital Whiteboards:</strong>
                        <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                          Tutors share high-definition digital Noorani Qaida and colour-coded Tajweed Mushaf pages on screen, using live cursors and annotations to highlight letter shapes and vowel rules.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-foreground block mb-0.5">Bite-Sized 30-Minute Sessions:</strong>
                        <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                          Research shows young learners retain far more in focused 30-minute one-to-one sessions than in two-hour group classes.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-foreground block mb-0.5">Built-In Islamic Tarbiyah:</strong>
                        <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                          Alongside Quranic recitation, children spend the final five minutes of each lesson learning essential Masnoon Duas, step-by-step Salah (prayer), Kalimas, and Prophetic manners (Akhlaq).
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-foreground block mb-0.5">Exam &amp; Half-Term Flexibility:</strong>
                        <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                          Preparing for SATs, the Birmingham 11+ Grammar School entrance exams, or GCSEs? Easily reduce weekly frequency or pause lessons during intense school exam weeks with zero penalty.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-card-border/60">
                  <Link
                    href="/book-trial"
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group"
                  >
                    <span>Book 3 Free Trial Lessons for Your Child</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Adults */}
              <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border flex flex-col justify-between hover:border-secondary/40 transition-all shadow-lg hover:shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 px-3.5 py-1.5 rounded-full">
                      Professionals, Parents, Students &amp; Reverts
                    </span>
                    <span className="text-xs font-bold text-muted-text">Ages 16+</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                    Online Quran Classes for Adults, Reverts &amp; University Students
                  </h3>

                  <p className="text-sm text-muted-text leading-relaxed">
                    Whether you are a healthcare professional working rotating shifts at Queen Elizabeth Hospital, a commuter working in Birmingham City Centre, or a student studying at the University of Birmingham, Aston University, or Birmingham City University (BCU), our adult Quran programme fits seamlessly around unpredictable timetables.
                  </p>

                  <div className="space-y-4 pt-2">
                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-foreground block mb-0.5">Zero Judgment, 100% Privacy:</strong>
                        <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                          Many adults feel hesitant to join group classes at a local mosque if they struggle with basic Arabic reading. Our one-to-one virtual classroom offers complete privacy, allowing you to learn at your own pace with a patient, respectful scholar.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-foreground block mb-0.5">Early Morning &amp; Late Night Slots:</strong>
                        <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                          Book classes before your morning commute (from 6:00 AM GMT/BST) or after the household is asleep (up to 10:30 PM).
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-1.5 rounded-lg bg-secondary/10 text-secondary shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-xs sm:text-sm text-foreground block mb-0.5">Support for New Muslims (Reverts):</strong>
                        <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                          We provide gentle, foundational step-by-step guidance in English covering how to pray Salah, pronounce Surah Al-Fatiha and short Surahs accurately, and understand core Islamic beliefs.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-card-border/60">
                  <Link
                    href="/book-trial"
                    className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-secondary hover:text-secondary-hover group"
                  >
                    <span>Book Your Private Adult Trial Session</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: CORE STRUCTURED COURSES IN BIRMINGHAM */}
        <section id="courses" className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Structured Syllabus
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Core Structured Courses Available in Birmingham
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                During your 3 Free Trial Lessons, our academic team assesses the student&apos;s current level and recommends a structured learning track with clear, measurable milestones.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Course 1 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <BookOpen className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Beginners
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">Noorani Qaida for Beginners</h3>

                  <p className="text-xs text-muted-text">
                    <strong className="text-foreground">Best For:</strong> Children (ages 4+) and adult beginners starting from scratch.
                  </p>

                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">What You Will Master:</strong> Arabic alphabet recognition, isolated and connected letter forms, short and long vowel signs (Harakat and Madd), Sukoon, Tashdeed, and exact throat and tongue articulation points (Makharij al-Huroof).
                  </p>

                  <p className="text-xs text-secondary font-semibold">
                    Average Completion Time: 2 to 4 months (at 3–5 lessons per week).
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-card-border/60">
                  <Link
                    href="/courses/noorani-qaida"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group/link"
                  >
                    <span>View Noorani Qaida Syllabus</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Course 2 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <BookOpen className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Fluency Track
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">Fluent Quran Reading (Nazirah)</h3>

                  <p className="text-xs text-muted-text">
                    <strong className="text-foreground">Best For:</strong> Students who have completed Noorani Qaida or can recognise letters but read hesitantly.
                  </p>

                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">What You Will Master:</strong> Transitioning smoothly to the full Mushaf, connecting words across full verses without breaking breath improperly, mastering stopping and starting rules (Waqf), and building steady recitation fluency.
                  </p>

                  <p className="text-xs text-secondary font-semibold">
                    Average Completion Time: 6 to 12 months.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-card-border/60">
                  <Link
                    href="/courses/quran-reading"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group/link"
                  >
                    <span>View Quran Reading Syllabus</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Course 3 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <Sparkles className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Intermediate
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">Applied Tajweed-ul-Quran Course</h3>

                  <p className="text-xs text-muted-text">
                    <strong className="text-foreground">Best For:</strong> Intermediate readers who want to beautify their recitation and eliminate hidden pronunciation mistakes.
                  </p>

                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">What You Will Master:</strong> Practical and theoretical mastery of Noon Sakinah and Tanween (Izhar, Idghaam, Iqlab, Ikhfa), Meem Sakinah, Ghunnah nasalisation timings, Qalqalah echoing letters, Heavy and Light letters (Tafkheem &amp; Tarqeeq), and Sifaat al-Huroof.
                  </p>

                  <p className="text-xs text-secondary font-semibold">
                    Average Completion Time: 6 to 8 months.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-card-border/60">
                  <Link
                    href="/courses/quran-with-tajweed"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group/link"
                  >
                    <span>View Tajweed Syllabus</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Course 4 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <Award className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-bold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full">
                      Memorisation
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">Hifz-ul-Quran (Structured Quran Memorisation)</h3>

                  <p className="text-xs text-muted-text">
                    <strong className="text-foreground">Best For:</strong> Dedicated children, teenagers, and adults aiming to memorise Juz Amma, selected Surahs (such as Surah Al-Mulk, Yaseen, Al-Kahf, and Al-Baqarah), or the complete Holy Quran.
                  </p>

                  <div className="text-xs sm:text-sm text-muted-text space-y-1.5 leading-relaxed">
                    <strong className="text-foreground block">What You Will Master:</strong>
                    <p className="text-xs">Our certified Huffaz utilise the proven three-tier classical retention system:</p>
                    <ul className="space-y-1 pl-2 text-[11px] sm:text-xs">
                      <li>• <strong>Sabaq (New Lesson):</strong> Daily memorisation of new verses with flawless Tajweed verified line-by-line during the live class.</li>
                      <li>• <strong>Sabqi (Recent Revision):</strong> Reciting the last 7 to 15 days of memorised portions to lock them into medium-term memory.</li>
                      <li>• <strong>Manzil (Cumulative Revision):</strong> Systematic rotation of previously completed Juz so older memorisation is never forgotten.</li>
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-card-border/60">
                  <Link
                    href="/courses/hifz-ul-quran"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group/link"
                  >
                    <span>View Hifz-ul-Quran Programme</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Course 5 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <GraduationCap className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Tarbiyah &amp; Fiqh
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">Islamic Studies &amp; Essential Fiqh (UK Curriculum Aligned)</h3>

                  <p className="text-xs text-muted-text">
                    <strong className="text-foreground">Best For:</strong> Primary and secondary school children growing up in the UK.
                  </p>

                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">What You Will Master:</strong> Age-graded modules taught in clear, relatable English covering the Five Pillars of Islam, Six Articles of Faith (Aqeedah), Taharah (Wudu and cleanliness), practical Salah training, stories of the Prophets, the Seerah of Prophet Muhammad ﷺ, and navigating modern British school life with strong Islamic identity and respect.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-card-border/60">
                  <Link
                    href="/courses/islamic-studies"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group/link"
                  >
                    <span>View Islamic Studies Syllabus</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Course 6 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <BookOpen className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Understanding
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">Quran Translation &amp; Tafseer</h3>

                  <p className="text-xs text-muted-text">
                    <strong className="text-foreground">Best For:</strong> Teenagers, university students, and adults seeking deep spiritual connection.
                  </p>

                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">What You Will Master:</strong> Word-by-word Quranic vocabulary, historical context of revelation (Asbab al-Nuzul), and classical scholarly commentary explained in accessible modern English so you can reflect upon the verses recited in daily prayers and Ramadan Taraweeh.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-card-border/60">
                  <Link
                    href="/courses/quran-tafseer"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group/link"
                  >
                    <span>View Translation &amp; Tafseer Details</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: FEMALE QURAN TEACHERS SECTION */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Comfort, Modesty &amp; Privacy
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Certified Female Quran Teachers (Ustadhas &amp; Alimas) for Birmingham Sisters &amp; Children
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />

                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  We understand that many mothers, teenage sisters, and adult women across Birmingham strongly prefer learning with a qualified female Quran tutor in a completely private setting. Similarly, many parents find that young children (ages 4 to 8) respond best to the patient, nurturing teaching style of an experienced female instructor.
                </p>

                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  OQTutor maintains a dedicated faculty of verified Female Quran Scholars (Alimas, Hafizas, and Qariahs):
                </p>

                <div className="space-y-4 pt-2">
                  <div className="glass p-5 rounded-2xl border border-card-border flex items-start space-x-3.5">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm font-bold text-foreground block mb-1">
                        100% Private Camera-Off Option for Sisters:
                      </strong>
                      <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        Adult female students can study with complete peace of mind in private one-to-one virtual rooms where no male staff or students ever have access.
                      </span>
                    </div>
                  </div>

                  <div className="glass p-5 rounded-2xl border border-card-border flex items-start space-x-3.5">
                    <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm font-bold text-foreground block mb-1">
                        Fluent English &amp; Multilingual Support:
                      </strong>
                      <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        Our female tutors speak clear, fluent English for UK-born children, while also offering instruction in Urdu, Mirpuri/Punjabi, Pashto, Bengali, Somali, and Arabic for mothers and elders who prefer learning in their native language.
                      </span>
                    </div>
                  </div>

                  <div className="glass p-5 rounded-2xl border border-card-border flex items-start space-x-3.5">
                    <HeartHandshake className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-sm font-bold text-foreground block mb-1">
                        Specialised Early-Years Training:
                      </strong>
                      <span className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        Trained to keep young children engaged using digital rewards, gentle repetition, and interactive whiteboard games.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/courses/female-quran-teacher"
                    className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all duration-300"
                  >
                    <span>Explore Female Quran Teacher Programme →</span>
                  </Link>
                </div>
              </div>

              {/* Visual Box */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border shadow-xl space-y-6 bg-white dark:bg-slate-900">
                    <div className="flex items-center space-x-4">
                      <div className="p-3.5 bg-primary/10 text-primary rounded-2xl">
                        <Users className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Verified Female Scholars</h4>
                        <p className="text-xs text-muted-text">Alimas, Hafizas &amp; Certified Qariahs</p>
                      </div>
                    </div>
                    
                    <div className="h-px bg-card-border w-full" />

                    <div className="space-y-3 text-xs sm:text-sm text-foreground/80">
                      <div className="flex items-start space-x-2.5">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Dedicated female coordinator available on WhatsApp</span>
                      </div>
                      <div className="flex items-start space-x-2.5">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Strict safeguarding and audio/video privacy safeguards</span>
                      </div>
                      <div className="flex items-start space-x-2.5">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Flexible timings to fit around Birmingham school runs</span>
                      </div>
                      <div className="flex items-start space-x-2.5">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>Gentle, encouraging methods for sisters of all ages</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/15 text-center">
                      <p className="text-xs text-muted-text">
                        Request a female tutor during your 3 Free Trial registration with zero hassle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: SAFEGUARDING, VETTING & NAMED TUTOR PROFILES */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Strict Quality &amp; Child Safety Standards
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Vetted, Safeguarding-Trained Tutors You Can Trust
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                When inviting an online tutor into your child&apos;s weekly routine, safety and academic competence are non-negotiable. Unlike open tutor marketplaces where anyone can create a profile, less than 1 in 10 applicants pass OQTutor&apos;s rigorous 4-stage recruitment process:
              </p>
            </div>

            {/* 4-Stage Vetting Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <Award className="h-5 w-5" />
                  <span>Stage 1</span>
                </div>
                <h3 className="text-base font-bold text-foreground">Academic &amp; Ijazah Verification</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Every tutor holds verified credentials in Tajweed, Qirat, or Islamic Sciences from reputable Islamic institutions, alongside tested recitation proficiency.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Stage 2</span>
                </div>
                <h3 className="text-base font-bold text-foreground">Identity &amp; Background Vetting</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  All instructors undergo strict identity verification, background screening, and child safeguarding orientation aligned with UK online tutoring safety expectations.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <Users className="h-5 w-5" />
                  <span>Stage 3</span>
                </div>
                <h3 className="text-base font-bold text-foreground">English Communication Assessment</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Tutors are tested to ensure they can explain complex Tajweed concepts clearly to British-born children without communication barriers.
                </p>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border space-y-3">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <CheckCircle className="h-5 w-5" />
                  <span>Stage 4</span>
                </div>
                <h3 className="text-base font-bold text-foreground">Ongoing Quality Supervision</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Our academic supervisors periodically monitor sessions and review monthly student progress logs to ensure high teaching standards are maintained in every lesson.
                </p>
              </div>
            </div>

            {/* Named Senior UK Tutors */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  Meet Some of Our Senior UK-Schedule Tutors
                </h3>
                <div className="h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Tutor 1 */}
                <div className="glass p-6 rounded-3xl border border-card-border flex items-start space-x-4 hover:border-primary/40 transition-all">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden shrink-0 border border-card-border shadow-sm">
                    <Image
                      src="/tutors/qari_saad_tariq.png"
                      alt="Ustadh Hafiz Tariq M. - Senior UK Quran Tutor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-foreground">Ustadh Hafiz Tariq M.</h4>
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full inline-block">
                      11+ Years Experience
                    </span>
                    <p className="text-xs text-muted-text leading-relaxed pt-1">
                      Certified Qari and Hafiz-ul-Quran specialising in Hifz-ul-Quran, Advanced Tajweed, and teenage mentorship. Fluent in English, Urdu, and Arabic.
                    </p>
                  </div>
                </div>

                {/* Tutor 2 */}
                <div className="glass p-6 rounded-3xl border border-card-border flex items-start space-x-4 hover:border-primary/40 transition-all">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden shrink-0 border border-card-border shadow-sm">
                    <Image
                      src="/tutors/ustadha_maryam_siddiqui.jpg"
                      alt="Ustadha Maryam A. - Senior Female Quran Tutor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-foreground">Ustadha Maryam A.</h4>
                    </div>
                    <span className="text-[11px] font-bold text-secondary bg-secondary/10 border border-secondary/20 px-2.5 py-0.5 rounded-full inline-block">
                      9+ Years Experience
                    </span>
                    <p className="text-xs text-muted-text leading-relaxed pt-1">
                      Alima graduate and Tajweed specialist focusing on Noorani Qaida for young beginners (ages 4–9) and adult sisters&apos; recitation classes. Fluent in English and Urdu.
                    </p>
                  </div>
                </div>

                {/* Tutor 3 */}
                <div className="glass p-6 rounded-3xl border border-card-border flex items-start space-x-4 hover:border-primary/40 transition-all">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden shrink-0 border border-card-border shadow-sm">
                    <Image
                      src="/tutor-bilal.jpg"
                      alt="Ustadh Bilal K. - UK Quran and Islamic Studies Tutor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-foreground">Ustadh Bilal K.</h4>
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full inline-block">
                      8+ Years Experience
                    </span>
                    <p className="text-xs text-muted-text leading-relaxed pt-1">
                      Specialist in basic-to-intermediate Quran reading, Salah instruction, and Islamic Studies for primary and secondary school boys. Fluent in English and Punjabi.
                    </p>
                  </div>
                </div>

                {/* Tutor 4 */}
                <div className="glass p-6 rounded-3xl border border-card-border flex items-start space-x-4 hover:border-primary/40 transition-all">
                  <div className="relative h-16 w-16 rounded-2xl overflow-hidden shrink-0 border border-card-border shadow-sm">
                    <Image
                      src="/tutors/ustadha_zainab_bibi.png"
                      alt="Ustadha Zainab H. - Female Hafiza and Tajweed Scholar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-foreground">Ustadha Zainab H.</h4>
                    </div>
                    <span className="text-[11px] font-bold text-secondary bg-secondary/10 border border-secondary/20 px-2.5 py-0.5 rounded-full inline-block">
                      10+ Years Experience
                    </span>
                    <p className="text-xs text-muted-text leading-relaxed pt-1">
                      Certified Hafiza and Ijazah holder teaching advanced sisters&apos; Tajweed, Hifz revision, and Tafseer. Fluent in English and Arabic.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7: LOCAL BIRMINGHAM POSTCODES & WEST MIDLANDS COVERAGE */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Local West Midlands Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Serving Every Neighbourhood Across Birmingham &amp; The West Midlands
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Because OQTutor operates 100% online with automatic GMT and BST (British Summer Time) clock synchronisation, your family can access top-tier Quranic education regardless of which Birmingham postcode you call home:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="glass p-6 rounded-3xl border border-card-border space-y-3 hover:border-primary/40 transition-all">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Inner-City Hubs</span>
                </div>
                <h3 className="text-base font-bold text-foreground">East &amp; Inner-City Birmingham</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Alum Rock (B8), Saltley, Washwood Heath, Ward End, Small Heath (B10), Bordesley Green (B9), and Stechford.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border space-y-3 hover:border-primary/40 transition-all">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>South Birmingham</span>
                </div>
                <h3 className="text-base font-bold text-foreground">South-East &amp; South Birmingham</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Sparkbrook (B11), Sparkhill, Moseley (B13), Kings Heath (B14), Hall Green (B28), Billesley, Yardley, Acocks Green, and Sheldon.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border space-y-3 hover:border-primary/40 transition-all">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>Central &amp; North</span>
                </div>
                <h3 className="text-base font-bold text-foreground">Central, West &amp; North Birmingham</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Aston (B6), Lozells, Handsworth (B20/B21), Perry Barr, Edgbaston (B15), Harborne, Selly Oak, Quinton, Erdington, and Sutton Coldfield.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border space-y-3 hover:border-primary/40 transition-all">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>West Midlands Region</span>
                </div>
                <h3 className="text-base font-bold text-foreground">Wider West Midlands &amp; Surrounds</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Solihull, Shirley, Smethwick, West Bromwich, Walsall, Dudley, Wolverhampton, Halesowen, and Coventry.
                </p>
              </div>

            </div>

            <div className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/20 text-center max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm text-muted-text">
                No matter where you live in the West Midlands, our virtual classroom connects your family directly to qualified Quran teachers without bus routes or congested roads.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: TRANSPARENT UK PRICING PLANS */}
        <section id="pricing" className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.015]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Simple Monthly GBP Plans
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Transparent UK Pricing Plans (Billed in £ GBP)
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                We believe high-quality Quranic education should be accessible and affordable for every family in Birmingham. We charge zero registration fees, require no long-term binding contracts, and offer automatic sibling discounts for families enrolling two or more children.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              
              {/* Plan 1 */}
              <div className="glass rounded-3xl border border-card-border p-7 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Weekend / Lite Plan</h3>
                  <span className="text-xs font-semibold text-primary block mb-3">2 Days / Week</span>
                  
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-foreground">£18</span>
                    <span className="text-xs text-muted-text ml-1.5">/ month</span>
                  </div>
                  <span className="text-xs font-medium text-foreground bg-foreground/[0.04] px-2.5 py-1 rounded-lg inline-block mb-4">
                    8 Lessons (30 mins each)
                  </span>

                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong>Best For:</strong> Busy schedules, Saturday &amp; Sunday mornings, or adult refreshers.
                  </p>

                  <div className="h-px bg-card-border w-full mb-4" />

                  <ul className="space-y-2.5 text-xs text-foreground/80">
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>1-to-1 live private tutor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Free digital PDF textbooks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Monthly progress review</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-card-border/60">
                  <Link
                    href="/book-trial"
                    className="block text-center w-full py-3 px-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs font-bold transition-all border border-card-border"
                  >
                    Start 3 Free Trial Classes
                  </Link>
                </div>
              </div>

              {/* Plan 2 */}
              <div className="glass rounded-3xl border border-card-border p-7 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Starter Plan</h3>
                  <span className="text-xs font-semibold text-primary block mb-3">3 Days / Week</span>
                  
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-foreground">£24</span>
                    <span className="text-xs text-muted-text ml-1.5">/ month</span>
                  </div>
                  <span className="text-xs font-medium text-foreground bg-foreground/[0.04] px-2.5 py-1 rounded-lg inline-block mb-4">
                    12 Lessons (30 mins each)
                  </span>

                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong>Best For:</strong> Steady after-school progress in Noorani Qaida &amp; Tajweed.
                  </p>

                  <div className="h-px bg-card-border w-full mb-4" />

                  <ul className="space-y-2.5 text-xs text-foreground/80">
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>1-to-1 live private tutor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Free digital PDF textbooks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Monthly progress review</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-card-border/60">
                  <Link
                    href="/book-trial"
                    className="block text-center w-full py-3 px-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs font-bold transition-all border border-card-border"
                  >
                    Start 3 Free Trial Classes
                  </Link>
                </div>
              </div>

              {/* Plan 3 - Most Popular */}
              <div className="glass rounded-3xl border-2 border-primary bg-primary/[0.03] p-7 flex flex-col justify-between shadow-xl relative scale-100 lg:scale-105 z-10">
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Standard Plan</h3>
                  <span className="text-xs font-semibold text-primary block mb-3">4 Days / Week</span>
                  
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-foreground">£30</span>
                    <span className="text-xs text-muted-text ml-1.5">/ month</span>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-lg inline-block mb-4">
                    16 Lessons (30 mins each)
                  </span>

                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong>Best For:</strong> Fast-track Quran reading fluency + Islamic Studies.
                  </p>

                  <div className="h-px bg-card-border w-full mb-4" />

                  <ul className="space-y-2.5 text-xs text-foreground/80">
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>1-to-1 live private tutor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Free digital PDF textbooks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Monthly progress review</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Flexible half-term pausing</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-card-border/60">
                  <Link
                    href="/book-trial"
                    className="block text-center w-full py-3 px-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    Start 3 Free Trial Classes
                  </Link>
                </div>
              </div>

              {/* Plan 4 */}
              <div className="glass rounded-3xl border border-card-border p-7 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Intensive / Hifz Plan</h3>
                  <span className="text-xs font-semibold text-primary block mb-3">5 Days / Week</span>
                  
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-foreground">£35</span>
                    <span className="text-xs text-muted-text ml-1.5">/ month</span>
                  </div>
                  <span className="text-xs font-medium text-foreground bg-foreground/[0.04] px-2.5 py-1 rounded-lg inline-block mb-4">
                    20 Lessons (30 mins each)
                  </span>

                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong>Best For:</strong> Daily weekday continuity, Hifz memorisation &amp; beginners.
                  </p>

                  <div className="h-px bg-card-border w-full mb-4" />

                  <ul className="space-y-2.5 text-xs text-foreground/80">
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>1-to-1 live private tutor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Free digital PDF textbooks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <span>Monthly progress review</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-card-border/60">
                  <Link
                    href="/book-trial"
                    className="block text-center w-full py-3 px-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs font-bold transition-all border border-card-border"
                  >
                    Start 3 Free Trial Classes
                  </Link>
                </div>
              </div>

            </div>

            {/* Pricing Footer Notes */}
            <div className="mt-12 glass p-6 sm:p-8 rounded-3xl border border-card-border max-w-4xl mx-auto space-y-4">
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text leading-relaxed">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Every Plan Includes:</strong> 3 Free Trial Lessons (No card required), 1-to-1 live tutor, free PDF digital Qaida/Quran textbooks, monthly parent progress reports, and free holiday pausing during Birmingham City Council school half-terms, Easter, Christmas, Ramadan, and Eid breaks.
                </p>
              </div>
              <div className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text leading-relaxed">
                <HeartHandshake className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <p>
                  <strong className="text-foreground">Family &amp; Sibling Discount:</strong> Receive 10% to 15% off when enrolling multiple children from the same household.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 9: HOW TO START (3-STEP PROCESS) */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Quick &amp; Risk-Free Onboarding
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How to Start Your 3 Free Trial Classes in 3 Simple Steps
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Step 1 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all relative">
                <div>
                  <span className="text-4xl font-black text-primary/20 block mb-4">
                    01
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Step 01: Book Your 3 Free Lessons Online
                  </h3>
                  <p className="text-xs font-semibold text-secondary mb-4">
                    (Takes less than 60 seconds — no credit card required)
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Fill out our quick trial form or message our UK support team on WhatsApp. Let us know the student&apos;s age, current reading level, preferred days/times (GMT/BST), and whether you prefer a male or female Quran tutor.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all relative">
                <div>
                  <span className="text-4xl font-black text-primary/20 block mb-4">
                    02
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Step 02: Meet Your Assigned Tutor for 3 Live Classes
                  </h3>
                  <p className="text-xs font-semibold text-secondary mb-4">
                    (Experience our interactive teaching style risk-free)
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Join three full 1-to-1 trial sessions over Zoom, Microsoft Teams, or our virtual classroom using any laptop, tablet, iPad, or smartphone. Meet your teacher, test the audio/screen-sharing tools, and receive an initial baseline assessment.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all relative">
                <div>
                  <span className="text-4xl font-black text-primary/20 block mb-4">
                    03
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    Step 03: Choose Your Monthly GBP Plan &amp; Begin
                  </h3>
                  <p className="text-xs font-semibold text-secondary mb-4">
                    (Flexible rolling monthly subscription — cancel anytime)
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Once you and your child are 100% happy with your assigned tutor, select a monthly plan starting from just £18/month and begin your structured Quran learning journey.
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-12 text-center">
              <Link
                href="/book-trial"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Start Step 01: Book 3 Free Lessons</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 10: BIRMINGHAM PARENT & STUDENT TESTIMONIALS */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Trusted Across Birmingham
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                What Birmingham Parents &amp; Students Say About OQTutor
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Testimonial 1 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all space-y-6">
                <div>
                  <div className="flex items-center space-x-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 mb-2" />
                  <p className="text-xs sm:text-sm text-muted-text italic leading-relaxed">
                    &ldquo;Living near Stratford Road in Sparkhill, taking my two boys to the local mosque at 5 PM in winter traffic was becoming impossible alongside my work hours. We switched to OQTutor eight months ago after trying the 3 free lessons. My 6-year-old finished his Noorani Qaida in three months, and my 9-year-old now recites Juz Amma with proper Tajweed. Having the full 30 minutes one-to-one with Ustadh Bilal made all the difference.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60">
                  <strong className="text-xs sm:text-sm font-bold text-foreground block">
                    Brother Kamran A.
                  </strong>
                  <span className="text-[11px] text-muted-text">Parent in Sparkhill, Birmingham (B11)</span>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all space-y-6">
                <div>
                  <div className="flex items-center space-x-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 mb-2" />
                  <p className="text-xs sm:text-sm text-muted-text italic leading-relaxed">
                    &ldquo;I wanted a gentle, English-speaking female Quran teacher for my 7-year-old daughter in Hall Green. Ustadha Maryam has been a blessing. My daughter actually looks forward to her 4:30 PM class after school, and I love that I can sit next to her in our living room and listen to every word.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60">
                  <strong className="text-xs sm:text-sm font-bold text-foreground block">
                    Sister Nadia R.
                  </strong>
                  <span className="text-[11px] text-muted-text">Mother in Hall Green, Birmingham (B28)</span>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all space-y-6">
                <div>
                  <div className="flex items-center space-x-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/30 mb-2" />
                  <p className="text-xs sm:text-sm text-muted-text italic leading-relaxed">
                    &ldquo;As a doctor working irregular shifts in Edgbaston, I could never commit to a fixed weekly circle at the masjid. OQTutor lets me book morning or late-evening one-to-one Tajweed lessons around my hospital rota. My recitation in Salah has improved massively.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60">
                  <strong className="text-xs sm:text-sm font-bold text-foreground block">
                    Dr. Usman M.
                  </strong>
                  <span className="text-[11px] text-muted-text">Adult Student in Edgbaston, Birmingham (B15)</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 11: FREQUENTLY ASKED QUESTIONS (BIRMINGHAM) */}
        <section id="faq" className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Got Questions?
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions (Birmingham Online Quran Classes)
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {birminghamFaqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-card-border rounded-2xl glass p-5 sm:p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md [&_summary::-webkit-details-marker]:hidden bg-white/70 dark:bg-slate-900/50"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-foreground cursor-pointer select-none list-none">
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
                      <span className="leading-snug">{faq.question}</span>
                    </div>
                    <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>
                  <p className="mt-4 text-xs sm:text-sm text-muted-text leading-relaxed font-normal pl-8 border-t border-card-border/40 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 12: FINAL CTA BANNER & INTERNAL LINKS */}
        <section className="py-20 border-t border-card-border/40 bg-foreground/[0.02]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 sm:p-14 rounded-3xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 shadow-2xl text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Ready to Transform Your Family&apos;s Quran Learning in Birmingham?
              </h2>
              <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Join hundreds of UK families learning the Holy Quran from home with confidence, proper Tajweed, and complete peace of mind.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-trial"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full sm:w-auto transform hover:-translate-y-0.5"
                >
                  <span>Book Your 3 Free Trial Lessons Now</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/locations/uk"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-sm font-bold transition-all w-full sm:w-auto"
                >
                  <span>Explore All UK Locations</span>
                </Link>
              </div>

              {/* Quick links to core courses */}
              <div className="pt-6 border-t border-card-border/50">
                <span className="text-xs font-semibold text-muted-text block mb-3">
                  Popular courses for Birmingham students:
                </span>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link
                    href="/courses/noorani-qaida"
                    className="text-xs text-primary hover:underline font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10"
                  >
                    Noorani Qaida
                  </Link>
                  <Link
                    href="/courses/quran-reading"
                    className="text-xs text-primary hover:underline font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10"
                  >
                    Quran Reading
                  </Link>
                  <Link
                    href="/courses/quran-with-tajweed"
                    className="text-xs text-primary hover:underline font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10"
                  >
                    Tajweed Course
                  </Link>
                  <Link
                    href="/courses/hifz-ul-quran"
                    className="text-xs text-primary hover:underline font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10"
                  >
                    Hifz-ul-Quran
                  </Link>
                  <Link
                    href="/courses/female-quran-teacher"
                    className="text-xs text-primary hover:underline font-medium px-3 py-1 rounded-full bg-primary/5 border border-primary/10"
                  >
                    Female Quran Teachers
                  </Link>
                </div>
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
