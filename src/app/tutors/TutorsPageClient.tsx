'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { TutorData, ContactData } from '@/data/db';
import { Award, Globe, MessageSquare, ShieldCheck, BarChart2, Smile, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TutorsPageClient({ 
  initialTutors,
  contactData 
}: { 
  initialTutors: TutorData[];
  contactData: ContactData;
}) {
  const [filter, setFilter] = useState<'all' | 'male' | 'female'>('all');

  const filteredTutors = initialTutors.filter(tutor => {
    if (filter === 'all') return true;
    return tutor.gender === filter;
  });

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
        "name": "Tutors",
        "item": "https://oqtutor.com/tutors"
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
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Qualified Scholars
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Our Expert Male & Female Tutors
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              We employ only highly qualified, certified Al-Azhar graduates and native Arabic scholars. Choose the tutor that matches your preferences and study in a private, one-on-one session.
            </p>
          </div>
        </section>

        {/* Filter & Tutors list */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {[
                { id: 'all', label: 'All Tutors' },
                { id: 'male', label: 'Male Tutors' },
                { id: 'female', label: 'Female Tutors' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id as any)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                    filter === btn.id
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Tutors Grid */}
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
            >
              <AnimatePresence mode="popLayout">
                {filteredTutors.map((tutor) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={tutor.id}
                    className="glass rounded-3xl border-card-border overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="relative h-64 w-full bg-foreground/5 overflow-hidden">
                      <img
                        src={tutor.photo}
                        alt={tutor.name}
                        className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full text-foreground border border-card-border">
                        {tutor.gender}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {tutor.name}
                        </h3>
                        <div className="flex items-center space-x-1.5 mt-2 text-xs text-primary font-semibold">
                          <Award className="h-4 w-4 shrink-0" />
                          <span>{tutor.experience} Experience</span>
                        </div>

                        <div className="h-px bg-card-border my-4" />

                        <div className="space-y-2.5">
                          <div className="flex items-center space-x-2 text-xs text-foreground/80">
                            <Globe className="h-4 w-4 text-muted-text shrink-0" />
                            <span>{tutor.languages.join(', ')}</span>
                          </div>
                          <div className="flex items-start space-x-2 text-xs text-foreground/80">
                            <MessageSquare className="h-4 w-4 text-muted-text shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                              <strong className="text-foreground">Focus:</strong> {tutor.specialization}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-2">
                        <Link
                          href="/contact"
                          className="flex items-center justify-center w-full py-2.5 rounded-full border border-primary text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          Book Trial Lesson
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Methodology & Pedaogogy Cards */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground">Our Teaching Methodology</h2>
              <p className="text-xs text-muted-text mt-1.5">How we deliver effective virtual learning outcomes.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              
              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3.5 rounded-2xl bg-secondary/15 text-secondary w-fit mb-4">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">100% Certified Native Speakers</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Our tutors are selected from recognized Islamic universities, holding Ijazah certifications and degrees in Islamic Studies to ensure accurate, authentic Quran recitation.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">Detailed Progress Tracking</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Parents receive weekly and monthly updates detailing their child's pronunciation progress, verses memorized, attendance log, and specific areas that require practice.
                </p>
              </div>

              <div className="glass p-8 rounded-3xl border-card-border">
                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary w-fit mb-4">
                  <Smile className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-2">Child-Friendly Pedagogy</h3>
                <p className="text-xs text-muted-text leading-relaxed">
                  Our courses feature fun flashcards, reward badges, stories of prophets, and interactive games to keep children excited about their daily Quran classes.
                </p>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer data={contactData} />
    </>
  );
}
