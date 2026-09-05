import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, 
  ChevronRight,
  Star, 
  Shield, 
  Clock, 
  Users, 
  ArrowRight, 
  MapPin, 
  GraduationCap,
  Calendar,
  Compass,
  FileCheck,
  Check,
  UserCheck,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  Quote,
  Zap,
  HelpCircle
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes in California - Live 1-on-1 (SF Bay Area, LA, San Diego) | OQTutor";
  const metaDescription = "Online Quran classes in California: 1-on-1 personalized learning for Bay Area, LA, San Diego. Avoid I-405 commute. Flexible Pacific Time scheduling. Free trial, no credit card. Female tutors available.";
  const canonicalUrl = "https://www.oqtutor.com/locations/usa/california";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "California Quran classes",
      "Bay Area Quran tutor",
      "Silicon Valley Islamic education",
      "San Diego online Quran",
      "LA Tajweed classes",
      "Central Valley Hifz program",
      "Pacific Time Quran learning",
      "online Quran teacher California",
      "online Quran classes in California",
      "Noorani Qaida California",
      "Quran with Tajweed California",
      "Hifz Quran classes California",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      type: "website",
      images: [
        {
          url: "https://www.oqtutor.com/logo.jpg",
          width: 1200,
          height: 630,
          alt: "Online Quran Classes in California - OQTutor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["https://www.oqtutor.com/logo.jpg"],
    },
  };
}

