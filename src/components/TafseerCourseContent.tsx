'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Award, Clock, Calendar, Users, 
  CheckCircle, ChevronDown, ArrowRight, ShieldCheck,
  Check, Video, BookMarked, Sparkles, FileText,
  HelpCircle, GraduationCap, Shield, ArrowUpRight,
  Compass, Laptop, Lightbulb, Volume2, UserCheck,
  Heart, Globe, Star, Layers, MessageSquare, Zap
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseData, ContactData, TestimonialData, PricingData } from '@/data/db';
import Testimonials from '@/components/Testimonials';
import AvailableStatesBlock from '@/components/AvailableStatesBlock';

interface TafseerCourseContentProps {
  course: CourseData;
  contactData: ContactData;
  testimonials?: TestimonialData[];
  pricing?: PricingData[];
}

export default function TafseerCourseContent({
  course,
  contactData,
  testimonials = [],
  pricing = []
}: TafseerCourseContentProps) {
  const [activeSyllabusTab, setActiveSyllabusTab] = useState<'juz-amma' | 'classical' | 'word-for-word'>('juz-amma');
  const [activeFormatTab, setActiveFormatTab] = useState<'one-on-one' | 'group'>('one-on-one');
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [openCurriculumIdx, setOpenCurriculumIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const toggleCurriculum = (idx: number) => {
    setOpenCurriculumIdx(openCurriculumIdx === idx ? null : idx);
  };

  // Pricing plans with 1-on-1 & Group classes context
  const defaultPricingPlans: PricingData[] = [
    {
      id: 'tafseer-plan-1',
      title: 'Group Halaqah',
      price: '25',
      frequency: 'Month',
      features: [
        '2 Group Sessions / Week (3-5 students)',
        '45-minute interactive study circles',
        'Juz Amma & Word-for-Word commentary',
        'Male & Female scholar cohorts',
        'Interactive PDF commentary notes',
        'Community Q&A & reflections'
      ],
      isPopular: false,
      ctaText: 'Join Group Trial'
    },
    {
      id: 'tafseer-plan-2',
      title: 'Standard 1-on-1',
      price: '40',
      frequency: 'Month',
      features: [
        '3 Private Sessions / Week',
        '30-minute 1-on-1 scholar mentorship',
        'Customized pace & flexible timing',
        'Juz Amma, Ibn Kathir & Al-Jalalayn',
        'Word-for-Word Arabic root analysis',
        'Private dialogue for personal questions',
        'Free trial session included'
      ],
      isPopular: true,
      ctaText: 'Book Free 1-on-1 Trial'
    },
    {
      id: 'tafseer-plan-3',
      title: 'Intensive 1-on-1',
      price: '55',
      frequency: 'Month',
      features: [
        '5 Private Sessions / Week',
        '45-minute deep-dive scholarly lessons',
        'Comprehensive verse-by-verse exegesis',
        'Advanced classical texts & Asbab al-Nuzul',
        'Dedicated senior Alim / Alimah mentor',
        'Direct messaging support & homework feedback',
        'Certification upon module completion'
      ],
      isPopular: false,
      ctaText: 'Start Intensive Track'
    }
  ];

  const plansToDisplay = pricing && pricing.length >= 3 ? pricing : defaultPricingPlans;

  // Key course highlights
  const courseHighlights = [
    {
      icon: BookOpen,
      title: "Word-by-Word Translation",
      desc: "Deconstruct classical Arabic vocabulary and trilateral roots (Ishtiqaaq) to understand words instantly during Salah."
    },
    {
      icon: BookMarked,
      title: "Juz Amma Mastery",
      desc: "Complete verse-by-verse explanation of the 30th Juz (Surahs 78–114) recited daily in prayers."
    },
    {
      icon: Layers,
      title: "Ibn Kathir & Al-Jalalayn",
      desc: "Study classical exegesis through authentic prophetic narrations (Hadith) and concise linguistic commentaries."
    },
    {
      icon: Users,
      title: "1-on-1 & Group Classes",
      desc: "Choose between private customized mentorship or collaborative small-group study circles (Halaqah)."
    },
    {
      icon: GraduationCap,
      title: "Al-Azhar & IIUI Scholars",
      desc: "Learn directly from certified male scholars and female Alimahs holding authentic Sanad & Ijazah."
    },
    {
      icon: Clock,
      title: "24/7 Global Scheduling",
      desc: "Convenient lesson slots tailored to students across the USA, UK, Canada, Europe, and Australia."
    }
  ];

  // Scholar credentials highlights
  const scholarCredentialsList = [
    {
      title: "Prestigious University Degrees",
      desc: "Graduates of Al-Azhar University (Cairo), Islamic University of Madinah, and International Islamic University Islamabad (IIUI), holding formal B.A. and M.A. degrees in Usul al-Deen, Tafseer, and Hadith sciences."
    },
    {
      title: "Formal Shahadah Al-Alimiyyah (Dars-e-Nizami)",
      desc: "Tutors have completed intensive 8-year traditional Islamic scholarship programs covering Arabic grammar (Nahw & Sarf), principles of exegesis (Usul al-Tafsir), Islamic jurisprudence (Fiqh), and theology (Aqeedah)."
    },
    {
      title: "Connected Chains of Transmission (Sanad & Ijazah)",
      desc: "Faculty members hold verified Ijazat connecting their recitation and exegesis through continuous scholarly chains back to the Prophet Muhammad (peace be upon him)."
    },
    {
      title: "Native English & Multilingual Fluency",
      desc: "Exceptional bilingual communication skills in English, Arabic, and Urdu. Our scholars explain complex theological concepts with crystal clarity for Western-raised youth, working professionals, and converts."
    },
    {
      title: "Strict 5-Stage Vetting & Background Checks",
      desc: "Only 3% of applicants pass our rigorous 5-step screening: degree verification, classical text comprehension testing, live teaching pedagogy demonstration, criminal background checks, and student child-safety compliance."
    },
    {
      title: "Dedicated Male & Female Faculty",
      desc: "Complete privacy and comfort. Sisters and young children can choose certified female scholars (Alimahs), while brothers can learn with experienced male scholars."
    }
  ];

  // Featured Scholars Profiles
  const featuredScholars = [
    {
      name: "Sheikh Rizwan Qureshi",
      role: "Senior Tafseer & Hadith Scholar",
      credentials: "M.A. Islamic Studies (Quetta University) • Alimiyyah Degree",
      specialty: "Tafseer Ibn Kathir, Asbab al-Nuzul & Seerah",
      experience: "14+ Years Teaching Experience",
      languages: "English, Arabic, Urdu",
      image: "/tutor-khaled.jpg"
    },
    {
      name: "Ustadha Amina Al-Azhari",
      role: "Senior Female Tafseer Scholar (Alimah)",
      credentials: "Faculty of Islamic Sciences, Al-Azhar University (Cairo) • Ijazah Hafs",
      specialty: "Juz Amma Tafseer, Women's Fiqh & Arabic Roots",
      experience: "9+ Years Teaching Sisters & Youth",
      languages: "English, Classical Arabic",
      image: "/tutor-fatima.jpg"
    },
    {
      name: "Qari Hafiz Irfan",
      role: "Quranic Sciences & Translation Faculty",
      credentials: "M.A. Quranic Sciences, International Islamic University Islamabad (IIUI)",
      specialty: "Word-for-Word Translation & Tafseer Al-Jalalayn",
      experience: "11+ Years Teaching Global Students",
      languages: "English, Arabic, Urdu",
      image: "/tutor-irfan.jpg"
    }
  ];

  // Sample Lesson Curriculum (Step-by-Step 30-45 Minute Anatomy)
  const lessonCurriculumSteps = [
    {
      step: "01",
      title: "Tilawat & Phonetic Check (5–7 Mins)",
      badge: "Recitation Foundation",
      desc: "The student recites the target verses with Tajweed. The scholar listens carefully, corrects phonetic articulation (Makharij), and ensures smooth reading before diving into the meanings."
    },
    {
      step: "02",
      title: "Word-for-Word Arabic Root Breakdown (8–10 Mins)",
      badge: "Mufradat al-Quran",
      desc: "Deconstruct every single word in the ayah. The tutor highlights the 3-letter root (Ishtiqaaq), explains linguistic connotations, and teaches high-frequency Quranic vocabulary so you recognize it instantly in prayer."
    },
    {
      step: "03",
      title: "Asbab al-Nuzul & Historical Circumstances (7–8 Mins)",
      badge: "Historical Context",
      desc: "Explore why and when the Surah or Ayah was revealed in Makkah or Madinah. Learn about the events in the life of the Prophet (pbuh) and the questions asked by the Sahabah that prompted the divine revelation."
    },
    {
      step: "04",
      title: "Classical Scholarly Exegesis (10–12 Mins)",
      badge: "Ibn Kathir & Al-Jalalayn",
      desc: "Cross-reference classical commentaries. Review Ibn Kathir's explanation using the Quran and authentic Sahih Hadith, paired with Al-Jalalayn's concise grammatical and syntactic clarifications."
    },
    {
      step: "05",
      title: "Tadabbur & Modern Real-Life Application (5 Mins)",
      badge: "Practical Life Lessons",
      desc: "Transform theory into personal character. The teacher and student reflect on: 'How does this ayah guide my character, family relationships, workplace ethics, and emotional resilience today?'"
    },
    {
      step: "06",
      title: "Guided Q&A, Homework & Reflection Notes (3–5 Mins)",
      badge: "Active Engagement",
      desc: "Ask any lingering questions in complete comfort. Receive screen-shared summary notes, root word review cards, and a short reflection prompt for the next class."
    }
  ];

  // Stage-by-Stage Progression Roadmap
  const progressionStages = [
    {
      stage: "Stage 1",
      duration: "Months 1–3",
      title: "Foundations & Juz Amma (Surahs 78–114)",
      desc: "Master word-for-word translation of the 30th Juz. Understand the profound themes of the afterlife (Akhirah), monotheism (Tawheed), and moral accountability while deepening Khushu' in daily Salah."
    },
    {
      stage: "Stage 2",
      duration: "Months 4–6",
      title: "Flagship Surahs & Thematic Narratives",
      desc: "Study iconic chapters including Surah Al-Baqarah (Ayat al-Kursi & concluding ayahs), Surah Yasin, Surah Al-Kahf (the 4 trials), Surah Al-Mulk, and Surah Ar-Rahman with rich contextual background."
    },
    {
      stage: "Stage 3",
      duration: "Months 7–12",
      title: "Classical Exegesis with Ibn Kathir & Al-Jalalayn",
      desc: "Advance into systematic verse-by-verse study utilizing classical commentaries. Analyze Hadith cross-references, jurisprudential rulings (Ahkam al-Quran), and classical Arabic grammatical nuances."
    },
    {
      stage: "Stage 4",
      duration: "Ongoing Track",
      title: "Comprehensive Quranic Sciences (Ulum al-Quran)",
      desc: "For dedicated students aiming for complete Quranic comprehension. Explore abrogated verses (Nasikh wa Mansukh), rhetoric (Balaghah), and deep thematic analysis across all 30 Juz."
    }
  ];

  // Comprehensive FAQs
  const tafseerFaqs = [
    {
      question: "What is Quran Tafseer and why is it important?",
      answer: "Quran Tafseer is the scholarly interpretation and detailed explanation of the Holy Quran. While a basic translation merely converts Arabic words into English, Tafseer unpacks the historical context (Asbab al-Nuzul), classical Arabic linguistic nuances, thematic wisdom, and legal guidance behind each verse. It transforms Quranic reading into active, heartfelt comprehension and helps Muslims worship with true presence of mind (Khushu')."
    },
    {
      question: "Do I need to know Arabic fluently before starting Tafseer classes?",
      answer: "No, prior mastery of the Arabic language is not required. Our online Quran Tafseer classes are taught in clear, engaging English (or Urdu if preferred). Tutors introduce classical Arabic root words step by step, explain grammatical patterns simply, and provide accessible explanations tailored for beginners, reverts, and busy adults."
    },
    {
      question: "What is the difference between 1-on-1 and Group Tafseer classes?",
      answer: "In our 1-on-1 private classes, you receive 100% personalized attention from a dedicated scholar, flexible pacing, and complete privacy to discuss personal or sensitive questions. In our small group classes (Halaqah, 3-5 students), you benefit from peer discussions, shared reflections, and community engagement at a budget-friendly rate. Both formats follow our structured classical curriculum."
    },
    {
      question: "Which classical Tafseer books do you cover in the curriculum?",
      answer: "Our curriculum emphasizes two renowned classical authorities: Tafseer Ibn Kathir (famed for Tafseer bi'l-Ma'thur, explaining verses through the Quran itself and authentic Hadiths) and Tafseer Al-Jalalayn by Al-Mahalli and Al-Suyuti (celebrated for concise, word-level grammatical and linguistic commentary). We also reference classical Arabic lexicons like Mufradat Alfaz al-Quran by Al-Raghib al-Isfahani."
    },
    {
      question: "Can I choose between a male scholar and a female scholar (Alimah)?",
      answer: "Yes, absolutely. We have both certified male scholars and qualified female scholars (Alimahs) available. Sisters, young children, and teen girls who feel more comfortable learning with an Alimah can easily select one during free trial registration."
    },
    {
      question: "How long does it take to complete the Tafseer of Juz Amma?",
      answer: "Studying Juz Amma (the 30th Juz) thoroughly with word-for-word translation, Asbab al-Nuzul, and practical lessons typically takes between 3 to 6 months depending on whether you take 2, 3, or 5 lessons per week. Because classes are customized, you can accelerate or slow down according to your schedule."
    },
    {
      question: "How does learning Tafseer help my daily Salah?",
      answer: "When you understand the exact meanings, emotional depth, and historical reasons behind the short Surahs you recite in Salah (such as Surah Al-Fatiha, Al-Ikhlas, Al-Falaq, An-Nas, and Ad-Duha), your mind stops wandering. Instead of reciting mechanical sounds, you experience deep emotional connection, gratitude, and awe before Allah."
    },
    {
      question: "How do online Tafseer classes work technically?",
      answer: "Classes take place live via Zoom or Google Meet with high-definition audio and video. Your teacher shares digital Quranic texts, color-coded Arabic vocabulary charts, and screen-shared classical commentary notes on an interactive whiteboard. You receive lesson PDFs and notes after every class."
    }
  ];

  return (
    <main className="flex-grow bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                <BookOpen className="h-4 w-4" />
                <span>Certified Classical Islamic Scholarship</span>
              </div>

              {/* Single H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                1-on-1 Online Quran Tafseer Classes for Adults &amp; Youth
              </h1>

              <p className="text-base sm:text-lg text-muted-text leading-relaxed font-normal">
                Unlock the profound wisdom, historical context, and divine guidance of the Holy Quran. Study <strong>Juz Amma Tafseer</strong>, classical exegesis with <strong>Tafseer Ibn Kathir &amp; Al-Jalalayn</strong>, and <strong>word-for-word translation</strong> with certified male and female Islamic scholars through personalized 1-on-1 mentorship or interactive small group cohorts.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-card border border-card-border flex items-center space-x-2.5">
                  <UserCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground">1-on-1 &amp; Group</span>
                </div>
                <div className="p-3 rounded-2xl bg-card border border-card-border flex items-center space-x-2.5">
                  <Award className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground">Al-Azhar Graduates</span>
                </div>
                <div className="p-3 rounded-2xl bg-card border border-card-border flex items-center space-x-2.5">
                  <BookMarked className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground">Juz Amma Curriculum</span>
                </div>
                <div className="p-3 rounded-2xl bg-card border border-card-border flex items-center space-x-2.5">
                  <Layers className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground">Ibn Kathir &amp; Jalalayn</span>
                </div>
                <div className="p-3 rounded-2xl bg-card border border-card-border flex items-center space-x-2.5">
                  <Users className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground">Male &amp; Female Alimahs</span>
                </div>
                <div className="p-3 rounded-2xl bg-card border border-card-border flex items-center space-x-2.5">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-semibold text-foreground">Free Trial Class</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/book-free-trial"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/25 hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center space-x-2 text-center"
                >
                  <span>Book a Free Trial Class</span>
                  <ArrowRight className="h-4.5 w-4.5" />
                </Link>
                <a
                  href="#syllabus"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-sm font-semibold transition-all duration-300 text-center"
                >
                  Explore Course Syllabus
                </a>
              </div>
            </div>

            {/* Right: Featured Card with Image & Details */}
            <div className="lg:col-span-5">
              <div className="glass p-6 rounded-3xl border border-card-border shadow-2xl relative overflow-hidden space-y-5">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-card-border">
                  <Image
                    src="/blog/how-to-learn-quran-tafseer-online/quran-tafseer-study-desk-lamp.jpg"
                    alt="Study desk with Holy Quran and classical Tafseer books for online Quran Tafseer classes"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary block">Authentic Exegesis Track</span>
                    <h3 className="text-base font-bold">Understanding the Divine Message</h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-card-border space-y-2.5 text-xs text-muted-text">
                  <div className="flex justify-between items-center py-1 border-b border-card-border/60">
                    <span className="font-medium text-foreground">Class Formats</span>
                    <span className="font-semibold text-primary">1-on-1 Mentorship &amp; Group Halaqah</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-card-border/60">
                    <span className="font-medium text-foreground">Core Syllabus</span>
                    <span className="font-semibold text-foreground">Juz Amma, Ibn Kathir, Al-Jalalayn</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-card-border/60">
                    <span className="font-medium text-foreground">Instruction Language</span>
                    <span className="font-semibold">English, Urdu &amp; Arabic</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="font-medium text-foreground">Faculty Credentials</span>
                    <span className="font-semibold text-secondary">Al-Azhar &amp; IIUI Certified Scholars</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <span className="text-xs text-muted-text">
                    Join over 1,500+ students studying Quran Tafseer globally. No credit card required.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DEDICATED H2: Learn Quran Tafseer Online (1-on-1 & Group Classes) */}
      <section className="py-20 bg-background border-b border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
              Flexible Learning Pathways
            </span>
            {/* EXACT H2 HEADING REQUIRED */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Learn Quran Tafseer Online (1-on-1 &amp; Group Classes)
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Every student learns differently. Whether you thrive in an intimate one-on-one mentorship setting with a dedicated Islamic scholar or prefer the inspiring collaborative energy of a small group Halaqah, OQTutor offers tailored online Quran Tafseer classes designed to fit your learning style, schedule, and spiritual goals.
            </p>
          </div>

          {/* Interactive Format Switcher / Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: 1-on-1 Private Mentorship */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-2 border-primary/30 bg-primary/[0.02] shadow-xl relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Most Popular Choice
                  </span>
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <UserCheck className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-foreground">
                  1-on-1 Private Tafseer Mentorship
                </h3>

                <p className="text-sm text-muted-text leading-relaxed">
                  Experience undivided attention from a certified Islamic scholar. Study at your customized pace, dive deep into specific verses that resonate with your life, and discuss personal or complex theological questions in complete privacy and trust.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>100% Customized Pacing:</strong> Pause on any ayah, explore classical Arabic root words, and review Asbab al-Nuzul without classroom pressure.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Complete Privacy &amp; Open Dialogue:</strong> Ask personal ethical, spiritual, or marital questions safely with your dedicated scholar.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Flexible Scheduling 24/7:</strong> Pick exact days and times that match your busy routine; reschedule easily with prior notice.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                    <span><strong>Male or Female Scholar:</strong> Dedicated female Alimahs for sisters and children; male scholars for brothers and young boys.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-card-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-muted-text block">Recommended for:</span>
                  <span className="text-xs font-bold text-foreground">Adults, Reverts, Professionals &amp; Busy Parents</span>
                </div>
                <Link
                  href="/book-free-trial"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider transition-all text-center"
                >
                  Book 1-on-1 Free Trial
                </Link>
              </div>
            </div>

            {/* Card 2: Interactive Small Group Classes (Halaqah) */}
            <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border shadow-lg relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                    Collaborative Learning
                  </span>
                  <div className="h-10 w-10 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-foreground">
                  Interactive Small Group Classes (Halaqah)
                </h3>

                <p className="text-sm text-muted-text leading-relaxed">
                  Join a small cohort of like-minded learners (strictly capped at 3 to 5 students). Experience the traditional spirit of Islamic Halaqah where peer discussions, shared reflections, and collective learning ignite lasting spiritual motivation.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <span><strong>Small Group Cap (3–5 Students):</strong> Maintains active engagement, ensuring every student recites, participates, and contributes.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <span><strong>Communal Tadabbur Discussions:</strong> Learn from questions and real-world insights shared by classmates facing similar life situations.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <span><strong>Ideal for Families &amp; Friends:</strong> Organize a private cohort for your family, spouses, siblings, or youth circle.</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-foreground">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                    <span><strong>Cost-Effective Tuition:</strong> Reduced monthly investment while retaining verified scholarly instruction and structured notes.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-card-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-muted-text block">Recommended for:</span>
                  <span className="text-xs font-bold text-foreground">Family Groups, Youth Circles &amp; Peer Cohorts</span>
                </div>
                <Link
                  href="/book-free-trial"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all text-center"
                >
                  Inquire for Group Class
                </Link>
              </div>
            </div>

          </div>

          {/* Quick Comparison Summary Table */}
          <div className="p-6 sm:p-8 rounded-3xl bg-card border border-card-border overflow-x-auto">
            <h4 className="text-lg font-bold text-foreground mb-4">Quick Feature Comparison: 1-on-1 vs. Group Classes</h4>
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b border-card-border text-muted-text">
                  <th className="py-3 px-4 font-semibold">Feature</th>
                  <th className="py-3 px-4 font-semibold text-primary">1-on-1 Private Mentorship</th>
                  <th className="py-3 px-4 font-semibold text-secondary">Small Group Classes (Halaqah)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border/60 text-muted-text">
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Student-to-Teacher Ratio</td>
                  <td className="py-3 px-4 font-bold text-primary">1 : 1</td>
                  <td className="py-3 px-4 font-bold text-secondary">1 : 3 to 1 : 5 (Strictly Capped)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Pacing &amp; Curriculum</td>
                  <td className="py-3 px-4">100% Customized to your chosen Surahs &amp; speed</td>
                  <td className="py-3 px-4">Structured week-by-week module progression</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Schedule Flexibility</td>
                  <td className="py-3 px-4">Pick exact days &amp; times; reschedule anytime</td>
                  <td className="py-3 px-4">Fixed recurring weekly session slots</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Confidentiality &amp; Questions</td>
                  <td className="py-3 px-4">Complete privacy for personal &amp; ethical inquiries</td>
                  <td className="py-3 px-4">Interactive public classroom discussions</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground">Trial Class Available</td>
                  <td className="py-3 px-4 text-primary font-semibold">Yes — 100% Free 30-min evaluation</td>
                  <td className="py-3 px-4 text-secondary font-semibold">Yes — Free introductory group session</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 3. CLEAR SYLLABUS BREAKDOWN (Juz Amma, Ibn Kathir/Al-Jalalayn, Word-for-Word) */}
      <section id="syllabus" className="py-20 bg-foreground/[0.01] border-b border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
              Structured Islamic Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Comprehensive Quran Tafseer Syllabus Breakdown
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Our curriculum is systematically divided into three interconnected academic pillars: <strong>Juz Amma Tafseer</strong>, <strong>Classical Exegesis (Tafseer Ibn Kathir &amp; Al-Jalalayn)</strong>, and <strong>Word-for-Word Arabic Translation</strong>. Each pillar builds progressive mastery from foundational recitation to profound theological contemplation.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="inline-flex p-1.5 rounded-full bg-card border border-card-border shadow-sm">
              <button
                onClick={() => setActiveSyllabusTab('juz-amma')}
                className={`px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeSyllabusTab === 'juz-amma'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-text hover:text-foreground'
                }`}
              >
                1. Juz Amma Tafseer
              </button>
              <button
                onClick={() => setActiveSyllabusTab('classical')}
                className={`px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeSyllabusTab === 'classical'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-text hover:text-foreground'
                }`}
              >
                2. Classical Exegesis (Ibn Kathir &amp; Jalalayn)
              </button>
              <button
                onClick={() => setActiveSyllabusTab('word-for-word')}
                className={`px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeSyllabusTab === 'word-for-word'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-muted-text hover:text-foreground'
                }`}
              >
                3. Word-for-Word Translation
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="pt-4">
            {activeSyllabusTab === 'juz-amma' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
                        <BookMarked className="h-4 w-4" />
                        <span>Pillar One: The 30th Juz of the Holy Quran</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground">
                        Juz Amma Tafseer (Surah An-Naba to Surah An-Nas)
                      </h3>
                    </div>
                    <span className="text-xs font-semibold px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 self-start md:self-auto">
                      37 Surahs • Core Salah Recitation
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                    Juz Amma is the heart of everyday Muslim worship. Containing 37 concise, powerfully evocative Makkan Surahs, it focuses on the core tenets of Islamic creed: the Oneness of Allah (Tawheed), the reality of resurrection and the Day of Judgment (Yawm al-Qiyamah), cosmic signs in nature, and uncompromising moral integrity. Understanding Juz Amma immediately transforms your daily Salah from routine recitation into an emotionally immersive experience filled with Khushu'.
                  </p>

                  {/* 3-Tier Breakdown of Juz Amma */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    <div className="p-6 rounded-2xl bg-card border border-card-border space-y-3">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full inline-block">
                        Tier 1 • Shortest Surahs
                      </div>
                      <h4 className="text-base font-bold text-foreground">Surah Ad-Duha to An-Nas (93–114)</h4>
                      <p className="text-xs text-muted-text leading-relaxed">
                        Divine comfort in distress (Ad-Duha &amp; Ash-Sharh), the night of decree (Al-Qadr), the virtue of pure monotheism (Al-Ikhlas), and spiritual protection from whisperings and envy (Al-Falaq &amp; An-Nas).
                      </p>
                      <ul className="text-xs text-muted-text space-y-1.5 pt-1">
                        <li className="flex items-center space-x-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Immediate Salah comprehension</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Spiritual solace &amp; morning/evening Adhkar</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-card-border space-y-3">
                      <div className="text-xs font-bold text-secondary uppercase tracking-wider bg-secondary/10 px-3 py-1 rounded-full inline-block">
                        Tier 2 • Mid-Length Chapters
                      </div>
                      <h4 className="text-base font-bold text-foreground">Surah Al-A'la to Al-Layl (87–92)</h4>
                      <p className="text-xs text-muted-text leading-relaxed">
                        Glorification of the Most High, the overwhelming event (Al-Ghashiyah), the dawn of human accountability (Al-Fajr), the struggle of personal sacrifice (Al-Balad), and the purification of the soul (Ash-Shams).
                      </p>
                      <ul className="text-xs text-muted-text space-y-1.5 pt-1">
                        <li className="flex items-center space-x-2">
                          <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                          <span>Purification of the soul (Tazkiyah)</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                          <span>Social justice &amp; care for the vulnerable</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-card-border space-y-3">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full inline-block">
                        Tier 3 • Major Makkan Epics
                      </div>
                      <h4 className="text-base font-bold text-foreground">Surah An-Naba to At-Tariq (78–86)</h4>
                      <p className="text-xs text-muted-text leading-relaxed">
                        The Great News of Resurrection (An-Naba), the angels tearing out souls (An-Nazi'at), the blind man and humility (Abasa), cosmic dissolution (At-Takwir &amp; Al-Infitar), and defending moral truth (Al-Buruj).
                      </p>
                      <ul className="text-xs text-muted-text space-y-1.5 pt-1">
                        <li className="flex items-center space-x-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Cosmic reflections &amp; Day of Reckoning</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>Firm grounding in Islamic Aqeedah</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSyllabusTab === 'classical' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
                        <Layers className="h-4 w-4" />
                        <span>Pillar Two: Authoritative Classical Methodology</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground">
                        Classical Exegesis: Tafseer Ibn Kathir &amp; Tafseer Al-Jalalayn
                      </h3>
                    </div>
                    <span className="text-xs font-semibold px-4 py-2 rounded-full bg-secondary/15 text-secondary border border-secondary/20 self-start md:self-auto">
                      Tafseer bi'l-Ma'thur &amp; Linguistic Analysis
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                    Rather than relying on speculative or modern subjective opinions, our curriculum anchors your understanding in the gold standards of classical Islamic scholarship. Students study the complementary methodologies of Imam Ibn Kathir and the two Jalals (Al-Mahalli and Al-Suyuti), developing an authentic scholarly lens.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {/* Ibn Kathir */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-card border-2 border-primary/20 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Tafsir al-Qur'an al-Azim
                        </span>
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Tafseer Ibn Kathir (Imam Ibn Kathir d. 774 AH)</h4>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        The quintessential authority of <strong>Tafseer bi'l-Ma'thur</strong> (interpretation through transmitted text). Ibn Kathir explains:
                      </p>
                      <ul className="text-xs sm:text-sm text-muted-text space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span><strong>Quran Explaining the Quran:</strong> Linking related verses across different chapters to resolve apparent ambiguities.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span><strong>Prophetic Hadith Cross-Referencing:</strong> Citing authentic narrations from Sahih al-Bukhari, Sahih Muslim, and the Sunan.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span><strong>Opinions of the Sahabah:</strong> Unpacking the explanations of leading companions, notably Ibn Abbas and Ibn Mas'ud.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span><strong>Purification of Historical Narratives:</strong> Filtering out unreliable Isra'iliyyat tales to safeguard pure Aqeedah.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Al-Jalalayn */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-card border-2 border-secondary/20 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                          Concise Linguistic Mastery
                        </span>
                        <Layers className="h-5 w-5 text-secondary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Tafseer Al-Jalalayn (Al-Mahalli &amp; Al-Suyuti)</h4>
                      <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                        Celebrated across madrasas worldwide for its razor-sharp linguistic precision and brevity. Al-Jalalayn provides:
                      </p>
                      <ul className="text-xs sm:text-sm text-muted-text space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span><strong>Concise Word-Level Exegesis:</strong> Clear, unembellished synonyms that clarify obscure classical Arabic terminology.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span><strong>Grammatical &amp; Syntactic Parsing (I'rab):</strong> Explaining omitted words (Mahdhoof) and sentence structures.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span><strong>Immediate Context &amp; Qira'at:</strong> Highlighting recognized variant readings and authentic occasions of revelation.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          <span><strong>Consensus Jurisprudential Notes:</strong> Brief pointers to legal rulings (Ahkam) without lengthy theological polemics.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeSyllabusTab === 'word-for-word' && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-widest">
                        <Compass className="h-4 w-4" />
                        <span>Pillar Three: Linguistic Foundations</span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-foreground">
                        Word-for-Word Translation &amp; Root Word Morphology
                      </h3>
                    </div>
                    <span className="text-xs font-semibold px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 self-start md:self-auto">
                      80% Quranic Vocabulary • Root Analysis
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                    Do not let translations remain a barrier between you and Allah's direct speech. By isolating each word, identifying its trilateral root (Ishtiqaaq), and learning the 80% most frequent Quranic vocabulary words, you build the cognitive ability to grasp meanings live during recitation and congregational Taraweeh prayers.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    <div className="p-6 rounded-2xl bg-card border border-card-border space-y-3 text-center sm:text-left">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2 mx-auto sm:mx-0">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">Root Word Analysis (Ishtiqaaq)</h4>
                      <p className="text-xs text-muted-text leading-relaxed">
                        Learn how classical Arabic words derive from 3-letter roots. Discover how roots like R-H-M blossom into Rahmah, Rahman, Rahim, and Arham, revealing multi-dimensional spiritual layers.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-card-border space-y-3 text-center sm:text-left">
                      <div className="h-10 w-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-2 mx-auto sm:mx-0">
                        <Zap className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">High-Frequency Word Lists</h4>
                      <p className="text-xs text-muted-text leading-relaxed">
                        Over 80% of Quranic vocabulary is comprised of fewer than 500 recurring root terms. Our interactive flashcard system helps students master these high-yield roots within the first 60 days.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-card-border space-y-3 text-center sm:text-left">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2 mx-auto sm:mx-0">
                        <Volume2 className="h-5 w-5" />
                      </div>
                      <h4 className="text-base font-bold text-foreground">Grammar &amp; Rhetoric (Nahw &amp; Balaghah)</h4>
                      <p className="text-xs text-muted-text leading-relaxed">
                        Understand essential grammatical markers (harakat), past vs. present verb intentions, and divine rhetorical questions that make the Quran's cadence so magnetically powerful.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </section>

      {/* 4. SAMPLE LESSON CURRICULUM (Interactive 30/45-Min Anatomy & Progression) */}
      <section className="py-20 bg-background border-b border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 inline-block">
              Inside a Live Class
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Sample Lesson Curriculum: What Happens in Every Class
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Every 30 or 45-minute online Tafseer session is structured with pedagogical precision. We do not just read text; we systematically unpack linguistics, historical context, scholarly commentary, and personal life reflection.
            </p>
          </div>

          {/* 6-Step Lesson Flow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessonCurriculumSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="glass p-7 rounded-3xl border border-card-border hover:border-primary/40 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="h-10 w-10 rounded-2xl bg-primary/10 text-primary font-extrabold text-sm flex items-center justify-center">
                      {stepItem.step}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-text bg-foreground/5 px-2.5 py-1 rounded-full">
                      {stepItem.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 4-Stage Study Progression Pathway */}
          <div className="p-8 sm:p-10 rounded-3xl bg-card border border-card-border space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">Learning Roadmap</span>
                <h3 className="text-2xl font-extrabold text-foreground">Stage-by-Stage Study Progression</h3>
              </div>
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
              >
                <span>Request Custom Syllabus</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {progressionStages.map((stg, i) => (
                <div key={i} className="p-5 rounded-2xl bg-foreground/[0.02] border border-card-border space-y-2.5 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {stg.stage}
                    </span>
                    <span className="text-[11px] font-semibold text-muted-text">{stg.duration}</span>
                  </div>
                  <h4 className="text-sm font-bold text-foreground pt-1">{stg.title}</h4>
                  <p className="text-xs text-muted-text leading-relaxed">{stg.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. SCHOLAR CREDENTIALS & FACULTY HIGHLIGHTS */}
      <section className="py-20 bg-foreground/[0.01] border-b border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
              Verified Scholarly Faculty
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Rigorous Scholar Credentials &amp; Faculty Standards
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Tafseer is a sacred trust (Amanah). Misinterpreting the words of Allah without authorized classical training is a grave religious error. At OQTutor, every single Tafseer tutor is a rigorously verified graduate of esteemed Islamic universities holding authenticated chains of transmission (Sanad).
            </p>
          </div>

          {/* 6 Standards of Credentialing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarCredentialsList.map((cred, idx) => (
              <div
                key={idx}
                className="glass p-7 rounded-3xl border border-card-border space-y-3 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{cred.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  {cred.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Real Featured Scholars Cards */}
          <div className="pt-4 space-y-6">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-text">Meet Some of Our Tafseer Faculty</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredScholars.map((sch, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-3xl border border-card-border shadow-md space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-16 w-16 rounded-2xl overflow-hidden border-2 border-primary/20 shrink-0">
                        <Image
                          src={sch.image}
                          alt={sch.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-foreground">{sch.name}</h4>
                        <span className="text-xs font-semibold text-primary block">{sch.role}</span>
                        <div className="flex items-center space-x-1 pt-1 text-secondary">
                          <Star className="h-3.5 w-3.5 fill-secondary" />
                          <Star className="h-3.5 w-3.5 fill-secondary" />
                          <Star className="h-3.5 w-3.5 fill-secondary" />
                          <Star className="h-3.5 w-3.5 fill-secondary" />
                          <Star className="h-3.5 w-3.5 fill-secondary" />
                          <span className="text-[11px] font-bold text-muted-text ml-1">5.0</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs text-muted-text pt-2 border-t border-card-border/60">
                      <div>
                        <strong className="text-foreground">Education:</strong> {sch.credentials}
                      </div>
                      <div>
                        <strong className="text-foreground">Specialty:</strong> {sch.specialty}
                      </div>
                      <div>
                        <strong className="text-foreground">Experience:</strong> {sch.experience}
                      </div>
                      <div>
                        <strong className="text-foreground">Languages:</strong> {sch.languages}
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/tutors"
                    className="w-full py-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-semibold text-center block transition-colors"
                  >
                    View Verified Profile
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                href="/tutors"
                className="inline-flex items-center space-x-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
              >
                <span>Browse All 50+ Certified Quran Scholars</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TRANSLATION VS TAFSEER COMPARISON */}
      <section className="py-20 bg-background border-b border-card-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 inline-block">
              Crucial Distinction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Quran Translation vs. Quran Tafseer: Why Translation Alone Is Not Enough
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Many learners ask: &ldquo;Can I not simply read an English translation of the Quran?&rdquo; While translations are a helpful beginning, they convey only a literal approximation of classical Arabic words. Here is why studying Tafseer is essential:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Translation Card */}
            <div className="glass p-8 rounded-3xl border border-card-border space-y-4">
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider inline-block">
                Literal Word Rendering
              </span>
              <h3 className="text-xl font-extrabold text-foreground">Quran Translation</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                A translation merely replaces Arabic words with English equivalents. It provides an immediate literal glimpse but cannot capture metaphorical Arabic nuances, historical causes, or underlying wisdom.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-text pt-2">
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span>Provides basic literal meaning in English</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span>Leaves historical context and Asbab al-Nuzul unexplained</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                  <span>Often leads to misunderstandings of legal and theological ayahs</span>
                </li>
              </ul>
            </div>

            {/* Tafseer Card */}
            <div className="glass p-8 rounded-3xl border-2 border-primary/30 bg-primary/[0.02] shadow-xl space-y-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider inline-block">
                In-Depth Scholarly Explanation
              </span>
              <h3 className="text-xl font-extrabold text-foreground">Classical Quran Tafseer</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                Tafseer reveals <em>why</em> the verse was revealed, its precise Arabic root connotations, authentic Prophetic explanations (Hadith), how the Sahabah lived it, and its practical application to modern personal dilemmas.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-text pt-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Explains historical circumstances and occasions of revelation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Connects verses with authentic Sahih Hadiths &amp; classical exegesis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>Gives practical life solutions for family, ethics, and mental peace</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Informational cross-link box to blog posts */}
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-foreground">Want to compare classical commentaries before joining?</h4>
              <p className="text-xs text-muted-text">
                Read our in-depth scholarly guide on <Link href="/blog/tafseer-ibn-kathir-vs-al-jalalayn-beginners-guide" className="text-primary hover:underline font-semibold">Tafseer Ibn Kathir vs. Tafseer Al-Jalalayn for Beginners</Link> or discover <Link href="/blog/why-studying-juz-amma-tafseer-essential-guide" className="text-primary hover:underline font-semibold">Why Studying Juz Amma Tafseer Is Essential for Every Muslim</Link>.
              </p>
            </div>
            <Link
              href="/blog"
              className="px-5 py-2.5 rounded-full bg-card hover:bg-card-border text-foreground text-xs font-bold border border-card-border shrink-0 transition-colors"
            >
              Explore Tafseer Blog
            </Link>
          </div>

        </div>
      </section>

      {/* 7. TRANSPARENT PRICING & CLASS PLANS */}
      <section className="py-20 bg-foreground/[0.01] border-b border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
              Affordable &amp; Transparent
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
              Quran Tafseer Tuition Plans
            </h2>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              Simple monthly pricing with zero contracts and no hidden admission fees. All plans include live video instruction, shared screen whiteboard notes, and a free trial class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plansToDisplay.map((plan) => (
              <div
                key={plan.id}
                className={`glass p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  plan.isPopular
                    ? 'border-2 border-primary shadow-2xl relative bg-primary/[0.02]'
                    : 'border-card-border shadow-lg hover:border-primary/40'
                }`}
              >
                <div className="space-y-5">
                  {plan.isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                      <span className="text-xs text-muted-text">/ {plan.frequency}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-text pt-2 border-t border-card-border/60">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-card-border/60">
                  <Link
                    href="/book-free-trial"
                    className={`w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider block text-center transition-all ${
                      plan.isPopular
                        ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20'
                        : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                    }`}
                  >
                    {plan.ctaText || 'Book Free Trial'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <span className="text-xs text-muted-text">
              Looking for a custom schedule or family discount? <Link href="/contact" className="text-primary hover:underline font-semibold">Contact our support team</Link> or visit our full <Link href="/pricing" className="text-primary hover:underline font-semibold">pricing page</Link>.
            </span>
          </div>

        </div>
      </section>

      {/* 8. STUDENT TESTIMONIALS */}
      {testimonials && testimonials.length > 0 && (
        <Testimonials data={testimonials} />
      )}

      {/* 9. AVAILABLE STATES BLOCK (FOR USA AUDIENCE SEO) */}
      <AvailableStatesBlock courseName="Online Quran Tafseer" />

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-background border-b border-card-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Questions About Online Quran Tafseer Classes
            </h2>
            <p className="text-sm sm:text-base text-muted-text">
              Direct answers to common questions about our syllabus, scholars, and class structures.
            </p>
          </div>

          <div className="space-y-4">
            {tafseerFaqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-card-border bg-card overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-xs sm:text-sm font-bold">{faq.question}</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-text/60 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-card-border/50">
                          <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 11. FINAL CONVERSION CTA */}
      <section className="py-20 bg-foreground/[0.01]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-14 rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/15 border border-primary/20 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block">
              Start With Zero Financial Risk
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
              Begin Your Quran Tafseer Journey Today
            </h2>
            <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
              Experience the difference of learning with qualified Islamic scholars. Book a free 30-minute evaluation session to discuss your study goals, meet your tutor, and experience live 1-on-1 or group Tafseer instruction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Link
                href="/book-free-trial"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/25 hover:shadow-xl transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>Book Free Trial Class</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs sm:text-sm font-bold uppercase tracking-wider transition-all text-center"
              >
                View All Quran Courses
              </Link>
            </div>
            <div className="pt-2 text-xs text-muted-text">
              ✓ Free 30-min evaluation • ✓ No credit card required • ✓ Male &amp; female scholars available
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
