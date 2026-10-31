import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, Clock, Users, BookOpen, ShieldCheck, 
  ArrowRight, MapPin, Sparkles, Laptop, Award, Star,
  HeartHandshake, GraduationCap, Check, Compass
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes in Illinois | 1-on-1 Tutors, 3-Day Free Trial";
  const metaDescription = "1-on-1 online Quran classes for Illinois families in Central Time (CST). Certified male & female tutors for kids & adults. Start your 3-day free trial today!";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: "https://www.oqtutor.com/locations/usa/illinois",
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/usa/illinois",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: "https://www.oqtutor.com/logo.jpg",
          width: 1200,
          height: 630,
          alt: "OQTutor Online Quran Academy Logo",
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

export default async function IllinoisQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const faqList = [
    {
      question: "Do you offer online Quran classes in Chicago and across Illinois?",
      answer: "Yes, OQTutor provides live 1-on-1 online Quran classes to Muslim families throughout Chicago, Naperville, Aurora, Schaumburg, Bolingbrook, Skokie, and all communities across Illinois. Because all classes are conducted online over Zoom or Google Meet, students learn safely and comfortably from home without commuting."
    },
    {
      question: "What time zone are classes in, and can you work around school pickups?",
      answer: "All classes for Illinois students are scheduled in Central Time (CST/CDT). We offer flexible slots between 6:00 AM and 9:30 PM CST, allowing parents to schedule sessions right after school dismissals (3:30 PM–5:30 PM CST), during evening homework hours, or on weekend mornings without interfering with carpools and sports."
    },
    {
      question: "Do you teach children, adults and sisters?",
      answer: "Yes. We offer tailored programs for children (ages 4 and up), complete beginners, youth, adult professionals, and sisters. Lessons are customized to each student's current proficiency, whether starting with the Arabic alphabet in Noorani Qaida, perfecting recitation, or undertaking comprehensive Hifz memorization."
    },
    {
      question: "Can I choose a female teacher?",
      answer: "Yes, absolutely. OQTutor has verified, qualified female Quran teachers available for young children, teenage girls, and adult sisters who prefer female instruction. You can request a female instructor directly during your registration, and all sessions take place in a private, supportive 1-on-1 virtual setting."
    },
    {
      question: "How does the 3-day free trial work?",
      answer: "Our 3-day free trial gives you three consecutive days of live, 1-on-1 instruction with no credit card required and zero obligation. Day 1 covers an initial diagnostic evaluation, Day 2 features a live interactive lesson with screen sharing, and Day 3 provides parent feedback and a personalized learning plan."
    },
    {
      question: "How much do classes cost?",
      answer: "Our monthly tuition is simple and transparent: Starter ($30/month for 3 classes/week), Standard ($40/month for 5 classes/week), and Premium ($50/month for daily 7 classes/week). Each class lasts 30 to 40 minutes, and we offer a 15% sibling discount on each additional child [OWNER INPUT NEEDED: confirm it applies on this page's context]."
    },
    {
      question: "Which platform is used (Zoom or Google Meet) and what equipment is needed?",
      answer: "Classes run live on Zoom or Google Meet depending on your family's preference. All you need is a laptop, tablet, or desktop computer with a webcam, microphone, and a stable internet connection. Our instructors share digital Qaida pages and the Mushaf directly on screen so no physical books are required."
    },
    {
      question: "Can siblings join?",
      answer: "Yes. Siblings can enroll together, though each child receives their own dedicated 1-on-1 time with their tutor to ensure focused attention and individualized feedback. Enrolling multiple children qualifies your family for our 15% sibling discount on each additional child [OWNER INPUT NEEDED: confirm it applies on this page's context]."
    },
    {
      question: "Can my child learn Tajweed online?",
      answer: "Yes. Our instructors specialize in teaching practical Tajweed rules through interactive screen-sharing. Children learn articulation points (Makharij), rules of Noon and Meem Sakinah, Qalqalah, and Madd step-by-step with immediate correction and guided phonetic repetition."
    },
    {
      question: "How is this different from weekend school at the mosque?",
      answer: "While weekend Islamic schools provide great community socialization, each child often receives only 3 to 5 minutes of individual recitation time in a crowded classroom. OQTutor provides 30 to 40 minutes of undivided 1-on-1 attention 3 to 5 days a week, making it an ideal companion to reinforce recitation fluency."
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
        "name": "USA",
        "item": "https://www.oqtutor.com/locations/usa"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Illinois",
        "item": "https://www.oqtutor.com/locations/usa/illinois"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Online Quran Classes in Illinois - OQTutor",
    "serviceType": "Online Quran Tutoring",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com",
      "logo": "https://www.oqtutor.com/logo.jpg"
    },
    "description": "Live 1-on-1 online Quran classes in Central Time (CST/CDT) for students in Chicago, Naperville, Aurora, Schaumburg, and throughout Illinois with certified male and female tutors.",
    "areaServed": [
      { "@type": "State", "name": "Illinois" },
      { "@type": "City", "name": "Chicago" },
      { "@type": "City", "name": "Naperville" },
      { "@type": "City", "name": "Aurora" },
      { "@type": "City", "name": "Schaumburg" },
      { "@type": "City", "name": "Skokie" },
      { "@type": "City", "name": "Evanston" },
      { "@type": "City", "name": "Bolingbrook" },
      { "@type": "City", "name": "Joliet" },
      { "@type": "City", "name": "Elgin" },
      { "@type": "City", "name": "Rockford" },
      { "@type": "City", "name": "Springfield" },
      { "@type": "City", "name": "Peoria" },
      { "@type": "City", "name": "Champaign" }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "30",
      "highPrice": "50",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "price": "30",
          "priceCurrency": "USD",
          "description": "3 classes per week, 30-40 min sessions"
        },
        {
          "@type": "Offer",
          "name": "Standard Plan",
          "price": "40",
          "priceCurrency": "USD",
          "description": "5 classes per week, 30-40 min sessions"
        },
        {
          "@type": "Offer",
          "name": "Premium Plan",
          "price": "50",
          "priceCurrency": "USD",
          "description": "Daily 7 classes per week, 30-40 min sessions"
        }
      ]
    }
  };

  const scheduleWindows = [
    {
      window: "Early Morning (Pre-School / Fajr)",
      days: "Monday – Friday",
      timeCST: "6:00 AM – 7:30 AM CST",
      audience: "Memorization (Hifz) students & working professionals",
      platform: "Zoom / Google Meet"
    },
    {
      window: "Primary After-School Window",
      days: "Monday – Friday",
      timeCST: "3:30 PM – 5:30 PM CST",
      audience: "Elementary & middle school kids right after school dismissal",
      platform: "Zoom / Google Meet"
    },
    {
      window: "Late Afternoon / Evening",
      days: "Monday – Friday",
      timeCST: "5:30 PM – 7:30 PM CST",
      audience: "Students balancing dinner, homework & sports practice",
      platform: "Zoom / Google Meet"
    },
    {
      window: "Night Session",
      days: "Monday – Friday",
      timeCST: "7:30 PM – 9:30 PM CST",
      audience: "High schoolers, working parents & adult sisters",
      platform: "Zoom / Google Meet"
    },
    {
      window: "Saturday & Sunday Morning",
      days: "Saturday & Sunday",
      timeCST: "8:00 AM – 1:00 PM CST",
      audience: "Weekend intensive reading, Qaida foundations & Tajweed drills",
      platform: "Zoom / Google Meet"
    },
    {
      window: "Saturday & Sunday Afternoon",
      days: "Saturday & Sunday",
      timeCST: "2:00 PM – 6:00 PM CST",
      audience: "Flexible weekend lessons avoiding busy family travel",
      platform: "Zoom / Google Meet"
    }
  ];

  const illinoisCommunities = [
    { name: "Chicago", region: "Cook County", note: "West Ridge, Albany Park, Downtown & South Side communities" },
    { name: "Naperville", region: "DuPage / Will County", note: "Busy suburban families balancing District 203 & 204 schedules" },
    { name: "Aurora", region: "Kane / DuPage County", note: "Flexible after-school slots for diverse family routines" },
    { name: "Schaumburg", region: "Cook County", note: "Northwest suburban households avoiding I-90 rush hour traffic" },
    { name: "Skokie", region: "Cook County", note: "Convenient evening sessions for North Shore students" },
    { name: "Evanston", region: "Cook County", note: "University students, adults and youth learners" },
    { name: "Bolingbrook", region: "Will / DuPage County", note: "Dedicated 1-on-1 attention for elementary & middle schoolers" },
    { name: "Joliet", region: "Will County", note: "Southwest suburban learners seeking qualified female & male scholars" },
    { name: "Elgin", region: "Kane County", note: "Fox Valley families accessing structured Tajweed curricula" },
    { name: "Rockford", region: "Winnebago County", note: "Northern Illinois learners connecting with specialized tutors" },
    { name: "Springfield", region: "Sangamon County", note: "State capital families learning without travel distance" },
    { name: "Peoria", region: "Peoria County", note: "Central Illinois students enjoying 1-on-1 lesson pacing" },
    { name: "Champaign", region: "Champaign County", note: "University town students & families balancing busy timetables" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-card-border/40 bg-foreground/[0.015]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-muted-text">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/locations/usa" className="hover:text-primary transition-colors">USA</Link>
              <span>/</span>
              <span className="text-foreground font-semibold">Illinois</span>
            </nav>
          </div>
        </div>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-8 pb-12 md:pt-14 md:pb-20 bg-gradient-to-b from-primary/[0.04] via-background to-background">
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Hero Copy & CTA */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 text-xs font-bold text-primary tracking-wide shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span>Central Time (CST/CDT) • 1-on-1 Online Tutors • Plans from $30/Month</span>
                </div>

                {/* Exactly One H1 */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]">
                  Online Quran Classes in Illinois
                </h1>

                {/* Subheading naming Chicago and surrounding communities */}
                <p className="text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                  Live 1-on-1 Quran tutoring for Muslim families in Chicago, Naperville, Aurora, Schaumburg, and communities across Illinois on Central Time.
                </p>

                {/* Value Proposition Spec Bullets */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start space-x-3 p-3.5 rounded-2xl glass border border-card-border/80 hover:border-primary/30 transition-all bg-card/40">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-bold text-foreground">Dedicated 1-on-1 Attention:</strong>{" "}
                      <span className="text-muted-text font-normal">
                        Patient, certified male and female tutors focused 100% on you or your child with immediate pronunciation feedback.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-2xl glass border border-card-border/80 hover:border-primary/30 transition-all bg-card/40">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Clock className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-bold text-foreground">Flexible Central Time Scheduling:</strong>{" "}
                      <span className="text-muted-text font-normal">
                        30 to 40 minute classes scheduled in CST/CDT after school, during evening study hours, or on weekends.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-2xl glass border border-card-border/80 hover:border-primary/30 transition-all bg-card/40">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Laptop className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-bold text-foreground">Zoom or Google Meet Convenience:</strong>{" "}
                      <span className="text-muted-text font-normal">
                        Interactive screen-sharing with digital Qaida and Mushaf—zero rush-hour driving on Illinois highways.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                      href="/book-free-trial"
                      className="group relative flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm sm:text-base cursor-pointer"
                    >
                      <span>Book Your 3-Day Free Trial</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href="#class-times"
                      className="flex items-center justify-center space-x-2 px-7 py-4 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm sm:text-base cursor-pointer"
                    >
                      <span>View CST Schedule</span>
                    </a>
                  </div>

                  {/* Micro-copy matching Rule 3 */}
                  <p className="mt-3.5 text-xs text-muted-text font-medium flex items-center space-x-1.5">
                    <Sparkles className="h-4 w-4 text-secondary shrink-0" />
                    <span>3-day free trial, no credit card required • Cancel anytime • 15% sibling discount [OWNER INPUT NEEDED: confirm it applies on this page&apos;s context]</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Visual & Specs Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3.5 rounded-3xl border border-card-border shadow-2xl overflow-hidden bg-card/60 backdrop-blur-xl">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                      <Image
                        src="/illinois-1.jpg"
                        alt="Illinois student attending live 1-on-1 online Quran class on laptop"
                        width={600}
                        height={450}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center space-x-1.5 shadow-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live 1-on-1 • Central Time (CST/CDT)</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-primary/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        Plans: $30, $40, $50/Mo
                      </div>
                    </div>

                    {/* Preview Feature List */}
                    <div className="p-4 space-y-2.5 bg-foreground/[0.02] rounded-2xl mt-3 border border-card-border/50">
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span>3-day free trial, no credit card required</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>30 to 40 minute live sessions on Zoom or Meet</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span>Certified male and female teachers available</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                        <span>100% online academy • No commute required</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-card-border/60 flex items-center justify-between px-1">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-semibold text-foreground">Central Time Trial Slots</span>
                      </div>
                      <span className="text-[11px] font-bold text-primary">Open This Week</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION A: QUICK ANSWER BLOCK */}
        <section className="py-8 bg-foreground/[0.02] border-y border-card-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-6 md:p-8 rounded-3xl border border-primary/20 bg-primary/[0.02]">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-wider">
                    <Compass className="h-4 w-4" />
                    <span>Quick Overview for Illinois Families</span>
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                    OQTutor provides live, 1-on-1 online Quran classes tailored for Muslim children, beginners, adults, and sisters across Illinois. All sessions are scheduled in Central Time (CST/CDT) to fit smoothly around local school dismissals and work hours. Families start with a 3-day free trial with no credit card required, with flexible monthly plans starting at $30 to $50 per month for 30-to-40-minute classes on Zoom or Google Meet.
                  </p>
                </div>
                <div className="shrink-0">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <span>Start 3-Day Trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Key Specs Row */}
              <div className="mt-6 pt-6 border-t border-card-border/50 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                <div className="p-3 rounded-2xl bg-background/60 border border-card-border/40">
                  <span className="text-[11px] text-muted-text block uppercase tracking-wider font-semibold">Format</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">1-on-1 Live Online</span>
                </div>
                <div className="p-3 rounded-2xl bg-background/60 border border-card-border/40">
                  <span className="text-[11px] text-muted-text block uppercase tracking-wider font-semibold">Platform</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">Zoom / Google Meet</span>
                </div>
                <div className="p-3 rounded-2xl bg-background/60 border border-card-border/40">
                  <span className="text-[11px] text-muted-text block uppercase tracking-wider font-semibold">Duration</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">30–40 Mins / Class</span>
                </div>
                <div className="p-3 rounded-2xl bg-background/60 border border-card-border/40">
                  <span className="text-[11px] text-muted-text block uppercase tracking-wider font-semibold">Time Zone</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">Central (CST / CDT)</span>
                </div>
                <div className="p-3 rounded-2xl bg-background/60 border border-card-border/40">
                  <span className="text-[11px] text-muted-text block uppercase tracking-wider font-semibold">Tuition</span>
                  <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">$30, $40, $50 / Mo</span>
                </div>
                <div className="p-3 rounded-2xl bg-background/60 border border-card-border/40">
                  <span className="text-[11px] text-muted-text block uppercase tracking-wider font-semibold">Trial Period</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">3 Days Free</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anchor Table of Contents */}
        <section className="py-4 border-b border-card-border/40 bg-background sticky top-16 z-30 backdrop-blur-md bg-background/90">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 overflow-x-auto py-1 scrollbar-none text-xs">
              <span className="font-bold text-muted-text whitespace-nowrap mr-1">On This Page:</span>
              <a href="#class-times" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">Class Times (CST)</a>
              <a href="#communities" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">Where We Teach</a>
              <a href="#why-online" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">Why Online</a>
              <a href="#online-vs-weekend" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">Online vs Weekend School</a>
              <a href="#programs" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">Courses & Learners</a>
              <a href="#trial-process" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">3-Day Trial Process</a>
              <a href="#tutors-trust" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">Certified Tutors</a>
              <a href="#pricing" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">Monthly Plans</a>
              <a href="#faq" className="px-3 py-1.5 rounded-full glass border border-card-border text-foreground hover:text-primary whitespace-nowrap transition-colors">FAQ</a>
            </div>
          </div>
        </section>

        {/* SECTION B: CLASS TIMES FOR ILLINOIS FAMILIES (CENTRAL TIME) */}
        <section id="class-times" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Central Time Timetable
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Class Times for Illinois Families (Central Time)
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Consistency is the key to mastering Quran recitation and Tajweed. Because Illinois families manage demanding school dismissals, sports, and parental work commutes, our scheduling is calibrated entirely in Central Standard Time (CST) and Central Daylight Time (CDT). Classes remain locked to your local Illinois clock time, so your routine stays smooth regardless of daylight saving shifts.
              </p>
            </div>

            {/* Mobile Scrollable Schedule Table */}
            <div className="glass rounded-3xl border border-card-border overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="bg-foreground/[0.03] border-b border-card-border text-xs uppercase tracking-wider text-muted-text">
                      <th scope="col" className="py-4 px-6 font-bold">Schedule Window</th>
                      <th scope="col" className="py-4 px-6 font-bold">Days</th>
                      <th scope="col" className="py-4 px-6 font-bold">Central Time (CST/CDT)</th>
                      <th scope="col" className="py-4 px-6 font-bold">Recommended For</th>
                      <th scope="col" className="py-4 px-6 font-bold">Class Platform</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/60 text-xs sm:text-sm">
                    {scheduleWindows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-foreground/[0.015] transition-colors">
                        <td className="py-4 px-6 font-bold text-foreground whitespace-nowrap">
                          {row.window}
                        </td>
                        <td className="py-4 px-6 text-muted-text whitespace-nowrap">
                          {row.days}
                        </td>
                        <td className="py-4 px-6 font-semibold text-primary whitespace-nowrap">
                          {row.timeCST}
                        </td>
                        <td className="py-4 px-6 text-muted-text">
                          {row.audience}
                        </td>
                        <td className="py-4 px-6 text-muted-text whitespace-nowrap">
                          {row.platform}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* DST & Capacity Note */}
            <div className="mt-6 p-4 rounded-2xl glass border border-card-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-text">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>
                  <strong>Daylight Saving Time Note:</strong> Illinois alternates between CST (UTC-6) and CDT (UTC-5). Your selected class slot remains identical on your wall clock year-round.
                </span>
              </div>
              <span className="text-[11px] font-semibold text-primary shrink-0">
                [OWNER INPUT NEEDED: real available Central Time slots]
              </span>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Reserve Your Central Time Slot</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION C: WHERE WE TEACH FAMILIES IN ILLINOIS */}
        <section id="communities" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Statewide Remote Reach
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Where We Teach Families in Illinois
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                OQTutor provides personalized live instruction to students residing across the state. Because our academy operates entirely online, families in large metropolitan centers and rural communities receive identical, high-standard Quranic instruction right from their living rooms.
              </p>
            </div>

            {/* Disclaimer Callout Box */}
            <div className="max-w-4xl mx-auto mb-10 p-4.5 rounded-2xl glass border border-amber-500/30 bg-amber-500/[0.03] text-xs text-muted-text leading-relaxed">
              <strong className="font-semibold text-foreground">Online-Only Education Notice:</strong>{" "}
              OQTutor is a 100% online academy. We do not maintain a physical campus, local administrative office, or in-person classroom anywhere in Illinois. We do not claim local presence, physical staffing, or partnership with any Illinois mosque, Islamic school, or cultural center. All instruction occurs remotely via live video conferencing on Zoom or Google Meet.
            </div>

            {/* Communities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {illinoisCommunities.map((comm, idx) => (
                <div key={idx} className="glass p-5 rounded-2xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-primary font-bold mb-1">
                      <MapPin className="h-4 w-4 shrink-0" />
                      <h3 className="text-base text-foreground font-sans font-bold">{comm.name}</h3>
                    </div>
                    <span className="text-[11px] font-semibold text-muted-text uppercase tracking-wider block mb-2">{comm.region}</span>
                    <p className="text-xs text-muted-text leading-relaxed font-normal">
                      {comm.note}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-card-border/40 text-[11px] font-medium text-primary">
                    Live 1-on-1 Central Time Slots Available
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center text-xs text-muted-text">
              Looking for our national overview? Visit the <Link href="/locations/usa" className="text-primary font-semibold hover:underline">USA Online Quran Classes</Link> portal.
            </div>
          </div>
        </section>

        {/* SECTION D: WHY ILLINOIS FAMILIES CHOOSE ONLINE QURAN CLASSES */}
        <section id="why-online" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Illinois Lifestyle Realities
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Why Illinois Families Choose Online Quran Classes
                </h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
                
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    Raising Muslim children in Illinois brings immense blessings, but balancing faith-based education with modern schedules can quickly become exhausting. Parents throughout Chicago and its expansive suburban network—from Naperville and Aurora to Schaumburg and Orland Park—frequently navigate rigorous public and private school calendars, homework loads, and sports leagues.
                  </p>
                  <p>
                    Adding another physical evening commute creates significant stress. Navigating rush-hour congestion on major corridors like the Kennedy and Jane Addams Memorial Tollway (I-90), the Eisenhower (I-290), the Stevenson (I-55), or the Reagan Memorial (I-88) turns a simple 30-minute lesson into a two-hour ordeal.
                  </p>
                  <p>
                    Furthermore, Midwest winters introduce harsh conditions—sub-zero temperatures, freezing rain, and heavy snowfall that make evening driving hazardous for months at a time. For families living in central or downstate Illinois communities like Rockford, Peoria, Springfield, or Champaign, finding a qualified local Tajweed scholar or a specialized female teacher within reasonable driving distance can be challenging.
                  </p>
                  <p>
                    Online 1-on-1 tutoring solves these challenges completely. Students connect with certified Quran scholars directly from their study desks, allowing them to learn while warm, relaxed, and focused.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                  >
                    <span>Experience the convenience with a 3-day free trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-card/60">
                    <Image
                      src="/illinois-2.jpg"
                      alt="Muslim student in Illinois practicing Quran recitation with headphones on laptop"
                      width={480}
                      height={360}
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="w-full rounded-2xl object-cover h-[340px]"
                    />
                    <div className="p-4 mt-2">
                      <h3 className="font-bold text-sm text-foreground mb-1">Zero Commute • 100% Focus</h3>
                      <p className="text-xs text-muted-text">
                        Eliminate highway congestion and winter weather disruptions with structured remote learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION E: ONLINE VS WEEKEND ISLAMIC SCHOOL IN ILLINOIS */}
        <section id="online-vs-weekend" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Educational Comparison
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Online vs Weekend Islamic School in Illinois
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Illinois is blessed with vibrant masajid and weekend Islamic schools that play a foundational role in building community identity, peer friendships, and general Islamic literacy. When evaluating Quran recitation and Tajweed mastery, parents often compare weekend school classrooms with private online tutoring.
              </p>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Weekend School Card */}
              <div className="glass p-8 rounded-3xl border border-card-border/80 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                    <Users className="h-4 w-4" />
                    <span>Weekend Islamic Schools</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Community &amp; Social Fellowship</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-text leading-relaxed">
                    <li className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                      <span><strong>Vibrant Social Environment:</strong> Essential for helping children build friendships with Muslim peers in Illinois.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                      <span><strong>Broad Curriculum:</strong> Covers Islamic history, Seerah, moral etiquette, and communal prayer.</span>
                    </li>
                    <li className="flex items-start space-x-2.5 text-muted-text/80">
                      <Clock className="h-4.5 w-4.5 text-amber-500 shrink-0 mt-0.5" />
                      <span><strong>Recitation Bottleneck:</strong> In a class of 15 to 20 students, each child often reads aloud for only 3 to 5 minutes per week.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/50 text-xs text-muted-text">
                  Best for: Social immersion, Islamic environment &amp; weekend community activities.
                </div>
              </div>

              {/* Online Tutoring Card */}
              <div className="glass p-8 rounded-3xl border-2 border-primary/40 bg-primary/[0.02] flex flex-col justify-between shadow-xl shadow-primary/5">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-wider mb-3">
                    <Award className="h-4 w-4" />
                    <span>OQTutor 1-on-1 Online Model</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Focused Recitation &amp; Tajweed Mastery</h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-text leading-relaxed">
                    <li className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>100% Dedicated Attention:</strong> Full 30 to 40 minutes of uninterrupted teacher-student interaction every class.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Immediate Error Correction:</strong> Accurate phonetic coaching for Makharij and vowel lengths before bad habits form.</span>
                    </li>
                    <li className="flex items-start space-x-2.5">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>High-Frequency Retention:</strong> Practicing 3 to 5 days weekly ensures steady progress and effortless memory retention.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/50 text-xs text-muted-text">
                  Best for: Fast Qaida completion, precise Tajweed rules &amp; individualized Hifz pacing.
                </div>
              </div>

            </div>

            {/* Hybrid Model Recommendation */}
            <div className="mt-10 max-w-4xl mx-auto glass p-6 rounded-2xl border border-primary/20 bg-background text-center">
              <h4 className="text-base font-bold text-foreground mb-2">Our Recommendation: The Hybrid Model</h4>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Many Illinois parents find the highest success by embracing a hybrid approach: sending their children to the local Islamic center on weekends for community bonding and Islamic studies, while relying on OQTutor for regular weekday 1-on-1 recitation lessons to ensure fluent, confident reading.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION F: CLASSES FOR EVERY LEARNER IN ILLINOIS */}
        <section id="programs" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Comprehensive Curricula
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Classes for Every Learner in Illinois
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text">
                Whether introducing a four-year-old to Arabic phonics or assisting an adult sister in memorizing Juz Amma, our customized 1-on-1 programs adapt to every learning stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Kids Program */}
              <div className="glass p-7 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Online Quran Classes for Kids</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    Young learners thrive with engaging, patient instruction. Our child-friendly teachers use digital whiteboards, audio repetition, and positive encouragement to guide children from early phonics to confident reading. Explore our dedicated <Link href="/courses/quran-for-kids" className="text-primary font-semibold hover:underline">Quran for Kids program</Link> and read our comprehensive guide to <Link href="/blog/best-online-quran-classes-for-kids-in-usa" className="text-primary font-semibold hover:underline">the best online Quran classes for kids in the USA</Link>.
                  </p>
                </div>
                <Link href="/courses/quran-for-kids" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Learn about Kids Classes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Adults Program */}
              <div className="glass p-7 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Quran Classes for Adults</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    It is never too late to learn or refine your recitation. Our adult curriculum provides private, judgment-free 1-on-1 instruction for working professionals, university students, and new Muslims. Sessions can be booked early mornings or late evenings in Central Time. Learn more about our specialized <Link href="/courses/quran-for-adults" className="text-primary font-semibold hover:underline">Quran classes for adults</Link>.
                  </p>
                </div>
                <Link href="/courses/quran-for-adults" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Adult Classes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Sisters Program */}
              <div className="glass p-7 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Female Quran Teachers for Sisters</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    We maintain a dedicated team of verified, qualified female Quran scholars for sisters, mothers, and young girls. All lessons occur in private 1-on-1 virtual classrooms that uphold complete comfort and confidentiality. Discover our certified <Link href="/courses/female-quran-teacher" className="text-primary font-semibold hover:underline">female Quran teacher options</Link>.
                  </p>
                </div>
                <Link href="/courses/female-quran-teacher" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Meet Female Teachers</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Noorani Qaida */}
              <div className="glass p-7 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Noorani Qaida for Beginners</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    The essential foundational course for children and adults who cannot yet read Arabic script. Students learn individual letter shapes, phonetic exit points (Makharij), joining letters, short and long vowels, and Sukoon before progressing to the Holy Mushaf. Start with our step-by-step <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida course</Link>.
                  </p>
                </div>
                <Link href="/courses/noorani-qaida" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Qaida Course</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Tajweed Course */}
              <div className="glass p-7 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Quran Recitation with Tajweed</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    Designed for readers who wish to beautify their recitation according to authentic prophetic standards. Covers comprehensive rules of Noon and Meem Sakinah, Idgham, Ikhfa, Qalqalah, heavy and light letters, and stopping signs (Waqf) with live audio correction. View our structured <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed curriculum</Link>.
                  </p>
                </div>
                <Link href="/courses/tajweed" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Master Tajweed Rules</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Hifz Program */}
              <div className="glass p-7 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Online Quran Memorization (Hifz)</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    A rigorous yet supportive program balancing new daily memorization (Sabaq) with systematic recent revision (Sabqi) and long-term retention (Manzil). Guided by Ijazah-certified Huffaz who keep students accountable and motivated. Read about our personalized <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz memorization program</Link>.
                  </p>
                </div>
                <Link href="/courses/hifz" className="text-xs font-bold text-primary hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Hifz Classes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION G: WHAT HAPPENS IN YOUR 3-DAY FREE TRIAL */}
        <section id="trial-process" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Risk-Free Onboarding
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                What Happens in Your 3-Day Free Trial
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text">
                We believe parents and students should experience our teaching quality firsthand before making any financial commitment. Here is exactly how your 3-day free trial unfolds:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              {/* Day 1 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between relative">
                <div className="absolute -top-3.5 left-8 bg-primary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Day 1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">Diagnostic Assessment &amp; Introduction</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Your assigned teacher meets with the student live on Zoom or Google Meet to establish a warm connection. The instructor gently evaluates current Arabic letter recognition, pronunciation accuracy, and recitation speed to determine the precise starting level.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/50 text-xs text-primary font-semibold">
                  Focus: Skill Evaluation &amp; Goal Alignment
                </div>
              </div>

              {/* Day 2 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between relative">
                <div className="absolute -top-3.5 left-8 bg-secondary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Day 2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">Interactive 1-on-1 Lesson</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    The student experiences our core teaching methodology. Using on-screen shared digital Qaida or Mushaf materials, the instructor conducts guided phonetic drills, explains Tajweed rules with real-time feedback, and checks comprehension through positive encouragement.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/50 text-xs text-secondary font-semibold">
                  Focus: Live Pedagogy &amp; Tool Comfort
                </div>
              </div>

              {/* Day 3 */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between relative">
                <div className="absolute -top-3.5 left-8 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Day 3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">Progress Review &amp; Study Roadmap</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    The tutor conducts a lesson consolidation and provides clear feedback to the parents regarding the student&apos;s responsiveness. You receive a personalized curriculum roadmap outlining recommended weekly class frequency and milestone expectations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/50 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  Focus: Parent Debrief &amp; Next Steps
                </div>
              </div>

            </div>

            {/* What Happens Next Card */}
            <div className="mt-10 max-w-4xl mx-auto glass p-6 rounded-2xl border border-card-border/70 text-center">
              <h4 className="text-base font-bold text-foreground mb-2">What Happens Next?</h4>
              <p className="text-xs sm:text-sm text-muted-text max-w-2xl mx-auto leading-relaxed">
                Zero automatic billing occurs because no credit card information is required to start. If your family is completely satisfied with your tutor match, you can choose one of our flexible monthly plans ($30, $40, or $50/month) to continue. If not, you walk away with zero obligations.
              </p>
              <span className="block mt-3 text-[11px] text-muted-text/80 font-medium">
                [OWNER INPUT NEEDED: confirm real trial flow]
              </span>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Book Your 3-Day Free Trial Today</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION H: TEACHER / TRUST BLOCK */}
        <section id="tutors-trust" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Verified Faculty
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Certified Male &amp; Female Quran Scholars
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Our faculty consists of certified teachers with verified credentials in Tajweed rules, fluent English communication, and patient instructional pedagogy. Families can select a male or female instructor to best suit their household preferences.
              </p>
            </div>

            {/* Featured Faculty Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              {/* Tutor 1 */}
              <div className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all">
                <div className="relative h-64 w-full bg-foreground/5">
                  <Image
                    src="/tutors/qari_muhammad_imran.jpg"
                    alt="Qari Muhammad Imran - Senior Quran & Tajweed Tutor"
                    width={400}
                    height={300}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    Male Instructor
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">Qari Muhammad Imran</h3>
                  <span className="text-xs text-primary font-semibold block mb-2">Hifz Program &amp; Tajweed Sciences</span>
                  <p className="text-xs text-muted-text leading-relaxed font-normal">
                    Specializes in patient Tajweed correction and structured memorization for youth and adults with verified recitation chains.
                  </p>
                  <div className="mt-4 pt-3 border-t border-card-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-text">Languages: English, Urdu, Arabic</span>
                    <Link href="/tutors" className="text-xs font-bold text-primary hover:underline">
                      View Profile →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tutor 2 */}
              <div className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all">
                <div className="relative h-64 w-full bg-foreground/5">
                  <Image
                    src="/tutors/qaria_bushra_rashid.jpg"
                    alt="Qaria Bushra Rashid - Certified Female Quran Teacher"
                    width={400}
                    height={300}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    Female Instructor
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">Qaria Bushra Rashid</h3>
                  <span className="text-xs text-primary font-semibold block mb-2">Noorani Qaida &amp; Sisters&apos; Tajweed</span>
                  <p className="text-xs text-muted-text leading-relaxed font-normal">
                    Dedicated female instructor specializing in foundational phonics for young children and private Tajweed for adult sisters.
                  </p>
                  <div className="mt-4 pt-3 border-t border-card-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-text">Languages: English, Urdu</span>
                    <Link href="/tutors" className="text-xs font-bold text-primary hover:underline">
                      View Profile →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Tutor 3 */}
              <div className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all sm:col-span-2 lg:col-span-1">
                <div className="relative h-64 w-full bg-foreground/5">
                  <Image
                    src="/tutors/ustadha_sumaira_khan.jpg"
                    alt="Ustadha Sumaira Khan - Early Childhood Quran & Islamic Studies Teacher"
                    width={400}
                    height={300}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                    Female Instructor
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground">Ustadha Sumaira Khan</h3>
                  <span className="text-xs text-primary font-semibold block mb-2">Kids&apos; Quran &amp; Islamic Studies</span>
                  <p className="text-xs text-muted-text leading-relaxed font-normal">
                    Experienced in early childhood pedagogy, engaging shy students through interactive digital tools, Duas, and basic Islamic manners.
                  </p>
                  <div className="mt-4 pt-3 border-t border-card-border/50 flex items-center justify-between">
                    <span className="text-[11px] text-muted-text">Languages: English, Urdu</span>
                    <Link href="/tutors" className="text-xs font-bold text-primary hover:underline">
                      View Profile →
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Owner placeholder for tutor verification */}
            <div className="text-center mt-6 text-xs text-muted-text">
              <span>Looking for our complete teaching team? <Link href="/tutors" className="text-primary font-semibold hover:underline">Browse all verified tutors</Link>.</span>
              <span className="block mt-1 text-[11px] text-muted-text/70">[OWNER INPUT NEEDED: names, photos, qualifications]</span>
            </div>

            {/* Parent Feedback & Trustpilot Notice */}
            <div className="mt-14 max-w-4xl mx-auto glass p-8 rounded-3xl border border-card-border text-center">
              <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-3.5 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">
                <Star className="h-3.5 w-3.5 fill-current text-amber-400" />
                <span>Parent Feedback &amp; Verification</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Committed to Authentic Student Experiences</h3>
              <p className="text-xs sm:text-sm text-muted-text max-w-2xl mx-auto leading-relaxed">
                In accordance with our strict editorial standards, we never publish fabricated local testimonials. Read genuine reviews from parents and adult students across our academy on our public review profiles or test our service directly through our risk-free trial.
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
                <Link href="/tutors" className="text-primary hover:underline">
                  Read Academy Testimonials &rarr;
                </Link>
                <span className="text-muted-text/60">•</span>
                <span className="text-muted-text">[OWNER INPUT NEEDED: genuine Illinois reviews; if none exist, show a general Trustpilot link instead and no Illinois-labeled reviews]</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION I: PRICING SECTION ($30, $40, $50) */}
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Simple &amp; Transparent
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Monthly Tuition Plans for Illinois Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Quality Quranic education should be accessible and predictable. All plans include live 1-on-1 instruction (30 to 40 minutes per class) conducted over Zoom or Google Meet with flexible Central Time scheduling.
              </p>
            </div>

            {/* 3 Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              
              {/* Starter Plan: $30 */}
              <div className="glass rounded-3xl border border-card-border p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Starter Plan</h3>
                  <p className="text-xs text-muted-text mb-4">Ideal for steady, foundational Quranic progress</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground">$30</span>
                    <span className="text-sm text-muted-text ml-2">/ Month</span>
                  </div>
                  
                  <div className="h-px bg-card-border w-full mb-6" />

                  <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/80">
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>3 Classes / Week</strong></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>30 to 40 Minutes</strong> per session</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Live 1-on-1 private instruction</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Conducted on Zoom or Google Meet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Male or female certified tutor</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Noorani Qaida &amp; basic Tajweed</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Flexible Central Time scheduling</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/book-free-trial?plan=Starter"
                    className="flex items-center justify-center w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border transition-all"
                  >
                    Start 3-Day Free Trial
                  </Link>
                  <p className="text-[10px] text-center text-muted-text mt-2.5">No credit card required to start</p>
                </div>
              </div>

              {/* Standard Plan: $40 (Popular) */}
              <div className="glass rounded-3xl border-2 border-primary bg-primary/[0.03] p-8 flex flex-col justify-between shadow-xl shadow-primary/10 md:scale-105 relative z-10 transition-all duration-300">
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Most Popular for Kids
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Standard Plan</h3>
                  <p className="text-xs text-muted-text mb-4">Fastest path to fluent Quran reading &amp; Tajweed</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground">$40</span>
                    <span className="text-sm text-muted-text ml-2">/ Month</span>
                  </div>
                  
                  <div className="h-px bg-card-border w-full mb-6" />

                  <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/80">
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>5 Classes / Week</strong></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>30 to 40 Minutes</strong> per session</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Live 1-on-1 private instruction</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Conducted on Zoom or Google Meet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Male or female certified tutor</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Advanced Tajweed rules &amp; Makharij</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Islamic Studies &amp; daily Duas included</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Monthly parent progress report</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/book-free-trial?plan=Standard"
                    className="flex items-center justify-center w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                  >
                    Start 3-Day Free Trial
                  </Link>
                  <p className="text-[10px] text-center text-muted-text mt-2.5">3-day free trial, no credit card required</p>
                </div>
              </div>

              {/* Premium Plan: $50 */}
              <div className="glass rounded-3xl border border-card-border p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Premium Plan</h3>
                  <p className="text-xs text-muted-text mb-4">Dedicated daily memorization &amp; advanced study</p>
                  
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground">$50</span>
                    <span className="text-sm text-muted-text ml-2">/ Month</span>
                  </div>
                  
                  <div className="h-px bg-card-border w-full mb-6" />

                  <ul className="space-y-3.5 text-xs sm:text-sm text-foreground/80">
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>Daily Classes (7 Classes / Week)</strong></span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span><strong>30 to 40 Minutes</strong> per session</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Live 1-on-1 private instruction</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Conducted on Zoom or Google Meet</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Customized Hifz memorization program</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Quran Translation &amp; Tafseer options</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Priority Central Time slot selection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                      <span>Direct instructor WhatsApp coordination</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/book-free-trial?plan=Premium"
                    className="flex items-center justify-center w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border transition-all"
                  >
                    Start 3-Day Free Trial
                  </Link>
                  <p className="text-[10px] text-center text-muted-text mt-2.5">No contracts • Cancel anytime</p>
                </div>
              </div>

            </div>

            {/* Sibling Discount & Terms Strip */}
            <div className="mt-12 max-w-4xl mx-auto glass p-6 rounded-2xl border border-card-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="font-bold text-foreground text-sm block">15% Sibling Discount on Additional Children</span>
                <span className="text-xs text-muted-text">
                  Enrolling more than one child? Receive a 15% discount on each subsequent enrollment [OWNER INPUT NEEDED: confirm it applies on this page&apos;s context].
                </span>
              </div>
              <Link
                href="/pricing"
                className="shrink-0 text-xs font-bold text-primary hover:underline"
              >
                View Full Pricing Terms &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION J: FAQ SECTION (10 Core Questions + Schema) */}
        <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Questions &amp; Answers
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text">
                Common questions from parents across Chicago and Illinois regarding our Central Time online Quran lessons.
              </p>
            </div>

            <div className="space-y-4">
              {faqList.map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-card-border/70 hover:border-primary/20 transition-all">
                  <h3 className="font-bold text-sm sm:text-base text-foreground font-sans mb-2 flex items-start space-x-2">
                    <span className="text-primary font-bold">Q:</span>
                    <span>{item.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-muted-text">
              Have another question about classes in Illinois? [OWNER INPUT NEEDED: real questions from Illinois families]
            </div>
          </div>
        </section>

        {/* SECTION: ILLINOIS BLOG CROSS-LINK RESOURCE */}
        <section className="py-10 bg-foreground/[0.015] border-y border-card-border/40">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-card-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">Illinois Educational Guide</span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  How Online Quran Classes Help Busy Muslim Families in Illinois
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl">
                  Read our in-depth analysis on balancing Midwest school schedules, winter weather, and extracurricular commitments with consistent Quranic learning.
                </p>
              </div>
              <Link
                href="/blog/how-online-quran-classes-help-busy-muslim-families-in-illinois"
                className="shrink-0 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs uppercase tracking-wider border border-primary/20 transition-all whitespace-nowrap"
              >
                Read Illinois Guide &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: OTHER US STATES ROW */}
        <section className="py-12 bg-background border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">Other US States</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mt-1">
                Online Quran Classes Across the United States
              </h3>
              <p className="text-xs text-muted-text mt-2">
                OQTutor provides dedicated online Quran tutoring aligned with your state&apos;s time zone.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center text-xs">
              <Link
                href="/locations/usa"
                className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary hover:text-primary transition-all font-semibold text-foreground flex flex-col items-center justify-center"
              >
                <span>USA Hub</span>
                <span className="text-[10px] text-muted-text font-normal">All 50 States</span>
              </Link>
              <Link
                href="/locations/usa/texas"
                className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary hover:text-primary transition-all font-semibold text-foreground flex flex-col items-center justify-center"
              >
                <span>Texas</span>
                <span className="text-[10px] text-muted-text font-normal">Central Time (CST)</span>
              </Link>
              <Link
                href="/locations/usa/michigan"
                className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary hover:text-primary transition-all font-semibold text-foreground flex flex-col items-center justify-center"
              >
                <span>Michigan</span>
                <span className="text-[10px] text-muted-text font-normal">Eastern Time (EST)</span>
              </Link>
              <Link
                href="/locations/usa/new-york"
                className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary hover:text-primary transition-all font-semibold text-foreground flex flex-col items-center justify-center"
              >
                <span>New York</span>
                <span className="text-[10px] text-muted-text font-normal">Eastern Time (EST)</span>
              </Link>
              <Link
                href="/locations/usa/california"
                className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary hover:text-primary transition-all font-semibold text-foreground flex flex-col items-center justify-center"
              >
                <span>California</span>
                <span className="text-[10px] text-muted-text font-normal">Pacific Time (PST)</span>
              </Link>
              <Link
                href="/locations/usa/new-jersey"
                className="p-3.5 rounded-2xl glass border border-card-border hover:border-primary hover:text-primary transition-all font-semibold text-foreground flex flex-col items-center justify-center"
              >
                <span>New Jersey</span>
                <span className="text-[10px] text-muted-text font-normal">Eastern Time (EST)</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION K: CLOSING CTA */}
        <section className="py-20 border-t border-card-border bg-gradient-to-b from-background to-primary/[0.03]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 sm:p-12 rounded-3xl border border-primary/20 shadow-2xl text-center relative overflow-hidden">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-wider mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Begin Your Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                Book Your 3-Day Free Trial
              </h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Join families across Chicago, Naperville, Aurora, Schaumburg, and throughout Illinois who learn the Holy Quran from home. Experience 3 full days of live 1-on-1 instruction with zero obligation and no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/25 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Book Your 3-Day Free Trial
                </Link>
                <Link
                  href="/tutors"
                  className="px-8 py-4 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground text-xs font-bold uppercase tracking-wider transition-all w-full sm:w-auto"
                >
                  Explore Certified Tutors
                </Link>
              </div>
              <p className="text-[11px] text-muted-text mt-4">
                Questions first? Explore our <Link href="/how-it-works" className="text-primary hover:underline font-semibold">How It Works</Link> guide or view <Link href="/pricing" className="text-primary hover:underline font-semibold">all pricing plans</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
