'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, MessageCircle, CreditCard, BookOpen, ArrowRight } from 'lucide-react';

export interface HelpCardItem {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
  buttonText: string;
  href: string;
  eventName?: 'trial_click' | 'whatsapp_click' | 'pricing_click' | 'blog_click' | string;
  isExternal?: boolean;
}

export interface HelpSectionProps {
  eyebrow?: string;
  title?: string;
  intro?: string;
  cards?: HelpCardItem[];
  className?: string;
  whatsappUrl?: string;
}

const defaultCards: HelpCardItem[] = [
  {
    icon: Sparkles,
    title: '3-Day Free Trial',
    text: 'Meet your tutor, get your reading level assessed and try live 1-on-1 classes. No credit card required.',
    buttonText: 'Book your free trial',
    href: '/book-free-trial',
    eventName: 'trial_click',
    isExternal: false,
  },
  {
    icon: MessageCircle,
    title: 'Chat on WhatsApp',
    text: 'Ask about courses, class times or fees and get guidance from our team.',
    buttonText: 'Message us',
    href: 'https://wa.me/923478704442',
    eventName: 'whatsapp_click',
    isExternal: true,
  },
  {
    icon: CreditCard,
    title: 'Pricing & FAQs',
    text: 'Plans from $30/month. Classes are 30-40 minutes on Zoom or Google Meet. See answers to common questions.',
    buttonText: 'View pricing',
    href: '/pricing',
    eventName: 'pricing_click',
    isExternal: false,
  },
  {
    icon: BookOpen,
    title: 'Free Learning Guides',
    text: 'Practical articles on Noorani Qaida, Tajweed, Hifz and keeping kids motivated.',
    buttonText: 'Read our guides',
    href: '/blog',
    eventName: 'blog_click',
    isExternal: false,
  },
];

export default function HelpSection({
  eyebrow = 'NOT SURE WHERE TO START?',
  title = 'Let us help you!',
  intro = 'Whether you are choosing a first course for your child or starting from zero as an adult, there are several ways to get guidance.',
  cards,
  className = '',
  whatsappUrl,
}: HelpSectionProps) {
  // Use custom cards or default cards (with optional whatsappUrl override)
  const activeCards = cards || defaultCards.map((c) => {
    if (c.eventName === 'whatsapp_click' && whatsappUrl) {
      return { ...c, href: whatsappUrl };
    }
    return c;
  });

  const handleCardClick = (card: HelpCardItem) => {
    if (typeof window !== 'undefined' && card.eventName) {
      const pagePath = window.location.pathname;
      
      // Fire GA4 event via window.gtag if available
      if (typeof (window as any).gtag === 'function') {
        try {
          (window as any).gtag('event', card.eventName, {
            page_path: pagePath,
            card_title: card.title,
            link_url: card.href,
          });
        } catch (err) {
          console.error('Error logging GA4 event:', err);
        }
      } 
      // Fallback: push to dataLayer if available
      else if (Array.isArray((window as any).dataLayer)) {
        try {
          (window as any).dataLayer.push({
            event: card.eventName,
            page_path: pagePath,
            card_title: card.title,
            link_url: card.href,
          });
        } catch (err) {
          console.error('Error pushing to dataLayer:', err);
        }
      }
    }
  };

  return (
    <section
      aria-labelledby="help-section-heading"
      className={`py-16 sm:py-24 bg-background relative overflow-visible ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {eyebrow && (
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary dark:text-accent mb-3 block">
              {eyebrow}
            </span>
          )}
          <h2
            id="help-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-base sm:text-lg text-muted-text max-w-[640px] mx-auto leading-relaxed">
              {intro}
            </p>
          )}
        </div>

        {/* 4 Smart Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-6 sm:pt-8 overflow-visible">
          {activeCards.map((card, idx) => {
            const IconComponent = card.icon || Sparkles;
            const isExternal = card.isExternal || card.href.startsWith('http') || card.href.startsWith('//');

            const cardClasses =
              'group relative flex flex-col items-center text-center bg-[#f3f4f6] dark:bg-slate-800/80 rounded-xl p-6 sm:p-7 pt-12 sm:pt-14 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none no-underline border-0 h-full';

            const cardContent = (
              <>
                {/* Floating Circle Icon Overlapping Top Edge */}
                <div
                  aria-hidden="true"
                  className="w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full bg-white dark:bg-slate-900 shadow-md flex items-center justify-center absolute -top-8 sm:-top-8.5 left-1/2 -translate-x-1/2 z-10 text-primary dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200 motion-reduce:transform-none"
                >
                  <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-[15px] text-muted-text leading-relaxed mb-6 flex-grow">
                  {card.text}
                </p>

                {/* Card Action Link */}
                <div className="mt-auto inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold text-primary dark:text-emerald-400 group-hover:text-primary-hover py-2 px-4 rounded-full bg-white/90 dark:bg-slate-900/90 shadow-xs group-hover:shadow-sm border border-slate-200/60 dark:border-slate-700/60 transition-all duration-200">
                  <span>{card.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200 motion-reduce:transform-none" />
                </div>
              </>
            );

            if (isExternal) {
              return (
                <a
                  key={idx}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCardClick(card)}
                  className={cardClasses}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={idx}
                href={card.href}
                onClick={() => handleCardClick(card)}
                className={cardClasses}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
