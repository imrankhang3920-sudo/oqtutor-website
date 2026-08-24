'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const usaFaqList: FAQItem[] = [
  {
    id: "usa-faq-1",
    question: "What are the best online Quran classes in the USA?",
    answer: "The best classes provide qualified teachers, private one-to-one lessons, structured Tajweed rules, flexible scheduling across US time zones, age-appropriate material for kids, and transparent progress updates. Look for an academy that assesses the student's entry level and offers a trial class so you can evaluate the teacher's patience and communication before committing."
  },
  {
    id: "usa-faq-2",
    question: "How do I choose an online Quran tutor for my child?",
    answer: "Focus on three factors: verified teaching qualifications, experience with children, and patience during pronunciation correction. Ask if lessons are truly one-on-one, whether classes fit your local time zone, and if female teachers are available if preferred. Booking a placement trial allows you to observe how your child interacts with the tutor in real time."
  },
  {
    id: "usa-faq-3",
    question: "Are online Quran classes suitable for beginners?",
    answer: "Yes. Beginners of any age start with the Noorani Qaida curriculum, which introduces Arabic alphabet recognition, letter shapes, short vowels (Harakat), and articulation points (Makharij). With one-to-one instruction, tutors guide learners step by step from individual sounds to reading words and full verses without feeling rushed."
  },
  {
    id: "usa-faq-4",
    question: "Can children learn Quran online?",
    answer: "Children learn effectively online through interactive digital classrooms. Sessions are kept to 30 minutes to match young attention spans, combining digital Mushaf tools, screen sharing, and gentle encouragement. Tutors focus on building accurate recitation habits and a positive relationship with the Quran from the comfort of home."
  },
  {
    id: "usa-faq-5",
    question: "Can adults learn Quran online?",
    answer: "Yes. Adult courses are designed around work and family commitments with early morning, evening, and weekend slots. Whether you are learning Arabic letters from scratch, refining Tajweed rules, memorizing specific Surahs, or studying Tafseer, lessons progress at your individual pace in complete privacy with male or female scholars."
  },
  {
    id: "usa-faq-6",
    question: "Do you offer one-to-one Quran lessons?",
    answer: "Every standard class at OQTutor is conducted live one-to-one between a single student and teacher. This private format ensures 100% focused attention, immediate error correction, and a customized pace without the distractions or waiting times common in group environments."
  },
  {
    id: "usa-faq-7",
    question: "Can I choose a female Quran teacher?",
    answer: "Yes. We have qualified female Quran teachers available for sisters and young children. Our female instructors hold verified Islamic credentials, are fluent in English, and provide a nurturing, private setting for learning Noorani Qaida, Tajweed, Quran reading, and Hifz."
  },
  {
    id: "usa-faq-8",
    question: "Do you offer Quran classes with Tajweed?",
    answer: "Yes. Our Tajweed course covers articulation points (Makharij), Ghunnah, Ikhfa, Qalqalah, Madd, and stopping signs (Waqf). Tutors explain the rules clearly and listen closely during live recitation to correct pronunciation mistakes immediately as you read from the Mushaf."
  },
  {
    id: "usa-faq-9",
    question: "Do you offer Hifz classes?",
    answer: "Yes. Our online Hifz program pairs students with certified Huffaz. Lessons follow a systematic daily cycle: memorizing new verses (Sabaq), revising recent pages (Sabqi), and reinforcing long-term retention (Manzil). Study plans are customized to match each student's capacity and schedule."
  },
  {
    id: "usa-faq-10",
    question: "What time are Quran lessons available?",
    answer: "Classes are available 24 hours a day, 7 days a week, accommodating Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) time zones. Families can schedule lessons before school, in the afternoon, during late evenings, or across weekends, with the ability to adjust times as routines change."
  },
  {
    id: "usa-faq-11",
    question: "How much do online Quran classes cost?",
    answer: "Tuition is structured into straightforward monthly plans based on weekly class frequency: $30 per month for 3 classes per week, $40 per month for 5 classes per week, and $50 per month for daily (7 classes/week) sessions. Each lesson is 30 minutes of private one-to-one instruction with no hidden fees or contracts."
  },
  {
    id: "usa-faq-12",
    question: "Is there a trial class?",
    answer: "Yes. OQTutor provides a free trial class with no credit card or financial commitment required. During the session, the teacher assesses the student's current reading level, introduces the online portal, and outlines a personalized learning plan tailored to your goals."
  },
  {
    id: "usa-faq-13",
    question: "How do online Quran classes work?",
    answer: "After booking a trial, you connect with your assigned tutor via video conference (such as Zoom) using a laptop, tablet, or computer. Both student and teacher view the digital Quran or Qaida together on screen. The tutor listens to recitation, corrects pronunciation in real time, and sends lesson summaries after class."
  }
];

export default function USAFaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="usa-faq" className="py-16 md:py-24 relative overflow-hidden bg-background border-t border-card-border/40">
      {/* Background radial spotlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block mb-4">
            AEO Questions &amp; Answers
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Asked Questions About Online Quran Classes in the USA
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-muted-text">
            Direct, factual answers to common questions about schedules, tutors, curriculum, pricing, and trial lessons for American Muslim families.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-12">
          {usaFaqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass rounded-2xl border border-card-border overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-foreground hover:text-primary transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-text leading-relaxed border-t border-card-border/40 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help Callout */}
        <div className="glass p-6 sm:p-8 rounded-2xl border border-card-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-foreground">Have a specific scheduling or syllabus question?</h3>
            <p className="text-xs text-muted-text mt-1">Our academic advisors are available to assist your family anytime.</p>
          </div>
          <Link
            href="/book-free-trial"
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md transition-all shrink-0"
          >
            <span>Book Free Trial</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
