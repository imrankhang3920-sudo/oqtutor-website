'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles } from 'lucide-react';
import TrialModal from '@/components/TrialModal';

export default function StickyFormButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Show after 2.5 seconds delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              aria-label="Book Free Trial Modal"
              className="group relative flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-xs sm:text-sm shadow-2xl shadow-primary/40 hover:shadow-primary/60 border border-white/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
            >
              {/* Pulse glow effect */}
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-secondary" />
              </span>

              <Calendar className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
              <span className="tracking-tight">Book Free Trial</span>
              <Sparkles className="h-3.5 w-3.5 text-secondary shrink-0" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <TrialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Book Your Free Quran Trial"
        subtitle="Match with certified tutors today. No credit card required."
      />
    </>
  );
}
