'use client';

import React, { useState, useEffect, useCallback, useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Video, 
  Layers, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  ChevronRight 
} from 'lucide-react';

export interface StepItem {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
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
  },
  {
    icon: Video,
    title: 'Meet Your Tutor',
    text: 'Join a live class on Zoom or Google Meet. Your tutor, male or female, checks your reading level and suggests the right starting course.',
  },
  {
    icon: Layers,
    title: 'Choose Your Plan',
    text: 'Plans start at $30 per month with classes of 30-40 minutes. No registration fees, and you can pause or cancel anytime.',
  },
  {
    icon: BookOpen,
    title: 'Learn With Live 1-on-1 Classes',
    text: 'Your tutor listens to your recitation, corrects mistakes on the spot and guides your practice between classes.',
  },
];

const DEFAULT_IMAGE = {
  src: '/online-quran-classes-usa.jpg',
  alt: 'Student learning Quran online in a live 1-on-1 class with a tutor',
};

const DEFAULT_CHIPS = [
  'Noorani Qaida',
  'Quran Reading',
  'Tajweed',
  'Hifz',
  'Tafseer',
  'Islamic Studies',
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
  miniCardChips = DEFAULT_CHIPS,
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
      className={`py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border/40 ${className}`}
    >
      {/* Subtle brand ambient glow backgrounds */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          {eyebrow && (
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>{eyebrow}</span>
            </span>
          )}
          <h2 
            id={`${id}-heading`}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight"
          >
            {title}
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          {subtitle && (
            <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-text font-normal leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* 2-Column Responsive Layout (45% Image Card / 55% Timeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Rounded Image Card with Pill & Mini Card */}
          <div className="lg:col-span-5 flex justify-center order-1">
            <div className="relative w-full max-w-md">
              
              {/* Brand-tinted glow backdrop */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-primary/20 via-secondary/15 to-primary/10 rounded-3xl blur-2xl -z-10 opacity-70 pointer-events-none" />
              
              {/* Main Rounded Image Card */}
              <div className="glass p-3 sm:p-4 rounded-3xl border border-card-border/80 shadow-2xl bg-card-bg relative overflow-hidden">
                <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden bg-foreground/5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={560}
                    height={560}
                    priority={false}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {/* Subtle dark gradient overlay on bottom of image for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Pill Button at middle-right edge */}
              {pillText && (
                <div 
                  className="absolute top-1/4 -right-2 sm:-right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-background/95 dark:bg-slate-900/95 backdrop-blur-md border border-primary/30 shadow-lg shadow-primary/10"
                  aria-hidden="true"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-foreground">
                    {pillText}
                  </span>
                  {/* Small Curved Arrow SVG pointing toward bottom-right mini card */}
                  <svg 
                    className="w-4 h-4 text-secondary shrink-0 transform translate-y-0.5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 4c0 7 6 13 14 13" />
                    <path d="m14 13 5 4-5 4" />
                  </svg>
                </div>
              )}

              {/* Overlapping White Mini Card on Bottom-Right */}
              <div 
                className="absolute -bottom-6 -right-2 sm:-right-6 z-20 max-w-[240px] sm:max-w-[270px] glass bg-background/95 dark:bg-slate-900/95 backdrop-blur-md p-4 sm:p-4.5 rounded-2xl border border-card-border shadow-xl pointer-events-none select-none"
                aria-hidden="true"
              >
                <div className="flex items-center gap-1.5 mb-2.5">
                  <div className="p-1 rounded-md bg-primary/10 text-primary">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-foreground tracking-tight">
                    {miniCardTitle}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {miniCardChips.map((chip, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/20"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Timeline with Rail */}
          <div 
            className="lg:col-span-7 order-2 pt-6 lg:pt-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ol className="relative space-y-4 sm:space-y-5" aria-label="How it works step sequence">
              
              {/* Thin Vertical Rail running down the list */}
              <div 
                className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-card-border/70 -z-0" 
                aria-hidden="true"
              />

              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const IconComponent = step.icon || Sparkles;
                const stepNum = `0${idx + 1}`.slice(-2);

                return (
                  <li key={idx} className="relative z-10">
                    <button
                      type="button"
                      onClick={() => handleStepSelect(idx, true)}
                      onMouseEnter={() => handleStepSelect(idx, false)}
                      onFocus={() => {
                        setIsPaused(true);
                        handleStepSelect(idx, false);
                      }}
                      onBlur={() => setIsPaused(false)}
                      aria-current={isActive ? 'step' : undefined}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all duration-200 flex items-start gap-4 sm:gap-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                        isActive
                          ? 'glass bg-primary/[0.04] dark:bg-primary/[0.08] border-primary/40 shadow-md shadow-primary/5'
                          : 'glass bg-background/50 hover:bg-foreground/[0.02] border-card-border/60 hover:border-card-border'
                      }`}
                    >
                      {/* Step Icon Container on Rail */}
                      <div 
                        className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                          isActive
                            ? 'bg-primary text-white border-2 border-primary shadow-lg shadow-primary/30 scale-105'
                            : 'glass bg-background border border-card-border text-muted-text'
                        }`}
                      >
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2]" />
                      </div>

                      {/* Step Content */}
                      <div className="flex-grow pt-0.5">
                        <div className="flex items-center gap-2 mb-1">
                          <span 
                            className={`text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                              isActive 
                                ? 'bg-secondary/15 text-secondary border border-secondary/20' 
                                : 'bg-foreground/5 text-muted-text'
                            }`}
                          >
                            STEP {stepNum}
                          </span>
                        </div>

                        <h3 
                          className={`text-base sm:text-lg font-bold tracking-tight transition-colors duration-200 ${
                            isActive ? 'text-foreground' : 'text-foreground/90'
                          }`}
                        >
                          {step.title}
                        </h3>

                        <p className="mt-1 text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                          {step.text}
                        </p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>

            {/* CTAs Under the Timeline */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pl-1 sm:pl-2">
              <Link
                href={primaryCta.href}
                onClick={handleCtaClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-bold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-center"
              >
                <span>{primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {secondaryLink && (
                <Link
                  href={secondaryLink.href}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-muted-text hover:text-primary transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full text-center"
                >
                  <span>{secondaryLink.text}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
