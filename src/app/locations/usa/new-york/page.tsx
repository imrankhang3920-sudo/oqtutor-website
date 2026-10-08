import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ServingLocationsSection from '@/components/ServingLocationsSection';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  ArrowRight, 
  ChevronDown, 
  Award, 
  Shield, 
  Star, 
  MessageCircle, 
  CalendarCheck, 
  BookOpen, 
  GraduationCap, 
  Sparkles, 
  HeartHandshake, 
  UserCheck, 
  Check, 
  Compass, 
  MapPin, 
  Calendar,
  HelpCircle,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes in New York for Kids & Adults | OQTutor";
  const metaDescription = "Learn Quran online in New York with OQTutor. Explore one-to-one Quran lessons, Tajweed, Noorani Qaida, and flexible learning options for kids and adults.";
  const canonicalUrl = "https://www.oqtutor.com/locations/usa/new-york";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "online quran classes in new york",
      "online quran classes new york",
      "online quran classes for kids in new york",
      "quran teacher online in new york",
      "online quran lessons for adults",
      "quran classes with tajweed",
      "female quran teacher online",
      "noorani qaida classes online",
      "one to one quran classes",
      "flexible online quran lessons in new york",
      "quran tutor nyc",
      "quran lessons brooklyn queens long island"
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: "https://www.oqtutor.com/online-quran-classes-usa.jpg",
          width: 1200,
          height: 630,
          alt: "Online Quran Classes in New York for Kids and Adults - OQTutor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: ["https://www.oqtutor.com/online-quran-classes-usa.jpg"],
    },
  };
}

