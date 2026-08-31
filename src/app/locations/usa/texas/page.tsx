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
    title: "Online Quran Classes for Kids in Texas | Free Trial | OQTutor",
    description: "Learn Quran online in Texas with OQTutor. Certified male & female tutors offering live 1-on-1 Noorani Qaida, Tajweed, and Hifz classes for kids. Try it free!",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/usa/texas",
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/usa/texas",
      title: "Online Quran Classes for Kids in Texas | Free Trial | OQTutor",
      description: "Learn Quran online in Texas with OQTutor. Certified male & female tutors offering live 1-on-1 Noorani Qaida, Tajweed, and Hifz classes for kids. Try it free!",
      images: [
        {
          url: "https://www.oqtutor.com/logo.jpg",
          width: 1200,
          height: 630,
          alt: "OQTutor Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Online Quran Classes for Kids in Texas | Free Trial | OQTutor",
      description: "Learn Quran online in Texas with OQTutor. Certified male & female tutors offering live 1-on-1 Noorani Qaida, Tajweed, and Hifz classes for kids. Try it free!",
      images: ["https://www.oqtutor.com/logo.jpg"],
    },
  };
}

function LocalStatsBar() {
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

export default async function TexasQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const customHeroData = {
    title: "Online Quran Classes for Muslim Children in Texas",
    subtitle: "Help your child build a lifelong, authentic bond with the Holy Quran. OQTutor connects Muslim families across Texas with certified, patient Quran teachers for private 1-on-1 online classes. Whether starting with the basics of Noorani Qaida, perfecting recitation with Tajweed rules, or memorizing selected Surahs, our flexible digital classrooms fit easily around school commitments, homework routines, and busy family timetables. Start learning today with our 3-day free trial classes.",
    ctaText: "Book 3 Free Trial Classes",
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
        "name": "What should I look for in an online Quran class for kids in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Parents should prioritize online Quran classes that feature fully certified and vetted teachers, a focused 1-on-1 learning model, customized pacing, and interactive screen-sharing tools. Regular monthly progress tracking and a transparent free trial are also vital to ensure the class matches your child's age, attention span, and current learning stage."
        }
      },
      {
        "@type": "Question",
        "name": "Where can my child learn Quran online in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your child can learn the Quran online from the comfort of home through OQTutor. We offer private, live 1-on-1 Quran classes accessible across the entire state of Texas. Our structured virtual portal provides face-to-face interaction with certified male and female Quran instructors, eliminating the need to commute to a local Islamic center."
        }
      },
      {
        "@type": "Question",
        "name": "Can children learn Quran with Tajweed online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, children can learn Quran with Tajweed online very effectively. In our one-on-one virtual classroom, the tutor focuses entirely on one child's pronunciation. Using real-time audio and interactive whiteboards, the teacher can instantly correct minor mistakes in articulation points (Makharij) and recitation rules, helping the child build clean habits from the start."
        }
      },
      {
        "@type": "Question",
        "name": "Are online Quran classes suitable for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our program is designed for beginners of all ages, starting with children as young as 4 to 5. We begin with the basic Noorani Qaida curriculum, teaching students how to recognize Arabic letters, read short vowel marks, and blend words step-by-step using interactive, child-friendly color keys and encouragement."
        }
      },
      {
        "@type": "Question",
        "name": "Can I choose a female Quran teacher for my daughter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. OQTutor understands the importance of comfort and modesty for Muslim families. We provide a dedicated team of certified female Quran teachers for girls, young children, and adult sisters, ensuring a secure, supportive, and private online learning environment."
        }
      },
      {
        "@type": "Question",
        "name": "How much do online Quran classes cost in Texas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online Quran class costs vary depending on the frequency of lessons you choose each week. OQTutor provides highly competitive, affordable monthly subscription tiers with no hidden fees and no long-term contracts. You can easily start with our 3-day free trial to evaluate our portal and teaching style before selecting a package."
        }
      },
      {
        "@type": "Question",
        "name": "Can my child attend Quran classes after school?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, school-going kids can attend Quran classes after school. OQTutor operates 24/7, allowing parents in Texas to select convenient time slots in the late afternoon, evening, or weekend that fit naturally around homework, school routines, and family activities."
        }
      },
      {
        "@type": "Question",
        "name": "Does OQTutor offer a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, OQTutor offers 3 trial classes completely free of charge. The trial requires no credit card details and carries no long-term commitment, letting your child experience our live 1-on-1 virtual portal and meet their matched Quran teacher risk-free."
        }
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
        "name": "USA",
        "item": "https://www.oqtutor.com/locations/usa"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Texas",
        "item": "https://www.oqtutor.com/locations/usa/texas"
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OQTutor",
    "url": "https://www.oqtutor.com",
    "logo": "https://www.oqtutor.com/logo.jpg",
    "image": "https://www.oqtutor.com/logo.jpg",
    "description": "OQTutor is a premier online Quran academy providing personalized 1-on-1 Quran classes with certified male and female tutors.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": dbData.contact?.phone || "+12487826565",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Arabic", "Urdu"]
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

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        <Hero data={customHeroData} />
        <LocalStatsBar />

        {/* Section 1: Why Choose Online Quran Classes for Kids in Texas */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Modern Religious Education
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Why Choose Online Quran Classes for Kids in Texas?
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    Passionate Muslim parents in Texas understand how crucial <Link href="/courses/islamic-studies" className="text-primary font-semibold hover:underline">structured Islamic education</Link> is during a child's formative years. However, finding the right local options can be difficult. Driving to a physical Islamic center or a tutor's home after a long school day drains valuable time, causes transport stress, and creates scheduling conflicts with school projects, sports, or family commitments. Read our comprehensive guide on <Link href="/blog/online-quran-classes-texas" className="text-primary font-semibold hover:underline">online Quran classes in Texas for busy families</Link>.
                  </p>
                  <p>
                    Choosing <Link href="/locations/usa" className="text-primary font-semibold hover:underline">online Quran classes</Link> removes these geographic and time limitations. Your children can learn the Holy Quran from home without needing a local center. By utilizing an interactive digital portal, students connect live with a <Link href="/tutors" className="text-primary font-semibold hover:underline">qualified tutor</Link> who dedicates their full attention to <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">correct recitation</Link>.
                  </p>
                  <p>
                    Furthermore, parents remain in complete control. There is no travel across town, and lessons fit comfortably around your family's routine. Tutors adapt each session to match the child's initial learning level, keeping lessons engaging, encouraging, and highly interactive.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/online-quran-lessons-texas-boy.jpg"
                      alt="A young Muslim boy in Texas wearing a kufi, reading the Quran from a wooden book holder during his online session"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What to Look for in an Online Quran Class in Texas */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Evaluation Guidelines
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                What to Look for in an Online Quran Class in Texas
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base text-muted-text">
                Parents evaluating different online Quran academies should focus on structured criteria to ensure a high-quality learning environment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Vetted & Certified Teachers</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Always verify that the academy employs certified tutors who hold recognized credentials (such as an Ijazah in Tajweed) and have extensive experience instructing young children.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">One-on-One Class Format</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Group classes often cause children to pick up incorrect habits or lose focus. Private, 1-on-1 classes allow the tutor to address your child's specific mistakes instantly.
                  </p>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="p-3.5 bg-primary/10 text-primary w-fit rounded-2xl mb-6">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Progress Tracking & Safety</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    Look for structured lesson logs, monthly reports for parents, monitored virtual classrooms, and the availability of male and female teachers to ensure comfort and privacy.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                href="/book-free-trial" 
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                <span>Book 3 Free Trial Classes</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: Tajweed, Noorani Qaida, Reading, and Memorization */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Our Programs
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Tajweed, Noorani Qaida, Reading, and Memorization
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base text-muted-text">
                OQTutor provides a comprehensive Islamic curriculum tailored to each child's current development level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Noorani Qaida */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Noorani Qaida</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    The foundational course teaching the basic Arabic alphabet, vowel signs, and correct letter connections. Mastering Noorani Qaida online builds the phonetic foundation for fluent Quran reading.
                  </p>
                </div>
                <Link href="/courses/noorani-qaida" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Learn Qaida Rules</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Quran Reading */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Quran Reading</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    Fluency training focused on helping students transition from basic letters to reading full verses directly from the Mushaf. We emphasize developing a steady recitation pace and rhythm.
                  </p>
                </div>
                <Link href="/courses/quran-reading" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Reading Course</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Quran with Tajweed */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Quran with Tajweed</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    Recitation rules that govern nasalization, elongation, stops, and correct articulation points (Makharij). Studying Tajweed online ensures students recite the Quran exactly as it was revealed.
                  </p>
                </div>
                <Link href="/courses/tajweed" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>View Tajweed Classes</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Hifz (Memorization) */}
              <div className="glass p-6 rounded-3xl border-card-border hover:border-primary/20 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Quran Memorization</h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    A personalized Hifz program pairing students with certified Huffaz to memorize selected Surahs or the whole Quran. Regular revision cycles help retain memorized verses.
                  </p>
                </div>
                <Link href="/courses/hifz" className="text-xs font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center space-x-1 mt-2">
                  <span>Explore Hifz Program</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Online Quran Classes with Male and Female Tutors */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/online-quran-classes-texas-girl.jpg"
                      alt="A young Muslim girl in Texas attending a live 1-on-1 online Quran class with a female tutor on a laptop screen"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px]"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Personalized Learning Environments
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes with Male and Female Teachers
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  <p>
                    Every child learns differently, and comfortable study environments are central to educational success. We recognize that parents in Texas have specific preferences for their children's tutors. For young girls, adult sisters, and young children, we offer a dedicated selection of certified <Link href="/courses/female-quran-teacher" className="text-primary font-semibold hover:underline">female Quran teachers</Link>.
                  </p>
                  <p>
                    Our female tutors are highly trained in digital teaching techniques, hold recognized qualifications in Islamic Studies, and provide encouraging, patient guidance. Similarly, qualified male tutors are available for young boys and brothers, ensuring appropriate, supportive mentorship.
                  </p>
                  <p>
                    Choosing the right teacher allows students to build confidence quickly. Tutors interact directly via live video, adapting their speaking speed and approach to suit the student's learning style.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Flexible Online Quran Classes for Busy Texas Families */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Convenience & Scheduling
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Flexible Online Quran Classes for Busy Texas Families
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                <p>
                  Between school schedules, homework, sports, and family commitments, balancing extracurricular activities can feel overwhelming. OQTutor solves scheduling problems by operating around the clock. Whether you need early morning classes before school, mid-afternoon slots, or evening sessions after prayer times, we have available classes that fit. Learn more about how we arrange sessions on our <Link href="/how-it-works" className="text-primary font-semibold hover:underline">how it works page</Link>.
                </p>
                <p>
                  Unlike traditional Islamic centers that operate on fixed schedules, <Link href="/locations/usa" className="text-primary font-semibold hover:underline">online Quran classes</Link> can be rescheduled easily with advance notice. This flexibility ensures that children never miss out on their Quranic education due to travel or seasonal routine shifts, keeping their progress steady throughout the year.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: How Do Online Quran Classes Work for Children in Texas? */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Simple Setup
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                How Do Online Quran Classes Work for Children in Texas?
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Book a Free Trial", desc: "Register on our platform without credit card details. We will match you with a tutor based on your schedule." },
                { step: "2", title: "Select a Teacher", desc: "Attend trial lessons and select a male or female teacher who best matches your child's learning speed." },
                { step: "3", title: "Choose a Schedule", desc: "Determine your preferred weekly class frequency and pick timings that coordinate with school activities." },
                { step: "4", title: "Attend Live Classes", desc: "Connect face-to-face via our secure digital classroom, utilizing interactive whiteboards and translation tools." },
                { step: "5", title: "Practice & Homework", desc: "Practice assigned chapters between lessons to build fluency and reinforce correct articulation rules." },
                { step: "6", title: "Track Real Progress", desc: "Receive detailed monthly progress reports detailing attendance, homework, and pronunciation milestones." }
              ].map((item, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div>
                    <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-sm mb-6 font-sans">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: How to Find the Right Online Quran Teacher in Texas */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Tutor Selection
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How to Find the Right Online Quran Teacher in Texas
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                <p>
                  Selecting the right instructor is critical to building a positive relationship between your child and the Holy Quran. Parents looking for an <Link href="/tutors" className="text-primary font-semibold hover:underline">online tutor</Link> should look beyond basic memorization. An excellent teacher must possess extensive <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed knowledge</Link>, hold certified qualifications (Ijazah), and have experience teaching children.
                </p>
                <p>
                  Patience is equally important. Teaching Arabic phonetics remotely requires constant encouragement, clear explanations, and friendly, patient correction of pronunciation errors. Ensure the tutor provides transparent progress feedback after each lesson, allowing you to monitor development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Affordable Online Quran Classes for Families in Texas */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Pricing & Value
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Affordable Online Quran Classes for Families in Texas
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                <p>
                  High-quality religious education should be accessible to every family. We provide competitive, transparent <Link href="/pricing" className="text-primary font-semibold hover:underline">monthly tiers</Link> structured around the number of sessions and study duration you choose. With no long-term contracts and no hidden registration costs, parents can manage their subscriptions flexibly.
                </p>
                <p>
                  Our classes provide outstanding value by eliminating travel expenses and providing private 1-on-1 instruction. We encourage parents to register for our <Link href="/book-free-trial" className="text-primary font-semibold hover:underline">3-day free trial</Link>, letting your family test our portal and check teacher match quality before subscribing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Dedicated to Muslim Communities Across the Lone Star State */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Texas-Wide Coverage
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                  Online Quran Classes Across Texas
                </h2>
                <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our digital tutoring academy serves Muslim families residing throughout the entire state of Texas. Whether you live in major urban areas like Houston, Dallas, Austin, San Antonio, Fort Worth, Plano, Arlington, Frisco, Sugar Land, Katy, McKinney, or Irving, your children can learn the Quran online from the comfort of home. By connecting students directly with qualified instructors online, we make it simple for Texas families to maintain consistent Islamic studies and correct recitation skills, regardless of their location or proximity to physical centers.
                </p>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                    <Image
                      src="/quran-study-texas.jpg"
                      alt="An open Holy Quran with a white flower on a serene background, representing peaceful Quran study from home"
                      width={450}
                      height={350}
                      className="w-full rounded-2xl object-cover h-[320px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Why One-on-One Quran Classes Can Help Children Learn Better */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Pedagogical Benefits
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Why One-on-One Quran Classes Can Help Children Learn Better
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                <p>
                  In a group classroom, a teacher must divide their attention among ten or twenty students. In contrast, our private <Link href="/how-it-works" className="text-primary font-semibold hover:underline">one-on-one sessions</Link> ensure the tutor focuses entirely on a single child. This layout prevents children from picking up incorrect pronunciation habits and allows the tutor to address errors immediately.
                </p>
                <p>
                  Private sessions also build greater confidence. Shy students feel comfortable asking questions, trying complex pronunciations, and repeating lessons until they achieve complete mastery. This focused guidance helps children learn up to three times faster than in standard group environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: How Parents Can Keep Children Motivated to Learn Quran Online */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Parental Guidance
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                How Parents Can Keep Children Motivated to Learn Quran Online
              </h2>
              <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />
              <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                <p>
                  Parental involvement plays a key role in online learning success. Parents can maintain <Link href="/blog/tips-keep-kids-motivated-online-quran" className="text-primary font-semibold hover:underline">motivation</Link> by establishing a consistent class routine and creating a quiet, distraction-free study space. Celebrate small achievements, such as memorizing a new Surah or mastering a complex Tajweed rule.
                </p>
                <p>
                  Encourage short, daily revision sessions instead of long cramming periods. Most importantly, keep practice positive and patient, connecting lessons to everyday Islamic values and showing interest in what your child learns in each session. Find more tips for parents on our <Link href="/blog" className="text-primary font-semibold hover:underline">educational blog</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 border-t border-card-border mb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center relative overflow-hidden">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Start Online Quran Classes for Your Child in Texas</h2>
              <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
                Give your family the gift of structured, 1-on-1 Quranic education. Join busy Texas families who trust OQTutor for personalized Noorani Qaida, Tajweed, Quran Reading, and Hifz classes. Book your 3-day free trial today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all w-full sm:w-auto"
                >
                  Book Your Free Trial Class
                </Link>
                <Link
                  href="/tutors"
                  className="px-8 py-3.5 rounded-full glass border-card-border hover:bg-foreground/5 text-foreground text-xs font-bold uppercase tracking-wider transition-all w-full sm:w-auto"
                >
                  Find a Quran Teacher
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides for Texas Muslim Families */}
        <section className="py-16 border-t border-card-border/40 bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Parent Resources
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Recommended Texas &amp; US Quran Learning Guides
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Link
                href="/blog/online-quran-classes-texas"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-wider px-2.5 py-1 bg-primary/10 rounded-full inline-block">
                    Texas Guide
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    Online Quran Classes in Texas: A Real Guide for Busy Families
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    How families in Houston, Dallas, Austin, and San Antonio fit 1-on-1 Quran lessons into busy routines without long drives.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/what-us-parents-should-know-before-choosing-an-online-quran-tutor"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider px-2.5 py-1 bg-secondary/10 rounded-full inline-block">
                    Parenting Guide
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    What US Parents Should Know Before Choosing an Online Quran Tutor
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Credentials, trial class evaluation checklists, and key questions to ask before hiring an online Quran tutor.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link
                href="/blog/online-quran-classes-in-the-usa-for-kids-and-adults"
                className="group glass p-6 rounded-3xl border border-card-border hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider px-2.5 py-1 bg-emerald-500/10 rounded-full inline-block">
                    Curriculum Overview
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    Online Quran Classes in the USA for Kids and Adults
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Comprehensive overview of Noorani Qaida, Tajweed, and Hifz tracks for students of all ages across the United States.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-card-border/60 text-xs font-semibold text-primary inline-flex items-center">
                  <span>Read Guide</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                FAQ
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqSchema.mainEntity.map((item, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-card-border/60">
                  <h4 className="font-bold text-sm sm:text-base text-foreground font-sans mb-2">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    {idx === 0 ? (
                      <>
                        Parents should prioritize online Quran classes that feature fully certified and vetted teachers, a focused 1-on-1 learning model, customized pacing, and interactive screen-sharing tools. Regular monthly progress tracking and a transparent{" "}
                        <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">free trial</Link>{" "}
                        are also vital to ensure the class matches your child's age, attention span, and current learning stage.
                      </>
                    ) : idx === 1 ? (
                      <>
                        Your child can learn the Quran online from the comfort of home through OQTutor. We offer private, live 1-on-1 Quran classes accessible across the entire state of Texas. Our structured virtual portal provides face-to-face interaction with certified male and female Quran instructors, eliminating the need to commute to a local Islamic center.
                      </>
                    ) : idx === 2 ? (
                      <>
                        Yes, children can learn Quran with Tajweed online very effectively. In our one-on-one virtual classroom, the tutor focuses entirely on one child's pronunciation. Using real-time audio and interactive whiteboards, the teacher can instantly correct minor mistakes in articulation points (Makharij) and recitation rules, helping the child build clean habits from the start. You can learn more about our specific rules on our dedicated{" "}
                        <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed course page</Link>.
                      </>
                    ) : idx === 3 ? (
                      <>
                        Absolutely. Our program is designed for beginners of all ages, starting with children as young as 4 to 5. We begin with the basic{" "}
                        <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida online</Link>{" "}
                        curriculum, teaching students how to recognize Arabic letters, read short vowel marks, and blend words step-by-step using interactive, child-friendly color keys and encouragement.
                      </>
                    ) : idx === 4 ? (
                      <>
                        Yes. OQTutor understands the importance of comfort and modesty for Muslim families. We provide a dedicated team of certified{" "}
                        <Link href="/courses/female-quran-teacher" className="text-primary hover:underline font-semibold">female Quran teachers</Link>{" "}
                        for girls, young children, and adult sisters, ensuring a secure, supportive, and private online learning environment.
                      </>
                    ) : idx === 5 ? (
                      <>
                        Online Quran class costs vary depending on the frequency of lessons you choose each week. OQTutor provides highly competitive, affordable monthly subscription tiers with no hidden fees and no long-term contracts. You can easily start with our 3-day free trial to evaluate our portal and teaching style before selecting a package.
                      </>
                    ) : idx === 6 ? (
                      <>
                        Yes, school-going kids can attend Quran classes after school. OQTutor operates 24/7, allowing parents in Texas to select convenient time slots in the late afternoon, evening, or weekend that fit naturally around homework, school routines, and family activities.
                      </>
                    ) : (
                      <>
                        Yes, OQTutor offers 3 trial classes completely free of charge. The trial requires no credit card details and carries no long-term commitment, letting your child experience our live 1-on-1 virtual portal and meet their matched Quran teacher risk-free.
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
