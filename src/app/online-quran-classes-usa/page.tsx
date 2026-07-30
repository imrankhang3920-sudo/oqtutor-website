import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import USAFaqAccordion from '@/components/USAFaqAccordion';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Online Quran Classes in USA | Certified Tutors | OQTutor",
    description: "Join OQTutor for one-to-one online Quran classes in the USA. Study Noorani Qaida, Tajweed, Hifz, and Islamic Studies with certified tutors at flexible USA timings. Book your free 3-day trial today.",
    alternates: {
      canonical: "https://www.oqtutor.com/online-quran-classes-usa",
    },
    openGraph: {
      url: "https://www.oqtutor.com/online-quran-classes-usa",
    },
  };
}

export default async function USAQuranClassesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Custom Hero Data matching USA specs to avoid duplicates
  const customHeroData = {
    title: "Online Quran Academy USA: 1-on-1 Live Classes with Certified Tutors",
    subtitle: "Connect your household with certified male and female Quran tutors in the United States. We offer interactive, one-to-one online classes tailored around your children's school schedule and active family routines. Learn Noorani Qaida, master Tajweed rules, or start Hifz memorization with flexible US class timings (EST, CST, MST, PST) and a 3-day free trial class.",
    ctaText: "Book Free Trial",
    ctaLink: "/book-free-trial",
    whatsappText: dbData.hero.whatsappText,
    whatsappNumber: dbData.hero.whatsappNumber,
    backgroundImage: dbData.hero.backgroundImage || "/hero-bg.jpg",
  };

  // Structured FAQ Schema for the 15 USA Quran Class FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do online Quran classes work in the USA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Online Quran Classes USA work through a highly secure, interactive virtual portal that brings private 1-on-1 classrooms directly to your home. When you register, you are matched with a certified Online Quran Tutor USA who conducts live, interactive sessions using HD video, clear audio, and digital whiteboards. Students and teachers can read from the same digital Quran pages, annotate text, and interact in real-time. This virtual setup eliminates the need for daily commuting to physical Islamic centers, allowing your family to study from home with absolute safety and comfort. Each class is adapted to the student's unique learning speed."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free trial class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a risk-free Free Trial Quran Class spanning three consecutive days to let families experience our teaching style before subscribing. During this free trial, you will be paired with a certified male or female tutor who will assess your current reading level (whether you are starting from Noorani Qaida basics or advanced Tajweed rules). The tutor demonstrates how our interactive software functions, sets initial educational goals, and customizes a syllabus. There is absolutely no credit card required to register for the trial sessions, and you are under no commitment to continue if it is not the perfect fit for your child."
        }
      },
      {
        "@type": "Question",
        "name": "Are female Quran tutors available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, OQTutor has a large pool of certified and highly experienced Female Quran Tutors available for young kids and sisters. We understand that modesty, privacy, and personal comfort are essential for many families in the USA. Our female tutors hold verified Islamic degrees, possess deep expertise in teaching Noorani Qaida and Tajweed rules, and are fluent in English. They build a patient, caring, and encouraging virtual learning environment, ensuring sisters and young children can ask questions and correct their pronunciation with absolute ease and confidence."
        }
      },
      {
        "@type": "Question",
        "name": "What age can children start Quran classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Children can start their learning journey at our academy around the age of 4 to 5 years. For young learners, our Quran Classes for Kids are designed to be engaging, visual, and fun. Tutors use colorful resources and interactive games to teach the fundamentals of Noorani Qaida, ensuring kids learn letter recognition and correct pronunciation (Makhraj) without feeling overwhelmed. Tutors keep these initial sessions short and friendly, focusing on building a positive, long-term relationship with the Holy Quran, while parents receive regular progress reports to follow their child's improvements."
        }
      },
      {
        "@type": "Question",
        "name": "How long is each class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each session in our One-to-One Quran Classes typically lasts 30 minutes. Through years of teaching experience, we have found that 30 minutes is the optimal duration for students, especially children, to maintain focus and retain information without feeling exhausted. For advanced adult students or those enrolled in our intensive Hifz memorization course, we offer customized options to extend sessions to 45 or 60 minutes based on their learning capacity and schedule. The one-on-one setup ensures that not a single minute is wasted on group distractions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you teach adults as well as children?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive programs for adult learners of all levels, alongside our popular Quran Classes for Kids. Whether you are a beginner looking to read the Quran fluently, an adult wanting to master advanced Tajweed rules, or a busy professional who wishes to start Hifz memorization, we customize our lessons for you. We provide flexible schedules to fit your university or work routine. Sisters can study in absolute privacy with our certified Female Quran Tutors, while brothers can select from qualified male scholars."
        }
      },
      {
        "@type": "Question",
        "name": "Which US time zones do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support all time zones across the United States, including Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) times. Since OQTutor operates 24 hours a day, 7 days a week, you can easily schedule your One-to-One Quran Classes at any time that suits your routine. Whether you prefer early morning sessions before school or work, late evening slots, or dedicated weekend timings, our scheduling system adapts to your calendar. You can also easily manage and reschedule classes through our parental dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "What courses do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our online academy offers a complete range of programs tailored for all age groups. Our core offerings include: (1) Foundational Noorani Qaida for absolute beginners, (2) Fluent Quran Reading with correct pronunciation, (3) Online Tajweed Classes to perfect recitation flow, (4) Structured Hifz program for memorizing the Quran, and (5) Islamic Studies covering basic Fiqh, Duas, Wudu, and Salah. We also provide classical Arabic language classes. You can experience any of these courses by booking a risk-free Free Trial Quran Class today."
        }
      },
      {
        "@type": "Question",
        "name": "Can beginners learn Noorani Qaida online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolute beginners of all ages can easily learn Noorani Qaida online through our platform. Our introductory course is specifically structured to teach the Arabic alphabet, letter shapes, compound connections, and articulation points from scratch. Our certified Online Quran Tutor USA utilizes interactive whiteboards and visual aids to make letter shapes clear and memorable. Completing this foundational course is essential, as it prepares students to read the actual Quranic text with speed, accuracy, and correct pronunciation rules."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide Tajweed classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide highly specialized online Tajweed classes for kids and adults. Tajweed ensures the correct pronunciation and articulation of Arabic words, which is a spiritual obligation when reciting the Quran. Our tutors guide you through rules of stops, nasalization (Ghunnah), extensions (Madd), and pronunciation qualities (Sifat). In our One-to-One Quran Classes, the tutor listens closely to your recitation and provides immediate, private corrections, helping you master the rules and recite beautifully."
        }
      },
      {
        "@type": "Question",
        "name": "Is Hifz available online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a highly structured online Hifz (Quran memorization) program led by certified Huffaz. The tutor designs a personalized memorization path matching the student's capacity. Each session involves memorizing new verses (Sabaq), reviewing recently memorized lines (Sabqi), and revising older parts (Manzil) to ensure retention. With 1-on-1 guidance, the tutor ensures that memorization is done with correct Tajweed rules, providing regular feedback to help you commit the verses to memory permanently."
        }
      },
      {
        "@type": "Question",
        "name": "How do parents track their child's progress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We prioritize transparency and active parent involvement. Through our secure portal dashboard, parents can monitor daily attendance records, view lesson summaries, and read specific teacher comments after every session. At the end of every month, we compile a comprehensive progress report summarizing the child's advancements in Noorani Qaida, Tajweed pronunciation, or Hifz memorization. This ensures parents stay fully informed of their child's performance and can encourage their studies at home."
        }
      },
      {
        "@type": "Question",
        "name": "What technology is required for online classes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The technological requirements to join our Online Quran Classes USA are very minimal. You only need a stable high-speed internet connection and a device such as a laptop, desktop computer, tablet, or smartphone. We highly recommend using a working webcam and a pair of headphones with a built-in microphone to ensure clear, distraction-free audio communication between the student and the Online Quran Tutor USA. Our virtual portal is accessible directly through web browsers, meaning you do not need to download complex software."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book my first class?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking your first class is simple and takes less than two minutes. Go to our registration page or fill out the booking form on this page. Choose your preferred course, such as Noorani Qaida, Tajweed, or Islamic Studies, and specify whether you prefer a male or certified Female Quran Tutor. We will contact you via email or WhatsApp to schedule your 3-day Free Trial Quran Class at a time that fits your schedule."
        }
      },
      {
        "@type": "Question",
        "name": "Why should families choose OQTutor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Families choose OQTutor because we are a dedicated, premium online Quran academy focused on quality education, convenience, and safety. Unlike typical online schools, we offer personalized One-to-One Quran Classes where the teacher is 100% focused on one student. We recruit highly qualified scholars who hold official Ijazahs. With flexible timings across all US time zones, secure monitored portals, and dedicated female tutors, we provide a safe, convenient, and spiritually enriching environment for your entire household."
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
        {/* Reuse Hero component */}
        <Hero data={customHeroData} />

        {/* Detailed USA Quran Classes Sections */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          {/* Decorative backgrounds */}
          <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Text column */}
              <div className="lg:col-span-7 space-y-10">
                
                {/* Section 1 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Quran Classes for Children Aged 4–12 in the USA
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    Every child learns differently, which is why our online Quran classes for kids in USA are tailored by age and learning level. Younger children start with Noorani Qaida to build strong Arabic letter recognition and pronunciation, while older kids progress into Quran reading, <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed</Link>, and memorization (<Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Hifz</Link>). Each class is one-on-one, so your child gets the tutor's full attention every session.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Certified Female Quran Tutors for Kids in USA
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    Many American Muslim parents prefer a female tutor for their daughters. OQTutor offers <Link href="/tutors" className="text-primary hover:underline font-semibold">certified female Quran tutors</Link> experienced in teaching young girls Tajweed, Quran reading, and Islamic Studies in a comfortable, patient learning environment.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Flexible Class Timings for US Time Zones
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    We understand that families across the USA span multiple time zones — EST, CST, MST, and PST. Our tutors offer 24/7 scheduling, so you can book classes at a time that fits your child's school routine, whether that's after school, evenings, or weekends.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                    Tajweed and Quran Memorization (Hifz) for Beginners
                  </h2>
                  <div className="h-1 w-16 bg-secondary rounded-full" />
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                    Beyond basic reading, many parents in the USA want their children to master correct pronunciation (<Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed</Link>) or begin memorizing the Quran (<Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Hifz</Link>). Our structured curriculum guides children step by step, from foundational reading to advanced Tajweed rules and full Hifz memorization, with regular progress reports sent to parents.
                  </p>
                </div>

              </div>

              {/* Image & Highlights column */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8">
                {/* Image */}
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/about-boy.png"
                      alt="online Quran classes for kids in USA - child learning Quran on laptop"
                      width={450}
                      height={350}
                      loading="lazy"
                      className="w-full rounded-2xl object-contain h-[320px] md:h-[350px]"
                    />
                  </div>
                </div>

                {/* Key Benefits Card */}
                <div className="glass p-6 rounded-3xl border-card-border shadow-lg max-w-md w-full bg-foreground/[0.01]">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Why American Muslim Families Choose OQTutor
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "One-on-one live classes, not group sessions",
                      "Certified male and female tutors with Islamic Studies backgrounds",
                      "Interactive virtual classroom with video and audio",
                      "Personalized syllabus based on your child's pace",
                      "3 free trial classes before you commit",
                      "24/7 flexible scheduling across all US time zones"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-muted-text font-normal">
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* USA Accordion & Call To Action Block */}
        <USAFaqAccordion />

        {/* Contact Form */}
        <Contact data={dbData.contact} />
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