function TrustStatsBar() {
  const stats = [
    { value: "1-on-1", label: "Private Live Lessons", sub: "100% Focused Attention" },
    { value: "Male & Female", label: "Certified Teachers", sub: "Vetted Quran Scholars & Alimahs" },
    { value: "Eastern Time", label: "Flexible ET Slots", sub: "Mornings, After-School & Weekends" },
    { value: "Free Trial", label: "Assessment Lesson", sub: "No Credit Card Required" },
  ];

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 mb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="glass p-6 md:p-8 rounded-3xl border border-card-border shadow-xl bg-background/60 backdrop-blur-md">
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
              <span className="text-xs sm:text-sm font-bold text-foreground mt-1 font-sans">
                {stat.label}
              </span>
              <span className="text-[10px] sm:text-xs text-muted-text font-normal mt-0.5 font-sans">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default async function NewYorkQuranClassesPage() {
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

  const customHeroData = {
    title: "Online Quran Classes in New York for Kids and Adults",
    subtitle: "Learn Quran online with OQTutor through live one-to-one lessons tailored to your reading level and learning goals. Explore Quran reading, Tajweed, Noorani Qaida, memorization, and Islamic Studies with flexible scheduling for New York families.",
    ctaText: "Book a Free Trial",
    ctaLink: "/book-free-trial",
    whatsappText: dbData.hero?.whatsappText || "Chat on WhatsApp",
    whatsappNumber: dbData.hero?.whatsappNumber || "+923478704442",
    backgroundImage: "/online-quran-classes-usa.jpg",
  };

  // Structured FAQ Data for AEO
  const faqList = [
    {
      question: "Are online Quran classes available after school in New York?",
      answer: "Yes. Classes are scheduled across Eastern Time (ET) to accommodate New York school routines. Families can book 30-minute one-to-one sessions in the late afternoon (3:30 PM – 6:30 PM), during evenings after homework, or across flexible weekend slots with easy rescheduling."
    },
    {
      question: "Can my child learn Quran online as a complete beginner?",
      answer: "Absolutely. Children starting with no prior Arabic knowledge begin with the Noorani Qaida course. Certified tutors guide young students step-by-step through alphabet recognition, letter articulation points (Makharij), and vowel movements using interactive digital materials at a patient pace."
    },
    {
      question: "Can I request a female Quran teacher for my daughter?",
      answer: "Yes. OQTutor provides qualified female Quran teachers for young girls, children, and adult sisters who prefer female instruction. Our female faculty hold verified Islamic degrees and Ijazahs, providing supportive one-to-one guidance in Noorani Qaida, Tajweed, and Hifz."
    },
    {
      question: "How do online Quran classes work for New York families?",
      answer: "Classes take place live one-to-one over secure video calls using screen sharing with digital Mushaf and Qaida resources. Students attend from their home computer or tablet, eliminating subway or car commutes while receiving 100% focused attention from a dedicated scholar."
    },
    {
      question: "How can parents monitor their child's learning progress?",
      answer: "Parents receive direct written progress notes following class blocks detailing lesson coverage, Tajweed mastery, and areas for practice. Parents can also observe live sessions directly from home and communicate with the teacher regarding upcoming milestones."
    },
    {
      question: "What should I consider when choosing an online Quran academy?",
      answer: "Look for verified tutor credentials, structured one-to-one lesson formats, transparent month-to-month pricing without contracts, a zero-obligation trial assessment class, and flexible scheduling that matches your local Eastern Time zone."
    },
    {
      question: "Can adults start learning Quran online without previous experience?",
      answer: "Yes. We offer private, judgment-free Quran classes for adult beginners, working professionals, and reverts. Whether learning Arabic letters from scratch, refining Tajweed rules, or memorizing Surahs, adult lessons are scheduled flexibly around busy work commitments."
    },
    {
      question: "How can I arrange a trial Quran lesson with OQTutor?",
      answer: "You can book a free introductory trial class directly through our website without entering credit card details. The session includes a friendly reading assessment, an interactive lesson demonstration, and a personalized curriculum recommendation from a certified instructor."
    }
  ];

  // Schema Definitions
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
        "name": "New York",
        "item": "https://www.oqtutor.com/locations/usa/new-york"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.oqtutor.com/locations/usa/new-york#webpage",
    "url": "https://www.oqtutor.com/locations/usa/new-york",
    "name": "Online Quran Classes in New York for Kids & Adults | OQTutor",
    "description": "Learn Quran online in New York with OQTutor. Explore one-to-one Quran lessons, Tajweed, Noorani Qaida, and flexible learning options for kids and adults.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.oqtutor.com/#website",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com"
    },
    "about": {
      "@type": "EducationalOrganization",
      "@id": "https://www.oqtutor.com/#organization",
      "name": "OQTutor",
      "url": "https://www.oqtutor.com",
      "logo": "https://www.oqtutor.com/logo.jpg"
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

  const verifiedTutors = [
    {
      name: "Qari Muhammad Imran",
      role: "Senior Tajweed & Hifz Instructor",
      experience: "5+ Years Experience",
      education: "B.A. in Islamic Studies, Jamia Ashrafia Lahore",
      languages: "English, Urdu",
      gender: "Male",
      specialization: "Hifz Program, Quran Reading & Tajweed Sciences",
      photo: "/tutors/qari_muhammad_imran.jpg",
      rating: 5.0,
      certifications: ["Ijazah in Hafs 'an 'Asim Recitation", "Sanad in Tajweed Articulation"]
    },
    {
      name: "Qaria Sumaira Younis",
      role: "Senior Female Quran Teacher",
      experience: "12+ Years Experience",
      education: "Alimah Degree, Jamia Hafsa Islamabad",
      languages: "English, Urdu",
      gender: "Female",
      specialization: "Noorani Qaida, Kids Recitation & Tajweed for Sisters",
      photo: "/tutors/qaria_sumaira_younis.png",
      rating: 5.0,
      certifications: ["Wifaq ul Madaris Certified Alimah", "Child Psychology in Islamic Education"]
    },
    {
      name: "Sheikh Bilal Hassan",
      role: "Quranic Arabic & Tajweed Specialist",
      experience: "11+ Years Experience",
      education: "M.A. Arabic Language, Peshawar University",
      languages: "English, Urdu, Arabic",
      gender: "Male",
      specialization: "Makharij Correction, Advanced Tajweed & Adult Beginners",
      photo: "/tutors/tutor-7.jpg",
      rating: 4.9,
      certifications: ["Sanad in Quranic Recitation", "Classical Arabic Phonetics Diploma"]
    },
    {
      name: "Ustadha Aiman Shafeeq",
      role: "Hifz & Sisters Specialist",
      experience: "5+ Years Experience",
      education: "Shahadat-ul-Alimiyyah, Jamia Binoria",
      languages: "English, Urdu",
      gender: "Female",
      specialization: "Quran Memorization & Islamic Studies for Youth",
      photo: "/tutors/ustadha_aiman_shafeeq.jpg",
      rating: 5.0,
      certifications: ["Ijazah in Memorization (Hafiza)", "Certified Islamic Studies Teacher"]
    }
  ];

  const coursesList = [
    {
      title: "Noorani Qaida for Beginners",
      category: "Ages 4+ & Adult Beginners",
      description: "Learn Arabic alphabet recognition, Makharij articulation points, and vowel movements (Harakat) from the ground up.",
      link: "/courses/noorani-qaida",
      icon: BookOpen
    },
    {
      title: "Quran Reading with Tajweed",
      category: "Post-Qaida Students",
      description: "Transition from isolated words to fluent verse recitation with correct elongation, stopping rules (Waqf), and melodic rhythm.",
      link: "/courses/quran-reading",
      icon: Compass
    },
    {
      title: "Advanced Tajweed Rules",
      category: "All Ages",
      description: "Master classical recitation rules including Noon and Meem Sakinah, Ghunnah, Ikhfa, and Qalqalah with live audio correction.",
      link: "/courses/tajweed",
      icon: Sparkles
    },
    {
      title: "Quran Memorization (Hifz)",
      category: "Dedicated Learners",
      description: "Structured memorization plans (Sabaq, Sabqi, and Manzil) for full Quran Hifz, Juz Amma, or selected Surahs led by certified Huffaz.",
      link: "/courses/hifz",
      icon: Award
    },
    {
      title: "Classes with Female Quran Teachers",
      category: "Sisters & Children",
      description: "Private one-on-one sessions with certified Alimas and Qariahs in a comfortable, supportive learning environment.",
      link: "/courses/female-quran-teacher",
      icon: Users
    },
    {
      title: "Islamic Studies & Daily Duas",
      category: "Kids & Teens",
      description: "Essential daily supplications, step-by-step Salah and Wudu instruction, Seerah of the Prophet (PBUH), and Islamic manners.",
      link: "/courses/islamic-studies",
      icon: HeartHandshake
    }
  ];

  return (
    <>
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

      <Navbar adminLoggedIn={adminLoggedIn} headerConfig={dbData.headerNav} />

      <main className="flex-grow">
        <Hero data={customHeroData} />
        <TrustStatsBar />

        {/* Section: Kids Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Text & Features */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Tailored for Young Learners
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes for Kids in New York
                </h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Between demanding school timetables, homework routines, and extracurricular activities across New York City and Long Island, adding another physical commute for Quran lessons can exhaust both children and parents. OQTutor brings engaging, live one-to-one Quran instruction directly into your home.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="glass p-5 rounded-2xl border border-card-border">
                    <div className="p-2.5 bg-primary/10 text-primary w-fit rounded-xl mb-3">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1.5">Noorani Qaida &amp; Phonics</h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      Beginners master Arabic letters, proper articulation (Makharij), and vowel signs step-by-step through our structured <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link> lessons.
                    </p>
                  </div>

                  <div className="glass p-5 rounded-2xl border border-card-border">
                    <div className="p-2.5 bg-primary/10 text-primary w-fit rounded-xl mb-3">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1.5">Child-Centered Pacing</h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      Focused 30-minute lessons match young attention spans with interactive digital whiteboards and positive reinforcement from patient tutors.
                    </p>
                  </div>

                  <div className="glass p-5 rounded-2xl border border-card-border">
                    <div className="p-2.5 bg-primary/10 text-primary w-fit rounded-xl mb-3">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1.5">Written Progress Notes</h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      Parents receive regular written updates on Surah coverage, pronunciation accuracy, and revision milestones without having to guess.
                    </p>
                  </div>

                  <div className="glass p-5 rounded-2xl border border-card-border">
                    <div className="p-2.5 bg-primary/10 text-primary w-fit rounded-xl mb-3">
                      <Clock className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-1.5">After-School Flexibility</h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      Convenient Eastern Time slots fit smoothly after school dismissal or on weekends, allowing children to learn comfortably at home.
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs sm:text-sm text-muted-text">
                  <p className="italic">
                    *Note: A child&apos;s progress naturally depends on their entry level, weekly lesson frequency, and home practice consistency. Read our practical parent guide on <Link href="/blog/how-to-help-children-balance-quran-learning-with-school-and-extracurricular-activities" className="text-primary font-semibold hover:underline">balancing Quran learning with school routines</Link> or visit our dedicated <Link href="/online-quran-classes-for-kids-usa" className="text-primary font-semibold hover:underline">USA Kids Quran Classes</Link> page.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                  >
                    <span>Book Free Trial for Your Child</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-card">
                    <Image
                      src="/online-quran-classes-usa-kids-adults-1.jpg"
                      alt="Muslim child attending an online Quran lesson from home in New York"
                      width={480}
                      height={400}
                      className="w-full rounded-2xl object-cover h-[340px] md:h-[400px]"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Female Quran Teacher Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-card">
                    <Image
                      src="/female-teacher-girl.jpg"
                      alt="Female Quran teacher conducting a one-to-one online lesson for a young student"
                      width={480}
                      height={400}
                      className="w-full rounded-2xl object-cover h-[340px] md:h-[400px]"
                    />
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Dedicated Female Faculty
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Learn with a Female Quran Teacher Online in New York
                </h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Finding a qualified, patient female Quran instructor locally in New York can often involve long waitlists or rigid schedules. OQTutor provides sisters, young girls, and families with the option to study one-to-one with certified female scholars (Alimahs and Qariahs) from the privacy and comfort of home.
                </p>

                <div className="glass p-6 rounded-2xl border border-card-border bg-foreground/[0.01] space-y-4">
                  <ul className="space-y-3.5">
                    <li className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Verified Islamic Credentials:</strong> Instructors hold authentic Ijazahs in Tajweed recitation and formal degrees in Islamic sciences.</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Nurturing &amp; Patient Atmosphere:</strong> Ideal for young girls beginning Noorani Qaida as well as adult sisters mastering advanced Tajweed rules or Hifz.</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Easy Teacher Preference Request:</strong> Select a female teacher preference during trial booking with zero friction or hidden fees.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/courses/female-quran-teacher"
                    className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                  >
                    <span>Explore Female Teacher Program</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/blog/choosing-male-female-quran-teacher"
                    className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read guide on choosing a tutor</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Adults and Beginners Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Lifelong Learning
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Online Quran Learning for Adults in New York
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                It is never too late to begin or elevate your Quran reading journey. Our adult classes are designed for working professionals, university students, and reverts across New York who want focused, private, and judgment-free instruction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Adult Beginners */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Foundational Reading &amp; Qaida
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Designed for adults starting from the very beginning. Learn Arabic alphabet recognition, letter connections, and basic vowel marks through <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link> in private 1-on-1 sessions.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/60">
                  <Link href="/courses/noorani-qaida" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Learn foundational reading</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Tajweed Correction */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Tajweed &amp; Makharij Refinement
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    For returning learners who already read Arabic script but want to correct pronunciation mistakes and master classical rules through our dedicated <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed classes</Link>.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/60">
                  <Link href="/courses/tajweed" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Master Tajweed rules</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Tafseer & Memorization */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Hifz &amp; Quran Meaning
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Memorize selected Surahs or Juz Amma at your own pace through our <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz course</Link> with systematic revision schedules that fit alongside professional routines.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/60">
                  <Link href="/courses/hifz" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Explore adult Hifz options</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Request Adult Placement Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section: New York Scheduling Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Eastern Time Flexibility
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Flexible Quran Class Timings for New York Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                All classes operate on New York local time (Eastern Time – accounting for EST/EDT). Choose preferred weekly time windows that integrate naturally into your family&apos;s daily routine.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="glass p-6 rounded-3xl border border-card-border hover:shadow-lg transition-all text-center">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mx-auto mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">Morning Preference</h3>
                <p className="text-xs font-semibold text-secondary mb-3">6:00 AM – 9:00 AM ET</p>
                <p className="text-xs text-muted-text leading-relaxed">
                  Start the day with focused recitation before school buses arrive or before the morning commute begins.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border hover:shadow-lg transition-all text-center">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">After-School Preference</h3>
                <p className="text-xs font-semibold text-secondary mb-3">3:30 PM – 6:30 PM ET</p>
                <p className="text-xs text-muted-text leading-relaxed">
                  The most popular window for New York school students right after dismissal, easily attended from home.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border hover:shadow-lg transition-all text-center">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mx-auto mb-4">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">Evening Preference</h3>
                <p className="text-xs font-semibold text-secondary mb-3">6:30 PM – 10:00 PM ET</p>
                <p className="text-xs text-muted-text leading-relaxed">
                  Ideal for busy households after dinner and homework, as well as working adults returning from the office.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border hover:shadow-lg transition-all text-center">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mx-auto mb-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">Weekend Preference</h3>
                <p className="text-xs font-semibold text-secondary mb-3">7:00 AM – 9:00 PM ET</p>
                <p className="text-xs text-muted-text leading-relaxed">
                  Saturday and Sunday morning or afternoon slots designed for relaxed, unhurried Quran learning.
                </p>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl border border-card-border max-w-3xl mx-auto text-center bg-card/60">
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                <strong>Please Note:</strong> Time slots above represent popular requested scheduling preferences. Specific lesson times are tailored to your weekly availability during your initial placement check.
              </p>
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Ask About Available Class Times</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section: New York Service-Area Coverage Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Metro Service Area
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Online Quran Classes Across New York City and Nearby Communities
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Because all OQTutor lessons are conducted live online with interactive screen-sharing, students participate safely from their living rooms across all boroughs and surrounding suburbs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* NYC Boroughs */}
              <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">New York City Boroughs</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                  Serving Muslim families across:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-text">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span><strong>Brooklyn:</strong> Bay Ridge, Midwood, Bensonhurst, Crown Heights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span><strong>Queens:</strong> Astoria, Jackson Heights, Jamaica, Flushing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span><strong>Manhattan, The Bronx &amp; Staten Island</strong></span>
                  </li>
                </ul>
              </div>

              {/* Long Island */}
              <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all">
                <div className="p-3 bg-secondary/10 text-secondary w-fit rounded-2xl mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Long Island Communities</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                  Providing convenient online classes for families throughout:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-text">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span><strong>Nassau County:</strong> Valley Stream, Hicksville, Westbury, Elmont</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span><strong>Suffolk County:</strong> Huntington, Brentwood, Commack, Bay Shore</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span>Zero travel time over the LIE or Southern State</span>
                  </li>
                </ul>
              </div>

              {/* Westchester & Metro */}
              <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Westchester &amp; Metro Area</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                  Reaching students across Hudson Valley and nearby suburbs:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-text">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span><strong>Westchester:</strong> Yonkers, White Plains, New Rochelle, Mount Vernon</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Rockland, Putnam, and Tri-State commuter communities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Uniform high-speed classroom access from any device</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Practical Quran Learning Roadmap */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Structured Roadmap
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                What Can Your Child Expect When Starting Quran Classes?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                A transparent, step-by-step learning progression designed to build recitation fluency, Tajweed confidence, and a lasting love for the Holy Quran.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  step: "Step 1",
                  title: "Initial Learning Assessment",
                  desc: "Your child meets their assigned tutor in a friendly 30-minute trial to determine their current reading level, letter familiarity, and learning goals.",
                  highlight: "Zero financial obligation",
                  icon: CalendarCheck
                },
                {
                  step: "Step 2",
                  title: "Build the Foundations",
                  desc: "Beginners focus on alphabet recognition, short vowel sounds (Harakat), and mouth articulation points (Makharij) through Noorani Qaida.",
                  highlight: "Phonics & letter joining",
                  icon: BookOpen
                },
                {
                  step: "Step 3",
                  title: "Guided Quran Practice",
                  desc: "Students begin reciting verses from Juz Amma and the Quran, applying Tajweed rules, pausing symbols (Waqf), and melodic flow under live tutor guidance.",
                  highlight: "Word-by-word correction",
                  icon: Sparkles
                },
                {
                  step: "Step 4",
                  title: "Review Progress & Next Steps",
                  desc: "Tutors share regular written progress notes with parents, conduct revision check-ins, and adjust pacing as the student advances chapter by chapter.",
                  highlight: "Ongoing parent updates",
                  icon: TrendingUp
                }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="glass p-7 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          {item.step}
                        </span>
                        <div className="h-10 w-10 rounded-2xl bg-foreground/[0.03] border border-card-border flex items-center justify-center text-primary">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-xs text-muted-text leading-relaxed mb-4">{item.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-card-border/60 text-[11px] font-semibold text-secondary">
                      {item.highlight}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Start with Step 1 – Book Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Teacher Selection Guide & Verified Faculty */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Faculty Standards
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How to Choose the Right Online Quran Teacher
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                A skilled, patient teacher makes all the difference in a student&apos;s relationship with the Quran. Here are the core factors we uphold across our teaching faculty.
              </p>
            </div>

            {/* Practical Advice Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="glass p-6 rounded-3xl border border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">1. Verified Ijazah &amp; Credentials</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Verify that the instructor holds an authentic Ijazah in Tajweed recitation and formal Islamic education so phonetics are taught accurately from day one.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <div className="p-3 bg-secondary/10 text-secondary w-fit rounded-2xl mb-4">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">2. Empathy &amp; Age-Specific Pacing</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Look for tutors who use gentle repetition, praise small milestones, and adjust lesson speed to whether the student is 5 years old or an adult beginner.
                </p>
              </div>

              <div className="glass p-6 rounded-3xl border border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-4">
                  <UserCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">3. Male &amp; Female Options</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Choose an academy that offers both qualified male and female tutors so sisters and young children can learn in total comfort.
                </p>
              </div>
            </div>

            {/* Featured Faculty Grid */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground text-center mb-8">
                Meet Some of Our Verified Instructors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {verifiedTutors.map((tutor, idx) => (
                  <div key={idx} className="glass p-5 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-background/60">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shrink-0 bg-muted">
                          <Image
                            src={tutor.photo}
                            alt={tutor.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground line-clamp-1">{tutor.name}</h4>
                          <span className="text-[11px] font-medium text-secondary block">{tutor.role}</span>
                          <div className="flex items-center space-x-1 mt-0.5">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            <span className="text-[11px] font-bold text-foreground">{tutor.rating}</span>
                            <span className="text-[10px] text-muted-text">({tutor.experience})</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5 text-[11px] text-muted-text border-t border-card-border/60 pt-3">
                        <p><strong>Education:</strong> {tutor.education}</p>
                        <p><strong>Specialty:</strong> {tutor.specialization}</p>
                        <p><strong>Languages:</strong> {tutor.languages}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-card-border/60">
                      <div className="flex flex-wrap gap-1">
                        {tutor.certifications.map((cert, cIdx) => (
                          <span key={cIdx} className="text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/tutors" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                  <span>Explore all verified male and female tutors</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Courses Catalog */}
        <section id="courses" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Curriculum Catalog
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Online Quran Courses Offered
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Explore our full syllabus designed to support students from their very first Arabic letter to fluent recitation and memorization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesList.map((course, idx) => {
                const IconComponent = course.icon;
                return (
                  <div key={idx} className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                          {course.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                        {course.description}
                      </p>
                    </div>
                    <Link
                      href={course.link}
                      className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                    >
                      <span>Explore Course Syllabus</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: Pricing Section */}
        <section id="pricing" className="py-20 border-t border-card-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Transparent Tuition
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Affordable New York Quran Class Fees
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-sm text-muted-text max-w-xl mx-auto">
                Simple monthly plans with no hidden registration costs or long-term lock-in contracts. Enjoy a 15% discount for the second enrolled child in your family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {/* Starter */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Starter</h3>
                  <p className="text-xs text-muted-text mb-6">Ideal for light weekly practice</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-primary font-sans">$30</span>
                    <span className="text-xs text-muted-text">/ month</span>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-text mb-8">
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span><strong>3 Classes</strong> per week</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>30-minute private 1-on-1 sessions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Male or female tutor selection</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Basic Tajweed &amp; Noorani Qaida</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/book-free-trial"
                  className="w-full text-center py-3.5 rounded-full bg-foreground/5 hover:bg-primary hover:text-white text-foreground font-semibold transition-all text-xs uppercase tracking-wider"
                >
                  Book Free Trial
                </Link>
              </div>

              {/* Standard - Popular */}
              <div className="glass p-8 rounded-3xl border-2 border-primary shadow-xl relative flex flex-col justify-between bg-primary/[0.02]">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Standard</h3>
                  <p className="text-xs text-muted-text mb-6">Recommended for steady progress</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-primary font-sans">$40</span>
                    <span className="text-xs text-muted-text">/ month</span>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-text mb-8">
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span><strong>5 Classes</strong> per week</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>30-minute private 1-on-1 sessions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Advanced Tajweed &amp; Quran Reading</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Written monthly progress reports</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/book-free-trial"
                  className="w-full text-center py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold transition-all text-xs uppercase tracking-wider shadow-lg shadow-primary/20"
                >
                  Book Free Trial
                </Link>
              </div>

              {/* Premium / Intensive */}
              <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-xl transition-all">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Daily (Intensive)</h3>
                  <p className="text-xs text-muted-text mb-6">Accelerated Hifz &amp; recitation</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-primary font-sans">$50</span>
                    <span className="text-xs text-muted-text">/ month</span>
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-muted-text mb-8">
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span><strong>Daily (7 Classes)</strong> per week</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>30-minute private 1-on-1 sessions</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Customized Hifz memorization track</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>Priority scheduling &amp; direct support</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/book-free-trial"
                  className="w-full text-center py-3.5 rounded-full bg-foreground/5 hover:bg-primary hover:text-white text-foreground font-semibold transition-all text-xs uppercase tracking-wider"
                >
                  Book Free Trial
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-muted-text mb-4">
                Want to learn more about our fee structures? Visit our full <Link href="/pricing" className="text-primary font-semibold hover:underline">Pricing Plans page</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Feedback & Reviews */}
        <section className="py-20 border-t border-card-border bg-foreground/[0.005]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Parent &amp; Student Feedback
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Feedback from New York Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-text italic leading-relaxed font-normal">
                    &quot;As a working professional in NYC, the flexible evening schedule of OQTutor fits into my routine perfectly. My tutor makes Tajweed rules clear and easy to apply during recitation.&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/40">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">Zayd M.</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text">Adult Student, Manhattan, NY</p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-text italic leading-relaxed font-normal">
                    &quot;OQTutor has been wonderful for my daughter. Her tutor Qaria Sumaira is extremely patient and engaging. She finished Noorani Qaida and is now reciting short Surahs with proper Makharij.&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/40">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">Sarah K.</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text">Parent of 7yo Student, Queens, NY</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions (AEO Optimized) */}
        <section className="py-20 border-t border-card-border bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Clear Answers
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
                Common Questions About Online Quran Classes in New York
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Direct answers to common questions asked by parents and students across New York.
              </p>
            </div>

            <div className="space-y-4">
              {faqList.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-card-border/60 rounded-2xl glass p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden bg-background/50"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-foreground cursor-pointer select-none list-none">
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="mt-3 text-xs sm:text-sm text-muted-text leading-relaxed font-normal border-t border-card-border/40 pt-3 pl-7">
                    {idx === 0 ? (
                      <p>
                        Yes. Classes are scheduled across Eastern Time (ET) to accommodate New York school routines. Families can book 30-minute one-to-one sessions in the late afternoon (3:30 PM – 6:30 PM), during evenings after homework, or across flexible weekend slots with easy rescheduling.
                      </p>
                    ) : idx === 1 ? (
                      <p>
                        Absolutely. Children starting with no prior Arabic knowledge begin with the <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida course</Link>. Certified tutors guide young students step-by-step through alphabet recognition, letter articulation points (Makharij), and vowel movements using interactive digital materials at a patient pace.
                      </p>
                    ) : idx === 2 ? (
                      <p>
                        Yes. OQTutor provides qualified <Link href="/courses/female-quran-teacher" className="text-primary font-semibold hover:underline">female Quran teachers</Link> for young girls, children, and adult sisters who prefer female instruction. Our female faculty hold verified Islamic degrees and Ijazahs, providing supportive one-to-one guidance in Noorani Qaida, Tajweed, and Hifz. Read our guide on <Link href="/blog/choosing-male-female-quran-teacher" className="text-primary font-semibold hover:underline">choosing a female Quran teacher online</Link>.
                      </p>
                    ) : idx === 3 ? (
                      <p>
                        Classes take place live one-to-one over secure video calls using screen sharing with digital Mushaf and Qaida resources. Students attend from their home computer or tablet, eliminating subway or car commutes while receiving 100% focused attention from a dedicated scholar. Learn more about <Link href="/how-it-works" className="text-primary font-semibold hover:underline">how our virtual classroom works</Link>.
                      </p>
                    ) : idx === 4 ? (
                      <p>
                        Parents receive direct written progress notes following class blocks detailing lesson coverage, Tajweed mastery, and areas for practice. Parents can also observe live sessions directly from home and communicate with the teacher regarding upcoming milestones.
                      </p>
                    ) : idx === 5 ? (
                      <p>
                        Look for verified tutor credentials, structured one-to-one lesson formats, transparent month-to-month pricing without contracts, a zero-obligation trial assessment class, and flexible scheduling that matches your local Eastern Time zone. Read our parent guide on <Link href="/blog/select-right-online-quran-tutor" className="text-primary font-semibold hover:underline">how to select the right online Quran tutor</Link>.
                      </p>
                    ) : idx === 6 ? (
                      <p>
                        Yes. We offer private, judgment-free Quran classes for adult beginners, working professionals, and reverts. Whether learning Arabic letters from scratch, refining <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed rules</Link>, or memorizing Surahs, adult lessons are scheduled flexibly around busy work commitments.
                      </p>
                    ) : (
                      <p>
                        You can book a <Link href="/book-free-trial" className="text-primary font-semibold hover:underline">free introductory trial class</Link> directly through our website without entering credit card details. The session includes a friendly reading assessment, an interactive lesson demonstration, and a personalized curriculum recommendation from a certified instructor.
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-muted-text mb-4">
                Have more questions? Visit our comprehensive <Link href="/faq" className="text-primary font-semibold hover:underline">General FAQ page</Link> or learn more <Link href="/about" className="text-primary font-semibold hover:underline">about OQTutor</Link>.
              </p>
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

        {/* Section: Closing CTA Banner */}
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative glass border border-primary/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden bg-primary/5 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Start with a Free Placement Trial
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Know your Quran reading level before you pay anything. Pair with native Arabic scholars at your convenient time.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/book-free-trial"
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm w-full sm:w-auto"
                >
                  <span>Book Your Free Trial Class</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={dbData.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full glass border-card-border hover:bg-foreground/5 text-foreground font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm w-full sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5 text-emerald-500" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-text">
                Call Us: <span className="font-semibold">{dbData.contact.phone}</span>
              </p>
            </div>
          </div>
        </section>

        {/* Global / National Locations Section */}
        <ServingLocationsSection 
          title="Serving Muslim Families in New York and Worldwide"
          subtitle="One-on-one live Quran classes scheduled across Eastern Time and global time zones."
        />

        {/* Contact Form */}
        <Contact data={dbData.contact} />
      </main>

      <Footer data={dbData.contact} footerConfig={dbData.footerNav} />
    </>
  );
}
