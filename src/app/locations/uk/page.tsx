import { cookies } from 'next/headers';
import { getDBAsync } from '@/data/db';
import fallbackDbData from '@/data/db.json';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import UKFaqAccordion, { ukFaqData } from '@/components/UKFaqAccordion';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Calendar,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
  Compass,
  Check,
  MapPin,
  HeartHandshake,
  Award,
  Video,
  Smile,
  Target,
  UserCheck,
  ChevronRight,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes UK | 1-to-1 Quran Teachers | OQTutor",
    description: "Learn Quran online in the UK with personalized one-to-one classes for kids and adults. Choose male or female tutors, flexible UK timings, Tajweed, Hifz, Quran Reading and Islamic Studies.",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/uk",
      languages: {
        'en-GB': 'https://www.oqtutor.com/locations/uk',
        'en-US': 'https://www.oqtutor.com/locations/usa',
        'en-CA': 'https://www.oqtutor.com/locations/canada',
        'en-AU': 'https://www.oqtutor.com/locations/australia',
        'x-default': 'https://www.oqtutor.com/locations/uk',
      },
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/uk",
      title: "Online Quran Classes UK | 1-to-1 Quran Teachers | OQTutor",
      description: "Learn Quran online in the UK with personalized one-to-one classes for kids and adults. Choose male or female tutors, flexible UK timings, Tajweed, Hifz, Quran Reading and Islamic Studies.",
      images: [
        {
          url: "https://www.oqtutor.com/logo.jpg",
          width: 1200,
          height: 630,
          alt: "OQTutor Online Quran Classes UK",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Online Quran Classes UK | 1-to-1 Quran Teachers | OQTutor",
      description: "Learn Quran online in the UK with personalized one-to-one classes for kids and adults. Choose male or female tutors, flexible UK timings, Tajweed, Hifz, Quran Reading and Islamic Studies.",
      images: ["https://www.oqtutor.com/logo.jpg"],
    },
  };
}

