'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { AboutData } from '@/data/db';

export default function About({ data }: { data: AboutData }) {
  return (
    <section id="about" className="pt-10 pb-16 md:py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

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

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {data.title}
            </h2>
            <div className="h-1 w-20 bg-secondary mt-4 mb-6 rounded-full" />

            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
              {data.content}
            </p>

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
                <img
                  src={data.image}
                  alt="About Online Quran Tutor"
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
