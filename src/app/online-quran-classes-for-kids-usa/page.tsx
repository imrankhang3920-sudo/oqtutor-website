import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, Shield, Award, BookOpen, Clock, Users, ArrowRight, Sparkles, 
  HeartHandshake, CheckCheck, HelpCircle, Star, Video, CreditCard, Check, Gift,
  Eye, Lock, ShieldCheck, Trophy, RotateCcw, Mic, Smile, UserCheck, Zap
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes for Kids in USA | Free 3-Day Trial",
    description: "Enroll your kids in interactive 1-on-1 online Quran classes in the USA. Certified English-speaking tutors, flexible EST/PST schedules & 3-day free trial.",
    alternates: {
      canonical: "https://www.oqtutor.com/online-quran-classes-for-kids-usa",
    },
    openGraph: {
      url: "https://www.oqtutor.com/online-quran-classes-for-kids-usa",
      title: "Online Quran Classes for Kids in USA | Free 3-Day Trial",
      description: "Enroll your kids in interactive 1-on-1 online Quran classes in the USA. Certified English-speaking tutors, flexible EST/PST schedules & 3-day free trial.",
      images: [
        {
          url: "https://www.oqtutor.com/logo.jpg",
          width: 1200,
          height: 630,
          alt: "OQTutor Online Quran Classes for Kids in USA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Online Quran Classes for Kids in USA | Free 3-Day Trial",
      description: "Enroll your kids in interactive 1-on-1 online Quran classes in the USA. Certified English-speaking tutors, flexible EST/PST schedules & 3-day free trial.",
      images: ["https://www.oqtutor.com/logo.jpg"],
    },
  };
}

