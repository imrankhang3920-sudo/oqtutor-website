import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Clock, Users, ArrowRight, ChevronDown, Award, Shield, Star, MessageCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes in New York | Free Trial, 1-on-1",
    description: "Structured 1-on-1 online Quran classes for New York families. Certified male & female tutors, real progress reports, and a free trial — no long contracts.",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/usa/new-york",
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/usa/new-york",
    },
  };
}

export default async function NewYorkQuranClassesPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const renderNewYorkFaqAnswer = (idx: number, defaultText: string) => {
    if (idx === 0) {
      return (
        <>
          Through a one-on-one online academy like{" "}
          <Link href="/" className="text-primary hover:underline font-semibold">
            OQTutor
          </Link>
          , where a live tutor teaches over video call on a schedule matched to your U.S. time zone — no travel required.
        </>
      );
    }
    if (idx === 1) {
      return (
        <>
          The right starting course depends on current reading level:{" "}
          <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
            Noorani Qaida
          </Link>{" "}
          for true beginners,{" "}
          <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
            Tajweed classes
          </Link>{" "}
          for those who already read Arabic script, or a{" "}
          <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">
            Hifz track
          </Link>{" "}
          for memorization-focused students. A placement check (not a sales call) is the reliable way to know which one fits.
        </>
      );
    }
    if (idx === 2) {
      return (
        <>
          Rates typically depend on classes per week and session length. See the sample{" "}
          <Link href="#pricing" className="text-primary hover:underline font-semibold">
            pricing table above
          </Link>
          ; ask for the current rate sheet before enrolling anywhere that won't show numbers up front.
        </>
      );
    }
    if (idx === 4) {
      return (
        <>
          Online removes commute time and expands the pool of available tutors (including{" "}
          <Link href="/tutors" className="text-primary hover:underline font-semibold">
            female tutors
          </Link>
          , which can be harder to find locally). In-person can suit families who prefer face-to-face accountability. Many New York families use online for weekday consistency and keep occasional in-person mosque classes for community connection.
        </>
      );
    }
    if (idx === 6) {
      return (
        <>
          At minimum: a verifiable{" "}
          <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
            Ijazah
          </Link>{" "}
          (chain of certification) in Tajweed or Qira'ah, teaching experience with the age group in question, and — for children — a track record of patient, structured instruction rather than pure recitation drilling.
        </>
      );
    }
    if (idx === 7) {
      return (
        <>
          Beginners typically start with{" "}
          <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
            Noorani Qaida
          </Link>
          : Arabic letters, sounds, and joining letters into words, before moving to full Quran reading with{" "}
          <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
            Tajweed rules
          </Link>{" "}
          layered in gradually.
        </>
      );
    }
    if (idx === 12) {
      return (
        <>
          Yes, most academies — including OQTutor — offer{" "}
          <Link href="/tutors" className="text-primary hover:underline font-semibold">
            female tutors
          </Link>{" "}
          for girls, women, and families who prefer that arrangement, alongside male tutors.
        </>
      );
    }
    if (idx === 15) {
      return (
        <>
          Yes — a genuine trial should be a real class with a real tutor, not a sales consultation, and should end with a level recommendation in writing. You can book a free{" "}
          <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">
            trial class
          </Link>{" "}
          directly on our site.
        </>
      );
    }
    if (idx === 16) {
      return (
        <>
          Yes, structured{" "}
          <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">
            Hifz programs
          </Link>{" "}
          typically include daily new-memorization targets plus a recurring revision schedule so earlier portions aren't forgotten.
        </>
      );
    }
    return defaultText;
  };

  const customHeroData = {
    title: "Online Quran Classes in New York",
    subtitle: "Most online Quran academies serving New York promise the same three things: flexible timing, male or female tutors, and a free trial. OQTutor starts one step earlier — a short placement check before your first paid class, so your child or you begin at the right level instead of restarting a generic Noorani Qaida track from page one. Every student gets a personal learning plan and a weekly progress note sent to the parent or student directly, not just a 'your child is doing great' message.",
    ctaText: "Book Free Placement Trial",
    ctaLink: "/book-free-trial",
    whatsappText: dbData.hero.whatsappText,
    whatsappNumber: dbData.hero.whatsappNumber,
    backgroundImage: dbData.hero.backgroundImage || "/hero-bg.jpg",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I learn Quran online in the USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Through a one-on-one online academy like OQTutor, where a live tutor teaches over video call on a schedule matched to your U.S. time zone — no travel required."
        }
      },
      {
        "@type": "Question",
        "name": "Which online Quran course is the best?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The right starting course depends on current reading level: Noorani Qaida for true beginners, Tajweed classes for those who already read Arabic script, or a Hifz track for memorization-focused students. A placement check (not a sales call) is the reliable way to know which one fits."
        }
      },
      {
        "@type": "Question",
        "name": "How much do online Quran classes cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rates typically depend on classes per week and session length. See the sample pricing table above; ask for the current rate sheet before enrolling anywhere that won't show numbers up front."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find online Quran courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for an academy that lets you trial a real class, states its tutor credentials, and shows pricing before you provide payment details."
        }
      },
      {
        "@type": "Question",
        "name": "Is it better to learn Quran online or in person?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online removes commute time and expands the pool of available tutors (including female tutors, which can be harder to find locally). In-person can suit families who prefer face-to-face accountability. Many New York families use online for weekday consistency and keep occasional in-person mosque classes for community connection."
        }
      },
      {
        "@type": "Question",
        "name": "Are online Quran classes effective for kids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for most children — especially in one-on-one format, where the tutor adjusts pace and catches pronunciation errors in real time rather than in a group setting."
        }
      },
      {
        "@type": "Question",
        "name": "What qualifications should a Quran teacher have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At minimum: a verifiable Ijazah (chain of certification) in Tajweed or Qira'ah, teaching experience with the age group in question, and — for children — a track record of patient, structured instruction rather than pure recitation drilling."
        }
      },
      {
        "@type": "Question",
        "name": "How do online Quran classes work for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beginners typically start with Noorani Qaida: Arabic letters, sounds, and joining letters into words, before moving to full Quran reading with Tajweed rules layered in gradually."
        }
      },
      {
        "@type": "Question",
        "name": "Is online Quran learning suitable for adults in New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Adult learners — including converts and busy professionals — often prefer online classes specifically because of flexible evening or early-morning slots that fit around a work schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best age to start Quran classes online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most academies start structured Qaida lessons around age 4–5, once a child can sit through a short focused session; there's no upper age limit for adults."
        }
      },
      {
        "@type": "Question",
        "name": "Do online Quran classes offer Tajweed training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — Tajweed (correct pronunciation and recitation rules) is typically taught progressively from the Qaida stage onward, not as a separate add-on."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to learn to read the Quran online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Highly individual, but adult learners attending 3–5 classes a week often complete Noorani Qaida in roughly 4–6 months; children generally take longer depending on age and consistency of home practice."
        }
      },
      {
        "@type": "Question",
        "name": "Are there female Quran tutors available online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most academies — including OQTutor — offer female tutors for girls, women, and families who prefer that arrangement, alongside male tutors."
        }
      },
      {
        "@type": "Question",
        "name": "What equipment do I need for online Quran classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A computer, tablet, or smartphone, a stable internet connection, and ideally a headset with a microphone for clearer two-way audio during recitation correction."
        }
      },
      {
        "@type": "Question",
        "name": "Is online Quran teaching safe for children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One-on-one sessions (no group chat rooms), parent visibility into the class, and no requirement to travel are the main safety advantages parents cite. Ask any academy directly about their child-safety policy before enrolling."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a trial class before enrolling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — a genuine trial should be a real class with a real tutor, not a sales consultation, and should end with a level recommendation in writing."
        }
      },
      {
        "@type": "Question",
        "name": "Do online Quran academies offer Hifz (memorization) programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, structured Hifz programs typically include daily new-memorization targets plus a recurring revision schedule so earlier portions aren't forgotten."
        }
      },
      {
        "@type": "Question",
        "name": "What is the class schedule flexibility for busy parents in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for morning, after-school, evening, and weekend slots run on EST/EDT, with an easy rescheduling process (WhatsApp or a booking link) for the inevitable missed session."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the right online Quran academy in the USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compare on four things: a real trial class (not just a sales call), tutor credentials stated clearly, pricing shown up front, and whether progress gets reported to you in writing."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        <Hero data={customHeroData} />

        {/* Section 1: Why Choose Placement-First */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Our Methodology
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Why New York Families Choose a Placement-First Approach
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">1. You start at your actual level</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    New students take a 15-minute, no-obligation reading and <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed</Link> check before enrollment. A returning student who already reads fluently doesn't sit through beginner drills, and a true beginner isn't rushed into Tajweed rules before they're ready.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">2. Progress is written down, not just felt</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    After every class block, parents (or adult students) receive a short written progress note: what was covered, what needs more practice, and what's next. No guessing at how far along you actually are.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">3. Pricing is stated up front</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Below is a sample structure (see the <Link href="#pricing" className="text-primary hover:underline font-semibold">pricing table below</Link>) — no &quot;contact us for a quote&quot; requirement to compare options.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">4. Month-to-month, cancel anytime</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    No multi-month lock-in contracts. If a schedule stops working for a New York family's routine, they can pause or stop without penalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Courses Offered */}
        <section className="py-16 md:py-24 bg-foreground/[0.01] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Syllabus
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Online Quran Courses Offered
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Noorani Qaida (Beginner Reading Foundation)</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                    Arabic letter recognition, correct pronunciation (makharij), and joining letters into words — the foundation before <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed</Link>. Typical age range: 4+.
                  </p>
                </div>
                <Link
                  href="/courses/noorani-qaida"
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Quran Reading with Tajweed</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                    For students who've completed <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida</Link> or already read Arabic script. Covers elongation rules, correct articulation points, and fluent recitation.
                  </p>
                </div>
                <Link
                  href="/courses/quran-reading"
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Hifz (Memorization) Program</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                    Structured daily memorization targets with scheduled revision cycles, so previously memorized Surahs are retained, not just added to.
                  </p>
                </div>
                <Link
                  href="/courses/hifz"
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Quran Translation &amp; Tafseer</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                    Meaning-focused study of Surahs and Ayahs, appropriate for teens, adults, and converts who want to understand what they're reciting, not only recite it.
                  </p>
                </div>
                <Link
                  href="/courses/arabic-language"
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Islamic Studies &amp; Daily Duas (Kids)</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                    Salah steps, daily supplications, and basic Islamic manners — offered as a short add-on, not a mandatory bundle.
                  </p>
                </div>
                <Link
                  href="/courses/islamic-studies"
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How Enrollment Works */}
        <section className="py-16 md:py-24 border-t border-card-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Process
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                How Enrollment Works
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  "Book a free placement trial — a real class, not a sales call.",
                  "Get a level recommendation — in writing, before you pay for anything.",
                  "Pick a tutor and a time slot — matched to New York (EST/EDT) hours, including evenings and weekends.",
                  "Start structured classes — with a written plan for the first month.",
                  "Receive weekly progress notes — sent directly, no need to ask."
                ].map((step, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl border-card-border flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                    <span className="h-10 w-10 bg-primary/15 text-primary rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                      {idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-muted-text font-normal pt-1.5 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 & 5: Tutors and Metro Coverage (Side-by-side Layout) */}
        <section className="py-16 md:py-24 border-t border-card-border bg-foreground/[0.005] relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Verified Scholars
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  Serving Quran Students Across New York City and the Metro Area
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Classes run on New York time whether a student is logging in from Brooklyn, Queens, Manhattan, the Bronx, Staten Island, Long Island, Westchester, or northern New Jersey — location inside the metro area doesn't change tutor availability or pricing, only the time zone matters. Sessions are held over Zoom or Google Meet with screen-sharing so the tutor can point directly at the Mushaf page or Qaida line being read.
                </p>
                <div className="glass p-6 rounded-2xl border border-card-border bg-foreground/[0.01] space-y-4">
                  <h4 className="font-bold text-sm text-foreground">Our Tutor Standards:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Male and female <Link href="/tutors" className="text-primary hover:underline font-semibold">tutors</Link> — student or parent chooses.</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Certified credentials: official <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Ijazah chains</Link> and academic scholars.</span>
                    </li>
                    <li className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><Link href="/tutors" className="text-primary hover:underline font-semibold">Tutors</Link> who teach New York-based students regularly and work within EST/EDT scheduling, including early-morning and after-school slots.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/online-quran-classes-usa.jpg"
                      alt="Online Quran Classes New York - Student learning on laptop"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px] md:h-[350px]"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 6: Fees & Plans (Pricing Table) */}
        <section id="pricing" className="py-20 border-t border-card-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Clear Rates
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
                Affordable New York Quran Class Fees
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-sm text-muted-text max-w-xl mx-auto">
                No contracts or hidden costs. Prices are fully transparent. Sibling discount: 15% off the second enrolled child.
              </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-card-border glass">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-foreground/[0.02] border-b border-card-border">
                    <th className="p-5 text-sm font-bold text-foreground">Plan</th>
                    <th className="p-5 text-sm font-bold text-foreground text-center">Classes/Week</th>
                    <th className="p-5 text-sm font-bold text-foreground text-center">Session Length</th>
                    <th className="p-5 text-sm font-bold text-foreground text-center">Monthly Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border/60 hover:bg-foreground/[0.01] transition-colors">
                    <td className="p-5 text-sm font-semibold text-foreground">Starter</td>
                    <td className="p-5 text-sm text-muted-text text-center font-normal">2</td>
                    <td className="p-5 text-sm text-muted-text text-center font-normal">30 min</td>
                    <td className="p-5 text-sm font-bold text-primary text-center">$20</td>
                  </tr>
                  <tr className="border-b border-card-border/60 hover:bg-foreground/[0.01] transition-colors">
                    <td className="p-5 text-sm font-semibold text-foreground">Standard</td>
                    <td className="p-5 text-sm text-muted-text text-center font-normal">3</td>
                    <td className="p-5 text-sm text-muted-text text-center font-normal">30 min</td>
                    <td className="p-5 text-sm font-bold text-primary text-center">$30</td>
                  </tr>
                  <tr className="hover:bg-foreground/[0.01] transition-colors">
                    <td className="p-5 text-sm font-semibold text-foreground">Intensive (Hifz-track)</td>
                    <td className="p-5 text-sm text-muted-text text-center font-normal">5</td>
                    <td className="p-5 text-sm text-muted-text text-center font-normal">45 min</td>
                    <td className="p-5 text-sm font-bold text-primary text-center">$60</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
              >
                <span>Get Started - Book Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: Testimonials */}
        <section className="py-20 border-t border-card-border bg-foreground/[0.005]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Reviews
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Feedback From New York Families
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
                    &quot;As a working professional, the flexible schedule of OQTutor is perfect. I take classes in the evenings. Muhammad Imran is a wonderful teacher who makes Tajweed concepts clear and easy to apply.&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/40">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">Zayd</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text">Adult Student, NYC</p>
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
                    &quot;OQTutor has been amazing for my daughter. Her tutor Qaria Sumaira is extremely patient and friendly. In just 3 months, she has finished Noorani Qaida and can read short Arabic phrases with correct Tajweed.&quot;
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-card-border/40">
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">Sarah</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text">Parent of 7yo Aisha, New York</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ Accordion */}
        <section className="py-20 border-t border-card-border bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                FAQs
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
                Common Questions About Online Quran Classes in New York
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-card-border/60 rounded-2xl glass p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-foreground cursor-pointer select-none list-none">
                    <span>{faq.name}</span>
                    <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </summary>
                  <div className="mt-3 text-xs sm:text-sm text-muted-text leading-relaxed font-normal border-t border-card-border/40 pt-3">
                    {renderNewYorkFaqAnswer(idx, faq.acceptedAnswer.text)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Closing CTA Banner */}
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

        {/* Contact Form */}
        <Contact data={dbData.contact} />
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
