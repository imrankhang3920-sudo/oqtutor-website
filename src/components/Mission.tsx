'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { MissionData } from '@/data/db';
import Image from 'next/image';

export default function Mission({ data }: { data: MissionData }) {
  return (
    <section id="mission" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Image Content (Left on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative max-w-md w-full">
              {/* Outer decorative borders */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl -translate-x-4 translate-y-4 -z-10" />
              <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative">
                <Image
                  src={data.image}
                  alt="Our Quran Tutoring Mission"
                  width={450}
                  height={350}
                  loading="lazy"
                  className="w-full rounded-2xl object-cover h-[350px] shadow-inner"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content (Right on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-6">
              <Compass className="h-4 w-4 text-secondary" />
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                Our Values
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {data.title}
            </h2>
            <div className="h-1 w-20 bg-primary mt-4 mb-6 rounded-full" />

            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
              {data.content}
            </p>

            <div className="mt-8 flex flex-col space-y-3.5 w-full">
              {[
                'Certified scholar teachers holding authentic Ijazah.',
                'Interactive one-on-one virtual classroom setups.',
                'Fostering core values and character along with recitation.',
              ].map((value, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm text-foreground/80">
                  <span className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
