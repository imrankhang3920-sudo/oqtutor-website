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
  Award, 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  MapPin, 
  CheckCheck, 
  Sparkles, 
  HeartHandshake,
  GraduationCap,
  Calendar,
  Compass,
  FileCheck,
  Check,
  UserCheck
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes in California for Kids & Adults | OQTutor";
  const metaDescription = "Learn Quran online in California with certified male and female tutors. Enjoy live 1-on-1 Quran classes for kids and adults, Tajweed, Hifz, Noorani Qaida and flexible Pacific Time scheduling.";
  const canonicalUrl = "https://www.oqtutor.com/locations/usa/california";

  return {
    title: metaTitle,
    description: metaDescription,
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

  // Real tutor profiles from DB
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
        "Free study material provided",
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
        "Comprehensive Tajweed & Reading",
        "Islamic Studies & Daily Duas included",
        "Monthly detailed progress report",
        "Flexible reschedule options",
        "Direct teacher feedback"
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

  const faqs = [
    {
      question: "Are online Quran classes available throughout California?",
      answer: "Yes. OQTutor provides live one-on-one online Quran classes to Muslim students and families across all of California. Whether you live in the Greater Los Angeles Area, the San Francisco Bay Area, San Diego, Orange County, the Central Valley, or the Sacramento region, you can connect from home on any computer, tablet, or smartphone."
    },
    {
      question: "Can my child take Quran classes online in California?",
      answer: "Yes. Our children's program is specifically designed for young learners starting from age 4. Tutors use colorful digital Noorani Qaida workbooks, visual phonetic aids, and interactive whiteboards to teach Arabic letters, pronunciation, and Quran reading in an engaging, patient, and age-appropriate manner."
    },
    {
      question: "Can I choose a female Quran teacher in California?",
      answer: "Yes. OQTutor provides certified male and female Quran instructors. Muslim sisters, young girls, and parents of young children can specifically request a qualified female teacher for a modest, comfortable, and nurturing learning experience."
    },
    {
      question: "Do you offer Quran classes in Pacific Time?",
      answer: "Yes. All classes for California students are coordinated directly around Pacific Time (PT). We offer flexible scheduling across weekday mornings before school, afternoon hours after classes finish (such as 3:30 PM to 7:00 PM PT), evening slots, and weekend morning or afternoon sessions."
    },
    {
      question: "Can adults learn Quran online in California?",
      answer: "Yes. We offer dedicated adult classes for both beginners who are learning to read the Arabic script for the first time and experienced readers who want to refine their Tajweed, memorize Surahs, or study Quran translation and Tafseer. Adult sessions are private and scheduled around work and family routines."
    },
    {
      question: "Do beginners need previous Quran knowledge?",
      answer: "No prior Arabic or Quran background is needed. Absolute beginners start with Noorani Qaida, where our tutors introduce individual Arabic alphabet letters, sound articulation points (Makharij), short vowel marks, and compound word formations step by step."
    },
    {
      question: "Are online Quran classes one-on-one?",
      answer: "Yes. Every class at OQTutor is 100% live and one-on-one. Your teacher focuses entirely on one student throughout the session, allowing immediate correction of pronunciation errors, personalized pacing, and rapid confidence building without group distractions."
    },
    {
      question: "Can I try a Quran class before enrolling?",
      answer: "Yes. OQTutor offers a free trial class with no financial commitment and no credit card required. This allows you and your child to experience our interactive digital classroom, evaluate the tutor's teaching style, and receive an initial level assessment before choosing a monthly plan."
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
    "name": "Online Quran Classes in California for Kids & Adults | OQTutor",
    "description": "Learn Quran online in California with certified male and female tutors. Enjoy live 1-on-1 Quran classes for kids and adults, Tajweed, Hifz, Noorani Qaida and flexible Pacific Time scheduling.",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
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
                Online Quran Classes in <span className="text-primary">California</span> for Kids &amp; Adults
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

        {/* SECTION: WHY CHOOSE OQTUTOR IN CALIFORNIA */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Tailored for California
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Choose OQTutor for Online Quran Classes in California?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Muslim families across California face demanding academic schedules, long highway commutes, and diverse extracurricular commitments. Here is why our online platform is the ideal choice for Quran learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 1. Learn From Home in California */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5">1. Learn From Home in California</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Eliminate the frustration of battling rush-hour traffic on the I-405, I-10, Highway 101, or the Bay Bridge. Your child learns from a quiet, secure home study environment without stressful post-school driving.
                  </p>
                </div>
              </div>

              {/* 2. Flexible Pacific Time Scheduling */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5">2. Flexible Pacific Time Scheduling</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Classes are scheduled around California school bell times, sports practices, and work commitments. Choose 30-minute private slots in the morning, afternoon, evening, or weekend that fit your household rhythm.
                  </p>
                </div>
              </div>

              {/* 3. One-on-One Quran Instruction */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5">3. One-on-One Quran Instruction</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Unlike crowded weekend mosque classes where a single teacher oversees 15+ students, private 1-on-1 sessions ensure your teacher hears every single syllable and corrects Tajweed mistakes immediately.
                  </p>
                </div>
              </div>

              {/* 4. Male and Female Quran Teachers */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5">4. Male and Female Quran Teachers</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    We respect family preferences and modesty guidelines. California families can select certified male instructors for boys or brothers, and patient <Link href="/courses/female-quran-teacher" className="text-primary font-semibold hover:underline">female Quran teachers</Link> for daughters and adult sisters.
                  </p>
                </div>
              </div>

              {/* 5. Programs for Kids and Adults */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5">5. Programs for Kids and Adults</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    From 4-year-olds beginning Noorani Qaida to university students and working professionals perfecting their recitation, our curriculum is personalized to match each student's current capacity and goals.
                  </p>
                </div>
              </div>

              {/* 6. Structured Quran Learning */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5">6. Structured Quran Learning</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Every learner receives an individualized syllabus, milestone checkpoints, and transparent monthly progress reporting so parents know exactly what their child has learned and what comes next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: QURAN CLASSES FOR KIDS IN CALIFORNIA */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Child-Centered Pedagogy
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Quran Classes for Kids in California
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    Instilling a love for the Holy Quran in young children requires patience, positive reinforcement, and engaging digital tools. Our specialized kids' curriculum begins with the fundamentals of the <strong className="font-semibold text-foreground">Arabic alphabet</strong> and <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>, teaching young learners letter shapes, sounds, and vowel markings through colorful visual aids.
                  </p>
                  <p>
                    As students advance to <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran reading</Link>, tutors guide them through verse-by-verse recitation with practical <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed rules</Link>, short Surah memorization from Juz Amma, and foundational <Link href="/courses/islamic-studies" className="text-primary font-semibold hover:underline">Islamic Studies</Link> covering daily Duas, Wudu, and prayer manners.
                  </p>
                  <p>
                    Classes are structured into bite-sized 30-minute sessions that maintain high focus and enthusiasm. California parents receive regular progress updates, lesson logs, and teacher notes to stay actively connected to their child's spiritual and educational journey.
                  </p>
                </div>

                {/* AEO-Style Concise Answer Box */}
                <div className="mt-8 glass p-6 rounded-2xl border border-primary/30 bg-primary/5">
                  <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Direct Answer for Parents</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    What are the best online Quran classes for kids in California?
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    The best online Quran classes for kids in California combine certified, background-checked male or female tutors with live 1-on-1 instruction, an interactive Noorani Qaida and Tajweed syllabus, flexible Pacific Time scheduling around school hours, and consistent parent progress reports without stressful driving.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/online-quran-lessons-texas-boy.jpg"
                      alt="Young Muslim child in California learning Quran online from home with a certified tutor"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ONLINE QURAN CLASSES FOR ADULTS IN CALIFORNIA */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/adult-quran-memorization.jpg"
                      alt="Adult Muslim student in California studying the Quran online with personalized one-on-one guidance"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px]"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Adult Education
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes for Adults in California
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    It is never too late to begin or elevate your relationship with the Holy Quran. Many Muslim adults across California—including working professionals in tech, healthcare, and finance, busy parents, university students, and reverts—wish to learn Quran reading or improve their recitation but hesitate due to busy schedules or fear of judgment.
                  </p>
                  <p>
                    OQTutor offers a private, supportive, and respectful learning environment tailored specifically for adults. Our adult tracks accommodate complete beginners starting from the Arabic letters, intermediate learners looking to eliminate pronunciation errors and master <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed rules</Link>, and advanced students pursuing <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Quran memorization (Hifz)</Link> or <Link href="/courses/tafseer" className="text-primary font-semibold hover:underline">Quran translation and Tafseer</Link>.
                  </p>
                  <p>
                    With early morning and late evening Pacific Time slots, you can easily schedule your classes before your workday starts or after your family settles for the evening. Explore our detailed guide on <Link href="/blog/online-quran-classes-usa-for-adults" className="text-primary font-semibold hover:underline">online Quran classes for adults</Link> to learn more.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-foreground bg-foreground/[0.03] border border-card-border/60 rounded-full px-4 py-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Adult Beginners Welcome</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-foreground bg-foreground/[0.03] border border-card-border/60 rounded-full px-4 py-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Tajweed Refinement</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-semibold text-foreground bg-foreground/[0.03] border border-card-border/60 rounded-full px-4 py-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Private &amp; Self-Paced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: OUR ONLINE QURAN COURSES IN CALIFORNIA */}
        <section id="courses" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Comprehensive Curriculum
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Our Online Quran Courses in California
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Choose from our structured courses, each taught one-on-one by certified scholars with customized lesson plans.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course 1: Noorani Qaida */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Beginner Level
                    </span>
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Noorani Qaida</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                    The foundational Arabic phonetics course for children and adult beginners. Learn alphabet recognition, joint letter formations, and short vowel signs with accurate articulation.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-text font-medium">2–3 Months • 1-on-1</span>
                  <Link href="/courses/noorani-qaida" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1">
                    <span>View Course</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Course 2: Quran Reading */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Fluency Track
                    </span>
                    <BookOpen className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Quran Reading</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                    Transition from basic letters to continuous Quranic reading directly from the Mushaf. Build smooth recitation pace, breath control, and confidence across short and long Surahs.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-text font-medium">All Ages • 1-on-1</span>
                  <Link href="/courses/quran-reading" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1">
                    <span>View Course</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Course 3: Quran with Tajweed */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Recitation Rules
                    </span>
                    <Award className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Quran With Tajweed</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                    Master the sacred rules of recitation including Makharij, Ghunnah, Qalqalah, Ikhfa, Idgham, Madd, and stopping rules (Waqf) under the guidance of certified Qaris.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-text font-medium">Certified Tutors • 1-on-1</span>
                  <Link href="/courses/tajweed" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1">
                    <span>View Course</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Course 4: Hifz-ul-Quran */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Memorization
                    </span>
                    <Star className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Hifz-ul-Quran</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                    Structured Quran memorization with certified Huffaz. Includes daily new lesson recitation (Sabaq), recent revision (Sabaqi), and long-term revision cycles (Manzil) for strong retention.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-text font-medium">Custom Pace • 1-on-1</span>
                  <Link href="/courses/hifz" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1">
                    <span>View Course</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Course 5: Islamic Studies */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Character &amp; Faith
                    </span>
                    <HeartHandshake className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Islamic Studies</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                    Practical Islamic education covering daily Duas, step-by-step Wudu and Salah instruction, Seerah of the Prophet (PBUH), Islamic manners (Adab), and core Muslim beliefs.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-text font-medium">Kids &amp; Teens • 1-on-1</span>
                  <Link href="/courses/islamic-studies" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1">
                    <span>View Course</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Course 6: Quran Translation & Tafseer */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg hover:border-primary/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Meaning &amp; Context
                    </span>
                    <Compass className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Quran Translation &amp; Tafseer</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                    Understand the word-for-word meaning, historical context, and spiritual wisdom behind the verses of the Holy Quran, guided by qualified Islamic scholars.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
                  <span className="text-xs text-muted-text font-medium">Teens &amp; Adults • 1-on-1</span>
                  <Link href="/courses/tafseer" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1">
                    <span>View Course</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: LEARN QURAN WITH TAJWEED IN CALIFORNIA */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Recitation Precision
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Learn Quran With Tajweed in California
                </h2>
                <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
                <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                  Tajweed is the science of reciting each Arabic letter from its correct origin with its inherent and conditional characteristics. Our <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed course</Link> breaks down foundational rules into practical, easy-to-apply lessons:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="glass p-6 rounded-2xl border border-card-border">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Makharij (Articulation Points)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Learning the exact physical origin of each Arabic letter from the throat (Halq), tongue (Lisaan), lips (Shafataan), nasal cavity (Khayshoom), and chest cavity (Jawf).
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-card-border">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Ghunnah (Nasalization)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Producing the melodious two-count nasal tone on Noon and Meem Mushaddadah as well as during Ikhfa and Idgham rules.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-card-border">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Qalqalah (Echoing Sound)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Mastering the echoing vibration on the five letters of Qutb Jad (ق, ط, ب, ج, د) when they carry a Sukoon or are stopped upon.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-card-border">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Ikhfa &amp; Idgham (Hiding &amp; Merging)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Understanding when to hide the Noon Sakinah and Tanween with light nasal tone (Ikhfa) versus merging it smoothly into neighboring letters (Idgham).
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-card-border">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Madd (Elongation Rules)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Distinguishing between natural 2-count elongations (Madd Asli) and extended 4-to-6 count elongations (Madd Far'ee) caused by Hamzah or Sukoon.
                  </p>
                </div>

                <div className="glass p-6 rounded-2xl border border-card-border">
                  <h3 className="text-base font-bold text-foreground mb-2 flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>Waqf (Stopping &amp; Pausing Rules)</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Navigating punctuation symbols (م, ط, ج, ز, ص, لا) to pause and resume recitation correctly without distorting the sacred meaning of the verses.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/courses/tajweed"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Explore Our Full Tajweed Course</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FLEXIBLE QURAN CLASSES FOR EVERY CALIFORNIA TIME ZONE */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Pacific Time Scheduling
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Flexible Quran Classes for Every California Time Zone
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    All lesson schedules for our California students are coordinated directly in <strong className="font-semibold text-foreground">Pacific Time (PT)</strong>. We recognize that daily timetables in California are diverse—from public school schedules and after-school sports to corporate tech shifts and family dinner routines.
                  </p>
                  <p>
                    Rather than forcing students into rigid classroom hours, OQTutor offers convenient slots across morning, afternoon, evening, and weekend periods:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-foreground">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span><strong>Early Morning Slots:</strong> 6:00 AM – 8:00 AM PT (ideal before school or commute)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span><strong>After-School Afternoon:</strong> 3:30 PM – 7:00 PM PT (popular for children &amp; teens)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span><strong>Evening Sessions:</strong> 7:30 PM – 10:00 PM PT (convenient after dinner and prayer)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      <span><strong>Weekend Flexibility:</strong> Saturday &amp; Sunday morning and afternoon time windows</span>
                    </li>
                  </ul>
                  <p>
                    If travel, school exams, or unexpected family events arise, you can reschedule lessons with advance notice through our flexible platform, keeping your learning steady throughout the year.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="glass p-8 rounded-3xl border border-card-border shadow-xl w-full max-w-md bg-background/60">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Sample California Schedule</h3>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-foreground/[0.03] border border-card-border/60 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Mon – Wed – Fri</span>
                      <span className="text-primary font-medium">4:30 PM – 5:00 PM PT</span>
                    </div>
                    <div className="p-3 rounded-xl bg-foreground/[0.03] border border-card-border/60 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Tue – Thu</span>
                      <span className="text-primary font-medium">6:00 PM – 6:30 PM PT</span>
                    </div>
                    <div className="p-3 rounded-xl bg-foreground/[0.03] border border-card-border/60 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Sat &amp; Sun</span>
                      <span className="text-primary font-medium">10:00 AM – 10:30 AM PT</span>
                    </div>
                    <div className="p-3 rounded-xl bg-foreground/[0.03] border border-card-border/60 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Adult Evening</span>
                      <span className="text-primary font-medium">8:30 PM – 9:00 PM PT</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-card-border/60 text-center">
                    <Link
                      href="/book-free-trial"
                      className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1"
                    >
                      <span>Choose Your Preferred Slot</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: ONLINE QURAN CLASSES ACROSS CALIFORNIA */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Statewide Access
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Online Quran Classes Across California
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Because our classes are conducted 100% online in live interactive classrooms, students can enroll from anywhere in California without geographic limitations or physical commute barriers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Region 1: Southern California */}
              <div className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Southern California</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">Greater LA &amp; San Diego</h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    Serving Muslim households across Los Angeles, San Diego, Irvine, Anaheim, Long Beach, Pasadena, Riverside, and Orange County communities.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary/80 bg-primary/5 rounded-full px-3 py-1 w-fit">
                  Pacific Time Aligned
                </span>
              </div>

              {/* Region 2: Bay Area */}
              <div className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>SF Bay Area</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">Silicon Valley &amp; East Bay</h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    Serving busy tech and professional families in San Francisco, San Jose, Fremont, Sunnyvale, Santa Clara, Oakland, and surrounding suburbs.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary/80 bg-primary/5 rounded-full px-3 py-1 w-fit">
                  Pacific Time Aligned
                </span>
              </div>

              {/* Region 3: Central California */}
              <div className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Central California</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">Central Valley Communities</h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    Bringing certified Quran scholars directly to homes in Fresno, Bakersfield, Stockton, Modesto, and the broader San Joaquin Valley.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary/80 bg-primary/5 rounded-full px-3 py-1 w-fit">
                  Pacific Time Aligned
                </span>
              </div>

              {/* Region 4: Sacramento Area */}
              <div className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex items-center space-x-2 text-primary font-bold text-sm mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>Sacramento Region</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">Capital &amp; Surrounding Areas</h3>
                  <p className="text-xs text-muted-text leading-relaxed mb-4">
                    Supporting growing Muslim communities in Sacramento, Elk Grove, Roseville, Folsom, Citrus Heights, and neighboring counties.
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-primary/80 bg-primary/5 rounded-full px-3 py-1 w-fit">
                  Pacific Time Aligned
                </span>
              </div>
            </div>

            <div className="mt-10 text-center text-xs text-muted-text max-w-2xl mx-auto">
              <p>
                Looking for other US states? Visit our nationwide <Link href="/locations/usa" className="text-primary font-semibold hover:underline">USA Quran classes directory</Link> for programs in Texas, Illinois, Michigan, New York, and all 50 states.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: HOW ONLINE QURAN CLASSES WORK */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Simple 5-Step Process
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How Online Quran Classes Work
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Getting started with OQTutor is quick, transparent, and completely risk-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  step: "1",
                  title: "Choose Your Course",
                  desc: "Select the track that matches your goals—from Noorani Qaida and Quran Reading to Tajweed, Hifz, or Islamic Studies."
                },
                {
                  step: "2",
                  title: "Book a Free Trial",
                  desc: "Complete our quick trial registration form. No credit card details required and zero financial obligation."
                },
                {
                  step: "3",
                  title: "Meet Your Tutor",
                  desc: "Attend a live 1-on-1 session over video call to meet your matched male or female teacher and test our interactive portal."
                },
                {
                  step: "4",
                  title: "Get a Learning Plan",
                  desc: "Receive a personalized skill assessment and a custom lesson schedule aligned with your Pacific Time routine."
                },
                {
                  step: "5",
                  title: "Start Regular Classes",
                  desc: "Begin your regular weekly sessions with ongoing progress tracking, parent reports, and continuous teacher support."
                }
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <span className="h-9 w-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-sm mb-5 font-sans">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-text leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Book Your Free Trial Class</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: MEET OUR QUALIFIED QURAN TUTORS */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
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
                <div key={idx} className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all">
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

        {/* SECTION: PRICING - HOW MUCH DO CLASSES COST IN CALIFORNIA? */}
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
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

        {/* SECTION: WHY CALIFORNIA FAMILIES CHOOSE ONLINE QURAN LEARNING */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Modern Muslim Family Needs
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why California Families Choose Online Quran Learning
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">No Commuting Stress</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Avoid 1–2 hours spent in California gridlock driving to and from local centers after a tiring school or work day.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">Learn Safely From Home</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Children learn comfortably in their own home study space where parents can observe lesson quality and atmosphere.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">Flexible Routines</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Fit 30-minute private lessons around after-school sports, AP classes, tutoring, and family dinner hours easily.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">100% Private Attention</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Every mistake is heard and corrected in real time without the embarrassment or distraction of peer pressure.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">For Kids &amp; Adults</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Whole families can study together under the same academy with courses tailored for toddlers, teens, and parents.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">Male &amp; Female Tutors</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Choose certified male or female teachers to ensure comfort, modesty, and positive mentorship for your child.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">Personalized Pace</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Never rush or fall behind a generic classroom syllabus. Slow down on difficult rules or accelerate when ready.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <h3 className="text-base font-bold text-foreground mb-2">Parent Involvement</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Receive regular progress updates, teacher notes, and milestone certificates directly to your email or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
        <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Clear Answers
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Have questions about our California online Quran classes? Find answers to common inquiries below.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="glass p-6 sm:p-7 rounded-2xl border border-card-border/60">
                  <h3 className="font-bold text-base sm:text-lg text-foreground font-sans mb-2.5">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: RECOMMENDED GUIDES & BLOG ARTICLES */}
        <section className="py-16 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Educational Resources
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Recommended Quran Learning Guides
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/blog/online-quran-classes-in-the-usa-for-kids-and-adults"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider px-2.5 py-1 bg-primary/10 rounded-full inline-block">
                    National Guide
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    Online Quran Classes in the USA for Kids and Adults
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    A comprehensive overview of Noorani Qaida, Tajweed, and Hifz tracks for students across US time zones.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/what-us-parents-should-know-before-choosing-an-online-quran-tutor"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider px-2.5 py-1 bg-secondary/10 rounded-full inline-block">
                    Parent Checklist
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    What US Parents Should Know Before Choosing an Online Quran Tutor
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    How to verify teacher credentials, structure trial lessons, and evaluate online Quran academies.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/beginners-guide-mastering-tajweed-rules"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider px-2.5 py-1 bg-emerald-500/10 rounded-full inline-block">
                    Tajweed Science
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    Beginner's Guide to Mastering Tajweed Rules
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    A clear, step-by-step introduction to Arabic articulation points, nasalization, and vowel elongations.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION: START LEARNING THE QURAN FROM HOME IN CALIFORNIA */}
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
                Join Muslim families throughout California who rely on OQTutor for personalized Noorani Qaida, Tajweed, Quran Reading, and Hifz classes. Schedule your free trial class today with no credit card required.
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
