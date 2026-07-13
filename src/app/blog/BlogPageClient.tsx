'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BlogData, ContactData } from '@/data/db';
import { BookOpen, Clock, Calendar, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const filteredBlogs = initialBlogs.filter(blog => {
    const matchesCategory = activeCategory === 'All' || blog.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase());
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
                  <div
                    key={blog.id}
                    className="glass rounded-3xl border border-card-border p-6 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div>
                      {/* Meta information */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {blog.category}
                        </span>
                        <div className="flex items-center space-x-1.5 text-[10px] text-muted-text font-medium">
                          <Clock className="h-3.5 w-3.5 shrink-0" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Header */}
                      <h3 className="text-base font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                        {blog.title}
                      </h3>
                      
                      <p className="text-xs text-muted-text leading-relaxed font-normal mb-6">
                        {blog.description}
                      </p>
                    </div>

                    <div className="border-t border-card-border/60 pt-4 flex items-center justify-between text-xs">
                      <span className="text-[10px] text-muted-text font-medium flex items-center space-x-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>July 2026</span>
                      </span>
                      <Link
                        href={`/contact`}
                        className="font-semibold text-primary hover:text-primary-hover flex items-center space-x-1"
                      >
                        <span>Read More</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
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
