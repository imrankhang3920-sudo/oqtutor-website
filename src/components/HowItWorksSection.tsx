'use client';

import React, { useState, useEffect, useCallback, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Video, 
  Layers, 
  BookOpen, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  GraduationCap
} from 'lucide-react';

export interface StepItem {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  link?: {
    text: string;
    href: string;
  };
}

export interface HowItWorksSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: StepItem[];
  image?: {
    src: string;
    alt: string;
  };
  pillText?: string;
  miniCardTitle?: string;
  miniCardChips?: string[];
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryLink?: {
    text: string;
    href: string;
  };
  className?: string;
}

const DEFAULT_STEPS: StepItem[] = [
  {
    icon: Calendar,
    title: 'Book Your Free Trial',
    text: 'Choose a course and a time that suits you. Your 3-day free trial starts with no credit card required.',
    link: {
      text: 'Explore our Quran courses',
      href: '/courses',
    },
  },
  {
    icon: Video,
    title: 'Meet Your Tutor',
    text: 'Join a live class on Zoom or Google Meet. Your tutor, male or female, checks your reading level and suggests the right starting course.',
    link: {
      text: 'Meet our qualified tutors',
      href: '/tutors',
    },
  },
  {
    icon: Layers,
    title: 'Choose Your Plan',
    text: 'Plans start at $30 per month with classes of 30-40 minutes. No registration fees, and you can pause or cancel anytime.',
    link: {
      text: 'View flexible pricing plans',
      href: '/pricing',
    },
  },
  {
    icon: BookOpen,
    title: 'Learn With Live 1-on-1 Classes',
    text: 'Your tutor listens to your recitation, corrects mistakes on the spot and guides your practice between classes.',
    link: {
      text: 'Read our learning guides & tips',
      href: '/blog',
    },
  },
];

const DEFAULT_IMAGE = {
  src: '/online-quran-tutor-desk.jpg',
  alt: 'Student learning Quran online in a live 1-on-1 class with a tutor',
};

const DEFAULT_COURSES = [
  { title: 'Noorani Qaida', href: '/courses/noorani-qaida', icon: BookOpen },
  { title: 'Quran Reading', href: '/courses/quran-reading', icon: Sparkles },
  { title: 'Tajweed', href: '/courses/tajweed', icon: GraduationCap },
  { title: 'Hifz Program', href: '/courses/hifz', icon: Layers },
  { title: 'Tafseer', href: '/courses/tafseer', icon: BookOpen },
  { title: 'Islamic Studies', href: '/courses/islamic-studies', icon: Sparkles },
];

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const getServerReducedMotionSnapshot = () => false;

