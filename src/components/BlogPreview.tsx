'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPreviewItem {
  image: string;
  category: string;
  title: string;
  link: string;
}

const blogItems: BlogPreviewItem[] = [
  {
    image: '/online-quran-classes-texas-girl.jpg',
    category: 'Texas Guide',
    title: 'Online Quran Classes in Texas: A Real Guide for Busy Families',
    link: '/blog/online-quran-classes-texas',
  },
  {
    image: '/beginner-quran-classes-cover.jpg',
    category: 'Beginner Guide',
    title: 'What Are the Best Online Quran Classes for Beginners?',
    link: '/blog/best-online-quran-classes-for-beginners',
  },
  {
    image: '/blog/how-to-choose-best-online-quran-classes-for-kids-usa/how-to-choose-best-online-quran-classes-kids-usa-cover.jpg',
    category: 'Parenting Guide',
    title: 'How to Choose the Best Online Quran Classes for Kids in the USA',
    link: '/blog/how-to-choose-best-online-quran-classes-for-kids-usa',
  },
  {
    image: '/parents-role.jpg',
    category: 'Tutor Selection',
    title: 'What US Parents Should Know Before Choosing an Online Quran Tutor',
    link: '/blog/what-us-parents-should-know-before-choosing-an-online-quran-tutor',
  },
  {
    image: '/blog/how-long-does-it-take-for-a-child-to-complete-the-quran-online/child-quran-completion-timeline-cover.jpg',
    category: 'Parent Timeline',
    title: 'How Long Does It Take for a Child to Complete the Quran Online?',
    link: '/blog/how-long-does-it-take-for-a-child-to-complete-the-quran-online',
  },
  {
    image: '/images/hero-quran-recitation.webp',
    category: '1-on-1 Tutoring',
    title: 'Best Online Quran Classes in the USA: One-to-One Qualified Tutors',
    link: '/blog/best-online-quran-classes-usa-one-to-one-qualified-tutors',
  },
];

export default function BlogPreview() {
  return (
    <section id="blog-preview" className="py-16 md:py-24 bg-foreground/[0.01] relative overflow-hidden border-t border-card-border/60">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1 inline-block mb-3">
              Guides &amp; Articles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Educational Guides for Your Family&apos;s Quran Journey
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed font-normal">
              Practical advice on Noorani Qaida phonics, Tajweed, tutor selection, and completion timelines written for parents and students learning online.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-card-border hover:border-primary text-sm font-bold text-primary hover:text-primary-hover transition-all"
            >
              <span>Browse all articles</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogItems.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              {/* Image Header with Category Badge */}
              <div className="relative h-52 w-full bg-foreground/5 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-white rounded-full shadow-md">
                  {item.category}
                </div>
              </div>

              {/* Title Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                  {item.title}
                </h3>
                
                <div className="mt-6 pt-4 border-t border-card-border/60 flex items-center justify-between text-xs font-bold text-primary group-hover:text-primary-hover transition-colors">
                  <span>Read Complete Guide</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