export default async function UKQuranClassesPage() {
  let dbData;
  try {
    dbData = (await getDBAsync()) || fallbackDbData;
  } catch {
    dbData = fallbackDbData;
  }

  // Check if admin is logged in
  let adminLoggedIn = false;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    adminLoggedIn = token ? verifyAdminToken(token) : false;
  } catch {
    adminLoggedIn = false;
  }

  // UK-specific contact data for Contact & Footer
  const ukContactData = {
    ...(dbData.contact || fallbackDbData.contact),
    location: "Online Quran classes serving families across the United Kingdom",
  };

  // Structured Data: WebPage
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Online Quran Classes UK | 1-to-1 Quran Teachers | OQTutor",
    "url": "https://www.oqtutor.com/locations/uk",
    "description": "Learn Quran online in the UK with personalized one-to-one classes for kids and adults. Choose male or female tutors, flexible UK timings, Tajweed, Hifz, Quran Reading and Islamic Studies.",
    "inLanguage": "en-GB",
    "isPartOf": {
      "@type": "WebSite",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com",
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.oqtutor.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Locations",
          "item": "https://www.oqtutor.com/locations/uk",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "UK",
          "item": "https://www.oqtutor.com/locations/uk",
        },
      ],
    },
  };

  // Structured Data: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oqtutor.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://www.oqtutor.com/locations/uk",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "UK",
        "item": "https://www.oqtutor.com/locations/uk",
      },
    ],
  };

  // Structured Data: EducationalOrganization with OfferCatalog in GBP
  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "OQTutor Online Quran Classes UK",
    "url": "https://www.oqtutor.com/locations/uk",
    "logo": "https://www.oqtutor.com/logo.jpg",
    "description": "Provider of personalized 1-on-1 online Quran, Tajweed, and Islamic studies classes for kids and adults across the United Kingdom.",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United Kingdom",
        "identifier": "GB",
      },
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "UK Online Quran Tuition Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Starter UK Quran Class Plan",
            "description": "3 sessions per week (30 mins each) with verified male or female Quran tutor.",
          },
          "price": "24.00",
          "priceCurrency": "GBP",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Standard UK Quran Class Plan",
            "description": "5 sessions per week (30 mins each) with verified tutor, Tajweed & Islamic studies.",
          },
          "price": "32.00",
          "priceCurrency": "GBP",
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Premium Daily UK Quran Class Plan",
            "description": "Daily sessions (7/week) for intensive Hifz, Tajweed, and Tafseer with dedicated tutor messaging.",
          },
          "price": "40.00",
          "priceCurrency": "GBP",
        },
      ],
    },
  };

  // Structured Data: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": ukFaqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${faq.directAnswer} ${faq.explanation}`,
      },
    })),
  };

  // Course Grid Data
  const courseCards = [
    {
      title: "Noorani Qaida",
      slug: "noorani-qaida",
      href: "/courses/noorani-qaida",
      icon: GraduationCap,
      badge: "Beginners & Children",
      description: "Master Arabic letter recognition, joining rules, and correct articulation points (Makharij). The essential foundation for accurate Quran recitation.",
      duration: "2-3 Months",
      suitableFor: "Ages 4+ and Adult Beginners",
    },
    {
      title: "Quran Reading",
      slug: "quran-reading",
      href: "/courses/quran-reading",
      icon: BookOpen,
      badge: "Fluency & Recitation",
      description: "Transition smoothly from Qaida to reading the Holy Quran with flow, connecting verses accurately, and learning fundamental pausing rules (Waqf).",
      duration: "6-12 Months",
      suitableFor: "All Ages",
    },
    {
      title: "Quran with Tajweed",
      slug: "tajweed",
      href: "/courses/tajweed",
      icon: Sparkles,
      badge: "Recitation Precision",
      description: "Learn and apply classical Tajweed rules, including Ghunnah, Ikhfa, Idghaam, Qalqalah, and Madd, under the direct guidance of certified scholars.",
      duration: "6-8 Months",
      suitableFor: "Intermediate Learners",
    },
    {
      title: "Hifz-ul-Quran",
      slug: "hifz",
      href: "/courses/hifz",
      icon: Award,
      badge: "Memorisation Track",
      description: "A structured memorisation path using the classical three-tier revision method (Sabaq, Sabqi, Manzil) with certified Huffaz and Qaris.",
      duration: "Custom Pace",
      suitableFor: "Committed Kids & Adults",
    },
    {
      title: "Islamic Studies",
      slug: "islamic-studies",
      href: "/courses/islamic-studies",
      icon: Compass,
      badge: "Faith & Character",
      description: "Comprehensive lessons covering the Pillars of Islam, Aqeedah, Seerah of the Prophet ﷺ, basic Fiqh, daily Duas, and essential Islamic manners.",
      duration: "Ongoing",
      suitableFor: "Kids, Teenagers & Adults",
    },
    {
      title: "Quran Translation & Tafseer",
      slug: "tafseer",
      href: "/courses/tafseer",
      icon: BookOpen,
      badge: "Meaning & Context",
      description: "Understand the profound meanings, historical context (Asbab al-Nuzul), and practical life guidance of the Holy Quran through verse-by-verse study.",
      duration: "Custom Pace",
      suitableFor: "Adults, Teens & Reverts",
    },
  ];

  // 5-Step Process Data
  const howItWorksSteps = [
    {
      step: "01",
      title: "Book Free Trial",
      description: "Select your preferred timetable and tutor requirements with our quick 60-second trial booking form — no credit card needed.",
    },
    {
      step: "02",
      title: "Share Student Information",
      description: "Tell us about the student's age, baseline reading level, and specific goals (Noorani Qaida, Tajweed, Hifz, or adult refresher).",
    },
    {
      step: "03",
      title: "Meet Tutor",
      description: "Join your private one-to-one trial session in our interactive digital classroom to experience the teaching style firsthand.",
    },
    {
      step: "04",
      title: "Follow Structured Course",
      description: "Begin a personalised syllabus tailored to your pace, complete with digital textbooks, audio drilling, and weekly lesson goals.",
    },
    {
      step: "05",
      title: "Continue Learning & Progress",
      description: "Track ongoing progress with monthly visibility reports, periodic revisions, and flexible scheduling that adapts to UK term dates.",
    },
  ];

  // Benefits Data
  const benefitsList = [
    {
      title: "Individual Attention",
      description: "100% dedicated one-to-one focus where the tutor tailors every minute to the student's personal learning pace.",
      icon: UserCheck,
    },
    {
      title: "Immediate Correction",
      description: "Real-time correction of letter articulation (Makharij) and Tajweed rules prevents ingrained pronunciation errors.",
      icon: ShieldCheck,
    },
    {
      title: "Personalised Pace",
      description: "Students move forward as quickly as they grasp concepts or take extra time on tricky rules without classroom rush.",
      icon: Target,
    },
    {
      title: "Flexible Learning",
      description: "Easily schedule, reschedule, or pause classes around UK school half-terms, exams, and work commitments.",
      icon: Calendar,
    },
    {
      title: "Learning From Home",
      description: "Save hours of daily rush-hour commuting and create a peaceful, safe learning routine from your own home.",
      icon: Video,
    },
  ];

  // UK Cities Data
  const ukCities = [
    { name: "London", pageHref: "/locations/uk/london", status: "Dedicated Page Available" },
    { name: "Birmingham", pageHref: null, status: "Online Tuition Available" },
    { name: "Manchester", pageHref: null, status: "Online Tuition Available" },
    { name: "Leicester", pageHref: null, status: "Online Tuition Available" },
    { name: "Bradford", pageHref: null, status: "Online Tuition Available" },
    { name: "Luton", pageHref: null, status: "Online Tuition Available" },
    { name: "Coventry", pageHref: null, status: "Online Tuition Available" },
    { name: "Nottingham", pageHref: null, status: "Online Tuition Available" },
    { name: "Sheffield", pageHref: null, status: "Online Tuition Available" },
    { name: "Leeds", pageHref: null, status: "Online Tuition Available" },
    { name: "Liverpool", pageHref: null, status: "Online Tuition Available" },
    { name: "Bristol", pageHref: null, status: "Online Tuition Available" },
    { name: "Glasgow", pageHref: null, status: "Online Tuition Available" },
    { name: "Edinburgh", pageHref: null, status: "Online Tuition Available" },
    { name: "Cardiff", pageHref: null, status: "Online Tuition Available" },
    { name: "Belfast", pageHref: null, status: "Online Tuition Available" },
  ];

  // Learning Goals Data
  const learningGoals = [
    {
      title: "Complete Beginners",
      audience: "Children (ages 4+) & Adults with no Arabic background",
      focus: "Noorani Qaida, Arabic alphabet shapes, vowel signs (Harakat), and correct tongue/throat articulation points (Makharij).",
      outcome: "Confidently recognizing and connecting Arabic letters to begin reading verses independently.",
    },
    {
      title: "Children Who Already Read Quran",
      audience: "Young students needing fluency and rhythm",
      focus: "Reading full verses of the Holy Quran smoothly, eliminating hesitant pauses, and mastering basic Waqf (stopping) rules.",
      outcome: "Fluent, accurate recitation with consistent pacing and boosted confidence.",
    },
    {
      title: "Students Improving Tajweed",
      audience: "Readers wanting to recite with classical beauty",
      focus: "In-depth study of Ghunnah, Ikhfa, Idghaam, Qalqalah, Madd elongations, and Sifaat (letter characteristics).",
      outcome: "Authentic classical recitation reflecting traditional scholarly standards.",
    },
    {
      title: "Hifz Students",
      audience: "Memorisation for selected Surahs or full Quran",
      focus: "Daily new lesson (Sabaq), recent revision (Sabqi), and cumulative revision (Manzil) under certified Huffaz.",
      outcome: "Rock-solid long-term retention with correct Tajweed rules maintained throughout.",
    },
    {
      title: "Adults Returning to Quran Learning",
      audience: "Busy professionals, parents & university students",
      focus: "Fixing pronunciation errors in daily Salah, learning word-by-word translation, or studying Tafseer at a comfortable pace.",
      outcome: "Reconnecting with the Quran with clarity, spiritual confidence, and pride.",
    },
  ];

  // Pricing Plans in GBP
  const ukPricingPlans = [
    {
      id: "uk-starter",
      title: "Starter Plan",
      price: "24",
      frequency: "Month",
      classesPerWeek: "3 Classes / Week",
      features: [
        "3 Sessions per week (30 mins each)",
        "1-to-1 live interactive lessons",
        "Verified male or female Quran tutor",
        "Noorani Qaida & foundational reading",
        "Flexible GMT/BST scheduling",
        "After-school & weekend time slots",
      ],
      isPopular: false,
      ctaText: "Book Free Trial",
    },
    {
      id: "uk-standard",
      title: "Standard Plan",
      price: "32",
      frequency: "Month",
      classesPerWeek: "5 Classes / Week",
      features: [
        "5 Sessions per week (30 mins each)",
        "1-to-1 live interactive lessons",
        "Verified male or female Quran tutor",
        "Structured Tajweed rules & recitation",
        "Integrated Islamic studies & daily Duas",
        "Monthly parent progress updates",
        "Priority rescheduling flexibility",
      ],
      isPopular: true,
      ctaText: "Book Free Trial",
    },
    {
      id: "uk-premium",
      title: "Premium Plan",
      price: "40",
      frequency: "Month",
      classesPerWeek: "Daily Classes (7/week)",
      features: [
        "Daily sessions (7/week, 30 mins each)",
        "1-to-1 live interactive lessons",
        "Verified senior scholar / Hafiz tutor",
        "Customised Hifz or advanced Tajweed track",
        "Quran Translation & Tafseer study",
        "Direct teacher communication",
        "Comprehensive milestone tracking",
      ],
      isPopular: false,
      ctaText: "Book Free Trial",
    },
  ];

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background pt-8 pb-16 md:pt-12 md:pb-24 border-b border-card-border">
          {/* Background subtle gradients */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-muted-text">
              <Link href="/" className="hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-muted-text/50" />
              <Link href="/locations/uk" className="hover:text-primary transition-colors font-medium">
                Locations
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-muted-text/50" />
              <span className="text-foreground font-semibold">UK</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Hero Left Column */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Online Quran Classes for UK Families</span>
                </div>

                {/* H1 Heading */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes UK for Kids &amp; Adults
                </h1>

                {/* Supporting Paragraph */}
                <p className="text-base sm:text-lg text-muted-text leading-relaxed font-normal">
                  Learn the Holy Quran from home with private one-to-one lessons tailored to your family&apos;s schedule. Whether your child is starting with Noorani Qaida or you are an adult refining your Tajweed and understanding, OQTutor connects you with qualified, background-vetted male and female tutors aligned with UK time (GMT/BST).
                </p>

                {/* Trust / Value Points */}
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>One-to-one learning</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Flexible UK scheduling (GMT/BST)</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Kids &amp; adults programmes</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold text-foreground/90">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span>Male &amp; female qualified tutors</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Book Free Trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold text-sm border border-card-border transition-all duration-300"
                  >
                    <span>Explore Courses</span>
                  </a>
                </div>

                {/* Reassurance text */}
                <p className="text-xs text-muted-text pt-1">
                  100% free trial session • No credit card required • Cancel or reschedule anytime
                </p>
              </div>

              {/* Hero Right Column: Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white dark:bg-slate-900">
                    <Image
                      src="/online-quran-classes-uk.jpg"
                      alt="Online Quran Classes UK - Student attending live 1-to-1 Quran session on laptop"
                      width={480}
                      height={360}
                      priority
                      className="w-full rounded-2xl object-cover h-[320px] md:h-[360px]"
                    />
                    <div className="p-4 bg-background/90 rounded-xl mt-3 border border-card-border/60">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-foreground">Interactive Virtual Classroom</span>
                        <span className="text-primary font-semibold flex items-center">
                          <Clock className="h-3.5 w-3.5 mr-1" /> GMT / BST Live
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-text mt-1">
                        Private one-to-one screen sharing, real-time voice corrections, and weekly parent visibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Learn Quran Online From the Comfort of Your Home */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl -translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-xl relative bg-white dark:bg-slate-900">
                    <Image
                      src="/uk-locations-1.png"
                      alt="Online Quran classes UK from home - Boy learning Noorani Qaida with online tutor"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[300px] md:h-[340px]"
                    />
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Convenience &amp; Safety
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Learn Quran Online From the Comfort of Your Home
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  UK family life is fast-paced. Juggling school runs, after-school sports, unpredictable weather, and evening traffic makes travelling to a physical madrasa stressful for parents and exhausting for children. Online learning eliminates the commute entirely, allowing your family to study in a safe, peaceful home environment.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our virtual classroom provides high-definition audio, interactive digital Quran and Qaida whiteboards, and two-way screen sharing. Students receive the same rigorous Quranic instruction and personal encouragement as a traditional setting — with the added convenience of flexible timetabling that respects your family routine.
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group"
                  >
                    <span>Experience a free one-to-one home lesson</span>
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: One-to-One Online Quran Classes for UK Students */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Focused Education</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                One-to-One Online Quran Classes for UK Students
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                In a crowded classroom of 15 to 20 children, each student may only recite to the teacher for a couple of minutes. With OQTutor, every single session is strictly one-to-one, giving the learner 100% undivided attention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">100% Private Attention</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    No waiting for other students or feeling intimidated by peers. The tutor dedicates the full 30 minutes entirely to your child&apos;s recitation and understanding.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Instant Error Correction</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Tajweed mistakes and subtle pronunciation errors are caught and corrected immediately, building correct habits right from the very first lesson.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">UK Schedule Alignment</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Book sessions that suit your family — after school between 4:00 PM and 8:00 PM, or on Saturday and Sunday mornings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Online Quran Classes for Kids in the UK */}
        <section className="py-16 md:py-24 bg-background border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Primary &amp; Secondary Age Learners
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes for Kids in the UK
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Children learn best in an encouraging, engaging atmosphere. Our kids&apos; curriculum is crafted to inspire young minds, making learning Arabic phonics, Tajweed, and Quran recitation fun and rewarding rather than a chore.
                </p>

                {/* H3 1: What Children Can Learn */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-lg font-bold text-foreground flex items-center">
                    <GraduationCap className="h-5 w-5 text-primary mr-2" />
                    What Children Can Learn
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-muted-text">
                    <div className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Arabic alphabet &amp; letter shapes</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Noorani Qaida phonetics &amp; Makharij</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Fluent Quran reading with Tajweed</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Short Surah memorisation (Juz Amma)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Daily Duas &amp; Salah prayer steps</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Islamic morals &amp; good character (Akhlaq)</span>
                    </div>
                  </div>
                </div>

                {/* H3 2: A Learning Path That Grows With Your Child */}
                <div className="space-y-3 pt-4 border-t border-card-border/60">
                  <h3 className="text-lg font-bold text-foreground flex items-center">
                    <Target className="h-5 w-5 text-secondary mr-2" />
                    A Learning Path That Grows With Your Child
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    From age 4 through teenage years, our tutors adjust the teaching pace to match cognitive development. Parents receive regular visibility reports, and lessons can be paused or rearranged during UK school half-terms, exam seasons, and summer holidays without penalty.
                  </p>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-xl relative bg-white dark:bg-slate-900">
                    <Image
                      src="/uk-locations-2.png"
                      alt="Online Quran classes for kids UK - Young student practicing recitation with supportive tutor"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px] md:h-[360px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Online Quran Classes for Adults in the UK */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl -translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-xl relative bg-white dark:bg-slate-900">
                    <Image
                      src="/uk-locations-3.png"
                      alt="Online Quran classes for adults UK - Adult student in private online Tajweed lesson"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px] md:h-[360px]"
                    />
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Adults &amp; University Students
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes for Adults in the UK
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  It is never too late to begin learning or refining your Quranic recitation. Our adult programme is designed specifically for busy working professionals, university students, parents, and reverts who need flexible, completely private instruction.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our tutors provide patient, respectful guidance without judgment. Whether you are learning the Arabic alphabet from scratch, correcting hidden mistakes in your daily Salah recitations, mastering advanced Tajweed rules, or studying Quran translation and Tafseer, sessions progress at whatever pace feels comfortable for you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="glass p-4 rounded-2xl border-card-border">
                    <span className="text-xs font-bold text-foreground block mb-1">Early Morning &amp; Late Evening Slots</span>
                    <p className="text-xs text-muted-text">Schedule sessions before work or after 8:00 PM UK time.</p>
                  </div>
                  <div className="glass p-4 rounded-2xl border-card-border">
                    <span className="text-xs font-bold text-foreground block mb-1">Tutor Gender Preference</span>
                    <p className="text-xs text-muted-text">Male tutors for brothers; qualified female teachers for sisters.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Quran Courses Available Online in the UK */}
        <section id="courses" className="py-16 md:py-24 bg-background border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Structured Curriculum</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Quran Courses Available Online in the UK
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Choose from our core structured courses designed for learners of all ages. Each course is taught one-to-one with tailored pacing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseCards.map((course) => {
                const Icon = course.icon;
                return (
                  <div
                    key={course.slug}
                    className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                          {course.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                        {course.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-card-border/60">
                      <div className="flex items-center justify-between text-xs text-muted-text mb-4">
                        <span>Duration: <strong>{course.duration}</strong></span>
                        <span>Level: <strong>{course.suitableFor}</strong></span>
                      </div>
                      <Link
                        href={course.href}
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group/link"
                      >
                        <span>Learn More about {course.title}</span>
                        <ArrowRight className="ml-1.5 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Female Quran Teachers for Sisters & Children */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Comfort &amp; Privacy
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Female Quran Teachers for Sisters &amp; Children
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  We understand that many sisters, young girls, and mothers prefer learning with qualified female instructors in a completely private, comfortable environment. OQTutor provides certified female Quran teachers (Alimas and Qariahs) who bring deep subject expertise, patience, and warmth to every lesson.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our female scholars teach all syllabi — including Noorani Qaida, Tajweed, Quran reading fluency, Hifz, and Islamic studies. You can request your preferred tutor gender during trial registration with zero difficulty.
                </p>
                <div className="pt-2">
                  <Link
                    href="/courses/female-quran-teacher"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-md transition-all duration-300"
                  >
                    <span>View Female Quran Teacher Course</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Feature Box Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="glass p-8 rounded-3xl border-card-border w-full max-w-md space-y-6 shadow-xl bg-white dark:bg-slate-900">
                  <div className="flex items-center space-x-4">
                    <div className="p-3.5 bg-primary/10 text-primary rounded-2xl">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">Certified Female Scholars</h4>
                      <p className="text-xs text-muted-text">Alima graduates &amp; verified Qariahs</p>
                    </div>
                  </div>
                  <div className="h-px bg-card-border w-full" />
                  <ul className="space-y-3 text-xs sm:text-sm text-foreground/80">
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>100% private one-to-one virtual sessions</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Fluent English communication for UK students</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Patient, nurturing approach for young children</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>Flexible daytime, evening, and weekend timings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Flexible Quran Class Timings for UK Families */}
        <section className="py-16 md:py-24 bg-background border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Built Around Your Day</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Flexible Quran Class Timings for UK Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                All scheduling operates directly in UK local time (GMT and BST). Lesson times shift automatically with seasonal UK clock changes, so you never have to calculate time differences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">After-School Slots</h3>
                <p className="text-xs font-semibold text-secondary mb-3">4:00 PM – 8:00 PM GMT/BST</p>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Ideal for primary and secondary students. Children can have a snack after school, complete their 30-minute lesson, and have the rest of the evening free for homework and family time.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Weekend Mornings</h3>
                <p className="text-xs font-semibold text-secondary mb-3">Saturday &amp; Sunday Slots</p>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Start weekend mornings with Quran learning before sports clubs and family outings. Calm, relaxed sessions keep children consistent without weekday tiredness.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <Smile className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Holiday &amp; Half-Term Pausing</h3>
                <p className="text-xs font-semibold text-secondary mb-3">Zero Penalty Rescheduling</p>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Heading away for school half-term, Eid holidays, or summer break? Simply pause or shift your lesson schedule without losing your enrolment or paying fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: How OQTutor Online Quran Classes Work */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Simple 5-Step Process</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                How OQTutor Online Quran Classes Work
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Getting started is seamless and stress-free. In just a few clicks, your family can begin live one-to-one Quran education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {howItWorksSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-3xl border-card-border flex flex-col justify-between relative hover:shadow-lg transition-all duration-300 bg-white/60 dark:bg-slate-900/60"
                >
                  <div>
                    <span className="text-2xl font-black text-primary/30 mb-4 block">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-md transition-all duration-300"
              >
                <span>Book Your Free Trial Lesson</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 9: What Makes One-to-One Quran Classes Different? */}
        <section className="py-16 md:py-24 bg-background border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Key Advantages</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                What Makes One-to-One Quran Classes Different?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Why thousands of UK families prefer private online tuition over crowded physical madrasas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitsList.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 10: Online Quran Classes Across the UK */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Nationwide Reach</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Online Quran Classes Across the UK
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Because our academy is 100% online, we provide high-quality one-to-one Quran tuition to families living throughout England, Scotland, Wales, and Northern Ireland.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {ukCities.map((city) => (
                <div
                  key={city.name}
                  className="glass p-5 rounded-2xl border-card-border flex flex-col justify-between hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <h3 className="text-sm sm:text-base font-bold text-foreground">{city.name}</h3>
                  </div>
                  <span className="text-[11px] text-muted-text block mb-3">{city.status}</span>

                  {city.pageHref ? (
                    <Link
                      href={city.pageHref}
                      className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                    >
                      <span>Explore {city.name} Page</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <Link
                      href="/book-free-trial"
                      className="inline-flex items-center text-xs font-medium text-primary hover:underline"
                    >
                      <span>Book Trial in {city.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 glass rounded-2xl border-card-border text-center max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm text-muted-text">
                Live in another UK town or borough without a local Islamic centre nearby? OQTutor connects your household with certified tutors anywhere in the UK with internet access.
              </p>
            </div>
          </div>
        </section>

        {/* Section 11: Quran Classes Designed Around Different Learning Goals */}
        <section className="py-16 md:py-24 bg-background border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Tailored Learning</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Quran Classes Designed Around Different Learning Goals
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Every student starts at a different stage. We assess baseline knowledge during the free trial and customize the curriculum for your exact goal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {learningGoals.map((goal, idx) => (
                <div
                  key={idx}
                  className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                >
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
                      {goal.audience}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-3">{goal.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                      <strong>Focus:</strong> {goal.focus}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-card-border/60">
                    <p className="text-xs text-foreground/80">
                      <strong>Target Outcome:</strong> {goal.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 12: UK Quran Class Fees (Pricing in GBP) */}
        <section id="pricing" className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Clear UK Pricing</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                UK Quran Class Fees
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Simple monthly plans tailored for UK families. Billed directly in British Pounds (£ GBP). No admission fees or long-term contracts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {ukPricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass rounded-3xl border-card-border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.isPopular
                      ? 'ring-2 ring-primary bg-primary/[0.03] md:scale-105 shadow-xl shadow-primary/10 md:z-10'
                      : 'hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.title}</h3>
                    <span className="text-xs font-medium text-primary block mb-4">{plan.classesPerWeek}</span>

                    <div className="flex items-baseline mt-2 mb-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-foreground">£{plan.price}</span>
                      <span className="text-sm text-muted-text ml-2">/ {plan.frequency}</span>
                    </div>
                    <span className="text-xs text-muted-text font-normal block mb-6">
                      (Billed monthly in GBP • Sibling discounts available)
                    </span>
                    <div className="h-px bg-card-border w-full mb-6" />

                    <ul className="space-y-3.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-foreground/80">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-card-border/60">
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
                    <p className="text-[10px] text-center text-muted-text mt-3">
                      Cancel anytime. 7-day money-back guarantee.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover"
              >
                <span>View Current UK Pricing Details &amp; Family Discounts</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 13: Is Online Quran Learning Suitable for Children? */}
        <section className="py-16 md:py-24 bg-background border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text Column */}
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Parent Guidance
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Is Online Quran Learning Suitable for Children?
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Many UK parents wonder if young children can stay focused during online lessons. The reality is that online Quran education often delivers superior engagement compared to traditional group madrasas when three key elements are present:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="glass p-5 rounded-2xl border-card-border">
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      1. Optimal 30-Minute Lesson Length
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      Child psychology demonstrates that 30 minutes of energetic, one-to-one interaction matches young attention spans perfectly without causing screen fatigue.
                    </p>
                  </div>

                  <div className="glass p-5 rounded-2xl border-card-border">
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      2. Interactive Digital Whiteboards
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      Visual colour coding, highlight pointers, and interactive phonics cards keep kids actively engaged in identifying letters and vowel marks.
                    </p>
                  </div>

                  <div className="glass p-5 rounded-2xl border-card-border">
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">
                      3. Supportive Home Environment &amp; Parent Visibility
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      Parents can sit nearby during initial lessons, listen to their child recite, and observe the tutor&apos;s teaching style firsthand, creating complete transparency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Fact Column */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="glass p-8 rounded-3xl border-card-border w-full space-y-5 text-center bg-primary/[0.02]">
                  <div className="p-4 bg-primary/10 text-primary w-fit mx-auto rounded-2xl">
                    <HeartHandshake className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Parent Peace of Mind</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    You never have to worry about what happens behind closed madrasa doors. All lessons happen under your roof with complete safety.
                  </p>
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center justify-center w-full py-3 px-6 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md transition-all duration-300"
                  >
                    <span>Try a 30-Min Lesson Free</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 14: Why Choose OQTutor for Online Quran Classes in the UK? */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Verified Differentiators</span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Why Choose OQTutor for Online Quran Classes in the UK?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                We combine authentic scholarship with modern digital learning to deliver a trusted Quranic education.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">100% Private 1-to-1 Tuition</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  No group classes. Tutors dedicate all their energy to your child&apos;s individual learning pace, strengths, and areas for improvement.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Background-Verified Tutors</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  All teachers undergo strict background vetting, identity verification, and qualification screening to ensure child safeguarding and professional teaching standards.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Male &amp; Female Scholars</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Select qualified male tutors or certified female Alimas and Qariahs based on your family&apos;s comfort and preferences.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">GMT/BST Timetabling</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Lessons operate smoothly across London and UK time zones, accommodating after-school hours, weekends, and holiday schedules.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Structured Syllabi &amp; Reports</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Step-by-step curricula from beginner Noorani Qaida to full Hifz, accompanied by regular parent visibility and progress updates.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Free Trial, No Commitment</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Experience our virtual classroom and evaluate tutor communication risk-free before selecting any paid monthly plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 15: Frequently Asked Questions About Online Quran Classes in the UK */}
        <section id="faqs" className="py-16 md:py-24 bg-background border-t border-card-border relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                UK Questions &amp; Answers
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Frequently Asked Questions About Online Quran Classes in the UK
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text">
                Direct, helpful answers regarding tutors, scheduling, trial classes, and curriculum for UK Muslim families.
              </p>
            </div>

            {/* Interactive Accessible Accordion */}
            <UKFaqAccordion />

            {/* Quick Help Callout */}
            <div className="glass p-6 sm:p-8 rounded-2xl border border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <h3 className="text-base font-bold text-foreground">Have a specific question about UK timings or syllabus?</h3>
                <p className="text-xs text-muted-text mt-1">Our academic coordinators are available to assist your family anytime.</p>
              </div>
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md transition-all shrink-0"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 16: Closing CTA Banner */}
        <section className="py-16 bg-foreground/[0.015] border-t border-card-border relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative glass border border-primary/20 rounded-3xl p-8 sm:p-12 text-center overflow-hidden bg-primary/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-4">
                Begin Today
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                Begin Your Online Quran Classes in the UK
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Experience the OQTutor advantage with a free one-to-one session. Connect your family with certified male or female scholars on flexible UK timetables.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-free-trial"
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/pricing"
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold text-sm border border-card-border transition-all duration-300"
                >
                  <span>View UK Pricing</span>
                </Link>
              </div>

              <p className="text-xs text-muted-text mt-4">
                No credit card required • 30-minute private evaluation • Cancel or pause anytime
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form with UK Context */}
        <Contact data={ukContactData} />
      </main>

      {/* Footer with UK Context */}
      <Footer data={ukContactData} />
    </>
  );
}
