'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Sparkles, TrendingUp, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight?: string;
}

export default function Features() {
  const benefitCards: FeatureItem[] = [
    {
      id: 'feat-1',
      title: 'Certified Teachers',
      description: 'Native Arabic & certified scholars from top Islamic universities with background verification.',
      icon: Award,
      highlight: 'Al-Azhar Verified',
    },
    {
      id: 'feat-2',
      title: 'Flexible Scheduling',
      description: 'Book 30-min sessions anytime 24/7 across USA, UK, Canada, and Australian time zones.',
      icon: Clock,
      highlight: '24/7 Availability',
    },
    {
      id: 'feat-3',
      title: 'Female & Male Teachers',
      description: 'Choose dedicated female Quran tutors for sisters and young kids for maximum comfort and privacy.',
      icon: Users,
      highlight: 'Dedicated Sister Tutors',
    },
    {
      id: 'feat-4',
      title: 'Free Trial — No Card',
      description: 'Experience your first live 1-on-1 class completely free with zero financial obligation.',
      icon: Sparkles,
      highlight: '100% Risk-Free',
    },
    {
      id: 'feat-5',
      title: 'Progress Tracking',
      description: 'Monthly performance evaluations and parent reports on Tajweed rules and Surah memorization.',
      icon: TrendingUp,
      highlight: 'Monthly Reports',
    },
    {
      id: 'feat-6',
      title: '20+ Countries Served',
      description: 'Trusted by over 500+ Muslim families across North America, Europe, UAE, and Australia.',
      icon: Globe,
      highlight: 'Global Community',
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 relative overflow-hidden bg-foreground/[0.01]">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            Why Choose OQTutor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Everything You Need for Lifelong Quranic Excellence
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text max-w-2xl mx-auto">
            Combining accredited traditional scholarship with cutting-edge online classrooms tailored for modern Muslim households.
          </p>
        </div>

        {/* 6 Benefit Cards Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {benefitCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-card-border bg-card/40 backdrop-blur-md hover:border-primary/40 hover:bg-card/70 shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="h-6 w-6 stroke-[2]" />
                    </div>
                    {card.highlight && (
                      <span className="text-[11px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full border border-secondary/20">
                        {card.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2.5 tracking-tight group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-muted-text leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-card-border/50 flex items-center text-xs font-semibold text-primary group-hover:text-primary-hover gap-1 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
