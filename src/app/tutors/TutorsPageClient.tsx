'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { TutorData, ContactData } from '@/data/db';
import { 
  Search, 
  CheckCircle, 
  Star, 
  Globe, 
  Clock, 
  Award, 
  BookOpen, 
  Users, 
  Zap, 
  X, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  SlidersHorizontal, 
  RotateCcw, 
  Play, 
  MessageSquare, 
  GraduationCap,
  Sparkles,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TutorsPageClient({ 
  initialTutors,
  contactData 
}: { 
  initialTutors: TutorData[];
  contactData: ContactData;
}) {
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState<'all' | 'male' | 'female'>('all');
  const [onlineNow, setOnlineNow] = useState(false);
  const [availableToday, setAvailableToday] = useState(false);
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('all');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [maxPrice, setMaxPrice] = useState(25);
  const [sortBy, setSortBy] = useState<'recommended' | 'rating' | 'experience' | 'lessons'>('recommended');

  // Selected Tutor Modal State
  const [selectedTutor, setSelectedTutor] = useState<TutorData | null>(null);
  const [activeProfileTab, setActiveProfileTab] = useState<'about' | 'education' | 'schedule' | 'reviews'>('about');

  // Filter Logic
  const filteredTutors = useMemo(() => {
    return initialTutors.filter(tutor => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = tutor.name.toLowerCase().includes(q);
        const matchesSpec = tutor.specialization.toLowerCase().includes(q);
        const matchesCountry = (tutor.country || '').toLowerCase().includes(q);
        const matchesLang = tutor.languages.some(l => l.toLowerCase().includes(q));
        const matchesSubj = (tutor.subjects || []).some(s => s.toLowerCase().includes(q));
        if (!matchesName && !matchesSpec && !matchesCountry && !matchesLang && !matchesSubj) {
          return false;
        }
      }

      // 2. Gender
      if (genderFilter !== 'all' && tutor.gender !== genderFilter) return false;

      // 3. Online Now
      if (onlineNow && !tutor.isOnline) return false;

      // 4. Available Today
      if (availableToday && !tutor.isAvailableToday) return false;

      // 5. Subject
      if (subjectFilter !== 'all') {
        const hasSubject = tutor.subjects?.some(s => s.toLowerCase().includes(subjectFilter.toLowerCase())) ||
                           tutor.specialization.toLowerCase().includes(subjectFilter.toLowerCase());
        if (!hasSubject) return false;
      }

      // 6. Country
      if (countryFilter !== 'all' && (tutor.country || '').toLowerCase() !== countryFilter.toLowerCase()) return false;

      // 7. Language
      if (languageFilter !== 'all') {
        const hasLang = tutor.languages.some(l => l.toLowerCase().includes(languageFilter.toLowerCase()));
        if (!hasLang) return false;
      }

      // 8. Experience
      if (experienceFilter === '5+' && parseInt(tutor.experience) < 5) return false;
      if (experienceFilter === '8+' && parseInt(tutor.experience) < 8) return false;
      if (experienceFilter === '10+' && parseInt(tutor.experience) < 10) return false;

      // 9. Rating
      if (ratingFilter === '4.8+' && (tutor.rating || 5) < 4.8) return false;
      if (ratingFilter === '5.0' && (tutor.rating || 5) < 5.0) return false;

      // 10. Hourly Rate
      if (tutor.hourlyRate && tutor.hourlyRate > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5);
      if (sortBy === 'experience') return parseInt(b.experience) - parseInt(a.experience);
      if (sortBy === 'lessons') return (b.lessonsCompleted || 0) - (a.lessonsCompleted || 0);
      return 0;
    });
  }, [
    initialTutors, 
    searchQuery, 
    genderFilter, 
    onlineNow, 
    availableToday, 
    subjectFilter, 
    countryFilter, 
    languageFilter, 
    experienceFilter, 
    ratingFilter, 
    maxPrice, 
    sortBy
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setGenderFilter('all');
    setOnlineNow(false);
    setAvailableToday(false);
    setSubjectFilter('all');
    setCountryFilter('all');
    setLanguageFilter('all');
    setExperienceFilter('all');
    setRatingFilter('all');
    setMaxPrice(25);
    setSortBy('recommended');
  };

  // Schema.org Person & Breadcrumb
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            "name": "Find Tutors",
            "item": "https://www.oqtutor.com/tutors"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Certified Online Quran Tutors",
        "itemListElement": initialTutors.map((tutor, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "Person",
            "name": tutor.name,
            "jobTitle": "Certified Quran & Tajweed Tutor",
            "worksFor": {
              "@type": "EducationalOrganization",
              "name": "OQTutor Online Quran Academy"
            },
            "knowsLanguage": tutor.languages,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": tutor.rating || 5.0,
              "reviewCount": tutor.reviewsCount || 100
            }
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Navbar />

      <main className="min-h-screen bg-slate-50/50 text-slate-800 font-sans">
        
        {/* HERO SECTION */}
        <section className="bg-slate-900 text-white relative overflow-hidden py-16 lg:py-24 border-b border-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/30 via-slate-900 to-slate-950 pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 text-xs font-semibold text-emerald-400">
                <Sparkles className="h-4 w-4 text-emerald-400" />
                <span>100% Certified Native Arabic & Bilingual Tutors</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Find the Best Online Quran Tutors
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
                Choose from verified male and female Quran teachers from around the world. Learn Quran Reading, Tajweed, Hifz, Arabic, and Islamic Studies with one-on-one live classes.
              </p>

              {/* Large Hero Search Bar */}
              <div className="pt-4 max-w-2xl mx-auto">
                <div className="relative flex items-center bg-white rounded-2xl shadow-2xl p-2 border border-slate-200">
                  <Search className="h-5 w-5 text-slate-400 ml-4 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search by teacher name, subject, country, or language..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 text-slate-800 text-sm font-normal focus:outline-none placeholder:text-slate-400 bg-transparent"
                  />
                  <Link
                    href="/contact"
                    className="hidden sm:inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all shrink-0"
                  >
                    <span>Book Free Trial</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Hero Action Buttons (Mobile / Secondary) */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="sm:hidden px-6 py-3 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-lg"
                >
                  Book Free Trial
                </Link>
                <button
                  onClick={() => {
                    const el = document.getElementById('tutors-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
                >
                  Browse All Tutors ↓
                </button>
              </div>

              {/* Trust Section Grid */}
              <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-slate-800/80 max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-white">1000+</span>
                    <span className="text-[11px] text-slate-400">Verified Tutors</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <Globe className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-white">70+</span>
                    <span className="text-[11px] text-slate-400">Countries Served</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <Users className="h-5 w-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-white">50,000+</span>
                    <span className="text-[11px] text-slate-400">Lessons Taught</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <Star className="h-5 w-5 text-amber-400 fill-amber-400 shrink-0" />
                  <div>
                    <span className="block text-sm font-bold text-white">4.9 / 5.0</span>
                    <span className="text-[11px] text-slate-400">Average Rating</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* MAIN FILTER & TUTOR ROSTER CONTAINER */}
        <section id="tutors-section" className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT SIDEBAR (STICKY FILTERS CARD) */}
              <aside className="lg:col-span-4 sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
                  
                  {/* Header & Reset Button */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center space-x-2 text-slate-800">
                      <SlidersHorizontal className="h-4 w-4 text-emerald-600" />
                      <h2 className="text-base font-bold">Filter Tutors</h2>
                    </div>
                    <button
                      onClick={handleResetFilters}
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1 transition-colors"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Reset Filters</span>
                    </button>
                  </div>

                  {/* Filter 1: Gender Pills */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Teacher Gender</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'all', label: 'All' },
                        { id: 'male', label: 'Male' },
                        { id: 'female', label: 'Female' },
                      ].map(g => (
                        <button
                          key={g.id}
                          onClick={() => setGenderFilter(g.id as any)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                            genderFilter === g.id
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filter 2: Live Status Toggles */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-xs font-bold text-slate-700 flex items-center space-x-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Online Now</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={onlineNow}
                        onChange={(e) => setOnlineNow(e.target.checked)}
                        className="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                      />
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-xs font-bold text-slate-700 flex items-center space-x-2">
                        <Zap className="h-3.5 w-3.5 text-amber-500" />
                        <span>Available Today</span>
                      </span>
                      <input
                        type="checkbox"
                        checked={availableToday}
                        onChange={(e) => setAvailableToday(e.target.checked)}
                        className="h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                      />
                    </label>
                  </div>

                  {/* Filter 3: Subject Specialty */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Subject Specialty</label>
                    <select
                      value={subjectFilter}
                      onChange={(e) => setSubjectFilter(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="all">All Subjects & Courses</option>
                      <option value="Noorani Qaida">Noorani Qaida</option>
                      <option value="Tajweed">Tajweed Course</option>
                      <option value="Hifz">Hifz Program / Memorization</option>
                      <option value="Quran Reading">Quran Reading (Nazra)</option>
                      <option value="Islamic Studies">Islamic Studies</option>
                      <option value="Quran Translation">Quran Translation & Tafseer</option>
                    </select>
                  </div>

                  {/* Filter 4: Country of Origin */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Country of Origin</label>
                    <select
                      value={countryFilter}
                      onChange={(e) => setCountryFilter(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="all">All Countries</option>
                      <option value="Egypt">🇪🇬 Egypt (Native Arabic)</option>
                      <option value="Pakistan">🇵🇰 Pakistan</option>
                      <option value="Jordan">🇯🇴 Jordan</option>
                      <option value="Saudi Arabia">🇸🇦 Saudi Arabia</option>
                    </select>
                  </div>

                  {/* Filter 5: Languages Spoken */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Language Spoken</label>
                    <select
                      value={languageFilter}
                      onChange={(e) => setLanguageFilter(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="all">All Languages</option>
                      <option value="English">English (Fluent)</option>
                      <option value="Arabic">Arabic (Native)</option>
                      <option value="Urdu">Urdu</option>
                      <option value="Punjabi">Punjabi</option>
                    </select>
                  </div>

                  {/* Filter 6: Experience Level */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Teaching Experience</label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {['all', '5+', '8+', '10+'].map(exp => (
                        <button
                          key={exp}
                          onClick={() => setExperienceFilter(exp)}
                          className={`py-1.5 rounded-lg text-[11px] font-bold transition-all ${
                            experienceFilter === exp
                              ? 'bg-slate-900 text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {exp === 'all' ? 'Any' : `${exp} yrs`}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filter 7: Minimum Rating */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Minimum Rating</label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'all', label: 'All' },
                        { id: '4.8+', label: '4.8★ +' },
                        { id: '5.0', label: '5.0★' },
                      ].map(r => (
                        <button
                          key={r.id}
                          onClick={() => setRatingFilter(r.id)}
                          className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                            ratingFilter === r.id
                              ? 'bg-amber-500 text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Filter 8: Hourly Price Range Slider */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-700 uppercase tracking-wider">Hourly Rate</span>
                      <span className="font-bold text-emerald-600">Up to ${maxPrice}/hr</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="25"
                      step="1"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                      <span>$10/hr</span>
                      <span>$18/hr</span>
                      <span>$25/hr</span>
                    </div>
                  </div>

                </div>
              </aside>

              {/* RIGHT SIDE (TUTOR CARDS ROSTER GRID) */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Results Header Bar */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">
                      Available Tutors <span className="text-xs text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold ml-1">{filteredTutors.length} verified</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">Select a tutor to view full profile, certifications, and book your free trial.</p>
                  </div>

                  {/* Sort Dropdown */}
                  <div className="flex items-center space-x-2 shrink-0">
                    <span className="text-xs font-semibold text-slate-500">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="recommended">Recommended</option>
                      <option value="rating">Highest Rated</option>
                      <option value="experience">Most Experienced</option>
                      <option value="lessons">Most Lessons</option>
                    </select>
                  </div>
                </div>

                {/* TUTOR CARDS LIST */}
                {filteredTutors.length > 0 ? (
                  <div className="space-y-6">
                    {filteredTutors.map((tutor) => (
                      <motion.div
                        key={tutor.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col md:flex-row gap-6 relative group"
                      >
                        {/* Left Profile Image Box */}
                        <div className="shrink-0 flex flex-col items-center space-y-3">
                          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                            <Image
                              src={tutor.photo}
                              alt={tutor.name}
                              width={128}
                              height={128}
                              loading="lazy"
                              className="h-full w-full object-cover object-top"
                            />
                            {/* Online Status Dot */}
                            {tutor.isOnline && (
                              <span className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" title="Online Now" />
                            )}
                          </div>

                          <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                            {tutor.gender === 'female' ? 'Female Scholar' : 'Male Scholar'}
                          </span>
                        </div>

                        {/* Middle Profile Content */}
                        <div className="flex-1 space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                  {tutor.name}
                                </h3>
                                <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                                  <ShieldCheck className="h-3 w-3 text-emerald-600" />
                                  <span>Verified Qari</span>
                                </span>
                              </div>

                              <div className="flex items-center space-x-3 text-xs text-slate-500 mt-1">
                                <span className="font-semibold text-slate-700 flex items-center space-x-1">
                                  <span>{tutor.countryFlag || '🌍'}</span>
                                  <span>{tutor.country || 'International'}</span>
                                </span>
                                <span>•</span>
                                <span className="flex items-center space-x-1 text-amber-500 font-bold">
                                  <Star className="h-3.5 w-3.5 fill-amber-400" />
                                  <span>{tutor.rating || 5.0}</span>
                                  <span className="text-slate-400 font-normal">({tutor.reviewsCount || 100} reviews)</span>
                                </span>
                                <span>•</span>
                                <span className="font-semibold text-slate-700">{tutor.experience} Exp</span>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="text-xl font-extrabold text-slate-900">${tutor.hourlyRate || 15}</span>
                              <span className="text-[11px] text-slate-400 block font-normal">/ 30 min lesson</span>
                            </div>
                          </div>

                          {/* Languages & Subjects Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 text-xs">
                            <span className="text-slate-400 font-semibold text-[11px] mr-1">Languages:</span>
                            {tutor.languages.map((lang, lIdx) => (
                              <span key={lIdx} className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg text-[11px] font-semibold">
                                {lang}
                              </span>
                            ))}
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5 text-xs">
                            <span className="text-slate-400 font-semibold text-[11px] mr-1">Teaches:</span>
                            {(tutor.subjects || [tutor.specialization]).map((subj, sIdx) => (
                              <span key={sIdx} className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-2.5 py-0.5 rounded-lg text-[11px] font-bold">
                                {subj}
                              </span>
                            ))}
                          </div>

                          {/* Short Bio */}
                          <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-2">
                            {tutor.bio || `${tutor.name} is a certified Islamic scholar with ${tutor.experience} of experience specializing in ${tutor.specialization}. Taught in interactive 1-on-1 virtual classrooms.`}
                          </p>

                          {/* Stats Grid */}
                          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-slate-500">
                            <div>
                              <span className="block font-bold text-slate-800">{tutor.studentsTaught || 150}+</span>
                              <span className="text-[10px]">Students Taught</span>
                            </div>
                            <div>
                              <span className="block font-bold text-slate-800">{tutor.lessonsCompleted || 3200}+</span>
                              <span className="text-[10px]">Lessons Given</span>
                            </div>
                            <div>
                              <span className="block font-bold text-slate-800">{tutor.responseTime || '< 30 mins'}</span>
                              <span className="text-[10px]">Response Time</span>
                            </div>
                            <div>
                              <span className="block font-bold text-emerald-600 truncate">{tutor.nextAvailableSlot || 'Today'}</span>
                              <span className="text-[10px]">Next Available</span>
                            </div>
                          </div>

                          {/* Card Buttons */}
                          <div className="pt-3 flex items-center justify-end space-x-3">
                            <button
                              onClick={() => {
                                setSelectedTutor(tutor);
                                setActiveProfileTab('about');
                              }}
                              className="px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all"
                            >
                              View Profile
                            </button>
                            <Link
                              href="/contact"
                              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center space-x-1.5"
                            >
                              <span>Book Free Trial</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                          </div>

                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
                    <UserCheck className="h-10 w-10 text-slate-300 mx-auto" />
                    <h3 className="text-base font-bold text-slate-800">No Tutors Match Your Selected Filters</h3>
                    <p className="text-xs text-slate-500 max-w-md mx-auto">
                      Try broadening your search query or reset filters to view all verified male and female Quran instructors.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>
        </section>
      </main>

      {/* FULL TUTOR PROFILE PAGE MODAL / DRAWER */}
      <AnimatePresence>
        {selectedTutor && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTutor(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors shadow-lg"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Cover Banner */}
              <div className="h-40 sm:h-52 w-full bg-gradient-to-r from-emerald-800 via-slate-900 to-emerald-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent pointer-events-none" />
              </div>

              {/* Profile Header Info */}
              <div className="px-6 sm:px-8 pb-6 relative -mt-16 sm:-mt-20 space-y-6">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div className="flex items-end space-x-4">
                    <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 relative shrink-0">
                      <Image
                        src={selectedTutor.photo}
                        alt={selectedTutor.name}
                        width={144}
                        height={144}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{selectedTutor.name}</h2>
                        <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <ShieldCheck className="h-3 w-3 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{selectedTutor.countryFlag} {selectedTutor.country} • {selectedTutor.experience} Experience</p>
                      <div className="flex items-center space-x-1 text-amber-500 text-xs font-bold mt-1">
                        <Star className="h-4 w-4 fill-amber-400" />
                        <span>{selectedTutor.rating || 5.0}</span>
                        <span className="text-slate-400 font-normal">({selectedTutor.reviewsCount || 100} reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <Link
                      href="/contact"
                      className="flex-1 sm:flex-initial text-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all"
                    >
                      Book Free Trial
                    </Link>
                  </div>
                </div>

                {/* Profile Tabs Navigation */}
                <div className="flex border-b border-slate-200">
                  {[
                    { id: 'about', label: 'About & Style' },
                    { id: 'education', label: 'Education & Ijazah' },
                    { id: 'schedule', label: 'Weekly Schedule' },
                    { id: 'reviews', label: 'Student Reviews' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveProfileTab(tab.id as any)}
                      className={`px-5 py-3 text-xs font-bold border-b-2 transition-all ${
                        activeProfileTab === tab.id
                          ? 'border-emerald-600 text-emerald-600'
                          : 'border-transparent text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Profile Tab Contents */}
                {activeProfileTab === 'about' && (
                  <div className="space-y-6 pt-2">
                    {/* Video Intro Placeholder */}
                    <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3">
                      <div className="h-48 w-full bg-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-700">
                        <div className="text-center space-y-2">
                          <div className="h-14 w-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xl cursor-pointer hover:scale-110 transition-transform">
                            <Play className="h-6 w-6 ml-1 fill-white" />
                          </div>
                          <span className="text-xs font-bold text-slate-300 block">Watch Video Introduction (1:20)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Biography & Overview</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {selectedTutor.bio}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Teaching Methodology</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {selectedTutor.teachingStyle}
                      </p>
                    </div>
                  </div>
                )}

                {activeProfileTab === 'education' && (
                  <div className="space-y-6 pt-2">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4 text-emerald-600" />
                        <span>Academic Degree</span>
                      </h3>
                      <p className="text-xs text-slate-700 font-semibold">{selectedTutor.education || 'B.A. in Islamic Studies & Tajweed Sciences'}</p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                        <Award className="h-4 w-4 text-emerald-600" />
                        <span>Ijazah Certifications & Sanad Chain</span>
                      </h3>
                      <ul className="space-y-2">
                        {(selectedTutor.ijazahCertifications || ["Ijazah in Hafs 'an 'Asim", "Sanad in Tajweed Rules", "Al-Azhar Teaching License"]).map((cert, cIdx) => (
                          <li key={cIdx} className="flex items-center space-x-2 text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200">
                            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                            <span className="font-semibold">{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeProfileTab === 'schedule' && (
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Weekly Available Slots (EST)</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Morning (8:00 AM - 12:00 PM)', 'Afternoon (1:00 PM - 5:00 PM)', 'Evening (6:00 PM - 10:00 PM)'].map((slot, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                          <span className="text-[11px] font-bold text-emerald-800 block">{slot}</span>
                          <span className="text-[10px] text-emerald-600 mt-1 block">✔ Open for Booking</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeProfileTab === 'reviews' && (
                  <div className="space-y-4 pt-2">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Parent & Student Testimonials</h3>
                    <div className="space-y-3">
                      {(selectedTutor.reviewsList || []).map((rev, rIdx) => (
                        <div key={rIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-slate-900">{rev.studentName} ({rev.location})</span>
                            <span className="text-amber-500 text-xs font-bold">{'★'.repeat(rev.rating)}</span>
                          </div>
                          <p className="text-xs text-slate-600 italic">"{rev.comment}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer data={contactData} />
    </>
  );
}
