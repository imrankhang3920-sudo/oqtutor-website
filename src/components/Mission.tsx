'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, Award, Users, BookOpen, Globe, Laptop 
} from 'lucide-react';
import { MissionData } from '@/data/db';
import Image from 'next/image';

export default function Mission({ data }: { data: MissionData }) {
  const benefits = [
    {
      title: "Certified Male and Female Quran Teachers",
      description: "Teachers with authentic Islamic knowledge and experience.",
      icon: Award,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    },
    {
      title: "One-on-One Online Quran Classes",
      description: "Personal attention for kids, adults, and beginners.",
      icon: Users,
      color: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      title: "Complete Quran Learning Programs",
      description: "Including Quran Reading, Tajweed, Noorani Qaida, Hifz, and Islamic Studies.",
      icon: BookOpen,
      color: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      title: "Flexible Quran Classes Worldwide",
      description: "Convenient schedules for students in different countries and time zones.",
      icon: Globe,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Interactive Online Learning Experience",
      description: "Virtual classrooms with progress tracking and regular feedback.",
      icon: Laptop,
      color: "bg-rose-500/10 text-rose-600 border-rose-500/20"
    }
  ];

  return (
    <section id="mission" className="py-20 md:py-28 relative overflow-hidden bg-background">
      {/* Decorative background vectors */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: OUR MISSION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
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

        {/* SECTION 2: WHY CHOOSE OQTUTOR */}
        <div className="border-t border-card-border/60 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 border border-secondary/20 rounded-full px-4.5 py-1.5 inline-block">
              Academy Benefits
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Why Choose OQTutor Online Quran Academy?
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-4 text-sm sm:text-base text-muted-text font-normal">
              We stand out by delivering custom structured class packages, native bilingual scholars, and interactive learning tools.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-start relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Floating Icon box */}
                  <div className={`p-4 rounded-2xl border ${benefit.color} mb-6 shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
