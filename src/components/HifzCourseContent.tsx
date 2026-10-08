'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, Clock, Calendar, Users, 
  CheckCircle, ChevronDown, ArrowRight, ShieldCheck,
  Check, Video, BookMarked, Sparkles, FileText,
  HelpCircle, GraduationCap, Shield, ArrowUpRight, BarChart3
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseData, ContactData, TestimonialData, PricingData } from '@/data/db';
import Testimonials from '@/components/Testimonials';

interface HifzCourseContentProps {
  course: CourseData;
  contactData: ContactData;
  testimonials?: TestimonialData[];
  pricing?: PricingData[];
}

export default function HifzCourseContent({
  course,
  contactData,
  testimonials = [],
  pricing = []
}: HifzCourseContentProps) {
  const [openCurriculumIdx, setOpenCurriculumIdx] = useState<number | null>(0);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleCurriculum = (idx: number) => {
    setOpenCurriculumIdx(openCurriculumIdx === idx ? null : idx);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Fallback pricing if not provided via props
  const defaultPricingPlans: PricingData[] = [
    {
      id: 'plan-1',
      title: 'Starter',
      price: '30',
      frequency: 'Month',
      features: [
        '3 Classes / Week',
        '30–40 minutes sessions',
        'One-on-One classes',
        'Male / Female Tutors',
        'Basic Tajweed & Qaida',
        'Flexible scheduling'
      ],
      isPopular: false,
      ctaText: 'Book Free Trial'
    },
    {
      id: 'plan-2',
      title: 'Standard',
      price: '40',
      frequency: 'Month',
      features: [
        '5 Classes / Week',
        '30–40 minutes sessions',
        'One-on-One classes',
        'Male / Female Tutors',
        'Advanced Tajweed rules',
        'Islamic Studies & Duas included',
        'Monthly Progress reports'
      ],
      isPopular: true,
      ctaText: 'Book Free Trial'
    },
    {
      id: 'plan-3',
      title: 'Premium',
      price: '50',
      frequency: 'Month',
      features: [
        'Daily Classes (7/week)',
        '30–40 minutes sessions',
        'One-on-One classes',
        'Male / Female Tutors',
        'Customized Hifz program',
        'Quran Translation & Tafseer',
        'Direct teacher messaging',
        'Priority scheduling & support'
      ],
      isPopular: false,
      ctaText: 'Book Free Trial'
    }
  ];

  const plansToDisplay = pricing && pricing.length >= 3 ? pricing : defaultPricingPlans;

  const roadmapLevels = [
    {
      level: '1',
      levelTag: 'Level 1',
      title: 'Juz Amma (Juz 30)',
      goal: 'Memorize Juz 30 with correct Tajweed and makharij.',
      movingOn: 'Short level test with the teacher'
    },
    {
      level: '2',
      levelTag: 'Level 2',
      title: 'Juz 29 & 28',
      goal: 'Add Juz Tabarak (29) and Qad Sami Allah (28).',
      movingOn: 'Short level test with the teacher'
    },
    {
      level: '3',
      levelTag: 'Level 3',
      title: 'Half Quran (15 Juz)',
      goal: 'Reach 15 Juz memorized while keeping earlier Juz fresh through Manzil.',
      movingOn: 'Short level test with the teacher'
    },
    {
      level: '4',
      levelTag: 'Level 4',
      title: 'Complete Quran',
      goal: 'Finish all 30 Juz, revise the whole Quran, and take the final evaluation. Optional next step: Ijazah.',
      movingOn: 'Short level test with the teacher'
    }
  ];

  const curriculumSteps = course.curriculumSteps && course.curriculumSteps.length === 4 ? course.curriculumSteps : [
    {
      title: 'New Lesson (Sabaq)',
      description: 'Daily memorization of new verses with strict Tajweed and pronunciation accuracy verified by the tutor before committing to memory.'
    },
    {
      title: 'Recent Revision (Sabqi)',
      description: 'The student recites the recently memorized portion (the last several days) to the teacher every class, so new memorization is locked in before it fades.'
    },
    {
      title: 'Older Revision (Manzil)',
      description: 'Previously memorized portions are revised on a rotating cycle, so nothing memorized earlier is forgotten as new lessons are added.'
    },
    {
      title: 'Evaluation & Certification',
      description: 'Milestone oral tests with senior scholars at the end of each level and an official completion certificate upon finishing target milestones or full Hifz.'
    }
  ];

  // Relevant testimonials for Hifz
  const hifzTestimonials = testimonials.length > 0 
    ? testimonials.filter(t => t.id.includes('hifz') || t.text?.toLowerCase().includes('hifz') || t.relation?.toLowerCase().includes('hifz') || t.text?.toLowerCase().includes('juz'))
    : [];

  const displayTestimonials = hifzTestimonials.length >= 2 ? hifzTestimonials : testimonials;

  return (
    <main className="flex-grow bg-background text-foreground">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex flex-wrap items-center gap-3 mb-3 justify-center lg:justify-start">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  Quran Memorization Program
                </span>
                <span className="text-xs text-muted-text flex items-center space-x-1.5 bg-foreground/5 border border-card-border rounded-full px-3 py-1">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  <span>
                    Last updated: October 2026
                  </span>
                </span>
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {course.seoTitle || 'Online Quran Memorization Classes (Hifz) | Memorize Quran Online'}
              </h1>
              <div className="h-1 w-20 bg-secondary mx-auto lg:mx-0 mt-4 rounded-full" />
              <p className="mt-6 text-sm sm:text-base text-muted-text leading-relaxed max-w-2xl font-normal">
                {course.overview || 'Our Online Quran Memorization (Hifz) program provides a structured, one-on-one memorization curriculum designed for kids and adults. Under the guidance of certified Huffaz and scholars, students memorize selected Surahs, Juz Amma, or the entire Holy Quran using the classical three-tier revision method (Sabaq, Sabqi, Manzil) with proper Tajweed rules.'}
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
                  <span>3-Day Free Trial</span>
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
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative max-w-sm w-full">
                <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
                <div className="glass p-3.5 rounded-3xl border-card-border shadow-2xl relative overflow-hidden">
                  <Image
                    src={course.image || '/quran-hifz.jpg'}
                    alt={course.title}
                    width={400}
                    height={320}
                    priority
                    className="w-full rounded-2xl object-cover h-[320px] shadow-inner"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-md border border-card-border/60 text-center shadow-lg">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Recommended Age</span>
                    <span className="text-sm font-bold text-foreground mt-0.5 block">{course.recommendedAge || 'Ages 6 and above'}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COURSE DESCRIPTION & WHO SHOULD JOIN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Overview */}
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Course Description</h2>
              <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal mb-6">
                Our custom **Hifz-ul-Quran** program is engineered to provide a supportive, disciplined, and spiritually uplifting 1-on-1 virtual learning experience. We combine the proven classical method of memorization with modern tracking tools to help students of all ages achieve their Quranic goals from anywhere in the USA, Canada, UK, and Australia.
              </p>
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal mb-6">
                Under the direct daily supervision of certified Huffaz and scholars, each student progresses at their own natural pace. Lessons follow a balanced daily cycle: committing new verses to memory (Sabaq), locking in recent chapters (Sabqi), and rotating long-term revision (Manzil) to ensure lifelong retention without feeling overwhelmed.
              </p>
              <div className="p-4.5 rounded-2xl bg-primary/5 border border-primary/20 text-xs sm:text-sm text-muted-text">
                Need to strengthen basic reading or pronunciation first? Explore our{' '}
                <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
                  Noorani Qaida
                </Link>{' '}
                and{' '}
                <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
                  Quran with Tajweed
                </Link>{' '}
                courses before starting your memorization journey.
              </div>
            </div>

            {/* Who should join Card */}
            <div className="lg:col-span-5">
              <div className="glass p-8 rounded-3xl border-card-border shadow-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Who Should Join?</h3>
                  <div className="h-1 w-12 bg-primary mb-6 rounded-full" />
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-4">
                    {course.whoShouldJoin || 'Designed for students of all ages who can read the Quran fluently with basic Tajweed rules and are committed to memorizing short Surahs, selected chapters, or the complete Quran.'}
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="glass p-3.5 rounded-2xl border border-card-border/65 bg-foreground/[0.005]">
                      <h4 className="font-bold text-xs sm:text-sm text-primary mb-1">Children &amp; Youth (Ages 6+)</h4>
                      <p className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal">
                        Young learners starting with Juz Amma or building up toward full Quran memorization with patient, encouraging teachers.
                      </p>
                    </div>
                    <div className="glass p-3.5 rounded-2xl border border-card-border/65 bg-foreground/[0.005]">
                      <h4 className="font-bold text-xs sm:text-sm text-secondary mb-1">Adults &amp; Professionals</h4>
                      <p className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal">
                        Busy adults looking to memorize selected Surahs (e.g. Surah Al-Mulk, Yaseen, Al-Kahf) or complete Hifz with flexible 24/7 schedules.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-card-border/50 pt-6">
                  <h4 className="text-xs font-bold text-muted-text uppercase tracking-wider mb-3">Key Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-xs">
                      <Clock className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>30–40 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <Users className="h-4.5 w-4.5 text-primary shrink-0" />
                      <span>1-on-1 (Zoom / Meet)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PART 1: YOUR HIFZ ROADMAP (4 LEVELS) */}
      <section className="py-20 bg-foreground/[0.005] border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
              Structured Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Your Hifz Roadmap: From Juz Amma to the Complete Quran
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed max-w-2xl mx-auto">
              Every student moves level by level at a pace the teacher sets according to the student&apos;s memory and schedule.
            </p>
          </div>

          {/* 4 Cards Stepper / Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {roadmapLevels.map((item, idx) => (
              <div 
                key={idx}
                className="glass rounded-3xl border-card-border p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="h-10 w-10 rounded-2xl bg-primary/15 text-primary font-extrabold text-base flex items-center justify-center border border-primary/25 shadow-sm">
                      {item.level}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full">
                      {item.levelTag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                    {item.title}
                  </h3>
                  
                  <div className="h-px bg-card-border/60 w-full mb-4" />

                  <div className="space-y-3">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-text block mb-1">
                        Goal:
                      </span>
                      <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-normal">
                        {item.goal}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-card-border/50">
                  <div className="flex items-start space-x-2 text-xs text-muted-text">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground block">Moving on:</span>
                      <span>{item.movingOn}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note below cards */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 p-4 sm:px-6 sm:py-3 rounded-2xl bg-background/80 border border-card-border shadow-sm text-xs sm:text-sm text-muted-text">
              <span className="font-medium text-foreground">Not ready for Hifz yet?</span>
              <span>Start with</span>
              <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold inline-flex items-center space-x-1">
                <span>Noorani Qaida</span>
              </Link>
              <span>or</span>
              <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold inline-flex items-center space-x-1">
                <span>Tajweed</span>
              </Link>
              <span>first.</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BENEFITS & LEARNING OUTCOMES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Why This Course?</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              Core Benefits &amp; Learning Outcomes
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
                {(course.learningOutcomes || [
                  'Memorize selected Surahs, specific Juz, or the entire Holy Quran with proper Tajweed',
                  'Master the classical three-tier revision system (Sabaq, Sabqi, Manzil) for solid long-term retention',
                  'Develop strong mental discipline, focus, and accurate recitation rhythm',
                  'Receive standard completion evaluation and graduation certification'
                ]).map((outcome, idx) => (
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
                {(course.benefits || [
                  "Custom-tailored memorization pace adapted to each student's memory capacity",
                  'Systematic daily revision system (Sabaq, Sabqi, Manzil) preventing forgetfulness',
                  'One-on-one personal guidance and encouragement from verified Huffaz scholars',
                  'Regular milestone testing and progress tracking reports for parents'
                ]).map((benefit, idx) => (
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

      {/* 4. SYLLABUS BREAKDOWN */}
      <section className="py-20 bg-foreground/[0.005] border-t border-card-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Syllabus Breakdown</h2>
            <p className="mt-3 text-3xl font-extrabold text-foreground">
              What You Study Step-by-Step
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-xs sm:text-sm text-muted-text max-w-2xl mx-auto">
              Our 3-tier revision methodology ensures that memorization becomes a permanent treasure rather than a temporary achievement.
            </p>
          </div>

          <div className="space-y-4">
            {curriculumSteps.map((step, idx) => {
              const isOpen = openCurriculumIdx === idx;
              return (
                <div key={idx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleCurriculum(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="h-8 w-8 rounded-full bg-primary/15 text-primary text-xs flex items-center justify-center font-bold shrink-0">
                        {idx + 1}
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
      </section>

      {/* PART 3: SAMPLE MONTHLY PROGRESS REPORT */}
      <section className="py-20 border-b border-card-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
              Parent Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              See Exactly How Your Child Is Progressing
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-muted-text leading-relaxed max-w-2xl mx-auto">
              Parents receive a clear report every month (weekly updates are also shared).
            </p>
          </div>

          {/* Designed Sample Report Card */}
          <div className="glass rounded-3xl border border-primary/20 shadow-2xl p-6 sm:p-10 relative overflow-hidden bg-foreground/[0.008]">
            
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            {/* Report Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-card-border/60">
              <div className="flex items-center space-x-3.5">
                <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0 border border-primary/25">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    Monthly Student Progress Report
                  </h3>
                  <p className="text-xs text-muted-text">
                    OQTutor Quran Memorization Department
                  </p>
                </div>
              </div>

              <div>
                <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-secondary/15 text-secondary border border-secondary/25">
                  <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  <span>Sample report (illustrative)</span>
                </span>
              </div>
            </div>

            {/* Student Meta Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-card-border/60 bg-foreground/[0.005] -mx-6 sm:-mx-10 px-6 sm:px-10">
              <div className="glass p-3.5 rounded-xl border-card-border/50">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Student</span>
                <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">Student A</span>
              </div>
              <div className="glass p-3.5 rounded-xl border-card-border/50">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Age</span>
                <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">9 Years Old</span>
              </div>
              <div className="glass p-3.5 rounded-xl border-card-border/50">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Current Level</span>
                <span className="text-xs sm:text-sm font-bold text-primary mt-0.5 block">Level 1: Juz Amma</span>
              </div>
              <div className="glass p-3.5 rounded-xl border-card-border/50">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-text block">Report Month</span>
                <span className="text-xs sm:text-sm font-bold text-foreground mt-0.5 block">October 2026</span>
              </div>
            </div>

            {/* Progress Metrics */}
            <div className="py-6 space-y-6">
              
              {/* Row 1: Sabaq & Attendance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Sabaq Card */}
                <div className="glass p-5 rounded-2xl border-card-border bg-foreground/[0.005]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-muted-text uppercase tracking-wider">New Lesson (Sabaq)</span>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">Completed</span>
                  </div>
                  <p className="text-lg sm:text-xl font-extrabold text-foreground">
                    14 pages / surahs
                  </p>
                  <p className="text-xs text-muted-text mt-1">
                    Completed with verified Tajweed accuracy this month
                  </p>
                </div>

                {/* Attendance Card */}
                <div className="glass p-5 rounded-2xl border-card-border bg-foreground/[0.005]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-muted-text uppercase tracking-wider">Attendance &amp; Punctuality</span>
                    <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">91.7%</span>
                  </div>
                  <p className="text-lg sm:text-xl font-extrabold text-foreground">
                    22 of 24 classes attended
                  </p>
                  <p className="text-xs text-muted-text mt-1">
                    Consistent attendance ensures steady memory consolidation
                  </p>
                </div>

              </div>

              {/* Row 2: Accuracy Progress Bars */}
              <div className="space-y-4">
                
                {/* Sabqi Progress Bar */}
                <div className="glass p-5 rounded-2xl border-card-border bg-foreground/[0.005]">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
                    <span className="text-foreground">Recent Revision (Sabqi) Accuracy</span>
                    <span className="text-primary font-extrabold">92%</span>
                  </div>
                  <div 
                    className="w-full bg-foreground/10 rounded-full h-3 overflow-hidden" 
                    role="progressbar" 
                    aria-valuenow={92} 
                    aria-valuemin={0} 
                    aria-valuemax={100}
                    aria-label="Recent revision (Sabqi) accuracy: 92%"
                  >
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-500 shadow-sm shadow-primary/30" 
                      style={{ width: '92%' }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-text mt-2">
                    Evaluates recitation fluency and memory recall of the last 5–10 memorized pages.
                  </p>
                </div>

                {/* Manzil Progress Bar */}
                <div className="glass p-5 rounded-2xl border-card-border bg-foreground/[0.005]">
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
                    <span className="text-foreground">Older Revision (Manzil) Accuracy</span>
                    <span className="text-secondary font-extrabold">88%</span>
                  </div>
                  <div 
                    className="w-full bg-foreground/10 rounded-full h-3 overflow-hidden" 
                    role="progressbar" 
                    aria-valuenow={88} 
                    aria-valuemin={0} 
                    aria-valuemax={100}
                    aria-label="Older revision (Manzil) accuracy: 88%"
                  >
                    <div 
                      className="bg-secondary h-3 rounded-full transition-all duration-500 shadow-sm shadow-secondary/30" 
                      style={{ width: '88%' }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-text mt-2">
                    Cumulative cyclic revision of previously memorized chapters to ensure lifetime retention.
                  </p>
                </div>

              </div>

              {/* Row 3: Tajweed Focus */}
              <div className="glass p-5 rounded-2xl border-card-border bg-foreground/[0.005]">
                <span className="text-xs font-bold text-muted-text uppercase tracking-wider block mb-1.5">
                  Tajweed Focus &amp; Makharij Notes
                </span>
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  Qalqalah and ghunnah improving; work on madd length.
                </p>
              </div>

              {/* Row 4: Teacher Comment & Next Month Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                
                <div className="glass p-5 rounded-2xl border border-primary/20 bg-primary/[0.02]">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
                    Teacher Comment
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">
                    Student A has demonstrated excellent daily dedication and discipline in memorization. Sabqi retention is very solid, and we are now giving extra attention to lengthening the natural Madd.
                  </p>
                </div>

                <div className="glass p-5 rounded-2xl border border-secondary/20 bg-secondary/[0.02]">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider block mb-2">
                    Next Month Goal
                  </span>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">
                    Complete Surah Al-Mulk and begin systematic Manzil revision for the last 10 Surahs.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. TEACHING METHOD & TEACHERS */}
      <section className="py-20 bg-foreground/[0.005] border-b border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Method info */}
            <div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Our Teaching Methodology</h2>
              <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
              <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal mb-6">
                {course.teachingMethod || 'We use structured one-on-one live video sessions with interactive memorization grids, audio recording reviews, and progressive daily checklists to maintain consistency and spiritual motivation.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>One-on-One Live Video Rooms (Zoom &amp; Google Meet)</strong>: No group distractions, 100% individual teacher focus.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Interactive Quran Tools</strong>: Digital pointer indicators, highlight marks, and pronunciation corrections.</span>
                </div>
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span><strong>Positive Encouragement</strong>: Reward charts and milestone badges that keep children enthusiastic and proud.</span>
                </div>
              </div>
            </div>

            {/* Teachers info */}
            <div className="glass p-8 sm:p-10 rounded-3xl border-card-border shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>Male &amp; Female Scholars</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6">
                We understand and respect cultural preferences. That is why we employ dedicated, certified <strong>male and female Quran scholars</strong> holding authentic Ijazah qualifications. Sisters and children can study with female teachers, while boys can be assigned male scholars.
              </p>
              <div className="p-4.5 rounded-2xl bg-primary/5 border border-primary/20 text-foreground relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl pointer-events-none" />
                <h4 className="font-extrabold text-xs sm:text-sm text-primary mb-1.5 flex items-center space-x-2">
                  <Award className="h-4.5 w-4.5 text-secondary shrink-0" />
                  <span>Ijazah Certified Huffaz &amp; Scholars</span>
                </h4>
                <p className="text-[11px] sm:text-xs text-muted-text leading-relaxed font-normal">
                  Every tutor has undergone thorough vetting, holds formal Quran memorization credentials, and possesses extensive experience teaching students across the USA, Canada, UK, and Australia.
                </p>
              </div>
              <div className="flex items-center space-x-4 border-t border-card-border/50 pt-6">
                <div className="h-10 w-10 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm">Assigned Specifically</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text">Select your tutor preference in the registration form.</p>
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
            <h2 className="text-3xl font-extrabold text-foreground mb-4">Flexible 24/7 Scheduling &amp; Structure</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-sm sm:text-base text-muted-text max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              All our classes are structured as <strong>One-on-One customized sessions, 3 to 6 times per week (30–40 minutes)</strong>. We operate 24 hours a day, 7 days a week, allowing you to select and modify class schedules that perfectly mesh with school, work, or university routines across the USA, Canada, UK, and Australia.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-left sm:text-center">
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">30–40 minutes</span>
                <span className="text-[10px] text-muted-text block mt-1">Class Duration</span>
              </div>
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">1-on-1</span>
                <span className="text-[10px] text-muted-text block mt-1">Class Mode</span>
              </div>
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">24 / 7</span>
                <span className="text-[10px] text-muted-text block mt-1">Availability</span>
              </div>
              <div className="glass p-4 rounded-xl border-card-border/50">
                <span className="text-primary font-bold text-base sm:text-lg block">3 Days</span>
                <span className="text-[10px] text-muted-text block mt-1">Free Trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: NEW SECTION "HIFZ PLANS & PRICING" */}
      <section className="py-20 bg-foreground/[0.005] border-y border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
              Affordable Quran Memorization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Simple Monthly Plans for Hifz
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-muted-text max-w-2xl mx-auto">
              Transparent, affordable monthly fee plans with zero contracts. Choose a schedule that fits your routine and start with a 3-day free trial.
            </p>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mb-12">
            {plansToDisplay.map((plan) => (
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
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground">${plan.price}</span>
                    <span className="text-sm text-muted-text ml-2">/ {plan.frequency}</span>
                  </div>
                  <div className="h-px bg-card-border w-full mb-6" />

                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-sm text-foreground/80">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Link
                    href={`/book-free-trial?plan=${encodeURIComponent(plan.title)}`}
                    className={`flex items-center justify-center w-full py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30'
                        : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                    }`}
                  >
                    {plan.ctaText || 'Book Free Trial'}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Shared Inclusions Row Under Cards */}
          <div className="glass rounded-2xl border-card-border p-6 max-w-5xl mx-auto mb-8 bg-foreground/[0.005]">
            <h4 className="text-xs font-bold text-muted-text uppercase tracking-wider text-center mb-4">
              All Plans Include
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
              <div className="flex flex-col items-center p-2">
                <CheckCircle className="h-5 w-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">1-on-1 live classes</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Award className="h-5 w-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">Ijazah-certified teachers</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <FileText className="h-5 w-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">Progress reports for parents</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <Sparkles className="h-5 w-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">Sabaq/Sabqi/Manzil tracking</span>
              </div>
              <div className="flex flex-col items-center p-2 col-span-2 sm:col-span-1">
                <Users className="h-5 w-5 text-primary mb-1.5" />
                <span className="text-xs font-semibold text-foreground">Male or female teacher choice</span>
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-muted-text mb-8">
            <div className="flex items-center space-x-2">
              <Shield className="h-4.5 w-4.5 text-secondary" />
              <span className="font-semibold text-foreground">3-Day Free Trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-4.5 w-4.5 text-secondary" />
              <span className="font-semibold text-foreground">No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4.5 w-4.5 text-secondary" />
              <span className="font-semibold text-foreground">No contract, cancel anytime</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="text-center space-y-3">
            <div>
              <Link
                href="/book-free-trial"
                className="px-9 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-primary/20 hover:shadow-xl transition-all inline-flex items-center space-x-2"
              >
                <span>Book Your Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <Link
                href="/pricing"
                className="text-xs sm:text-sm font-semibold text-primary hover:underline inline-flex items-center space-x-1"
              >
                <span>See full pricing</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 7. COURSE TESTIMONIALS */}
      {displayTestimonials.length > 0 && (
        <Testimonials data={displayTestimonials} />
      )}

      {/* 8. DYNAMIC COURSE FAQs */}
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
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base pr-4">{faq.question}</span>
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
