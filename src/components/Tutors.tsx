'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Globe, MessageSquare } from 'lucide-react';
import { TutorData } from '@/data/db';
import Image from 'next/image';

export default function Tutors({ data }: { data: TutorData[] }) {
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all');

  const filteredTutors = data.filter(tutor => {
    if (filter === 'all') return true;
    return tutor.gender === filter;
  });

  return (
    <section id="tutors" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Faculty</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Meet Our Certified Tutors
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            All our instructors are experienced, certified Native Arabic speakers or English/Urdu bilingual speakers with deep knowledge of Tajweed and Islamic pedagogy.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-12">
          {[
            { id: 'all', label: 'All Tutors' },
            { id: 'male', label: 'Male Tutors' },
            { id: 'female', label: 'Female Tutors' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === btn.id
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Faculty Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredTutors.map((tutor) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={tutor.id}
                className="glass rounded-3xl border-card-border overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group"
              >
                {/* Photo container */}
                <div className="relative h-64 w-full bg-foreground/5 overflow-hidden">
                  <Image
                    src={tutor.photo}
                    alt={tutor.name}
                    width={300}
                    height={256}
                    loading="lazy"
                    className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-foreground border border-card-border">
                    {tutor.gender}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {tutor.name}
                    </h3>
                    <div className="flex items-center space-x-1.5 mt-2 text-xs text-primary font-semibold">
                      <Award className="h-4 w-4 shrink-0" />
                      <span>{tutor.experience} Experience</span>
                    </div>

                    <div className="h-px bg-card-border my-4" />

                    <div className="space-y-2.5">
                      <div className="flex items-center space-x-2 text-xs text-foreground/80">
                        <Globe className="h-4 w-4 text-muted-text shrink-0" />
                        <span>{tutor.languages.join(', ')}</span>
                      </div>
                      <div className="flex items-start space-x-2 text-xs text-foreground/80">
                        <MessageSquare className="h-4 w-4 text-muted-text shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          <strong className="text-foreground">Focus:</strong> {tutor.specialization}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-2">
                    <a
                      href="/book-free-trial"
                      className="flex items-center justify-center w-full py-2.5 rounded-full border border-primary text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Book Class with Tutor
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
