'use client';

import React, { useState, useEffect } from 'react';
import TrialModal from '@/components/TrialModal';

export default function ScrollTriggerForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already triggered/dismissed the scroll modal in this session
    const hasTriggered = sessionStorage.getItem('oqtutor_scroll_modal_shown');
    if (hasTriggered) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      // When scrolled >= 50% of the page
      if (scrollPosition / totalHeight >= 0.5) {
        setIsOpen(true);
        sessionStorage.setItem('oqtutor_scroll_modal_shown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <TrialModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Don't Leave Yet!"
      subtitle="Book your free Quran trial in 60 seconds — No credit card required"
    />
  );
}
