'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  tag?: string;
}

interface SingaporeFaqAccordionProps {
  faqs: FAQItem[];
}

export default function SingaporeFaqAccordion({ faqs }: SingaporeFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.id || index}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-card-bg/90 border-primary/40 shadow-lg shadow-primary/5 dark:bg-slate-900/90'
                : 'bg-card-bg/50 border-card-border hover:border-card-border/80 hover:bg-card-bg/70 dark:bg-slate-900/40'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-btn-${index}`}
              className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`mt-0.5 p-1.5 rounded-lg shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-primary/15 text-primary'
                      : 'bg-foreground/5 text-muted-text'
                  }`}
                >
                  <HelpCircle className="h-4 w-4" />
                </div>
                <div>
                  {faq.tag && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-1">
                      {faq.tag}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug">
                    {faq.question}
                  </h3>
                </div>
              </div>

              <div
                className={`p-1.5 rounded-full shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-primary/15 text-primary' : 'text-muted-text'
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-muted-text leading-relaxed border-t border-card-border/40 space-y-2">
                    <p>{faq.answer}</p>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-medium pt-1">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      <span>Verified for Singapore students (SGT timings)</span>
                    </div>
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
