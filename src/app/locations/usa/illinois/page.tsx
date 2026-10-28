import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NearbyStatesSection from '@/components/NearbyStatesSection';
import LocalSchedulingTrustStrip from '@/components/LocalSchedulingTrustStrip';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, ChevronDown, Star, Shield, ShieldCheck, HelpCircle, Award, 
  BookOpen, Clock, Users, ArrowRight, MapPin, CheckCheck, Sparkles, HeartHandshake
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes in Illinois (Chicago, Naperville, Bridgeview)";
  const metaDescription = "Live 1-on-1 online Quran classes in Illinois (CST after-school & weekend schedule). Male & female certified tutors for kids & adults. Start a Free Trial!";

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
          alt: "OQTutor Logo",
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

function LocalStatsBar() {
  const stats = [
    { value: "500+", label: "Families Served" },
    { value: "50+", label: "Certified Tutors" },
    { value: "5+", label: "Years Operating" },
    { value: "100%", label: "Free 3-Class Trial" },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 mb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="glass p-6 md:p-8 rounded-3xl border border-card-border shadow-xl bg-background/50 backdrop-blur-md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-card-border/40">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center text-center p-2 ${
                idx > 1 ? 'pt-6 md:pt-2' : idx > 0 ? 'pt-6 sm:pt-2 md:pt-2' : ''
              } md:first:pt-2 md:pl-6 md:first:pl-2`}
            >
              <span className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight font-sans">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-muted-text uppercase tracking-wider mt-1.5 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function IllinoisQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const faqList = [
    {
      question: "How do online Quran class schedules fit Illinois family routines (CST/CDT)?",
      answer: "Our classes are fully aligned with Central Time (CST/CDT). We offer flexible 1-on-1 slots in the early morning before school, after-school afternoon slots (3:30 PM - 7:30 PM CST), evening sessions after dinner, and open weekend timings across Chicago, Naperville, Bridgeview, and throughout Illinois."
    },
    {
      question: "Can we request a certified female Quran tutor (Ustazah) in Illinois?",
      answer: "Yes, absolutely. OQTutor provides verified, Ijazah-certified female Quran teachers for young girls, children, and adult sisters seeking dedicated 1-on-1 instruction in a comfortable private online classroom."
    },
    {
      question: "How do we book a free 1-on-1 trial Quran class in Illinois?",
      answer: "Booking your free trial takes just 60 seconds on our website. Choose your preferred Central Time slot, tell us the student's level, and connect directly with your assigned scholar. 100% free with no credit card required."
    },
    {
      question: "Where can I learn Quran online in Illinois?",
      answer: "You can learn Quran online from home through live one-on-one classes with a qualified Quran teacher. OQTutor offers programs for beginners, children, adults, Tajweed students, and Hifz learners across Chicago, Naperville, Aurora, and all of Illinois."
    },
    {
      question: "What are the best online Quran classes in Illinois for kids?",
      answer: "The best class depends on your child's age, Quran level, teacher preference, schedule, and learning goals. Look for qualified teachers, personalized 1-on-1 lessons, appropriate teaching methods, and progress monitoring."
    },
    {
      question: "Can my child learn Quran online from Chicago?",
      answer: "Yes. Children living in Chicago can attend live online Quran classes from home — no need to travel to a physical Quran school or endure heavy city commute times."
    },
    {
      question: "Are online Quran classes suitable for beginners?",
      answer: "Yes. Beginners can start with Noorani Qaida — Arabic letters, pronunciation, joining letters, and basic reading — before progressing to more advanced lessons."
    },
    {
      question: "Can adults join Quran classes in Illinois?",
      answer: "Yes. Adults can start from the basics or focus on Quran reading, Tajweed, memorization, or Islamic studies in a respectful, private environment."
    },
    {
      question: "Are online Quran classes one-on-one?",
      answer: "Yes — OQTutor focuses on personalized one-on-one lessons so the teacher can focus entirely on one student's pronunciation, reading, questions, and progress."
    },
    {
      question: "What Quran courses are available?",
      answer: "Noorani Qaida, Quran Reading, Quran with Tajweed, Hifz/Quran Memorization, and Islamic Studies for Kids."
    }
  ];

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "OQTutor Illinois",
    "url": "https://www.oqtutor.com/locations/usa/illinois",
    "logo": "https://www.oqtutor.com/logo.jpg",
    "description": "Live 1-on-1 online Quran classes in Illinois with CST scheduling across Chicago, Naperville, Bridgeview, and Schaumburg with certified male and female tutors.",
    "areaServed": [
      {
        "@type": "State",
        "name": "Illinois"
      },
      {
        "@type": "City",
        "name": "Chicago"
      },
      {
        "@type": "City",
        "name": "Naperville"
      },
      {
        "@type": "City",
        "name": "Bridgeview"
      },
      {
        "@type": "City",
        "name": "Schaumburg"
      }
    ],
    "serviceType": "Online Quran Classes",
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com"
    }
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

  const illinoisCities = [
    "Chicago", "Naperville", "Schaumburg", "Skokie", "Evanston", 
    "Aurora", "Joliet", "Orland Park", "Oak Lawn", "Bolingbrook", 
    "Downers Grove", "Rockford", "Springfield", "Peoria", "Champaign"
  ];

  const suitableAudiences = [
    "Children beginning their Quran journey",
    "Teenagers who want to improve their recitation",
    "Adults who want to learn Quran from the basics",
    "Students who want to improve Tajweed",
    "Students preparing for Quran memorization",
    "Sisters and girls who prefer a female Quran teacher",
    "Beginners who have never studied Arabic or Quran before"
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrgSchema) }}
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
          {/* Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Hero Copy & CTA */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badges Container */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                  {/* Eyebrow Badge */}
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 text-xs font-bold text-primary tracking-wide shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span>Serving Illinois Families (CST/CDT) • Plans from $30/Mo</span>
                  </div>

                  {/* Trust Badge */}
                  <div className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/25 rounded-full px-3.5 py-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 shadow-sm">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span>⭐ Rated 4.9/5 by 500+ Muslim Families</span>
                  </div>
                </div>

                {/* H1 Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18]">
                  1-on-1 Online Quran Classes in Illinois for Kids &amp; Adults
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                  Learn the Quran from home with certified male and female tutors on a flexible Central Time schedule. Skip the post-school commute to a local center—our live, 1-on-1 classes adapt to your family&apos;s pace and spiritual goals.
                </p>

                {/* 3 Value Proposition Bullets */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-start space-x-3 p-3.5 rounded-2xl glass border border-card-border/80 hover:border-primary/30 transition-all bg-card/40">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <BookOpen className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-bold text-foreground">Tailored for Every Level:</strong>{" "}
                      <span className="text-muted-text font-normal">
                        Noorani Qaida for beginners, fluent Quran Reading, Tajweed mastery, Hifz memorization, and Islamic Studies.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-2xl glass border border-card-border/80 hover:border-primary/30 transition-all bg-card/40">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-bold text-foreground">Dedicated 1-on-1 Attention:</strong>{" "}
                      <span className="text-muted-text font-normal">
                        Patient, English-fluent male and female scholars focused 100% on you or your child.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3.5 rounded-2xl glass border border-card-border/80 hover:border-primary/30 transition-all bg-card/40">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Clock className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <strong className="font-bold text-foreground">Affordable &amp; Flexible:</strong>{" "}
                      <span className="text-muted-text font-normal">
                        Classes available 24/7 in CST/CDT starting at just $30/month.
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <Link
                      href="/book-free-trial"
                      className="group relative flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm sm:text-base cursor-pointer"
                    >
                      <span>Book Your Free Trial Class</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <a
                      href="#courses"
                      className="flex items-center justify-center space-x-2 px-7 py-4 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm sm:text-base cursor-pointer"
                    >
                      <span>Explore Courses</span>
                    </a>
                  </div>

                  {/* Micro-copy */}
                  <p className="mt-3.5 text-xs text-muted-text font-medium flex items-center space-x-1.5">
                    <Sparkles className="h-4 w-4 text-secondary shrink-0" />
                    <span>3 Free Trial Classes • No Credit Card Required • Cancel Anytime</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Visual & Interactive Features Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3.5 rounded-3xl border border-card-border shadow-2xl overflow-hidden bg-card/60 backdrop-blur-xl">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                      <Image
                        src="/illinois-1.jpg"
                        alt="Online Quran Classes in Illinois for Kids & Adults"
                        width={600}
                        height={450}
                        priority
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center space-x-1.5 shadow-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live 1-on-1 • CST/CDT Time Zone</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-primary/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                        Plans from $30/Mo
                      </div>
                    </div>

                    {/* Preview Feature List */}
                    <div className="p-4 space-y-2.5 bg-foreground/[0.02] rounded-2xl mt-3 border border-card-border/50">
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span>3 Free Trial Classes • 100% Risk Free</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <Users className="h-4 w-4 text-primary shrink-0" />
                        <span>Certified Male &amp; Female Quran Scholars</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>24/7 Scheduling Aligned with Illinois Routines</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs font-semibold text-foreground">
                        <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                        <span>Guaranteed Tutor Match • Switch Anytime</span>
                      </div>
                    </div>

                    {/* Bottom Status Indicator */}
                    <div className="mt-3 pt-3 border-t border-card-border/60 flex items-center justify-between px-1">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-semibold text-foreground">Next Trial Available</span>
                      </div>
                      <span className="text-[11px] font-bold text-primary">Today / Tomorrow</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        
        {/* Local Scheduling & Trust Strip */}
        <LocalSchedulingTrustStrip timezoneText="Central Time (CST / CDT) After-School & Weekend Slots" />

        {/* Intro Section: Learn Quran Online in Illinois with OQTutor */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Illinois Quran Education
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Learn Quran Online in Illinois with OQTutor
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    Learning the Quran consistently can be challenging when school routines, demanding jobs, household responsibilities, and heavy traffic fill your day. For Muslim families residing across Illinois, online learning unlocks an ideal solution: personalized, high-quality Quranic education without step-setting outside your home.
                  </p>
                  <p>
                    At OQTutor, students engage in live, private one-on-one sessions led by qualified <Link href="/tutors" className="text-primary font-semibold hover:underline">Quran tutors</Link>. Your dedicated instructor listens attentively to your recitation, gently corrects pronunciation errors in real-time, teaches clear <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed rules</Link>, and adapts lesson pacing precisely to your speed of learning.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-card-border/60">
                  <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">
                    Our Illinois Programs Are Designed For:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {suitableAudiences.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-muted-text font-normal">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs sm:text-sm text-muted-text">
                    You can also explore our full range of <Link href="/courses" className="text-primary font-semibold hover:underline">Quran courses</Link> and meet our certified <Link href="/tutors" className="text-primary font-semibold hover:underline">Quran tutors</Link> to select the ideal path for your family.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/online-quran-classes-usa-kids-adults-1.jpg"
                      alt="Muslim student reading Holy Quran during online class in Illinois"
                      width={480}
                      height={360}
                      className="w-full rounded-2xl object-cover h-[340px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Online Quran Classes in Illinois? */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Core Advantages
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Chicagoland &amp; Illinois Families Choose Online Quran Lessons
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base text-muted-text">
                Whether you&apos;re navigating rush-hour traffic on I-90 in Chicago and Schaumburg, or balancing busy after-school schedules in Naperville, Bridgeview, or Orland Park, online classes let your child learn comfortably from home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Learn From Home Comfort</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Your child can attend Quran lessons right from home without wasting time travelling to a local center. Adults can schedule sessions before work, in the evening, or during weekend downtime.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">One-on-One Attention</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Every student possesses unique strengths and challenges. A dedicated 1-on-1 environment ensures the teacher focuses 100% on a single student rather than splitting time across a crowded classroom.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Flexible CST Scheduling</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Illinois families manage diverse routines. You can pick class slots that integrate seamlessly with school timetables, work shifts, sports, and family commitments.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Male & Female Teachers</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Whether you prefer a male instructor or a <Link href="/courses/female-quran-teacher" className="text-primary hover:underline font-semibold">female Quran teacher</Link> for sisters and young daughters, OQTutor provides both options to respect family preferences.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-2">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Personalized Learning Plans</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Beginners should never be taught in the same manner as advanced readers. Lessons are tailored to match reading speed, age, pronunciation accuracy, and long-term spiritual targets.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/book-free-trial" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Book Your Free Trial Class</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Online Quran Courses for Illinois Students */}
        <section id="courses" className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Curriculum Overview
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Structured Online Quran Courses on Central Time (CST/CDT)
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base text-muted-text">
                Explore our specialized study tracks designed for beginners, fluent readers, and memorization candidates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Noorani Qaida */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Foundation</span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Noorani Qaida for Beginners</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    If you or your child are completely new to Quran reading, Noorani Qaida provides an essential foundation — Arabic letters, letter sounds, joining letters, vowels, pronunciation, and basic reading skills before progressing to the Mushaf. Suitable for young children and adult beginners.
                  </p>
                </div>
                <Link href="/courses/noorani-qaida" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Noorani Qaida</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Quran Reading */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Fluency</span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Online Quran Reading Classes</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    Once students master basic letters, they transition toward reading full Quranic verses confidently — focusing on letter recognition, word connections, recitation flow, and steady pronunciation at a comfortable pace.
                  </p>
                </div>
                <Link href="/courses/quran-reading" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Quran Reading</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Quran with Tajweed */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Recitation Perfection</span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Quran with Tajweed</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    If you can read Arabic but wish to refine your recitation, our Tajweed course covers Makharij, letter characteristics, Madd, Qalqalah, Idgham, Ikhfa, Noon & Meem Sakinah rules, and proper stops with real recitation practice.
                  </p>
                </div>
                <Link href="/courses/tajweed" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Tajweed Course</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Hifz */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Memorization</span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Online Hifz Quran Classes</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    For students aiming to memorize the Holy Quran, OQTutor offers structured Hifz programs prioritizing new daily targets (Sabaq) and steady revision cycles (Manzil) tailored around available study time.
                  </p>
                </div>
                <Link href="/courses/hifz" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Hifz Classes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Islamic Studies */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Holistic Education</span>
                  <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Islamic Studies for Kids</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    Complement Quran reading with foundational Islamic knowledge — daily duas, manners (Adab), basic beliefs (Aqeedah), prayer steps (Salah & Wudu), and prophet stories that connect Quranic teachings to daily life.
                  </p>
                </div>
                <Link href="/courses/islamic-studies" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Islamic Studies</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Kids Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/illinois-2.jpg"
                      alt="Young student with headphones attending live online Quran class on laptop in Illinois"
                      width={480}
                      height={360}
                      className="w-full rounded-2xl object-cover h-[340px]"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Child-Centered Pedagogy
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Interactive 1-on-1 Online Quran Classes for Illinois Kids
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    Parents naturally want their children to cultivate an authentic, lifelong relationship with the Quran. However, young children require teaching methodologies aligned with their attention spans and cognitive stages.
                  </p>
                  <p>
                    Whether your family is navigating rush-hour traffic on I-90 in Chicago and Schaumburg, or balancing busy after-school schedules in Naperville, Bridgeview, or Orland Park, online classes let your child learn comfortably from home without the stress of an extra evening commute.
                  </p>
                  <p>
                    OQTutor&apos;s one-on-one setup allows tutors to personalize every session: starting with basic Arabic alphabet keys and Noorani Qaida, then progressing to fluent Quran reading, Tajweed rules, memorizing short Surahs, and practical Islamic studies.
                  </p>
                  <p>
                    Private lessons give tutors the freedom to dedicate undivided attention to your child — repeating tricky sounds, correcting mistakes instantly, maintaining a patient lesson pace, encouraging shy learners, and delivering regular progress updates to parents.
                  </p>
                  <p className="pt-2 text-xs sm:text-sm font-semibold text-foreground">
                    If you're evaluating options, read our guide on {" "}
                    <Link href="/blog/select-right-online-quran-tutor" className="text-primary hover:underline font-bold">
                      how to choose the right online Quran tutor for your child
                    </Link>{" "}
                    and our complete guide to{" "}
                    <Link href="/blog/online-quran-classes-usa" className="text-primary hover:underline font-bold">
                      online Quran classes in the USA
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adults & Female Tutors Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Adults Card */}
              <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1 inline-block mb-4">
                    Adult Learners
                  </span>
                  <h3 className="text-2xl font-extrabold text-foreground mb-4">
                    Private Online Quran Classes for Adults in Illinois
                  </h3>
                  <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
                  <p className="text-sm text-muted-text leading-relaxed font-normal mb-4">
                    It is never too late to enhance your Quran recitation. Many adult learners hesitate because they feel self-conscious about starting late or having forgotten earlier lessons.
                  </p>
                  <p className="text-sm text-muted-text leading-relaxed font-normal">
                    Our adult Quran classes provide a private, supportive atmosphere to learn comfortably without embarrassment, structured around your professional shifts and family life.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-card-border/40">
                  <Link href="/book-free-trial" className="inline-flex items-center text-xs font-bold text-primary hover:underline space-x-1">
                    <span>Start Adult Classes</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Female Tutors Card */}
              <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1 inline-block mb-4">
                    Sister & Girl Tutors
                  </span>
                  <h3 className="text-2xl font-extrabold text-foreground mb-4">
                    Certified Female Quran Teachers for Sisters &amp; Daughters
                  </h3>
                  <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
                  <p className="text-sm text-muted-text leading-relaxed font-normal mb-4">
                    For families seeking a female Quran teacher online in Illinois, OQTutor maintains a team of certified female scholars for students preferring female instruction — including young daughters, female teenagers, and adult sisters.
                  </p>
                  <p className="text-sm text-muted-text leading-relaxed font-normal">
                    Parents can easily request a female instructor when setting up trial sessions and schedules.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-card-border/40">
                  <Link href="/courses/female-quran-teacher" className="inline-flex items-center text-xs font-bold text-primary hover:underline space-x-1">
                    <span>Learn About Female Tutors</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Illinois Statewide Cities Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Statewide Reach
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Serving Muslim Communities Across Chicago, Naperville, Bridgeview, Schaumburg &amp; Beyond
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base text-muted-text">
                Whether you live in major metropolitan hubs or quiet suburban neighborhoods, online classes remove the burden of travel.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-card-border max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
                {illinoisCities.map((city, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-background border border-card-border/60 flex items-center justify-center space-x-2">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span className="text-xs font-semibold text-foreground">{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-xs text-center text-muted-text font-normal leading-relaxed">
                Because classes are delivered virtually, students do not need to reside near an Islamic center or physical Quran school — especially beneficial for families seeking private, specialized 1-on-1 instruction.
              </p>
            </div>
          </div>
        </section>

        {/* How Do Online Quran Classes Work? */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                4-Step Process
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                How Do Online Quran Classes Work?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Book Your Free Trial", desc: "Tell us the student's age, current Quran level, preferred course, and suitable class time." },
                { step: "2", title: "Meet Your Quran Teacher", desc: "Attend your trial lesson live face-to-face and experience the teaching style before committing." },
                { step: "3", title: "Choose Your Learning Plan", desc: "If it's a great fit, select a monthly schedule matching your goals and availability." },
                { step: "4", title: "Follow Personalized Lessons", desc: "Your teacher works with you consistently and adjusts lessons as recitation improves." }
              ].map((item, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-sm mb-6 font-sans">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/book-free-trial" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Book Your Free Trial Class</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* How to Choose the Right Online Quran Teacher */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Selection Criteria
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                How to Choose the Right Online Quran Teacher
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Quranic Knowledge", desc: "Appropriate Quranic credentials and verified Tajweed mastery for the level they teach." },
                { title: "Teaching Experience", desc: "Proven ability to explain complex Arabic phonetic rules clearly and patiently." },
                { title: "Communication Skills", desc: "Fluent English communication, especially for young children to feel understood." },
                { title: "Patience & Empathy", desc: "Understanding that Quran learning takes steady time, encouragement, and repetition." },
                { title: "Personal Compatibility", desc: "A trial session helps confirm that the teacher's style resonates with your child." },
                { title: "Progress Monitoring", desc: "Clear reporting so parents understand what is learned and where to improve." }
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-card-border/60">
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Illinois Parents Choose OQTutor */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Summary Checklist
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Why Illinois Parents Choose OQTutor
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "One-on-one live Quran lessons",
                    "Qualified male and female tutors",
                    "Flexible 24/7 scheduling in CST",
                    "Personalized learning plans",
                    "Quran reading and Tajweed instruction",
                    "Noorani Qaida for absolute beginners",
                    "Hifz and memorization support",
                    "Islamic Studies for children",
                    "Monthly parent progress tracking",
                    "100% free trial before enrollment"
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-center space-x-3 glass p-3.5 rounded-xl border border-card-border/60">
                      <CheckCheck className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="glass p-8 rounded-3xl border border-card-border shadow-xl text-center space-y-6 bg-primary/5">
                  <h3 className="text-xl font-bold text-foreground">Ready to Start Learning?</h3>
                  <p className="text-xs text-muted-text font-normal leading-relaxed">
                    Try 3 classes completely risk-free. No credit card details required. Experience the convenience of private online Quran tutoring in Illinois.
                  </p>
                  <Link 
                    href="/book-free-trial" 
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full"
                  >
                    <span>Book Your Free Trial Class</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                FAQ
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqList.map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-card-border/60">
                  <h4 className="font-bold text-sm sm:text-base text-foreground font-sans mb-2 flex items-start space-x-2">
                    <span className="text-primary font-bold">Q:</span>
                    <span>{item.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal pl-6">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Sibling States */}
        <NearbyStatesSection 
          currentState="illinois"
          title="Online Quran Classes in Nearby US States"
          subtitle="Looking for classes in Michigan, Texas, or across the United States? Connect with our dedicated Quran tutors in your time zone."
        />

        {/* Final CTA */}
        <section className="py-20 border-t border-card-border mb-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center relative overflow-hidden">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Start Your Free Online Quran Trial in Illinois Today</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Whether you're looking for online Quran classes for kids in Illinois, Quran lessons for adults, a female Quran teacher, Tajweed instruction, or a structured Hifz program, OQTutor can help you find a learning path that fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Book Your Free Trial Class Today
                </Link>
                <Link
                  href="/tutors"
                  className="px-8 py-3.5 rounded-full glass border-card-border hover:bg-foreground/5 text-foreground text-xs font-bold uppercase tracking-wider transition-all w-full sm:w-auto"
                >
                  Find a Quran Teacher
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
