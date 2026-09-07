'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Sparkles, Check, ArrowRight, Clock, Star, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedCourses() {
  const topCourses = [
    {
      id: 'course-qaida',
      title: 'Noorani Qaida for Kids',
      slug: 'noorani-qaida',
      level: 'Beginner • Ages 4+',
      description: 'The foundational course for young beginners. Master Arabic alphabet pronunciation, phonics, and basic reading skills.',
      image: '/noorani-qaida.jpg',
      points: [
        'Correct letter articulation (Makharij)',
        'Connecting letters into full words',
        'Child-friendly interactive digital flashcards',
        'Patient female & male tutors'
      ],
      isPopular: false,
    },
    {
      id: 'course-tajweed',
      title: 'Quran with Tajweed',
      slug: 'tajweed',
      level: 'All Ages • Beginner to Advanced',
      description: 'Learn to recite the Holy Quran fluently and melodiously according to authentic rules of Tajweed with certified scholars.',
      image: '/quran-reading.jpg',
      points: [
        'Complete Tajweed rules (Madd, Ghunnah, Ikhfa)',
        'Correcting common recitation mistakes',
        'Proper stop & start (Waqf) rules',
        'Live 1-on-1 recitation correction'
      ],
      isPopular: true,
    },
    {
      id: 'course-hifz',
      title: 'Hifz-ul-Quran (Memorization)',
      slug: 'hifz',
      level: 'Intermediate to Advanced',
      description: 'A structured, personalized Quran memorization program designed with daily revision (Sabaq, Sabaqi, Manzil) techniques.',
      image: '/hifz-quran.jpg',
      points: [
        'Personalized daily memorization schedule',
        'Proven retention & revision method',
        'Short Surah or full 30 Juz Hifz track',
        'Ijazah-certified Quran Huffaz'
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="courses" className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            Core Curriculum
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Featured Quran Courses
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            Choose from our top-rated 1-on-1 courses tailored to your child&apos;s current reading level.
          </p>
        </div>

        {/* 3 Courses Grid with Middle Highlighted */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {topCourses.map((course, idx) => {
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl border transition-all duration-300 ${
                  course.isPopular
                    ? 'border-primary bg-primary/[0.03] shadow-2xl shadow-primary/15 lg:-translate-y-2.5 z-10'
                    : 'border-card-border bg-card/40 hover:border-primary/30 shadow-lg'
                } overflow-hidden group`}
              >
                {/* Most Popular Top Banner */}
                {course.isPopular && (
                  <div className="w-full bg-primary py-1.5 text-center text-[11px] font-extrabold text-white tracking-widest uppercase shadow-sm">
                    ⭐ Most Popular Course
                  </div>
                )}

                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  {/* Badge & Level */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="text-xs text-muted-text flex items-center gap-1 font-medium">
                      <Clock className="h-3.5 w-3.5" />
                      <span>30 min / class</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-muted-text leading-relaxed mb-6 font-normal">
                    {course.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-card-border/60 mb-8">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">What you&apos;ll learn:</span>
                    {course.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 space-y-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                        course.isPopular
                          ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-primary/35'
                          : 'border border-card-border hover:border-primary hover:text-primary text-foreground bg-foreground/[0.02]'
                      }`}
                    >
                      <span>Course Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                      href="/book-free-trial"
                      className="block text-center text-xs font-semibold text-muted-text hover:text-primary transition-colors"
                    >
                      Or Book Free Trial &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Courses Button */}
        <div className="mt-14 text-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-card-border glass hover:bg-foreground/5 text-foreground font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <span>View All 6 Courses</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
