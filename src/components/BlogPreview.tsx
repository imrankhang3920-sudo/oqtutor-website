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
    image: '/tutor-guide.jpg',
    category: 'Beginner Quran Guides',
    title: 'How to Select the Right Online Quran Tutor for Your Family',
    link: '/blog/select-right-online-quran-tutor',
  },
  {
    image: '/tajweed-basics.jpg',
    category: 'Tajweed Guides',
    title: 'A Beginner\'s Guide to Mastering Tajweed Rules at Home',
    link: '/blog/beginners-guide-mastering-tajweed-rules',
  },
  {
    image: '/hifz-motivation.jpg',
    category: 'Hifz Tips',
    title: 'Effective Hifz Techniques for Memorizing the Quran Remotely',
    link: '/blog/effective-hifz-memorization-techniques',
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
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Blog & Guidance</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Guidance for your family's Quran journey
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed font-normal">
              Practical advice on tajweed, hifz, and choosing the right teacher — written for parents and students learning online.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              href="/blog"
              className="flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover group transition-all"
            >
              <span>Browse all articles</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogItems.map((item, idx) => (
            <Link
              href={item.link}
              key={idx}
              className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 relative"
            >
              {/* Image Header with Category Badge */}
              <div className="relative h-52 w-full bg-foreground/5 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/arabic-reading.jpg';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary text-white rounded-full shadow-md">
                  {item.category}
                </div>
              </div>

              {/* Title Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                  {item.title}
                </h3>
                
                <div className="mt-6 pt-4 border-t border-card-border/60 flex items-center justify-between text-xs font-bold text-primary group-hover:text-primary-hover transition-colors">
                  <span>Read Article</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
