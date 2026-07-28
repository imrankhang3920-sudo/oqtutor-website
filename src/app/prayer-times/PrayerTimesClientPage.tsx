'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Clock, MapPin, CalendarDays } from 'lucide-react';
import PrayerTimesWidget from '@/components/PrayerTimesWidget';
import { ContactData } from '@/data/db';

export default function PrayerTimesClientPage({
  contactData
}: {
  contactData: ContactData;
}) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const faqs = [
    {
      question: "How are Islamic prayer times calculated?",
      answer: "Islamic prayer times are calculated based on the position of the sun in the sky relative to your geographical location. Fajr and Isha are determined by the sun's angle below the horizon (twilight), Dhuhr starts when the sun reaches its zenith, Asr is determined by shadow length, and Maghrib begins immediately after sunset."
    },
    {
      question: "Why do prayer timings differ by location and method?",
      answer: "Timings differ depending on your exact latitude and longitude because the sun's position changes. Additionally, different regions use varying astronomical conventions (angles) to determine when Fajr and Isha start, which is why choosing the correct calculation method for your region is important."
    },
    {
      question: "What do the different calculation methods mean?",
      answer: "Calculation methods represent standard twilight angles adopted by major Islamic authorities. For instance, the University of Islamic Sciences in Karachi uses an 18-degree angle, while the Islamic Society of North America (ISNA) uses 15 degrees. Selecting the method recommended for your country ensures local accuracy."
    },
    {
      question: "How is the Hijri date determined?",
      answer: "The Hijri date displayed is calculated astronomically based on the lunar calendar cycle. Since Islamic months depend on the actual sighting of the crescent moon, the calendar date may sometimes vary by one or two days compared to local physical sightings in your area."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="flex-grow bg-background text-foreground">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. HERO / INTRO SECTION */}
      <section className="relative py-16 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
        {/* Decorative background blur */}
        <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block mb-4">
            Daily Namaz Timings
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Accurate Prayer Times Worldwide
          </h1>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed font-normal">
            Find precise daily timings for Fajr, Dhuhr, Asr, Maghrib, and Isha prayers anywhere in the world. Our tool automatically detects your local timezone using your coordinates, or you can search manually by city and country to choose your preferred calculation authority.
          </p>
        </div>
      </section>

      {/* 2. WIDGET DISPLAY SECTION */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="w-full max-w-md">
            <PrayerTimesWidget />
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION SECTION */}
      <section className="py-16 border-t border-card-border bg-foreground/[0.005]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center justify-center gap-1.5">
              <HelpCircle className="h-4 w-4" />
              <span>Calculation & Rules</span>
            </h2>
            <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-foreground">
              Frequently Asked Questions
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div key={idx} className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  >
                    <span className="text-sm sm:text-base font-bold pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-text/60 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-card-border/50">
                          <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}
