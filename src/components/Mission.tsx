'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { MissionData } from '@/data/db';
import Image from 'next/image';

export default function Mission({ data }: { data: MissionData }) {
  return (
    <section id="mission" className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Decorative background vectors */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* OUR MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Block (Left on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
          >
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
              <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                <Image
                  src={data?.image || '/mission-slide.png'}
                  alt="Best Online Quran Classes for Kids Worldwide"
                  width={450}
                  height={380}
                  className="w-full rounded-2xl object-cover h-[380px] shadow-inner"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Block (Right on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 mb-6">
              <Compass className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Our Mission
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
              Our Mission: Providing the Best Online Quran Classes for Kids Worldwide
            </h2>
            
            <p className="mt-3 text-sm sm:text-base font-semibold text-secondary leading-relaxed">
              Learn the Holy Quran Online with Certified Quran Teachers Through Personalized One-on-One Classes
            </p>
            
            <div className="h-1 w-20 bg-primary mt-4 mb-6 rounded-full" />

            <div className="space-y-4 text-sm sm:text-base text-muted-text leading-relaxed font-normal">
              <p>
                Our mission is to make authentic Quran education accessible, engaging, and spiritually enriching for Muslims worldwide. We help children, adults, and new learners learn Quran reading, Tajweed, Noorani Qaida, Hifz (Quran memorization), and Islamic Studies through high-quality <strong className="text-foreground font-semibold">online Quran classes</strong>.
              </p>
              <p>
                At OQTutor, we are committed to providing personalized one-on-one Quran lessons with qualified male and female <strong className="text-foreground font-semibold">Quran teachers</strong>. Our experienced tutors focus on proper Quran recitation, Tajweed rules, and Islamic values while creating a comfortable and interactive learning environment for every student.
              </p>
              <p>
                Every Quran lesson is designed according to the student's learning level, goals, and schedule. Whether a student wants to start Quran learning from Noorani Qaida, improve Quran pronunciation, master <strong className="text-foreground font-semibold">Quran with Tajweed</strong>, memorize the Holy Quran (<strong className="text-foreground font-semibold">Hifz Quran classes</strong>), or strengthen Islamic knowledge, our <strong className="text-foreground font-semibold">online Quran academy</strong> provides a flexible and effective learning experience.
              </p>
              <p>
                Our goal is to help students worldwide <strong className="text-foreground font-semibold">learn Quran online</strong> and build a strong and lifelong connection with the Book of Allah through authentic Islamic teachings and modern online learning methods.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
