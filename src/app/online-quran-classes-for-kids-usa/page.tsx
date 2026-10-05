import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HowItWorksSection from '@/components/HowItWorksSection';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, Shield, Award, BookOpen, Clock, Users, ArrowRight, Sparkles, 
  HeartHandshake, CheckCheck, HelpCircle, Star, Video, CreditCard, Check, Gift,
  Eye, Lock, ShieldCheck, Trophy, RotateCcw, Mic, Smile, UserCheck, Zap, Compass, ChevronRight
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
      question: "What age can my child start online Quran classes?",
      answer: "Children as young as 4 to 5 years old can start with our specialized Noorani Qaida for Beginners program. At this early age, lessons are kept short, interactive, and playful, focusing on Arabic letter recognition, phonics, and basic vocal repetition. For children aged 6 and above, we transition steadily into word connections and full Quran reading (Nazra). We evaluate every child during the free 3-day trial to ensure they are placed at the right pace."
    },
    {
      question: "My child gets easily distracted. Will they stay focused during an online class?",
      answer: "Yes! Online distraction is the most common concern for parents, and our entire curriculum is designed specifically to solve it. Unlike crowded group classes where quiet children get overlooked, our 1-on-1 classes are 30 minutes long and structured into fast-paced 5-to-15 minute blocks. Tutors use interactive digital whiteboards, color-coded Tajweed pointers, animated rewards, and engaging vocal drills. Because the teacher's attention is 100% focused on your child, they remain actively engaged from the first minute to the last."
    },
    {
      question: "Do kids need to know Arabic or have prior Islamic education before starting?",
      answer: "No prior knowledge of the Arabic language or Arabic script is required. Over 80% of our American-Muslim students start as absolute beginners who do not speak or read any Arabic. Our certified tutors speak fluent English and begin with the very basics: letter shapes, English-equivalent sounds, and step-by-step pronunciation (Makharij). We guide your child gently from zero to fluent Quran recitation."
    },
    {
      question: "Can siblings take classes together or do they have separate sessions?",
      answer: "We strongly recommend separate 1-on-1 sessions for each sibling so every child learns at their own natural speed without feeling self-conscious or overshadowed. However, we can schedule back-to-back lesson slots with the same teacher (or separate teachers) for your family's convenience. Families enrolling two or more children also receive a 10% to 15% sibling discount on all monthly plans."
    },
    {
      question: "Is it safe for my child to learn Quran online with OQTutor?",
      answer: "Safety and security are our highest priorities. All our tutors undergo comprehensive identity verification, academic credential checks, and background vetting. We maintain an open-door policy: parents are always welcome to sit in on live lessons. Furthermore, tutors are strictly prohibited from contacting children privately via phone, social media, or personal messaging. All feedback, class recordings, and progress updates flow transparently through the parent."
    },
    {
      question: "How much should I help my child with their Quran practice at home?",
      answer: "You don't need to be an Arabic or Tajweed expert to support your child! Just 10 to 15 minutes of daily encouragement—such as listening to them read their assigned page or reviewing short Duas together—makes a massive difference. Our tutors assign light, bite-sized practice tasks after each lesson and provide monthly progress reports so you always know exactly what your child is working on."
    },
    {
      question: "How do online Quran classes work on a day-to-day basis?",
      answer: "Classes are conducted live 1-on-1 over Zoom or Skype at your chosen time slot. Your child connects with their dedicated teacher using a computer, tablet, or smartphone with a headset. The tutor shares an interactive digital screen showing the Qaida or Quran text with live highlighting. Lessons are conversational, encouraging, and tailored to your child's learning style."
    },
    {
      question: "Do you offer female Quran teachers for young girls and sisters?",
      answer: "Yes, absolutely. We have a dedicated team of certified, English-speaking female Quran scholars and Hafizas available across all US time zones (EST, CST, MST, PST). You can specify your preference for a female instructor during registration or trial booking at no extra fee."
    },
    {
      question: "What happens if we need to reschedule or miss a class?",
      answer: "We understand that American family schedules can be busy with school, sports, and family events. If you notify us at least 4 to 6 hours before the scheduled lesson, your tutor will gladly arrange a makeup class at a mutually convenient time so your child never misses out on learning hours."
    },
    {
      question: "What is the monthly fee for online Quran classes in the USA?",
      answer: "Our fee plans are transparent and budget-friendly for American-Muslim families, starting from $30/month for 2-3 classes per week, $40/month for our popular 4-5 classes per week plan, up to $50/month for intensive memorization. All plans include 1-on-1 personalized tutoring, free study materials, and no registration or hidden fees."
    },
    {
      question: "How do you track and report my child's progress to parents?",
      answer: "We provide structured monthly written progress reports covering letter recognition, fluency, Tajweed application, Dua memorization, and attendance. Parents can also request brief 5-minute feedback discussions with the tutor or academic supervisor at the end of any week."
    },
    {
      question: "What equipment or software do we need at home?",
      answer: "Getting started is simple. You only need: (1) a computer, laptop, iPad, or tablet with a webcam, (2) a stable internet connection, (3) a headset or earphones with a microphone for clear audio, and (4) Zoom or Skype installed. All digital Qaida books and Quran reading materials are provided by us completely free."
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

  const coursePath = [
    {
      step: "01",
      title: "Noorani Qaida",
      subtitle: "Alphabet & Phonics",
      age: "Ages 4-7",
      icon: BookOpen,
      desc: "Arabic letters, Makharij & basic connecting rules"
    },
    {
      step: "02",
      title: "Quran Reading",
      subtitle: "Nazra & Word Flow",
      age: "Ages 6+",
      icon: Compass,
      desc: "Smooth reading from Qaida transition to full Surahs"
    },
    {
      step: "03",
      title: "Tajweed Mastery",
      subtitle: "Rules & Melody",
      age: "Ages 7+",
      icon: Sparkles,
      desc: "Ghunnah, Ikhfa, Qalqalah & melodious recitation"
    },
    {
      step: "04",
      title: "Quran Memorization",
      subtitle: "Hifz Track",
      age: "Ages 8+",
      icon: Award,
      desc: "Surah memorization with daily systematic revision"
    }
  ];

  const courseList = [
    {
      id: "1",
      title: "Noorani Qaida for Beginners",
      description: "Arabic alphabet recognition, accurate articulation points (Makharij), and foundational letter-joining rules.",
      tag: "Ages 4-7",
      stage: "Stage 1: Foundation",
      syllabusUrl: "/courses/noorani-qaida",
      icon: BookOpen
    },
    {
      id: "2",
      title: "Quran Reading (Nazra)",
      description: "Smooth word-by-word Quran reading, bridging the gap between Qaida exercises and reciting complete Quranic chapters with confidence.",
      tag: "Ages 6+",
      stage: "Stage 2: Fluency",
      syllabusUrl: "/courses/quran-reading",
      icon: Compass
    },
    {
      id: "3",
      title: "Quran Recitation with Tajweed",
      description: "Mastering exact Tajweed rules (Madd, Ghunnah, Ikhfa, Qalqalah), breath control, and melodious recitation tone.",
      tag: "Ages 7+",
      stage: "Stage 3: Mastery",
      syllabusUrl: "/courses/tajweed",
      icon: Sparkles
    },
    {
      id: "4",
      title: "Quran Memorization (Hifz Program)",
      description: "Structured Hifz track from short Juz Amma Surahs to full Quran memorization with daily Sabaq & Manzil revision.",
      tag: "Ages 8+",
      stage: "Stage 4: Memorization",
      syllabusUrl: "/courses/hifz",
      icon: Award
    },
    {
      id: "5",
      title: "Islamic Studies & Daily Duas",
      description: "Essential Islamic etiquette, daily Sunnah Duas, 6 Kalimas, practical Salah (prayer), and Wudu step-by-step.",
      tag: "All Ages",
      stage: "Integrated Track",
      syllabusUrl: "/courses",
      icon: HeartHandshake
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
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Structured Learning Path
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Step-by-Step Quran Learning Path for Kids
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text font-normal leading-relaxed">
                We guide your child through a proven step-by-step curriculum — from foundational Arabic letters to fluent Quran reading and complete Tajweed mastery.
              </p>
            </div>

            {/* VISUAL COURSE PROGRESSION ROADMAP */}
            <div className="mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative max-w-6xl mx-auto">
                {coursePath.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between relative group bg-background/60 hover:shadow-xl"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            Step {item.step}
                          </span>
                          <span className="text-[11px] font-semibold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                            {item.age}
                          </span>
                        </div>
                        <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-xs font-semibold text-primary mb-2">{item.subtitle}</p>
                        <p className="text-xs text-muted-text leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>

                      {idx < coursePath.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-background border border-card-border text-primary shadow-sm">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* DETAILED COURSE CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {courseList.map((course) => {
                const Icon = course.icon;
                return (
                  <div 
                    key={course.id} 
                    className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl bg-background/50 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-secondary/15 text-secondary rounded-2xl group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                          {course.tag}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider block mb-1">
                        {course.stage}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                        {course.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-card-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <Link 
                        href={`/book-free-trial?course=${encodeURIComponent(course.title)}`}
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group/link"
                      >
                        <span>Enroll Child in Free Trial</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href={course.syllabusUrl}
                        className="text-[11px] font-medium text-muted-text hover:text-primary transition-colors underline underline-offset-2"
                      >
                        View Syllabus
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CURRICULUM SYLLABUS CROSS-LINK BANNER */}
            <div className="mt-14 max-w-5xl mx-auto glass p-6 sm:p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider bg-primary/10 border border-primary/20 rounded-full px-3 py-1 inline-block mb-2">
                  Academic Syllabus &amp; Prerequisites
                </span>
                <h4 className="text-base sm:text-lg font-bold text-foreground">
                  Looking for our Full Global Quran Curriculum?
                </h4>
                <p className="text-xs sm:text-sm text-muted-text mt-1 max-w-2xl leading-relaxed">
                  Explore complete lesson breakdowns, age milestones, Tajweed rule checklists, and academic learning outcomes in our centralized <Link href="/courses" className="text-primary font-semibold hover:underline">Online Quran Courses Directory</Link>.
                </p>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shrink-0 transition-all"
              >
                <span>View All Syllabi</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
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

        {/* HOW IT WORKS SECTION */}
        <HowItWorksSection
          id="kids-usa-how-it-works"
          eyebrow="Simple 4-Step Process"
          title="How Online Quran Classes Work for Kids"
          subtitle="Getting your child started is effortless, structured, and completely risk-free for American-Muslim parents."
          image={{
            src: '/online-quran-classes-usa.jpg',
            alt: 'Young student in USA learning Quran online in 1-on-1 class',
          }}
          pillText="3-Day Free Trial • No Card"
          miniCardTitle="Kids Learning Tracks"
          miniCardChips={['Noorani Qaida', 'Nazra Quran', 'Tajweed Rules', 'Hifz Program']}
        />

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
                Parent Resources &amp; Guides
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Educational Guides for US Muslim Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base text-muted-text max-w-2xl mx-auto">
                Practical advice, tutor evaluation checklists, and child development timelines curated by our academic scholars.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link
                href="/blog/best-online-quran-classes-for-kids-in-usa"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider px-2.5 py-1 bg-primary/10 rounded-full inline-block">
                    Selection Guide
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    How to Choose the Best Online Quran Classes for Kids in the USA
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Key criteria American-Muslim parents should evaluate: tutor accreditation, US time zone schedules, safety policies, and trial evaluation tips.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Selection Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/select-right-online-quran-tutor"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider px-2.5 py-1 bg-secondary/10 rounded-full inline-block">
                    Tutor Hiring Checklist
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    How to Choose the Right Online Quran Tutor for Your Child
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Essential interview questions to ask, background vetting standards, and how to assess tutor patience with younger children.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Hiring Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/how-long-does-it-take-for-a-child-to-complete-the-quran-online"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider px-2.5 py-1 bg-emerald-500/10 rounded-full inline-block">
                    Timeline &amp; Milestones
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    How Long Does It Take for a Child to Complete the Quran Online?
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Realistic timelines for Noorani Qaida, Nazra, Tajweed, and Hifz completion based on weekly class frequency and student age.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Timeline Guide</span>
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
