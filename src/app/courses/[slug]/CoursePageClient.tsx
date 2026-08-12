'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Award, Clock, Calendar, Users, 
  CheckCircle, HelpCircle, ChevronDown, ArrowRight, ShieldCheck, Star,
  UserCheck, ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { CourseData, ContactData, TestimonialData } from '@/data/db';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials';

export default function CoursePageClient({
  course,
  contactData,
  testimonials = []
}: {
  course: CourseData;
  contactData: ContactData;
  testimonials?: TestimonialData[];
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

  if (course.slug === 'quran-for-adults') {
    return <QuranForAdultsContent course={course} contactData={contactData} />;
  }

  const [openCurriculumIdx, setOpenCurriculumIdx] = useState<number | null>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleCurriculum = (idx: number) => {
    setOpenCurriculumIdx(openCurriculumIdx === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const renderTajweedFaqAnswer = (idx: number, defaultText: string) => {
    if (idx === 1) {
      return (
        <>
          Yes. Sisters and young children can be matched with one of our certified{" "}
          <Link href="/tutors" className="text-primary hover:underline font-semibold">
            female scholars
          </Link>
          ; boys and men can request a male teacher. You choose your preference during registration.
        </>
      );
    }
    if (idx === 2) {
      return (
        <>
          No — you need to already be able to read Quranic Arabic script at a basic level (completed through{" "}
          <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
            Noorani Qaida
          </Link>{" "}
          or our{" "}
          <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">
            Quran Reading course
          </Link>
          ). If you're starting from zero, we'll place you in that course first, then move you here.
        </>
      );
    }
    if (idx === 3) {
      return (
        <>
          An app can show you the rule; only a live teacher can hear your voice and correct the exact spot where your pronunciation is off. Most Tajweed mistakes are inaudible to the reader themselves — that's the entire reason a{" "}
          <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">
            1-on-1 teacher
          </Link>{" "}
          exists.
        </>
      );
    }
    return defaultText;
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
              <div className="flex flex-wrap items-center gap-3 mb-3 justify-center lg:justify-start">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Premium Curriculum
                </span>
                <span className="text-xs text-muted-text flex items-center space-x-1.5 bg-foreground/5 border border-card-border rounded-full px-3 py-1">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span>
                    Last updated: {course.updatedAt ? new Date(course.updatedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'August 2026'}
                  </span>
                </span>
              </div>
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

            {/* Right Hero Image & Video Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
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
              {course.slug === 'tajweed' && (
                <div className="mt-10 pt-10 border-t border-card-border/50 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">What Is Tajweed?</h3>
                    <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                      The word{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Tajwid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold inline-flex items-center space-x-1"
                      >
                        <span>Tajweed</span>
                        <ExternalLink className="h-3 w-3 inline" />
                      </a>{" "}
                      comes from the Arabic root <span className="italic font-medium text-foreground">jawwada</span>, meaning "to make excellent" or "to perfect." In practice, it is the set of rules that govern exactly how each letter of the Quran should be pronounced — its articulation point (makhraj), its characteristics (sifaat), and how it changes shape next to other letters. Reciting with Tajweed is not a stylistic choice; the majority of scholars consider it obligatory (fard) once a person is capable of learning it, since it is the only way to recite the Quran the way it was revealed and preserved.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-foreground">Why Tajweed Matters</h4>
                    <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                      Every letter mispronounced can quietly change the meaning of a word — which is why correct, measured recitation (tarteel) has always been the standard taught by scholars. A single online session with a <Link href="/tutors" className="text-primary hover:underline font-semibold">qualified teacher</Link> can catch mistakes that go unnoticed for years of unsupervised reading.
                    </p>
                    
                    {/* Task 2: Quranic Citation */}
                    <blockquote className="my-6 p-5 sm:p-6 rounded-2xl bg-primary/5 border-l-4 border-primary text-foreground space-y-3 font-serif relative">
                      <div className="text-right text-xl sm:text-2xl font-bold leading-loose text-primary font-serif" dir="rtl">
                        وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                      </div>
                      <p className="text-xs sm:text-sm italic text-foreground/90 font-sans">
                        "And recite the Qur’an with measured recitation."
                      </p>
                      <footer className="text-[11px] font-sans text-muted-text font-medium text-right border-t border-primary/10 pt-2">
                        — Surah Al-Muzzammil (73:4)
                      </footer>
                    </blockquote>
                  </div>
                </div>
              )}
            </div>

            {/* Who should join Card */}
            <div className="lg:col-span-5">
              <div className="glass p-8 rounded-3xl border-card-border shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Who Should Join?</h3>
                  <div className="h-1 w-12 bg-primary mb-6 rounded-full" />
                  {course.slug === 'tajweed' ? (
                    <div className="space-y-4">
                      <div className="glass p-4 rounded-2xl border border-card-border/65 bg-foreground/[0.005]">
                        <h4 className="font-bold text-xs sm:text-sm text-primary mb-1">Beginner Track</h4>
                        <p className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal">
                          For students who can already read Arabic script (having completed <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida</Link> or basic <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">Quran Reading</Link>) but have never formally studied Tajweed rules.
                        </p>
                      </div>
                      <div className="glass p-4 rounded-2xl border border-card-border/65 bg-foreground/[0.005]">
                        <h4 className="font-bold text-xs sm:text-sm text-secondary mb-1">Intermediate/Advanced Track</h4>
                        <p className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal">
                          For students who already know the basic rules but want to correct ingrained mistakes, refine makharij, and match a classical, scholarly recitation style.
                        </p>
                      </div>
                      <p className="text-[10px] sm:text-xs text-muted-text leading-relaxed font-medium italic pt-2">
                        Not sure which track fits you? Our teachers assess your level in the first <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">free trial class</Link> and place you accordingly — no separate placement test needed.
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                      {course.whoShouldJoin}
                    </p>
                  )}
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
                      <span>{course.slug === 'tajweed' ? 'All Levels' : course.suitableFor}</span>
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

          {course.slug === 'tajweed' ? (
            <div className="space-y-8">
              {[
                { heading: "Foundations", steps: course.curriculumSteps.slice(0, 4), offset: 0 },
                { heading: "Noon & Meem Sakinah Rules", steps: course.curriculumSteps.slice(4, 8), offset: 4 },
                { heading: "Sound Rules", steps: course.curriculumSteps.slice(8, 12), offset: 8 },
                { heading: "Madd (Elongation) Rules", steps: course.curriculumSteps.slice(12, 15), offset: 12 },
                { heading: "Stopping & Starting", steps: course.curriculumSteps.slice(15, 18), offset: 15 },
                { heading: "Practical Application", steps: course.curriculumSteps.slice(18, 21), offset: 18 }
              ].map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-3">
                  <h3 className="text-lg font-bold text-foreground/90 border-l-4 border-primary pl-3 mt-8 mb-4">
                    {group.heading}
                  </h3>
                  <div className="space-y-3">
                    {group.steps.map((step, stepIdx) => {
                      const globalIdx = group.offset + stepIdx;
                      const isOpen = openCurriculumIdx === globalIdx;
                      return (
                        <div key={globalIdx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                          <button
                            onClick={() => toggleCurriculum(globalIdx)}
                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                          >
                            <div className="flex items-center space-x-4">
                              <span className="h-8 w-8 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold shrink-0">
                                {globalIdx + 1}
                              </span>
                              <span className="text-sm sm:text-base font-bold">{step.title}</span>
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
              ))}
            </div>
          ) : (
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
          )}

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
              {/* TODO: [USER REVIEW REQUIRED] Verify or update course author/reviewer name and credentials below */}
              {course.slug === 'tajweed' && (
                <>
                  <div className="mb-6 p-4 rounded-2xl bg-secondary/5 border border-secondary/20 flex items-center space-x-3.5">
                    <div className="h-10 w-10 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-sm shrink-0">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block">Reviewed & Curated By</span>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground">
                        {course.authorName || "Qari Imran Hussain (Ijazah Certified Senior Instructor)"}
                      </h4>
                      <p className="text-[10px] text-muted-text">Senior Tajweed Faculty & Ijazah Certificate Holder</p>
                    </div>
                  </div>

                  <div className="mb-6 p-4.5 rounded-2xl bg-primary/5 border border-primary/20 text-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                    <h4 className="font-extrabold text-xs sm:text-sm text-primary mb-1.5 flex items-center space-x-2">
                      <Award className="h-4.5 w-4.5 text-secondary shrink-0" />
                      <span>Certified Through an Authentic Chain (Sanad)</span>
                    </h4>
                    <p className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal">
                      Our <Link href="/tutors" className="text-primary hover:underline font-semibold">Tajweed instructors</Link> hold{" "}
                      <a
                        href="https://en.wikipedia.org/wiki/Ijazah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold inline-flex items-center space-x-0.5"
                      >
                        <span>Ijazah</span>
                        <ExternalLink className="h-3 w-3 inline" />
                      </a>{" "}
                      — a formal certification passed down through an unbroken chain of narration (sanad) tracing back to the Prophet Muhammad ﷺ. This isn't a certificate from a course; it's a scholarly license to teach and correct recitation, verified the same way it has been for over a thousand years.
                    </p>
                  </div>
                </>
              )}
              <div className="flex items-center space-x-4 border-t border-card-border/50 pt-6">
                <div className="h-10 w-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5" />
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

      {/* Etiquette of Recitation section for Tajweed */}
      {course.slug === 'tajweed' && (
        <section id="recitation-etiquette" className="py-16 md:py-20 relative overflow-hidden bg-background border-t border-card-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass p-8 sm:p-12 rounded-3xl border-card-border shadow-xl max-w-3xl mx-auto relative overflow-hidden bg-foreground/[0.005]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block mb-4">
                Islamic Adab
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">The Etiquette of Recitation</h2>
              <div className="h-1 w-20 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                Tajweed is about more than pronunciation — traditional scholars also teach the <span className="italic font-medium text-foreground">adab</span> (etiquette) of recitation: reciting in a state of purity, facing the Qiblah where possible, reflecting on the meaning as you read, and giving the Quran your full attention. Your teacher will gently guide you in these practices alongside the technical rules.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Course Testimonials */}
      {testimonials.length > 0 && (
        <Testimonials
          data={
            course.slug === 'tajweed'
              ? testimonials.filter((t) => t.id.includes('tajweed') || t.relation?.toLowerCase().includes('tajweed') || t.text?.toLowerCase().includes('tajweed'))
              : testimonials
          }
        />
      )}

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
                            {course.slug === 'tajweed' ? (
                              renderTajweedFaqAnswer(idx, faq.answer)
                            ) : (
                              faq.answer
                            )}
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
              Give your family the gift of structured Quranic education. Join thousands of Muslim families in the <Link href="/locations/usa" className="text-primary hover:underline font-semibold">USA</Link>, <Link href="/locations/uk" className="text-primary hover:underline font-semibold">UK</Link>, <Link href="/locations/canada" className="text-primary hover:underline font-semibold">Canada</Link>, and <Link href="/locations/australia" className="text-primary hover:underline font-semibold">Australia</Link> who trust OQTutor for 1-on-1 online classes. Book your 3-day free trial today with no commitments.
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

function QuranForAdultsContent({
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

  const faqSchemaList = [
    {
      question: "Where can I learn Quran online in the USA?",
      answer: (
        <span>
          You can learn the Quran online from any city in the USA by enrolling in{" "}
          <Link href="/how-it-works" className="text-primary hover:underline font-semibold">OQTutor</Link>. 
          Our virtual learning academy serves adult students across all fifty states, supporting learners in Eastern, Central, Mountain, and Pacific time zones. Because our platform operates entirely online, your geographic location never limits your access to certified scholars. We match you with dedicated instructors who teach{" "}
          <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida</Link>, 
          advanced{" "}
          <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Tajweed rules</Link>, 
          Quran{" "}
          <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">memorization (Hifz)</Link>, 
          and translation through a secure digital portal. You only need a stable internet connection, a computer or tablet, and a quiet space in your home to begin. By removing the need to commute to a physical Islamic center, OQTutor makes it simple to integrate regular Quranic study into your busy American lifestyle.
        </span>
      )
    },
    {
      question: "How much do online Quran classes cost?",
      answer: (
        <span>
          At OQTutor, we believe that high-quality Quranic education should remain affordable and transparent. Our flexible{" "}
          <Link href="/pricing" className="text-primary hover:underline font-semibold">monthly plans</Link>{" "}
          start at $30 per month for three classes per week, which is ideal for students who want to maintain steady, gradual progress. For more frequent study, our Standard Plan offers five classes per week for $40 per month, while our Daily Plan provides seven sessions per week for $50 per month. All packages feature private, one-on-one sessions lasting thirty minutes each with a certified male or{" "}
          <Link href="/tutors" className="text-primary hover:underline font-semibold">female tutor</Link>. 
          We do not charge registration fees, and you are never locked into long-term contracts. You can pause, adjust, or cancel your subscription at any time directly through your student dashboard, ensuring your studies fit both your monthly budget and your lifestyle demands.
        </span>
      )
    },
    {
      question: "Which online Quran course is the best?",
      answer: (
        <span>
          The best online Quran course is one that matches your current reading ability and aligns with your personal learning goals. If you cannot read the Arabic script yet, you should start with our{" "}
          <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida course</Link>{" "}
          to learn correct letter recognition and pronunciation. For students who can read Arabic but make pronunciation mistakes, our{" "}
          <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Quran with Tajweed course</Link>{" "}
          is the ideal choice to master articulation points. If you want to commit specific Surahs to memory, you should select our{" "}
          <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Quran Memorization program</Link>. 
          Adults who want to connect deeply with the meaning of the verses will benefit most from our{" "}
          <Link href="/courses/tafseer" className="text-primary hover:underline font-semibold">Translation and Tafseer course</Link>. 
          OQTutor helps you determine the perfect path by conducting a comprehensive reading assessment during your{" "}
          <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">free trial session</Link>.
        </span>
      )
    },
    {
      question: "Where can I find online Quran courses?",
      answer: (
        <span>
          You can find premium online Quran courses directly through the{" "}
          <Link href="/" className="text-primary hover:underline font-semibold">OQTutor website</Link>. 
          We offer a structured selection of courses designed specifically for adults, reverts, and busy professionals living in the USA. Our courses cover everything from the basic Arabic alphabet to advanced Tajweed rules, intensive Hifz memorization, and word-by-word translation classes. By visiting our{" "}
          <Link href="/courses" className="text-primary hover:underline font-semibold">courses directory page</Link>, 
          you can read the details of each syllabus and select the track that best fits your spiritual goals. When you are ready to begin, simply fill out our short registration form to schedule your live{" "}
          <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">trial class</Link>. 
          We will pair you with a{" "}
          <Link href="/tutors" className="text-primary hover:underline font-semibold">certified tutor</Link>{" "}
          who will help customize the lessons to your unique learning speed and schedule.
        </span>
      )
    }
  ];

  return (
    <main className="flex-grow bg-background text-foreground">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                For Adults &amp; Professionals
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Learn Quran with Tajweed: Online Quran Classes for Adults in the USA
              </h1>
              <p className="text-base sm:text-lg text-muted-text leading-relaxed font-normal">
                Many adult Muslims living in the United States face unique challenges when attempting to resume or start their Quranic studies. Demanding career schedules, university coursework, family commitments, and the lack of local resources near their homes can make finding the time and matching support feel nearly impossible.{" "}
                <Link href="/how-it-works" className="text-primary hover:underline font-semibold">OQTutor</Link>{" "}
                bridges this gap by offering private, live sessions that fit into your busy life. We help you{" "}
                <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">learn to read</Link>,{" "}
                <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">recite</Link>,{" "}
                and understand the Holy Book of Allah from the comfort of your home, at times that suit you.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/book-free-trial"
                  className="px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all"
                >
                  Book Free Placement Trial
                </Link>
                <Link
                  href="#courses-section"
                  className="px-8 py-4 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-sm font-bold transition-all"
                >
                  Explore Course Tracks
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/online-quran-classes-usa.jpg"
                    alt="Adult Quran student studying 1-on-1 with virtual teacher"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Adults Choose Online */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Modern Solutions
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Why Adults Choose Online Quran Classes
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-base text-muted-text leading-relaxed font-normal">
            <p>
              Stepping into a local Islamic school or community center as an adult beginner can sometimes feel intimidating. Traditional settings usually cater to young children, leaving adult learners with few choices that respect their maturity level and unique learning speeds.
            </p>
            <p>
              <Link href="/how-it-works" className="text-primary hover:underline font-semibold">Online platforms</Link>{" "}
              remove the geographic and logistical barriers of commuting in traffic or rushing after work. Instead of trying to keep pace with a group class, you work directly with your{" "}
              <Link href="/tutors" className="text-primary hover:underline font-semibold">own tutor</Link>.{" "}
              You can ask questions without hesitation, repeat challenging sounds as many times as necessary, and schedule your lessons early in the morning before work or late at night.
            </p>
          </div>
        </div>
      </section>

      {/* Certified Tutors Section */}
      <section className="py-16 md:py-24 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 flex justify-center lg:order-last">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl bg-white">
                  <Image
                    src="/tutor-ahmed.jpg"
                    alt="Certified OQTutor scholar explaining Tajweed rules online"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Academic Rigor
              </span>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Learn Quran with Tajweed from Certified Tutors
              </h2>
              <div className="h-1 w-16 bg-secondary rounded-full" />
              <p className="text-base text-muted-text leading-relaxed font-normal">
                Reciting the Quran correctly requires a proper understanding of Tajweed—the set of rules governing how each letter should be pronounced and articulated. Our team consists of{" "}
                <Link href="/tutors" className="text-primary hover:underline font-semibold">qualified scholars</Link>{" "}
                who have graduated from prestigious Islamic institutions and hold authentic{" "}
                <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">certifications (Ijazah)</Link>{" "}
                in recitation.
              </p>
              <p className="text-base text-muted-text leading-relaxed font-normal">
                These tutors understand the common difficulties English-speaking adults encounter, such as distinguishing between similar-sounding Arabic letters. They work patiently with you, correcting your tongue placement and{" "}
                <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">articulation points (Makharij)</Link>{" "}
                in real time. With this personalized guidance, you develop clear pronunciation and build confidence in your recitation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Course Catalog Section */}
      <section id="courses-section" className="py-16 md:py-24 bg-background border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Programs
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Our Online Quran Courses
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Quran Reading</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal font-sans">
                  This track focuses on helping you read Quranic script fluidly. You will transition from spelling out individual letters to reading full verses with ease, improving your visual recognition of Arabic text and building the speed needed for daily prayers.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-card-border/40">
                <Link href="/courses/quran-reading" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>View Details</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Quran with Tajweed</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal font-sans">
                  Designed for students who can already read the Arabic text but want to perfect their recitation. You will study rules of waqf (pausing), madd (elongation), ghunnah (nasalization), and the characteristics of each letter to recite exactly as the Prophet Muhammad (peace be upon him) taught.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-card-border/40">
                <Link href="/courses/tajweed" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>View Details</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Noorani Qaida</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal font-sans">
                  If you cannot read the Arabic alphabet yet, this course is your starting point. You will learn individual letters, vowel signs, and basic joining rules, establishing the foundational reading skills that all advanced courses depend on.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-card-border/40">
                <Link href="/courses/noorani-qaida" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>View Details</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Quran Memorization</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal font-sans">
                  A customized program designed for adults who want to commit specific Surahs or the entire Quran to memory. Tutors establish daily targets and a structured revision system that ensures your new memorization matches your pace while retaining previously memorized verses.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-card-border/40">
                <Link href="/courses/hifz" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>View Details</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Quran Translation &amp; Tafseer</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal font-sans">
                  Go beyond recitation to understand the contextual meaning of the verses you read. This class covers word-by-word translation, basic Tafseer (interpretation), and essential daily supplications (Duas) to bring deeper spiritual focus to your daily Salah.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-card-border/40">
                <Link href="/courses/tafseer" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>View Details</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-card-border hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">Islamic Studies for Adults</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal font-sans">
                  Covers critical topics in daily jurisprudence, Prophetic histories, character refinement, and essential prayers, designed to build comprehensive spiritual literacy for adult Muslim lives.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-card-border/40">
                <Link href="/courses/islamic-studies" className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                  <span>View Details</span>
                  <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose OQTutor */}
      <section className="py-16 md:py-24 bg-foreground/[0.01] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Benefits
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Why Choose OQTutor
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-xs sm:text-sm text-muted-text font-normal font-sans">
              At OQTutor, we prioritize quality, convenience, and respect for adult learners. Here is what sets our academy apart:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "One-on-One Classes",
                desc: (
                  <span>
                    You receive the full, undivided attention of your{" "}
                    <Link href="/tutors" className="text-primary hover:underline">teacher</Link>{" "}
                    for the entire 30-minute session.
                  </span>
                )
              },
              {
                title: "Certified Teachers",
                desc: (
                  <span>
                    Every instructor holds authentic credentials, ensuring you learn from scholars with verified chains of transmission.
                  </span>
                )
              },
              {
                title: "Male & Female Tutors",
                desc: (
                  <span>
                    We respect your personal comfort and allow you to choose a tutor gender that matches your household preferences.
                  </span>
                )
              },
              {
                title: "Flexible Scheduling",
                desc: (
                  <span>
                    Our classes run 24 hours a day, 7 days a week, making it easy to{" "}
                    <Link href="/how-it-works" className="text-primary hover:underline font-semibold">schedule lessons</Link>{" "}
                    around shifting career or family demands.
                  </span>
                )
              },
              {
                title: "Affordable Fees",
                desc: (
                  <span>
                    We offer low-cost{" "}
                    <Link href="/pricing" className="text-primary hover:underline font-semibold">monthly plans</Link>{" "}
                    without binding contracts, making premium Quranic education accessible.
                  </span>
                )
              },
              {
                title: "Progress Tracking",
                desc: (
                  <span>
                    Tutors provide clear, structured feedback after each session, helping you see your improvement over time.
                  </span>
                )
              },
              {
                title: "Free Trial",
                desc: (
                  <span>
                    You can experience our interactive virtual portal and meet your matched{" "}
                    <Link href="/tutors" className="text-primary hover:underline font-semibold">tutor</Link>{" "}
                    before enrolling in a paid package.
                  </span>
                )
              },
              {
                title: "Personalized Learning",
                desc: (
                  <span>
                    We design a custom curriculum around your current reading level, interests, and spiritual goals.
                  </span>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-card-border flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-foreground mb-2 font-sans">{item.title}</h4>
                  <div className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal font-sans">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 md:py-24 bg-background border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              For Everyone
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Who Can Join
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-xs sm:text-sm text-muted-text font-normal font-sans">
              We welcome adult learners from all walks of life, including:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Beginners",
                desc: (
                  <span>
                    Starting their{" "}
                    <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Arabic reading journey</Link>{" "}
                    from the very first letter.
                  </span>
                )
              },
              {
                title: "Busy Professionals",
                desc: (
                  <span>
                    Who need flexible slots after business hours or on weekends.
                  </span>
                )
              },
              {
                title: "College Students",
                desc: (
                  <span>
                    Managing heavy course loads who want to maintain their spiritual habits.
                  </span>
                )
              },
              {
                title: "Parents",
                desc: (
                  <span>
                    Who wish to learn alongside their children or set a positive example at home.
                  </span>
                )
              },
              {
                title: "Reverts",
                desc: (
                  <span>
                    Seeking a supportive, non-judgmental environment to learn daily prayers and{" "}
                    <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">basic Quran reading</Link>.
                  </span>
                )
              },
              {
                title: "Senior Adults",
                desc: (
                  <span>
                    Looking for a patient, slow-paced study routine to enrich their retirement years.
                  </span>
                )
              }
            ].map((profile, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-card-border flex items-start space-x-3.5 hover:shadow-md transition-shadow">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-foreground mb-1 font-sans">{profile.title}</h4>
                  <div className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal font-sans">{profile.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Learning Works */}
      <section className="py-16 md:py-24 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Roadmap
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              How Learning Works
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Schedule a Free Trial",
                desc: (
                  <span>
                    Tell us your current level and availability to book a live,{" "}
                    <Link href="/book-free-trial" className="text-primary hover:underline font-semibold">one-on-one introduction session</Link>.
                  </span>
                )
              },
              {
                title: "Meet Your Tutor",
                desc: (
                  <span>
                    Meet your instructor in our secure virtual classroom, where they will evaluate your reading level and discuss your goals.
                  </span>
                )
              },
              {
                title: "Select Your Schedule",
                desc: (
                  <span>
                    Choose your weekly class frequency and pick the time slots that fit best with your calendar. Check our{" "}
                    <Link href="/pricing" className="text-primary hover:underline font-semibold">pricing plans</Link>{" "}
                    for details.
                  </span>
                )
              },
              {
                title: "Begin Regular Lessons",
                desc: (
                  <span>
                    Log in to your personal dashboard at your scheduled times to start interactive, real-time sessions.
                  </span>
                )
              },
              {
                title: "Track Your Milestones",
                desc: (
                  <span>
                    Review regular progress updates and adjust your learning speed whenever your schedule changes.
                  </span>
                )
              }
            ].map((step, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-card-border flex items-start space-x-4">
                <span className="h-10 w-10 bg-primary/15 text-primary rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-foreground mb-1 font-sans">{step.title}</h4>
                  <div className="text-xs sm:text-sm text-muted-text font-normal leading-relaxed font-sans">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Online Quran learning */}
      <section className="py-16 md:py-24 bg-background border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Technology
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Benefits of Learning Quran Online
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-base text-muted-text leading-relaxed font-normal">
            <p>
              Choosing online instruction provides practical advantages that physical schools cannot replicate. You save hours of travel time every week, allowing you to prioritize study rather than commuting. You also gain access to a global network of{" "}
              <Link href="/tutors" className="text-primary hover:underline font-semibold">qualified scholars</Link>,{" "}
              bypassing the local limitations of your city or suburb.
            </p>
            <p>
              Additionally, the digital classroom uses interactive screen-sharing, high-quality audio, and digital whiteboards. This setup makes it easy to follow the text, see visual corrections, and record your sessions for private review between classes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Tajweed Matters */}
      <section className="py-16 md:py-24 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Spiritual Focus
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Why Learning Tajweed Matters for Adults
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-base text-muted-text leading-relaxed font-normal">
            <p>
              Perfecting your pronunciation is not just an academic exercise; it changes your relationship with your worship.{" "}
              <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Correct Tajweed</Link>{" "}
              ensures you do not inadvertently change the meanings of Arabic words during your prayers.
            </p>
            <p>
              Learning Tajweed also builds the confidence needed to recite aloud, join congregational prayers with ease, and pass correct recitation habits down to your children. By dedicating time to correcting your speech, you demonstrate devotion to the preservation of the Holy Book.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages Table */}
      <section id="pricing" className="py-16 md:py-24 bg-background border-t border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Fee Structure
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
              Simple &amp; Affordable Monthly Pricing
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-xs sm:text-sm text-muted-text max-w-md mx-auto font-sans">
              No registration fees or locking contracts. All packages are billed in USD.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <h3 className="text-lg font-bold text-foreground">Starter Package</h3>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">$30</span>
                  <span className="ml-1 text-sm font-semibold text-muted-text">/month</span>
                </div>
                <p className="mt-2 text-xs text-muted-text font-normal font-sans">Perfect for gradual learners</p>
                <div className="h-px bg-card-border my-6" />
                <ul className="space-y-4 text-xs sm:text-sm text-muted-text">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span className="font-normal font-sans">3 sessions per week</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span className="font-normal font-sans">30-minute lessons</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span className="font-normal font-sans">1-on-1 private class</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/book-free-trial" className="w-full text-center block py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-semibold transition-all">
                  Book Free Trial
                </Link>
              </div>
            </div>

            {/* Standard */}
            <div className="glass p-8 rounded-3xl border-2 border-secondary flex flex-col justify-between hover:shadow-xl transition-all shadow-md relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </span>
              <div>
                <h3 className="text-lg font-bold text-foreground">Standard Package</h3>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">$40</span>
                  <span className="ml-1 text-sm font-semibold text-muted-text">/month</span>
                </div>
                <p className="mt-2 text-xs text-muted-text font-normal font-sans">Great for consistent progress</p>
                <div className="h-px bg-card-border my-6" />
                <ul className="space-y-4 text-xs sm:text-sm text-muted-text">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                    <span className="font-normal font-sans">5 sessions per week</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                    <span className="font-normal font-sans">30-minute lessons</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-secondary shrink-0" />
                    <span className="font-normal font-sans">Priority matching &amp; support</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/book-free-trial" className="w-full text-center block py-2.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white text-xs font-semibold transition-all shadow-md">
                  Book Free Trial
                </Link>
              </div>
            </div>

            {/* Premium */}
            <div className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all">
              <div>
                <h3 className="text-lg font-bold text-foreground">Daily Package</h3>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">$50</span>
                  <span className="ml-1 text-sm font-semibold text-muted-text">/month</span>
                </div>
                <p className="mt-2 text-xs text-muted-text font-normal font-sans">Best for intensive Hifz &amp; speed</p>
                <div className="h-px bg-card-border my-6" />
                <ul className="space-y-4 text-xs sm:text-sm text-muted-text">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span className="font-normal font-sans">7 sessions per week (daily)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span className="font-normal font-sans">30-minute lessons</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                    <span className="font-normal font-sans">Customized curriculum speed</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Link href="/book-free-trial" className="w-full text-center block py-2.5 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-semibold transition-all">
                  Book Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 border-t border-card-border bg-foreground/[0.005]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground font-sans">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqSchemaList.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-card-border/60 rounded-2xl glass p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                open={openFaqIdx === idx}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq(idx);
                }}
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-foreground cursor-pointer select-none list-none font-sans">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary font-sans">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="mt-3 text-xs sm:text-sm text-muted-text leading-relaxed font-normal border-t border-card-border/40 pt-3 font-sans">
                  <div>{faq.answer}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Persuasive CTA Banner */}
      <section className="py-16 bg-background border-t border-card-border relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 text-center space-y-6 relative">
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">
              Ready to start your journey?
            </h3>
            <p className="text-sm md:text-base text-muted-text max-w-xl mx-auto leading-relaxed font-normal font-sans">
              Book a free trial class with OQTutor today and meet your private tutor. No credit card is required to register.
            </p>
            <div className="pt-2">
              <Link
                href="/book-free-trial"
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300"
              >
                <span>Book a free trial class</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
