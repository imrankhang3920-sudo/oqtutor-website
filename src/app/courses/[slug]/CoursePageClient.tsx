'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Award, Clock, Calendar, Users, 
  CheckCircle, HelpCircle, ChevronDown, ArrowRight, ShieldCheck, Star
} from 'lucide-react';
import Link from 'next/link';
import { CourseData, ContactData } from '@/data/db';
import Image from 'next/image';

export default function CoursePageClient({
  course,
  contactData
}: {
  course: CourseData;
  contactData: ContactData;
}) {
  if (course.slug === 'noorani-qaida') {
    return <NooraniQaidaContent course={course} contactData={contactData} />;
  }

  if (course.slug === 'quran-reading') {
    return <QuranReadingContent course={course} contactData={contactData} />;
  }

  if (course.slug === 'female-quran-teacher') {
    return <FemaleQuranTeacherContent course={course} contactData={contactData} />;
  }

  const [openCurriculumIdx, setOpenCurriculumIdx] = useState<number | null>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleCurriculum = (idx: number) => {
    setOpenCurriculumIdx(openCurriculumIdx === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <main className="flex-grow bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        {/* Animated background glow */}
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Premium Curriculum
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {course.seoTitle}
              </h1>
              <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 mt-4 rounded-full" />
              <p className="mt-6 text-sm sm:text-base text-muted-text leading-relaxed max-w-2xl">
                {course.overview}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all inline-flex items-center space-x-2"
                >
                  <span>Book Free Trial Classes</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all"
                >
                  View Packages
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-xs text-muted-text border-t border-card-border/50 pt-8">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>No Registration Contract</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Ijazah Certified Teachers</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3.5 rounded-3xl border-card-border shadow-2xl relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={320}
                    priority
                    className="w-full rounded-2xl object-cover h-[320px] shadow-inner"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-card-border/60 text-center shadow-lg">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Recommended Age</span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">{course.recommendedAge}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COURSE OVERVIEW & WHO SHOULD JOIN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Overview */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Course Description</h2>
              <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal mb-6">
                Our custom **{course.title}** program is engineered to provide an engaging, highly spiritual virtual classroom environment. We combine the classic rules of recitation and phonetics with modern pedagogical tools to simplify learning for both children and adults.
              </p>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                Whether you are establishing basic recognition or correcting hidden vocal flaws in advanced chapters, our tailored syllabus provides clean, measurable progress reporting week by week.
              </p>
            </div>

            {/* Who should join Card */}
            <div className="lg:col-span-5">
              <div className="glass p-8 rounded-3xl border-card-border shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Who Should Join?</h3>
                  <div className="h-1 w-12 bg-primary mb-6 rounded-full" />
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    {course.whoShouldJoin}
                  </p>
                </div>
                <div className="mt-8 border-t border-card-border/50 pt-6">
                  <h4 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-3">Key Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-xs">
                      <Clock className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>{course.duration} Duration</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <Users className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>{course.suitableFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BENEFITS & LEARNING OUTCOMES */}
      <section className="py-20 bg-foreground/[0.005] border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Why This Course?</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Core Benefits & Learning Outcomes
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Outcomes */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2.5">
                <CheckCircle className="h-5.5 w-5.5 text-secondary" />
                <span>What You Will Accomplish</span>
              </h3>
              <div className="space-y-4">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 glass p-4.5 rounded-2xl border-card-border hover:border-secondary/20 transition-all duration-300">
                    <div className="p-1 rounded-full bg-secondary/15 text-secondary shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center space-x-2.5">
                <Award className="h-5.5 w-5.5 text-primary" />
                <span>Special Program Benefits</span>
              </h3>
              <div className="space-y-4">
                {course.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5 glass p-4.5 rounded-2xl border-card-border hover:border-primary/20 transition-all duration-300">
                    <div className="p-1 rounded-full bg-primary/15 text-primary shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. COURSE CURRICULUM */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Syllabus Breakdown</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              What You Study Step-by-Step
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {course.curriculumSteps.map((step, idx) => {
              const isOpen = openCurriculumIdx === idx;
              return (
                <div key={idx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleCurriculum(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="h-8 w-8 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base font-bold">{step.title}</span>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-muted-text/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
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
                          <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal pt-4 pl-12">
                            {step.description}
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

      {/* 5. TEACHING METHOD & TEACHERS */}
      <section className="py-20 bg-foreground/[0.005] border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Method info */}
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Our Teaching Methodology</h2>
              <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal mb-6">
                {course.teachingMethod}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>**One-on-One Live Video Rooms**: No group distractions, 100% individual teacher focus.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>**Interactive Tools**: Pointing indicators, highlighted spelling marks, and drawing pens.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>**Positive Encouragement**: Reward charts and kids motivation systems to ensure high excitement.</span>
                </div>
              </div>
            </div>

            {/* Teachers info */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>Male & Female Scholars</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                We understand and respect cultural preferences. That is why we employ dedicated, certified **male and female Quran scholars** holding authentic Ijazah qualifications. Sisters and children can study with female teachers, while boys can be assigned male scholars.
              </p>
              <div className="flex items-center space-x-4 border-t border-card-border/50 pt-6">
                <div className="h-12 w-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm shrink-0">
                  OQ
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Assigned Specifically</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text">Select your choice in the registration form.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CLASS DURATION & FLEXIBLE TIMINGS */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -translate-x-8 -translate-y-8" />
            <h2 className="text-3xl font-extrabold text-foreground mb-4">Flexible 24/7 Scheduling & Structure</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-sm sm:text-base text-muted-text max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              All our classes are structured as **{course.classStructure}** We operate 24 hours a day, 7 days a week, allowing you to select and modify class schedules that perfectly mesh with school, work, or university semesters.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-left sm:text-center">
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">30 Mins</span>
                <span className="text-[10px] text-muted-text block mt-1">Class Duration</span>
              </div>
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">1-on-1</span>
                <span className="text-[10px] text-muted-text block mt-1">Class Mode</span>
              </div>
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">24 / 7</span>
                <span className="text-[10px] text-muted-text block mt-1">Availablity</span>
              </div>
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">3 Days</span>
                <span className="text-[10px] text-muted-text block mt-1">Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DYNAMIC COURSE FAQs */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border mb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">FAQ</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Frequently Asked Questions
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
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

    </main>
  );
}

function NooraniQaidaContent({
  course,
  contactData
}: {
  course: CourseData;
  contactData: ContactData;
}) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const curriculumPoints = [
    {
      title: "Arabic Alphabet & Makharij",
      desc: "Pronounce each letter from its correct point of articulation (throat, mouth, tongue, lips)."
    },
    {
      title: "Joined and Separate Letter Shapes",
      desc: "Recognise letters when they change form in connection with other letters."
    },
    {
      title: "Harakat (Short Vowels)",
      desc: "Learn Zabar, Zair, and Pesh, and how they change a letter's sound."
    },
    {
      title: "Tanween (Nunnation)",
      desc: "Master the double vowel sound (double Zabar, double Zair, double Pesh) at the end of words."
    },
    {
      title: "Madd Letters (Long Vowels)",
      desc: "Learn the rules of elongation and when to stretch sounds."
    },
    {
      title: "Leen Letters",
      desc: "Master soft vowel sounds and soft pronunciations."
    },
    {
      title: "Sukoon and Tashdeed",
      desc: "Understand stopping (silent letters) and doubling of letters (shaddah)."
    },
    {
      title: "Basic Rules of Noon and Meem Sakin",
      desc: "Receive a foundational introduction to key Tajweed rules."
    },
    {
      title: "Waqf (Pausing Rules)",
      desc: "Learn where and how to stop correctly while reading Quranic verses."
    }
  ];

  const whoShouldJoinList = [
    {
      title: "Children (age 4+)",
      desc: "Learning the Arabic alphabet for the very first time with kid-friendly activities."
    },
    {
      title: "Adults",
      desc: "Who never learned to read Arabic and want to start from the basics in a structured environment."
    },
    {
      title: "New Muslims & Reverts",
      desc: "Who need a patient, supportive, and judgment-free introduction to reading Arabic."
    },
    {
      title: "Students Refreshing Basics",
      desc: "Refreshing their articulation and rules before moving on to full Quran reading."
    }
  ];

  const benefitsList = [
    {
      title: "One-to-one attention",
      desc: "Mistakes are corrected immediately in real-time, instead of being repeated for weeks in a crowded group classroom."
    },
    {
      title: "Certified, experienced tutors",
      desc: "Every tutor is fully trained in Tajweed and experienced with both children and adults. You can select your preferred teacher."
    },
    {
      title: "Flexible timing",
      desc: "Classes fit around your family's routine, wherever you are in the UK, Europe, USA, or beyond."
    },
    {
      title: "Learn from home",
      desc: "No commute after school or work — just connect from any phone, tablet, or laptop."
    },
    {
      title: "A clear path forward",
      desc: "Move naturally to Quran Reading with Tajweed, and later to Hifz (Quran memorization) if you wish to continue."
    }
  ];

  return (
    <main className="flex-grow bg-background text-foreground">
      
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Course 1 — Foundation
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Noorani Qaida Online Course
              </h1>
              <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 mt-4 rounded-full" />
              <p className="mt-6 text-sm sm:text-base text-muted-text leading-relaxed max-w-2xl font-normal">
                Noorani Qaida is the first step every Muslim takes before reading the Holy Quran. It teaches the Arabic alphabet, correct pronunciation, and the basic rules of Tajweed in a simple, step-by-step way. At OQTutor, we teach this course online, one-to-one, with certified tutors — for kids and adults, anywhere in the world.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all inline-flex items-center space-x-2"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3.5 rounded-3xl border-card-border shadow-2xl relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={320}
                    priority
                    className="w-full rounded-2xl object-cover h-[320px] shadow-inner"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-card-border/60 text-center shadow-lg">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Recommended Age</span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">{course.recommendedAge}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS & WHY IMPORTANT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">What is Noorani Qaida?</h2>
              <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
              <p className="text-sm text-muted-text leading-relaxed mb-4 font-normal">
                Noorani Qaida is a small teaching booklet that has been used for generations to help beginners learn Arabic letters correctly before moving to the Quran. It breaks reading down into small, manageable steps — starting from single letters and building up to full words with the correct sounds and rules attached.
              </p>
              <p className="text-sm text-muted-text leading-relaxed font-normal">
                Think of it as the &quot;alphabet stage&quot; of Quran learning. Just like a child learns the ABCs before reading English books, a student learns Noorani Qaida before reading the Quran.
              </p>
            </div>
            
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">Why is Noorani Qaida Important?</h2>
              <div className="h-1 w-16 bg-primary mb-6 rounded-full" />
              <p className="text-sm text-muted-text leading-relaxed mb-4 font-normal">
                The Quran must be read with correct Tajweed — the rules that govern how each letter is pronounced, when to pause, and when to elongate a sound. Skipping Noorani Qaida and jumping straight into the Quran often leads to mistakes that are hard to unlearn later.
              </p>
              <p className="text-sm text-muted-text leading-relaxed font-normal">
                Noorani Qaida solves this by teaching those rules early, in small doses, so that by the time a student opens the Quran, correct pronunciation already feels natural.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO SHOULD JOIN */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Enrolling Students</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground font-extrabold">Who Should Join This Course?</p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoShouldJoinList.map((item, idx) => (
              <div key={idx} className="glass p-6.5 rounded-2xl border-card-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-xs text-muted-text leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WILL I LEARN */}
      <section className="py-20 border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Course Syllabus</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground font-extrabold">What Will I Learn in This Course?</p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumPoints.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border-card-border hover:border-secondary/20 transition-all duration-300">
                <div className="flex items-center space-x-3.5 mb-3">
                  <span className="h-7 w-7 rounded-full bg-secondary/15 text-secondary text-xs flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-text leading-relaxed pl-10.5 font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center max-w-3xl mx-auto p-6 rounded-2xl bg-secondary/5 border border-secondary/10">
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-semibold">
              By the end, students can read basic Quranic words and short verses with correct pronunciation, ready to move to our <Link href="/courses/quran-reading" className="text-secondary hover:underline underline-offset-4">Quran Reading course</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* DURATION & FEES */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Duration */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-foreground mb-4">How Long Does Noorani Qaida Take to Complete?</h2>
                <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
                <p className="text-sm text-muted-text leading-relaxed font-normal">
                  Most students finish in <strong className="text-foreground">2 to 3 months</strong>, depending on age, consistency, and how many classes are taken per week. Adults often move a little faster than children, though the goal is always accuracy over speed.
                </p>
              </div>
              <div className="mt-8 border-t border-card-border/50 pt-6">
                <div className="flex items-center space-x-3 text-xs">
                  <Clock className="h-5 w-5 text-secondary shrink-0" />
                  <span className="font-bold text-foreground">Standard Completion Time: 2-3 Months</span>
                </div>
              </div>
            </div>

            {/* Structure & Fees */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-foreground mb-4">Class Structure and Fees</h2>
                <div className="h-1 w-16 bg-primary mb-6 rounded-full" />
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-normal"><strong className="text-foreground">Class type:</strong> One-to-one, live with your assigned tutor</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-normal"><strong className="text-foreground">Duration:</strong> 30 minutes per class</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-normal"><strong className="text-foreground">Frequency:</strong> 2 to 5 classes a week, based on your plan</span>
                  </li>
                  <li className="flex items-start space-x-3 text-sm">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-normal"><strong className="text-foreground">Tutors:</strong> Certified male and female teachers, your choice</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 border-t border-card-border/50 pt-6">
                <p className="text-xs text-muted-text font-semibold">
                  Full pricing details are on our <Link href="/pricing" className="text-primary hover:underline underline-offset-4">pricing page</Link>.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* WHY LEARN WITH OQTUTOR */}
      <section className="py-20 border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Why Us</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground font-extrabold">Why Learn Noorani Qaida with OQTutor?</p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsList.map((item, idx) => {
              let descNode = <span className="text-xs text-muted-text leading-relaxed font-normal">{item.desc}</span>;
              if (idx === 1) { // Certified tutors
                descNode = (
                  <span className="text-xs text-muted-text leading-relaxed font-normal">
                    Every tutor is trained in Tajweed and experienced with both children and adults. See our full <Link href="/tutors" className="text-primary hover:underline">list of tutors here</Link>.
                  </span>
                );
              } else if (idx === 2) { // Flexible timing
                descNode = (
                  <span className="text-xs text-muted-text leading-relaxed font-normal">
                    Classes fit around your family's routine, wherever you are in the UK, Europe, or beyond. Learn more about <Link href="/how-it-works" className="text-primary hover:underline">how our classes work</Link>.
                  </span>
                );
              } else if (idx === 4) { // Clear path
                descNode = (
                  <span className="text-xs text-muted-text leading-relaxed font-normal">
                    After Noorani Qaida, students move naturally to <Link href="/courses/tajweed" className="text-primary hover:underline">Quran Reading with Tajweed</Link>, and later to <Link href="/courses/hifz" className="text-primary hover:underline">Hifz (Quran memorization)</Link> if they choose to continue.
                  </span>
                );
              }
              return (
                <div key={idx} className="glass p-6.5 rounded-2xl border-card-border hover:border-primary/20 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-3 flex items-center space-x-2">
                      <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>{item.title}</span>
                    </h3>
                    {descNode}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">FAQ</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground font-extrabold">Frequently Asked Questions</p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="space-y-4">
            {course.faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              let answerNode = <p className="text-xs sm:text-sm text-muted-text leading-relaxed pt-4 font-normal">{faq.answer}</p>;
              if (idx === 3) { // How many classes
                answerNode = (
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed pt-4 font-normal">
                    Most students take 2 to 4 classes a week. More frequent classes usually mean faster progress, but the right number depends on the student's age and schedule. Our team can help you choose a plan — see <Link href="/pricing" className="text-primary font-bold hover:underline">pricing options here</Link>.
                  </p>
                );
              } else if (idx === 4) { // Female tutors
                answerNode = (
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed pt-4 font-normal">
                    Yes. We have both male and female certified tutors, and you can request your preference when booking. Browse our <Link href="/tutors" className="text-primary font-bold hover:underline">tutors here</Link>.
                  </p>
                );
              } else if (idx === 5) { // What happens after
                answerNode = (
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed pt-4 font-normal">
                    Students move on to our <Link href="/courses/quran-reading" className="text-primary font-bold hover:underline">Quran Reading course</Link>, where they begin reading directly from the Quran with proper Tajweed rules applied.
                  </p>
                );
              } else if (idx === 6) { // Free trial
                answerNode = (
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed pt-4 font-normal">
                    Yes. You can try a class for free before committing to any monthly plan. <Link href="/book-free-trial" className="text-primary font-bold hover:underline">Book your free trial here</Link>.
                  </p>
                );
              }
              return (
                <div key={idx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <div className="flex items-center space-x-3.5 pr-4">
                      <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
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
                          {answerNode}
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

      {/* FINAL CTA */}
      <section className="py-20 border-t border-card-border mb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -translate-x-8 -translate-y-8" />
            <h2 className="text-3xl font-extrabold text-foreground mb-4">Ready to Start?</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book-free-trial"
                className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                Book a free trial class
              </Link>
              <Link
                href="/courses"
                className="px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all"
              >
                Browse full range of courses
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}


function QuranReadingContent({
  course,
  contactData
}: {
  course: any;
  contactData: any;
}) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const whoCanJoin = [
    {
      title: "Kids (Ages 4+)",
      desc: "Patient, child-friendly teachers who use color-coded digital slides, interactive games, and positive reinforcement to make recitation fun."
    },
    {
      title: "Adult Learners",
      desc: "Private 1-on-1 sessions tailored to fit busy schedules, providing a supportive environment to build reading confidence."
    },
    {
      title: "Beginners",
      desc: "Start from absolute zero. Learn letter sounds and basic phonetics with our Noorani Qaida course before moving to verses."
    },
    {
      title: "Reverts",
      desc: "Receive patient guidance on reading short prayers, common Surahs for Salah, and daily supplications (Duas)."
    },
    {
      title: "Sisters Seeking Female Tutors",
      desc: "Private, comfortable environment with certified female teachers. Recite aloud from home without needing hijab in class."
    }
  ];

  const roadmapSteps = [
    { step: "1", title: "Assessment", desc: "Evaluate baseline reading and establish goals." },
    { step: "2", title: "Arabic Letters", desc: "Master throat and mouth articulation points." },
    { step: "3", title: "Noorani Qaida", desc: "Learn connection rules and joint shapes." },
    { step: "4", title: "Word Reading", desc: "Transition into grouping letters smoothly." },
    { step: "5", title: "Quran Reading", desc: "Begin reciting actual pages of the Quran." },
    { step: "6", title: "Basic Tajweed", desc: "Apply basic stretching and pausing rules." },
    { step: "7", title: "Fluent Recitation", desc: "Achieve independent flow and finish the Quran." }
  ];

  const features = [
    { name: "Live One-on-One Classes", Starter: "Yes (100% Focused)", Standard: "Yes (100% Focused)", Premium: "Yes (100% Focused)" },
    { name: "Teacher Options", Starter: "Male or Female", Starter_Class: "text-secondary font-semibold text-xs", Standard: "Male or Female", Standard_Class: "text-secondary font-semibold text-xs", Premium: "Male or Female", Premium_Class: "text-secondary font-semibold text-xs" },
    { name: "Curriculum Focus", Starter: "Noorani Qaida & Basic Reading", Starter_Class: "text-muted-text text-xs", Standard: "Reading + Islamic Studies & Duas", Standard_Class: "text-muted-text text-xs", Premium: "Reading + Custom Tafseer/Hifz", Premium_Class: "text-muted-text text-xs" },
    { name: "Class Frequency", Starter: "3 Days / Week", Starter_Class: "text-foreground font-semibold text-xs", Standard: "5 Days / Week", Standard_Class: "text-foreground font-semibold text-xs", Premium: "Daily (7 Days / Week)", Premium_Class: "text-foreground font-semibold text-xs" },
    { name: "Progress Tracking", Starter: "Monthly reports", Starter_Class: "text-muted-text text-xs", Standard: "Monthly reports + Homework support", Standard_Class: "text-muted-text text-xs", Premium: "Direct feedback & Priority support", Premium_Class: "text-muted-text text-xs" },
    { name: "Pricing", Starter: "$30 / Month", Starter_Class: "text-primary font-bold text-xs", Standard: "$40 / Month", Standard_Class: "text-primary font-bold text-xs", Premium: "$50 / Month", Premium_Class: "text-primary font-bold text-xs" }
  ];

  const whyChooseUs = [
    { title: "Student-Centered Pacing", desc: "If a child needs more time to master a concept, we slow down. We prioritize deep understanding over quick rushing." },
    { title: "Vetted & DBS-Checked Tutors", desc: "Every teacher goes through rigid identity, qualification, and background record checks to ensure absolute safety." },
    { title: "Encouraging Methodology", desc: "No strict discipline. Tutors build warm, friendly relationships with kids, motivating them with positive reinforcement." },
    { title: "Affordable Family Packages", desc: "We offer flexible packages starting at $30/mo, plus sibling discounts to make Quranic education accessible." }
  ];

  const onlineBenefits = [
    { title: "Save Travel Time", desc: "No more driving to physical centers during rush hour. Connect directly in seconds." },
    { title: "Learn from Home", desc: "Comfortable, safe learning environment under direct parental supervision." },
    { title: "Individual Attention", desc: "100% focused attention for the entire class, accelerating progress by up to 3x." },
    { title: "Consistent Practice", desc: "Easy scheduling leads to fewer missed classes and reliable academic routines." }
  ];

  const faqs = [
    {
      question: "How can I learn Quran reading online?",
      answer: "You can start by booking a free trial class on our website. You only need a device (computer, tablet, or smartphone) with an internet connection, a camera, and a microphone. Once matched, you will log in to a secure online classroom to study live one-on-one with your teacher."
    },
    {
      question: "How long does it take to read the Quran fluently?",
      answer: "The timeline varies depending on the student's age, consistency, and initial level. On average, a student attending 3 classes a week can learn to read the Quran fluently within 6 to 12 months."
    },
    {
      question: "Do you teach adults and beginners?",
      answer: "Yes, we welcome adult beginners and reverts of all ages. Our tutors are trained to teach mature students, adjusting pacing to match their schedules and learning style."
    },
    {
      question: "Do you teach Noorani Qaida first?",
      answer: "Yes, for absolute beginners who cannot read Arabic, we start with the Noorani Qaida Course to build letter recognition and connection skills."
    },
    {
      question: "Are female teachers available?",
      answer: "Yes, we have certified female Quran teachers available for sisters and children. You can select your preference during registration."
    },
    {
      question: "How many classes per week do you recommend?",
      answer: "We recommend 3 classes per week for optimal retention. However, we offer flexible packages for 2, 3, or 5 classes per week."
    },
    {
      question: "What technology is required?",
      answer: "A stable internet connection, a laptop or tablet, and Zoom or Skype software are all you need. All learning materials are provided digitally by the teacher."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 3-day free trial with no card details or long-term contracts required."
    },
    {
      question: "What ages do you teach?",
      answer: "We teach students from age 4 to adults. For kids under 6, sessions focus on visual games and short letter-sound exercises."
    },
    {
      question: "Can I change my class timings later?",
      answer: "Yes, you can adjust your schedule or pause your subscription at any time. Simply contact our support team."
    },
    {
      question: "Is Tajweed included in this course?",
      answer: "Yes, basic Tajweed rules are integrated into the reading classes. For in-depth study, we recommend our Quran with Tajweed Course."
    },
    {
      question: "Do you offer sibling or family discounts?",
      answer: "Yes, we offer up to 15% discount for multiple family members registered from the same household."
    }
  ];

  return (
    <main className="flex-grow bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Reading Fluency Program
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Online Quran Reading Classes with Certified Quran Teachers
              </h1>
              <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 mt-4 rounded-full" />
              <p className="mt-6 text-sm sm:text-base text-muted-text leading-relaxed max-w-2xl font-normal">
                Start the journey of reading the Quran correctly. At OQTutor, we connect you with certified scholars for private, <Link href="/courses" className="text-primary font-semibold hover:underline">1-on-1 lessons</Link>. Tutors guide you step-by-step through our <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida Course</Link> or prepare you for the advanced <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Quran with Tajweed Course</Link> entirely from home.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all inline-flex items-center space-x-2"
                >
                  <span>Book Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/courses"
                  className="px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all"
                >
                  View Courses
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Contact Us
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-xs text-muted-text border-t border-card-border/50 pt-8">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>One-on-One Classes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Male & Female Teachers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Flexible Schedule</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Kids & Adults</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3.5 rounded-3xl border-card-border shadow-2xl relative overflow-hidden">
                  <Image
                    src="/quran-reading.jpg"
                    alt="online quran reading classes with a certified tutor explaining letters"
                    width={400}
                    height={320}
                    priority
                    className="w-full rounded-2xl object-cover h-[320px] shadow-inner"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-card-border/60 text-center shadow-lg">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Featured Course</span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">Learn Quran Reading Online</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CONFIDENCE SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest text-center">Reading Flow</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Learn Quran Reading Online with Confidence
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="space-y-6 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
              <p>
                The Holy Quran is the literal word of Allah, revealed in a specific style. Reciting the Quran correctly is a spiritual responsibility that ensures the meanings of the verses are preserved.
              </p>
              <p>
                By enrolling in our structured <Link href="/" className="text-primary font-semibold hover:underline">online Quran Academy</Link>, you bypass commute struggles and study in a comfortable home environment.
              </p>
              <p>
                Under the guidance of an <Link href="/tutors" className="text-primary font-semibold hover:underline">experienced Quran reading tutor</Link>, our private, one-on-one sessions guarantee 100% focused attention, helping you correct mistakes immediately and build reading fluency up to 3x faster.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl border-card-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Personalized Instruction Matters</h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                Every student learns at a different pace. Our tutors patiently customize lessons, using positive reinforcement to make class the highlight of your child's day.
              </p>
              <div className="flex items-center space-x-3 text-xs sm:text-sm font-bold text-foreground">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span>Zero Peer Pressure or Distractions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO CAN JOIN */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Eligibility</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Who Can Join Our Quran Reading Course?
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoCanJoin.map((item, idx) => {
              let linkedDesc: React.ReactNode = item.desc;
              if (item.title.includes("Adult")) {
                linkedDesc = (
                  <span>
                    Private 1-on-1 sessions tailored to fit busy schedules, providing a supportive environment to build reading confidence. View our affordable <Link href="/pricing" className="text-primary hover:underline font-semibold">pricing packages</Link>.
                  </span>
                );
              } else if (item.title.includes("Beginner")) {
                linkedDesc = (
                  <span>
                    Start from absolute zero. Learn letter sounds and basic phonetics with our <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida course</Link> before moving to verses.
                  </span>
                );
              } else if (item.title.includes("Revert")) {
                linkedDesc = (
                  <span>
                    Receive patient guidance on reading short prayers, common Surahs for <Link href="/courses/salah-course" className="text-primary hover:underline font-semibold">Salah</Link>, and <Link href="/courses/daily-duas" className="text-primary hover:underline font-semibold">daily supplications (Duas)</Link>.
                  </span>
                );
              } else if (item.title.includes("Sister")) {
                linkedDesc = (
                  <span>
                    Private, comfortable environment with a certified <Link href="/courses/female-quran-teacher" className="text-primary hover:underline font-semibold">female Quran teacher</Link>. Recite aloud from home without needing hijab in class.
                  </span>
                );
              }
              return (
                <div key={idx} className="glass p-6.5 rounded-2xl border-card-border hover:border-primary/20 transition-all duration-300">
                  <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-text leading-relaxed font-normal">{linkedDesc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU WILL LEARN */}
      <section className="py-20 border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Curriculum</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              What You Will Learn
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Core Foundations</h3>
                <ul className="space-y-3.5 text-xs text-muted-text">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Arabic Alphabet**: Articulate all letters correctly (Makharij).</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Noorani Qaida rules**: Master vowels, silent letters, and connection shapes in our <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida Course</Link>.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Word Bridging**: Read two, three, and four-letter words smoothly.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Language Basics**: Build vocabulary to prepare for our <Link href="/courses/arabic-language" className="text-primary hover:underline font-semibold">Arabic Course</Link>.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-card-border flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Reading Fluency</h3>
                <ul className="space-y-3.5 text-xs text-muted-text">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Sentence Recitation**: Transition to reading full Quranic phrases smoothly.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Basic Tajweed**: Apply core phonetics rules (Madd, Ghunnah, Qalqalah) to prepare for our <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Quran with Tajweed Course</Link>.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Confidence & Flow**: Learn pausing symbols (waqf) to recite with rhythm.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>**Hifz Preparation**: Build solid reading foundations for our <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Quran Memorization Course</Link>.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROADMAP METHODOLOGY */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Roadmap</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Our Step-by-Step Learning Method
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
            {roadmapSteps.map((step, idx) => {
              let stepDesc: React.ReactNode = step.desc;
              if (step.title.includes("Qaida")) {
                stepDesc = (
                  <span>
                    Study the spelling and connection rules of <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-medium">Noorani Qaida</Link>.
                  </span>
                );
              }
              return (
                <div key={idx} className="glass p-5 rounded-2xl border-card-border text-center flex flex-col items-center justify-between">
                  <span className="h-8 w-8 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mb-3">
                    {step.step}
                  </span>
                  <h4 className="font-bold text-xs text-foreground mb-1">{step.title}</h4>
                  <p className="text-[10px] text-muted-text leading-relaxed font-normal">{stepDesc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. COURSE FEATURES COMPARISON */}
      <section className="py-20 border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Feature Comparison</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Course Features & Packages
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-card-border glass shadow-xl max-w-4xl mx-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-primary/10 border-b border-card-border text-primary font-bold">
                  <th className="px-6 py-4 font-bold">Feature Name</th>
                  <th className="px-6 py-4 font-bold">Starter Plan</th>
                  <th className="px-6 py-4 font-bold">Standard Plan</th>
                  <th className="px-6 py-4 font-bold">Premium Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border/40">
                {features.map((f, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.01] transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground text-xs sm:text-sm">{f.name}</td>
                    <td className={`px-6 py-4 ${f.Starter_Class || "text-muted-text text-xs"}`}>{f.Starter}</td>
                    <td className={`px-6 py-4 ${f.Standard_Class || "text-muted-text text-xs"}`}>{f.Standard}</td>
                    <td className={`px-6 py-4 ${f.Premium_Class || "text-muted-text text-xs"}`}>{f.Premium}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE OQTUTOR */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Benefits</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Why Choose OQTutor?
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyChooseUs.map((item, idx) => {
              let linkedDesc: React.ReactNode = item.desc;
              if (item.title.includes("Affordable")) {
                linkedDesc = (
                  <span>
                    We offer flexible packages starting at $30/mo, plus sibling discounts to make Quranic education accessible. Learn more on our <Link href="/pricing" className="text-primary hover:underline font-semibold">pricing plans</Link>.
                  </span>
                );
              }
              return (
                <div key={idx} className="glass p-7 rounded-3xl border-card-border flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-xs text-muted-text leading-relaxed font-normal">{linkedDesc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. ONLINE BENEFITS CARDS */}
      <section className="py-20 border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">UX Advantages</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Benefits of Learning Quran Reading Online
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {onlineBenefits.map((item, idx) => (
              <div key={idx} className="glass p-6.5 rounded-2xl border-card-border text-center flex flex-col justify-between hover:border-secondary/20 transition-all duration-300">
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-[11px] text-muted-text leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY PARENTS TRUST OQTUTOR */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center relative overflow-hidden">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">Why Parents Trust OQTutor</h2>
            <div className="h-1 w-16 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-3xl mx-auto font-normal">
              Parental peace of mind is the core of our service. We prioritize transparent communication. Parents receive direct updates after every session, and they can request meetings with academic supervisors to adjust schedules or change teachers if necessary. Learn more <Link href="/about" className="text-primary hover:underline font-semibold">about our mission</Link>. Our patient, highly qualified educators ensure that children learn to love reading the Quran, rather than viewing it as a chore.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FAQs SECTION */}
      <section className="py-20 border-t border-card-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">FAQ</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Frequently Asked Questions
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq: { question: string; answer: string }, idx: number) => {
              const isOpen = openFaqIdx === idx;
              let linkedAnswer: React.ReactNode = faq.answer;
              if (faq.question.includes("Noorani Qaida")) {
                linkedAnswer = (
                  <span>
                    Yes, for absolute beginners who cannot read Arabic, we start with the <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-medium">Noorani Qaida Course</Link> to build letter recognition and connection skills.
                  </span>
                );
              } else if (faq.question.includes("Tajweed")) {
                linkedAnswer = (
                  <span>
                    Yes, basic Tajweed rules are integrated into the reading classes. For in-depth study, we recommend our <Link href="/courses/tajweed" className="text-primary hover:underline font-medium">Quran with Tajweed Course</Link>.
                  </span>
                );
              }
              return (
                <div key={idx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <span className="text-sm sm:text-base font-bold pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-text/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
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
                            {linkedAnswer}
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

      {/* 11. FINAL CTA */}
      <section className="py-20 border-t border-card-border mb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center relative overflow-hidden">
            <h2 className="text-3xl font-extrabold text-foreground mb-4">Start Your Free Trial Today</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
              Give your family the gift of structured Quranic education. Join thousands of Muslim families in the <Link href="/online-quran-classes-usa" className="text-primary hover:underline font-semibold">USA</Link>, <Link href="/online-quran-classes-uk" className="text-primary hover:underline font-semibold">UK</Link>, <Link href="/online-quran-classes-canada" className="text-primary hover:underline font-semibold">Canada</Link>, and <Link href="/locations/australia" className="text-primary hover:underline font-semibold">Australia</Link> who trust OQTutor for 1-on-1 online classes. Book your 3-day free trial today with no commitments.
            </p>
            <Link
              href="/book-free-trial"
              className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
            >
              Book Your Free Trial Class
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function FemaleQuranTeacherContent({
  course,
  contactData
}: {
  course: any;
  contactData: any;
}) {
  const [openCurriculumIdx, setOpenCurriculumIdx] = useState<number | null>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleCurriculum = (idx: number) => {
    setOpenCurriculumIdx(openCurriculumIdx === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const whyChooseItems = [
    {
      title: "Comfort and Privacy",
      desc: "For adult sisters and teenage girls, studying the Quran online with a female instructor offers complete privacy. You can ask questions freely and recite aloud without wearing a formal hijab during your private session."
    },
    {
      title: "Building Confidence",
      desc: "Learning Arabic pronunciation or Tajweed rules can be intimidating. Many sisters and young children feel more relaxed and less self-conscious when practicing with a patient female instructor."
    },
    {
      title: "Tailored Communication",
      desc: "Our female tutors bring a nurturing touch to classes, which is highly beneficial for kids. For adult sisters, sharing the learning journey with another sister creates a peer-like bond where she can study comfortably."
    },
    {
      title: "Respecting Religious Appropriateness",
      desc: "In accordance with Islamic values regarding modesty, many women prefer to learn from female scholars, aligning with the rich historical tradition of female Islamic scholarship."
    }
  ];

  const whoBenefitsItems = [
    {
      title: "Young Children",
      desc: "Nurturing female instructors use digital games, slides, and positive rewards to keep young minds engaged."
    },
    {
      title: "Teenage Girls",
      desc: "Tutors act as positive spiritual role models, helping teenage girls navigate faith questions and memorize Surahs."
    },
    {
      title: "Adult Sisters & Reverts",
      desc: "A judgment-free space to learn the basics of Wudu, Salah, daily supplications, and recitation from scratch."
    },
    {
      title: "Homeschooling Families",
      desc: "Structured lesson tracking and progress reports that integrate seamlessly into home study portfolios."
    }
  ];

  const courses = [
    { name: "Noorani Qaida", slug: "noorani-qaida", level: "Absolute Beginners", focus: "Arabic letters, shapes, Harakat, and connection basics" },
    { name: "Quran Reading", slug: "quran-reading", level: "Intermediate", focus: "Connecting words, rhythm, and waqf (pausing) rules" },
    { name: "Quran with Tajweed", slug: "tajweed", level: "Advanced", focus: "Phonetics, articulation points (makharij), and rules like Ghunnah" },
    { name: "Hifz-ul-Quran", slug: "hifz", level: "Dedicated", focus: "Step-by-step memorization of chapters with structured revision" },
    { name: "Islamic Studies", slug: "islamic-studies", level: "All Ages", focus: "Fiqh (prayer rules), Seerah, Hadith, and Islamic manners" },
    { name: "Daily Duas", slug: "daily-duas", level: "All Ages", focus: "Morning and evening Azkar, and prayers for daily protection" },
    { name: "Arabic Basics", slug: "arabic-language", level: "Beginner", focus: "Building vocabulary, root words, and understanding Quranic text" }
  ];

  const faqs = [
    {
      question: "Can women teach the Quran to other women and children?",
      answer: "Yes, women can teach the Quran to other women, sisters, and children of both genders. Historically, female scholars have played a vital role in preserving and teaching Islamic knowledge. Aisha (may Allah be pleased with her), the wife of the Prophet Muhammad (PBUH), was one of the leading scholars of her generation, teaching both men and women."
    },
    {
      question: "How do online Quran classes with a female teacher work?",
      answer: "Classes are conducted live online. Once you sign up and select a convenient time, you will receive a secure link to join a private virtual classroom. You and your teacher will interact via video and audio, sharing a digital Quran on the screen."
    },
    {
      question: "Can I choose a specific female Quran teacher?",
      answer: "Yes, you can request a specific teacher based on your language preferences, timezone, or course goals. During the registration process, simply mention your preferences, and we will pair you with the best match."
    },
    {
      question: "Do you offer female Quran teachers for young boys?",
      answer: "Yes, we offer female tutors for young boys (typically under the age of 10). Young children often respond very well to the patient, nurturing teaching style of our female educators."
    },
    {
      question: "Do you offer free trial lessons?",
      answer: "Yes, we offer 3 free trial classes. This allows you or your child to meet the teacher, experience a live one-on-one session, and receive an initial assessment before committing to a paid plan."
    },
    {
      question: "How long is each class session?",
      answer: "Each session is exactly 30 minutes long. This duration is optimized to maintain high focus and retention, especially for young children and busy adults."
    },
    {
      question: "How many times a week should my child attend?",
      answer: "We recommend 3 classes per week for consistent progress. However, we offer packages for 2, 3, or 5 days per week to fit your family's schedule and budget."
    },
    {
      question: "What software do I need for the classes?",
      answer: "You only need a device (computer, tablet, or smartphone) with a working internet connection, camera, and microphone. Classes are usually conducted via Zoom or Skype."
    },
    {
      question: "Can adult sisters who are absolute beginners join?",
      answer: "Yes, we welcome adult beginners of all ages. Our female tutors are highly patient and will start with you from the absolute basics, such as the pronunciation of single Arabic letters in Noorani Qaida."
    },
    {
      question: "Is Tajweed included in the reading course?",
      answer: "Yes, basic Tajweed rules are integrated into our Quran reading classes. If you wish to study Tajweed in-depth, we recommend our dedicated Quran with Tajweed course."
    },
    {
      question: "Can I learn Quran memorization (Hifz) with a female teacher?",
      answer: "Yes, we have certified female Hafiza teachers who specialize in Hifz. They will design a customized memorization and revision plan based on your goals."
    },
    {
      question: "Are your female teachers fluent in English?",
      answer: "Yes, all our female tutors speak fluent English and have extensive experience teaching students in the USA, UK, Canada, and Australia."
    },
    {
      question: "How do you track my child's progress?",
      answer: "We provide monthly progress reports detailing attendance, current surah progress, pronunciation accuracy, and teacher feedback."
    },
    {
      question: "What if I am not satisfied with my teacher after starting?",
      answer: "If you feel that the current teacher is not the right fit, you can contact our support team at any time. We will arrange a replacement teacher who matches your learning style."
    },
    {
      question: "Do you offer weekend classes?",
      answer: "Yes, we offer flexible slots on Saturdays and Sundays to accommodate families who are busy during the workweek."
    },
    {
      question: "Do I need to buy any books or materials?",
      answer: "No, all reading materials, including digital copies of Noorani Qaida and the Holy Quran, are provided online by the teacher during the class."
    },
    {
      question: "How do I pay for the classes?",
      answer: "Payments are processed securely online on a monthly subscription basis using credit/debit cards. There are no setup fees or hidden charges."
    },
    {
      question: "Can revert sisters join the classes?",
      answer: "Absolutely. We offer a supportive, welcoming environment for revert sisters. Our tutors will guide you patiently through prayer steps, basic Quran reading, and Islamic values."
    },
    {
      question: "Do you offer family discounts?",
      answer: "Yes, we offer sibling and family discounts for multiple registrations from the same household. Please contact our support team for custom pricing."
    },
    {
      question: "How do you ensure student safety online?",
      answer: "All classes are strictly private one-on-one sessions. We conduct criminal background checks on all our teachers and monitor virtual classrooms regularly to ensure a safe learning environment."
    }
  ];

  return (
    <main className="flex-grow bg-background text-foreground">
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Sisters & Children Focus
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Female Quran Teacher Online – Learn with Qualified Female Quran Tutors
              </h1>
              <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 mt-4 rounded-full" />
              <p className="mt-6 text-sm sm:text-base text-muted-text leading-relaxed max-w-2xl font-normal">
                Choosing the right path for Islamic education is one of the most important decisions a family can make. At OQTutor, we connect sisters, kids, and families with qualified <Link href="/tutors" className="text-primary font-semibold hover:underline">female Quran teachers</Link> online. Our private, one-on-one sessions are designed to provide a comfortable, supportive, and safe learning environment. Tutors guide you step-by-step through our <Link href="/courses/noorani-qaida" className="text-primary font-semibold hover:underline">Noorani Qaida Course</Link>, <Link href="/courses/quran-reading" className="text-primary font-semibold hover:underline">Quran Reading Course</Link>, <Link href="/courses/tajweed" className="text-primary font-semibold hover:underline">Tajweed Course</Link>, and <Link href="/courses/hifz" className="text-primary font-semibold hover:underline">Hifz Course</Link>, entirely at your own pace.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all inline-flex items-center space-x-2"
                >
                  <span>Book Free Trial Class</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all"
                >
                  View Packages
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start text-xs text-muted-text border-t border-card-border/50 pt-8">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>DBS-Checked Staff</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Flexible 24/7 Hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Ijazah Certified Scholars</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3.5 rounded-3xl border-card-border shadow-2xl relative overflow-hidden">
                  <Image
                    src="/female-teacher-girl.jpg"
                    alt="online female quran teacher conducting one-on-one class with a young girl"
                    width={400}
                    height={320}
                    priority
                    className="w-full rounded-2xl object-cover h-[320px] shadow-inner"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-card-border/60 text-center shadow-lg">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Recommended For</span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">Sisters & Kids under 10</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Why Choose Us?</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Benefits of Learning with a Female Tutor
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="glass p-8 rounded-3xl border-card-border hover:border-primary/20 transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. WHO CAN BENEFIT SECTION */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Target Students</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Who Can Benefit from These Classes?
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoBenefitsItems.map((item, idx) => (
              <div key={idx} className="glass p-6.5 rounded-2xl border-card-border hover:border-secondary/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-xs text-muted-text leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TEACHERS SECTION */}
      <section className="py-20 border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Tutors Qualifications */}
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Meet Our Female Tutors</h2>
              <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal mb-6">
                Our team consists of highly qualified, vetted female Quran scholars who are passionate about teaching. Tutors bring structural expertise, child-friendly teaching approaches, and patience to each online session.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>**Certified Ijazah Holders**: Tutors hold classical certifications verifying correct pronunciation.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>**Bilingual Instruction**: English and Arabic speaking educators prevent language barriers.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>**Child-Centered Pedagogy**: Custom lesson plans keep kids active, excited, and engaged.</span>
                </div>
              </div>
            </div>

            {/* DBS Security Vetting Card */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>Safeguarding & Security</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                Safety is our highest priority. We conduct thorough identity checks, background screenings, and criminal record verifications (DBS checks in the UK, similar standards globally) on all our educators. Tutors operate in a safe learning environment monitored by our administrative team.
              </p>
              <div className="flex items-center space-x-4 border-t border-card-border/50 pt-6">
                <div className="h-12 w-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-bold text-sm shrink-0">
                  <ShieldCheck className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Vetted & Safe</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text">Peace of mind for homeschooling and family classes.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. COURSES TABLE SECTION */}
      <section className="py-20 bg-foreground/[0.005] border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Course Catalog</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              What You Can Study With Our Tutors
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-card-border glass shadow-xl">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-primary/10 border-b border-card-border text-primary font-bold">
                  <th className="px-6 py-4.5 font-bold">Course Title</th>
                  <th className="px-6 py-4.5 font-bold">Level</th>
                  <th className="px-6 py-4.5 font-bold">Core Focus Area</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-card-border/40">
                {courses.map((c, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.01] transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground">
                      <Link href={`/courses/${c.slug}`} className="text-primary hover:underline font-bold">
                        {c.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold text-secondary">{c.level}</td>
                    <td className="px-6 py-4 text-xs text-muted-text font-normal">{c.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 6. METHODOLOGY SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Methodology</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Step-by-Step Learning Process
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-2xl border-card-border text-center">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-4">1</span>
              <h4 className="font-bold text-sm text-foreground mb-2">Initial Assessment</h4>
              <p className="text-[11px] text-muted-text leading-relaxed">Tutor assesses reading levels and sets learning milestones.</p>
            </div>
            <div className="glass p-6 rounded-2xl border-card-border text-center">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-4">2</span>
              <h4 className="font-bold text-sm text-foreground mb-2">Customized Plan</h4>
              <p className="text-[11px] text-muted-text leading-relaxed">Personalized curriculum based on your goals and schedule.</p>
            </div>
            <div className="glass p-6 rounded-2xl border-card-border text-center">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-4">3</span>
              <h4 className="font-bold text-sm text-foreground mb-2">Private 1-on-1 Classes</h4>
              <p className="text-[11px] text-muted-text leading-relaxed">Live virtual classrooms utilizing digital boards and visual aids.</p>
            </div>
            <div className="glass p-6 rounded-2xl border-card-border text-center">
              <span className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-4">4</span>
              <h4 className="font-bold text-sm text-foreground mb-2">Progress Reviews</h4>
              <p className="text-[11px] text-muted-text leading-relaxed">Monthly progress reports and reviews to track development.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. COUNTRIES SERVED & WHY ONLINE WORKS */}
      <section className="py-20 bg-foreground/[0.005] border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Why Online Works */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Online Learning Works</h3>
              <div className="h-1 w-12 bg-primary mb-6 rounded-full" />
              <div className="space-y-4 text-xs sm:text-sm text-muted-text leading-relaxed">
                <p>
                  Online Quran learning provides ultimate convenience for busy Muslim families. By removing travel time, it allows kids and mothers to study consistently directly from home.
                </p>
                <p>
                  Unlike group classes in local community centers where one teacher manages multiple children, OQTutor's one-to-one sessions guarantee 100% individual focus for the entire duration, boosting progress speed up to 3x.
                </p>
              </div>
            </div>

            {/* Countries served */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">International Communities Served</h3>
                <div className="h-1 w-12 bg-secondary mb-6 rounded-full" />
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-6">
                  We serve Muslim families across the United States, Canada, the United Kingdom, Australia, and Europe. Our female Quran teachers adjust schedules to match your local timezone, fitting lessons around school runs and busy workdays.
                </p>
              </div>
              <div className="border-t border-card-border/50 pt-4 flex flex-wrap gap-2 text-xs font-semibold text-foreground/80">
                <span className="bg-foreground/5 border border-card-border px-3 py-1 rounded-full">🇺🇸 USA</span>
                <span className="bg-foreground/5 border border-card-border px-3 py-1 rounded-full">🇨🇦 Canada</span>
                <span className="bg-foreground/5 border border-card-border px-3 py-1 rounded-full">🇬🇧 UK</span>
                <span className="bg-foreground/5 border border-card-border px-3 py-1 rounded-full">🇦🇺 Australia</span>
                <span className="bg-foreground/5 border border-card-border px-3 py-1 rounded-full">🇪🇺 Europe</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FAQs SECTION */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">FAQ</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Frequently Asked Questions
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq: { question: string; answer: string }, idx: number) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <span className="text-sm sm:text-base font-bold pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-text/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
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

      {/* 9. TESTIMONIAL & FINAL CTA */}
      <section className="py-20 border-t border-card-border mb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          {/* Testimonial Placeholder */}
          <div className="glass p-8 sm:p-10 rounded-3xl border border-card-border/60 text-center relative mb-16">
            <div className="text-secondary text-5xl font-serif absolute -top-4 left-6">&ldquo;</div>
            <p className="text-sm sm:text-base text-muted-text italic leading-relaxed pt-4 font-normal">
              Finding a qualified female Quran teacher online who speaks fluent English was a game-changer for my daughters. They look forward to their classes every week, and I have peace of mind knowing they are in a safe, private, and professional learning environment.
            </p>
            <div className="mt-4 text-xs font-bold text-foreground">
              - Sister Maryam (London, UK) — Placeholder Testimonial
            </div>
          </div>

          {/* CTA Box */}
          <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -translate-x-8 -translate-y-8" />
            <h2 className="text-3xl font-extrabold text-foreground mb-4">Start Your Quranic Journey Today</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/book-free-trial"
                className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
              >
                Book a free trial class
              </Link>
              <Link
                href="/courses"
                className="px-8 py-3.5 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-bold uppercase tracking-wider transition-all"
              >
                Browse full range of courses
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

