import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import USAFaqAccordion from '@/components/USAFaqAccordion';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, 
  MapPin, 
  Award, 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  Shield, 
  Sparkles, 
  HeartHandshake, 
  CheckCheck, 
  Video 
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Learn Quran From Home in the USA — Kids, Hifz & Tajweed, With a Teacher Who Actually Cares | OQTutor",
    description: "Looking for a trusted online Quran academy in the USA — for yourself or your kids? Our qualified teachers (female teacher option available) offer one-on-one Tajweed, Hifz, and Quran reading classes, with flexible timing that fits your US schedule. From complete beginners to Hifz students, every lesson is personalized to the learner. Book a free trial class today.",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/usa",
      languages: {
        'en-US': 'https://www.oqtutor.com/locations/usa',
        'en-GB': 'https://www.oqtutor.com/locations/uk',
        'en-CA': 'https://www.oqtutor.com/locations/canada',
        'en-AU': 'https://www.oqtutor.com/locations/australia',
        'x-default': 'https://www.oqtutor.com/locations/usa',
      },
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/usa",
      title: "Learn Quran From Home in the USA — Kids, Hifz & Tajweed, With a Teacher Who Actually Cares | OQTutor",
      description: "Looking for a trusted online Quran academy in the USA — for yourself or your kids? Our qualified teachers (female teacher option available) offer one-on-one Tajweed, Hifz, and Quran reading classes, with flexible timing that fits your US schedule. From complete beginners to Hifz students, every lesson is personalized to the learner. Book a free trial class today.",
    },
  };
}

