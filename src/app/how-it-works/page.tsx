import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Calendar, Video, CheckCircle, ArrowRight, ShieldCheck, HeartHandshake, Laptop } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'How It Works | OQTutor - Online Quran Academy',
  description: 'Learn how OQTutor works. Get started with our one-to-one online Quran classes, Tajweed, Hifz, and Islamic studies in 3 simple steps. Book your free trial today.',
  keywords: ['how online quran classes work', 'learn quran online process', 'quran tutors trial class', 'oqtutor study steps'],
  alternates: {
    canonical: '/how-it-works',
  },
  openGraph: {
    url: '/how-it-works',
  },
};

export default async function HowItWorksPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const steps = [
    {
      number: '01',
      title: 'Book a 3-Day Free Trial',
      description: 'Fill out our simple trial registration form. Select your preferred class times, course (Noorani Qaida, Hifz, Tajweed, etc.), and choose between male or female certified tutors.',
      icon: Calendar,
      color: 'bg-primary/10 text-primary border-primary/20',
    },
    {
      number: '02',
      title: 'Attend the Evaluation Class',
      description: 'Meet your tutor in a 30-minute free trial session via Zoom or Skype. The tutor will assess your current level, understand your learning pace, and outline a tailored curriculum path.',
      icon: Video,
      color: 'bg-secondary/10 text-secondary border-secondary/20',
    },
    {
      number: '03',
      title: 'Select a Plan & Start Learning',
      description: 'If you are satisfied with the trial classes, select a subscription package matching your desired frequency (2, 3, or 5 days a week) and begin your regular custom sessions.',
      icon: BookOpen,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    },
  ];

  const benefits = [
    {
      title: '1-on-1 Personalized Lessons',
      description: 'Every class is private and tailored entirely to the student’s age, skill level, and individual speed of learning.',
      icon: Laptop,
    },
    {
      title: 'Certified Male & Female Tutors',
      description: 'All tutors are verified, highly qualified scholars with expertise in Tajweed, Hifz, Tafseer, and Arabic language.',
      icon: ShieldCheck,
    },
    {
      title: 'Flexible Timing (24/7 Availability)',
      description: 'Reschedule lessons easily to fit school, work, or family schedules. We operate globally to serve students worldwide.',
      icon: HeartHandshake,
    },
  ];

  const faqQuestions = [
    {
      question: 'How do online Quran classes work?',
      answer: 'Online Quran classes are 1-on-1 interactive video sessions conducted via Zoom or Skype. Students share their screen with the tutor, read Noorani Qaida or Quran, and receive real-time pronunciation correction (Tajweed) from certified teachers.'
    },
    {
      question: 'Is the trial class really free?',
      answer: 'Yes, OQTutor offers a 3-day evaluation trial class completely free of charge. No credit card details, upfront registration fees, or long-term commitments are required to begin the trial.'
    },
    {
      question: 'Can I choose a male or female tutor?',
      answer: 'Yes, parents and students can select their preferred tutor gender. We offer qualified, certified male and female Quran teachers fluent in English to accommodate every family\'s privacy and comfort preferences.'
    },
    {
      question: 'What if I don\'t like my tutor after the trial?',
      answer: 'If you are not comfortable with your assigned tutor, we will arrange a different tutor immediately. Our academic coordinators work closely with you to find the perfect match for your child.'
    }
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Start Online Quran Classes with OQTutor",
    "description": "Get started with our 1-on-1 online Quran classes in three simple steps. Learn Noorani Qaida, Tajweed, and Hifz from qualified tutors.",
    "step": [
      {
        "@type": "HowToStep",
        "url": "https://www.oqtutor.com/how-it-works#step-1",
        "name": "Book a 3-Day Free Trial",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Fill out our simple trial registration form. Select your preferred class times, course (Noorani Qaida, Hifz, Tajweed, etc.), and choose between male or female certified tutors."
          }
        ]
      },
      {
        "@type": "HowToStep",
        "url": "https://www.oqtutor.com/how-it-works#step-2",
        "name": "Attend the Evaluation Class",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Meet your tutor in a 30-minute free trial session via Zoom or Skype. The tutor will assess your current level, understand your learning pace, and outline a tailored curriculum path."
          }
        ]
      },
      {
        "@type": "HowToStep",
        "url": "https://www.oqtutor.com/how-it-works#step-3",
        "name": "Select a Plan & Start Learning",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "If you are satisfied with the trial classes, select a subscription package matching your desired frequency (2, 3, or 5 days a week) and begin your regular custom sessions."
          }
        ]
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqQuestions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />
      
      <main className="flex-grow py-16 md:py-24">
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h1 className="text-xs font-bold text-primary uppercase tracking-widest">Simplifying Online Learning</h1>
          <p className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            How It Works
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
            Starting your Quranic education path is simple and structured. OQTutor offers Online Quran Classes, Tajweed, Hifz, Tafseer, Arabic Language, and Islamic Studies for kids and adults worldwide. Follow these 3 easy steps to begin.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-lg relative flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300">
                  <div className="absolute top-6 right-8 text-5xl font-black text-foreground/[0.04] select-none">
                    {step.number}
                  </div>
                  
                  <div className={`p-4 rounded-2xl border w-fit ${step.color} mb-6`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal flex-grow">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Core Advantages */}
        <div className="bg-foreground/[0.01] border-y border-card-border py-16 md:py-24 mb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Why Choose Us</h2>
              <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground">
                Our Learning Advantages
              </p>
              <div className="h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                    <div className="p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 border-b border-card-border/60 mb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Frequently Asked Questions</h2>
              <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground">
                Common Questions About How It Works
              </p>
              <div className="h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
            </div>

            <div className="space-y-4">
              {faqQuestions.map((faq, idx) => (
                <details
                  key={idx}
                  className="group glass rounded-2xl border border-card-border/60 p-6 [&_summary::-webkit-details-marker]:hidden transition-all duration-300 open:border-primary/20"
                >
                  <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                    <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors pr-4">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 text-xs sm:text-sm text-muted-text leading-relaxed font-normal border-t border-card-border/40 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Container */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-8 -translate-y-8" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Ready to Start?
            </h2>
            <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
              Book your 3-Day Free Trial class today. No credit card is required, and there are absolutely no obligations. Give your family the opportunity to learn from the comfort of your home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/book-free-trial"
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 font-bold"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer data={dbData.contact} />
    </div>
  );
}
