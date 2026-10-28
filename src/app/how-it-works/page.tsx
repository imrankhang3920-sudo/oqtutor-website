import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { verifyAdminToken } from '@/lib/auth';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  BookOpen, 
  Calendar, 
  Video, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  Laptop, 
  Clock, 
  RotateCcw, 
  Headphones, 
  UserCheck, 
  Award,
  Sparkles
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'How OQTutor Works: Start Live 1-on-1 Quran Classes in 3 Steps',
  description: 'See how our live 1-on-1 online Quran classes work: 1) Book your free assessment, 2) Match with a certified male/female tutor, 3) Learn on your schedule.',
  alternates: {
    canonical: 'https://www.oqtutor.com/how-it-works',
  },
  openGraph: {
    url: 'https://www.oqtutor.com/how-it-works',
    title: 'How OQTutor Works: Start Live 1-on-1 Quran Classes in 3 Steps',
    description: 'See how our live 1-on-1 online Quran classes work: 1) Book your free assessment, 2) Match with a certified male/female tutor, 3) Learn on your schedule.',
    images: [
      {
        url: 'https://www.oqtutor.com/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'OQTutor - How Online Quran Classes Work',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How OQTutor Works: Start Live 1-on-1 Quran Classes in 3 Steps',
    description: 'See how our live 1-on-1 online Quran classes work: 1) Book your free assessment, 2) Match with a certified male/female tutor, 3) Learn on your schedule.',
    images: ['https://www.oqtutor.com/logo.jpg'],
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
      id: 'step-1',
      number: '01',
      title: 'Book a 3-Day Free Trial',
      mainText: 'Fill out our quick trial registration form. Select your preferred class days, course (Noorani Qaida, Tajweed, Hifz, or Islamic Studies), and choose between a male or female certified tutor.',
      nextStepNote: 'Within a few hours, our academic coordinator will reach out via WhatsApp and Email to confirm your exact time slot and send your private class link.',
      icon: Calendar,
      color: 'bg-primary/10 text-primary border-primary/20',
    },
    {
      id: 'step-2',
      number: '02',
      title: 'Attend the Evaluation Class',
      mainText: 'Join your tutor for a live, 1-on-1 30-minute session via Zoom or Teams—just click the link, no technical setup needed. Your tutor will share the digital Qaida or Mushaf on screen, gently assess the student\'s current reading level, and recommend a personalized learning roadmap.',
      icon: Video,
      color: 'bg-secondary/10 text-secondary border-secondary/20',
    },
    {
      id: 'step-3',
      number: '03',
      title: 'Select a Plan & Start Learning',
      mainText: 'Once you complete your 3 free trial classes and love your tutor, choose a flexible monthly plan (2, 3, or 5 days per week) with no long-term contracts. Need a different teaching style? We will gladly assign another tutor upon request.',
      icon: BookOpen,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
      link: {
        text: 'View Pricing Plans →',
        href: '/pricing',
      },
    },
  ];

  const lessonTimeline = [
    {
      timeBadge: 'Minutes 0–5',
      title: 'Warm-Up & Sabaq Revision',
      description: 'The tutor greets the student and listens to a quick recitation of the previous lesson to ensure letters, rules, or memorized verses are retained before moving forward.',
      icon: RotateCcw,
      accent: 'border-primary/20 bg-primary/5 text-primary',
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
    },
    {
      timeBadge: 'Minutes 5–20',
      title: 'New Lesson & Live Screen-Sharing',
      description: 'The tutor shares the digital Noorani Qaida or Quran directly on your screen using interactive pointer tools. As the student reads aloud, the tutor demonstrates proper Makharij (articulation points) and corrects Tajweed rules in real time.',
      icon: Laptop,
      accent: 'border-secondary/20 bg-secondary/5 text-secondary',
      badgeColor: 'bg-secondary/10 text-secondary border-secondary/20',
    },
    {
      timeBadge: 'Minutes 20–25',
      title: 'Guided Practice & Duas',
      description: 'The student repeats challenging words with the tutor until fluent, followed by 5 minutes dedicated to daily Masnoon Duas, Salah steps, or foundational Islamic manners.',
      icon: HeartHandshake,
      accent: 'border-primary/20 bg-primary/5 text-primary',
      badgeColor: 'bg-primary/10 text-primary border-primary/20',
    },
    {
      timeBadge: 'Minutes 25–30',
      title: 'Homework & Progress Note',
      description: 'The tutor assigns a short, manageable portion for practice before the next class and logs the session notes.',
      icon: CheckCircle,
      accent: 'border-secondary/20 bg-secondary/5 text-secondary',
      badgeColor: 'bg-secondary/10 text-secondary border-secondary/20',
    },
  ];

  const getStartedItems = [
    {
      title: 'Any Smart Device',
      description: 'A laptop, desktop, iPad, or tablet works best for clear screen viewing (smartphones are also supported).',
      icon: Laptop,
    },
    {
      title: 'Stable Internet & Audio',
      description: 'A standard home Wi-Fi connection and a built-in microphone or simple headset so your tutor can clearly hear subtle Tajweed pronunciations.',
      icon: Headphones,
    },
    {
      title: 'One-Click Video App',
      description: 'We conduct classes via Zoom, Microsoft Teams, or Skype. Simply click the invite link we send to your WhatsApp or Email.',
      icon: Video,
    },
    {
      title: 'Digital Learning Materials Included',
      description: 'No need to buy or download books. Our tutors share all Noorani Qaida, Quran, and Islamic Studies materials on-screen during class and provide free PDF copies for home revision.',
      icon: BookOpen,
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

  const parentSupportItems = [
    {
      title: 'Dedicated Academic Coordinator',
      description: 'Parents have direct WhatsApp and email access to our support team to adjust schedules, request makeup classes, or share feedback at any time.',
      icon: UserCheck,
    },
    {
      title: 'Monthly Progress Updates',
      description: 'Tutors track completed Qaida pages, Tajweed rule mastery, reading fluency, and Hifz retention so you always know how your child is advancing.',
      icon: Clock,
    },
    {
      title: 'Course Completion Certificates',
      description: 'Students receive official OQTutor certificates upon completing milestones like Noorani Qaida, Nazra Quran, or Hifz-ul-Quran.',
      icon: Award,
    },
  ];

  const faqQuestions = [
    {
      question: 'How do online Quran classes work?',
      answer: 'Online Quran classes at OQTutor are live, 1-on-1 interactive video sessions conducted via Zoom or Skype. The tutor shares their screen to display the Noorani Qaida or Quran, using digital pointer tools to guide the student line-by-line while providing real-time pronunciation and Tajweed correction.'
    },
    {
      question: 'Is the 3-day trial class really free?',
      answer: 'Yes, OQTutor offers a 3-day evaluation trial completely free of charge. No credit card details, upfront registration fees, or obligations are required to book and attend your trial sessions.'
    },
    {
      question: 'Can I choose a male or female Quran tutor?',
      answer: 'Yes, parents and students can select their preferred tutor gender during registration. We have certified, experienced male and female Quran teachers fluent in English, Urdu, and Arabic to ensure complete comfort for sisters and young children.'
    },
    {
      question: 'What if I want to change my tutor after the trial?',
      answer: 'If you feel another teaching style would better suit your child, simply let our coordinator know. We will assign a different certified tutor immediately at no extra cost.'
    },
    {
      question: 'What happens if we miss a class or need to reschedule?',
      answer: 'We offer flexible rescheduling and makeup classes. Just notify your tutor or our support team in advance via WhatsApp or email, and we will arrange a makeup session at a convenient time during the week.'
    },
    {
      question: 'What is the best age for a child to start online Quran classes?',
      answer: 'Children as young as 4 to 5 years old can begin with our interactive Noorani Qaida course, which uses phonics and repetition tailored for short attention spans. We also teach older kids, teenagers, and adult beginners of all ages.'
    },
    {
      question: 'Can parents observe their child\'s online Quran lessons?',
      answer: 'Absolutely. Parents are encouraged to sit nearby during the evaluation class and regular sessions, and we keep parents updated with regular feedback on their child\'s recitation and Tajweed progress.'
    },
    {
      question: 'How do tuition payments work once the free trial ends?',
      answer: 'After completing your 3 free trial classes, you can choose a monthly plan based on how many days per week you wish to study (2, 3, or 5 days/week). Payments are processed securely online on a month-to-month basis with no long-term lock-in contracts.'
    }
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Online Quran Classes Work at OQTutor",
    "description": "Learn how online Quran classes work in 3 simple steps: book a free trial, attend your live evaluation session, and select a personalized learning plan.",
    "totalTime": "PT30M",
    "step": [
      {
        "@type": "HowToStep",
        "url": "https://www.oqtutor.com/how-it-works#step-1",
        "name": "Book a 3-Day Free Trial",
        "itemListElement": [
          {
            "@type": "HowToDirection",
            "text": "Fill out our quick trial registration form. Select your preferred class days, course (Noorani Qaida, Tajweed, Hifz, or Islamic Studies), and choose between a male or female certified tutor. What happens next: Within a few hours, our academic coordinator will reach out via WhatsApp and Email to confirm your exact time slot and send your private class link."
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
            "text": "Join your tutor for a live, 1-on-1 30-minute session via Zoom or Teams—just click the link, no technical setup needed. Your tutor will share the digital Qaida or Mushaf on screen, gently assess the student's current reading level, and recommend a personalized learning roadmap."
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
            "text": "Once you complete your 3 free trial classes and love your tutor, choose a flexible monthly plan (2, 3, or 5 days per week) with no long-term contracts. Need a different teaching style? We will gladly assign another tutor upon request."
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 text-center">
          <p className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Simplifying Online Learning</span>
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            How OQTutor Works: Start Learning Quran Online in 3 Easy Steps
          </h1>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
            Starting your Quranic education path is simple and structured. OQTutor offers Online Quran Classes, Tajweed, Hifz, Tafseer, Arabic Language, and Islamic Studies for kids and adults worldwide. Follow these 3 easy steps to begin.
          </p>
        </div>

        {/* 1. Steps Timeline (01, 02, 03) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.id} 
                  id={step.id}
                  className="glass p-8 sm:p-10 rounded-3xl border border-card-border shadow-lg relative flex flex-col h-full hover:translate-y-[-4px] transition-all duration-300 group"
                >
                  <div className="absolute top-6 right-8 text-5xl font-black text-foreground/[0.04] group-hover:text-primary/10 transition-colors select-none">
                    {step.number}
                  </div>
                  
                  <div className={`p-4 rounded-2xl border w-fit ${step.color} mb-6 shadow-sm`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <div className="text-sm sm:text-base text-muted-text leading-relaxed font-normal flex-grow space-y-3">
                    <p>{step.mainText}</p>
                    {step.nextStepNote && (
                      <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                        <strong className="text-primary font-bold">What happens next: </strong>
                        <span>{step.nextStepNote}</span>
                      </div>
                    )}
                  </div>

                  {step.link && (
                    <div className="mt-6 pt-4 border-t border-card-border/60">
                      <Link
                        href={step.link.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover hover:underline transition-colors group/link"
                      >
                        <span>{step.link.text}</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. NEW SECTION A: Inside a 30-Minute Live Class */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Classroom Experience
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              What Happens Inside a 30-Minute Live Lesson?
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
              Every session is live, interactive, and one-on-one. Here is how our tutors structure a typical 30-minute class to keep students engaged and progressing steadily:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lessonTimeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass p-6 sm:p-7 rounded-3xl border border-card-border shadow-md flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border tracking-wide ${item.badgeColor}`}>
                        {item.timeBadge}
                      </span>
                      <div className="p-2.5 rounded-xl bg-foreground/[0.03] border border-card-border/50 text-foreground/80 group-hover:text-primary transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-card-border/40 flex items-center justify-between text-xs text-muted-text/80">
                    <span className="font-semibold text-primary">Stage 0{idx + 1}</span>
                    <span className="text-foreground/30 font-mono">0{idx + 1}/04</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. NEW SECTION B: What You Need to Get Started */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Simple Setup
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              Everything You Need for Your First Class
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
              You don&apos;t need any advanced technical skills or physical textbooks to start learning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getStartedItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass p-7 rounded-3xl border border-card-border shadow-md flex flex-col items-start hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Core Advantages (Why Choose Us / Our Learning Advantages) */}
        <div className="bg-foreground/[0.01] border-y border-card-border py-16 md:py-24 mb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                Our Learning Advantages
              </h2>
              <div className="h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={idx} 
                    className="glass p-8 rounded-3xl border border-card-border flex flex-col items-center md:items-start text-center md:text-left space-y-4 hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20">
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

        {/* 5. NEW SECTION C: How We Track Progress & Support Parents */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              Measurable Results
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              How We Track Progress & Keep Parents Informed
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto mt-3 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed">
              We ensure you stay intimately connected to your child&apos;s learning path through regular updates, certified milestones, and responsive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {parentSupportItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="glass p-8 rounded-3xl border border-card-border shadow-md flex flex-col hover:translate-y-[-4px] transition-all duration-300 relative group"
                >
                  <div className="p-3.5 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20 w-fit mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. FAQ Section (8 Questions Total + Critical Copy Fix) */}
        <section className="py-16 md:py-24 border-b border-card-border/60 mb-20 bg-foreground/[0.01]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                Frequently Asked Questions
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                Common Questions About How It Works
              </h2>
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

        {/* 7. CTA Container */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl border border-card-border shadow-xl text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-8 -translate-y-8" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -translate-x-8 translate-y-8" />
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
              Ready to Start?
            </h2>
            <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
              Book your 3-Day Free Trial class today. No credit card is required, and there are absolutely no obligations. Give your family the opportunity to learn from the comfort of your home.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link
                href="/book-free-trial"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 font-bold text-sm sm:text-base group"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-foreground/[0.03] hover:bg-foreground/[0.06] text-foreground border border-card-border transition-all duration-300 font-semibold text-sm sm:text-base"
              >
                <span>View Pricing Plans</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer data={dbData.contact} />
    </div>
  );
}
