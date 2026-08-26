import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, Shield, Award, BookOpen, Clock, Users, ArrowRight, Sparkles, HeartHandshake, CheckCheck, HelpCircle, Star, Video
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
      answer: "Our plans are highly affordable, starting from $35 to $70 per month depending on class frequency."
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
                  href="#courses"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full glass border-card-border hover:bg-foreground/5 text-foreground text-base font-semibold transition-all duration-300"
                >
                  <span>View Courses</span>
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
