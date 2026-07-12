'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Users, Clock, UserCheck, Globe, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import { FeatureData } from '@/data/db';

const iconMap: Record<string, React.ComponentType<any>> = {
  Award,
  Users,
  Clock,
  UserCheck,
  Globe,
  DollarSign,
};

export default function Features({ data }: { data: FeatureData[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoplay, data.length]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
    setAutoplay(false);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
    setAutoplay(false);
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Advantages</h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Why Choose OQTutor?
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            We provide a world-class online platform dedicated to helping you or your children master Quran reading, Tajweed rules, and Islamic values from the comfort of your home.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-white border border-card-border shadow-md transition-all text-foreground hidden sm:flex cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-white border border-card-border shadow-md transition-all text-foreground hidden sm:flex cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden min-h-[320px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {data.map((feature, idx) => {
                if (idx !== activeIndex) return null;
                const IconComponent = iconMap[feature.icon] || Award;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="w-full glass p-8 sm:p-12 rounded-3xl border-card-border shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-8 -translate-y-8" />
                    
                    {/* Left Column (Icon) */}
                    <div className="md:col-span-4 flex justify-center">
                      <div className="p-6 sm:p-8 rounded-2xl bg-primary/10 text-primary border border-primary/20 relative shadow-inner">
                        <IconComponent className="h-12 w-12 sm:h-16 sm:w-16" />
                      </div>
                    </div>

                    {/* Right Column (Content) */}
                    <div className="md:col-span-8 text-center md:text-left">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                        {feature.description}
                      </p>
                      
                      <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                          Premium Advantage
                        </span>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                          100% Guaranteed
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center space-x-2 mt-8">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex 
                    ? 'w-8 bg-primary shadow-sm shadow-primary/30' 
                    : 'w-2.5 bg-foreground/20 hover:bg-foreground/45'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