export default async function USALocationsHubPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const customHeroData = {
    title: "Learn Quran From Home in the USA — Kids, Hifz & Tajweed, With a Teacher Who Actually Cares",
    subtitle: "Looking for a trusted online Quran academy in the USA — for yourself or your kids? Our qualified teachers (female teacher option available) offer one-on-one Tajweed, Hifz, and Quran reading classes, with flexible timing that fits your US schedule. From complete beginners to Hifz students, every lesson is personalized to the learner. Book a free trial class today.",
    ctaText: "Book Free Placement Trial",
    ctaLink: "/book-free-trial",
    whatsappText: dbData.hero.whatsappText,
    whatsappNumber: dbData.hero.whatsappNumber,
    backgroundImage: dbData.hero.backgroundImage || "/hero-bg.jpg",
  };

  const activeStates = [
    {
      name: "Illinois",
      path: "/locations/usa/illinois",
      desc: "Serving Chicago, Naperville, Schaumburg, Skokie, Evanston, Aurora, Joliet, and Springfield with flexible 1-on-1 online Quran classes."
    },
    {
      name: "Michigan",
      path: "/locations/usa/michigan",
      desc: "Serving Dearborn, Detroit, Hamtramck, Ann Arbor, Lansing, and Grand Rapids. Schedule classes easily around busy school and prayer timings."
    },
    {
      name: "New York",
      path: "/locations/usa/new-york",
      desc: "Customized for Brooklyn, Queens, Manhattan, Staten Island, and Long Island. Flexible slots matching EST/EDT school routines."
    },
    {
      name: "Texas",
      path: "/locations/usa/texas",
      desc: "Providing private 1-on-1 online classes across Houston, Dallas-Fort Worth, Austin, San Antonio, and Plano. Flexible times fit school routines."
    }
  ];

  const comingSoonStates = [
    { name: "California (Los Angeles, Bay Area, San Diego)" },
    { name: "Florida (Miami, Orlando, Tampa)" },
    { name: "New Jersey (Paterson, Jersey City, Clifton)" },
    { name: "Virginia (Fairfax, Alexandria, Richmond)" }
  ];

  const faqs = [
    {
      question: "How do online Quran classes work in the USA?",
      answer: "Our Online Quran Classes USA work through a highly secure, interactive virtual portal that brings private 1-on-1 classrooms directly to your home. When you register, you are matched with a certified Online Quran Tutor USA who conducts live, interactive sessions using HD video, clear audio, and digital whiteboards. Students and teachers can read from the same digital Quran pages, annotate text, and interact in real-time."
    },
    {
      question: "Do you offer a free trial class?",
      answer: "Yes, we offer a risk-free Free Trial Quran Class spanning three consecutive days to let families experience our teaching style before subscribing. During this free trial, you will be paired with a certified male or female tutor who will assess your current reading level, demonstrate interactive software, and customize a syllabus. No credit card is required to register."
    },
    {
      question: "Are female Quran tutors available for sisters and kids?",
      answer: "Yes, OQTutor has a large pool of certified and highly experienced Female Quran Tutors available for young kids and sisters. Our female tutors hold verified Islamic degrees, possess deep expertise in teaching Noorani Qaida and Tajweed rules, and are fluent in English."
    },
    {
      question: "Which US time zones do you support?",
      answer: "We support all time zones across the United States, including Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) times. Since OQTutor operates 24 hours a day, 7 days a week, you can easily schedule your One-to-One Quran Classes at any time that suits your routine."
    },
    {
      question: "What courses do you offer for students in the USA?",
      answer: "Our core offerings include: (1) Foundational Noorani Qaida for absolute beginners, (2) Fluent Quran Reading with correct pronunciation, (3) Online Tajweed Classes to perfect recitation flow, (4) Structured Hifz program for memorizing the Quran, and (5) Islamic Studies covering basic Fiqh, Duas, Wudu, and Salah."
    },
    {
      question: "How long is each 1-on-1 Quran lesson?",
      answer: "Each session in our One-to-One Quran Classes typically lasts 30 minutes. Through years of teaching experience, we have found that 30 minutes is the optimal duration for students, especially children, to maintain focus and retain information. Extended 45 or 60-minute sessions are also available for adults or intensive Hifz students."
    },
    {
      question: "Can absolute beginners learn Noorani Qaida online?",
      answer: "Yes, absolute beginners of all ages can easily learn Noorani Qaida online through our platform. Our introductory course is specifically structured to teach the Arabic alphabet, letter shapes, compound connections, and articulation points (Makharij) from scratch using interactive visual aids."
    },
    {
      question: "What technology or software is required for online classes?",
      answer: "You only need a stable high-speed internet connection and a device such as a laptop, desktop computer, tablet, or smartphone. We recommend a working webcam and headphones with a built-in microphone for clear audio communication."
    },
    {
      question: "How do parents track their child's learning progress?",
      answer: "Through our secure portal, parents can monitor attendance records, view lesson summaries, and read specific teacher comments after every session. At the end of every month, we compile a comprehensive progress report detailing advancements in Noorani Qaida, Tajweed, or Hifz."
    },
    {
      question: "What is the monthly fee for online Quran classes in the USA?",
      answer: "Our plans are structured to be accessible and affordable for American families, starting from $35 to $70 per month depending on class frequency (2 to 5 days per week). We also offer multi-child family discounts."
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
        "name": "USA Locations Directory",
        "item": "https://www.oqtutor.com/locations/usa"
      }
    ]
  };

  const courseFeatures = [
    {
      title: "Flexible US Time Zones",
      description: "Available 24/7 across Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) time zones to fit around school, work, and family schedules.",
      icon: Clock
    },
    {
      title: "English-Fluent Certified Tutors",
      description: "Learn from Al-Azhar certified male and female scholars who speak fluent English, enabling clear communication and deep comprehension.",
      icon: Users
    },
    {
      title: "1-on-1 Personalized Attention",
      description: "Undivided focus in dedicated virtual classrooms guarantees tailored lesson speed, instant error correction, and faster overall progress.",
      icon: Award
    },
    {
      title: "Safe & Monitored Environment",
      description: "All tutors are thoroughly vetted and background-checked. Lessons are recorded for safety, and parents receive monthly progress reports.",
      icon: Shield
    },
    {
      title: "Interactive Digital Mushaf",
      description: "Classes feature HD video, digital Qaida tools, screen sharing, and interactive whiteboards designed specifically for young digital natives.",
      icon: Video
    },
    {
      title: "3-Day Risk-Free Trial",
      description: "Experience 3 consecutive days of live 1-on-1 lessons with no financial obligation or credit card details required to start.",
      icon: Sparkles
    }
  ];

  const tailoredCourses = [
    {
      id: "noorani-qaida",
      title: "Noorani Qaida for Beginners",
      tag: "Ages 4-7 & Adult Beginners",
      description: "Foundational Arabic alphabet recognition, correct articulation points (Makharij), short & long vowels (Harakat), and letter joining rules.",
      icon: BookOpen,
      highlights: [
        "Arabic Alphabet & Articulation (Makharij)",
        "Vowels (Harakat), Tanween & Sukoon",
        "Letter Joining & Compound Words",
        "Interactive Digital Qaida Tools"
      ],
      link: "/courses/noorani-qaida"
    },
    {
      id: "tajweed",
      title: "Quran Recitation with Tajweed",
      tag: "Ages 7+ & Adults",
      description: "Master proper Tajweed rules including Ghunnah, Ikhfa, Qalqalah, and Madd for fluent, melodious, and accurate Quranic recitation.",
      icon: Sparkles,
      highlights: [
        "All Essential & Advanced Tajweed Rules",
        "Precision Makharij & Voice Modulation",
        "Fluent Mushaf Recitation Practice",
        "Breath Control & Stopping Signals (Waqf)"
      ],
      link: "/courses/tajweed"
    },
    {
      id: "islamic-studies",
      title: "Islamic Studies & Daily Duas",
      tag: "All Ages",
      description: "Comprehensive Islamic education covering step-by-step Salah (Prayer), Wudu, daily Masnoon supplications, Seerah, and Islamic manners.",
      icon: HeartHandshake,
      highlights: [
        "Step-by-Step Salah, Wudu & Taharah",
        "Daily Masnoon Duas & 6 Kalimas",
        "Seerah of Prophet Muhammad (PBUH)",
        "Islamic Ethics, Manners (Adab) & Aqeedah"
      ],
      link: "/courses/islamic-studies"
    },
    {
      id: "hifz",
      title: "Quran Memorization (Hifz)",
      tag: "Ages 8+ & Adults",
      description: "Systematic 1-on-1 Hifz program with customized daily targets, revision of recent verses (Sabqi), and long-term retention management (Manzil).",
      icon: Award,
      highlights: [
        "Customized Daily Memorization Plan",
        "Daily Sabaq & Sabqi Revision Cycle",
        "Manzil Retention & Lock-in Strategy",
        "Guided by Certified Huffaz Scholars"
      ],
      link: "/courses/memorization"
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
        <Hero data={customHeroData} />

        {/* State Directory Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Directory
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Select Your State
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-sm text-muted-text">
                Browse our state-specific online Quran academies to view pricing and match with local tutors.
              </p>
            </div>

            {/* Active States Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {activeStates.map((state) => (
                <div key={state.name} className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{state.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                      {state.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-card-border/40">
                    <Link href={state.path} className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                      <span>View State Classes</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Dedicated Kids USA Feature Banner */}
            <div className="max-w-4xl mx-auto mb-16 glass p-8 rounded-3xl border border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block">
                  Specialized Program for Kids
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                  Online Quran Classes for Kids in USA
                </h3>
                <p className="text-xs sm:text-sm text-muted-text max-w-xl leading-relaxed">
                  Interactive 1-on-1 online Quran classes tailored for children across EST, CST, and PST time zones. Certified English-speaking tutors, Noorani Qaida basics, Tajweed &amp; Hifz.
                </p>
              </div>
              <Link 
                href="/online-quran-classes-for-kids-usa" 
                className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-primary/20 hover:shadow-lg transition-all"
              >
                <span>View Kids Program</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Coming Soon States */}
            <div className="max-w-4xl mx-auto glass p-8 rounded-3xl border border-card-border/60 bg-foreground/[0.005]">
              <h3 className="text-base font-bold text-foreground mb-6 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-secondary inline-block animate-pulse" />
                <span>Expansion Cities &amp; States (Coming Soon):</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {comingSoonStates.map((state) => (
                  <div key={state.name} className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-foreground/[0.01] border border-card-border/40">
                    <CheckCircle className="h-4.5 w-4.5 text-muted-text/60 shrink-0" />
                    <span className="text-xs text-muted-text font-medium">{state.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-center text-muted-text/80 font-normal">
                Don't see your state? You can still register. Our general {" "}
                <Link href="/locations/usa" className="text-primary hover:underline font-semibold">
                  Online Quran Classes USA
                </Link>{" "}
                or {" "}
                <Link href="/online-quran-classes-for-kids-usa" className="text-primary hover:underline font-semibold">
                  Kids Quran Classes USA
                </Link>{" "}
                program supports students in all 50 states.
              </p>
            </div>

          </div>
        </section>

        {/* Dynamic National Benefits / Updated Features Section */}
        <section className="py-16 md:py-24 border-t border-card-border bg-foreground/[0.01] relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                USA Operations
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why American-Muslim Families Choose OQTutor
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-base text-muted-text font-normal leading-relaxed">
                We eliminate the logistical stress of driving back and forth to traditional physical centers in heavy traffic. OQTutor pairs your household with dedicated, background-checked online Quran tutors who deliver interactive 1-on-1 lessons tailored around school and work schedules.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div 
                    key={idx} 
                    className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all duration-300 group hover:border-primary/30"
                  >
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

            {/* Sub-feature highlight callout */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass p-8 rounded-3xl border border-card-border bg-background/60 shadow-lg">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl font-extrabold text-foreground">
                  One-on-One Quran Tutoring Built for American Muslim Homes
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  Our live interactive sessions feature high-definition screen sharing and digital Mushaf views so pronunciation mistakes in {" "}
                  <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
                    Noorani Qaida
                  </Link>{" "}
                  or {" "}
                  <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
                    Tajweed
                  </Link>{" "}
                  are corrected immediately. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-background border border-card-border">
                    <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">1-on-1 Vetted Tutors</h4>
                      <p className="text-[11px] sm:text-xs text-muted-text mt-1">Get 100% focused correction from certified <Link href="/tutors" className="text-primary hover:underline font-semibold">female and male instructors</Link>.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-background border border-card-border">
                    <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">Time Zone Adaptive</h4>
                      <p className="text-[11px] sm:text-xs text-muted-text mt-1">Schedule morning, evening, or weekend classes that fit around secular routines. Read <Link href="/how-it-works" className="text-primary hover:underline font-semibold">how it works</Link>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-2.5 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/online-quran-classes-usa.jpg"
                      alt="Student learning Quran online in USA on computer"
                      width={450}
                      height={350}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Tailored Courses Grid Section */}
        <section id="courses" className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Structured Curriculum
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Tailored Quran &amp; Islamic Education Tracks
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-base text-muted-text font-normal leading-relaxed">
                Explore our core learning tracks designed for children, teens, and adults in the USA. Each course is customized to match the student's entry level and goals.
              </p>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tailoredCourses.map((course) => {
                const IconComponent = course.icon;
                return (
                  <div 
                    key={course.id} 
                    className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl bg-background/50 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3.5 bg-secondary/15 text-secondary rounded-2xl group-hover:scale-110 transition-transform">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                          {course.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                        {course.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-card-border/40">
                        {course.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-center space-x-2.5">
                            <CheckCheck className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-xs text-foreground font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-card-border/40 flex items-center justify-between">
                      <Link 
                        href="/book-free-trial" 
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group/link"
                      >
                        <span>Book Free Placement Trial</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <Link 
                        href={course.link} 
                        className="text-xs text-muted-text hover:text-foreground font-medium underline underline-offset-4"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expanded FAQ Section */}
        <USAFaqAccordion />

        {/* Global CTA Section */}
        <section className="py-16 md:py-20 bg-background border-t border-card-border text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Get Started Risk-Free
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Begin Your Family's Quran Journey Today
            </h3>
            <p className="text-xs sm:text-base text-muted-text max-w-xl mx-auto leading-relaxed font-normal">
              Register for a 3-day live placement trial session. Sit in with the matched tutor, evaluate their style, and receive a customized learning plan — all with zero obligation.
            </p>
            <div className="pt-4">
              <Link href="/book-free-trial" className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
                <span>Schedule Free Placement Trial</span>
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
