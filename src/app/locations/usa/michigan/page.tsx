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
import { CheckCircle, ChevronDown, Star, Shield, HelpCircle, Award, BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes in Michigan | Live 1-on-1 Tutors | OQTutor",
    description: "Learn Quran online in Michigan with OQTutor. Live one-on-one classes in Tajweed, Hifz, Noorani Qaida & Tafseer for kids and adults. Flexible hours, free trial class.",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/usa/michigan",
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/usa/michigan",
    },
  };
}

export default async function MichiganQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const customHeroData = {
    title: "Online Quran Classes in Michigan",
    subtitle: "Michigan is home to one of the largest and most established Muslim communities in the United States — from Dearborn and Detroit to Hamtramck, Ann Arbor, Lansing, and Grand Rapids. OQTutor brings certified, one-on-one online Quran education directly to Michigan families, no matter which city or suburb you call home. Whether you're a parent looking to give your child a solid foundation in Quran reading, an adult starting your recitation journey from scratch, or a Hafiz-in-training working toward completing memorization, our live online classes are built around your schedule, your pace, and your family's comfort.",
    ctaText: "Book Your Free Trial Class",
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
        "name": "Is there a free trial class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. New students can take a live trial class with an OQTutor teacher before enrolling in a paid plan."
        }
      },
      {
        "@type": "Question",
        "name": "What age can my child start?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most children begin as early as 4–5 years old with Noorani Qaida. Adults of any age are welcome to enroll as well."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request a female tutor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Let us know your preference when you register, and we'll match you with a tutor accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "What platform are classes held on?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classes are conducted over popular online meeting platforms like Google Meet or Zoom, utilizing interactive whiteboards and digital Quran portals to help teachers correct mistakes in real-time."
        }
      },
      {
        "@type": "Question",
        "name": "What time zone do classes run in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Classes are scheduled in Eastern Time to match Michigan students, with flexible slots across the day and evening."
        }
      },
      {
        "@type": "Question",
        "name": "Do you only teach students in Michigan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No — while this page is built for Michigan families, OQTutor teaches students across the United States and internationally, since all classes are online."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know the tutors are qualified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our tutors undergo strict vetting checks, hold degrees in Islamic Studies or Quranic disciplines, and possess authentic Tajweed certifications (Ijazah) before they can join our teaching team."
        }
      },
      {
        "@type": "Question",
        "name": "Can adults enroll, or is this just for children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adults are welcome. Whether you're starting from zero or want to refine your Tajweed, classes are matched to your current level, not your age."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer Hifz (memorization) classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Hifz program pairs students with a dedicated tutor and a daily revision schedule, with regular progress updates for parents."
        }
      },
      {
        "@type": "Question",
        "name": "What languages do your tutors speak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tutors teach primarily in English, with support for Arabic and Urdu to serve Michigan's South Asian, Arab, and Bengali Muslim communities."
        }
      },
      {
        "@type": "Question",
        "name": "Can we schedule classes in the evening, after Maghrib, or around prayer times?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Class times are flexible, and many Michigan families schedule sessions in the evening after Maghrib or once the school day and homework are done."
        }
      },
      {
        "@type": "Question",
        "name": "Will online classes really save us the drive to an Islamic center or tutor's home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — that's the point. There's no commute across town, whether you're in Dearborn, Detroit, Hamtramck, or the suburbs; you join the class from home on whatever device is convenient."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my child needs to miss a class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you notify us at least 12 hours before a class starts, we will coordinate a makeup session with your tutor during the current billing period."
        }
      }
    ]
  };

  const renderMichiganFaqAnswer = (idx: number, defaultText: string) => {
    if (idx === 0) {
      return (
        <>
          Yes. New students can register for a live{" "}
          <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">
            free trial class
          </Link>{" "}
          with an OQTutor teacher before subscribing.
        </>
      );
    }
    if (idx === 1) {
      return (
        <>
          Most children begin as early as 4–5 years old with{" "}
          <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
            Noorani Qaida
          </Link>
          . Adults of any age are welcome to enroll as well.
        </>
      );
    }
    if (idx === 2) {
      return (
        <>
          Yes. Let us know your preference when you register, and we will match you with a qualified male or{" "}
          <Link href="/tutors" className="text-primary hover:underline font-semibold">
            female tutor
          </Link>{" "}
          accordingly.
        </>
      );
    }
    if (idx === 6) {
      return (
        <>
          Our instructors undergo rigorous credentials vetting, hold degrees in Islamic Studies or Quranic disciplines, and possess authentic Tajweed certifications ({" "}
          <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
            Ijazah
          </Link>{" "}
          ) before teaching.
        </>
      );
    }
    if (idx === 8) {
      return (
        <>
          Yes. Our specialized{" "}
          <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">
            Hifz course
          </Link>{" "}
          pairs students with a dedicated tutor and a daily revision schedule, with regular progress updates for parents.
        </>
      );
    }
    return defaultText;
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

        {/* Section 1: Why Choose OQTutor */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Why Us
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Why Michigan Families Choose OQTutor
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Live, 1-on-1 Classes</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Every class is a real-time session between your child (or you) and a dedicated <Link href="/tutors" className="text-primary hover:underline font-semibold">online Quran tutor</Link> — never pre-recorded video. Lessons are shaped around the student's current level and learning speed.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Experienced, Vetted Tutors</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Our tutors are trained in <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed rules</Link> and Quranic pedagogy and go through a rigorous evaluation process, so families can trust the quality of instruction.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Male and Female Tutors Available</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Many families have a preference for their child or a female family member to learn with a <Link href="/tutors" className="text-primary hover:underline font-semibold">female tutor</Link>. OQTutor lets you choose the tutor gender that is most comfortable.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Scheduling Built Around Michigan Life</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Between school pickups, work shifts, and evening prayers, Michigan families are busy. We offer morning, afternoon, evening, and weekend slots so <Link href="/how-it-works" className="text-primary hover:underline font-semibold">Quran learning</Link> fits into your routine.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">No Commute, No Compromise</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Skip the drive across town. Learn from your living room with the same quality of instruction — or better, thanks to our interactive portal and screen-sharing tools for <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">pronunciation correction</Link>.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Free Placement Trial</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Try a live class with an OQTutor teacher before you commit to a plan, so you and your child can see the teaching style firsthand by booking a <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">free trial class</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Quran Courses */}
        <section className="py-16 md:py-24 bg-foreground/[0.01] border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Syllabus
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Our Online Quran Courses
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Noorani Qaida</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    The starting point for young children and adult beginners with no prior Arabic reading experience. Learn the Arabic alphabet, correct pronunciation, and basic joining rules.
                  </p>
                </div>
                <Link href="/courses/noorani-qaida" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>Explore Course</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Quran Reading with Tajweed</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    Covers rules of articulation (Makhraj), elongation (Madd), and recitation etiquette, ensuring students recite the Quran with accuracy and confidence.
                  </p>
                </div>
                <Link href="/courses/tajweed" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>Explore Course</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Hifz (Quran Memorization)</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    A structured program for students committed to memorizing the Quran, incorporating daily revision schedules (Manzil) and regular parent updates.
                  </p>
                </div>
                <Link href="/courses/hifz" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>Explore Course</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Tafseer (Quran Understanding)</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    Ideal for teens and adults seeking to understand the meaning and context behind the verses, exploring historical and spiritual commentary.
                  </p>
                </div>
                <Link href="/courses/tafseer" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>Explore Course</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Quran Translation</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    Word-by-word and verse-by-verse translation classes for students who want to connect what they recite in Salah to its meaning in English.
                  </p>
                </div>
                <Link href="/courses/arabic-language" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>Explore Course</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Islamic Studies for Kids</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    Biographies of the Prophets, supplications (Duas), basic Fiqh, and character building, tailored specifically for young minds.
                  </p>
                </div>
                <Link href="/courses/islamic-studies" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>Explore Course</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Serving Muslim Families Across Michigan */}
        <section className="py-16 md:py-24 border-t border-card-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Michigan Reach
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  Serving Muslim Families Across Michigan
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  OQTutor's <Link href="/how-it-works" className="text-primary hover:underline font-semibold font-sans">online classes</Link> reach students throughout Michigan, including Dearborn & Dearborn Heights, Detroit, Hamtramck, Ann Arbor, Sterling Heights, Canton & Livonia, Lansing, and Grand Rapids. Because classes are entirely online, your city or zip code never limits your access to a qualified <Link href="/tutors" className="text-primary hover:underline font-semibold font-sans">online tutor</Link> — only your schedule does. If you reside outside Michigan, explore regional directories like <Link href="/locations/usa/new-york" className="text-primary hover:underline font-semibold font-sans">New York Quran Classes</Link> or our national <Link href="/locations/usa" className="text-primary hover:underline font-semibold font-sans">USA Locations Hub</Link>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Dearborn & Dearborn Heights - home to one of the largest Arab-American Muslim communities",
                    "Detroit - serving families across the metro area",
                    "Hamtramck - one of the most densely Muslim cities per capita in the U.S.",
                    "Ann Arbor - students and families connected to the U-M community",
                    "Sterling Heights, Troy & Warren - suburban Detroit families",
                    "Canton & Livonia - growing South Asian & Arab communities",
                    "Lansing & East Lansing - Michigan's capital region",
                    "Grand Rapids & West Michigan communities",
                  ].map((cityText, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-muted-text font-normal font-sans">
                      <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                      <span>{cityText}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/online-quran-classes-usa.jpg"
                      alt="Online Quran Classes Michigan - Student learning on laptop"
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

        {/* Section 4: How It Works */}
        <section className="py-16 md:py-24 border-t border-card-border bg-foreground/[0.005]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Process
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                How It Works
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { title: "Register", desc: "Tell us the student's age, current Quran reading level, and course of interest." },
                { title: "Free Trial Class", desc: "We match you with a tutor and schedule a live trial session." },
                { title: "Get Placed on a Path", desc: "Based on the trial, we recommend the right starting point and course pace." },
                { title: "Start Regular Classes", desc: "Choose a weekly schedule and begin consistent, live instruction." },
                { title: "Track Progress", desc: "Parents receive regular updates on recitation, memorization, and behavior." }
              ].map((step, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-card-border flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="h-10 w-10 bg-primary/15 text-primary rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-foreground mb-1">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-text font-normal leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Pricing Table */}
        <section id="pricing" className="py-16 md:py-24 border-t border-card-border bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Pricing Plans
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Affordable Rates for Michigan Families
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-sm text-muted-text max-w-md mx-auto">
                No long-term contracts. Pause or cancel anytime. All prices are in USD.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between shadow-sm relative hover:shadow-lg transition-all">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Starter Package</h3>
                  <div className="mt-4 flex items-baseline text-foreground">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">$30</span>
                    <span className="ml-1 text-sm font-semibold text-muted-text">/month</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-text">Best for basic foundations</p>
                  <div className="h-px bg-card-border my-6" />
                  <ul className="space-y-4 text-xs sm:text-sm text-muted-text">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>3 sessions per week</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>30-minute lessons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>1-on-1 private tutor</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/book-free-trial" className="w-full text-center block py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-semibold transition-all">
                    Register Plan
                  </Link>
                </div>
              </div>

              {/* Standard */}
              <div className="glass p-8 rounded-3xl border-2 border-secondary flex flex-col justify-between shadow-md relative hover:shadow-xl transition-all">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Standard Package</h3>
                  <div className="mt-4 flex items-baseline text-foreground">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">$40</span>
                    <span className="ml-1 text-sm font-semibold text-muted-text">/month</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-text">Ideal for steady progress</p>
                  <div className="h-px bg-card-border my-6" />
                  <ul className="space-y-4 text-xs sm:text-sm text-muted-text">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                      <span>5 sessions per week</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                      <span>30-minute lessons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                      <span>Advanced Tajweed & study tools</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/book-free-trial" className="w-full text-center block py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-semibold transition-all shadow-md">
                    Register Plan
                  </Link>
                </div>
              </div>

              {/* Premium */}
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between shadow-sm relative hover:shadow-lg transition-all">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Daily Package</h3>
                  <div className="mt-4 flex items-baseline text-foreground">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">$50</span>
                    <span className="ml-1 text-sm font-semibold text-muted-text">/month</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-text">Best for intensive Hifz & focus</p>
                  <div className="h-px bg-card-border my-6" />
                  <ul className="space-y-4 text-xs sm:text-sm text-muted-text">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>Daily classes (7/week)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>30-minute lessons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>Customized Hifz/Tafseer syllabus</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href="/book-free-trial" className="w-full text-center block py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-semibold transition-all">
                    Register Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="py-20 border-t border-card-border bg-foreground/[0.005]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                FAQs
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
                Frequently Asked Questions
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
                    {renderMichiganFaqAnswer(idx, faq.acceptedAnswer.text)}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Quick Facts */}
        <section className="py-16 md:py-24 border-t border-card-border bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Quick Facts
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
                Muslim Communities in the U.S.
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl glass border border-card-border/60 space-y-2">
                <h4 className="font-bold text-sm sm:text-base text-foreground font-sans">Which city has the most Muslims in the USA?</h4>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  <Link href="/locations/usa/new-york" className="text-primary hover:underline font-semibold font-sans">New York City</Link> has the largest Muslim population of any U.S. city, with estimates generally ranging from 600,000 to over 750,000 residents — and well over a million if you include the surrounding metro area. By concentration rather than raw numbers, Dearborn, Michigan takes the lead: over half its population identifies as Middle Eastern or North African, making it the most Muslim-concentrated city in the country.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass border border-card-border/60 space-y-2">
                <h4 className="font-bold text-sm sm:text-base text-foreground font-sans">Which US states have the most Muslims?</h4>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  <Link href="/locations/usa/new-york" className="text-primary hover:underline font-semibold font-sans">New York</Link>, California, and Illinois have the largest Muslim populations by raw numbers, followed by New Jersey and Texas. Looking at Muslim residents as a share of total population across the <Link href="/locations/usa" className="text-primary hover:underline font-semibold font-sans">USA</Link>, smaller states like Michigan, Maryland, and Minnesota rank higher — Michigan's Muslim community, centered around Dearborn, Detroit, Ann Arbor, and Hamtramck, makes up roughly 2.5–3% of the state's population.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass border border-card-border/60 space-y-2">
                <h4 className="font-bold text-sm sm:text-base text-foreground font-sans">Which cities in the US are Muslim-friendly?</h4>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  While there's no official ranking, the cities most known for established Muslim communities, mosques, and halal infrastructure are <Link href="/locations/usa/new-york" className="text-primary hover:underline font-semibold font-sans">New York City</Link>, Chicago, Detroit/Dearborn, Los Angeles, Houston, and Philadelphia. Dearborn, Michigan stands out in particular — it's home to the Islamic Center of America, the largest mosque in North America, along with halal restaurants, bakeries, and Arabic signage throughout the city.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass border border-card-border/60 space-y-2">
                <h4 className="font-bold text-sm sm:text-base text-foreground font-sans">Which county is 100% Muslim?</h4>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                  No U.S. county has a 100% Muslim population — this is not supported by any credible data. This claim likely comes from confusion with Hamtramck, Michigan, which became known as the first U.S. city with an all-Muslim city council, or with Dearborn's roughly 54% Middle Eastern/North African population. Both are notable Michigan communities, but neither is a &quot;100% Muslim county.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Closing CTA Banner */}
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 text-center space-y-6 relative">
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Start Learning Quran Online Today
              </h3>
              <p className="text-sm md:text-base text-muted-text max-w-xl mx-auto leading-relaxed font-normal">
                Give your family consistent, high-quality Quran education without leaving home. Book a free trial class and see why Michigan families are choosing OQTutor.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-free-trial"
                  className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <span>Book Your Free Trial Class</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
