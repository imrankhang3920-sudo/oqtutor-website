'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';

interface MidPageFormSectionProps {
  whatsappNumber?: string;
  className?: string;
}

export default function MidPageFormSection({
  whatsappNumber = '+923478704442',
  className = '',
}: MidPageFormSectionProps) {
  const cleanPhone = whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent('Assalamu Alaikum, I would like to book a 3-Day Free Trial for Quran classes.')}`;

  const scrollToTrial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('book-trial');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = '#book-trial';
    }
  };

  return (
    <section className={`py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-primary/[0.04] via-background to-background ${className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="relative glass rounded-3xl border border-primary/25 p-8 sm:p-12 shadow-2xl overflow-hidden bg-card/60 backdrop-blur-xl text-center"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="h-3.5 w-3.5 text-secondary" />
            <span>Fast 60-Second Setup</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            Ready to Start Your 3-Day Free Trial?
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-base sm:text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
            Takes under 60 seconds • No credit card required • Choose Male or Female Tutor
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <a
              href="#book-trial"
              onClick={scrollToTrial}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Book My 3-Day Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-card-border glass hover:bg-foreground/5 text-foreground font-semibold text-base transition-all duration-300 hover:border-emerald-500/50"
            >
              <MessageCircle className="h-5 w-5 text-emerald-500 fill-emerald-500/20" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 pt-6 border-t border-card-border/60 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-muted-text font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>No credit card required</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-secondary" />
              <span>30-minute 1-on-1 classes</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-primary" />
              <span>Male &amp; Female Tutors Available</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
              <span>Cancel or pause anytime</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
