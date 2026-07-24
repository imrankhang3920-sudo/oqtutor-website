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
                  href="/contact"
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
                  href="/contact"
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
                    Yes. You can try a class for free before committing to any monthly plan. <Link href="/contact" className="text-primary font-bold hover:underline">Book your free trial here</Link>.
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
                href="/contact"
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

