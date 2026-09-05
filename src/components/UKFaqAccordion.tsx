'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface UKFAQItem {
  id: string;
  question: string;
  directAnswer: string;
  explanation: string;
}

export const ukFaqData: UKFAQItem[] = [
  {
    id: "uk-faq-1",
    question: "How do online Quran classes work for students in the UK?",
    directAnswer: "Online Quran classes are live, one-to-one video lessons conducted through an interactive digital classroom on your computer, laptop, or tablet.",
    explanation: "After booking a free trial, you are matched with a qualified tutor who shares the digital Quran or Noorani Qaida on screen. The tutor listens to the student recite in real time, corrects pronunciation and Tajweed immediately, and provides regular progress updates to parents."
  },
  {
    id: "uk-faq-2",
    question: "Can children in the UK learn Quran online effectively?",
    directAnswer: "Yes, children learn very effectively online through 30-minute private lessons designed specifically for young attention spans.",
    explanation: "Tutors use child-friendly visual materials, positive encouragement, and structured lesson plans. One-to-one attention ensures children remain engaged and supported throughout each lesson without the distractions or peer pressure of large physical classes."
  },
  {
    id: "uk-faq-3",
    question: "Are online Quran classes available for adults in the UK?",
    directAnswer: "Yes, OQTutor offers private, one-to-one Quran classes tailored specifically for UK adult learners.",
    explanation: "Lessons fit around full-time work, university timetables, and family commitments with early morning, evening, and weekend slots in GMT/BST. Adults can start from the Arabic alphabet, refine Tajweed rules, or study Quran translation and Tafseer at their own pace in a respectful, judgment-free environment."
  },
  {
    id: "uk-faq-4",
    question: "Can I choose a female Quran teacher for sisters or daughters?",
    directAnswer: "Yes, qualified female Quran teachers (Alimas and Qariahs) are available for sisters and young children.",
    explanation: "Our female tutors provide a comfortable, private, and supportive learning environment for Noorani Qaida, Tajweed, Quran reading, and Hifz. You can select your tutor gender preference during registration."
  },
  {
    id: "uk-faq-5",
    question: "Can absolute beginners join without prior Arabic knowledge?",
    directAnswer: "Yes, beginners of all ages can start with zero prior knowledge of the Arabic language.",
    explanation: "Beginners start with the Noorani Qaida course, which systematically teaches Arabic letter recognition, letter joining, short vowels (Harakat), and correct articulation points (Makharij) before transitioning to reading full Quranic verses."
  },
  {
    id: "uk-faq-6",
    question: "Do you teach Quran with Tajweed rules?",
    directAnswer: "Yes, Tajweed rules are integrated into recitation lessons and also available as a dedicated structured course.",
    explanation: "Tutors teach essential rules including Makharij (letter articulation points), Ghunnah (nasalisation), Ikhfa, Idghaam, Qalqalah, Madd elongation, and Waqf stopping signs, ensuring accurate and melodious recitation."
  },
  {
    id: "uk-faq-7",
    question: "Are classes available across all UK cities and regions?",
    directAnswer: "Yes, OQTutor provides online Quran classes to students across England, Scotland, Wales, and Northern Ireland.",
    explanation: "Because all classes are 100% online, students from London, Birmingham, Manchester, Leicester, Bradford, Luton, Glasgow, Edinburgh, Cardiff, Belfast, and any other UK town can connect with qualified tutors without commuting in traffic."
  },
  {
    id: "uk-faq-8",
    question: "How flexible is scheduling around UK school and work timetables?",
    directAnswer: "Class schedules are completely flexible and operate directly in UK local time (GMT and BST).",
    explanation: "You can schedule classes after school (4:00 PM to 8:00 PM), on weekends, or during evenings. If family plans change or during UK school half-terms and holidays, you can easily reschedule or pause sessions without penalty."
  },
  {
    id: "uk-faq-9",
    question: "How often are classes held and how long is each lesson?",
    directAnswer: "Each lesson is 30 minutes long, with plans available for 3, 5, or 7 sessions per week.",
    explanation: "The 30-minute duration optimizes focus and retention for both children and adult learners. You can select the weekly frequency that best matches your learning goals, budget, and family routine."
  },
  {
    id: "uk-faq-10",
    question: "Is there a free trial class before enrolling in a paid plan?",
    directAnswer: "Yes, OQTutor offers a free trial class with no upfront payment or long-term commitment required.",
    explanation: "The trial lesson allows you to experience our one-to-one teaching style, assess the student's current level, meet your assigned tutor, and see how our online classroom works before selecting a monthly plan."
  }
];

export default function UKFaqAccordion({ items }: { items?: UKFAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const faqList = items && items.length > 0 ? items : ukFaqData;

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4 mb-12">
      {faqList.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="glass rounded-2xl border border-card-border overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-md bg-white/70 dark:bg-slate-900/50"
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
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-text leading-relaxed border-t border-card-border/40 font-normal space-y-2">
                    <p className="font-semibold text-foreground/90">
                      {faq.directAnswer}
                    </p>
                    <p>
                      {faq.explanation}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
