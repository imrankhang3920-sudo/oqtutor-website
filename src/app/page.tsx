import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, Users, Clock, Shield, Star, 
  ArrowRight, BookOpen, Heart, Smile, CheckCheck, 
  Award, ShieldAlert, GraduationCap, Video, Calendar
} from 'lucide-react';

import { Metadata } from 'next';

function StatsBar() {
  const stats = [
    { value: "200+", label: "Students Enrolled" },
    { value: "50+", label: "Certified Tutors" },
    { value: "5+", label: "Years Operating" },
    { value: "20+", label: "Countries Served" },
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

// Force dynamic rendering to fetch fresh data on every page load
export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const hasParams = Object.keys(resolvedParams).length > 0;

  return {
    title: 'Learn Quran Online: Live 1-on-1 Classes in USA | OQTutor',
    description: 'Learn Quran online with OQTutor. Our certified male and female tutors provide flexible, live 1-on-1 Quran classes for kids and adults in the USA. Try it free!',
    alternates: {
      canonical: 'https://www.oqtutor.com/',
    },
    openGraph: {
      title: 'Learn Quran Online: Live 1-on-1 Classes in USA | OQTutor',
      description: 'Learn Quran online with OQTutor. Our certified male and female tutors provide flexible, live 1-on-1 Quran classes for kids and adults in the USA. Try it free!',
      url: 'https://www.oqtutor.com/',
      images: [
        {
          url: 'https://www.oqtutor.com/logo.jpg',
          width: 1200,
          height: 630,
          alt: 'OQTutor Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Learn Quran Online: Live 1-on-1 Classes in USA | OQTutor',
      description: 'Learn Quran online with OQTutor. Our certified male and female tutors provide flexible, live 1-on-1 Quran classes for kids and adults in the USA. Try it free!',
      images: ['https://www.oqtutor.com/logo.jpg'],
    },
    robots: hasParams ? {
      index: false,
      follow: true,
    } : {
      index: true,
      follow: true,
    },
  };
}

import { getDBAsync } from '@/data/db';

export default async function HomePage() {
  const dbData = (await getDBAsync()) || {};
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Custom US-focused hero data to avoid duplicate H1 and target US audience
  const homepageHeroData = {
    ...(dbData.hero || {}),
    title: dbData.hero?.title || "Trusted Online Quran Academy for American Muslim Families",
    subtitle: dbData.hero?.subtitle || "Learn Quran online with certified male and female tutors through private 1-on-1 classes. Get high-quality lessons in Noorani Qaida, Tajweed, and Hifz customized around your family's schedule with a 3-day free trial.",
    ctaText: dbData.hero?.ctaText || "Book Free Trial",
    ctaLink: dbData.hero?.ctaLink || "/book-free-trial",
    whatsappText: dbData.hero?.whatsappText || "Chat on WhatsApp",
    whatsappNumber: dbData.hero?.whatsappNumber || "+923478704442",
    backgroundImage: dbData.hero?.backgroundImage || "/logo.jpg"
  };

  // Schema Markup Data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OQTutor",
    "url": "https://www.oqtutor.com",
    "logo": "https://www.oqtutor.com/logo.jpg",
    "image": "https://www.oqtutor.com/logo.jpg",
    "description": "OQTutor is a premier online Quran academy providing personalized 1-on-1 Quran classes with certified male and female tutors.",
    "sameAs": [
      "https://web.facebook.com/profile.php?id=100093682086058",
      "https://www.instagram.com/hadi.382011/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": dbData.contact?.phone || "+447490329339",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Arabic", "Urdu"]
    }
  };

  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "OQTutor Online Quran Academy",
    "url": "https://www.oqtutor.com",
    "logo": "https://www.oqtutor.com/logo.jpg",
    "image": "https://www.oqtutor.com/logo.jpg",
    "description": "Premium online Quran school offering customized 1-on-1 Tajweed, Hifz, Quran Reading, Noorani Qaida, and Islamic Studies classes for kids and adults globally.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "184"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OQTutor",
    "url": "https://www.oqtutor.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.oqtutor.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "OQTutor Quran Programs & Courses",
    "description": "Personalized online Quranic curriculum designed for students in the USA and worldwide.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "Online Noorani Qaida Classes",
          "description": "Master basic Arabic letters, spelling rules, and correct pronunciation (Makhraj) to build a foundation for fluent Quran reading.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "OQTutor"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Online Tajweed Classes",
          "description": "Learn the rules of recitation (Tajweed) online, including pronunciation, pauses, nasalization, and elongations to recite like a certified scholar.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "OQTutor"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Course",
          "name": "Quran Reading Classes",
          "description": "Develop high-level reading fluency directly from the Mushaf, improving pronunciation speed and overcoming recitation hesitations.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "OQTutor"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Course",
          "name": "Online Hifz Classes",
          "description": "One-on-one Quran memorization program led by certified Huffaz, offering customized revision paths and memory testing.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "OQTutor"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Course",
          "name": "Islamic Studies for Kids",
          "description": "Broad Islamic education curriculum covering Wudu, Salah, daily Duas, Islamic history, and moral characters (Akhlaq).",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "OQTutor"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Course",
          "name": "Arabic Language Classes",
          "description": "Learn Quranic and classical Arabic reading, writing, grammar, and vocabulary to directly understand the holy text.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "OQTutor"
          }
        }
      }
    ]
  };

  // High quality, local-intent target FAQs for Homepage & FAQ Schema
  const homepageFaqs = [
    {
      id: "hfaq-1",
      question: "What is the best online Quran class for beginners?",
      answer: "OQTutor is widely recognized as one of the best online Quran academies, offering personalized, one-to-one online Quran classes for absolute beginners. We specialize in Noorani Qaida, which forms the building block for correct pronunciation (Makharij). Our certified male and female Quran tutors guide students of all ages step-by-step to read Arabic fluently, ensuring a strong foundation from day one.",
      category: "general" as const
    },
    {
      id: "hfaq-2",
      question: "Do you offer certified female Quran tutors for children and sisters?",
      answer: "Yes, OQTutor provides a dedicated team of certified female Quran tutors for kids and sisters. We understand the importance of comfort, safety, and privacy in Islamic learning. Our female teachers are highly qualified, hold verified degrees in Islamic Studies, are trained in modern digital teaching methodologies, and are fluent in English to support students.",
      category: "tutors" as const
    },
    {
      id: "hfaq-3",
      question: "How do one-to-one online Quran classes compare to group classes?",
      answer: "One-to-one online Quran classes offer significant advantages over traditional group classrooms. In a private session, the Quran tutor focuses 100% of their attention on a single student. This allows the teacher to adapt the pace to the student's unique learning speed, correct pronunciation mistakes instantly, and eliminate distractions. Students in private classes typically learn up to three times faster and build greater confidence.",
      category: "classes" as const
    },
    {
      id: "hfaq-4",
      question: "Can we choose our own class timings and adjust to our schedule?",
      answer: "Absolutely. OQTutor operates 24/7 to accommodate busy schedules. Whether you prefer early morning lessons before school, afternoon classes, or weekend sessions, you can select times that fit your family's routine. You can also reschedule lessons with prior notice.",
      category: "classes" as const
    },
    {
      id: "hfaq-5",
      question: "How does the 3-day free trial Quran class work?",
      answer: "Our free trial Quran class is designed to let you experience our teaching style with zero commitment. Simply fill out the registration form on our homepage. We will pair you with a certified tutor matching your preferences (male or female). You will receive three separate one-to-one live classes where the tutor assesses the student's level, discusses learning goals, and demonstrates our interactive portal.",
      category: "general" as const
    },
    {
      id: "hfaq-6",
      question: "What age is appropriate for children to start learning the Quran online?",
      answer: "We recommend children start online Quran classes around the age of 4 to 5. At this stage, kids can start learning the basics through our Noorani Qaida course, which is structured with engaging visual guides, colors, and interactive activities. For very young children, our tutors keep lessons short, friendly, and highly encouraging to build a positive relationship with the Holy Quran.",
      category: "classes" as const
    },
    {
      id: "hfaq-7",
      question: "What courses are offered at OQTutor's online Quran academy?",
      answer: "OQTutor offers a comprehensive curriculum, including: (1) Online Noorani Qaida Classes for beginners, (2) Quran Reading Fluency, (3) Online Tajweed Classes to master recitation rules, (4) Online Hifz Classes for Quran memorization, (5) Islamic Studies for Kids (covering Salah, Wudu, Duas, and Fiqh), and (6) Arabic Language Classes. Every course is tailored to the student's level.",
      category: "classes" as const
    },
    {
      id: "hfaq-8",
      question: "How do you ensure child safety and privacy during online classes?",
      answer: "Child safety is our top priority. All online sessions are conducted via secure, monitored virtual classrooms. Our Quality Assurance supervisors conduct periodic reviews and audits to maintain professional teaching standards. Furthermore, parents are encouraged to sit with their children during classes or monitor their progress through regular portal updates and performance reports.",
      category: "general" as const
    },
    {
      id: "hfaq-9",
      question: "How much do online Quran classes cost?",
      answer: "Our pricing is highly competitive and structured into affordable monthly packages based on the number of classes per week. Since we believe quality Quranic education should be accessible to every family, we offer flexible subscription options with no hidden fees, no long-term contracts, and a money-back satisfaction guarantee. You can start with our 3-day free trial to see if it is the right fit.",
      category: "pricing" as const
    },
    {
      id: "hfaq-10",
      question: "Can adults enroll in your online Quran academy?",
      answer: "Yes, we welcome adult learners of all ages and levels, including new Muslims and seniors. Our tutors design separate, customized lesson plans for adults that respect their learning speed and busy schedules. Whether you want to correct your Tajweed pronunciation, start memorizing selected Surahs, or learn the translation of the verses, we have experienced adult-focused tutors to guide you.",
      category: "classes" as const
    },
    {
      id: "hfaq-11",
      question: "What is the importance of learning Quran with Tajweed rules?",
      answer: "Tajweed rules govern the correct pronunciation and articulation of Arabic letters during Quranic recitation. Reciting the Quran with correct Tajweed is a spiritual duty, as mispronouncing letters can change the meaning of the words. Our online Tajweed classes teach students the rules of stops, nasalization (Ghunnah), and articulation points, ensuring they recite beautifully and accurately.",
      category: "classes" as const
    },
    {
      id: "hfaq-12",
      question: "How do you track and report a student's progress?",
      answer: "We maintain detailed progress tracking for every student. After each lesson, the tutor logs the student's performance, attendance, and homework. At the end of every month, parents receive a comprehensive progress report outlining areas of strength and topics that require revision. This ensures transparency and helps parents stay actively involved in their child's learning journey.",
      category: "general" as const
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFaqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Navbar adminLoggedIn={adminLoggedIn} headerConfig={dbData.headerNav} />
      
      <main className="flex-grow">
        <Hero data={homepageHeroData} />
        
        <StatsBar />
        
        {/* Why Choose OQTutor Section (CRO Focus & Target Keywords) */}
        <section id="why-choose-us" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Why Choose OQTutor
              </h2>
              <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Your Trusted Online Quran Academy USA
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text">
                At OQTutor, we provide a premium virtual learning environment that bridges classical Islamic scholarship with modern educational technology. We specialize in custom Quranic curriculum tailored to the specific needs of families residing in the United States.
              </p>
            </div>

            {/* Structured Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Certified & Vetted Tutors</h3>
                <p className="text-sm text-muted-text leading-relaxed font-normal">
                  All OQTutor teachers are verified Islamic scholars, holding formal credentials from prestigious institutions like Al-Azhar University. Every tutor undergoes background checks and comprehensive teaching trials.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Male & Female Tutors</h3>
                <p className="text-sm text-muted-text leading-relaxed font-normal">
                  We respect the modesty and cultural comfort of your household. OQTutor provides a large team of dedicated <Link href="/tutors" className="text-primary hover:underline font-semibold">female Quran tutors</Link> for sisters and young children, ensuring comfortable, private interactive lessons.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border border-card-border hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">Flexible 24/7 Time Zones</h3>
                <p className="text-sm text-muted-text leading-relaxed font-normal">
                  No matter how busy your daily routine is, our classrooms remain open 24 hours a day, 7 days a week. We offer flexible timetables that align perfectly with school routines and active professional life.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <span className="text-sm text-muted-text inline-flex items-center gap-2">
                <CheckCheck className="h-5 w-5 text-primary shrink-0" />
                <span>Start today with our risk-free, 100% <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">Free Trial Quran Class</Link>. No card details required.</span>
              </span>
            </div>
          </div>
        </section>

        {/* Online Quran Classes for Kids Section */}
        <section id="quran-for-kids" className="py-16 md:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/motivated-kids-quran.jpg"
                      alt="Online Quran Classes for Kids USA - Student learning tajweed online with teacher"
                      width={450}
                      height={350}
                      loading="lazy"
                      className="w-full rounded-2xl object-cover h-[350px]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Structured Youth Programs</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Online Quran Classes for Kids USA
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    Finding a structured and consistent religious education program in the United States can be challenging for busy Muslim parents. Driving to a physical Islamic center after school drains time, and large group sizes often mean children do not receive personal attention.
                  </p>
                  <p>
                    Our specialized <Link href="/locations/usa" className="text-primary hover:underline font-semibold">Quran Classes for Kids USA</Link> solve these challenges. We provide a focused, distraction-free digital classroom where young learners interact one-on-one with certified, patient Quran teachers. Lessons are adjusted to the child's age, emotional maturity, and initial learning level.
                  </p>
                  <p>
                    Through visual resources, gamified learning elements, and positive reinforcement, we construct a healthy, encouraging environment that inspires a long-term connection with the Quran. Our tutors maintain regular, detailed communication with parents, providing monthly progress reports to track recitation speed and Tajweed rules.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
                  >
                    <span>Register My Child for Free Trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Quran Classes for Adults Section */}
        <section id="quran-for-adults" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Lifelong Islamic Education</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Online Quran Classes for Adults
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    It is never too late to enhance your relationship with the Holy Quran. Whether you are a college student juggling studies, a busy professional with unpredictable shifts, or a parent aiming to set a beautiful example for your household, OQTutor offers adult-centered educational tracks.
                  </p>
                  <p>
                    Our customized programs are divided into three distinct segments: basic literacy (Noorani Qaida), advanced recitation mastery (Tajweed), and structured memorization (Hifz). We understand that adults learn differently than children, which is why our certified teachers adopt a cooperative, peer-like coaching style.
                  </p>
                  <p>
                    We respect your busy calendars by allowing custom-timed sessions, session rescheduling, and customizable frequency. Our academy hosts certified female Quran tutors for sisters, guaranteeing 100% privacy and comfort during every live session.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
                  >
                    <span>Start Learning as an Adult</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/adult-quran-memorization.jpg"
                      alt="Online Quran Classes for Adults USA - Adult studying the Quran on a digital screen"
                      width={450}
                      height={350}
                      loading="lazy"
                      className="w-full rounded-2xl object-cover h-[350px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certified Male & Female Quran Tutors Section */}
        <section id="tutors-section" className="py-16 md:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/female-teacher-girl.jpg"
                      alt="Certified Male & Female Quran Tutors Online - Certified female tutor teaching a young girl"
                      width={450}
                      height={350}
                      loading="lazy"
                      className="w-full rounded-2xl object-cover h-[350px]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Qualified Islamic Educators</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  Certified Male & Female Quran Tutors Online
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    The quality of your teacher determines the success of your studies. At OQTutor, we recruit only the top 5% of applicants. Our tutors are graduates of reputable Islamic institutions, hold official Quran Ijazahs, and are fluent in English to facilitate direct communication with American students.
                  </p>
                  <p>
                    For sisters and kids, we offer professional, vetted <strong>female Quran tutors</strong>. Every female teacher on our platform provides patient guidance, specializing in correcting pronunciation (Makharij) and cultivating a supportive atmosphere for female learners who require complete privacy.
                  </p>
                  <p>
                    All tutors are trained in digital classroom management, online whiteboard tools, and remote student engagement. They undergo constant evaluations and continuous training audits from our Quality Assurance team to ensure a premium education standard.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="/tutors"
                    className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-card-border hover:bg-foreground/5 text-foreground font-semibold text-xs uppercase tracking-wider transition-all duration-300"
                  >
                    <span>View Teacher Profiles</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* One-to-One Personalized Learning & Flexible USA Time Zones */}
        <section id="personalized-timings" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Designed Around Your Needs</span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                  One-to-One Personalized Learning
                </h2>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6 font-normal">
                  Standard group classes in physical classrooms often force all students to advance at the exact same pace. In such environments, slower learners get left behind, while faster students get bored. OQTutor's <Link href="/locations/usa" className="text-primary hover:underline font-semibold">one-to-one online Quran classes</Link> eliminate this issue. 
                </p>
                <ul className="space-y-3">
                  {[
                    "100% focused attention of a dedicated Quran scholar",
                    "Customized syllabus adapted to student's strength and goals",
                    "Immediate feedback on pronunciation and Tajweed mistakes",
                    "Comfortable learning without public pressure or fear of mistakes"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-muted-text">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Classes Available 24/7</span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                  Flexible 24/7 Class Scheduling
                </h2>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6 font-normal">
                  Living in a busy household means balancing school runs, job responsibilities, and homework schedules. That is why our online Quran academy does not enforce rigid timetables. We accommodate bookings 24 hours a day, 7 days a week.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { zone: "24/7 Availability", desc: "Schedule lessons early morning, after school, or late evenings" },
                    { zone: "Weekend Sessions", desc: "Dedicated Saturday and Sunday classes to keep weekdays free" },
                    { zone: "Easy Rescheduling", desc: "Adjust or make up classes easily through your student portal" },
                    { zone: "Self-Paced Learning", desc: "Progress at your natural speed without public pressure" }
                  ].map((item, idx) => (
                    <div key={idx} className="glass p-4 rounded-2xl border border-card-border">
                      <h4 className="font-bold text-xs sm:text-sm text-foreground mb-1">{item.zone}</h4>
                      <p className="text-[11px] text-muted-text leading-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Quran Programs (Courses list) */}
        <Courses data={dbData.courses} />

        {/* Expanded Course Curriculums Section (2,000–2,500 word requirement help) */}
        <section id="course-details" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                In-Depth Syllabus
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Detailed Online Quran Course Syllabus
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text">
                Explore the structured curriculum of our six core Quranic and Islamic education tracks designed for children and adult learners in the USA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Noorani Qaida Course */}
              <div className="glass p-8 rounded-3xl border border-card-border">
                <span className="text-xs font-bold text-secondary uppercase">Level 1: Fundamentals</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">Online Noorani Qaida Classes</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                  The Noorani Qaida course is the absolute prerequisite for students starting their Quran journey. This program teaches kids and adults how to read Arabic words correctly, focusing on alphabet shapes, articulation points, and basic sound connections.
                </p>
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Curriculum Highlights:</h4>
                  {[
                    "Recognition and pronunciation of the 28 Arabic letters (Makhraj)",
                    "Understanding joint letters and compound shape changes",
                    "Mastering Harakat symbols (Fathah, Kasrah, Dammah)",
                    "Learning Maddah extensions, Tanween double symbols, and Sukoon stops",
                    "Merging rules to read full words and short verses confidently"
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-muted-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tajweed Course */}
              <div className="glass p-8 rounded-3xl border border-card-border">
                <span className="text-xs font-bold text-secondary uppercase">Level 2: Recitation Rules</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">Online Tajweed Classes</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                  Tajweed means 'to beautify' or 'to perfect.' Our dedicated Tajweed courses teach the precise rules of Arabic pronunciation, ensuring that you recite the Quran exactly as it was revealed to the Prophet Muhammad (PBUH).
                </p>
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Curriculum Highlights:</h4>
                  {[
                    "Mastering the rules of Noon Sakinah and Tanween (Ikhfa, Idgham, Iqlab, Izhar)",
                    "Learning the rules of Meem Sakinah (Nasalized extensions)",
                    "Rules of Madd (extensions and prolongation types)",
                    "Understanding articulation points (Makharij) and qualities (Sifat)",
                    "Rules of heavy and light letters, stops, and breath control"
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-muted-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quran Reading Fluency */}
              <div className="glass p-8 rounded-3xl border border-card-border">
                <span className="text-xs font-bold text-secondary uppercase">Level 3: Flow & Confident Recitation</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">Quran Reading Course</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                  Once a student completes the Qaida foundation, they transition to reading the actual text of the Quran. This course focuses on building reading speed, flow, and confidence, eliminating hesitations and stutters while applying essential Tajweed rules in real-time.
                </p>
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Curriculum Highlights:</h4>
                  {[
                    "Reading directly from the Mushaf (standard Quranic script)",
                    "Applying basic and advanced Tajweed rules dynamically",
                    "Building recitation speed, vocal clarity, and breath allocation",
                    "Overcoming common tongue-ties and pronunciation hesitations",
                    "Learning correct Quranic stop symbols (Waqf) and continuation markers"
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-muted-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hifz Program */}
              <div className="glass p-8 rounded-3xl border border-card-border">
                <span className="text-xs font-bold text-secondary uppercase">Level 4: Quran Memorization</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">Online Hifz Classes</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                  Our structured Quran memorization program is designed for students who want to commit the entire Quran (or selected Surahs) to memory. Tutors implement classical memorization techniques with digital revision schedules.
                </p>
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Curriculum Highlights:</h4>
                  {[
                    "Daily new memorization targets (Sabaq) matching student ability",
                    "Systematic revision of recently memorized verses (Sabqi)",
                    "Continuous tracking and revision of older memorized parts (Manzil)",
                    "Learning classical techniques to solidify memory retention",
                    "Individual target checks and memory testing under certified Huffaz"
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-muted-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Islamic Studies */}
              <div className="glass p-8 rounded-3xl border border-card-border">
                <span className="text-xs font-bold text-secondary uppercase">Islamic Foundation</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">Islamic Studies for Kids</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                  Learning to read the Quran is only one part of a child's spiritual education. Our Islamic Studies course teaches young Muslims the fundamentals of their faith, practice, history, and values to build a solid Islamic character.
                </p>
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Curriculum Highlights:</h4>
                  {[
                    "Five pillars of Islam and Six Articles of Faith (Aqeedah)",
                    "Step-by-step training for Wudu (ablution) and Salah (daily prayers)",
                    "Memorizing essential daily Duas, Adhkar, and short Surahs",
                    "Stories of the Prophets and the Seerah (life) of Prophet Muhammad (PBUH)",
                    "Islamic values, manners (Adab), and moral character development (Akhlaq)"
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-muted-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arabic Language Classes */}
              <div className="glass p-8 rounded-3xl border border-card-border">
                <span className="text-xs font-bold text-secondary uppercase">Language Mastery</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">Arabic Language Classes</h3>
                <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                  Move beyond recitation to understand the meanings of the words you recite. This course teaches standard classical Arabic (Fusha), Quranic grammar, and vocabulary, allowing students to comprehend Quran verses directly.
                </p>
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Curriculum Highlights:</h4>
                  {[
                    "Learning essential Quranic vocabulary and root words",
                    "Understanding basic Arabic grammar (Nahw and Sarf)",
                    "Translating short Surahs and common phrases used in prayer",
                    "Developing basic reading, writing, and speaking skills in Arabic",
                    "Building a direct cognitive connection to the word of Allah"
                  ].map((pt, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-muted-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* How Online Classes Work Section */}
        <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Simple Steps
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                How Your Online Quran Classes Work
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text">
                Getting started with OQTutor is simple and quick. We have designed our enrollment process to be entirely transparent and risk-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
              
              {/* Step 1 */}
              <div className="glass p-8 rounded-3xl border border-card-border text-center relative z-10 flex flex-col items-center">
                <span className="h-10 w-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm mb-6">
                  1
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3">Book Your Free Trial</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  Fill out our simple registration form with your contact details and course preferences. No credit card is required.
                </p>
              </div>

              {/* Step 2 */}
              <div className="glass p-8 rounded-3xl border border-card-border text-center relative z-10 flex flex-col items-center">
                <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-sm mb-6">
                  2
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3">Meet Your Tutor</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  Attend three 1-on-1 trial classes. The tutor will evaluate the student's level, set study goals, and demonstrate our learning portal.
                </p>
              </div>

              {/* Step 3 */}
              <div className="glass p-8 rounded-3xl border border-card-border text-center relative z-10 flex flex-col items-center">
                <span className="h-10 w-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm mb-6">
                  3
                </span>
                <h3 className="text-lg font-bold text-foreground mb-3">Start Regular Lessons</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  If satisfied, select an affordable monthly package that fits your scheduling preferences and start regular lessons.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Safety & Privacy Section */}
        <section id="safety-privacy" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-start">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-3">100% Secure Environment</span>
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                  Safety & Privacy in Online Learning
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6 font-normal">
                  At OQTutor, we take child protection and classroom security extremely seriously. We want parents in the USA to feel absolutely confident about the environment in which their children study.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Monitored Classrooms</h4>
                      <p className="text-xs sm:text-sm text-muted-text font-normal">
                        Our Quality Assurance managers conduct random checks and reviews of class logs to guarantee professional and encouraging behaviors.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Female Tutor Options</h4>
                      <p className="text-xs sm:text-sm text-muted-text font-normal">
                        We offer dedicated female tutors for young children and sisters, ensuring a secure and culturally appropriate environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Parental Dashboard</h4>
                      <p className="text-xs sm:text-sm text-muted-text font-normal">
                        Parents can log in at any time to monitor attendance, read lesson summaries, and check teacher feedback records.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 
                <div className="mt-8 pt-6 border-t border-card-border/40 flex flex-wrap items-center gap-4">
                  <span className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Verified Trust Badges:</span>
                  <div className="flex items-center space-x-3 opacity-60">
                    <img src="/trustpilot-badge.png" alt="Trustpilot Rating" className="h-6 w-auto" />
                    <img src="/google-reviews-badge.png" alt="Google Reviews" className="h-6 w-auto" />
                    <img src="/ssl-secure-badge.png" alt="SSL Secure Connection" className="h-6 w-auto" />
                  </div>
                </div>
                */}
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/quran-salah.jpg"
                      alt="Safety and privacy in online learning - Child practicing salah under parental guidance"
                      width={450}
                      height={350}
                      loading="lazy"
                      className="w-full rounded-2xl object-cover h-[350px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories & Parent Testimonials */}
        <Testimonials data={dbData.testimonials || []} />

        {/* Blog Preview & Articles */}
        <BlogPreview />

        {/* FAQ Section (10-15 detailed FAQs) */}
        <FAQ data={homepageFaqs} />

        {/* Contact Form Section (Book Trial) */}
        <Contact data={dbData.contact || { email: 'info@oqtutor.com', phone: '+447490329339', whatsapp: '+923478704442', location: 'USA / UK', aboutText: '' }} />
      </main>
      
      <Footer data={dbData.contact || { email: 'info@oqtutor.com', phone: '+447490329339', whatsapp: '+923478704442', location: 'USA / UK', aboutText: '' }} footerConfig={dbData.footerNav} />
    </>
  );
}
