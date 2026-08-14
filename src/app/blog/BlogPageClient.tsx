'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { BlogData, ContactData } from '@/data/db';
import { BookOpen, Clock, Calendar, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const getBlogImage = (blogItem: BlogData | string): string => {
  if (typeof blogItem === 'object' && blogItem !== null) {
    if (blogItem.coverImage) return blogItem.coverImage;
    return mapping[blogItem.slug || ''] || '/arabic-reading.jpg';
  }
  return mapping[(blogItem as string) || ''] || '/arabic-reading.jpg';
};

const mapping: Record<string, string> = {
  'online-quran-classes-usa': '/online-quran-classes-usa.jpg',
  'tips-keep-kids-motivated-online-quran': '/motivated-kids-watercolor.jpg',
  'beginners-guide-mastering-tajweed-rules': '/tajweed-teacher.jpg',
  'select-right-online-quran-tutor': '/tutor-guide.jpg',
  'effective-hifz-memorization-techniques': '/hifz-quran-desk.png',
  'role-parents-islamic-education-west': '/parents-role.jpg',
  'why-noorani-qaida-essential': '/noorani-qaida.jpg',
  'reciting-quran-tajweed-posture-breathing': '/breathing-diaphragm.jpg',
  'common-pronunciation-mistakes-qaida': '/pronunciation-mistakes-qaida.jpg',
  'consistent-hifz-quran-revision': '/quran-hifz.jpg',
  'islamic-studies-homeschool-curriculum': '/islamic-studies.jpg',
  'choosing-male-female-quran-teacher': '/female-teacher-girl.jpg',
  'how-to-choose-the-best-female-quran-teacher-online-for-your-child': '/female-teacher-blog-2.jpg',
  'benefits-interactive-one-on-one-classes': '/interactive-one-on-one.jpg',
  'understanding-arabic-grammar-quran': '/quran-posture-floor.jpg',
  'prepare-child-first-online-class': '/motivated-kids-quran.jpg',
  'quran-memorization-adults-never-late': '/adult-quran-memorization.jpg',
  'teaching-salah-wudu-toddlers': '/salah-wudu-toddlers.jpg',
  'tajweed-vs-tarteel-difference': '/tajweed-basics.jpg',
  'virtues-reciting-quran-daily': '/virtues-reciting-daily.jpg',
  'screen-time-spiritual-learning': '/screen-time-learning.jpg',
  'read-arabic-fluidly-without-vowels': '/read-arabic-fluidly.jpg',
  'how-online-quran-classes-help-busy-muslim-families-in-illinois': '/illinois-1.jpg',
  'online-vs-in-person-quran-classes': '/online-vs-in-person-quran-classes.jpg',
  'best-online-quran-classes-for-kids-in-usa': '/blog-kids-usa-1.jpg',
  'weekend-quran-classes-tajweed-own-pace': '/blog/weekend-quran/weekend-quran-class-1.jpg',
  'what-us-parents-should-know-before-choosing-an-online-quran-tutor': '/parents-role.jpg',
};

const getBlogImageAlt = (slug: string, title: string): string => {
  const mappingAlt: Record<string, string> = {
    'online-quran-classes-usa': 'Online Quran tutor teaching kids online via video session in USA',
    'tips-keep-kids-motivated-online-quran': 'Interactive online Quran classroom with teacher and student',
    'beginners-guide-mastering-tajweed-rules': 'Certified teacher pointing at Tajweed rules chart on screen',
    'select-right-online-quran-tutor': 'Father and son learning Quran online together using a laptop',
    'effective-hifz-memorization-techniques': 'Copy of Holy Quran on desk next to laptop showing mountain backdrop',
    'role-parents-islamic-education-west': 'Father sitting with son helping him with laptop online studies',
    'why-noorani-qaida-essential': 'Noorani Qaida booklet open for basic learning',
    'reciting-quran-tajweed-posture-breathing': 'Boy learning diaphragm breathing and posture rules from Tajweed teacher online',
    'common-pronunciation-mistakes-qaida': 'Boy taking notes while learning Noorani Qaida pronunciation online with tutor',
    'consistent-hifz-quran-revision': 'Quran book on stand for Hifz revision',
    'islamic-studies-homeschool-curriculum': 'Kids learning Islamic studies at home',
    'choosing-male-female-quran-teacher': 'Girl student learning Quran online with a friendly female Quran teacher',
    'how-to-choose-the-best-female-quran-teacher-online-for-your-child': 'Young Muslim girl studying Quran online on a laptop with a friendly female teacher',
    'benefits-interactive-one-on-one-classes': 'Child pointing to Quran book during interactive 1-on-1 online Quran session',
    'understanding-arabic-grammar-quran': 'Boy sitting on the floor reciting Quran under warm sunlight',
    'prepare-child-first-online-class': 'Kid happily reading Quran before class',
    'quran-memorization-adults-never-late': 'Adult man at a desk reading Quran with a lamp and a cup of tea',
    'teaching-salah-wudu-toddlers': 'Girl student wearing a white hijab sitting on a carpet, making dua in front of an open Quran',
    'tajweed-vs-tarteel-difference': 'Tajweed basics and rules illustration',
    'virtues-reciting-quran-daily': 'Boy sitting on the floor reciting Quran under warm sunlight',
    'screen-time-spiritual-learning': 'Boy studying online with laptop, writing notes in notebook',
    'read-arabic-fluidly-without-vowels': 'Man sitting in a mosque in white clothes reciting the Quran',
    'how-online-quran-classes-help-busy-muslim-families-in-illinois': 'Busy family in Illinois learning Quran online',
    'online-vs-in-person-quran-classes': 'Comparison layout showing an online Quran class session on a laptop vs an in-person group Quran recitation session in a mosque',
    'best-online-quran-classes-for-kids-in-usa': 'Smiling young Muslim boy wearing kufi sitting in front of a laptop with open Quran book on a desk',
    'weekend-quran-classes-tajweed-own-pace': 'Muslim student learning Tajweed at home in a weekend one-on-one online Quran class',
    'what-us-parents-should-know-before-choosing-an-online-quran-tutor': 'Holy Quran resting open on a wooden rehal rest with prayer beads on a prayer mat',
  };
  return mappingAlt[slug || ''] || title || 'Quran Learning Blog';
};

export default function BlogPageClient({
  initialBlogs,
  contactData
}: {
  initialBlogs: BlogData[];
  contactData: ContactData;
}) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Quran Learning Tips',
    'Tajweed Guides',
    'Parenting',
    'Islamic Education',
    'Hifz Tips',
    'Children\'s Learning',
    'Beginner Quran Guides'
  ];

  // Filter logic: category filter + search query match
  const filteredBlogs = (initialBlogs || []).filter(blog => {
    if (!blog) return false;
    const cat = (blog.category || '').toLowerCase();
    const title = (blog.title || '').toLowerCase();
    const desc = (blog.description || '').toLowerCase();
    const query = (searchQuery || '').toLowerCase();

    const matchesCategory = activeCategory === 'All' || cat === activeCategory.toLowerCase();
    const matchesSearch = title.includes(query) || desc.includes(query);
    return matchesCategory && matchesSearch;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oqtutor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.oqtutor.com/blog"
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
        
        {/* Header Hero */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Knowledge Hub
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Quran Learning & Tajweed Blog
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              Read educational guidelines, Tajweed tricks, Quran memorization methods, and advice from certified Islamic instructors and scholars.
            </p>
          </div>
        </section>

        {/* Filters & Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Search and Category block */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 w-full md:max-w-4xl">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4.5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                      activeCategory === cat
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full md:max-w-xs shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-text" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-card-border bg-background/50 text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Grid List */}
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 relative cursor-pointer"
                  >
                    <div>
                      {/* Image Header */}
                      <div className="relative h-48 w-full bg-foreground/5 overflow-hidden">
                        <img
                          src={getBlogImage(blog)}
                          alt={getBlogImageAlt(blog.slug, blog.title)}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/arabic-reading.jpg';
                          }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Content Container */}
                      <div className="p-6">
                        {/* Category Tag */}
                        <div className="mb-4">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {blog.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors line-clamp-2 min-h-[2.75rem]">
                          {blog.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-xs text-muted-text leading-relaxed font-normal mb-6 line-clamp-3">
                          {blog.description}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Meta & Read More */}
                    <div className="px-6 pb-6 pt-4 border-t border-card-border/60 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-3 text-[10px] text-muted-text font-medium">
                        <span className="flex items-center space-x-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>July 2026</span>
                        </span>
                        <span className="flex items-center space-x-1.5">
                          <Clock className="h-3.5 w-3.5 shrink-0" />
                          <span>{blog.readTime}</span>
                        </span>
                      </div>
                      <span className="font-semibold text-primary group-hover:text-primary-hover flex items-center space-x-1">
                        <span>Read More</span>
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 glass rounded-3xl border-card-border max-w-xl mx-auto">
                <p className="text-sm text-muted-text">No articles found matching your criteria. Try adjusting your search query.</p>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer data={contactData} />
    </>
  );
}
