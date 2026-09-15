import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckCircle, 
  ChevronDown, 
  Star, 
  Shield, 
  HelpCircle, 
  Award, 
  BookOpen, 
  Clock, 
  Users, 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  HeartHandshake,
  GraduationCap,
  Calendar,
  Compass,
  Check,
  UserCheck
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = "Online Quran Classes in New Jersey | OQTutor";
  const metaDescription = "Learn Quran online in New Jersey with qualified male and female teachers. One to one classes for kids and adults with flexible scheduling.";
  const canonicalUrl = "https://www.oqtutor.com/locations/usa/new-jersey";

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "online quran classes in new jersey",
      "online quran classes new jersey",
      "quran classes in new jersey",
      "quran classes new jersey",
      "learn quran online new jersey",
      "quran teacher new jersey",
      "online quran teacher new jersey",
      "quran tutor new jersey",
      "online quran classes for kids in new jersey",
      "quran classes for kids in new jersey",
      "kids quran classes new jersey",
      "quran teacher for kids new jersey",
      "online quran classes for adults in new jersey",
      "quran classes for adults new jersey",
      "online tajweed classes new jersey",
      "tajweed classes new jersey",
      "learn quran with tajweed new jersey",
      "one to one quran classes new jersey",
      "private quran tutor new jersey",
      "female quran teacher new jersey",
      "affordable quran classes new jersey",
      "best online quran classes new jersey"
    ],
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
          alt: "Online Quran Classes in New Jersey - OQTutor",
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
  const stats = [
    { value: "1-on-1", label: "Private Live Lessons", sub: "100% Focused Attention" },
    { value: "Male & Female", label: "Certified Teachers", sub: "Vetted Quran Scholars" },
    { value: "Flexible", label: "Eastern Time Slots", sub: "Mornings, Evenings & Weekends" },
    { value: "Free Trial", label: "Evaluation Lesson", sub: "No Credit Card Required" },
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

export default async function NewJerseyQuranClassesPage() {
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
    title: "Online Quran Classes in New Jersey for Kids and Adults",
    subtitle: "Help your family build a confident, lifelong connection with the Holy Quran without adding another commute to your day. OQTutor provides live, one-to-one online Quran lessons with certified male and female teachers, scheduled around your Eastern Time school, work, and household routine.",
    ctaText: "Book Your Free Trial Class",
    ctaLink: "/book-free-trial",
    whatsappText: dbData.hero?.whatsappText || "Chat on WhatsApp",
    whatsappNumber: dbData.hero?.whatsappNumber || "+923478704442",
    backgroundImage: dbData.hero?.backgroundImage || "/hero-bg.jpg",
  };

  const faqList = [
    {
      question: "How can I learn Quran online in New Jersey?",
      answer: "You can learn Quran online in New Jersey through OQTutor by booking a free introductory trial class. We evaluate your current reading ability, match you with a certified male or female Quran teacher who fits your learning style, and arrange live one-to-one video lessons at times that suit your Eastern Time daily schedule."
    },
    {
      question: "Are online Quran classes suitable for children in New Jersey?",
      answer: "Yes, online Quran classes are highly effective for children. With one-on-one lessons, a qualified tutor focuses entirely on your child's pace, uses engaging digital learning materials, and provides immediate feedback. It also eliminates after-school driving, making consistent Quran learning much easier for busy families."
    },
    {
      question: "Can adults learn Quran online?",
      answer: "Absolutely. We provide private, judgment-free Quran classes for adult learners, university students, working professionals, and reverts across New Jersey. Whether starting from the basics of Arabic letters or refining advanced Tajweed rules, lessons are scheduled flexibly around your work hours."
    },
    {
      question: "Can I choose a male or female Quran teacher?",
      answer: "Yes. OQTutor has certified male and female Quran instructors available. Parents can request a female Quran teacher for their daughters and young children, and adult sisters can learn in a private, comfortable setting."
    },
    {
      question: "Can Quran lessons fit around school schedules?",
      answer: "Yes. Because our classes operate across flexible time slots in Eastern Time (EST), you can schedule sessions in the early morning before school, late afternoon, evening after homework, or on weekends."
    },
    {
      question: "What can beginners learn first?",
      answer: "Complete beginners typically start with Noorani Qaida. This foundational course covers Arabic alphabet recognition, correct letter articulation points (Makharij), short and long vowel marks, and letter connections before reading directly from the Holy Quran."
    },
    {
      question: "Do online classes include Tajweed?",
      answer: "Yes. Tajweed is integrated into every stage of our curriculum. Beginners learn correct pronunciation from their very first letter in Qaida, while intermediate and advanced readers learn specific rules like Ghunnah, Ikhfa, Idgham, Qalqalah, and proper stopping (Waqf)."
    },
    {
      question: "Can students learn Quran memorization online?",
      answer: "Yes. Our Hifz program offers structured memorization plans for full Quran Hifz, Juz Amma, or selected Surahs. Teachers guide students through daily new memorization (Sabaq) and a rigorous revision cycle (Sabqi and Manzil) to ensure permanent retention."
    },
    {
      question: "How does the free trial work?",
      answer: "The free trial is a complete, live 30-minute one-to-one lesson with an experienced Quran teacher. The tutor evaluates the student's level, demonstrates our interactive teaching method, and suggests an appropriate learning track. There is no credit card required and no obligation to enroll."
    }
  ];

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
        "name": "New Jersey",
        "item": "https://www.oqtutor.com/locations/usa/new-jersey"
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.oqtutor.com/locations/usa/new-jersey#webpage",
    "url": "https://www.oqtutor.com/locations/usa/new-jersey",
    "name": "Online Quran Classes in New Jersey | OQTutor",
    "description": "Learn Quran online in New Jersey with qualified male and female teachers. One to one classes for kids and adults with flexible scheduling.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} headerConfig={dbData.headerNav} />

      <main className="flex-grow">
        <Hero data={customHeroData} />
        <TrustStatsBar />

        {/* Section 1: Quran Learning That Fits New Jersey Family Schedules */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Structured Online Education
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Quran Learning That Fits New Jersey Family Schedules
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Balancing rigorous school timetables, extracurricular commitments, and family life in New Jersey can leave little room for an additional physical commute. Online Quran education offers a calm, consistent alternative that integrates directly into your home routine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Live Lessons From the Comfort of Home
                  </h3>
                  <div className="space-y-4 text-sm text-muted-text leading-relaxed">
                    <p>
                      Rather than rushing through traffic along the Garden State Parkway or New Jersey Turnpike after a long school day, your child can settle into a quiet study space at home. Live one-to-one lessons remove the friction of travel while providing a distraction-free environment where students can focus fully on their recitation.
                    </p>
                    <p>
                      Parents are free to supervise sessions directly, listen to their child&apos;s progress, and communicate with the teacher. Whether your family lives in North Jersey near Jersey City and Paterson, in Central Jersey hubs like Edison and Woodbridge, or in South Jersey communities near Cherry Hill, private virtual lessons deliver the same dedicated quality straight to your screen.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-card-border/60">
                  <Link href="/how-it-works" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Learn how our live classroom works</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Flexible Scheduling for Busy Families
                  </h3>
                  <div className="space-y-4 text-sm text-muted-text leading-relaxed">
                    <p>
                      Every household follows a distinct rhythm. Some students learn best in the early morning before the school bus arrives, while others prefer 30-minute evening slots once homework is finished. OQTutor operates across extensive Eastern Time (EST) windows, allowing you to choose times that suit your weekly calendar.
                    </p>
                    <p>
                      Our flexible scheduling options accommodate weekend lessons, adjustments during school exam periods, and easy rescheduling when family plans change. This adaptability helps children maintain consistent daily contact with the Quran without feeling overwhelmed by an inflexible timetable.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-card-border/60">
                  <Link href="/pricing" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    <span>View flexible weekly lesson plans</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Personalized Learning for Different Quran Goals */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Individual Progression
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Personalized Learning for Different Quran Goals
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Quran learning is never a one-size-fits-all endeavor. Our private curriculum adapts to where you or your child currently stand—from learning initial Arabic letter sounds to mastering classical Qira&apos;ah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Foundation */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Building Strong Foundations for New Learners
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Beginner students start with the structured <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link> course. Tutors guide young minds step-by-step through Arabic alphabet shapes, vocalization marks (Fathah, Kasrah, Dammah), and compound letter formations. This foundational stage ensures that children do not guess words, but read with genuine phonetic confidence.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/60">
                  <Link href="/blog/best-online-quran-classes-for-beginners" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Read our beginner guidance guide</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Recitation & Tajweed */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Improving Recitation and Pronunciation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    For students who can already read Arabic script, our <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed classes</Link> focus on perfecting Makharij (letter articulation points) and essential recitation rules like Ghunnah, Ikhfa, and proper stopping symbols (Waqf). Tutors listen word by word, correcting small phonetic inaccuracies that are easily missed in large group classrooms.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/60">
                  <Link href="/courses/quran-reading" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Explore fluent Quran reading</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Memorization */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Developing Consistency Through Memorization
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Memorizing the Quran requires patience and a systematic review plan. Through our <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz course</Link>, students follow the traditional three-part method: Sabaq (new daily lesson), Sabqi (recent revision), and Manzil (cumulative retention). This ensures newly memorized Surahs remain solid for a lifetime.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/60">
                  <Link href="/courses/hifz" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Learn about our Hifz program</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: A Learning Experience Designed Around the Student */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Student-Centered Pedagogy
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  A Learning Experience Designed Around the Student
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                
                <div className="space-y-6 text-sm text-muted-text leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      Lessons Adjusted to Age and Current Ability
                    </h3>
                    <p>
                      A five-year-old taking their very first steps in Quran learning needs visual encouragement, short interactive exercises, and patient positive reinforcement. An older child preparing for middle school needs structured milestones and clear accountability. At OQTutor, every curriculum path is calibrated to the student&apos;s attention span, cognitive readiness, and individual pace.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      Support for Children, Teens, and Adults
                    </h3>
                    <p>
                      Our private classes cater to students at every stage of life. We offer dedicated <Link href="/courses/quran-for-kids" className="text-primary font-semibold hover:underline">Quran classes for kids</Link> to nurture a love for recitation early on, as well as specialized <Link href="/courses/quran-for-adults" className="text-primary font-semibold hover:underline">Quran classes for adults</Link> who wish to improve their reading in a respectful, supportive environment without feeling self-conscious.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link 
                    href="/book-free-trial" 
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                  >
                    <span>Request Free Placement Assessment</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <div className="glass p-6 md:p-8 rounded-3xl border-card-border shadow-xl w-full max-w-lg">
                  <h3 className="text-base font-bold text-foreground mb-4 uppercase tracking-wider">
                    Why One-on-One Quran Tutoring Excels
                  </h3>
                  <ul className="space-y-3.5 text-xs sm:text-sm text-muted-text">
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-secondary/10 text-secondary rounded-lg shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span><strong>Immediate Correction:</strong> Pronunciation mistakes are caught and corrected instantly before they become ingrained habits.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-secondary/10 text-secondary rounded-lg shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span><strong>Zero Peer Pressure:</strong> Students feel comfortable asking questions and repeating difficult verses without embarrassment.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-secondary/10 text-secondary rounded-lg shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span><strong>Complete Session Focus:</strong> 100% of the 30-minute class is dedicated to one student rather than shared across a group of 15–20.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 bg-secondary/10 text-secondary rounded-lg shrink-0 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span><strong>Custom Speed:</strong> Move quickly through concepts mastered easily, and take extra time on challenging Tajweed rules.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Choosing a Quran Teacher for Your Family */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Qualified Faculty
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Choosing a Quran Teacher for Your Family
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                The relationship between a student and their Quran teacher shapes how they connect with the Holy Book. Finding an instructor with the right credentials, patience, and communication style is essential.
              </p>
            </div>

            {/* What to Look for in a Qualified Teacher */}
            <div className="glass p-8 md:p-10 rounded-3xl border-card-border mb-12">
              <h3 className="text-xl font-bold text-foreground mb-4">
                What to Look for in a Qualified Teacher
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-text leading-relaxed">
                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Shield className="h-4.5 w-4.5 text-primary" />
                    Verified Islamic Credentials
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Look for teachers holding an authentic Ijazah (chain of recitation certification) or formal degrees from recognized Islamic universities. This ensures they have studied correct classical Arabic phonetics and Tajweed traditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <HeartHandshake className="h-4.5 w-4.5 text-primary" />
                    Patience & Child Empathy
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Especially for young learners, patience is vital. A skilled teacher encourages gentle repetition, celebrates small milestones, and makes the learning atmosphere engaging rather than punitive.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <UserCheck className="h-4.5 w-4.5 text-primary" />
                    Teacher Matching Preferences
                  </h4>
                  <p className="text-xs sm:text-sm">
                    Many families prefer a <Link href="/courses/female-quran-teacher" className="text-primary font-semibold hover:underline">female Quran teacher</Link> for their daughters or for adult sisters learning from home. Having options ensures everyone in the family feels comfortable.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Verified Tutors */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-foreground mb-6 text-center">
                Meet Some of Our Verified Instructors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {verifiedTutors.map((tutor, idx) => (
                  <div key={idx} className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300 bg-background/60">
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

        {/* Section 5: How Online Quran Learning Works at OQTutor */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Simple Onboarding
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How Online Quran Learning Works at OQTutor
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Getting started with online Quran classes is straightforward. We ensure every student is assessed properly before committing to regular weekly lessons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="glass p-8 rounded-3xl border-card-border relative hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-base mb-6 shadow-md shadow-primary/20">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Start With an Introductory Trial Lesson
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Book a free 30-minute trial session through our website. During this introductory lesson, a qualified tutor conducts a friendly assessment of the student&apos;s current Arabic and Quran reading level, discusses your family&apos;s learning goals, and demonstrates our interactive teaching style.
                </p>
              </div>

              {/* Step 2 */}
              <div className="glass p-8 rounded-3xl border-card-border relative hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-secondary text-white flex items-center justify-center font-bold text-base mb-6 shadow-md shadow-secondary/20">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Create a Schedule That Works for Your Routine
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Choose how many days per week you wish to study (typically 2, 3, 4, or 5 classes weekly) and select the exact morning, afternoon, or evening slots in Eastern Time that fit your calendar. You can also specify your preference for a male or female instructor.
                </p>
              </div>

              {/* Step 3 */}
              <div className="glass p-8 rounded-3xl border-card-border relative hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-base mb-6 shadow-md shadow-primary/20">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Track Regular Progress & Growth
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Attend live classes from your computer or tablet. Teachers provide continuous feedback after each session, maintain structured lesson notes, and help students progress smoothly from chapter to chapter with steady reinforcement and regular milestone reviews.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/book-free-trial" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Book Your Free Trial Today</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Quran Courses Available Through OQTutor */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Course Catalog
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Quran Courses Available Through OQTutor
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Explore our full range of tailored courses designed to support students from beginner basics to advanced Quranic studies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Noorani Qaida & Quran Reading */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Foundational & Fluency</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                    Noorani Qaida and Quran Reading
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    The essential starting point for new learners. The <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link> curriculum teaches Arabic alphabet recognition, vowel sounds, and letter combinations. Once finished, students transition directly into <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran reading</Link>, learning how to connect words into full verses with proper flow and pauses.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60 flex flex-wrap gap-4">
                  <Link href="/courses/noorani-qaida" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Explore Noorani Qaida</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link href="/courses/quran-reading" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Explore Quran Reading</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Tajweed and Recitation */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Artful Accuracy</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                    Tajweed and Recitation
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    Designed for students who can already read Arabic script but want to recite with authentic classical rules. Our <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed course</Link> covers throat and tongue articulation points (Makharij), heavy and light letters, nasalization (Ghunnah), echoing sounds (Qalqalah), and elongation rules (Madd).
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60">
                  <Link href="/courses/tajweed" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Explore Tajweed Recitation</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Quran Memorization */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Spiritual Devotion</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                    Quran Memorization
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    Our <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz program</Link> provides individual mentorship for memorizing specific Surahs, Juz Amma, or the complete Holy Quran. Tutors verify correct pronunciation before verses are memorized and establish daily revision routines to cement memory retention.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60">
                  <Link href="/courses/hifz" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Explore Hifz Program</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Islamic Studies and Related Learning */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Comprehensive Faith</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">
                    Islamic Studies and Related Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                    Complement Quranic recitation with holistic Islamic knowledge through our <Link href="/courses/islamic-studies" className="text-primary font-semibold hover:underline">Islamic Studies course</Link>. Students learn essential daily supplications (Duas), the pillars of Islam, basic Aqeedah, prayer instructions (Salah & Wudu), and inspiring stories of the Prophets.
                  </p>
                </div>
                <div className="pt-4 border-t border-card-border/60">
                  <Link href="/courses/islamic-studies" className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1">
                    <span>Explore Islamic Studies</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-xs sm:text-sm text-muted-text">
                Looking for other US locations? Visit our <Link href="/locations/usa" className="text-primary font-semibold hover:underline">USA Quran Learning Hub</Link> or check specific states like <Link href="/locations/usa/new-york" className="text-primary font-semibold hover:underline">New York</Link>, <Link href="/locations/usa/illinois" className="text-primary font-semibold hover:underline">Illinois</Link>, and <Link href="/locations/usa/texas" className="text-primary font-semibold hover:underline">Texas</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Frequently Asked Questions About Quran Learning in New Jersey */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Clear Answers
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions About Quran Learning in New Jersey
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Here are clear, direct answers to common questions asked by families and adult learners in New Jersey.
              </p>
            </div>

            <div className="space-y-4">
              {faqList.map((faq, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-card-border">
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 flex items-start gap-2.5">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-muted-text leading-relaxed pl-7">
                    {idx === 0 ? (
                      <p>
                        You can learn Quran online in New Jersey through <Link href="/" className="text-primary font-semibold hover:underline">OQTutor</Link> by booking a <Link href="/book-free-trial" className="text-primary font-semibold hover:underline">free introductory trial class</Link>. We evaluate your current reading ability, match you with a certified male or female <Link href="/tutors" className="text-primary font-semibold hover:underline">Quran teacher</Link> who fits your learning style, and arrange live one-to-one video lessons at times that suit your Eastern Time daily schedule.
                      </p>
                    ) : idx === 3 ? (
                      <p>
                        Yes. OQTutor has certified male and <Link href="/courses/female-quran-teacher" className="text-primary font-semibold hover:underline">female Quran teachers</Link> available. Parents can request a female teacher for their daughters and young children, and adult sisters can learn in a private, comfortable setting. Read our parent guide on <Link href="/blog/how-to-choose-the-best-female-quran-teacher-online-for-your-child" className="text-primary font-semibold hover:underline">choosing a female Quran teacher online</Link>.
                      </p>
                    ) : idx === 5 ? (
                      <p>
                        Complete beginners typically start with <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida</Link>. This foundational course covers Arabic alphabet recognition, correct letter articulation points (Makharij), short and long vowel marks, and letter connections before reading directly from the Holy Quran.
                      </p>
                    ) : idx === 6 ? (
                      <p>
                        Yes. Tajweed is integrated into every stage of our curriculum. Beginners learn correct pronunciation from their very first letter in Qaida, while intermediate and advanced readers learn specific rules in our dedicated <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed classes</Link>.
                      </p>
                    ) : idx === 7 ? (
                      <p>
                        Yes. Our <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz program</Link> offers structured memorization plans for full Quran Hifz, Juz Amma, or selected Surahs. Teachers guide students through daily new memorization (Sabaq) and a rigorous revision cycle (Sabqi and Manzil) to ensure permanent retention.
                      </p>
                    ) : idx === 8 ? (
                      <p>
                        The free trial is a complete, live 30-minute one-to-one lesson with an experienced Quran teacher. The tutor evaluates the student&apos;s level, demonstrates our interactive teaching method, and suggests an appropriate learning track. There is no credit card required—you can <Link href="/book-free-trial" className="text-primary font-semibold hover:underline">register for a free trial class</Link> anytime.
                      </p>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xs sm:text-sm text-muted-text mb-4">
                Have more questions about our classes or faculty? Visit our comprehensive <Link href="/faq" className="text-primary font-semibold hover:underline">FAQ page</Link> or learn more about <Link href="/how-it-works" className="text-primary font-semibold hover:underline">how OQTutor works</Link>.
              </p>
              <Link 
                href="/book-free-trial" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Get Started With a Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} footerConfig={dbData.footerNav} />
    </>
  );
}
