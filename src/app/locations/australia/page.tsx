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
import { ArrowRight, CheckCircle, ChevronDown, Star, Shield, HelpCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes Australia | Vetted Cultural-Fit Tutors",
    description: "Enroll in online Quran classes Australia. Custom tutor matching for Australia's diverse Muslim communities. One-on-one sessions, AUD pricing, free trial.",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/australia",
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/australia",
    },
  };
}

export default async function AustraliaQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Custom Hero Data focused on Cultural/Community-fit (intro: ~125 words)
  const customHeroData = {
    title: "Online Quran Classes Australia",
    subtitle: "At OQTutor, we recognize that the Australian Muslim community is a beautifully diverse tapestry, representing dozens of cultural and linguistic backgrounds from Sydney's west to Melbourne's northern suburbs. Finding an online Quran teacher who respects your family's language heritage, teaching style preferences, and madhab-sensitivity can be a difficult task. We bridge this gap by prioritizing the perfect tutor-student match. Rather than offering a one-size-fits-all lesson, our platform pairs you with certified, bilingual scholars who understand your cultural context and adapt to your child's pace, helping families across Australia connect deeply with the Holy Quran.",
    ctaText: "Book Free Trial",
    ctaLink: "/contact",
    whatsappText: dbData.hero.whatsappText,
    whatsappNumber: dbData.hero.whatsappNumber,
    backgroundImage: dbData.hero.backgroundImage || "/hero-bg.jpg",
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can we request a tutor who matches our family's cultural or madhab background?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our tutor matching system is highly customized. You can share your language preferences, specific dialect requirements, or madhab guidance requests during your trial, and we will pair you with a suitable scholar."
        }
      },
      {
        "@type": "Question",
        "name": "Can we book a free trial class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a free one-to-one trial session to let your family meet the matched tutor, experience our interactive virtual environment, and evaluate the teaching style before registering."
        }
      },
      {
        "@type": "Question",
        "name": "How does scheduling adjust to AEST/AWST time zones?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our learning portal supports scheduling across all Australian time zones, including Australian Eastern (AEST/AEDT), Central (ACST/ACDT), and Western (AWST) Standard Times, allowing lessons to fit your family's routine."
        }
      },
      {
        "@type": "Question",
        "name": "How are OQTutor teachers vetted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All tutors go through an identity verification, academic qualification check, and teaching evaluations. This ensures only qualified, patient, and child-safe tutors work with our students."
        }
      },
      {
        "@type": "Question",
        "name": "How much do online Quran classes cost in AUD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our flexible monthly plans start at $45 AUD/month for 3 weekly classes. Standard plans with 5 weekly classes are $60 AUD/month, and premium daily plans are $75 AUD/month."
        }
      },
      {
        "@type": "Question",
        "name": "At what age can kids start Quran classes online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We welcome kids starting from age 4 or 5. Tutors use interactive tools, visual aids, and a patient approach to make Noorani Qaida lessons engaging for young learners."
        }
      }
    ]
  };

  const coursesList = [
    {
      title: "Noorani Qaida",
      description: "Foundational course to master the Arabic alphabet, letter joining, and correct pronunciation rules for absolute beginners.",
      link: "/courses/noorani-qaida"
    },
    {
      title: "Quran Reading",
      description: "Develop fluency in reading the Holy Quran with correct accentuation, building confidence page by page.",
      link: "/courses/quran-reading"
    },
    {
      title: "Quran with Tajweed",
      description: "Master the classical rules of recitation (Tajweed) under the guidance of native Arabic scholars and Ijazah holders.",
      link: "/courses/tajweed"
    },
    {
      title: "Hifz-ul-Quran",
      description: "A structured memorization path designed to help students memorize Surahs or the entire Quran with flexible scheduling.",
      link: "/courses/hifz"
    },
    {
      title: "Islamic Studies",
      description: "Integrated lessons covering Islamic history, mannerisms (Akhlaq), basic Jurisprudence (Fiqh), and essential daily Duas.",
      link: "/courses/islamic-studies"
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero data={customHeroData} />

        {/* Section 1: The Challenge of Tutor Matching in Diverse Communities */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Community Diversity Focus
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  The Challenge of Finding the Right Tutor in Australia's Diverse Community
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Australia's culturally diverse Muslim community includes Lebanese, Turkish, Afghan, Bosnian, Cocos Malay, and South Asian families concentrated across Sydney, Melbourne, Brisbane, Perth, and Adelaide. Each community brings unique linguistic nuances, distinct recitation dialects, and specific madhab sensitivities to their spiritual study.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Traditional local options or generic virtual platforms often offer a single teaching approach that fails to align with a child's cultural background or language requirements. Finding a certified tutor who respects your family's heritage and teaches with custom patience is essential to building a lasting connection to the Quran.
                </p>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/australia-locations-1.png"
                      alt="Best online Quran academy Australia - Muslim kid reciting Quran"
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

        {/* Section 2: Our Cultural & Pedagogical Matching Process */}
        <section className="py-16 md:py-24 border-t border-card-border bg-foreground/[0.005] relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/australia-locations-2.png"
                      alt="Online Quran classes Australia - One-on-one virtual classroom study desk"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px] md:h-[350px]"
                    />
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Custom Match
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  Our Cultural &amp; Pedagogical Matching Process
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  At OQTutor, we don't assign teachers randomly. Our enrollment process begins with understanding your family's requirements. We map your language needs, preference for male or female tutors, and any specific madhab sensitivities before matching you with a verified, bilingual Quran tutor.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our classroom connects students with scholars who use child-friendly visual slides and real-time audio guidance. This interactive environment lets students progress at their own speed while receiving individual support tailored to their background.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Structured Syllabus Options */}
        <section className="py-16 md:py-24 bg-foreground/[0.01] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Syllabus Options</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Structured Quran Courses Available Online
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesList.map((course, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{course.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                      {course.description}
                    </p>
                  </div>
                  <Link
                    href={course.link}
                    className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group"
                  >
                    <span>Learn More about {course.title}</span>
                    <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Custom Child-Centric & Adult Recitation Paths */}
        <section className="py-16 md:py-24 border-t border-card-border bg-background relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Tailored Study</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Online Quran Classes for Kids &amp; Adults in Australia
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Kids Column */}
              <div className="glass p-8 rounded-3xl border-card-border space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 inline-block">
                  For Kids
                </span>
                <h3 className="text-xl font-bold text-foreground">Online Quran Classes for Kids Australia</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Younger students require visual aids, patience, and encouraging study paces. Our tutors adapt lessons to accommodate school holidays, winter breaks, and state schedules, making sure children learn without extra pressure. Parents receive regular updates detailing pronunciation progress and surahs covered to keep you involved in their progress.
                </p>
              </div>

              {/* Adults Column */}
              <div className="glass p-8 rounded-3xl border-card-border space-y-6">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-3.5 py-1 inline-block">
                  For Adults
                </span>
                <h3 className="text-xl font-bold text-foreground">Online Quran Classes for Adults Australia</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Our adult program fits adult professionals, busy parents, and university students. Whether starting from the basic letters or seeking advanced Tajweed training, we offer evening and weekend slots to suit your work schedule. Tutors maintain a patient approach to build confidence at every step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why Choose OQTutor (Differentiators) */}
        <section className="py-16 md:py-24 border-t border-card-border bg-foreground/[0.005] relative">
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Core Differentiators
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  Why Australian Muslim Families Trust OQTutor
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our focus is on cultural compatibility and educational quality. We pair students with certified, Ijazah-holding bilingual scholars who understand the challenges of learning in a western environment. We offer madhab-sensitive instruction and clear pronunciation corrections in real-time.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Madhab-Sensitivity</h4>
                      <p className="text-xs text-muted-text mt-1">Syllabus adjustments that respect your family's jurisprudential school of thought.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Bilingual Tutors</h4>
                      <p className="text-xs text-muted-text mt-1">Native scholars who speak fluent English, making explanation clear for kids.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">AEST/AWST Scheduling</h4>
                      <p className="text-xs text-muted-text mt-1">Classes scheduled to fit local times, aligning automatically to local schedules.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-foreground">No Group Distractions</h4>
                      <p className="text-xs text-muted-text mt-1">Strict one-to-one class format guarantees individual attention and pace.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/australia-locations-3.png"
                      alt="Online Quran Classes Australia - Student completing lesson and celebrating success"
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

        {/* Section 6: AUD Fees & Flexible Plans */}
        <section className="py-20 border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Clear Pricing</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Online Quran Classes Australia Fees
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-sm text-muted-text max-w-xl mx-auto">
                Billed directly in Australian Dollars (AUD). Cancel anytime. No hidden registration fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {[
                {
                  id: "aud-starter",
                  title: "Starter",
                  price: "45",
                  features: [
                    "3 Classes / Week",
                    "30 Minutes sessions",
                    "One-on-One classes",
                    "Male / Female Tutors",
                    "Basic Tajweed & Qaida",
                    "Flexible scheduling"
                  ],
                  isPopular: false,
                  ctaText: "Book Free Trial"
                },
                {
                  id: "aud-standard",
                  title: "Standard",
                  price: "60",
                  features: [
                    "5 Classes / Week",
                    "30 Minutes sessions",
                    "One-on-One classes",
                    "Male / Female Tutors",
                    "Advanced Tajweed rules",
                    "Islamic Studies & Duas included",
                    "Monthly Progress reports"
                  ],
                  isPopular: true,
                  ctaText: "Book Free Trial"
                },
                {
                  id: "aud-premium",
                  title: "Premium",
                  price: "75",
                  features: [
                    "Daily Classes (7/week)",
                    "30 Minutes sessions",
                    "One-on-One classes",
                    "Male / Female Tutors",
                    "Customized Hifz program",
                    "Quran Translation & Tafseer",
                    "Direct teacher messaging",
                    "Priority scheduling & support"
                  ],
                  isPopular: false,
                  ctaText: "Book Free Trial"
                }
              ].map((plan) => (
                <div
                  key={plan.id}
                  className={`glass rounded-3xl border-card-border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.isPopular 
                      ? 'ring-2 ring-primary bg-primary/[0.03] md:scale-105 shadow-xl shadow-primary/10 md:z-10' 
                      : 'hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1'
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{plan.title}</h3>
                    <div className="flex items-baseline mt-4 mb-6">
                      <span className="text-4xl sm:text-5xl font-extrabold text-foreground">${plan.price} AUD</span>
                      <span className="text-sm text-muted-text ml-2">/ Month</span>
                    </div>
                    <div className="h-px bg-card-border w-full mb-6" />

                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Link
                      href="/book-free-trial"
                      className={`flex items-center justify-center w-full py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                        plan.isPopular
                          ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'
                          : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                      }`}
                    >
                      {plan.ctaText}
                    </Link>
                    <p className="text-[10px] text-center text-muted-text mt-3">Cancel anytime. 7-day money-back guarantee.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: FAQ Section */}
        <section className="py-20 border-t border-card-border bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">FAQs</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Common Questions About Online Quran Classes
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
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Closing CTA Banner */}
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative glass border border-primary/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden bg-primary/5 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Begin Your Online Quran Classes Today
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Connect with patient, verified scholars tailored to your family's language and cultural background. Book your free trial class today.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/book-free-trial"
                  className="flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
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
