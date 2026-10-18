import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SingaporeLeadForm from '@/components/SingaporeLeadForm';
import SingaporeFaqAccordion from '@/components/SingaporeFaqAccordion';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle, Shield, Award, BookOpen, Clock, Users, ArrowRight, Sparkles,
  HeartHandshake, CheckCheck, HelpCircle, Star, Video, Check, Gift,
  ShieldCheck, Trophy, RotateCcw, UserCheck, Zap, Compass, ChevronRight,
  MapPin, MessageCircle, Calendar, GraduationCap, Laptop, Sparkle, X
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Online Quran Classes in Singapore | 1-on-1 Tutors | OQTutor";
  const description = "Join 1-on-1 online Quran classes in Singapore for kids & adults. Certified male & female tutors, flexible SGT timings, $0 sign-up fee. Book a 3-day free trial!";
  const url = "https://www.oqtutor.com/online-quran-classes-singapore/";

  return {
    title,
    description,
    keywords: [
      "Online Quran classes Singapore",
      "Quran tutor Singapore",
      "learn Quran online Singapore",
      "online mengaji Singapore",
      "female Quran teacher Singapore",
      "Noorani Qaida and Iqra classes",
      "Tajweed courses Singapore",
      "Hifz program for kids",
      "SGT time zone Quran lessons",
      "Ustaz and Ustazah online",
      "Quran tuition Singapore",
      "Quran teacher Singapore for kids"
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      url,
      title,
      description,
      type: "website",
      locale: "en_SG",
      siteName: "OQTutor",
      images: [
        {
          url: "https://www.oqtutor.com/singapore-online-quran-classes-home.jpg",
          width: 1200,
          height: 630,
          alt: "Online Quran Classes in Singapore with OQTutor",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.oqtutor.com/singapore-online-quran-classes-home.jpg"],
    },
  };
}

export default async function SingaporeQuranClassesPage() {
  const dbData = readDB();
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Exact JSON-LD Schema provided by User
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://www.oqtutor.com/#organization",
        "name": "OQTutor",
        "url": "https://www.oqtutor.com/",
        "email": "hello@oqtutor.com",
        "description": "Online Quran Academy providing 1-on-1 Quran reading, Noorani Qaida, Tajweed, and Hifz classes for kids and adults in Singapore and worldwide.",
        "areaServed": {
          "@type": "Country",
          "name": "Singapore"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        }
      },
      {
        "@type": "Course",
        "name": "Online Quran Classes in Singapore",
        "description": "Live 1-on-1 online Quran classes for kids and adults in Singapore covering Noorani Qaida, Tajweed, Hifz, and Islamic Studies with certified male and female tutors.",
        "provider": {
          "@id": "https://www.oqtutor.com/#organization"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "inLanguage": ["en", "ar", "ur"]
        },
        "offers": {
          "@type": "Offer",
          "price": "30.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://www.oqtutor.com/online-quran-classes-singapore/"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do online Quran classes work for students in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Students join live, one-to-one video sessions with a dedicated tutor via Zoom or Google Meet at their chosen Singapore Standard Time (SGT) slot. Tutors share the digital Noorani Qaida or Mushaf on screen and listen to the student recite to correct pronunciation immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Can I request a female Quran teacher (Ustazah) for my daughter or myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. OQTutor has a dedicated team of certified, experienced female Quran tutors who teach young girls, teenage sisters, and adult women in a comfortable, private environment."
            }
          },
          {
            "@type": "Question",
            "name": "What age is best for children in Singapore to start online Quran classes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Children as young as 4 to 5 years old can begin with our beginner Noorani Qaida course. Our 30-minute class duration is specifically designed to match the attention span of preschool and primary school children."
            }
          },
          {
            "@type": "Question",
            "name": "My child previously learned using the Iqra system in Singapore. Can they transition to OQTutor?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! While we use the internationally recognized Noorani Qaida to build phonics and Tajweed foundations, the phonetic steps closely parallel the Iqra method. During your 3-day free trial, our tutor will assess your child's current reading level and place them at the exact stage they need without repeating what they already know."
            }
          },
          {
            "@type": "Question",
            "name": "How much do OQTutor’s online Quran classes cost in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Monthly plans start at $30 USD (approximately $40 SGD) per month with $0 registration fees and a 3-day free trial with no credit card required."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my child has school exams or CCA and needs to reschedule a class?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We understand that school schedules in Singapore can get hectic. You can easily reschedule classes with advance notice by coordinating with your tutor or our 24/7 WhatsApp support team so your child never loses out on their lessons."
            }
          }
        ]
      }
    ]
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
        "name": "Locations",
        "item": "https://www.oqtutor.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Online Quran Classes Singapore",
        "item": "https://www.oqtutor.com/online-quran-classes-singapore/"
      }
    ]
  };

  const faqData = [
    {
      id: "sg-faq-1",
      tag: "Class Setup & SGT Timings",
      question: "How do online Quran classes work for students in Singapore?",
      answer: "Students join live, one-to-one video sessions with a dedicated tutor via Zoom or Google Meet at their chosen Singapore Standard Time (SGT) slot. Tutors share the digital Noorani Qaida or Mushaf on screen, highlight letters in real time, and listen to the student recite to correct pronunciation immediately."
    },
    {
      id: "sg-faq-2",
      tag: "Ustazah Available",
      question: "Can I request a female Quran teacher (Ustazah) for my daughter or myself?",
      answer: "Yes. OQTutor has a dedicated team of certified, experienced female Quran tutors (Ustazah) who teach young girls, teenage sisters, and adult women in a comfortable, private environment. You can specify your preference when booking your free trial."
    },
    {
      id: "sg-faq-3",
      tag: "Age & Preschoolers",
      question: "What age is best for children in Singapore to start online Quran classes?",
      answer: "Children as young as 4 to 5 years old can begin with our beginner Noorani Qaida course. Our 30-minute class duration is specifically designed to match the attention span of preschool and primary school children."
    },
    {
      id: "sg-faq-4",
      tag: "Iqra Transition",
      question: "My child previously learned using the Iqra system in Singapore. Can they transition to OQTutor?",
      answer: "Absolutely! While we use the internationally recognized Noorani Qaida to build phonics and Tajweed foundations, the phonetic steps closely parallel the Iqra method. During your 3-day free trial, our tutor will assess your child's current reading level and place them at the exact stage they need without repeating what they already know."
    },
    {
      id: "sg-faq-5",
      tag: "Transparent Pricing",
      question: "How much do OQTutor’s online Quran classes cost in Singapore?",
      answer: "Our monthly plans start at $30 USD (approximately $40 SGD) per month, depending on how many days per week you choose to study. There is $0 registration fee, and we offer a 3-day free trial with no credit card required so you can experience the classes before paying anything."
    },
    {
      id: "sg-faq-6",
      tag: "MOE Exam & CCA Rescheduling",
      question: "What happens if my child has school exams or CCA and needs to reschedule a class?",
      answer: "We understand that school schedules in Singapore can get hectic. You can easily reschedule classes with advance notice by coordinating with your tutor or our 24/7 WhatsApp support team so your child never loses out on their lessons."
    }
  ];

  const singaporeRegions = [
    {
      region: "East Region",
      badge: "East Coast / Changi",
      towns: ["Tampines", "Bedok", "Pasir Ris", "Simei", "Marine Parade", "Kaki Bukit"],
      description: "Convenient after-school slots for families balancing East Coast CCAs and academic tuition."
    },
    {
      region: "North & North-West",
      badge: "Causeway & Woodlands Hub",
      towns: ["Woodlands", "Yishun", "Sembawang", "Marsiling", "Khatib", "Admiralty"],
      description: "Evening & weekend classes ideal for students around Northpoint, Admiralty, and Woodlands."
    },
    {
      region: "North-East Region",
      badge: "Young Family Towns",
      towns: ["Punggol", "Sengkang", "Hougang", "Serangoon", "Buangkok", "Kovan"],
      description: "High demand for early-childhood Noorani Qaida (ages 4-7) among young Muslim families."
    },
    {
      region: "West Region",
      badge: "Jurong & Foothills",
      towns: ["Jurong West", "Choa Chu Kang", "Bukit Batok", "Clementi", "Bukit Panjang", "Jurong East"],
      description: "Zero commute times for busy parents around Jurong Gateway, Lot One, and Westgate."
    },
    {
      region: "Central & City",
      badge: "Central Singapore",
      towns: ["Bishan", "Toa Payoh", "Kallang", "Geylang Serai", "Ang Mo Kio", "Novena", "Queenstown"],
      description: "Flexible evening slots for working professionals and university students near the CBD."
    }
  ];

  const curriculumCourses = [
    {
      title: "Noorani Qaida & Foundational Phonics",
      badge: "Beginner • Ages 4+",
      accent: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
      icon: GraduationCap,
      perfectFor: "Children and beginners transitioning from zero or familiar with basic Iqra concepts.",
      whatYouLearn: "Arabic alphabet recognition, proper pronunciation (Makharij), connecting letters, short and long vowels (Harakat & Madd), and basic reading fluency.",
      highlights: [
        "Arabic alphabet visual recognition",
        "Precise tongue & throat Makharij drills",
        "Connecting letters into full words",
        "Smooth transition from local Iqra method",
      ],
      link: "/courses/noorani-qaida"
    },
    {
      title: "Quran Reading with Tajweed",
      badge: "All Ages • Beginner to Advanced",
      accent: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
      icon: BookOpen,
      perfectFor: "Students ready to read straight from the Mushaf with accuracy and fluency.",
      whatYouLearn: "Practical application of Tajweed rules (Ghunnah, Ikhfa, Idgham, Qalqalah), proper stopping (Waqf) rules, and live recitation correction (Talaqqi).",
      highlights: [
        "Ghunnah, Ikhfa & Idgham application",
        "Qalqalah & heavy/light letter rules",
        "Waqf (stopping & pausing) precision",
        "Live 1-on-1 Talaqqi recitation correction",
      ],
      link: "/courses/tajweed"
    },
    {
      title: "Hifz-ul-Quran / Memorization Program",
      badge: "Intermediate to Advanced",
      accent: "from-sky-500/10 to-blue-500/10 border-sky-500/20",
      icon: Trophy,
      perfectFor: "Kids and adults aiming to memorize Juz Amma, selected Surahs, or the complete 30 Juz.",
      whatYouLearn: "Structured daily memorization using the proven 3-step Sabaq (new lesson), Sabaqi (recent revision), and Manzil (long-term retention) methodology with Ijazah-certified Huffaz.",
      highlights: [
        "Sabaq (Daily new verses memorization)",
        "Sabaqi (Recent revision cycle)",
        "Manzil (Long-term cumulative retention)",
        "Taught by certified male & female Huffaz",
      ],
      link: "/courses/hifz"
    },
    {
      title: "Islamic Studies, Salah & Daily Duas",
      badge: "Kids & Beginners",
      accent: "from-purple-500/10 to-indigo-500/10 border-purple-500/20",
      icon: Compass,
      perfectFor: "Building strong Islamic identity, manners (Adab), and foundational knowledge alongside Quran reading.",
      whatYouLearn: "Step-by-step Wudu and Salah, Masnoon Duas, Six Kalimas, prophetic stories, and essential Islamic beliefs (Aqeedah).",
      highlights: [
        "Step-by-step practical Wudu & Salah",
        "Essential Masnoon Duas for daily life",
        "Six Kalimas & core Islamic beliefs (Aqeedah)",
        "Stories of the Prophets & moral Adab",
      ],
      link: "/courses/islamic-studies"
    },
    {
      title: "Quran Translation & Tafseer",
      badge: "Teens & Adults",
      accent: "from-rose-500/10 to-pink-500/10 border-rose-500/20",
      icon: Sparkles,
      perfectFor: "Learners who want to understand the deeper context and divine message of the verses they recite.",
      whatYouLearn: "Verse-by-verse translation, contextual background (Asbab al-Nuzul), thematic reflections, and practical life lessons directly applicable to daily modern challenges.",
      highlights: [
        "Word-by-word Quranic vocabulary",
        "Context of revelation (Asbab al-Nuzul)",
        "Thematic Tafseer of Juz Amma & major Surahs",
        "Safe, interactive discussions for teens & reverts",
      ],
      link: "/courses/tafseer"
    }
  ];

  const audienceSegments = [
    {
      title: "For Kids & Teens",
      ageRange: "Ages 4–16",
      subtitle: "MOE Exam & CCA-Friendly Quran Learning",
      description: "Engaging, 30-minute interactive lessons using digital flashcards and screen-sharing. Ideal for preschoolers starting from zero or primary/secondary students balancing MOE exams and Islamic upbringing.",
      bulletPoints: [
        "Interactive digital whiteboard & reward stamps",
        "Fast-paced 30-minute lessons tailored for young attention spans",
        "Flexible pause & reschedule policies during PSLE, O-Levels, and school exams",
        "Female Ustazah available for young girls and sisters"
      ],
      ctaText: "Enroll Your Child",
      icon: Users
    },
    {
      title: "For Working Adults & Professionals",
      ageRange: "Busy Professionals & Parents",
      subtitle: "Judgment-Free Private Recitation Refresher",
      description: "Never had the chance to master Tajweed, or feeling rusty with your recitation? Take private evening or weekend classes at your own pace in a judgment-free, encouraging environment.",
      bulletPoints: [
        "Early morning (pre-work) & late evening (8:00 PM – 10:30 PM SGT) slots",
        "Fix subtle pronunciation flaws in your daily Salah recitation",
        "100% private 1-on-1 format—no public embarrassment or pressure",
        "Weekend flexible scheduling with easy mobile reschedule options"
      ],
      ctaText: "Start Adult Classes",
      icon: Clock
    },
    {
      title: "For Reverts / New Muslims",
      ageRange: "All Ages Welcome",
      subtitle: "Welcoming, Step-by-Step Arabic & Faith Journey",
      description: "A welcoming, step-by-step introduction to reading Arabic script, learning daily Duas, perfecting Salah (prayer), and understanding the meanings of the Quran with patient, English-speaking teachers.",
      bulletPoints: [
        "Zero prior Arabic knowledge required",
        "Step-by-step phonetic breakdown of Arabic letters & sounds",
        "Practical guidance on Salah, Wudu, and essential daily Duas",
        "Caring, English-fluent mentors dedicated to your comfort"
      ],
      ctaText: "Begin Your Revert Path",
      icon: HeartHandshake
    }
  ];

  return (
    <>
      {/* Inject JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} headerConfig={dbData.headerNav} />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative pt-6 pb-16 md:py-20 overflow-hidden bg-gradient-to-b from-primary-light/40 via-background to-background dark:from-primary-light/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb nav */}
            <nav className="flex items-center text-xs text-muted-text mb-6 gap-2" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-muted-text/60" />
              <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
              <ChevronRight className="h-3 w-3 text-muted-text/60" />
              <span className="text-foreground font-semibold">Singapore</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Copy & Value Bullets */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-sm">
                  <span className="flex items-center text-amber-500">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 mr-1" />
                    <span className="font-bold text-foreground mr-1">4.9/5</span>
                  </span>
                  <span className="text-muted-text hidden sm:inline">•</span>
                  <span>Rated by 500+ Muslim Families Worldwide</span>
                  <span className="text-base" role="img" aria-label="Singapore Flag">🇸🇬</span>
                </div>

                {/* H1 */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.15]">
                  Online Quran Classes in Singapore: <span className="text-primary">Live 1-on-1 Learning</span> for Kids &amp; Adults
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-muted-text leading-relaxed font-normal max-w-2xl">
                  Master Quran recitation, Tajweed, and Hifz from the comfort of your home in Singapore. Study with certified, English-fluent male and female tutors (Ustaz &amp; Ustazah) on a schedule that fits effortlessly around MOE school hours, CCAs, and work commitments.
                </p>

                {/* Value Bullets */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground font-medium">
                      <span className="font-bold text-primary">3-Day Free Trial</span> — No credit card or upfront commitment required
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground font-medium">
                      <span className="font-bold text-primary">$0 Registration Fee</span> — Affordable monthly plans starting from $30 USD (~$40 SGD)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground font-medium">
                      <span className="font-bold text-primary">Singapore-Friendly Timings (SGT)</span> — Afternoon, evening, and weekend slots available
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-foreground font-medium">
                      <span className="font-bold text-primary">Guaranteed Tutor Match</span> — Dedicated male &amp; female teachers for kids, adults, and reverts
                    </p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>Book Your 3-Day Free Trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="#courses"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground font-semibold text-sm border border-card-border transition-all duration-300"
                  >
                    <span>Explore Courses &amp; Pricing</span>
                  </a>
                </div>

                {/* Trust guarantee micro badges */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-muted-text">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>No Credit Card Needed</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>SGT Timings (GMT+8)</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Certified Ustaz &amp; Ustazah</span>
                  </span>
                </div>
              </div>

              {/* Right Column: Singapore Lead Form Widget */}
              <div className="lg:col-span-5 flex justify-center">
                <SingaporeLeadForm className="w-full max-w-lg" source="hero-singapore-location-page" />
              </div>
            </div>
          </div>
        </section>

        {/* AEO / GEO QUICK SUMMARY BOX — Featured Snippet Target */}
        <section className="py-8 bg-background relative" aria-label="Quick Summary for Singapore Students">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-amber-500/10 border-2 border-emerald-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary text-white shrink-0 w-fit shadow-md">
                  <Laptop className="h-6 w-6" />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      AEO Quick Summary
                    </span>
                    <span className="text-[11px] font-medium text-muted-text">
                      Targeted for Singaporean Learners
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    At a Glance: How Online Quran Learning Works in Singapore with OQTutor
                  </h2>

                  <p className="text-sm sm:text-base text-foreground/90 leading-relaxed font-normal">
                    OQTutor provides live, one-to-one online Quran classes via Zoom or Google Meet for students across Singapore. Designed for children (ages 4+), busy working adults, and reverts, our 30-minute focused sessions cover Noorani Qaida (and Iqra foundations), Quran Reading with Tajweed, Hifz (Memorization), and Islamic Studies. All classes operate in Singapore Standard Time (SGT, GMT+8) with $0 registration fees and a risk-free 3-day free trial.
                  </p>

                  {/* Fact Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-2.5 rounded-xl bg-card-bg border border-card-border">
                      <span className="text-[11px] text-muted-text block">Session Format</span>
                      <span className="text-xs sm:text-sm font-bold text-foreground">1-on-1 Talaqqi Live</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-card-bg border border-card-border">
                      <span className="text-[11px] text-muted-text block">Time Zone</span>
                      <span className="text-xs sm:text-sm font-bold text-foreground">SGT (GMT+8) Flexible</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-card-bg border border-card-border">
                      <span className="text-[11px] text-muted-text block">Starting Tuition</span>
                      <span className="text-xs sm:text-sm font-bold text-foreground">$30 USD (~$40 SGD)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-card-bg border border-card-border">
                      <span className="text-[11px] text-muted-text block">Trial Duration</span>
                      <span className="text-xs sm:text-sm font-bold text-primary">3 Days 100% Free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: LOCAL PAIN POINTS & VALUE PROPOSITION */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden" id="why-choose-sg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Visual Image with Floating Badges */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-3 translate-y-3 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white dark:bg-slate-900">
                    <Image
                      src="/singapore-online-quran-classes-home.jpg"
                      alt="Boy in Singapore learning Quran online on laptop from modern home apartment"
                      width={600}
                      height={450}
                      className="w-full rounded-2xl object-cover h-[320px] sm:h-[380px]"
                    />
                    <div className="p-4 bg-background/95 rounded-xl mt-3 border border-card-border">
                      <div className="flex items-center justify-between text-xs font-bold text-foreground mb-1">
                        <span>Safe, Comfortable Home Mengaji</span>
                        <span className="text-primary flex items-center gap-1">
                          <CheckCircle className="h-3.5 w-3.5" /> SGT Verified
                        </span>
                      </div>
                      <p className="text-[12px] text-muted-text leading-snug">
                        Zero commuting across MRT or bus routes. Structured Quran learning seamlessly adapted to Singaporean family life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Pain Points & The 4 Value Pillars */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                    Why OQTutor in Singapore
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                    Why Muslim Families in Singapore Choose OQTutor
                  </h2>
                  <div className="h-1 w-20 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    Between long school hours, Co-Curricular Activities (CCAs), academic tuition, and full-time careers, finding time to commute to a weekend madrasah or local learning center can be exhausting for Singaporean families. OQTutor brings structured, high-quality Quranic education directly to your living room.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* H3: 1 */}
                  <div className="glass p-5 rounded-2xl border-card-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-primary">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <Clock className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base text-foreground">
                        1. Flexible Scheduling in SGT
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      No more rushing after school or giving up entire weekends. Whether you prefer after-school weekday slots (4:00 PM – 9:30 PM SGT), early mornings before work, or weekend sessions, you choose the exact days and times that suit your family.
                    </p>
                  </div>

                  {/* H3: 2 */}
                  <div className="glass p-5 rounded-2xl border-card-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-primary">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <UserCheck className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base text-foreground">
                        2. 100% Personal Attention
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      Unlike crowded group classes where children get only a few minutes of teacher attention, every OQTutor session is 100% one-on-one. Your tutor listens closely to every letter, corrects Makharij (articulation) and Tajweed on the spot, and paces the lesson to the student&apos;s exact ability.
                    </p>
                  </div>

                  {/* H3: 3 */}
                  <div className="glass p-5 rounded-2xl border-card-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-primary">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <Users className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base text-foreground">
                        3. Qualified Male &amp; Female Tutors
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      We provide certified, background-checked male and female scholars who are fluent in English and trained in child-friendly pedagogy. Sisters, young girls, and mothers can learn comfortably in full privacy with our dedicated female Quran teachers (Ustazah).
                    </p>
                  </div>

                  {/* H3: 4 */}
                  <div className="glass p-5 rounded-2xl border-card-border space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-center gap-2.5 text-primary">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base text-foreground">
                        4. Affordable Fees ($0 Sign-Up)
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      Local home tuition agencies in Singapore often charge $165 to $220+ SGD per month for just 4 lessons, plus a $50 registration fee. At OQTutor, we charge $0 registration fees, offer 2 to 5 classes per week, and start at just $30 USD (~$40 SGD) per month with family and sibling discounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: AUDIENCE SEGMENTATION */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-y border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                Personalized Learning
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Tailored Quran Learning Paths for Every Student in Singapore
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Whether you are a Singaporean parent giving your young child a head start in Quranic phonics, a working professional seeking Tajweed mastery, or a new Muslim learning prayer, we customize our syllabus to your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {audienceSegments.map((segment, idx) => {
                const IconComponent = segment.icon;
                return (
                  <div
                    key={idx}
                    className="glass p-7 sm:p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {segment.ageRange}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {segment.title}
                      </h3>
                      <p className="text-xs font-semibold text-secondary mb-3">
                        {segment.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-5">
                        {segment.description}
                      </p>

                      <div className="space-y-2.5 pt-2 border-t border-card-border/60 mb-6">
                        {segment.bulletPoints.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                            <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/book-free-trial"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-xs sm:text-sm transition-all duration-300 group-hover:shadow-md"
                    >
                      <span>{segment.ctaText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: CORE CURRICULUM */}
        <section className="py-16 md:py-24 bg-background relative" id="courses">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                Comprehensive Syllabus
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Our Online Quran &amp; Islamic Studies Courses in Singapore
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Step-by-step curricula developed under the guidance of certified scholars, combining classical Islamic pedagogy with modern digital interactive tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {curriculumCourses.map((course, idx) => {
                const CourseIcon = course.icon;
                return (
                  <div
                    key={idx}
                    className="glass p-6 sm:p-7 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                          <CourseIcon className="h-6 w-6" />
                        </div>
                        <span className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {course.badge}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-foreground">
                        {course.title}
                      </h3>

                      <div className="p-3 rounded-xl bg-foreground/5 border border-card-border/60 text-xs">
                        <span className="font-bold text-primary block mb-1">Perfect for:</span>
                        <p className="text-muted-text leading-relaxed">{course.perfectFor}</p>
                      </div>

                      <div className="text-xs sm:text-sm text-foreground/90 space-y-1">
                        <span className="font-bold text-foreground block">What you&apos;ll learn:</span>
                        <p className="text-muted-text text-xs leading-relaxed">{course.whatYouLearn}</p>
                      </div>

                      <div className="space-y-1.5 pt-2 border-t border-card-border/60">
                        {course.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-foreground/80">
                            <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-4 border-t border-card-border/60">
                      <Link
                        href="/book-free-trial"
                        className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                      >
                        <span>Book a 3-Day Free Trial for Any Course →</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Embedded Zoom Visual Callout */}
            <div className="mt-14 p-6 sm:p-8 rounded-3xl glass border border-card-border shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex justify-center">
                <Image
                  src="/singapore-quran-zoom-student.jpg"
                  alt="Young student in white topi learning Quran over live Zoom session with online tutor"
                  width={400}
                  height={260}
                  className="rounded-2xl object-cover shadow-md w-full max-w-sm"
                />
              </div>
              <div className="lg:col-span-8 space-y-3 text-left">
                <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full inline-block">
                  Interactive Talaqqi Technology
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Live Screen Sharing, Color-Coded Tajweed &amp; Real-Time Correction
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  During every 30-minute lesson, your tutor projects high-resolution digital Mushaf and Noorani Qaida pages. With digital laser pointers, live syllable breakdown, and interactive audio repetition, students stay alert, engaged, and retain lessons far faster than passive reading.
                </p>
                <div className="pt-2">
                  <Link
                    href="/book-free-trial"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-md"
                  >
                    <span>Experience an Interactive Lesson</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: COMPARISON TABLE (High-Conversion GEO Asset) */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-t border-card-border relative" id="pricing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                Transparent Comparison
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                OQTutor vs. Traditional Local Tuition in Singapore
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Compare the flexibility, personal attention, and value of OQTutor’s 1-on-1 online classes against local home tutors and weekend madrasahs in Singapore.
              </p>
            </div>

            {/* Desktop / Tablet Comparison Table */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-card-border glass shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-card-border bg-foreground/[0.03]">
                    <th className="p-5 font-bold text-sm text-foreground w-1/4">Feature</th>
                    <th className="p-5 font-bold text-base text-white bg-primary w-1/3 relative">
                      <div className="flex items-center justify-between">
                        <span>OQTutor Online Academy</span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white text-primary px-2 py-0.5 rounded-full shadow-sm">
                          Best Value
                        </span>
                      </div>
                    </th>
                    <th className="p-5 font-bold text-sm text-foreground/80 w-1/4">Local SG Home/Agency Tutors</th>
                    <th className="p-5 font-bold text-sm text-foreground/80 w-1/4">Weekend Physical Centres</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-card-border/60 text-xs sm:text-sm">
                  {/* Row 1 */}
                  <tr className="hover:bg-foreground/[0.015] transition-colors">
                    <td className="p-5 font-semibold text-foreground">Class Format</td>
                    <td className="p-5 bg-primary/5 font-bold text-primary flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <span>1-on-1 Live Private Sessions</span>
                    </td>
                    <td className="p-5 text-muted-text">1-on-1 or Small Family Group</td>
                    <td className="p-5 text-muted-text">Group Classes (10–20+ students)</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-foreground/[0.015] transition-colors">
                    <td className="p-5 font-semibold text-foreground">Registration Fee</td>
                    <td className="p-5 bg-primary/5 font-bold text-primary flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <span>$0 (100% Free Sign-up)</span>
                    </td>
                    <td className="p-5 text-muted-text">Typically $50 SGD non-refundable</td>
                    <td className="p-5 text-muted-text">$30–$80 SGD admin/material fees</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-foreground/[0.015] transition-colors">
                    <td className="p-5 font-semibold text-foreground">Monthly Tuition</td>
                    <td className="p-5 bg-primary/5 font-bold text-primary flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <span>From $30 USD (~$40 SGD)/mo</span>
                    </td>
                    <td className="p-5 text-muted-text">$165–$220+ SGD/mo (for 4 classes)</td>
                    <td className="p-5 text-muted-text">$80–$150 SGD/mo</td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-foreground/[0.015] transition-colors">
                    <td className="p-5 font-semibold text-foreground">Free Trial</td>
                    <td className="p-5 bg-primary/5 font-bold text-primary flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <span>3 Free Trial Classes</span>
                    </td>
                    <td className="p-5 text-muted-text">Rarely offered (paid first lesson)</td>
                    <td className="p-5 text-muted-text">Paid term commitment</td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-foreground/[0.015] transition-colors">
                    <td className="p-5 font-semibold text-foreground">Schedule Flexibility</td>
                    <td className="p-5 bg-primary/5 font-bold text-primary flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <span>24/7 (Custom SGT Slots + Easy Rescheduling)</span>
                    </td>
                    <td className="p-5 text-muted-text">Fixed weekly slot</td>
                    <td className="p-5 text-muted-text">Fixed weekend timings only</td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="hover:bg-foreground/[0.015] transition-colors">
                    <td className="p-5 font-semibold text-foreground">Commute Time</td>
                    <td className="p-5 bg-primary/5 font-bold text-primary flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 shrink-0" />
                      <span>Zero (Learn from Home)</span>
                    </td>
                    <td className="p-5 text-muted-text">Zero (Tutor visits home)</td>
                    <td className="p-5 text-muted-text">30–60 mins travel each way</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Card View for Comparison */}
            <div className="md:hidden space-y-4">
              <div className="p-5 rounded-2xl border-2 border-primary bg-primary/5 glass">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg text-primary">OQTutor Online Academy</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-2 py-0.5 rounded-full">
                    Recommended
                  </span>
                </div>
                <ul className="space-y-2 text-xs">
                  <li className="flex justify-between border-b border-card-border/60 pb-1.5">
                    <span className="text-muted-text font-medium">Format:</span>
                    <span className="font-bold text-foreground">1-on-1 Live Private</span>
                  </li>
                  <li className="flex justify-between border-b border-card-border/60 pb-1.5">
                    <span className="text-muted-text font-medium">Registration Fee:</span>
                    <span className="font-bold text-primary">$0 Free Sign-up</span>
                  </li>
                  <li className="flex justify-between border-b border-card-border/60 pb-1.5">
                    <span className="text-muted-text font-medium">Monthly Tuition:</span>
                    <span className="font-bold text-primary">From $30 USD (~$40 SGD)</span>
                  </li>
                  <li className="flex justify-between border-b border-card-border/60 pb-1.5">
                    <span className="text-muted-text font-medium">Free Trial:</span>
                    <span className="font-bold text-primary">3 Free Trial Classes</span>
                  </li>
                  <li className="flex justify-between border-b border-card-border/60 pb-1.5">
                    <span className="text-muted-text font-medium">Schedule:</span>
                    <span className="font-bold text-foreground">Custom SGT + Rescheduling</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span className="text-muted-text font-medium">Commute:</span>
                    <span className="font-bold text-primary">Zero (From Home)</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-card-border glass text-xs space-y-2">
                <h3 className="font-bold text-base text-foreground">Local Home / Agency Tutors</h3>
                <p className="text-muted-text">
                  $165–$220+ SGD/month for 4 lessons, typically $50 registration fee, fixed weekly slot, and no trial classes.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-card-border glass text-xs space-y-2">
                <h3 className="font-bold text-base text-foreground">Weekend Physical Centres</h3>
                <p className="text-muted-text">
                  Crowded group classes (10-20+ students), fixed weekend timing, $30–$80 admin fees, and 30-60 minutes travel each way.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
              >
                <span>Book Your 3-Day Free Trial Today</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 5: HOW IT WORKS */}
        <section className="py-16 md:py-24 bg-background relative" id="how-it-works">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                Simple 4-Step Process
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Start Learning in 4 Simple Steps
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                We make getting started effortless. Experience your tutor match and our digital classroom before deciding on any monthly plan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Step 1 */}
              <div className="glass p-6 rounded-3xl border-card-border flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white font-black text-lg flex items-center justify-center shadow-md">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Book Your 3-Day Free Trial
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Fill out our 60-second form. Choose your preferred course and Singapore time slot. No credit card required.
                  </p>
                </div>
                <div className="pt-4 text-[11px] font-semibold text-primary">
                  ✓ 60-Second Online Form
                </div>
              </div>

              {/* Step 2 */}
              <div className="glass p-6 rounded-3xl border-card-border flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary text-white font-black text-lg flex items-center justify-center shadow-md">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Meet Tutor for Assessment
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Join a live session on Zoom or Google Meet. Your male or female tutor will assess the student&apos;s current level and demonstrate our interactive teaching style.
                  </p>
                </div>
                <div className="pt-4 text-[11px] font-semibold text-secondary">
                  ✓ Zoom or Google Meet
                </div>
              </div>

              {/* Step 3 */}
              <div className="glass p-6 rounded-3xl border-card-border flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white font-black text-lg flex items-center justify-center shadow-md">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Choose Your Monthly Plan
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Select a schedule (2, 3, 4, or 5 days a week) starting from just $30/month. Enjoy sibling discounts and pause or cancel anytime.
                  </p>
                </div>
                <div className="pt-4 text-[11px] font-semibold text-primary">
                  ✓ $0 Sign-Up • Cancel Anytime
                </div>
              </div>

              {/* Step 4 */}
              <div className="glass p-6 rounded-3xl border-card-border flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-secondary text-white font-black text-lg flex items-center justify-center shadow-md">
                    04
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    Begin Regular 1-on-1 Classes
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    Track steady progress with regular feedback and weekly parent updates. Experience rapid improvement in fluency and Tajweed.
                  </p>
                </div>
                <div className="pt-4 text-[11px] font-semibold text-secondary">
                  ✓ Weekly Parent Reports
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SERVING ALL NEIGHBOURHOODS IN SINGAPORE (Local SEO Block) */}
        <section className="py-16 md:py-24 bg-foreground/[0.015] border-y border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Islandwide Coverage in Singapore</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Serving Muslim Families Across Every Neighbourhood in Singapore
                </h2>
                <div className="h-1 w-20 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                  Because our classes are delivered 100% online via interactive screen-sharing, families across all regions of Singapore can access top-tier Quranic education without leaving home—whether you reside in Tampines, Bedok, Pasir Ris, Woodlands, Yishun, Jurong West, Choa Chu Kang, Punggol, Sengkang, Bukit Batok, or Central Singapore.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative rounded-3xl overflow-hidden glass border border-card-border p-2 shadow-2xl">
                  <Image
                    src="/singapore-quran-tutor-skyline.jpg"
                    alt="Student studying Quran on laptop with Singapore Marina Bay skyline view in the background"
                    width={500}
                    height={350}
                    className="rounded-2xl object-cover h-[260px] sm:h-[300px] w-full"
                  />
                  <div className="p-3 text-center text-xs font-medium text-foreground">
                    Online Quran Lessons for Singaporean Homes &amp; Condominiums
                  </div>
                </div>
              </div>
            </div>

            {/* Regional breakdown cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {singaporeRegions.map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl border-card-border hover:border-primary/40 hover:shadow-lg transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-base text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{item.region}</span>
                    </h3>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 border-t border-card-border/60">
                    <span className="text-[11px] font-bold text-foreground block mb-1.5 uppercase tracking-wider">
                      Popular Neighbourhoods:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.towns.map((town, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-foreground/5 text-foreground/80 text-[11px] font-medium"
                        >
                          {town}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (AEO Optimized) */}
        <section className="py-16 md:py-24 bg-background relative" id="faq">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
                Clear Answers
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                Frequently Asked Questions About Online Quran Classes in Singapore
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
                Everything you need to know about our tutors, timings in SGT, Iqra system transition, and fee plans in Singapore.
              </p>
            </div>

            <SingaporeFaqAccordion faqs={faqData} />
          </div>
        </section>

        {/* FINAL CALL TO ACTION BANNER */}
        <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-primary via-emerald-800 to-teal-900 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>3-Day Free Trial • No Credit Card Required</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
              Ready to Begin Your Family’s Quran Journey in Singapore?
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Experience the difference of personalized 1-on-1 instruction. Book your 3 free trial classes today—no credit card required, no registration fees, and a 100% tutor match guarantee.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book-free-trial"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-white text-emerald-900 hover:bg-emerald-50 font-extrabold text-sm sm:text-base shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Book Your 3-Day Free Trial Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <a
                href={`https://wa.me/923478704442?text=${encodeURIComponent(
                  "Assalamu Alaikum! I am interested in online Quran classes for my family in Singapore. Could you provide more details about SGT time slots and tutor availability?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-700/80 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat with Us on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[3] text-emerald-300" />
                <span>$0 Registration Fee</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[3] text-emerald-300" />
                <span>SGT Evening &amp; Weekend Slots</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[3] text-emerald-300" />
                <span>Male &amp; Female Ustaz / Ustazah</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-4 w-4 stroke-[3] text-emerald-300" />
                <span>Cancel or Pause Anytime</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} footerConfig={dbData.footerNav} />
    </>
  );
}
