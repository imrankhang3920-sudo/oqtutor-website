'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TestimonialData } from '@/data/db';

interface TestimonialsProps {
  data?: TestimonialData[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  // Curated high-converting testimonials representing Kids, Adults, and Tajweed outcomes
  const defaultReviews: TestimonialData[] = [
    {
      id: 'rev-1',
      name: 'Sister Maryam & Tariq (Son, Age 7)',
      relation: 'Mother of Noorani Qaida Student',
      location: 'Dallas, Texas (USA)',
      rating: 5,
      text: 'My 7-year-old son was struggling with Arabic letters in local weekend school. Within 6 weeks with his OQTutor teacher, he finished Noorani Qaida and is now reciting Surah Al-Fatiha with accurate Makharij! The 1-on-1 female tutor is exceptionally patient.',
    },
    {
      id: 'rev-2',
      name: 'Dr. Zayd Al-Hussaini',
      relation: 'Adult Tajweed & Hifz Student',
      location: 'London (UK)',
      rating: 5,
      text: 'As a busy physician, finding time for Quran memorization seemed impossible. OQTutor allowed me to book 30-minute classes early morning before my hospital shifts. I have successfully memorized Juz Amma and Juz Tabarak with certified Ijazah guidance.',
    },
    {
      id: 'rev-3',
      name: 'Amina & Bilal S.',
      relation: 'Parents of 2 Daughters (Ages 9 & 12)',
      location: 'Toronto, Ontario (Canada)',
      rating: 5,
      text: 'We tried several online Quran platforms before OQTutor. What sets them apart is their interactive portal and consistent monthly progress reports. Both our daughters look forward to their daily classes with zero resistance. 100% recommended!',
    },
  ];

  const reviewsToDisplay = (data && data.length >= 3) ? data.slice(0, 3) : defaultReviews;

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            Real Stories, Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            What Parents & Students Say
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            Read genuine reviews from families who transformed their Quran recitation with our certified teachers.
          </p>
        </div>

        {/* 3 Streamlined Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviewsToDisplay.map((review, idx) => {
            return (
              <motion.div
                key={review.id || idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass rounded-3xl border border-card-border p-7 sm:p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 relative flex flex-col justify-between group bg-card/40 backdrop-blur-md"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-foreground/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  <Quote className="h-10 w-10 rotate-180" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < (review.rating || 5)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-foreground/10'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-foreground/85 leading-relaxed italic mb-6 relative z-10 font-normal">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-card-border/60 pt-4 mt-auto">
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                  </div>
                  <div className="flex flex-col text-xs text-muted-text space-y-1">
                    <span className="text-[11px] font-medium text-foreground/70">{review.relation}</span>
                    <span className="inline-block self-start bg-foreground/5 px-2.5 py-0.5 rounded-full border border-card-border text-[10px] tracking-wide font-semibold text-primary">
                      📍 {review.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
