'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import { AboutData } from '@/data/db';
import Image from 'next/image';
import Link from 'next/link';

export default function About({ data, mode = 'home' }: { data: AboutData; mode?: 'home' | 'about' }) {
  return (
    <section id="about" className="pt-10 pb-16 md:py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              {mode === 'about'
                ? "Our Approach to Quranic Education"
                : "Why Families Globally Choose OQTutor for Vetted 1-on-1 Quran Classes"}
            </h2>
            <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

            <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
              {mode === 'about' ? (
                <>
                  <p>
                    OQTutor is dedicated to offering personalized, one-to-one tutoring for students of all ages. We cater to children, adults, and new Muslims worldwide, with a strong presence in the United States, the UK, Europe, and beyond. Our sessions are designed to fit the unique needs of each learner, utilizing tailored lesson plans and qualified male and female tutors.
                  </p>
                  <p>
                    Our teachers specialize in foundational lessons like <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">Noorani Qaida</Link>, structured Quran reading, <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">Quran with Tajweed</Link>, <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">Hifz Quran</Link> (Quran Memorization), and Islamic history. Every lesson is adjusted to the student's age, current learning level, and personal goals, creating a focused and supportive learning environment.
                  </p>
                  <p>
                    Our teaching philosophy is built on creating a supportive, distraction-free environment. By offering flexible schedules and custom plans, we make it easy for families to fit religious education into their daily routines.
                  </p>
                  <p>
                    Whether you are a parent seeking patient guidance for your children, or an adult learner looking to refine your pronunciation, our team is committed to helping you reach your learning goals step-by-step.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    We connect learners across the United States, United Kingdom, Canada, Australia, and worldwide with highly qualified Quran teachers. Our platform is designed for students of all ages and backgrounds, whether you are a parent seeking structured guidance for your children or an adult looking to refine your recitation style.
                  </p>
                  <p>
                    Classes are delivered 1-on-1 inside a modern, interactive virtual classroom that features digital learning materials and live feedback. Every scholar in our network holds verified credentials and is trained in patient, encouraging teaching methods, ensuring that students advance at their own pace with absolute confidence.
                  </p>
                  <p>
                    With 24/7 scheduling, you can easily book sessions around school, work, and other commitments. OQTutor provides a safe, structured environment focused on building strong pronunciation skills, consistent revision, and a deep appreciation for the text, backed by progress updates and a satisfaction guarantee.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="p-4 bg-foreground/[0.02] border border-card-border rounded-2xl">
                <span className="block text-2xl font-bold text-primary">100%</span>
                <span className="text-xs text-muted-text mt-1 block">Satisfaction Rate</span>
              </div>
              <div className="p-4 bg-foreground/[0.02] border border-card-border rounded-2xl">
                <span className="block text-2xl font-bold text-secondary">24/7</span>
                <span className="text-xs text-muted-text mt-1 block">Class Scheduling</span>
              </div>
            </div>

            {/* Call To Action Block */}
            <div className="mt-10 p-6 glass border border-primary/20 rounded-3xl bg-primary/5 w-full space-y-3">
              <h3 className="text-lg font-bold text-foreground">
                {mode === 'about'
                  ? "Start Your Learning Journey Today"
                  : "Start Your Quran Learning Journey Today"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                {mode === 'about'
                  ? "Join families around the world who trust OQTutor for structured, patient guidance. Book your Free Trial Class today to begin learning with our dedicated tutors through private one-to-one lessons."
                  : "Join families around the world who trust OQTutor for professional Online Quran Classes. Book your Free Trial Class today and learn from experienced Quran tutors through personalized one-to-one lessons."}
              </p>
              <div className="pt-2">
                <Link
                  href="/book-free-trial"
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 text-xs font-semibold rounded-full bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-xl transition-all duration-300"
                >
                  <span>Book Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative max-w-md w-full">
              {/* Outer decorative borders */}
              <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                <Image
                  src={data?.image || '/about-boy.png'}
                  alt="About OQTutor – Trusted Online Quran Academy for Kids & Adults Worldwide"
                  width={450}
                  height={350}
                  loading="lazy"
                  className="w-full rounded-2xl object-contain h-[350px]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
