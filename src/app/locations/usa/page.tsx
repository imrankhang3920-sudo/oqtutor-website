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
  UserCheck, 
  Compass, 
  FileText
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes USA for Kids & Adults | OQTutor";
  const metaDescription = "Live one-to-one online Quran classes in the USA for kids and adults. Learn Noorani Qaida, Tajweed, Quran reading & Hifz with certified tutors. Book a free trial.";
  
  return {
    title: metaTitle,
    description: metaDescription,
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
      title: metaTitle,
      description: metaDescription,
      type: "website",
      images: [
        {
          url: "https://www.oqtutor.com/images/hero-quran-recitation.webp",
          width: 1200,
          height: 630,
          alt: "Online Quran Classes in the USA with Qualified Tutors",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["https://www.oqtutor.com/images/hero-quran-recitation.webp"],
    },
  };
}

export default async function USALocationsHubPage() {
  const dbData = readDB();
  
  // Check if admin is logged in safely
  let adminLoggedIn = false;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    adminLoggedIn = token ? verifyAdminToken(token) : false;
  } catch {
    adminLoggedIn = false;
  }

  // Exact single H1 and supporting intro
  const heroFallback = dbData?.hero || {
    title: "Online Quran Classes in the USA for Kids & Adults",
    subtitle: "Personalized, live one-to-one Quran lessons for children and adults across all US time zones. Learn Noorani Qaida, Tajweed, Quran reading, Hifz, and Islamic Studies from home with certified male and female scholars.",
    ctaText: "Book Free Placement Trial",
    ctaLink: "/book-free-trial",
    whatsappText: "+1234567890",
    whatsappNumber: "+1234567890",
    backgroundImage: "/hero-bg.jpg",
  };

  const customHeroData = {
    title: "Online Quran Classes in the USA for Kids & Adults",
    subtitle: "Personalized, live one-to-one Quran lessons for children and adults across all US time zones. Learn Noorani Qaida, Tajweed, Quran reading, Hifz, and Islamic Studies from home with certified male and female scholars.",
    ctaText: "Book Free Placement Trial",
    ctaLink: "/book-free-trial",
    whatsappText: heroFallback.whatsappText || "",
    whatsappNumber: heroFallback.whatsappNumber || "",
    backgroundImage: heroFallback.backgroundImage || "/hero-bg.jpg",
  };

  const activeStates = [
    {
      name: "Texas",
      path: "/locations/usa/texas",
      cities: "Houston, Dallas-Fort Worth, Austin, San Antonio, Plano",
      desc: "Live 1-on-1 Quran lessons adapted to Central Time school schedules for Muslim families across Texas."
    },
    {
      name: "Illinois",
      path: "/locations/usa/illinois",
      cities: "Chicago, Naperville, Schaumburg, Skokie, Evanston, Aurora",
      desc: "Private online Quran lessons with certified tutors matching Chicagoland and Central Time family routines."
    },
    {
      name: "Michigan",
      path: "/locations/usa/michigan",
      cities: "Dearborn, Detroit, Hamtramck, Ann Arbor, Lansing, Grand Rapids",
      desc: "Personalized Quran reading and Tajweed classes scheduled around Eastern Time school and prayer hours."
    },
    {
      name: "New York",
      path: "/locations/usa/new-york",
      cities: "Brooklyn, Queens, Manhattan, Staten Island, Long Island",
      desc: "Flexible Eastern Time morning and evening slots tailored for busy students and professionals in NY."
    }
  ];

  const featuredTutors = [
    {
      name: "Qari Muhammad Imran",
      role: "Senior Tajweed & Hifz Scholar",
      experience: "5 Years Experience",
      education: "B.A. in Islamic Studies, Jamia Ashrafia Lahore",
      languages: "English, Urdu",
      gender: "Male",
      specialization: "Hifz Program & Tajweed Sciences",
      ageGroups: "Children (Age 4+) & Adults",
      photo: "/tutors/qari_muhammad_imran.jpg"
    },
    {
      name: "Qaria Sumaira Younis",
      role: "Senior Female Instructor",
      experience: "12 Years Experience",
      education: "Alimah Degree, Jamia Hafsa Islamabad",
      languages: "English, Urdu",
      gender: "Female",
      specialization: "Noorani Qaida & Kids Learning",
      ageGroups: "Kids & Sister Students",
      photo: "/tutors/qaria_sumaira_younis.png"
    },
    {
      name: "Sheikh Bilal Hassan",
      role: "Arabic & Tajweed Instructor",
      experience: "11 Years Experience",
      education: "M.A. Arabic Language, Peshawar University",
      languages: "English, Urdu",
      gender: "Male",
      specialization: "Quranic Arabic & Tajweed Rules",
      ageGroups: "Teens & Adult Learners",
      photo: "/tutors/tutor-7.jpg"
    },
    {
      name: "Ustadha Aiman Shafeeq",
      role: "Hifz & Sisters Specialist",
      experience: "5 Years Experience",
      education: "Shahadat-ul-Alimiyyah, Jamia Binoria",
      languages: "English, Urdu",
      gender: "Female",
      specialization: "Hifz-ul-Quran & Sisters Classes",
      ageGroups: "Sisters & Young Children",
      photo: "/tutors/ustadha_aiman_shafeeq.jpg"
    }
  ];

  const coursesList = [
    {
      id: "noorani-qaida",
      title: "Noorani Qaida for Beginners",
      tag: "Ages 4+ & Adult Beginners",
      description: "Learn the Arabic alphabet, letter joining, vowel movements (Harakat), and correct articulation points (Makharij) from scratch.",
      icon: BookOpen,
      link: "/courses/noorani-qaida",
      anchorText: "Learn Noorani Qaida Online"
    },
    {
      id: "quran-reading",
      title: "Fluent Quran Reading",
      tag: "Post-Qaida Students",
      description: "Transition from basic letters to fluent recitation of the Holy Quran with steady pacing, correct stops (Waqf), and confidence.",
      icon: Compass,
      link: "/courses/quran-reading",
      anchorText: "Explore Quran Reading Lessons"
    },
    {
      id: "tajweed",
      title: "Quran with Tajweed",
      tag: "All Ages",
      description: "Master essential recitation rules including Ghunnah, Ikhfa, Qalqalah, and Madd through live audio-visual correction.",
      icon: Sparkles,
      link: "/courses/tajweed",
      anchorText: "Learn Quran with Tajweed"
    },
    {
      id: "hifz",
      title: "Quran Memorization (Hifz)",
      tag: "Dedicated Students",
      description: "Structured daily memorization (Sabaq) paired with systematic revision (Sabqi & Manzil) led by certified Huffaz.",
      icon: Award,
      link: "/courses/hifz",
      anchorText: "Explore Our Hifz Quran Program"
    },
    {
      id: "islamic-studies",
      title: "Islamic Studies & Daily Duas",
      tag: "Kids & Teens",
      description: "Practical Islamic education covering step-by-step Salah, Wudu, authentic daily supplications, Seerah, and moral character.",
      icon: HeartHandshake,
      link: "/courses/islamic-studies",
      anchorText: "View Islamic Studies Course"
    },
    {
      id: "tafseer",
      title: "Quran Translation & Tafseer",
      tag: "Teens & Adults",
      description: "Understand the historical context, word-by-word meaning, and practical life lessons of the Holy Quran.",
      icon: FileText,
      link: "/courses/tafseer",
      anchorText: "Study Quran Tafseer & Meaning"
    },
    {
      id: "female-quran-teacher",
      title: "Classes with Female Quran Teachers",
      tag: "Sisters & Children",
      description: "Private one-on-one sessions with certified Alimas and Qariahs in a comfortable, supportive environment.",
      icon: Users,
      link: "/courses/female-quran-teacher",
      anchorText: "Meet Our Female Quran Teachers"
    }
  ];

  const blogGuides = [
    {
      title: "Online Quran Classes in the USA for Kids and Adults",
      desc: "A comprehensive guide on curriculum tracks, scheduling flexibility, and verified one-to-one tutoring across the US.",
      link: "/blog/online-quran-classes-in-the-usa-for-kids-and-adults"
    },
    {
      title: "Online Quran Classes in Texas: A Real Guide for Busy Families",
      desc: "How Muslim families in Houston, Dallas, Austin, and across Texas fit high-quality Quran lessons into busy routines.",
      link: "/blog/online-quran-classes-texas"
    },
    {
      title: "What US Parents Should Know Before Choosing an Online Quran Tutor",
      desc: "Key questions to ask regarding credentials, scheduling flexibility, and one-on-one trial assessments.",
      link: "/blog/what-us-parents-should-know-before-choosing-an-online-quran-tutor"
    },
    {
      title: "Best Online Quran Classes for Kids in USA",
      desc: "A practical guide for parents evaluating teacher patience, lesson duration, and engagement strategies.",
      link: "/blog/best-online-quran-classes-for-kids-in-usa"
    },
    {
      title: "What Are the Best Online Quran Classes for Beginners?",
      desc: "Step-by-step learning progression from the Arabic alphabet to confident Quran recitation.",
      link: "/blog/best-online-quran-classes-for-beginners"
    },
    {
      title: "How to Choose the Best Female Quran Teacher Online",
      desc: "Tips for mothers and sisters looking for certified, English-fluent female Quran instructors.",
      link: "/blog/how-to-choose-the-best-female-quran-teacher-online-for-your-child"
    },
    {
      title: "Beginner's Guide to Mastering Tajweed Rules",
      desc: "Understanding Makharij, articulation points, and common pronunciation habits to avoid.",
      link: "/blog/beginners-guide-mastering-tajweed-rules"
    },
    {
      title: "Effective Hifz Memorization Techniques",
      desc: "Proven daily revision cycles (Sabaq, Sabqi, Manzil) to retain memorized Surahs permanently.",
      link: "/blog/effective-hifz-memorization-techniques"
    }
  ];

  const usaFaqs = [
    {
      id: "usa-faq-1",
      question: "What are the best online Quran classes in the USA?",
      answer: "The best classes provide qualified teachers, private one-to-one lessons, structured Tajweed rules, flexible scheduling across US time zones, age-appropriate material for kids, and transparent progress updates. Look for an academy that assesses the student's entry level and offers a trial class so you can evaluate the teacher's patience and communication before committing."
    },
    {
      id: "usa-faq-2",
      question: "How do I choose an online Quran tutor for my child?",
      answer: "Focus on three factors: verified teaching qualifications, experience with children, and patience during pronunciation correction. Ask if lessons are truly one-on-one, whether classes fit your local time zone, and if female teachers are available if preferred. Booking a placement trial allows you to observe how your child interacts with the tutor in real time."
    },
    {
      id: "usa-faq-3",
      question: "Are online Quran classes suitable for beginners?",
      answer: "Yes. Beginners of any age start with the Noorani Qaida curriculum, which introduces Arabic alphabet recognition, letter shapes, short vowels (Harakat), and articulation points (Makharij). With one-to-one instruction, tutors guide learners step by step from individual sounds to reading words and full verses without feeling rushed."
    },
    {
      id: "usa-faq-4",
      question: "Can children learn Quran online?",
      answer: "Children learn effectively online through interactive digital classrooms. Sessions are kept to 30 minutes to match young attention spans, combining digital Mushaf tools, screen sharing, and gentle encouragement. Tutors focus on building accurate recitation habits and a positive relationship with the Quran from the comfort of home."
    },
    {
      id: "usa-faq-5",
      question: "Can adults learn Quran online?",
      answer: "Yes. Adult courses are designed around work and family commitments with early morning, evening, and weekend slots. Whether you are learning Arabic letters from scratch, refining Tajweed rules, memorizing specific Surahs, or studying Tafseer, lessons progress at your individual pace in complete privacy with male or female scholars."
    },
    {
      id: "usa-faq-6",
      question: "Do you offer one-to-one Quran lessons?",
      answer: "Every standard class at OQTutor is conducted live one-to-one between a single student and teacher. This private format ensures 100% focused attention, immediate error correction, and a customized pace without the distractions or waiting times common in group environments."
    },
    {
      id: "usa-faq-7",
      question: "Can I choose a female Quran teacher?",
      answer: "Yes. We have qualified female Quran teachers available for sisters and young children. Our female instructors hold verified Islamic credentials, are fluent in English, and provide a nurturing, private setting for learning Noorani Qaida, Tajweed, Quran reading, and Hifz."
    },
    {
      id: "usa-faq-8",
      question: "Do you offer Quran classes with Tajweed?",
      answer: "Yes. Our Tajweed course covers articulation points (Makharij), Ghunnah, Ikhfa, Qalqalah, Madd, and stopping signs (Waqf). Tutors explain the rules clearly and listen closely during live recitation to correct pronunciation mistakes immediately as you read from the Mushaf."
    },
    {
      id: "usa-faq-9",
      question: "Do you offer Hifz classes?",
      answer: "Yes. Our online Hifz program pairs students with certified Huffaz. Lessons follow a systematic daily cycle: memorizing new verses (Sabaq), revising recent pages (Sabqi), and reinforcing long-term retention (Manzil). Study plans are customized to match each student's capacity and schedule."
    },
    {
      id: "usa-faq-10",
      question: "What time are Quran lessons available?",
      answer: "Classes are available 24 hours a day, 7 days a week, accommodating Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) time zones. Families can schedule lessons before school, in the afternoon, during late evenings, or across weekends, with the ability to adjust times as routines change."
    },
    {
      id: "usa-faq-11",
      question: "How much do online Quran classes cost?",
      answer: "Tuition is structured into straightforward monthly plans based on weekly class frequency: $30 per month for 3 classes per week, $40 per month for 5 classes per week, and $50 per month for daily (7 classes/week) sessions. Each lesson is 30 minutes of private one-to-one instruction with no hidden fees or contracts."
    },
    {
      id: "usa-faq-12",
      question: "Is there a trial class?",
      answer: "Yes. OQTutor provides a free trial class with no credit card or financial commitment required. During the session, the teacher assesses the student's current reading level, introduces the online portal, and outlines a personalized learning plan tailored to your goals."
    },
    {
      id: "usa-faq-13",
      question: "How do online Quran classes work?",
      answer: "After booking a trial, you connect with your assigned tutor via video conference (such as Zoom) using a laptop, tablet, or computer. Both student and teacher view the digital Quran or Qaida together on screen. The tutor listens to recitation, corrects pronunciation in real time, and sends lesson summaries after class."
    }
  ];

  // Structured Data Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": usaFaqs.map(faq => ({
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
        "name": "USA Online Quran Classes",
        "item": "https://www.oqtutor.com/locations/usa"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "OQTutor Online Quran Academy",
    "url": "https://www.oqtutor.com",
    "logo": "https://www.oqtutor.com/logo.jpg",
    "description": "Live one-to-one online Quran education for children and adults in the United States, covering Noorani Qaida, Tajweed, Quran reading, and Hifz.",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} headerConfig={dbData?.headerNav} />

      <main className="flex-grow">
        {/* Single H1 Hero Component */}
        <Hero data={customHeroData} />

        {/* AEO Quick Answer Section */}
        <section className="py-8 bg-primary/[0.03] border-y border-primary/15 relative">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-primary/20 shadow-md">
              <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="h-4 w-4 shrink-0" />
                <span>AEO Quick Answer</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-3">
                Quick Answer: What Are the Best Online Quran Classes in the USA?
              </h2>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                The best online Quran classes in the USA provide qualified teachers, live one-to-one instruction, structured Tajweed rules, flexible scheduling across US time zones, age-appropriate lessons for children, and transparent progress tracking. OQTutor meets these standards with certified male and female tutors, personalized study tracks from Noorani Qaida to Hifz, and a free placement trial before enrollment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Why Choose OQTutor for Quran Learning? */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Core Strengths
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Choose OQTutor for Quran Learning?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                We connect American Muslim families with experienced teachers for private, interactive lessons from home. Whether your child is beginning the Arabic alphabet or you are an adult seeking to perfect your recitation, our structured programs adapt to your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "1-on-1 Dedicated Attention",
                  desc: "Every lesson is private between one student and one tutor, ensuring undivided attention and zero classroom distractions.",
                  icon: UserCheck
                },
                {
                  title: "Certified Male & Female Scholars",
                  desc: "Learn from vetted Islamic scholars with formal degrees and Ijazah certifications in Tajweed and Quranic sciences.",
                  icon: Award
                },
                {
                  title: "Adaptive US Scheduling",
                  desc: "Book lessons across Eastern, Central, Mountain, or Pacific time zones with morning, evening, and weekend availability.",
                  icon: Clock
                },
                {
                  title: "Structured Curriculum Tracks",
                  desc: "Comprehensive courses covering Noorani Qaida, Quran Reading, Tajweed rules, Hifz memorization, and Islamic Studies.",
                  icon: BookOpen
                },
                {
                  title: "Tailored for Kids & Adults",
                  desc: "Patient, encouraging methods for young learners and flexible, direct pacing for working professionals and university students.",
                  icon: Users
                },
                {
                  title: "Risk-Free Placement Trial",
                  desc: "Experience our teaching style firsthand with a free trial session and level evaluation before subscribing.",
                  icon: Sparkles
                }
              ].map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                    <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-5">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">{feat.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: One-to-One Quran Lessons for Personalized Learning */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 inline-block">
                  Personalized Instruction
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  One-to-One Quran Lessons for Personalized Learning
                </h2>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  In traditional group classes, individual mistakes often go unnoticed, or lessons move too fast for some students and too slow for others. Private one-to-one instruction removes these issues entirely.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  During private sessions, the tutor focuses solely on the student&apos;s recitation. Difficult Arabic letters and articulation points are corrected immediately, and the pace adjusts naturally to how quickly the student masters each concept.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-background border border-card-border">
                    <CheckCircle className="h-5 w-5 text-primary mb-2" />
                    <h3 className="font-bold text-sm text-foreground">Immediate Correction</h3>
                    <p className="text-xs text-muted-text mt-1">Pronunciation errors are corrected in real time before they become habits.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-background border border-card-border">
                    <CheckCircle className="h-5 w-5 text-secondary mb-2" />
                    <h3 className="font-bold text-sm text-foreground">Custom Learning Pace</h3>
                    <p className="text-xs text-muted-text mt-1">Spend extra time on challenging rules or advance quickly when ready.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="glass p-3 rounded-3xl border border-card-border shadow-xl relative max-w-md w-full bg-white">
                  <Image
                    src="/images/home-study-setup.png"
                    alt="Young student taking live one-on-one Quran lesson at home desk with online teacher"
                    width={500}
                    height={380}
                    className="rounded-2xl object-cover w-full h-auto"
                  />
                  <div className="p-3 text-center text-xs text-muted-text font-medium">
                    Focused one-on-one learning environment from the comfort of home.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Quran Classes for Kids in the USA */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="glass p-3 rounded-3xl border border-card-border shadow-xl relative max-w-sm w-full bg-white">
                  <Image
                    src="/images/child-online-quran-lesson.jpeg"
                    alt="Young Muslim child sitting on a prayer mat reading Quran on a digital tablet"
                    width={400}
                    height={550}
                    className="rounded-2xl object-cover w-full h-auto"
                  />
                  <div className="p-3 text-center text-xs text-muted-text font-medium">
                    Engaging, child-friendly online lessons designed for young learners.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Young Learners
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Quran Classes for Kids in the USA
                </h2>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  Teaching children requires patience, encouragement, and structured lesson goals. Our children&apos;s courses are designed specifically for young learners starting from age 4.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  Beginners start with <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>, learning Arabic letter shapes and phonetics through visual tools and interactive digital exercises. As they progress, students transition smoothly into fluent <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran reading</Link> and memorize short Surahs from Juz Amma.
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-text">
                  <li className="flex items-center space-x-2.5">
                    <CheckCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Patient, child-friendly instructors who make learning enjoyable</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>30-minute sessions optimal for young attention spans</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Regular parent updates detailing recitation and memorization milestones</span>
                  </li>
                  <li className="flex items-center space-x-2.5">
                    <CheckCheck className="h-4 w-4 text-primary shrink-0" />
                    <span>Read our guide on <Link href="/blog/best-online-quran-classes-for-kids-in-usa" className="text-primary font-semibold hover:underline">best online Quran classes for kids in the USA</Link> and our complete overview of <Link href="/blog/online-quran-classes-in-the-usa-for-kids-and-adults" className="text-primary font-semibold hover:underline">online Quran classes in the USA for kids and adults</Link></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Quran Learning for Adults */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4.5 py-1.5 inline-block">
                Adult Learners
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Quran Learning for Adults
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Many adults wish to learn Quran recitation or improve their Tajweed but struggle to fit traditional madrasah classes into busy work and family schedules. Our adult programs offer flexible, respectful, and private learning at your own pace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border border-card-border space-y-3">
                <h3 className="text-lg font-bold text-foreground">Beginner Arabic Reading</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Start from the Arabic alphabet and learn to connect letters into words. There is no embarrassment in starting from the basics — our tutors guide adult beginners with complete respect and patience.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl border border-card-border space-y-3">
                <h3 className="text-lg font-bold text-foreground">Tajweed Refinement</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  For adults who already read Arabic but want to perfect their pronunciation, articulation points (Makharij), and melodic flow according to authentic Tajweed rules.
                </p>
              </div>
              <div className="glass p-8 rounded-3xl border border-card-border space-y-3">
                <h3 className="text-lg font-bold text-foreground">Hifz &amp; Tafseer Tracks</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Memorize selected Surahs (such as Surah Al-Kahf, Yaseen, Al-Mulk) or study word-by-word Quran translation and classical Tafseer with qualified scholars.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Learn Quran with Tajweed from Qualified Tutors */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                  Authentic Recitation
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Learn Quran with Tajweed from Qualified Tutors
                </h2>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  Tajweed is the science of pronouncing every Arabic letter from its exact point of articulation (Makhraj) while observing all linguistic rules. Proper Tajweed preserves the authentic meaning and spiritual beauty of the Quranic text.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-muted-text"><strong className="text-foreground">Accurate Makharij:</strong> Training the throat, tongue, and lip positions to vocalize letters correctly.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-muted-text"><strong className="text-foreground">Recitation Rules:</strong> Applying Ghunnah (nasalization), Ikhfa, Idgham, Qalqalah (echoing), and Madd (elongation).</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-muted-text"><strong className="text-foreground">Stopping &amp; Pausing (Waqf):</strong> Learning correct punctuation signals to maintain breath control and sentence integrity.</p>
                  </div>
                </div>
                <div className="pt-2">
                  <Link href="/courses/tajweed" className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:text-primary-hover">
                    <span>Learn more about our Tajweed course</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="glass p-3 rounded-3xl border border-card-border shadow-xl relative max-w-md w-full bg-white">
                  <Image
                    src="/images/hero-quran-recitation.webp"
                    alt="Elderly Muslim man reciting from an open copy of the Holy Quran"
                    width={500}
                    height={380}
                    className="rounded-2xl object-cover w-full h-auto"
                  />
                  <div className="p-3 text-center text-xs text-muted-text font-medium">
                    Practicing accurate Tajweed rules under the guidance of certified scholars.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Flexible Quran Lessons for Families Across the USA */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4.5 py-1.5 inline-block">
                All US Time Zones
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Flexible Quran Lessons for Families Across the USA
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                American families have demanding school and work schedules. OQTutor operates around the clock to provide convenient class times across every major U.S. time zone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Eastern Time (EST/EDT)", states: "New York, Florida, Michigan, New Jersey, Virginia, Georgia" },
                { name: "Central Time (CST/CDT)", states: "Texas, Illinois, Minnesota, Missouri, Wisconsin, Tennessee" },
                { name: "Mountain Time (MST/MDT)", states: "Colorado, Arizona, Utah, New Mexico, Idaho, Montana" },
                { name: "Pacific Time (PST/PDT)", states: "California, Washington, Oregon, Nevada, Alaska, Hawaii" }
              ].map((tz, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-card-border text-left space-y-2">
                  <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{tz.name}</span>
                  </div>
                  <p className="text-xs text-muted-text leading-relaxed">{tz.states}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs sm:text-sm text-muted-text mt-8">
              Lessons can be scheduled before school, in the late afternoon, during evenings, or on weekends.
            </p>
          </div>
        </section>

        {/* Section 7: Our Quran Courses */}
        <section id="courses" className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Curriculum
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Our Quran Courses
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Explore our structured learning tracks for children, teenagers, and adult students. Every course is adapted to the learner&apos;s current knowledge and pace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesList.map((course) => {
                const IconComp = course.icon;
                return (
                  <div key={course.id} className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between hover:shadow-lg">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-secondary/15 text-secondary rounded-2xl">
                          <IconComp className="h-6 w-6" />
                        </div>
                        <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                          {course.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                        {course.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-card-border/40 flex items-center justify-between">
                      <Link href={course.link} className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                        <span>{course.anchorText}</span>
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 8: Meet Our Quran Tutors */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4.5 py-1.5 inline-block">
                Qualified Faculty
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Meet Our Quran Tutors
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Our faculty consists of certified male and female scholars with formal Islamic degrees and verified Ijazahs. Meet a selection of our dedicated instructors:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredTutors.map((tutor, idx) => (
                <div key={idx} className="glass p-6 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-primary/10 border border-card-border relative mx-auto">
                      <Image
                        src={tutor.photo}
                        alt={`Quran Tutor ${tutor.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-base text-foreground">{tutor.name}</h3>
                      <p className="text-xs text-primary font-medium mt-0.5">{tutor.role}</p>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-card-border/40 text-xs text-muted-text">
                      <p><strong className="text-foreground">Experience:</strong> {tutor.experience}</p>
                      <p><strong className="text-foreground">Specialization:</strong> {tutor.specialization}</p>
                      <p><strong className="text-foreground">Education:</strong> {tutor.education}</p>
                      <p><strong className="text-foreground">Students:</strong> {tutor.ageGroups}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/tutors" 
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass border border-card-border hover:border-primary text-foreground text-xs sm:text-sm font-semibold transition-all"
              >
                <span>View All Male &amp; Female Quran Tutors</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 9: How OQTutor Online Quran Classes Work */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Simple Process
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How OQTutor Online Quran Classes Work
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Getting started is simple and straightforward for parents and adult learners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Choose a Course", desc: "Select from Noorani Qaida, Quran Reading, Tajweed, Hifz, or Islamic Studies." },
                { step: "2", title: "Book a Trial Class", desc: "Register for a free placement evaluation with no credit card required." },
                { step: "3", title: "Meet the Tutor", desc: "Attend a live session where the tutor assesses the student's entry level." },
                { step: "4", title: "Select a Schedule", desc: "Pick class days and times that fit comfortably around your family's weekly routine." },
                { step: "5", title: "Start 1-on-1 Lessons", desc: "Begin live interactive lessons with personalized attention and correction." },
                { step: "6", title: "Monitor Progress", desc: "Receive regular feedback and progress reports to follow every milestone." }
              ].map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-3xl border border-card-border space-y-3 relative">
                  <span className="h-8 w-8 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: Online Quran Classes Pricing */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4.5 py-1.5 inline-block">
                Transparent Tuition
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Online Quran Classes Pricing
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Simple monthly plans based on weekly class frequency. Every plan includes private one-to-one lessons, certified tutors, and flexible scheduling with no long-term contracts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "Starter Plan",
                  price: "$30",
                  frequency: "/ month",
                  classes: "3 Classes / Week",
                  desc: "Ideal for steady, foundational learning.",
                  features: ["30-minute private 1-on-1 sessions", "Male or Female tutor selection", "Basic Tajweed & Noorani Qaida", "Flexible schedule adjustment"]
                },
                {
                  title: "Standard Plan",
                  price: "$40",
                  frequency: "/ month",
                  popular: true,
                  classes: "5 Classes / Week",
                  desc: "Most popular for consistent progress.",
                  features: ["30-minute private 1-on-1 sessions", "Male or Female tutor selection", "Advanced Tajweed & Quran Reading", "Islamic Studies & Duas included", "Monthly progress reports"]
                },
                {
                  title: "Premium Plan",
                  price: "$50",
                  frequency: "/ month",
                  classes: "Daily (7 Classes / Week)",
                  desc: "Recommended for intensive Hifz students.",
                  features: ["30-minute private 1-on-1 sessions", "Male or Female tutor selection", "Customized Hifz memorization track", "Quran Translation & Tafseer", "Priority schedule management"]
                }
              ].map((plan, idx) => (
                <div key={idx} className={`glass p-8 rounded-3xl border ${plan.popular ? 'border-primary shadow-xl bg-primary/[0.02]' : 'border-card-border'} flex flex-col justify-between relative`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-primary rounded-full px-3 py-1 uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                    <p className="text-xs text-muted-text mt-1">{plan.desc}</p>
                    <div className="mt-4 mb-6">
                      <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{plan.price}</span>
                      <span className="text-xs text-muted-text">{plan.frequency}</span>
                      <div className="text-xs font-semibold text-primary mt-1">{plan.classes}</div>
                    </div>
                    <ul className="space-y-2.5 pt-4 border-t border-card-border/40 text-xs text-muted-text">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      href="/book-free-trial"
                      className={`w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center block transition-all ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary-hover text-white shadow-md'
                          : 'glass border border-card-border hover:border-primary text-foreground'
                      }`}
                    >
                      Book Free Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-text mt-8">
              All plans begin with a free trial class. No credit card required to register.
            </p>
          </div>
        </section>

        {/* Section 11: Safe and Parent-Friendly Online Learning */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto glass p-8 sm:p-12 rounded-3xl border border-card-border space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                Trust &amp; Family Comfort
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Safe and Parent-Friendly Online Learning
              </h2>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                We design our digital classrooms to provide complete transparency and peace of mind for parents:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-card-border">
                  <Shield className="h-5 w-5 text-primary mb-2" />
                  <h3 className="font-bold text-sm text-foreground">Parents Welcome to Sit In</h3>
                  <p className="text-xs text-muted-text mt-1">Parents can attend and observe any session to supervise their child&apos;s learning environment.</p>
                </div>
                <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-card-border">
                  <Users className="h-5 w-5 text-secondary mb-2" />
                  <h3 className="font-bold text-sm text-foreground">Female Teacher Option</h3>
                  <p className="text-xs text-muted-text mt-1">Sisters and young children can choose qualified female instructors for complete personal comfort.</p>
                </div>
                <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-card-border">
                  <FileText className="h-5 w-5 text-primary mb-2" />
                  <h3 className="font-bold text-sm text-foreground">Direct Teacher Feedback</h3>
                  <p className="text-xs text-muted-text mt-1">Tutors provide notes after sessions so parents know what was covered and what to practice.</p>
                </div>
                <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-card-border">
                  <Clock className="h-5 w-5 text-secondary mb-2" />
                  <h3 className="font-bold text-sm text-foreground">Flexible Rescheduling</h3>
                  <p className="text-xs text-muted-text mt-1">Easily adjust session timings with advance notice when family travel or school events occur.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 12: Online Quran Classes by State */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4.5 py-1.5 inline-block">
                Location Directory
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Online Quran Classes by State
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Browse our state-specific guides to explore localized class options, time zone arrangements, and community information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
              {activeStates.map((state) => (
                <div key={state.name} className="glass p-6 sm:p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">Online Quran Classes in {state.name}</h3>
                    </div>
                    <p className="text-xs text-primary font-medium">{state.cities}</p>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                      {state.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-card-border/40">
                    <Link href={state.path} className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                      <span>Explore Quran Classes in {state.name}</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto glass p-6 rounded-2xl border border-card-border/60 text-center">
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Living in California, Florida, New Jersey, Ohio, Virginia, Washington, or another state? You can still register. Our nationwide program serves students in all 50 states across Eastern, Central, Mountain, and Pacific time zones.
              </p>
            </div>
          </div>
        </section>

        {/* Section 13: Helpful Guides & Quran Learning Resources */}
        <section className="py-16 md:py-24 border-t border-card-border/40 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Learning Guides
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Helpful Guides &amp; Quran Learning Resources
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text font-normal leading-relaxed">
                Explore our comprehensive articles on selecting tutors, teaching Tajweed, building memorization habits, and supporting young learners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {blogGuides.map((guide, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-card-border flex flex-col justify-between hover:shadow-md transition-all">
                  <div className="space-y-2">
                    <h3 className="font-bold text-sm sm:text-base text-foreground leading-snug">
                      <Link href={guide.link} className="hover:text-primary transition-colors">
                        {guide.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-muted-text leading-relaxed font-normal">
                      {guide.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-card-border/40">
                    <Link href={guide.link} className="inline-flex items-center text-xs font-semibold text-primary hover:text-primary-hover group">
                      <span>Read Full Guide</span>
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 14: Frequently Asked Questions (AEO FAQ Section) */}
        <USAFaqAccordion items={usaFaqs} />

        {/* Section 15: Start Learning the Quran Online (Final CTA) */}
        <section className="py-16 md:py-24 bg-background border-t border-card-border text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Start Learning the Quran Online
            </h2>
            <p className="text-xs sm:text-base text-muted-text max-w-xl mx-auto leading-relaxed font-normal">
              Book a free trial class with certified male or female tutors. Meet your instructor, evaluate their teaching approach, and establish a personalized Quran learning plan for yourself or your child — completely risk-free.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/book-free-trial" 
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book Free Placement Trial</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                href="/tutors" 
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full glass border border-card-border hover:border-primary text-foreground text-sm sm:text-base font-semibold transition-all"
              >
                <span>Browse Qualified Tutors</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData?.contact} footerConfig={dbData?.footerNav} />
    </>
  );
}