export default async function OnlineQuranClassesForKidsUSAPage() {
  const dbData = readDB();
  
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const faqs = [
    {
      question: "How do online Quran classes work for kids?",
      answer: "Classes are conducted live via 1-on-1 video calls on Zoom or Skype with screen sharing of digital materials."
    },
    {
      question: "What if we need to reschedule a class?",
      answer: "We offer complete schedule flexibility. Just notify us in advance for a makeup lesson."
    },
    {
      question: "Do you offer female Quran teachers for young girls?",
      answer: "Yes, we have highly qualified, English-speaking female Quran tutors available."
    },
    {
      question: "What equipment or software do we need?",
      answer: "A stable internet connection, a laptop/tablet/smartphone, and a headset. We use Zoom or Skype."
    },
    {
      question: "How long is each Quran lesson?",
      answer: "Standard lessons are 30 to 45 minutes long. We offer plans ranging from 2 to 5 days a week."
    },
    {
      question: "What is the monthly fee for online Quran classes in the USA?",
      answer: "Our plans are highly affordable, starting from $30 to $50 per month depending on class frequency."
    },
    {
      question: "How do you track my child’s learning progress?",
      answer: "We provide regular monthly progress reports and conduct periodic oral evaluations."
    }
  ];

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
        "name": "USA Locations",
        "item": "https://www.oqtutor.com/locations/usa"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Online Quran Classes for Kids in USA",
        "item": "https://www.oqtutor.com/online-quran-classes-for-kids-usa"
      }
    ]
  };

  const courseList = [
    {
      id: "1",
      title: "Noorani Qaida for Beginners (4-7 Years)",
      description: "Arabic alphabet recognition, correct pronunciation, and basic joining rules.",
      tag: "Ages 4-7",
      icon: BookOpen
    },
    {
      id: "2",
      title: "Quran Recitation with Tajweed (7+ Years)",
      description: "Fluent reading following proper Tajweed rules and voice tone.",
      tag: "Ages 7+",
      icon: Sparkles
    },
    {
      id: "3",
      title: "Islamic Studies & Daily Duas (All Ages)",
      description: "Fundamental Islamic knowledge, daily Duas, Kalimas, Salah step-by-step.",
      tag: "All Ages",
      icon: HeartHandshake
    },
    {
      id: "4",
      title: "Quran Memorization (Hifz) (8+ Years)",
      description: "Customized Hifz program with systematic daily revision.",
      tag: "Ages 8+",
      icon: Award
    }
  ];

  const familyFeatures = [
    {
      title: "Flexible US Time Zones",
      description: "Whether you are on Eastern (EST), Central (CST), or Pacific (PST) time, our tutors are available 24/7.",
      icon: Clock
    },
    {
      title: "English-Fluent Tutors",
      description: "Our certified teachers speak fluent English, ensuring clear communication.",
      icon: Users
    },
    {
      title: "Safe & Monitored Environment",
      description: "Enjoy peace of mind with 1-on-1 online sessions and recorded classes.",
      icon: Shield
    },
    {
      title: "Interactive & Engaging Methods",
      description: "We use digital Qaida tools, visual aids, and interactive exercises.",
      icon: Video
    }
  ];

  const pricingPlans = [
    {
      id: "kids-usa-starter",
      title: "Starter Plan",
      tier: "2 - 3 Days / Week",
      price: "30",
      period: "/ Month",
      description: "Ideal for young beginners starting Arabic alphabet & Noorani Qaida.",
      features: [
        "2 to 3 Live Classes / Week (30 mins)",
        "1-on-1 Dedicated Personalized Tutoring",
        "Noorani Qaida & Basic Arabic Reading",
        "Choice of Certified Male or Female Tutor",
        "Flexible US Time Zones (EST, CST, MST, PST)",
        "3-Day Free Trial (No Card Required)"
      ],
      isPopular: false,
      ctaText: "Start 3-Day Free Trial"
    },
    {
      id: "kids-usa-standard",
      title: "Standard Plan",
      tier: "4 - 5 Days / Week",
      price: "40",
      period: "/ Month",
      description: "Our most popular track for steady recitation, Tajweed & daily Duas.",
      features: [
        "4 to 5 Live Classes / Week (30 mins)",
        "1-on-1 Dedicated Personalized Tutoring",
        "Quran Recitation with Tajweed Rules",
        "Islamic Studies, Daily Duas & Kalimas",
        "Monthly Written Progress Reports",
        "Free Makeup / Rescheduled Sessions",
        "3-Day Free Trial (No Card Required)"
      ],
      isPopular: true,
      ctaText: "Start 3-Day Free Trial"
    },
    {
      id: "kids-usa-intensive",
      title: "Intensive / Hifz",
      tier: "5 - 6 Days / Week",
      price: "50",
      period: "/ Month",
      description: "Accelerated memorization track with systematic daily revision.",
      features: [
        "5 to 6 Live Classes / Week (30-45 mins)",
        "1-on-1 Senior Quran Hafiz / Scholar",
        "Structured Quran Memorization (Hifz)",
        "Daily Revision (Sabaq & Manzil)",
        "Direct Parent-Teacher Communication",
        "15% Sibling Discount Available",
        "3-Day Free Trial (No Card Required)"
      ],
      isPopular: false,
      ctaText: "Start 3-Day Free Trial"
    }
  ];

  return (
    <>
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
        {/* HERO SECTION */}
        <section className="relative min-h-0 md:min-h-[75vh] flex items-center justify-center overflow-hidden pt-10 pb-16 md:py-20 bg-background border-b border-card-border/40">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              
              {/* TAG BADGE */}
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold text-primary tracking-wide">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span>100% Certified Tutors | Flexible US Time Zones | Male &amp; Female Teachers Available</span>
              </div>

              {/* H1 HEADER */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground">
                1-on-1 Online Quran Classes for <span className="text-primary">Kids</span> in the <span className="text-secondary">USA</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="text-base sm:text-lg text-muted-text font-normal leading-relaxed max-w-2xl">
                Give your children the gift of authentic Quranic education from the comfort and safety of your home. Our online Quran classes for kids in the USA are designed to make learning engaging, effective, and stress-free for busy American-Muslim families. With certified tutors, flexible scheduling across all US time zones, and personalized 1-on-1 attention, we help your child build a lifelong connection with the Holy Quran.
              </p>

              {/* BUTTON CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <Link
                  href="/book-free-trial"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Book a 3-Day Free Trial</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass border-card-border hover:bg-foreground/5 text-foreground text-base font-semibold transition-all duration-300"
                >
                  <span>View Fee Plans</span>
                </Link>
              </div>

            </div>

            {/* HERO CARD / GRAPHIC */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                  <Image
                    src="/online-quran-classes-usa.jpg"
                    alt="Online Quran Classes for Kids in USA"
                    width={480}
                    height={360}
                    priority
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* H2: DESIGNED FOR BUSY AMERICAN-MUSLIM FAMILIES */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Tailored Convenience
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Designed for Busy American-Muslim Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                Finding qualified, English-speaking Quran tutors near you in the United States can be challenging. We eliminate the hassle of daily commutes to local centers by bringing expert Quranic education directly to your screen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {familyFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div key={idx} className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
                    <div>
                      <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{feat.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* H2: TAILORED QURAN COURSES FOR CHILDREN */}
        <section id="courses" className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Structured Learning
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Tailored Quran Courses for Children
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base text-muted-text">
                Explore our age-appropriate online Quran modules built for steady development and engaging learning.
              </p>
            </div>

            {/* GRID CARDS RENDER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {courseList.map((course) => {
                const Icon = course.icon;
                return (
                  <div 
                    key={course.id} 
                    className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl bg-background/50"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-secondary/15 text-secondary rounded-2xl">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                          {course.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                        {course.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-card-border/40">
                      <Link 
                        href="/book-free-trial" 
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                      >
                        <span>Enroll Child in Trial</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* H2: INSIDE A 30-MINUTE KIDS' CLASS */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Focus &amp; Engagement
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                What a 30-Minute Kids' Quran Class Looks Like
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                Parents often worry that young children can't stay focused in online sessions. Our classes are divided into rapid, dynamic 5-to-15 minute interactive segments with zero dull moments, keeping young minds active, curious, and motivated.
              </p>
            </div>

            {/* 4-PHASE TIMELINE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="glass p-7 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all relative group bg-background/60">
                <div className="absolute top-4 right-4 text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  0-5 Mins
                </div>
                <div>
                  <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                    <RotateCcw className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">1. Warm-Up &amp; Lesson Recap</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    A warm Islamic greeting, checking on previous homework, and a quick recitation of prior verses to reinforce memory and confidence.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-card-border/50 text-[11px] font-semibold text-secondary flex items-center">
                  <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
                  <span>Builds Memory Retention</span>
                </div>
              </div>

              <div className="glass p-7 rounded-3xl border border-primary/30 flex flex-col justify-between hover:shadow-xl transition-all relative group bg-primary/[0.02] shadow-lg shadow-primary/5">
                <div className="absolute top-4 right-4 text-xs font-extrabold text-white bg-primary px-2.5 py-1 rounded-full shadow-sm">
                  5-20 Mins
                </div>
                <div>
                  <div className="p-3 bg-primary text-white w-fit rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">2. New Lesson &amp; Tajweed</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    The core learning window. Tutor shares digital Noorani Qaida or Quran screen with color-coded Tajweed pointers, teaching new rules step-by-step.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-card-border/50 text-[11px] font-semibold text-primary flex items-center">
                  <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                  <span>Interactive Visual Tools</span>
                </div>
              </div>

              <div className="glass p-7 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all relative group bg-background/60">
                <div className="absolute top-4 right-4 text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  20-25 Mins
                </div>
                <div>
                  <div className="p-3 bg-secondary/15 text-secondary w-fit rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                    <Mic className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">3. Active Reading Practice</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    The child recites aloud independently. The tutor gently corrects throat/tongue Makharij (articulation points) and praises accurate pronunciation.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-card-border/50 text-[11px] font-semibold text-secondary flex items-center">
                  <CheckCircle className="h-3.5 w-3.5 mr-1.5" />
                  <span>Gentle Verbal Correction</span>
                </div>
              </div>

              <div className="glass p-7 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all relative group bg-background/60">
                <div className="absolute top-4 right-4 text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  25-30 Mins
                </div>
                <div>
                  <div className="p-3 bg-amber-500/15 text-amber-500 w-fit rounded-2xl mb-5 group-hover:scale-110 transition-transform">
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">4. Quiz, Duas &amp; Rewards</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    A quick 2-minute fun quiz, learning an everyday Sunnah Dua (before eating, sleeping, etc.), and awarding digital stars so kids leave with a big smile.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-card-border/50 text-[11px] font-semibold text-amber-600 flex items-center">
                  <Star className="h-3.5 w-3.5 mr-1.5 fill-amber-500 text-amber-500" />
                  <span>Positive Reinforcement</span>
                </div>
              </div>
            </div>

            {/* CALLOUT BANNER: WHY 30 MINS WORKS BEST */}
            <div className="max-w-4xl mx-auto glass p-6 sm:p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
              <div className="p-3.5 bg-primary text-white rounded-2xl shrink-0">
                <Zap className="h-7 w-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground mb-1.5">
                  Why 30-Minute 1-on-1 Sessions are Proven to Work for Kids
                </h4>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  Young children naturally have a 20-30 minute peak attention span. Unlike crowded, exhausting 1-hour weekend school classrooms, our high-energy 1-on-1 lessons prevent screen fatigue and keep your child genuinely eager for their next class.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* H2: SAFETY & PARENTAL INVOLVEMENT */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border/40">
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4.5 py-1.5 inline-block">
                Child Safety First
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Safety, Security &amp; Complete Parental Peace of Mind
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                Inviting an online instructor to teach your child requires complete trust. Safety is the top priority for American-Muslim parents, and we maintain strict child-protection standards and total transparency at all times.
              </p>
            </div>

            {/* 4 SAFETY PILLARS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex space-x-5">
                <div className="p-3.5 bg-primary/10 text-primary rounded-2xl h-fit shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Open-Door Policy: Parents Can Sit In Anytime</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    You are always welcome to sit beside your child, observe classes on screen, or listen from the room with zero restrictions. We encourage parental presence, especially during the first few weeks.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex space-x-5">
                <div className="p-3.5 bg-secondary/15 text-secondary rounded-2xl h-fit shrink-0">
                  <Video className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Recorded Lessons &amp; Admin Quality Audits</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    All class sessions are conducted in a secure, monitored environment subject to administrative quality checks. Parents can also request lesson recordings for easy at-home review.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex space-x-5">
                <div className="p-3.5 bg-emerald-500/10 text-emerald-500 rounded-2xl h-fit shrink-0">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Zero Private Tutor-Child Communication</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Our code of conduct strictly forbids tutors from contacting students privately on social media, WhatsApp, or email. All lesson feedback, schedules, and progress reports go directly to you, the parent.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all flex space-x-5">
                <div className="p-3.5 bg-primary/10 text-primary rounded-2xl h-fit shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Vetted &amp; Background-Checked Scholars</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Every tutor undergoes rigorous identity verification, criminal background checks, academic credential screening, and specialized training in patient, positive child teaching methods.
                  </p>
                </div>
              </div>
            </div>

            {/* FEMALE TUTORS BANNER */}
            <div className="max-w-5xl mx-auto glass p-6 sm:p-8 rounded-3xl border border-secondary/20 bg-secondary/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4 text-left">
                <div className="p-3.5 bg-secondary text-white rounded-2xl shrink-0">
                  <HeartHandshake className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    Dedicated Female Quran Teachers for Young Girls &amp; Sisters
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-text mt-1 leading-relaxed">
                    We offer highly qualified, English-speaking female scholars upon request for complete family comfort and modesty.
                  </p>
                </div>
              </div>
              <Link
                href="/book-free-trial?gender=female"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/90 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shrink-0 transition-all"
              >
                <span>Request Female Tutor</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* H2: WHY PARENTS CHOOSE OQTUTOR */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Trusted Quality
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Why Parents Choose OQTutor
                </h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
                <p className="text-base sm:text-lg text-muted-text leading-relaxed font-normal">
                  At OQTutor, we understand that every child learns at their own pace. Our 1-on-1 teaching model ensures your child gets undivided attention. Whether your child is taking their first steps with Noorani Qaida or aiming to memorize short Surahs, our patient and background-checked tutors provide gentle guidance. We also offer dedicated female Quran tutors for young girls and sisters upon request.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Patient, Background-Checked Tutors",
                    "Undivided 1-on-1 Attention",
                    "Dedicated Female Tutors Upon Request",
                    "Custom Pace for Every Child",
                    "Gentle & Encouraging Guidance",
                    "Monthly Progress Reports for Parents"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3 glass p-3.5 rounded-xl border border-card-border/60">
                      <CheckCheck className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="glass p-8 rounded-3xl border border-card-border shadow-xl text-center space-y-6 bg-primary/5 max-w-md w-full">
                  <h3 className="text-2xl font-extrabold text-foreground">Give Your Child the Best Start</h3>
                  <p className="text-xs sm:text-sm text-muted-text font-normal leading-relaxed">
                    Test out 3 days of live 1-on-1 lessons with no obligation. Find the ideal teacher and schedule for your family.
                  </p>
                  <Link 
                    href="/book-free-trial" 
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full"
                  >
                    <span>Start Your 3-Day Free Trial Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* H2: AFFORDABLE PRICING PLANS */}
        <section id="pricing" className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border/40">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Transparent Tuition
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Affordable Fee Plans for US Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                Choose the schedule that best fits your child's routine. All plans include 1-on-1 live instruction, verified teachers, and a 100% free 3-day trial.
              </p>
            </div>

            {/* PRICING CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-16">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`glass rounded-3xl border-card-border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.isPopular 
                      ? 'ring-2 ring-primary bg-primary/[0.03] md:scale-105 shadow-2xl shadow-primary/15 md:z-10' 
                      : 'hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[11px] uppercase font-extrabold tracking-wider px-4 py-1.5 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                      <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-0.5">
                        {plan.tier}
                      </span>
                    </div>
                    <p className="text-xs text-muted-text mb-4 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <div className="flex items-baseline mb-6">
                      <span className="text-4xl sm:text-5xl font-extrabold text-foreground">${plan.price}</span>
                      <span className="text-sm font-semibold text-muted-text ml-1.5">{plan.period}</span>
                    </div>

                    <div className="h-px bg-card-border/70 w-full mb-6" />

                    <ul className="space-y-3.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-foreground/85">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4 border-t border-card-border/40">
                    <Link
                      href={`/book-free-trial?plan=${encodeURIComponent(plan.title)}`}
                      className={`flex items-center justify-center w-full py-3.5 px-6 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                        plan.isPopular
                          ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35'
                          : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Link>
                    <p className="text-[11px] text-center text-muted-text mt-2.5">
                      No credit card required • Cancel anytime
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* TRUST & BENEFIT BADGES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="glass p-6 rounded-2xl border border-card-border flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-1">3-Day Free Trial</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Test live lessons with no credit card or financial commitment required.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-secondary/15 text-secondary shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-1">15% Sibling Discount</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Special reduced fee packages available for multi-child households.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-1">US Time Zones</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Convenient after-school &amp; weekend timings for EST, CST, MST, and PST.
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-card-border flex items-start space-x-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground mb-1">No Lock-in Contracts</h4>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Simple monthly fee structure. Reschedule, pause, or cancel at any time.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* PARENT GUIDES & RESOURCES */}
        <section className="py-16 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Parent Resources
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Helpful Guides for US Muslim Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/blog/what-us-parents-should-know-before-choosing-an-online-quran-tutor"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider px-2.5 py-1 bg-secondary/10 rounded-full inline-block">
                    Parenting Guide
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    What US Parents Should Know Before Choosing an Online Quran Tutor
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Credentials, trial class evaluation checklists, and key questions to ask before hiring an online Quran tutor.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/online-quran-classes-in-the-usa-for-kids-and-adults"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider px-2.5 py-1 bg-emerald-500/10 rounded-full inline-block">
                    Curriculum Overview
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    Online Quran Classes in the USA for Kids and Adults
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Comprehensive overview of Noorani Qaida, Tajweed, and Hifz tracks for students of all ages across the United States.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/online-quran-classes-texas"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider px-2.5 py-1 bg-primary/10 rounded-full inline-block">
                    State Guide
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    Online Quran Classes in Texas: A Real Guide for Busy Families
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    How families in Houston, Dallas, Austin, and across Texas fit high-quality Quran lessons into busy routines.
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

        {/* H2: FREQUENTLY ASKED QUESTIONS */}
        <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Clear Answers
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            {/* FAQS DISPLAY */}
            <div className="space-y-4 mb-16">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="glass p-6 sm:p-8 rounded-2xl border border-card-border/80 hover:border-primary/20 transition-all shadow-sm"
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

            {/* FINAL CTA BUTTON */}
            <div className="text-center glass p-8 md:p-12 rounded-3xl border border-primary/20 bg-primary/5 shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                Ready to Begin Your Child's Quran Journey?
              </h3>
              <p className="text-xs sm:text-sm text-muted-text max-w-xl mx-auto mb-8 leading-relaxed">
                Enroll your child today in interactive 1-on-1 online Quran classes across any US time zone. No credit card required to get started.
              </p>
              <Link 
                href="/book-free-trial" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <span>Start Your 3-Day Free Trial Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

          </div>
        </section>

      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