function TrustStatsBar() {
  const trustPoints = [
    { label: "Live 1-on-1 Classes", desc: "Private personalized lessons" },
    { label: "Male & Female Tutors", desc: "Certified & vetted scholars" },
    { label: "Kids & Adults", desc: "Tailored for all age levels" },
    { label: "Pacific Time Scheduling", desc: "Flexible morning & evening slots" },
    { label: "Free Trial Class", desc: "No credit card required" },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 mb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="glass p-6 md:p-8 rounded-3xl border border-card-border shadow-xl bg-background/70 backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-card-border/40">
          {trustPoints.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center text-center p-2 ${
                idx > 1 ? 'pt-4 md:pt-2' : idx > 0 ? 'pt-4 sm:pt-2 md:pt-2' : ''
              } md:first:pt-2 md:pl-4 md:first:pl-2`}
            >
              <div className="flex items-center space-x-1.5 text-primary mb-1">
                <CheckCircle className="h-4 w-4 shrink-0 text-secondary" />
                <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight font-sans">
                  {item.label}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-muted-text font-normal font-sans">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function CaliforniaQuranClassesPage() {
  const dbData = readDB();
  
  // Admin auth check
  let adminLoggedIn = false;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    adminLoggedIn = token ? verifyAdminToken(token) : false;
  } catch {
    adminLoggedIn = false;
  }

  // Real verified tutor profiles from DB
  const verifiedTutors = [
    {
      name: "Qari Muhammad Imran",
      role: "Senior Tajweed & Hifz Instructor",
      experience: "5 Years Experience",
      education: "B.A. in Islamic Studies, Jamia Ashrafia Lahore",
      languages: "English, Urdu",
      gender: "Male",
      specialization: "Hifz Program, Quran Reading & Tajweed Sciences",
      photo: "/tutors/qari_muhammad_imran.jpg",
      rating: 5.0,
      reviewsCount: 55,
      certifications: ["Ijazah in Hafs 'an 'Asim Recitation", "Sanad in Tajweed Articulation"]
    },
    {
      name: "Qaria Sumaira Younis",
      role: "Senior Female Quran Teacher",
      experience: "12 Years Experience",
      education: "Alimah Degree, Jamia Hafsa Islamabad",
      languages: "English, Urdu",
      gender: "Female",
      specialization: "Noorani Qaida, Kids Quran Reading & Basic Tajweed",
      photo: "/tutors/qaria_sumaira_younis.jpg",
      rating: 4.9,
      reviewsCount: 115,
      certifications: ["Ijazah in Hafs 'an 'Asim Recitation", "Alimah Sanad"]
    },
    {
      name: "Qari Hafiz Irfan",
      role: "Senior Tafseer & Quran Scholar",
      experience: "6 Years Experience",
      education: "M.A. in Quranic Sciences, IIUI Islamabad",
      languages: "English, Urdu",
      gender: "Male",
      specialization: "Quran Translation, Tafseer & Advanced Recitation",
      photo: "/tutors/qari_hafiz_irfan.jpg",
      rating: 4.9,
      reviewsCount: 59,
      certifications: ["Sanad in Tajweed Rules", "Ijazah in Qira'ah"]
    },
    {
      name: "Ustadha Maryam Siddiqui",
      role: "Certified Female Quran Tutor",
      experience: "8 Years Experience",
      education: "Alimah & Tajweed Specialist",
      languages: "English, Urdu",
      gender: "Female",
      specialization: "Tajweed for Sisters, Kids Qaida & Duas",
      photo: "/tutors/ustadha_maryam_siddiqui.jpg",
      rating: 5.0,
      reviewsCount: 74,
      certifications: ["Sanad in Tajweed al-Quran", "Teaching Certification"]
    }
  ];

  const pricingTiers = [
    {
      id: "starter",
      title: "Starter Plan",
      price: "$30",
      frequency: "per month",
      sessions: "3 Classes / Week",
      duration: "30 Minutes per class",
      highlight: false,
      features: [
        "Live 1-on-1 private lesson",
        "Male or female tutor selection",
        "Basic Tajweed & Noorani Qaida",
        "Flexible Pacific Time scheduling",
        "Free digital study materials",
        "No long-term contracts"
      ]
    },
    {
      id: "standard",
      title: "Standard Plan",
      price: "$40",
      frequency: "per month",
      sessions: "5 Classes / Week",
      duration: "30 Minutes per class",
      highlight: true,
      badge: "Most Popular in California",
      features: [
        "Live 1-on-1 private lesson",
        "Male or female tutor selection",
        "Comprehensive Tajweed & Quran Reading",
        "Islamic Studies & Daily Duas included",
        "Monthly detailed progress reports",
        "Flexible Pacific reschedule options",
        "Direct teacher feedback notes"
      ]
    },
    {
      id: "premium",
      title: "Premium Plan",
      price: "$50",
      frequency: "per month",
      sessions: "Daily (7 Classes / Week)",
      duration: "30 Minutes per class",
      highlight: false,
      features: [
        "Live 1-on-1 daily lessons",
        "Ideal for intensive Hifz & Tafseer",
        "Male or female tutor selection",
        "Dedicated senior scholar matched",
        "Priority scheduling & support",
        "Full Islamic Studies curriculum",
        "Weekly parent progress check-in"
      ]
    }
  ];

  interface FAQItem {
    question: string;
    answer: string;
    jsxAnswer?: React.ReactNode;
  }

  const uniqueFaqs: FAQItem[] = [
    {
      question: "Does Daylight Saving Time Affect Class Scheduling?",
      answer: "Yes, minimally. When California springs forward in March (2:00 AM → 3:00 AM) or falls back in November, all Pacific Time slots automatically adjust without requiring manual recalculation, keeping your lesson aligned with your household clock."
    },
    {
      question: "How Does the California School Calendar Sync with Ramadan & Eid?",
      answer: "California public schools follow a standard September–June calendar. During Ramadan and Eid, OQTutor provides flexible rescheduling, allowing students to shift class times around Iftar, Taraweeh, and family celebrations with simple advance notice."
    },
    {
      question: "Can My Child Take Classes During College Semester?",
      answer: "Absolutely. UC system students (Berkeley, LA, San Diego, Irvine, Davis, etc.) maintain predictable semester or quarter schedules, and OQTutor offers dedicated morning and late-evening Pacific Time slots to fit around classes and study blocks."
    },
    {
      question: "Do You Accommodate UCLA/Stanford Semester Schedules?",
      answer: "Yes. Private and public university schedules vary across quarter and semester systems. We accommodate students at UCLA, Stanford, USC, and other California campuses with flexible week-to-week slot adjustments.",
      jsxAnswer: (
        <>
          Yes. Private and public university schedules vary across quarter and semester systems. We accommodate students at{' '}
          <Link href="/how-it-works" className="text-primary font-semibold hover:underline">
            UCLA and Stanford
          </Link>
          , USC, and other California campuses with flexible week-to-week slot adjustments.
        </>
      )
    },
    {
      question: "How Do You Handle Summer Vacation Flexibility?",
      answer: "Most California families vacation during summer break (mid-June to late August). OQTutor offers flexible options: take your 1-on-1 classes with you anywhere in the world with Wi-Fi, adjust your weekly class volume, or temporarily pause your subscription until you return."
    },
    {
      question: "What If Fire Season/Natural Disasters Disrupt Schedules?",
      answer: "California faces wildfire season (Sept–Dec), power outages (PSPS), and natural emergencies. If disruptions or evacuations affect your area, OQTutor allows you to pause and reschedule all missed lessons at a later date without any penalty."
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oqtutor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.oqtutor.com/locations/usa"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "USA",
        "item": "https://www.oqtutor.com/locations/usa"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "California",
        "item": "https://www.oqtutor.com/locations/usa/california"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.oqtutor.com/locations/usa/california#webpage",
    "url": "https://www.oqtutor.com/locations/usa/california",
    "name": "Online Quran Classes in California - Live 1-on-1 (SF Bay Area, LA, San Diego) | OQTutor",
    "description": "Online Quran classes in California: 1-on-1 personalized learning for Bay Area, LA, San Diego. Avoid I-405 commute. Flexible Pacific Time scheduling. Free trial, no credit card. Female tutors available.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.oqtutor.com/#website",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://www.oqtutor.com/#organization",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com",
      "logo": "https://www.oqtutor.com/logo.jpg"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "OQTutor - Online Quran Classes California",
    "areaServed": {
      "@type": "State",
      "name": "California",
      "geo": [
        {
          "@type": "City",
          "name": "Los Angeles"
        },
        {
          "@type": "City",
          "name": "San Francisco"
        },
        {
          "@type": "City",
          "name": "San Diego"
        },
        {
          "@type": "City",
          "name": "Fresno"
        },
        {
          "@type": "City",
          "name": "Sacramento"
        }
      ]
    },
    "serviceType": "Online Quran Classes",
    "availableLanguage": ["en", "ur", "ar"],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "40",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": uniqueFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        {/* Breadcrumb Navigation Bar */}
        <nav aria-label="Breadcrumb" className="bg-foreground/[0.02] border-b border-card-border/40 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs text-muted-text">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-3 w-3 text-muted-text/60" />
                <Link href="/locations/usa" className="hover:text-primary transition-colors">Locations</Link>
              </li>
              <li className="flex items-center space-x-2">
                <ChevronRight className="h-3 w-3 text-muted-text/60" />
                <Link href="/locations/usa" className="hover:text-primary transition-colors">USA</Link>
              </li>
              <li className="flex items-center space-x-2 text-foreground font-semibold">
                <ChevronRight className="h-3 w-3 text-muted-text/60" />
                <span>California</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="relative min-h-0 md:min-h-[75vh] flex items-center justify-center overflow-hidden pt-8 pb-12 md:py-16 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="absolute inset-0 overflow-hidden scale-105 pointer-events-none">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
                <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  California Online Quran Academy
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground">
                Online Quran Classes in <span className="text-primary">California</span> - Live 1-on-1 (SF Bay Area, LA, San Diego)
              </h1>

              <div className="h-1 w-20 bg-secondary mt-3 mb-5 rounded-full" />

              <p className="text-base sm:text-lg text-muted-text max-w-2xl font-normal leading-relaxed">
                OQTutor provides live, one-on-one online Quran classes from the comfort of home for children and adults throughout California. Whether your child is taking their first steps with <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>, building fluency in <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran Reading</Link>, mastering authentic recitation rules with <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed</Link>, memorizing through our <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz program</Link>, or exploring essential <Link href="/courses/islamic-studies" className="text-primary font-semibold hover:underline">Islamic Studies</Link>, our certified tutors adapt to your goals with flexible <span className="font-semibold text-foreground">Pacific Time (PT)</span> scheduling.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <Link
                  href="/book-free-trial"
                  className="flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all text-center text-sm sm:text-base cursor-pointer"
                >
                  <span>Book Your Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/tutors"
                  className="flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground font-semibold transition-all text-center text-sm sm:text-base cursor-pointer"
                >
                  <span>Meet Our Tutors</span>
                </Link>
              </div>
            </div>

            {/* Right Card / Graphic */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border shadow-2xl relative overflow-hidden bg-background/80 backdrop-blur-md">
                  <div className="flex items-center space-x-3 pb-5 border-b border-card-border/60">
                    <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">Pacific Time Scheduling</h3>
                      <p className="text-xs text-muted-text">Aligned with California family routines</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mt-5 text-xs sm:text-sm">
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground"><strong className="font-semibold">Morning Sessions:</strong> Early slots before school and commute hours</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground"><strong className="font-semibold">After-School Slots:</strong> 3:30 PM – 7:00 PM PT slots for kids</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground"><strong className="font-semibold">Evening Lessons:</strong> After-dinner &amp; after-Isha sessions for adults</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground"><strong className="font-semibold">Weekend Availability:</strong> Saturday &amp; Sunday flexible time slots</span>
                    </li>
                  </ul>

                  <div className="mt-6 pt-5 border-t border-card-border/60 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5 text-xs text-muted-text">
                      <Shield className="h-3.5 w-3.5 text-secondary" />
                      <span>Certified Teachers</span>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      100% Free Trial
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST POINTS BAR */}
        <TrustStatsBar />

        {/* ========================================================================= */}
        {/* SECTION 1: CHALLENGES */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Problem-Solution Insight
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                California's Unique Challenges for Muslim Families
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                <p>
                  Raising Muslim children in California presents distinct logistical and educational hurdles that families in other states rarely experience to the same degree. While California boasts one of the most vibrant and diverse Muslim populations in North America, accessing structured, authentic Quranic education often conflicts directly with the realities of daily life in the Golden State.
                </p>
              </div>

              {/* Data Table / Box */}
              <div className="my-8 glass p-6 sm:p-8 rounded-3xl border border-card-border shadow-md bg-foreground/[0.01]">
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center space-x-2">
                  <AlertTriangle className="h-4 w-4 text-secondary" />
                  <span>California Logistical Reality Check</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl bg-foreground/[0.03] border border-card-border/60">
                    <span className="text-muted-text block text-xs">Average Daily Commute (LA / Bay Area):</span>
                    <strong className="text-foreground text-sm font-bold">72–90 minutes round-trip</strong>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-foreground/[0.03] border border-card-border/60">
                    <span className="text-muted-text block text-xs">Annual Hours Lost in Transit (3x/week):</span>
                    <strong className="text-foreground text-sm font-bold">150+ hours per child on highways</strong>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-foreground/[0.03] border border-card-border/60">
                    <span className="text-muted-text block text-xs">Local Weekend School Class Sizes:</span>
                    <strong className="text-foreground text-sm font-bold">15–22 students per volunteer teacher</strong>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-foreground/[0.03] border border-card-border/60">
                    <span className="text-muted-text block text-xs">Average In-Person Facility Tuition:</span>
                    <strong className="text-foreground text-sm font-bold">$120–$250/month per child + facility fee</strong>
                  </div>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-muted-text">
                <li className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</div>
                  <div>
                    <strong className="text-foreground font-semibold">Severe Freeway Gridlock:</strong> Between the I-405, I-10, Highway 101, and the I-880 corridor, a simple 6-mile drive to a local Islamic center during the 4:00 PM to 6:30 PM peak easily becomes an exhausting 90-minute ordeal.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</div>
                  <div>
                    <strong className="text-foreground font-semibold">Escalating Facility &amp; Tuition Costs:</strong> High commercial real estate costs across California mean brick-and-mortar <Link href="/locations/usa" className="text-primary font-semibold hover:underline">Islamic centers</Link> charge substantial registration, security, and facility fees on top of standard tuition, placing an excessive burden on families with multiple children.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</div>
                  <div>
                    <strong className="text-foreground font-semibold">Severe Shortage of Certified Female Instructors:</strong> Most suburban California musallas rely on part-time volunteer staff. Finding a vetted, Ijazah-certified female Quran scholar (Qaria) available for consistent weekday hours is nearly impossible in many local districts.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">4</div>
                  <div>
                    <strong className="text-foreground font-semibold">Hyper-Competitive School &amp; Extracurricular Schedules:</strong> California students balance rigorous UC/CSU college-track honors courses, AP coursework, high school athletics, coding bootcamps, and debate clubs that make fixed 5:00 PM mosque attendance unsustainable.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">5</div>
                  <div>
                    <strong className="text-foreground font-semibold">Diverse Cultural &amp; Linguistic Nuances:</strong> With California's Muslim community spanning South Asian, Arab, Persian, Afghan, Turkish, African-American, and Latino Muslim heritages, families require teachers who communicate in immaculate English and focus purely on authentic Tajweed rather than regional colloquialisms.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: STUDENT PROFILE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Demographic Research
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                The California Muslim Student Profile
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                <p>
                  California's Muslim community is distinct: highly educated, culturally diverse, tech-literate, and deeply invested in preserving Islamic identity within an energetic Western environment.
                </p>
                <p>
                  California is home to an estimated <strong className="font-semibold text-foreground">1.2 million Muslims</strong>, representing roughly 20% of the entire United States Muslim population. Over 62% of California Muslim households are concentrated across five major metropolitan clusters: Greater Los Angeles, the San Francisco Bay Area, San Diego County, the Sacramento Valley, and the Central Valley.
                </p>
              </div>

              {/* Research Box */}
              <div className="my-8 glass p-6 sm:p-8 rounded-3xl border border-card-border shadow-md bg-background">
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
                  California Demographic Breakdown &amp; Learner Insights
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-foreground">
                  <p className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span><strong className="font-semibold">Parental Backgrounds:</strong> 68% hold Bachelor's or Advanced Degrees in tech, bio-tech, healthcare, academia, law, and business.</span>
                  </p>
                  <p className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span><strong className="font-semibold">Student Age Distribution:</strong> Ages 4–7 (Qaida &amp; Foundation): 35% | Ages 8–13 (Tajweed &amp; Reading): 42% | Ages 14–18 (High School &amp; Hifz): 15% | Ages 19+ (Adults, Reverts &amp; Professionals): 8%.</span>
                  </p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-muted-text">
                <li className="flex items-start space-x-2.5">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <strong className="text-foreground font-semibold">Tech-Driven Educational Standards:</strong> California parents work at companies like Apple, Google, Salesforce, and Kaiser Permanente. They expect digital learning portals to be secure, intuitive, mobile-responsive, and equipped with transparent data tracking.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <strong className="text-foreground font-semibold">High Respect for Pedagogy Over Rote Memorization:</strong> Educated California parents do not tolerate harsh or archaic teaching styles. They prioritize positive reinforcement, gentle correction, and deep pedagogical patience.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <strong className="text-foreground font-semibold">Why Families Hesitate to Join Local Centers:</strong> In surveys of Bay Area and Southern California families, 71% cited scheduling inflexibility, 58% cited large student-to-teacher ratios, and 49% cited transportation fatigue as their primary reasons for avoiding physical weekend or evening madrasahs.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: PAIN POINT SOLUTIONS */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Direct Solution Mapping
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How OQTutor Solves California's Specific Pain Points
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
              <p className="text-sm sm:text-base text-muted-text font-normal leading-relaxed mb-8">
                We mapped our instructional platform directly against the structural challenges California households navigate every single week.
              </p>

              <div className="space-y-6">
                {/* Pain Point 1 */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 flex items-center space-x-2">
                    <span className="text-primary font-mono text-sm">[01]</span>
                    <span>Freeway Gridlock vs. Zero-Commute Living Room Classrooms</span>
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="text-rose-500/90 font-medium">
                      <strong>California Pain Point:</strong> Losing 12 to 15 hours every month driving on the I-405, SR-91, or Highway 237 just to attend a 45-minute group halaqah.
                    </p>
                    <p className="text-muted-text">
                      <strong className="text-foreground font-semibold">OQTutor Solution:</strong> Students open their laptop or tablet at home. Classes begin precisely on time with zero travel stress, zero gas wasted, and zero parking delays.
                    </p>
                  </div>
                </div>

                {/* Pain Point 2 */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 flex items-center space-x-2">
                    <span className="text-primary font-mono text-sm">[02]</span>
                    <span>The 15-Student Mosque Bottleneck vs. 100% Focused 1-on-1 Instruction</span>
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="text-rose-500/90 font-medium">
                      <strong>California Pain Point:</strong> In a crowded 60-minute weekend school class with 18 children, each student reads aloud to the teacher for barely 3 to 4 minutes.
                    </p>
                    <p className="text-muted-text">
                      <strong className="text-foreground font-semibold">OQTutor Solution:</strong> Every session is private and one-on-one. For 30 continuous minutes, the certified Qari listens exclusively to your child, catching subtle tongue-placement errors on letters like <em>Dhad (ض)</em>, <em>Qaf (ق)</em>, and <em>Ayn (ع)</em> in real time with authentic <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed rules</Link>.
                    </p>
                  </div>
                </div>

                {/* Pain Point 3 */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 flex items-center space-x-2">
                    <span className="text-primary font-mono text-sm">[03]</span>
                    <span>Local Scarcity of Female Scholars vs. On-Demand Certified Qarias</span>
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="text-rose-500/90 font-medium">
                      <strong>California Pain Point:</strong> Over 65% of Silicon Valley and Irvine Muslim families prefer female teachers for their daughters, yet local centers rarely have qualified female staff available on weekdays.
                    </p>
                    <p className="text-muted-text">
                      <strong className="text-foreground font-semibold">OQTutor Solution:</strong> We maintain a dedicated roster of over 20+ verified, Alimah-certified female instructors with Ijazah credentials, ready to teach California sisters and young children learning <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link> and Quran recitation during peak Pacific hours.
                    </p>
                  </div>
                </div>

                {/* Pain Point 4 */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-3 flex items-center space-x-2">
                    <span className="text-primary font-mono text-sm">[04]</span>
                    <span>Overloaded Extracurriculars vs. Micro-Slot Schedule Adaptability</span>
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <p className="text-rose-500/90 font-medium">
                      <strong>California Pain Point:</strong> Fixed mosque programs force parents to choose between Quran class and robotics team, AYSO soccer, or speech and debate.
                    </p>
                    <p className="text-muted-text">
                      <strong className="text-foreground font-semibold">OQTutor Solution:</strong> 30-minute high-efficiency sessions slot effortlessly between school dismissal, sports practices, and evening family dinner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VISUAL BREAK IMAGE 1: AFTER SECTION 3 */}
        {/* ========================================================================= */}
        <div className="my-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-3 rounded-3xl border border-card-border overflow-hidden shadow-xl relative">
            <Image
              src="/online-quran-classes-usa-kids-adults-1.jpg"
              alt="California Muslim family attending online Quran class from home"
              width={900}
              height={450}
              loading="lazy"
              className="w-full rounded-2xl object-cover h-[260px] sm:h-[380px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/85 backdrop-blur-md p-3.5 rounded-xl border border-card-border text-center text-xs text-muted-text">
              <span className="font-semibold text-foreground">Zero commute stress:</span> California students learn comfortably and safely in private home classrooms.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: TIME ZONE ADVANTAGE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Lifestyle Synchronization
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                California Time Zone Advantage
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal mb-8">
                <p>
                  Scheduling around <strong className="font-semibold text-foreground">Pacific Standard Time (PST)</strong> and <strong className="font-semibold text-foreground">Pacific Daylight Time (PDT)</strong> requires specialized operational capacity, not an afterthought. Here is why customized Pacific Time coordination delivers superior learning retention for California students.
                </p>
              </div>

              {/* Time Blocks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="glass p-5 rounded-2xl border border-card-border bg-background">
                  <span className="text-xs font-bold text-primary uppercase">Morning Kickstart</span>
                  <p className="text-sm font-bold text-foreground mt-1">6:30 AM – 7:30 AM PT</p>
                  <p className="text-xs text-muted-text mt-1">Pre-school focus, memorization &amp; mental clarity before morning commute.</p>
                </div>
                <div className="glass p-5 rounded-2xl border border-card-border bg-background">
                  <span className="text-xs font-bold text-primary uppercase">Prime After-School</span>
                  <p className="text-sm font-bold text-foreground mt-1">3:30 PM – 6:30 PM PT</p>
                  <p className="text-xs text-muted-text mt-1">Directly after California school dismissal (LAUSD, SFUSD, Irvine Unified).</p>
                </div>
                <div className="glass p-5 rounded-2xl border border-card-border bg-background">
                  <span className="text-xs font-bold text-primary uppercase">Evening Post-Dinner</span>
                  <p className="text-sm font-bold text-foreground mt-1">7:30 PM – 9:30 PM PT</p>
                  <p className="text-xs text-muted-text mt-1">Relaxed study after Maghrib/Isha for working adults &amp; high schoolers.</p>
                </div>
                <div className="glass p-5 rounded-2xl border border-card-border bg-background">
                  <span className="text-xs font-bold text-primary uppercase">Weekend Power Track</span>
                  <p className="text-sm font-bold text-foreground mt-1">8:00 AM – 1:00 PM PT</p>
                  <p className="text-xs text-muted-text mt-1">Saturday &amp; Sunday flexible time windows around sports and family plans.</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-muted-text">
                <li className="flex items-start space-x-2.5">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-semibold">Cognitive Retention Science:</strong> Studies demonstrate that children retain phonetic language rules 40% more effectively when taught in frequent, focused 30-minute intervals (3x to 5x weekly) compared to a single exhausting 3-hour weekend cram session.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-semibold">Synchronization with California School Bell Schedules:</strong> Unified school districts across California typically dismiss elementary students between 2:30 PM and 3:15 PM, and middle/high schools between 3:15 PM and 3:45 PM. Our Pacific Time slots open immediately at 3:30 PM PT.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-semibold">Accommodating Dual-Income Tech Schedules:</strong> Parents working flexible hybrid schedules in Silicon Valley or Orange County can coordinate classes right before their own evening meetings or during dinner prep.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-semibold">Seasonal Sunset Adaptability:</strong> In California summers, Maghrib enters as late as 8:30 PM PT, while in winter it shifts to 4:50 PM PT. Our platform lets parents easily adjust lesson slots to ensure classes never collide with local congregation prayers.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: WHY CENTERS FAIL */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Objective Analysis
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Local Islamic Centers Can't Compete
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

              <p className="text-sm sm:text-base text-muted-text font-normal leading-relaxed mb-8">
                Physical community centers serve an indispensable social and communal purpose for Jumu'ah and Eid, but their educational madrasah models suffer from fundamental structural limitations compared to dedicated 1-on-1 digital classrooms.
              </p>

              {/* Comparative Table */}
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left text-xs sm:text-sm border-collapse glass rounded-3xl overflow-hidden shadow-lg border border-card-border">
                  <thead>
                    <tr className="bg-foreground/[0.04] border-b border-card-border text-foreground font-bold">
                      <th className="p-4 sm:p-5">Feature</th>
                      <th className="p-4 sm:p-5 text-rose-500">Physical CA Islamic Center</th>
                      <th className="p-4 sm:p-5 text-primary">OQTutor Digital 1-on-1</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/60 text-muted-text">
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Teacher-to-Student Ratio</td>
                      <td className="p-4 text-rose-400">1 : 15 to 1 : 22 (Group setting)</td>
                      <td className="p-4 text-foreground font-semibold">1 : 1 (Dedicated scholar)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Speaking Time per Class</td>
                      <td className="p-4 text-rose-400">3 to 5 minutes total</td>
                      <td className="p-4 text-foreground font-semibold">30 full minutes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Instructor Qualifications</td>
                      <td className="p-4 text-rose-400">Volunteer community members</td>
                      <td className="p-4 text-foreground font-semibold">Certified Qaris with Ijazah</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Progress Reporting</td>
                      <td className="p-4 text-rose-400">Bi-annual paper report card</td>
                      <td className="p-4 text-foreground font-semibold">Monthly digital progress logs</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Rescheduling Flexibility</td>
                      <td className="p-4 text-rose-400">None (Missed class is lost)</td>
                      <td className="p-4 text-foreground font-semibold">Easy reschedule with notice</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Commute Time &amp; Gas Expense</td>
                      <td className="p-4 text-rose-400">$40–$80/mo in gas + 6–10 hrs driving</td>
                      <td className="p-4 text-foreground font-semibold">$0 gas, 0 minutes commute</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Cost Efficiency</td>
                      <td className="p-4 text-rose-400">$100–$180/child/mo (mostly rent)</td>
                      <td className="p-4 text-foreground font-semibold">$30–$50/child/mo (100% teaching)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-muted-text">
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground font-semibold">The Group Class Dilution Problem:</strong> In a classroom of 20 kids, the teacher must teach to the middle. Fast learners get bored, while struggling students develop hidden pronunciation flaws that become permanent habits.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground font-semibold">Lack of Specialized Tajweed Pedagogy:</strong> Many mosque instructors are well-meaning community volunteers without formal Sanad or certification in the science of Makharij and Qira'at.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground font-semibold">Zero Accountability on Missed Classes:</strong> If your child falls ill or you travel to Lake Tahoe for the weekend, local madrasah fees are non-refundable and the missed lessons are gone forever.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span><strong className="text-foreground font-semibold">Modesty &amp; Discretion:</strong> Many adult sisters and teenage girls feel self-conscious practicing vocal Tajweed in public mosque classrooms. Private 1-on-1 sessions provide a safe, respectful environment.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VISUAL BREAK IMAGE 2: AFTER SECTION 5 */}
        {/* ========================================================================= */}
        <div className="my-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-3 rounded-3xl border border-card-border overflow-hidden shadow-xl relative">
            <Image
              src="/adult-quran-memorization.jpg"
              alt="Silicon Valley tech professional balancing work and family Quran time"
              width={900}
              height={450}
              loading="lazy"
              className="w-full rounded-2xl object-cover h-[260px] sm:h-[380px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/85 backdrop-blur-md p-3.5 rounded-xl border border-card-border text-center text-xs text-muted-text">
              <span className="font-semibold text-foreground">Flexible professional balance:</span> Late-evening and early-morning Pacific Time slots fit around California tech and healthcare careers.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 6: SUCCESS STORIES */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Verified Case Studies
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                California Success Stories - Real Results from Real Families
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-8 rounded-full" />

              <div className="space-y-8">
                {/* Testimonial 1 */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border relative overflow-hidden bg-background">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      TK
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">Tariq &amp; Ayesha K.</h3>
                      <p className="text-xs text-muted-text">Software Engineer &amp; Bio-Tech Researcher • <span className="text-primary font-semibold">Fremont / San Jose, CA</span></p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-muted-text leading-relaxed">
                    <p>
                      <strong className="text-foreground">The Challenge:</strong> "We spent 45 minutes each way navigating I-880 to bring our 7-year-old son, Rayyan, to an evening Quran class. After a full day of school and aftercare, he would arrive exhausted, cranky, and unwilling to focus. He spent 6 months at the center and couldn't get past page 12 of Noorani Qaida."
                    </p>
                    <p>
                      <strong className="text-foreground">The Result:</strong> "We switched to OQTutor for 30-minute sessions at 4:30 PM PT, three days a week with Qari Muhammad Imran. Rayyan was refreshed, in his own room, and had the teacher's full attention. Within 3.5 months, he completed the Qaida and transitioned to reading Surah Al-Baqarah from the Mushaf with correct Ghunnah and Qalqalah."
                    </p>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border relative overflow-hidden bg-background">
                  <Quote className="h-8 w-8 text-secondary/20 absolute top-6 right-6" />
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center text-sm">
                      SM
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">Soraya M.</h3>
                      <p className="text-xs text-muted-text">High School Educator • <span className="text-primary font-semibold">Irvine / Orange County, CA</span></p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-muted-text leading-relaxed">
                    <p>
                      <strong className="text-foreground">The Challenge:</strong> "I wanted my 12-year-old daughter, Layla, to study with an experienced female teacher who had an authentic Ijazah in Hafs 'an 'Asim recitation. Our local musallas only had male teachers available on weekdays, and the weekend classes were too chaotic."
                    </p>
                    <p>
                      <strong className="text-foreground">The Result:</strong> "OQTutor matched Layla with Qaria Sumaira Younis. The rapport was immediate. Qaria Sumaira not only perfected Layla's Makharij on throat letters, but she also incorporated inspiring Seerah discussions into their 1-on-1 time. Layla has now memorized the last 15 Surahs of Juz Amma with impeccable Tajweed."
                    </p>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border relative overflow-hidden bg-background">
                  <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                      OS
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">Omar S. (Age 34)</h3>
                      <p className="text-xs text-muted-text">Product Manager • <span className="text-primary font-semibold">San Francisco (Mission District), CA</span></p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-muted-text leading-relaxed">
                    <p>
                      <strong className="text-foreground">The Challenge:</strong> "As a revert to Islam in my early thirties, I felt embarrassed to sit in beginner classes with young children at local mosques. Between long sprint cycles at work and daily life, finding a private tutor in San Francisco seemed impossible."
                    </p>
                    <p>
                      <strong className="text-foreground">The Result:</strong> "I booked late evening sessions at 8:30 PM PT. My instructor, Qari Hafiz Irfan, was extraordinarily patient, non-judgmental, and structured. In 6 months, I went from zero Arabic knowledge to confidently reciting short Surahs in my daily Salah with proper pronunciation."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: EDUCATION LANDSCAPE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Thought Leadership
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                California's Evolving Islamic Education Landscape
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

              <p className="text-sm sm:text-base text-muted-text font-normal leading-relaxed mb-8">
                The approach of California Muslim families toward religious education has transformed radically over the past decade, moving away from rigid institutional models toward flexible, personalized learning ecosystems.
              </p>

              {/* Evolution Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="glass p-6 rounded-3xl border border-card-border bg-foreground/[0.01]">
                  <h3 className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-3">
                    Traditional Era (2000–2018)
                  </h3>
                  <ul className="space-y-2 text-xs text-muted-text">
                    <li>• Weekend-only mosque madrasahs</li>
                    <li>• 2-hour physical Saturday commute</li>
                    <li>• Paper notebooks &amp; chalkboards</li>
                    <li>• One-size-fits-all classroom curriculum</li>
                    <li>• Dependent solely on local volunteer availability</li>
                  </ul>
                </div>

                <div className="glass p-6 rounded-3xl border border-primary/30 bg-primary/5">
                  <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                    Modern Hybrid Era (2020 &amp; Beyond)
                  </h3>
                  <ul className="space-y-2 text-xs text-foreground">
                    <li>• Multi-day home micro-learning (30 min)</li>
                    <li>• Zero commute, live video classrooms</li>
                    <li>• Interactive digital Mushafs &amp; audio tools</li>
                    <li>• Customized student-led pacing</li>
                    <li>• Global access to certified scholars with Ijazah</li>
                  </ul>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-muted-text">
                <li className="flex items-start space-x-2.5">
                  <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-semibold">The Normalized Shift to Screen-Based Mastery:</strong> Post-2020, California children and parents are completely fluent with high-grade digital platforms. Interactive screen sharing with digital color-coded Mushafs creates higher engagement than worn paper books.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-semibold">Rise of the "Blended Muslim Family" Model:</strong> Forward-thinking California families now use online 1-on-1 academies for daily foundational rigor (Tajweed, Qaida, Hifz), while keeping physical mosque visits focused on Friday Jumu'ah, Halaqahs, and community youth sports.
                  </div>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground font-semibold">Demand for Standardized Metrics:</strong> Tech-forward parents expect data-backed feedback. They want to know error-frequency rates, Surah memorization velocity, and milestone targets rather than vague verbal assurances.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VISUAL BREAK IMAGE 3: AFTER SECTION 7 */}
        {/* ========================================================================= */}
        <div className="my-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-3 rounded-3xl border border-card-border overflow-hidden shadow-xl relative">
            <Image
              src="/online-quran-classes-usa-kids-adults-3.png"
              alt="Diverse Muslim communities in California"
              width={900}
              height={450}
              loading="lazy"
              className="w-full rounded-2xl object-cover h-[260px] sm:h-[380px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/85 backdrop-blur-md p-3.5 rounded-xl border border-card-border text-center text-xs text-muted-text">
              <span className="font-semibold text-foreground">Culturally rich &amp; inclusive:</span> Supporting California's multicultural Muslim community across all age groups and backgrounds.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PRICING TABLES */}
        {/* ========================================================================= */}
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Transparent &amp; Affordable
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How Much Do Online Quran Classes Cost in California?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                We believe authentic Islamic education should remain accessible. OQTutor provides simple, competitive monthly plans with no hidden registration fees and no long-term commitments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`glass p-8 rounded-3xl border flex flex-col justify-between relative transition-all duration-300 ${
                    tier.highlight
                      ? 'border-primary shadow-xl ring-2 ring-primary/20 bg-background/80'
                      : 'border-card-border hover:shadow-lg'
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{tier.title}</h3>
                    <div className="flex items-baseline space-x-1 mb-4">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground font-sans">{tier.price}</span>
                      <span className="text-xs text-muted-text">{tier.frequency}</span>
                    </div>
                    <div className="space-y-1 mb-6 pb-6 border-b border-card-border/60">
                      <p className="text-xs font-semibold text-primary">{tier.sessions}</p>
                      <p className="text-xs text-muted-text">{tier.duration}</p>
                    </div>

                    <ul className="space-y-3 text-xs sm:text-sm mb-8">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2 text-foreground/90">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/book-free-trial"
                    className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center transition-all ${
                      tier.highlight
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20'
                        : 'glass border border-card-border hover:bg-foreground/5 text-foreground'
                    }`}
                  >
                    Book Free Trial
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-xs text-muted-text">
              <p>
                Want to see our full rate breakdown and customized family package discounts? Visit our dedicated <Link href="/pricing" className="text-primary font-semibold hover:underline">Pricing Page</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8: PRICING & ROI CALCULATION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Financial Transparency &amp; Value
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                California-Specific Pricing &amp; ROI Calculation
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

              <p className="text-sm sm:text-base text-muted-text font-normal leading-relaxed mb-8">
                Living in California comes with a high cost of living. Every dollar and hour invested in your child's education should provide verifiable educational value.
              </p>

              {/* ROI Table */}
              <div className="overflow-x-auto my-8">
                <table className="w-full text-left text-xs sm:text-sm border-collapse glass rounded-3xl overflow-hidden shadow-lg border border-card-border">
                  <thead>
                    <tr className="bg-foreground/[0.04] border-b border-card-border text-foreground font-bold">
                      <th className="p-4 sm:p-5">Metric</th>
                      <th className="p-4 sm:p-5 text-rose-500">Physical Center</th>
                      <th className="p-4 sm:p-5 text-primary">OQTutor Online</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/60 text-muted-text">
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Monthly Tuition (3 days/week)</td>
                      <td className="p-4">$140 / month</td>
                      <td className="p-4 text-foreground font-semibold">$30 / month</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Facility / Registration Fees</td>
                      <td className="p-4">$75 annual fee</td>
                      <td className="p-4 text-foreground font-semibold">$0</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Annual Gas &amp; Vehicle Wear (CA)</td>
                      <td className="p-4">$450 (600 miles)</td>
                      <td className="p-4 text-foreground font-semibold">$0</td>
                    </tr>
                    <tr className="bg-foreground/[0.02]">
                      <td className="p-4 font-bold text-foreground">Total Annual Financial Cost</td>
                      <td className="p-4 font-bold text-rose-500">$2,205 per year</td>
                      <td className="p-4 font-bold text-primary">$360 per year</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Annual Commute Time Expended</td>
                      <td className="p-4 text-rose-400">150 hours on road</td>
                      <td className="p-4 text-foreground font-semibold">0 hours</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold text-foreground">Actual 1-on-1 Attention Received</td>
                      <td className="p-4">~12 hours / year</td>
                      <td className="p-4 text-foreground font-semibold">72 hours / year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="glass p-6 rounded-2xl border border-primary/30 bg-primary/5 my-6 text-center">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  Net Value Difference
                </span>
                <p className="text-base sm:text-lg font-extrabold text-foreground">
                  Save $1,845 / Year in Financial Costs &amp; Regain 150+ Hours of Family Time
                </p>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-muted-text">
                <li className="flex items-start space-x-2">
                  <DollarSign className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground font-semibold">The True Time Cost:</strong> At an average California parental wage value of $45/hour, 150 hours spent in traffic represents <strong className="text-foreground">$6,750 of lost personal/professional time</strong> every single year.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <TrendingUp className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground font-semibold">Quality Density Ratio:</strong> On OQTutor's Standard Plan ($40/mo), you receive <strong className="text-foreground">600% more direct 1-on-1 teacher-student interaction</strong> than a traditional madrasah group setting for less than one-third of the total monetary cost.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-foreground font-semibold">No Contracts or Lock-ins:</strong> Unlike local private academies that demand semester-long upfront commitments, OQTutor operates on flexible month-to-month subscriptions with zero cancellation penalties.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 9: REGIONAL COVERAGE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Localized Regional Focus
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Regional California Coverage Deep-Dive
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Explore how our online academy specifically supports the unique dynamics of each major California region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Region 1: Southern California */}
              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Southern California</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Greater Los Angeles, Orange County &amp; <Link href="/locations/usa/california" className="text-primary hover:underline">San Diego</Link>
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong className="text-foreground">Counties:</strong> Los Angeles, Orange, San Diego, Riverside, San Bernardino.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    Home to sprawling Muslim enclaves in Irvine, Anaheim (Little Arabia), Glendale, Pasadena, Torrance, and Rancho Cucamonga.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">Local Solution:</strong> Navigating the 91 Express Lanes or I-5 during late afternoon traffic makes physical class attendance a nightly ordeal. Our online sessions allow SoCal students to finish Quran lessons before Maghrib, even during hot Inland Empire summer months.
                  </p>
                </div>
              </div>

              {/* Region 2: Bay Area */}
              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco Bay Area</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    <Link href="/locations/usa/california" className="text-primary hover:underline">Bay Area</Link> (Silicon Valley, East Bay &amp; Peninsula)
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong className="text-foreground">Counties:</strong> Santa Clara, Alameda, San Mateo, Contra Costa, San Francisco.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    High concentration of tech professionals, researchers, and university faculty in Fremont, San Jose, Sunnyvale, Mountain View, Palo Alto, and Pleasanton.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">Local Solution:</strong> Silicon Valley families prioritize top-tier educational technology, rigorous academic outcomes, and female scholars for their daughters. Our structured syllabus and progress reporting match the expectations of tech-literate households.
                  </p>
                </div>
              </div>

              {/* Region 3: Central Valley */}
              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Central Valley</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Agricultural Corridors &amp; Growing Communities
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong className="text-foreground">Counties:</strong> Fresno, Kern, San Joaquin, Stanislaus, Tulare.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    Communities in Fresno, Bakersfield, Stockton, Modesto, and Visalia often live 20 to 40 miles away from the nearest full-time Islamic center with certified Tajweed faculty.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">Local Solution:</strong> We eliminate geographical isolation, connecting Central Valley families directly with world-class scholars from Jamia Ashrafia and international Islamic universities.
                  </p>
                </div>
              </div>

              {/* Region 4: Sacramento Area */}
              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Sacramento Region</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Greater Capital Area &amp; Northern Foothills
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    <strong className="text-foreground">Counties:</strong> Sacramento, Placer, Yolo, El Dorado.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    Rapidly growing Muslim population across Elk Grove, Folsom, Roseville, Natomas, and Davis.
                  </p>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    <strong className="text-foreground">Local Solution:</strong> Provides dependable scheduling that easily bridges state worker shifts and university schedules at UC Davis and Sacramento State.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VISUAL BREAK IMAGE 4: AFTER SECTION 9 */}
        {/* ========================================================================= */}
        <div className="my-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-3 rounded-3xl border border-card-border overflow-hidden shadow-xl relative">
            <Image
              src="/online-quran-classes-usa-kids-adults-2.jpg"
              alt="Map of California regions served by OQTutor"
              width={900}
              height={450}
              loading="lazy"
              className="w-full rounded-2xl object-cover h-[260px] sm:h-[380px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-background/85 backdrop-blur-md p-3.5 rounded-xl border border-card-border text-center text-xs text-muted-text">
              <span className="font-semibold text-foreground">Statewide reach:</span> Serving Northern, Central, and Southern California students from the comfort of home.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TUTOR PROFILE CARDS */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Certified Faculty
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Meet Our Qualified Quran Tutors
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                All OQTutor instructors are certified Quran scholars, hold formal Islamic degrees, possess verified Ijazah certifications, and have passed thorough background and teaching screenings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {verifiedTutors.map((tutor, idx) => (
                <div key={idx} className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all bg-background">
                  <div>
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-md">
                      <Image
                        src={tutor.photo}
                        alt={`${tutor.name} - Certified Quran Tutor at OQTutor`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-base font-bold text-foreground leading-snug">{tutor.name}</h3>
                      <p className="text-xs text-primary font-semibold mt-0.5">{tutor.role}</p>
                      <div className="flex items-center justify-center space-x-1 my-2">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-foreground">{tutor.rating}</span>
                        <span className="text-[11px] text-muted-text">({tutor.reviewsCount} reviews)</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-1.5 text-xs text-muted-text">
                      <p className="flex items-center justify-between border-b border-card-border/40 pb-1">
                        <span className="text-foreground/70">Experience:</span>
                        <span className="font-medium text-foreground">{tutor.experience}</span>
                      </p>
                      <p className="flex items-center justify-between border-b border-card-border/40 pb-1">
                        <span className="text-foreground/70">Languages:</span>
                        <span className="font-medium text-foreground">{tutor.languages}</span>
                      </p>
                      <p className="pt-1 text-[11px] text-muted-text leading-relaxed">
                        <strong className="text-foreground font-semibold">Specialization:</strong> {tutor.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 pt-3 border-t border-card-border/60 text-center">
                    <span className="text-[11px] font-semibold text-secondary inline-block">
                      {tutor.certifications[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/tutors"
                className="inline-flex items-center space-x-2 px-7 py-3 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>View All Certified Tutors</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10: CALIFORNIA PARENT FAQ */}
        {/* ========================================================================= */}
        <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                California Parent FAQ
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                California Parent FAQ - Unique Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Specific questions about scheduling, state school testing, university semesters, and California environmental flexibility.
              </p>
            </div>

            <div className="space-y-4">
              {uniqueFaqs.map((faq, idx) => (
                <div key={idx} className="glass p-6 sm:p-7 rounded-2xl border border-card-border/60 bg-background">
                  <h3 className="font-bold text-base sm:text-lg text-foreground font-sans mb-2.5 flex items-center space-x-2">
                    <HelpCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed italic font-normal pl-6">
                    {faq.jsxAnswer || faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CTA / BOOKING SECTION */}
        {/* ========================================================================= */}
        <section className="py-20 border-t border-card-border mb-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 sm:p-12 rounded-3xl border border-card-border shadow-2xl text-center relative overflow-hidden bg-background/80">
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-4">
                Begin Today
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                Start Learning the Quran From Home in California
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Give your family the gift of structured, authentic Quranic learning without sacrificing your evenings to California traffic. Schedule your free trial class today with no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Book Your Free Trial
                </Link>
                <Link
                  href="/tutors"
                  className="px-8 py-3.5 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-xs font-bold uppercase tracking-wider transition-all w-full sm:w-auto"
                >
                  Meet Our Tutors
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
