'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FAQData, ContactData } from '@/data/db';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQPageClient({
  initialFaqs,
  contactData
}: {
  initialFaqs: FAQData[];
  contactData: ContactData;
}) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'classes' | 'tutors' | 'pricing'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'classes', label: 'Classes & Timings' },
    { id: 'tutors', label: 'Tutors & Faculty' },
    { id: 'pricing', label: 'Fees & Pricing' },
  ];

  const filteredFaqs = initialFaqs.filter(faq => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oqtutor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": "https://oqtutor.com/faq"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="flex-grow bg-background">
        
        {/* Hero Banner */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Got Questions?
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Frequently Asked Questions
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              Find instant answers regarding study hours, assigned teachers, family discount programs, trial bookings, and refund policies.
            </p>
          </div>
        </section>

        {/* Categories & Accordions */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            
            {/* Category selection */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id as any);
                    setOpenFaqId(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-4 mb-20">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`glass rounded-2xl border transition-all duration-300 ${
                      isOpen ? 'border-primary bg-primary/[0.01]' : 'border-card-border hover:border-foreground/20'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left text-foreground focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-bold flex items-center space-x-3 pr-4">
                        <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-text shrink-0 transition-transform duration-300 ${
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
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-sm text-muted-text border-t border-card-border/60 leading-relaxed font-normal">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Help/Advisory Board CTA */}
            <div className="glass p-8 rounded-3xl border-card-border text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-8 -translate-y-8" />
              <h3 className="text-lg font-bold text-foreground mb-2">Still Have Questions?</h3>
              <p className="text-xs text-muted-text max-w-lg mx-auto mb-6 leading-relaxed">
                If you cannot find the answer to your question, our support team is available 24/7. Contact us directly on WhatsApp or book a free trial class to experience the platform first-hand.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  <span>Book Free Trial</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={contactData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all w-full sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer data={contactData} />
    </>
  );
}