export default function HowItWorksSection({
  id = 'how-it-works-section',
  eyebrow = 'Simple Steps',
  title = 'How it works',
  subtitle = 'From free trial to confident recitation. No confusion and no long-term contracts.',
  steps = DEFAULT_STEPS,
  image = DEFAULT_IMAGE,
  pillText = 'Book Free Trial',
  miniCardTitle = 'Your Courses',
  primaryCta = {
    text: 'Start Your 3-Day Free Trial',
    href: '/book-free-trial',
  },
  secondaryLink = {
    text: 'See the full process',
    href: '/how-it-works',
  },
  className = '',
}: HowItWorksSectionProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  // Helper to safely trigger GA4 event
  const fireAnalyticsEvent = useCallback((eventName: string, params: Record<string, unknown>) => {
    try {
      if (typeof window !== 'undefined') {
        const win = window as unknown as {
          gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
          dataLayer?: Array<Record<string, unknown>>;
        };
        if (typeof win.gtag === 'function') {
          win.gtag('event', eventName, params);
        } else if (Array.isArray(win.dataLayer)) {
          win.dataLayer.push({ event: eventName, ...params });
        }
      }
    } catch {
      // Guard against any tracking failure
    }
  }, []);

  // Auto-advance steps every 5 seconds if not interacted, paused, or reduced-motion
  useEffect(() => {
    if (hasInteracted || isPaused || prefersReducedMotion || steps.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [hasInteracted, isPaused, prefersReducedMotion, steps.length]);

  const handleStepSelect = (index: number, isManual = false) => {
    if (isManual) {
      setHasInteracted(true);
    }
    setActiveStep(index);
    fireAnalyticsEvent('step_view', {
      step_number: index + 1,
      step_title: steps[index]?.title || `Step ${index + 1}`,
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    });
  };

  const handleCtaClick = () => {
    fireAnalyticsEvent('how_it_works_cta_click', {
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    });
  };

  return (
    <section 
      id={id} 
      aria-labelledby={`${id}-heading`}
      className={`py-20 md:py-28 relative overflow-hidden bg-background ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header (Eyebrow + Large H2 + 1-Line Subtitle) */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          {eyebrow && (
            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400 mb-2 tracking-normal">
              {eyebrow}
            </p>
          )}
          <h2 
            id={`${id}-heading`}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-3.5"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2-Column Responsive Layout (45% Image Card / 55% Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Rounded Image Card + Pill + Overlapping Mini Card */}
          <div className="lg:col-span-5 flex justify-center order-1">
            <div className="relative w-full max-w-[420px]">
              
              {/* Subtle brand ambient glow backdrop behind upper-right corner */}
              <div 
                className="absolute -top-10 -right-10 w-72 h-72 bg-emerald-400/25 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" 
                aria-hidden="true"
              />

              {/* Main Rounded Image Card */}
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-slate-900/15 border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-[4/4.6]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={700}
                  priority={false}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Pill Button linking to trial booking */}
              {pillText && (
                <div 
                  className="absolute top-[48%] -right-3 sm:-right-6 z-20"
                >
                  <Link
                    href={primaryCta.href || '/book-free-trial'}
                    onClick={handleCtaClick}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#86efac] text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/15 border border-emerald-300 hover:scale-105 transition-transform duration-200"
                  >
                    <span>{pillText}</span>
                  </Link>

                  {/* Curved Arrow SVG pointing down to the mini card */}
                  <svg 
                    className="w-5 h-7 text-slate-800 dark:text-slate-200 absolute -bottom-6 right-3 pointer-events-none" 
                    viewBox="0 0 24 32" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 2C16 6 18 16 16 26" />
                    <path d="m11 22 5 5 5-5" />
                  </svg>
                </div>
              )}

              {/* Overlapping White Mini Card ("Your Courses") with internal links */}
              <div 
                className="absolute -bottom-6 -right-2 sm:-right-8 z-20 w-[270px] sm:w-[310px] bg-white dark:bg-slate-900 rounded-[24px] p-5 sm:p-6 shadow-2xl shadow-slate-900/20 border border-slate-100 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                    {miniCardTitle}
                  </h3>
                  <Link
                    href="/courses"
                    className="text-[11px] font-semibold text-primary hover:text-primary-hover transition-colors"
                  >
                    View all &rarr;
                  </Link>
                </div>

                {/* 2x3 Grid of Mini Course Cards with clickable internal links */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                  {DEFAULT_COURSES.map((course, idx) => {
                    const CourseIcon = course.icon;
                    return (
                      <Link
                        key={idx}
                        href={course.href}
                        className="bg-slate-50 dark:bg-slate-800/80 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-300 dark:hover:border-emerald-700/60 rounded-xl p-2 flex flex-col items-center text-center border border-slate-100 dark:border-slate-700/50 transition-all duration-200 group/item"
                      >
                        <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 group-hover/item:scale-110 flex items-center justify-center mb-1.5 transition-transform">
                          <CourseIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-[10px] font-semibold text-slate-800 dark:text-slate-200 group-hover/item:text-primary truncate w-full leading-tight">
                          {course.title}
                        </span>
                        <div className="w-7 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-1 opacity-70 group-hover/item:bg-primary transition-colors" />
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom handle/pill line */}
                <div className="w-9 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mt-4" />
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Timeline with Rail */}
          <div 
            className="lg:col-span-7 order-2 pt-8 lg:pt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative pl-6 sm:pl-8">
              
              {/* Thin Continuous Rail */}
              <div 
                className="absolute left-0 top-6 bottom-6 w-[2px] bg-slate-200 dark:bg-slate-800" 
                aria-hidden="true"
              />

              {/* Active Rail Segment */}
              <div 
                className="absolute left-0 w-[3px] bg-slate-900 dark:bg-emerald-400 rounded-full transition-all duration-300 ease-out" 
                style={{
                  top: `calc(${activeStep * 25}% + 12px)`,
                  height: '64px',
                }}
                aria-hidden="true"
              />

              <ol className="space-y-8 sm:space-y-10" aria-label="How it works step sequence">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const IconComponent = step.icon || Sparkles;

                  return (
                    <li key={idx}>
                      <div
                        onClick={() => handleStepSelect(idx, true)}
                        onMouseEnter={() => handleStepSelect(idx, false)}
                        onFocus={() => {
                          setIsPaused(true);
                          handleStepSelect(idx, false);
                        }}
                        onBlur={() => setIsPaused(false)}
                        aria-current={isActive ? 'step' : undefined}
                        className="w-full text-left flex items-start gap-4 sm:gap-6 group cursor-pointer rounded-2xl p-1"
                      >
                        {/* Icon Square Container */}
                        <div 
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isActive
                              ? 'bg-[#86efac] text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 group-hover:border-slate-400'
                          }`}
                        >
                          <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 stroke-[2]" />
                        </div>

                        {/* Step Details */}
                        <div className="flex-grow pt-1">
                          <h3 
                            className={`text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200 ${
                              isActive 
                                ? 'text-slate-900 dark:text-white' 
                                : 'text-slate-800 dark:text-slate-200 group-hover:text-slate-950 dark:group-hover:text-white'
                            }`}
                          >
                            {step.title}
                          </h3>

                          <p className="mt-1.5 text-xs sm:text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal max-w-lg">
                            {step.text}
                          </p>

                          {/* Contextual Step Internal Link */}
                          {step.link && (
                            <div className="mt-2">
                              <Link
                                href={step.link.href}
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all"
                              >
                                <span>{step.link.text}</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>

            </div>

            {/* CTAs Below Timeline */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pl-6 sm:pl-8">
              <Link
                href={primaryCta.href}
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-center"
              >
                <span>{primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {secondaryLink && (
                <Link
                  href={secondaryLink.href}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full text-center"
                >
                  <span>{secondaryLink.text}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            {/* Quick Explore Internal Link Bar for SEO & Navigation */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pl-6 sm:pl-8">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Quick explore:</span>
              <Link href="/courses/noorani-qaida" className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-primary transition-colors">
                Noorani Qaida
              </Link>
              <Link href="/courses/tajweed" className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-primary transition-colors">
                Tajweed
              </Link>
              <Link href="/courses/hifz" className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-primary transition-colors">
                Hifz Program
              </Link>
              <Link href="/tutors" className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-primary transition-colors">
                Certified Tutors
              </Link>
              <Link href="/pricing" className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-primary transition-colors">
                Pricing & Plans
              </Link>
              <Link href="/blog" className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-primary transition-colors">
                Learning Guides
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
