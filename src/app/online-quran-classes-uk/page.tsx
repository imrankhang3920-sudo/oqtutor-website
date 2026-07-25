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
    title: "Online Quran Classes UK | One-to-One Vetted Tutors – OQTutor",
    description: "Enroll in private online Quran classes UK with DBS-checked male & female tutors. Flexible UK timetables (GMT/BST), one-on-one sessions, free trial.",
    alternates: {
      canonical: "https://www.oqtutor.com/online-quran-classes-uk",
    },
    openGraph: {
      url: "https://www.oqtutor.com/online-quran-classes-uk",
    },
  };
}

export default async function UKQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Custom Hero Data matching UK requirements (intro: ~120 words)
  const customHeroData = {
    title: "Online Quran Classes UK",
    subtitle: "Are you looking for professional, structured Online Quran Classes UK? At OQTutor, we understand the unique scheduling challenges that Muslim families face in the United Kingdom. Balancing state school timetables, after-school activities, and GMT/BST seasonal shifts can make attending a local mosque difficult. That is why our one-to-one classes are designed with maximum scheduling flexibility in mind. We offer custom sessions taught by certified male and female scholars directly from your home. Whether you are seeking basic recitation guides or advanced Tajweed programs, our courses provide a tailored experience that fits naturally into your family's weekly routine without any compromise.",
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
        "name": "Can we book a free trial class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a completely free trial lesson so you can experience our one-to-one teaching style, evaluate the virtual classroom, and get to know your tutor before starting a paid plan."
        }
      },
      {
        "@type": "Question",
        "name": "What is the recommended starting age for kids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend starting kids around age 4 or 5, beginning with Noorani Qaida to learn letter shapes and correct articulation in a fun, child-friendly format."
        }
      },
      {
        "@type": "Question",
        "name": "Are the tutors DBS-checked or vetted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Safeguarding is our top priority. All our tutors are thoroughly interviewed, identity-verified, and vetted (equivalent to standard DBS safeguarding checks) to ensure they are safe and qualified to teach children."
        }
      },
      {
        "@type": "Question",
        "name": "How much do monthly classes cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our plans start at $30/month for 3 weekly classes. Standard plans with 5 weekly classes are $40/month, and premium daily plans are $50/month. Families can also avail sibling discounts."
        }
      },
      {
        "@type": "Question",
        "name": "Are Tajweed and Hifz courses available in the UK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer fully structured courses in Tajweed sciences, Quran memorization (Hifz), fluent recitation, and basic Islamic studies, customized to each student's pace."
        }
      },
      {
        "@type": "Question",
        "name": "Are the UK Quran classes group-based or one-to-one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All classes are strictly one-to-one. This guarantees your child gets the tutor's undivided attention, allowing them to correct pronunciation in real-time."
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

        {/* Section 1: How it Works (DBS Vetted Tutors) */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/uk-locations-1.png"
                      alt="Online Quran Classes UK - Boy learning on laptop with tutor"
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
                  Safeguarding &amp; Setup
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  How Online Quran Classes Work for UK Families
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Starting your journey with OQTutor is simple and built around the safety of your home. First, book a free trial session to match with one of our certified teachers. We select tutors who fit your target scheduling window and study goals. All sessions take place in our interactive, one-to-one virtual classroom, allowing real-time video, audio, and digital board sharing.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  As part of our commitment to trust and family peace of mind, all OQTutor instructors are thoroughly vetted and go through background vetting (equivalent to standard DBS checks in the UK). This ensures a secure, respectful, and highly professional environment for children and adults alike.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Courses Available */}
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

        {/* Section 3: Kids Classes */}
        <section className="py-16 md:py-24 border-t border-card-border bg-background relative">
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text Column */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Primary &amp; Secondary Age
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes for Kids in the UK
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our lessons are customized for children, with engaging, visual methods that keep young minds focused. We recognize that school schedules in the UK are structured. Our platform allows you to schedule sessions after school or on weekends, with the flexibility to pause or adapt schedules during school terms, half-terms, and summer holidays.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  To keep you involved, parents receive periodic visibility summaries and progress reports detailing pronunciation accuracy, Surahs covered, and next steps in their child's curriculum. This ensures continuous learning in a safe, transparent online framework.
                </p>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/uk-locations-2.png"
                      alt="Best online Quran classes for kids UK - Student recitation check"
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

        {/* Section 4: Adults Classes */}
        <section className="py-16 md:py-24 border-t border-card-border bg-foreground/[0.005] relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Image Column */}
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/uk-locations-3.png"
                      alt="Online Quran classes for adults UK - Family learning session"
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
                  Flexible Hours
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes for Adults in the UK
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  It is never too late to refine your recitation or start learning the Quran. Our adult program caters specifically to busy professionals and university students who require evening or weekend classes. We adapt to your work patterns, allowing you to reschedule lessons with ease when work commitments shift.
                </p>
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our tutors maintain a patient, beginner-friendly tone, guiding you step-by-step through articulation rules without pressure. Whether you are learning basic Arabic spelling or mastering complex classical recitation rules, our private lessons move at your preferred speed.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5: Fees & Plans (Dynamic Pricing) */}
        <section className="py-20 border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Clear Pricing</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Online Quran Classes UK Fees
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-sm text-muted-text max-w-xl mx-auto">
                No contract, cancel anytime. Real prices dynamically fetched from our database. Plans are billed in USD (approximate GBP equivalents provided below).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
              {dbData.pricing.map((plan) => {
                const approxGbp = plan.price === "30" ? "24" : plan.price === "40" ? "32" : "40";
                return (
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
                      <div className="flex items-baseline mt-4 mb-1">
                        <span className="text-4xl sm:text-5xl font-extrabold text-foreground">${plan.price}</span>
                        <span className="text-sm text-muted-text ml-2">/ {plan.frequency}</span>
                      </div>
                      <span className="text-xs text-secondary font-medium block mb-6">
                        (Approx. £{approxGbp} / month)
                      </span>
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
                        href="/contact"
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
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Why Choose OQTutor */}
        <section className="py-16 md:py-24 bg-foreground/[0.01] border-t border-card-border relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Benefits</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
                Why UK Muslim Families Choose Our Tutors
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">DBS-Checked &amp; Vetted</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Safeguarding is built into our core process. Every scholar is background-verified, identity-checked, and trained in digital child protection.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">1-on-1 Undivided Focus</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  No group distractions or peer pressure. Tutors devote 100% of their attention to correct pronunciation issues, speeding up the learning curve.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">GMT/BST Timetabling</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Our scheduling panel aligns with London local time, letting you easily set, reschedule, or pause lessons directly through our dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Section 8: FAQ Section */}
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

        {/* Section 9: Closing CTA Banner */}
        <section className="py-12 md:py-16 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="relative glass border border-primary/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden bg-primary/5 shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
                Begin Your Online Quran Classes Today
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Experience the OQTutor advantage with a free one-to-one session. Give your family access to DBS-checked scholars and structured schedules.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
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
