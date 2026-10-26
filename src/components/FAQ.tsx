'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FAQData } from '@/data/db';

export const DEFAULT_HOMEPAGE_FAQS: FAQData[] = [
  {
    id: 'faq-trial',
    question: 'How does the 3-day free trial work, and is a credit card required?',
    answer: 'You receive three 30-minute live 1-on-1 classes completely free with no credit card required. During the trial, you meet your assigned male or female tutor on Zoom or Google Meet, get an accurate reading level assessment, and experience our interactive teaching method before choosing a monthly plan.',
    category: 'classes',
  },
  {
    id: 'faq-female-tutors',
    question: 'Can I request a certified female Quran teacher for my daughter or myself?',
    answer: 'Yes. We have a dedicated team of qualified, English-speaking female Quran scholars (Qarias and Hafizas) who specialize in teaching young children, girls, and adult sisters in a comfortable, private 1-on-1 environment. You can select a female tutor directly when booking your trial.',
    category: 'tutors',
  },
  {
    id: 'faq-age',
    question: 'What age is best for kids to start online Quran classes?',
    answer: 'Most children start comfortably at ages 4 to 5 with our Noorani Qaida for Kids course. Our tutors use digital flashcards, phonics breakdowns, and interactive screen sharing to keep 30-minute sessions engaging for young learners. We also offer structured tracks for older kids, teens, and adult beginners.',
    category: 'classes',
  },
  {
    id: 'faq-cost',
    question: 'How much do 1-on-1 online Quran classes cost?',
    answer: 'Monthly plans start at $30 per month depending on how many days per week you choose to study. There are no registration fees or long-term contracts—you can adjust your schedule, switch tutors, pause, or cancel anytime.',
    category: 'pricing',
  },
  {
    id: 'faq-app',
    question: 'How are classes conducted, and do I need to install a special app?',
    answer: 'No special app is required. All classes are taught live 1-on-1 via Zoom or Google Meet with screen sharing for interactive Noorani Qaida, Tajweed mushaf, and digital whiteboards. You can join from any laptop, tablet, or smartphone.',
    category: 'classes',
  },
  {
    id: 'faq-reschedule',
    question: 'What happens if my child misses a class or we need to reschedule?',
    answer: 'We offer flexible rescheduling around your local time zone across the USA, UK, Canada, and Australia. Simply notify your tutor or our 24/7 WhatsApp support team in advance, and we will arrange a makeup class during the week.',
    category: 'classes',
  },
];

export default function FAQ({ data }: { data?: FAQData[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const displayFaqs = (data && data.length >= 6) ? data.slice(0, 6) : DEFAULT_HOMEPAGE_FAQS;
  const columnBreak = Math.ceil(displayFaqs.length / 2);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
            Questions & Answers
          </h2>
          <p className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions
          </p>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-muted-text">
            Find quick answers to common queries about timings, tutors, classes, and packages.
          </p>
        </div>

        {/* Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
          {[displayFaqs.slice(0, columnBreak), displayFaqs.slice(columnBreak)].map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass rounded-2xl border-card-border overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  id={`faq-question-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span className="text-sm sm:text-base font-bold leading-snug">{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-text/60 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center pt-2">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white text-sm font-bold text-primary transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] group"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
