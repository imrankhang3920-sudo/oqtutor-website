'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, ShieldCheck, Sparkles, Clock, Users } from 'lucide-react';
import { HeroData } from '@/data/db';
import Image from 'next/image';

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  // Urgency & Trust checkmarks
  const urgencyBadges = [
    'No credit card required',
    'Cancel anytime',
    'Expert match guaranteed',
  ];

  const titleText = data.title || "Personalized 1-on-1 Quran Classes for Kids — 100% Risk-Free";
  const subtitleText = data.subtitle || "Expert female & male teachers from USA & Pakistan. 30-minute personalized lessons. Book your free trial in 60 seconds.";

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-12 md:py-20">
      {/* Background Image with Gradient Overlay (LCP Optimized) */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={data.backgroundImage || "https://images.unsplash.com/photo-1609599006353-e629f1d40968?q=80&w=1600&auto=format&fit=crop"}
          alt="Online Quran Classes for Kids"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-all duration-700 opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background lg:bg-gradient-to-r lg:from-background lg:via-background/90 lg:to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Social Proof Live Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6 shadow-sm"
          >
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-primary tracking-wide">
              Rated 4.9/5 by 500+ Muslim Families
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-foreground"
          >
            {titleText}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-muted-text max-w-2xl font-normal leading-relaxed"
          >
            {subtitleText}
          </motion.p>

          {/* Urgency Value Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm font-medium text-foreground/90"
          >
            {urgencyBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center space-x-1.5 bg-foreground/[0.03] px-2.5 py-1 rounded-md border border-card-border/60">
                <Check className="h-4 w-4 text-emerald-500 shrink-0 stroke-[2.5]" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <a
              href={data.ctaLink || "/book-free-trial"}
              className="group relative flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer text-base"
            >
              <span>{data.ctaText || "Book Your Free Trial"}</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#courses"
              className="flex items-center justify-center space-x-2 px-7 py-4 rounded-full glass border border-card-border hover:bg-foreground/5 text-foreground font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer text-base"
            >
              <span>Explore Courses</span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 text-xs text-muted-text flex items-center gap-1.5"
          >
            <Clock className="h-3.5 w-3.5 text-secondary" />
            <span>Takes under 60 seconds • No commitment</span>
          </motion.p>
        </div>

        {/* Right Column: Interactive Social Proof & Value Card */}
        <div className="hidden lg:col-span-5 lg:flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-7 rounded-3xl border border-card-border shadow-2xl relative max-w-md w-full bg-card/60 backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-card-border">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Why Parents Choose Us</h3>
                  <p className="text-[11px] text-muted-text">Dedicated to your child&apos;s growth</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                100% Free Trial
              </span>
            </div>

            <ul className="mt-5 space-y-4">
              {[
                { 
                  icon: Users,
                  title: 'Certified Native Scholars', 
                  desc: 'Qualified male & female tutors fluent in English with child-friendly pedagogy.' 
                },
                { 
                  icon: Clock,
                  title: '30-Minute Focused Classes', 
                  desc: 'Optimal attention span for young learners with flexible scheduling 24/7.' 
                },
                { 
                  icon: ShieldCheck,
                  title: 'Guaranteed Tutor Match', 
                  desc: 'Switch teachers anytime until you find the exact fit for your child.' 
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <li key={index} className="flex items-start space-x-3.5">
                    <div className="p-2 rounded-xl bg-foreground/5 text-primary shrink-0 mt-0.5 border border-card-border">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-text mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 pt-5 border-t border-card-border flex items-center justify-between bg-primary/[0.03] p-3 rounded-2xl border">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">Next Trial Available</span>
              </div>
              <span className="text-xs font-bold text-primary">Today / Tomorrow</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

