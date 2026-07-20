'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  DatabaseSchema, 
  CourseData,
  PricingData,
  TutorData, 
  TestimonialData, 
  FAQData,
  BlogData,
  SEOData,
  SettingsData
} from '@/data/db';
import { 
  LayoutDashboard,
  Home, 
  BookOpen,
  DollarSign, 
  Users, 
  MessageSquare, 
  HelpCircle,
  FileText,
  Mail, 
  Search,
  Image as ImageIcon,
  Settings,
  ShieldCheck,
  LogOut, 
  Save, 
  Plus, 
  Trash2, 
  Edit2, 
  X, 
  Check, 
  Globe,
  RefreshCw,
  ExternalLink,
  AlertTriangle,
  Lock,
  Sparkles,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 
  | 'overview' 
  | 'homepage' 
  | 'courses' 
  | 'pricing' 
  | 'tutors' 
  | 'testimonials' 
  | 'faqs' 
  | 'blogs' 
  | 'contact' 
  | 'seo' 
  | 'media' 
  | 'settings';

export default function AdminDashboardClient({ 
  initialData,
  userRole = 'super_admin',
  username = 'admin'
}: { 
  initialData: DatabaseSchema;
  userRole?: 'super_admin' | 'editor';
  username?: string;
}) {
  const router = useRouter();
  const [db, setDb] = useState<DatabaseSchema>(initialData);
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Search & Filters
  const [faqSearch, setFaqSearch] = useState('');

  // Modal / Editor item states
  const [editingCourse, setEditingCourse] = useState<CourseData | null>(null);
  const [editingPricing, setEditingPricing] = useState<PricingData | null>(null);

  // New Item states
  const [newBlog, setNewBlog] = useState<Partial<BlogData>>({
    title: '',
    category: 'Quran Learning',
    description: '',
    readTime: '5 min read',
    slug: ''
  });

  const [newTestimonial, setNewTestimonial] = useState<Partial<TestimonialData>>({
    name: '',
    relation: 'Parent of 8-year-old',
    location: 'United Kingdom',
    rating: 5,
    text: '',
  });

  // Default SEO state setup
  const seoData: SEOData = db.seo || {
    siteTitle: 'OQTutor | Online Quran Classes with Certified Male & Female Tutors',
    metaDescription: 'Learn Quran Online with certified male & female tutors. Online Quran Classes for kids in UK & adults: Tajweed, Hifz, Arabic, Islamic Studies. Free Trial Class!',
    keywords: ['Online Quran Tutor', 'Quran Classes for Kids', 'Tajweed Classes', 'Hifz Course', 'Noorani Qaida', 'Online Quran Academy'],
    canonicalUrl: 'https://oqtutor.com',
    ogTitle: 'OQTutor | Online Quran Academy',
    ogDescription: 'Join OQTutor for one-to-one online Quran classes, Tajweed, Hifz, Noorani Qaida and Islamic Studies.',
    ogImage: '/logo.jpg',
    twitterTitle: 'OQTutor Online Quran Academy',
    twitterDescription: 'Certified male & female Quran tutors online.'
  };

  const showMsg = (text: string, type: 'success' | 'error' = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth', { method: 'DELETE' });
      if (res.ok) {
        router.push('/');
        router.refresh();
      }
    } catch {
      showMsg('Failed to logout', 'error');
    }
  };

  const handleSaveDB = async (updatedDB: DatabaseSchema) => {
    setLoading(true);
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedDB),
      });

      if (res.ok) {
        setDb(updatedDB);
        showMsg('Website data & Supabase sync completed successfully!');
        router.refresh();
      } else {
        const err = await res.json();
        showMsg(err.error || 'Failed to save changes', 'error');
      }
    } catch {
      showMsg('Network error while saving', 'error');
    } finally {
      setLoading(false);
    }
  };

  const menuItems: { id: Tab; label: string; icon: any; roleRequired?: string }[] = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'homepage', label: 'Homepage', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'pricing', label: 'Pricing Plans', icon: DollarSign },
    { id: 'tutors', label: 'Tutors Faculty', icon: Users },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'faqs', label: 'FAQ Database', icon: HelpCircle },
    { id: 'blogs', label: 'Blog Posts', icon: FileText },
    { id: 'contact', label: 'Contact Info', icon: Mail },
    { id: 'seo', label: 'SEO Metadata', icon: Globe },
    { id: 'media', label: 'Image Assets', icon: ImageIcon },
    { id: 'settings', label: 'Settings & Supabase', icon: Settings, roleRequired: 'super_admin' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      
      {/* Top Admin Navigation Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-card-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight text-primary">
                  OQ<span className="text-secondary">Tutor</span>
                </span>
              </Link>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                CMS Panel
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-muted-text bg-foreground/5 px-3 py-1.5 rounded-full border border-card-border">
                <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                <span>Role: <strong className="text-foreground capitalize">{userRole.replace('_', ' ')}</strong> ({username})</span>
              </span>

              <Link
                href="/"
                target="_blank"
                className="hidden md:inline-flex items-center space-x-1 text-xs font-semibold text-muted-text hover:text-primary transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold text-red-500 hover:bg-red-500/10 border border-red-500/20 rounded-full transition-all"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Status Notification */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-20 right-6 z-50 px-5 py-3 rounded-2xl shadow-xl text-xs font-bold border flex items-center space-x-2 ${
              message.type === 'success'
                ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 backdrop-blur-md'
                : 'bg-red-500/10 text-red-500 border-red-500/30 backdrop-blur-md'
            }`}
          >
            {message.type === 'success' ? <Check className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
            <span>{message.text}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Body Layout */}
      <div className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Left Navigation Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="glass p-3 rounded-3xl border-card-border space-y-1 sticky top-24">
            {menuItems.map((item) => {
              if (item.roleRequired && userRole !== item.roleRequired) return null;
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-md shadow-primary/20'
                      : 'text-foreground/80 hover:bg-foreground/5 hover:text-primary'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.id === 'faqs' && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-foreground/10 text-muted-text'}`}>
                      {db.faqs?.length || 0}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 min-w-0">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-extrabold text-foreground">Academy Management Dashboard</h1>
                <p className="text-xs text-muted-text mt-1">Manage courses, tutors, FAQs, pricing, and SEO settings without modifying code.</p>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl font-extrabold text-foreground">{db.courses?.length || 0}</span>
                    <p className="text-xs text-muted-text">Active Courses</p>
                  </div>
                </div>

                <div className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                  <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary w-fit">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl font-extrabold text-foreground">{db.tutors?.length || 0}</span>
                    <p className="text-xs text-muted-text">Certified Tutors</p>
                  </div>
                </div>

                <div className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 w-fit">
                    <HelpCircle className="h-5 w-5" />
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl font-extrabold text-foreground">{db.faqs?.length || 0}</span>
                    <p className="text-xs text-muted-text">Structured FAQs</p>
                  </div>
                </div>

                <div className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 w-fit">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <div className="mt-4">
                    <span className="text-2xl font-extrabold text-foreground">{db.pricing?.length || 0}</span>
                    <p className="text-xs text-muted-text">Pricing Plans</p>
                  </div>
                </div>
              </div>

              {/* Quick Navigation Cards */}
              <div className="glass p-6 rounded-3xl border-card-border space-y-4">
                <h2 className="text-base font-bold text-foreground flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Quick Management Actions</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button onClick={() => setActiveTab('homepage')} className="p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-card-border text-left transition-all">
                    <h3 className="text-xs font-bold text-foreground">Edit Homepage Copy</h3>
                    <p className="text-[11px] text-muted-text mt-0.5">Update Hero, Mission, Subtitle, and WhatsApp numbers.</p>
                  </button>
                  <button onClick={() => setActiveTab('courses')} className="p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-card-border text-left transition-all">
                    <h3 className="text-xs font-bold text-foreground">Manage Courses & Syllabi</h3>
                    <p className="text-[11px] text-muted-text mt-0.5">Add new courses, change outcomes, recommended age.</p>
                  </button>
                  <button onClick={() => setActiveTab('faqs')} className="p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-card-border text-left transition-all">
                    <h3 className="text-xs font-bold text-foreground">Update FAQ Database</h3>
                    <p className="text-[11px] text-muted-text mt-0.5">Edit homepage & course FAQs for search ranking.</p>
                  </button>
                  <button onClick={() => setActiveTab('seo')} className="p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 border border-card-border text-left transition-all">
                    <h3 className="text-xs font-bold text-foreground">SEO Meta Tags</h3>
                    <p className="text-[11px] text-muted-text mt-0.5">Configure canonical URLs, meta titles, keywords.</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: HOMEPAGE MANAGER */}
          {activeTab === 'homepage' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Homepage Content Manager</h1>
                  <p className="text-xs text-muted-text mt-1">Edit main hero text, subtitles, CTAs, and mission statements.</p>
                </div>
                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              </div>

              {/* Hero Section Form */}
              <div className="glass p-6 rounded-3xl border-card-border space-y-4">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider text-primary">Hero Section Header</h2>
                
                <div>
                  <label className="block text-xs font-bold text-foreground/80 mb-1.5">Hero Title</label>
                  <input
                    type="text"
                    value={db.hero?.title || ''}
                    onChange={(e) => setDb({ ...db, hero: { ...db.hero, title: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 mb-1.5">Hero Subtitle</label>
                  <textarea
                    rows={3}
                    value={db.hero?.subtitle || ''}
                    onChange={(e) => setDb({ ...db, hero: { ...db.hero, subtitle: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Primary CTA Button Label</label>
                    <input
                      type="text"
                      value={db.hero?.ctaText || ''}
                      onChange={(e) => setDb({ ...db, hero: { ...db.hero, ctaText: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Primary CTA Link Target</label>
                    <input
                      type="text"
                      value={db.hero?.ctaLink || ''}
                      onChange={(e) => setDb({ ...db, hero: { ...db.hero, ctaLink: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">WhatsApp Button Label</label>
                    <input
                      type="text"
                      value={db.hero?.whatsappText || ''}
                      onChange={(e) => setDb({ ...db, hero: { ...db.hero, whatsappText: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">WhatsApp Phone Number</label>
                    <input
                      type="text"
                      value={db.hero?.whatsappNumber || ''}
                      onChange={(e) => setDb({ ...db, hero: { ...db.hero, whatsappNumber: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* About Us & Mission Form */}
              <div className="glass p-6 rounded-3xl border-card-border space-y-4">
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider text-secondary">Mission & Values Copy</h2>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 mb-1.5">Mission Section Heading</label>
                  <input
                    type="text"
                    value={db.mission?.title || ''}
                    onChange={(e) => setDb({ ...db, mission: { ...db.mission, title: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-secondary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 mb-1.5">Mission Statement Text</label>
                  <textarea
                    rows={4}
                    value={db.mission?.content || ''}
                    onChange={(e) => setDb({ ...db, mission: { ...db.mission, content: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:ring-2 focus:ring-secondary focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: COURSES MANAGER */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Course Catalog CMS</h1>
                  <p className="text-xs text-muted-text mt-1">Add, update, or remove online Quran courses and syllabi.</p>
                </div>
                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save All Courses</span>
                </button>
              </div>

              {/* Courses Grid List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {db.courses?.map((course, idx) => (
                  <div key={course.id || idx} className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {course.duration}
                        </span>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => setEditingCourse(course)}
                            className="p-1.5 rounded-lg hover:bg-foreground/10 text-muted-text hover:text-primary transition-colors"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {
                              const filtered = db.courses.filter((_, i) => i !== idx);
                              const updated = { ...db, courses: filtered };
                              setDb(updated);
                              handleSaveDB(updated);
                            }}
                            className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-text hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-foreground mt-2">{course.title}</h3>
                      <p className="text-xs text-muted-text mt-1 line-clamp-2">{course.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-card-border flex items-center justify-between text-[11px] text-foreground/70">
                      <span>Suitable: {course.suitableFor}</span>
                      <span className="font-semibold text-primary">/courses/{course.slug}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Course Editor Modal */}
              {editingCourse && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                  <div className="glass max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 rounded-3xl border-card-border space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-foreground">Edit Course: {editingCourse.title}</h3>
                      <button onClick={() => setEditingCourse(null)} className="p-2 rounded-full hover:bg-foreground/10">
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">Course Title</label>
                      <input
                        type="text"
                        value={editingCourse.title}
                        onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">URL Slug</label>
                      <input
                        type="text"
                        value={editingCourse.slug}
                        onChange={(e) => setEditingCourse({ ...editingCourse, slug: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold mb-1">Course Description</label>
                      <textarea
                        rows={3}
                        value={editingCourse.description}
                        onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold mb-1">Duration</label>
                        <input
                          type="text"
                          value={editingCourse.duration}
                          onChange={(e) => setEditingCourse({ ...editingCourse, duration: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-1">Suitable For</label>
                        <input
                          type="text"
                          value={editingCourse.suitableFor}
                          onChange={(e) => setEditingCourse({ ...editingCourse, suitableFor: e.target.value })}
                          className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button onClick={() => setEditingCourse(null)} className="px-4 py-2 text-xs font-semibold rounded-xl bg-foreground/10">
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          const updatedCourses = db.courses.map(c => c.id === editingCourse.id ? editingCourse : c);
                          const updated = { ...db, courses: updatedCourses };
                          setDb(updated);
                          setEditingCourse(null);
                          handleSaveDB(updated);
                        }}
                        className="px-5 py-2 text-xs font-semibold rounded-xl bg-primary text-white"
                      >
                        Save Course Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: PRICING PLANS */}
          {activeTab === 'pricing' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Pricing Plans Manager</h1>
                  <p className="text-xs text-muted-text mt-1">Configure pricing tiers, class frequencies, and feature lists.</p>
                </div>
                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Pricing</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {db.pricing?.map((plan, idx) => (
                  <div key={plan.id || idx} className={`glass p-6 rounded-3xl border flex flex-col justify-between ${plan.isPopular ? 'border-primary shadow-xl shadow-primary/5' : 'border-card-border'}`}>
                    <div>
                      {plan.isPopular && (
                        <span className="text-[10px] font-bold text-white bg-primary px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">
                          Most Popular
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-foreground">{plan.title}</h3>
                      <div className="mt-2 flex items-baseline">
                        <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
                      </div>
                      <p className="text-xs text-muted-text mt-1">{plan.frequency}</p>

                      <div className="h-px bg-card-border my-4" />

                      <ul className="space-y-2">
                        {plan.features?.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-2 text-xs text-foreground/80">
                            <Check className="h-3.5 w-3.5 text-secondary shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 flex items-center space-x-2">
                      <button
                        onClick={() => setEditingPricing(plan)}
                        className="flex-1 py-2 text-xs font-semibold rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-all"
                      >
                        Edit Plan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: TUTORS FACULTY */}
          {activeTab === 'tutors' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Tutor Roster CMS</h1>
                  <p className="text-xs text-muted-text mt-1">Manage certified male and female Quran instructors.</p>
                </div>
                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Tutors List</span>
                </button>
              </div>

              {/* Tutors List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {db.tutors?.map((tutor, idx) => (
                  <div key={tutor.id || idx} className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3">
                        <img src={tutor.photo} alt={tutor.name} className="h-12 w-12 rounded-full object-cover border border-card-border" />
                        <div>
                          <h3 className="text-sm font-bold text-foreground">{tutor.name}</h3>
                          <span className="text-[10px] text-primary font-semibold">{tutor.experience} Experience</span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-1.5 text-xs text-foreground/80">
                        <p><strong>Languages:</strong> {tutor.languages?.join(', ')}</p>
                        <p><strong>Specialization:</strong> {tutor.specialization}</p>
                        <p className="capitalize"><strong>Gender:</strong> {tutor.gender}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-card-border flex items-center justify-between">
                      <button
                        onClick={() => {
                          const updatedTutors = db.tutors.filter((_, i) => i !== idx);
                          const updated = { ...db, tutors: updatedTutors };
                          setDb(updated);
                          handleSaveDB(updated);
                        }}
                        className="text-xs font-semibold text-red-500 hover:underline"
                      >
                        Remove Tutor
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: TESTIMONIALS MANAGER */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Parent Reviews & Testimonials ({db.testimonials?.length || 0})</h1>
                  <p className="text-xs text-muted-text mt-1">Manage parent reviews and student feedback displayed on homepage.</p>
                </div>
                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Testimonials</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {db.testimonials?.map((t, idx) => (
                  <div key={t.id || idx} className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">
                          {'★'.repeat(t.rating)} ({t.rating}/5)
                        </span>
                        <button
                          onClick={() => {
                            const filtered = db.testimonials.filter((_, i) => i !== idx);
                            const updated = { ...db, testimonials: filtered };
                            setDb(updated);
                            handleSaveDB(updated);
                          }}
                          className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-text hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-foreground/80 italic mt-3">"{t.text}"</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-card-border flex items-center justify-between text-[11px]">
                      <div>
                        <p className="font-bold text-foreground">{t.name}</p>
                        <p className="text-muted-text">{t.relation}</p>
                      </div>
                      <span className="font-semibold text-primary">{t.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: FAQ DATABASE */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">FAQ Management ({db.faqs?.length || 0})</h1>
                  <p className="text-xs text-muted-text mt-1">Manage 50+ website FAQs sliced across homepage and View All pages.</p>
                </div>
                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save FAQs</span>
                </button>
              </div>

              {/* FAQ Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-3 h-4 w-4 text-muted-text" />
                <input
                  type="text"
                  placeholder="Search FAQ questions..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* FAQ Accordion List */}
              <div className="space-y-3">
                {db.faqs
                  ?.filter(f => f.question.toLowerCase().includes(faqSearch.toLowerCase()))
                  .slice(0, 15)
                  .map((faq, idx) => (
                    <div key={faq.id || idx} className="glass p-4 rounded-2xl border-card-border flex flex-col space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full uppercase">
                          #{idx + 1} - {faq.category}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-foreground">{faq.question}</h3>
                      <p className="text-xs text-muted-text leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB 8: BLOG POSTS */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Blog Articles CMS ({db.blogs?.length || 0})</h1>
                  <p className="text-xs text-muted-text mt-1">Publish, edit, or delete articles and guides.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const blog: BlogData = {
                        id: `blog-${Date.now()}`,
                        title: newBlog.title || 'New Quran Learning Article',
                        category: newBlog.category || 'Quran Tips',
                        description: newBlog.description || 'Comprehensive guide on Quran recitation.',
                        readTime: newBlog.readTime || '5 min read',
                        slug: newBlog.slug || `article-${Date.now()}`
                      };
                      const updated = { ...db, blogs: [blog, ...(db.blogs || [])] };
                      setDb(updated);
                      setNewBlog({ title: '', category: 'Quran Learning', description: '', readTime: '5 min read', slug: '' });
                      handleSaveDB(updated);
                    }}
                    className="flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-secondary text-white text-xs font-semibold shadow-md"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Article</span>
                  </button>
                  <button
                    onClick={() => handleSaveDB(db)}
                    disabled={loading}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save Blogs</span>
                  </button>
                </div>
              </div>

              {/* Quick Add Form */}
              <div className="glass p-5 rounded-3xl border-card-border space-y-3">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Quick Create New Blog</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <input
                    type="text"
                    placeholder="Article Title"
                    value={newBlog.title}
                    onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Category (e.g. Tajweed)"
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Read Time (e.g. 5 min read)"
                    value={newBlog.readTime}
                    onChange={(e) => setNewBlog({ ...newBlog, readTime: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                  />
                  <input
                    type="text"
                    placeholder="URL Slug (e.g. tajweed-tips-kids)"
                    value={newBlog.slug}
                    onChange={(e) => setNewBlog({ ...newBlog, slug: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                  />
                </div>
                <textarea
                  rows={2}
                  placeholder="Short description snippet..."
                  value={newBlog.description}
                  onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs"
                />
              </div>

              {/* Blog Cards List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {db.blogs?.map((blog, idx) => (
                  <div key={blog.id || idx} className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase">
                          {blog.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => {
                              const filtered = db.blogs.filter((_, i) => i !== idx);
                              const updated = { ...db, blogs: filtered };
                              setDb(updated);
                              handleSaveDB(updated);
                            }}
                            className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-text hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-foreground mt-2">{blog.title}</h3>
                      <p className="text-xs text-muted-text mt-1 line-clamp-2">{blog.description}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-card-border flex items-center justify-between text-[11px] text-muted-text">
                      <span>{blog.readTime}</span>
                      <span className="font-semibold text-secondary">/blog/{blog.slug}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 9: CONTACT INFO */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Contact Information Manager</h1>
                  <p className="text-xs text-muted-text mt-1">Update primary academy email, phone number, WhatsApp link, and physical office address.</p>
                </div>
                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Contact Info</span>
                </button>
              </div>

              <div className="glass p-6 rounded-3xl border-card-border space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5">Official Support Email</label>
                    <input
                      type="email"
                      value={db.contact?.email || ''}
                      onChange={(e) => setDb({ ...db, contact: { ...db.contact, email: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1.5">Phone Number</label>
                    <input
                      type="text"
                      value={db.contact?.phone || ''}
                      onChange={(e) => setDb({ ...db, contact: { ...db.contact, phone: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5">WhatsApp Direct Number / Link</label>
                    <input
                      type="text"
                      value={db.contact?.whatsapp || ''}
                      onChange={(e) => setDb({ ...db, contact: { ...db.contact, whatsapp: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1.5">Academy HQ Address / Location</label>
                    <input
                      type="text"
                      value={db.contact?.location || ''}
                      onChange={(e) => setDb({ ...db, contact: { ...db.contact, location: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5">Footer About Text</label>
                  <textarea
                    rows={3}
                    value={db.contact?.aboutText || ''}
                    onChange={(e) => setDb({ ...db, contact: { ...db.contact, aboutText: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 10: SEO METADATA */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Global SEO Metadata</h1>
                  <p className="text-xs text-muted-text mt-1">Configure search index tags, meta descriptions, and social preview cards.</p>
                </div>
                <button
                  onClick={() => handleSaveDB({ ...db, seo: seoData })}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Meta Tags</span>
                </button>
              </div>

              <div className="glass p-6 rounded-3xl border-card-border space-y-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Global Meta Title</label>
                  <input
                    type="text"
                    value={seoData.siteTitle}
                    onChange={(e) => setDb({ ...db, seo: { ...seoData, siteTitle: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Meta Description</label>
                  <textarea
                    rows={3}
                    value={seoData.metaDescription}
                    onChange={(e) => setDb({ ...db, seo: { ...seoData, metaDescription: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Focus Keywords (comma separated)</label>
                  <input
                    type="text"
                    value={seoData.keywords?.join(', ')}
                    onChange={(e) => setDb({ ...db, seo: { ...seoData, keywords: e.target.value.split(',').map(s => s.trim()) } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1">Canonical URL</label>
                  <input
                    type="text"
                    value={seoData.canonicalUrl}
                    onChange={(e) => setDb({ ...db, seo: { ...seoData, canonicalUrl: e.target.value } })}
                    className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-xs"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 11: IMAGE ASSET & MEDIA MANAGER */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Image Asset & Media Manager</h1>
                  <p className="text-xs text-muted-text mt-1">Preview logos, favicons, course covers, and tutor profile pictures.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Brand Logo', url: '/logo.jpg', desc: 'Main Header & Footer Brand Emblem' },
                  { title: 'Transparent Logo', url: '/logo_transparent.png', desc: 'Favicon & Transparent Overlay Logo' },
                  { title: 'Mission Slide Image', url: '/mission-slide.png', desc: 'Homepage Our Mission Main Cover' },
                  { title: 'Qari Bilal Photo', url: '/tutor-bilal.jpg', desc: 'Tutor Profile Photo' },
                  { title: 'Sister Fatima Photo', url: '/tutor-female-icon-3.jpg', desc: 'Female Scholar Profile Photo' },
                  { title: 'Qari Khaled Photo', url: '/tutor-khaled.jpg', desc: 'Male Scholar Profile Photo' },
                ].map((asset, idx) => (
                  <div key={idx} className="glass p-5 rounded-3xl border-card-border space-y-3">
                    <div className="h-40 w-full rounded-2xl bg-foreground/5 overflow-hidden flex items-center justify-center border border-card-border relative">
                      <img src={asset.url} alt={asset.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-foreground">{asset.title}</h3>
                      <p className="text-[11px] text-muted-text mt-0.5">{asset.desc}</p>
                      <code className="block mt-2 text-[10px] bg-foreground/5 px-2 py-1 rounded border border-card-border text-primary select-all">
                        {asset.url}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 12: SETTINGS & SUPABASE */}
          {activeTab === 'settings' && userRole === 'super_admin' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Settings & Supabase CMS Status</h1>
                  <p className="text-xs text-muted-text mt-1">Manage database cloud synchronizations and global environment settings.</p>
                </div>
              </div>

              {/* Supabase Status Card */}
              <div className="glass p-6 rounded-3xl border-card-border space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Supabase Dual-Engine Database Mode</h3>
                    <p className="text-xs text-muted-text">Real-time sync between local cached JSON data and Supabase cloud storage.</p>
                  </div>
                </div>

                <div className="bg-foreground/5 p-4 rounded-2xl border border-card-border text-xs space-y-2">
                  <p className="flex items-center justify-between">
                    <span className="font-semibold">Cloud Sync Engine Status:</span>
                    <span className="text-emerald-500 font-bold flex items-center space-x-1">
                      <Check className="h-4 w-4" />
                      <span>Active & Configured</span>
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    <span className="font-semibold">Vercel Read-Only File Protection:</span>
                    <span className="text-primary font-bold">Enabled (Graceful memory fallback)</span>
                  </p>
                </div>

                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-primary text-white text-xs font-semibold shadow-md shadow-primary/20 hover:bg-primary-hover transition-all"
                >
                  Force Full Cloud Re-Sync
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
