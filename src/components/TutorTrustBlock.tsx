'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpenCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function TutorTrustBlock() {
  const cards = [
    {
      icon: Award,
      badge: 'Verified Credentials',
      title: 'Ijazah-Certified Huffaz & Qaris',
      description: 'Learn authentic pronunciation (Makharij) and Tajweed rules from scholars holding verified chains of recitation.',
      points: [
        'Sanad & Ijazah holding instructors',
        'Accurate articulation point training',
        'Continuous recitation evaluation',
      ],
      link: {
        text: 'View Certified Tutors →',
        href: '/tutors',
      },
    },
    {
      icon: Users,
      badge: 'Sisters & Kids',
      title: 'Dedicated Female Quran Teachers',
      description: 'Experienced, patient female scholars available for sisters, mothers, and young children seeking a comfortable 1-on-1 environment.',
      points: [
        '100% private & comfortable sessions',
        'Specialized in early childhood phonics',
        'Flexible hours for busy mothers',
      ],
      link: {
        text: 'Learn about Female Tutors →',
        href: '/courses/female-quran-teacher',
      },
      highlighted: true,
    },
    {
      icon: BookOpenCheck,
      badge: 'Interactive Learning',
      title: 'Fluent English & Child-Friendly Pedagogy',
      description: 'Tutors explain rules clearly in English using interactive digital whiteboards, phonics flashcards, and positive encouragement.',
      points: [
        'Bilingual English/Urdu & Arabic scholars',
        'Gamified learning & screen sharing',
        'Engaging lessons that keep kids focused',
      ],
      link: {
        text: 'Explore Teaching Method →',
        href: '/how-it-works',
      },
    },
  ];

  return (
    <section id="certified-tutors" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden border-t border-card-border/60">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            Expert Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Learn with Certified Male &amp; Female Quran Tutors
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed">
            Every OQTutor instructor passes a strict multi-stage vetting process for Tajweed mastery, fluent English communication, and child-friendly teaching.
          </p>
        </div>

        {/* 3-Card E-E-A-T Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl border transition-all duration-300 p-7 sm:p-8 ${
                  card.highlighted
                    ? 'border-primary/80 bg-primary/[0.03] shadow-xl shadow-primary/10 md:-translate-y-1'
                    : 'border-card-border bg-card/40 hover:border-primary/30 shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    {card.description}
                  </p>

                  <ul className="space-y-2 mb-6 pt-4 border-t border-card-border/60">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 mt-auto">
                  <Link
                    href={card.link.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover transition-colors group"
                  >
                    <span>{card.link.text}</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Central Link */}
        <div className="mt-12 text-center">
          <Link
            href="/tutors"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-card-border glass hover:bg-foreground/5 text-foreground font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>Meet Our Tutors</span>
            <ArrowRight className="h-4 w-4 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  );
}
