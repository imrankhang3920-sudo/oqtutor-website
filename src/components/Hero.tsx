'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { HeroData } from '@/data/db';

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section id="home" className="relative min-h-0 md:min-h-[85vh] flex items-center justify-center overflow-hidden pt-6 pb-8 md:py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 scale-105"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-background/90 md:bg-gradient-to-r md:from-background md:via-background/80 md:to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-3 md:mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              1-on-1 Personalized Classes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-foreground"
          >
            {data.title.split(' ').map((word, idx) => (
              <span key={idx}>
                {word === 'Male' || word === 'Female' || word === 'Expert' || word === 'Tutors' ? (
                  <span className="text-primary">{word} </span>
                ) : word === 'Quran' ? (
                  <span className="text-secondary">{word} </span>
                ) : (
                  `${word} `
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 md:mt-6 text-base sm:text-xl text-muted-text max-w-2xl font-normal leading-relaxed"
          >
            {data.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
          >
            <a
              href={data.ctaLink}
              className="flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer text-sm sm:text-base"
            >
              <span>{data.ctaText}</span>
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href={`https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full glass border-card-border hover:bg-foreground/5 text-foreground font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer text-sm sm:text-base"
            >
              <MessageCircle className="h-5 w-5 text-emerald-500 fill-emerald-500/20" />
              <span>{data.whatsappText}</span>
            </a>
          </motion.div>
        </div>

        {/* Decorative Graphic Side / Card */}
        <div className="hidden lg:col-span-5 lg:flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-3xl border-card-border shadow-2xl relative max-w-sm w-full overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:pointer-events-none"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <h3 className="text-xl font-bold mb-4 text-foreground">Why Study with Us?</h3>
            <ul className="space-y-4">
              {[
                { title: 'Learn from home', desc: 'No commute, study in total safety.' },
                { title: 'Interactive Portal', desc: 'Virtual classroom with video and audio.' },
                { title: 'Customized Plan', desc: 'Progress trackers and custom syllabus.' },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1 flex items-center justify-center h-5 w-5 rounded-full bg-secondary/15 text-secondary text-xs font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-text mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-card-border flex items-center justify-between">
              <span className="text-xs text-muted-text">Satisfaction Guaranteed</span>
              <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                100% Free Trial
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
