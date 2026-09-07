'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, UserCheck2, Video, Trophy, ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksSteps() {
  const steps = [
    {
      number: '01',
      title: 'Book Free Trial',
      description: 'Pick your preferred course and convenient time slot in under 60 seconds.',
      icon: CalendarCheck,
    },
    {
      number: '02',
      title: 'Get Matched',
      description: 'We match you with a certified male or female tutor customized for your child.',
      icon: UserCheck2,
    },
    {
      number: '03',
      title: 'Start Learning',
      description: 'Join live 1-on-1 interactive lessons from any computer, tablet, or phone.',
      icon: Video,
    },
    {
      number: '04',
      title: 'Progress & Grow',
      description: 'Receive regular parent reports, Tajweed mastery milestones, and certificates.',
      icon: Trophy,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
      {/* Decorative gradient orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-secondary text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How It Works
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Starting your Quran journey with OQTutor is seamless, fast, and completely risk-free.
          </p>
        </div>

        {/* 4 Steps Grid with Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  className="relative flex flex-col items-center text-center p-7 sm:p-8 rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-md hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300 group"
                >
                  {/* Step Number Badge */}
                  <span className="text-xs font-mono font-bold tracking-widest text-secondary bg-secondary/20 px-3 py-1 rounded-full mb-4">
                    STEP {step.number}
                  </span>

                  {/* Icon */}
                  <div className="h-16 w-16 rounded-2xl bg-white/10 text-secondary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-secondary group-hover:text-slate-900 transition-all duration-300 shadow-inner">
                    <IconComponent className="h-8 w-8 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow connector between steps */}
                {!isLast && (
                  <div className="hidden lg:flex items-center justify-center absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none" style={{ left: `calc(${idx * 25}% + 22.5%)` }}>
                    <ArrowRight className="h-6 w-6 text-secondary/60 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* CTA Banner at bottom of steps */}
        <div className="mt-14 text-center">
          <Link
            href="/book-free-trial"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary hover:bg-secondary-hover text-slate-950 font-extrabold text-sm sm:text-base shadow-xl shadow-secondary/20 hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Book Your Free Trial in 60 Seconds</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
