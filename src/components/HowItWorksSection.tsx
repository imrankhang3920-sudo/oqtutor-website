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
  linkText?: string;
  linkHref?: string;
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
    title: 'Book Your 3-Day Free Trial',
    text: "Choose your preferred course and a class time that fits your family's schedule. Start your 3-day free trial with no credit card required.",
    linkText: 'Book 3-day free trial',
    linkHref: '#book-trial',
  },
  {
    icon: Video,
    title: 'Meet Your Male or Female Tutor',
    text: "Join a live 1-on-1 session on Zoom or Google Meet. Your certified male or female tutor assesses the student's reading level and recommends a tailored learning path.",
    linkText: 'Meet our male & female tutors',
    linkHref: '/tutors',
  },
  {
    icon: Layers,
    title: 'Choose Your Flexible Plan',
    text: 'Plans start at $30/month for 30-minute live classes. Zero registration fees, and you can reschedule, pause, or cancel anytime.',
    linkText: 'View pricing & monthly plans',
    linkHref: '/pricing',
  },
  {
    icon: BookOpen,
    title: 'Learn with Live 1-on-1 Classes',
    text: 'Your dedicated tutor listens to your recitation, corrects Tajweed mistakes on the spot, and provides structured weekly progress updates.',
    linkText: 'Explore Quran & Tajweed courses',
    linkHref: '/courses',
  },
];

const DEFAULT_IMAGE = {
  src: '/online-quran-tutor-desk.jpg',
  alt: 'Student learning Quran online in a live 1-on-1 class with a tutor',
};

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
  primaryCta = {
    text: 'Start Your 3-Day Free Trial',
    href: '#book-trial',
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

              {/* Clean trust badge at bottom of image card */}
              <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Live 1-on-1 Classes</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Zoom &amp; Google Meet</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-300 dark:border-emerald-800">
                  3-Day Free Trial
                </span>
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
                        role="button"
                        tabIndex={0}
                        onClick={() => handleStepSelect(idx, true)}
                        onMouseEnter={() => handleStepSelect(idx, false)}
                        onFocus={() => {
                          setIsPaused(true);
                          handleStepSelect(idx, false);
                        }}
                        onBlur={() => setIsPaused(false)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleStepSelect(idx, true);
                          }
                        }}
                        aria-current={isActive ? 'step' : undefined}
                        className="w-full text-left flex items-start gap-4 sm:gap-6 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-2xl p-1"
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

                          {step.linkHref && step.linkText && (
                            <Link
                              href={step.linkHref}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 mt-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover hover:underline transition-colors"
                            >
                              <span>{step.linkText}</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </Link>
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

            {/* Contextual Internal Links Row */}
            <div className="mt-6 pl-6 sm:pl-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Explore:</span>
              <Link href="/courses" className="hover:text-primary hover:underline transition-colors">
                All Courses
              </Link>
              <span>•</span>
              <Link href="/pricing" className="hover:text-primary hover:underline transition-colors">
                Pricing & Plans
              </Link>
              <span>•</span>
              <Link href="/tutors" className="hover:text-primary hover:underline transition-colors">
                Certified Tutors
              </Link>
              <span>•</span>
              <Link href="/blog" className="hover:text-primary hover:underline transition-colors">
                Learning Guides
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
