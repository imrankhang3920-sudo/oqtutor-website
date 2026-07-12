'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TestimonialData } from '@/data/db';

export default function Testimonials({ data }: { data: TestimonialData[] }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } },
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Success Stories</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            What Parents & Students Say
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            Join thousands of satisfied students worldwide who have successfully learned the Holy Quran with correct Tajweed under our guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {data.map((review) => {
            return (
              <motion.div
                key={review.id}
                variants={cardVariants}
                className="glass rounded-3xl border-card-border p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 relative flex flex-col justify-between group"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-foreground/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  <Quote className="h-12 w-12 rotate-180" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4.5 w-4.5 ${
                          i < review.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-foreground/10'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed italic mb-8 relative z-10">
                    "{review.text}"
                  </p>
                </div>

                <div className="border-t border-card-border pt-6 mt-auto">
                  <h4 className="font-bold text-foreground">{review.name}</h4>
                  <div className="flex items-center justify-between text-xs text-muted-text mt-1.5">
                    <span>{review.relation}</span>
                    <span className="bg-foreground/5 px-2.5 py-0.5 rounded-full border border-card-border text-[10px] tracking-wide font-medium">
                      {review.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
