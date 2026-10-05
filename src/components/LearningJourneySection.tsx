'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Video, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/components/AnalyticsTrackers';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: '01',
    title: 'Find Your Starting Point',
    description:
      'Begin with your current Quran reading level and learning goals. This helps shape lessons around what the student already knows and what needs attention.',
  },
  {
    number: '02',
    title: 'Build the Right Foundation',
    description:
      'Lessons focus on the skills that matter most at each stage, from Arabic reading foundations to clearer Quran recitation and Tajweed.',
  },
  {
    number: '03',
    title: 'Practice With Purpose',
    description:
      'Live one-to-one lessons give students space to read, ask questions, correct mistakes, and strengthen new skills with their tutor.',
  },
  {
    number: '04',
    title: 'Keep Growing Step by Step',
    description:
      'Learning develops through regular practice, revision, and continued guidance so students can build confidence without rushing the process.',
  },
];

export default function LearningJourneySection() {
  const handleTrialClick = () => {
    trackEvent('journey_trial_click', {
      section: 'learning_journey',
      cta: 'Book a Free Trial',
    });
  };

  return (
    <section 
      id="learning-journey" 
      className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-primary-light/20 to-background overflow-hidden"
      aria-label="Your Learning Journey"
    >
      {/* Subtle background ambient decorative accents */}
      <div className="absolute top-1/4 left-[-10%] w-[380px] h-[380px] rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Header: Visible only on small/medium screens to ensure exact stack order */}
        <div className="lg:hidden text-left mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Your Learning Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
            From First Lesson to Confident Recitation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-text leading-relaxed">
            Every student starts at a different level. OQTutor creates a learning experience that adapts to the student's goals, pace, and Quran learning needs.
          </p>
        </div>

        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT: Uploaded Quran Learning Image with 2 subtle floating UI cards */}
          <div className="lg:col-span-5 relative w-full mx-auto max-w-lg lg:max-w-none">
            
            {/* Image Frame Container */}
            <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-xl shadow-slate-900/10 dark:shadow-black/50 border border-card-border/70 bg-card-bg">
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] max-h-[580px]">
                <Image
                  src="/images/warm-quran-study.jpg"
                  alt="Muslim Quran teacher conducting an online Quran lesson with a laptop and Quran"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  loading="lazy"
                  quality={90}
                />
                
                {/* Subtle soft gradient scrim at bottom to ensure depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Card 1: Top-Right / Top-Left depending on screen */}
            <div 
              className="absolute -top-3 sm:-top-4 -right-2 sm:-right-4 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-card-border/80 flex items-center gap-3 transition-transform hover:-translate-y-0.5 duration-200"
              style={{ maxWidth: '220px' }}
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-primary flex items-center justify-center shrink-0">
                <Video className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wide leading-none">
                  Live Quran Lesson
                </p>
                <p className="text-xs sm:text-sm font-bold text-foreground mt-0.5 truncate">
                  One-to-One Learning
                </p>
              </div>
            </div>

            {/* Floating Card 2: Bottom-Left / Bottom-Right */}
            <div 
              className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-4 z-10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-lg border border-card-border/80 flex items-center gap-3 transition-transform hover:-translate-y-0.5 duration-200"
              style={{ maxWidth: '230px' }}
            >
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-4.5 h-4.5" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wide leading-none">
                  Learning Focus
                </p>
                <p className="text-xs sm:text-sm font-bold text-foreground mt-0.5 truncate">
                  Tajweed & Recitation
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT: Header (Desktop only) + 4-Step Timeline + CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Desktop Header: Visible on lg screens */}
            <div className="hidden lg:block text-left mb-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Learning Journey</span>
              </div>
              <h2 className="text-3xl xl:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                From First Lesson to Confident Recitation
              </h2>
              <p className="mt-3.5 text-base xl:text-lg text-muted-text leading-relaxed max-w-2xl">
                Every student starts at a different level. OQTutor creates a learning experience that adapts to the student's goals, pace, and Quran learning needs.
              </p>
            </div>

            {/* Vertical Four-Step Timeline */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/25 dark:border-primary/30 space-y-7 sm:space-y-8 my-2 ml-3 sm:ml-4">
              {TIMELINE_STEPS.map((step) => (
                <div key={step.number} className="relative group">
                  
                  {/* Step Number Marker */}
                  <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background border-2 border-primary text-primary font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    {step.number}
                  </div>

                  {/* Step Content */}
                  <div className="pt-0.5">
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-muted-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Block */}
            <div className="mt-9 sm:mt-10 pt-6 border-t border-card-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-base sm:text-lg font-bold text-foreground">
                  Ready to Begin?
                </p>
                <p className="text-xs sm:text-sm text-muted-text flex items-center gap-1.5 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                  3-Day Free Trial • No Credit Card Required
                </p>
              </div>

              <Link
                href="/book-free-trial"
                onClick={handleTrialClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 transform hover:-translate-y-0.5 shrink-0"
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
