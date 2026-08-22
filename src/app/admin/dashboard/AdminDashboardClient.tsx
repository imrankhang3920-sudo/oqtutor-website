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
  SettingsData,
  CustomPageData,
  HeaderNavData,
  FooterNavData,
  MediaItemData,
  PageBlock
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
  Award,
  FileCode,
  Layout,
  Eye
} from 'lucide-react';
import { siteConfig } from '@/lib/structuredData';
import { motion, AnimatePresence } from 'framer-motion';
import MediaLibrary from '@/components/admin/MediaLibrary';
import BlockEditor from '@/components/admin/BlockEditor';
import ImagePickerModal from '@/components/admin/ImagePickerModal';

type Tab = 
  | 'overview' 
  | 'pages'
  | 'header_footer'
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
  const [editingPage, setEditingPage] = useState<CustomPageData | null>(null);
  const [editingBlog, setEditingBlog] = useState<BlogData | null>(null);

  // New CMS Page state
  const [newPage, setNewPage] = useState<{ title: string; slug: string; metaTitle: string; metaDescription: string }>({
    title: '',
    slug: '',
    metaTitle: '',
    metaDescription: '',
  });

  // Header & Footer state setup
  const headerNavState: HeaderNavData = db.headerNav || {
    logoUrl: '/logo.jpg',
    ctaText: 'Book Free Trial',
    ctaLink: '/book-free-trial',
    menuItems: [
      { id: '1', label: 'Home', url: '/' },
      { id: '2', label: 'Courses', url: '/courses' },
      { id: '3', label: 'How It Works', url: '/how-it-works' },
      { id: '4', label: 'Pricing', url: '/pricing' },
      { id: '5', label: 'Tutors', url: '/tutors' },
      { id: '6', label: 'About Us', url: '/about' },
      { id: '7', label: 'FAQ', url: '/faq' },
      { id: '8', label: 'Blog', url: '/blog' },
      { id: '9', label: 'Contact', url: '/contact' },
    ],
  };

  const footerNavState: FooterNavData = db.footerNav || {
    aboutText: 'OQTutor provides personalized one-to-one online Quran classes with certified male and female tutors for kids and adults worldwide.',
    copyrightText: `© ${new Date().getFullYear()} OQTutor. All rights reserved.`,
    columns: [],
    socialLinks: [
      { platform: 'facebook', url: siteConfig.social.facebook },
      { platform: 'instagram', url: siteConfig.social.instagram },
    ],
  };

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
    canonicalUrl: 'https://www.oqtutor.com',
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
    { id: 'pages', label: 'Pages (CMS)', icon: FileCode },
    { id: 'header_footer', label: 'Header & Footer', icon: Layout },
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

          {/* TAB: PAGES (CMS) */}
          {activeTab === 'pages' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Custom Pages CMS ({db.pages?.length || 0})</h1>
                  <p className="text-xs text-muted-text mt-1">Create, edit, publish visual block-based pages with clean URLs.</p>
                </div>

                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>{loading ? 'Saving...' : 'Save All Pages'}</span>
                </button>
              </div>

              {/* Create New Page Card */}
              <div className="glass p-5 rounded-3xl border-card-border space-y-4">
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center space-x-2">
                  <Plus className="h-4 w-4 text-primary" />
                  <span>Create New Custom Page</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-muted-text font-bold uppercase">Page Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Tajweed Learning Guide"
                      value={newPage.title}
                      onChange={(e) => {
                        const title = e.target.value;
                        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                        setNewPage({ ...newPage, title, slug: newPage.slug || slug });
                      }}
                      className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs font-semibold text-foreground"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-muted-text font-bold uppercase">URL Slug</label>
                    <input
                      type="text"
                      placeholder="e.g. tajweed-learning-guide"
                      value={newPage.slug}
                      onChange={(e) => setNewPage({ ...newPage, slug: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs font-mono text-foreground"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-muted-text font-bold uppercase">Meta Title (SEO)</label>
                    <input
                      type="text"
                      placeholder="e.g. Tajweed Guide | Learn Quran Tajweed Rules Online"
                      value={newPage.metaTitle}
                      onChange={(e) => setNewPage({ ...newPage, metaTitle: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs text-foreground"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-muted-text font-bold uppercase">Meta Description (SEO)</label>
                    <input
                      type="text"
                      placeholder="e.g. Complete guide on Tajweed rules for online Quran students."
                      value={newPage.metaDescription}
                      onChange={(e) => setNewPage({ ...newPage, metaDescription: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs text-foreground"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!newPage.title || !newPage.slug) {
                      showMsg('Please provide a Page Title and URL Slug', 'error');
                      return;
                    }
                    const pageObj: CustomPageData = {
                      id: `page_${Date.now()}`,
                      title: newPage.title,
                      slug: newPage.slug.toLowerCase().replace(/[^a-z0-9-]/g, ''),
                      metaTitle: newPage.metaTitle || newPage.title,
                      metaDescription: newPage.metaDescription || '',
                      isPublished: true,
                      blocks: [
                        {
                          id: `b_${Date.now()}`,
                          type: 'heading',
                          content: { text: newPage.title, level: 1, align: 'left' },
                        },
                        {
                          id: `b_${Date.now() + 1}`,
                          type: 'paragraph',
                          content: { text: 'Welcome to this page. Add paragraph content using the block editor.' },
                        },
                      ],
                      createdAt: new Date().toISOString(),
                      updatedAt: new Date().toISOString(),
                    };
                    const updated = { ...db, pages: [pageObj, ...(db.pages || [])] };
                    setDb(updated);
                    setNewPage({ title: '', slug: '', metaTitle: '', metaDescription: '' });
                    setEditingPage(pageObj);
                    handleSaveDB(updated);
                  }}
                  className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-md transition-all"
                >
                  Create & Launch Block Editor
                </button>
              </div>

              {/* Pages Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(!db.pages || db.pages.length === 0) ? (
                  <div className="col-span-full py-8 text-center border-2 border-dashed border-card-border rounded-3xl">
                    <FileCode className="mx-auto h-10 w-10 text-muted-text/40 mb-2" />
                    <p className="text-xs text-muted-text font-medium">No custom pages created yet.</p>
                  </div>
                ) : (
                  db.pages.map((pg, idx) => (
                    <div key={pg.id || idx} className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase ${pg.isPublished ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
                            {pg.isPublished ? 'Published' : 'Draft'}
                          </span>

                          <div className="flex items-center space-x-1">
                            <Link
                              href={`/${pg.slug}`}
                              target="_blank"
                              className="p-1.5 rounded-lg hover:bg-foreground/5 text-muted-text hover:text-primary transition-colors"
                              title="View Page Live"
                            >
                              <Eye className="h-4 w-4" />
                            </Link>

                            <button
                              onClick={() => setEditingPage(pg)}
                              className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-text hover:text-primary transition-colors"
                              title="Edit Blocks"
                            >
                              <Edit2 className="h-4 w-4" />
                            </button>

                            <button
                              onClick={() => {
                                if (confirm(`Are you sure you want to delete page "${pg.title}"?`)) {
                                  const filtered = (db.pages || []).filter((_, i) => i !== idx);
                                  const updated = { ...db, pages: filtered };
                                  setDb(updated);
                                  handleSaveDB(updated);
                                }
                              }}
                              className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-text hover:text-red-500 transition-colors"
                              title="Delete Page"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <h3 className="text-sm font-bold text-foreground mt-2">{pg.title}</h3>
                        <p className="text-xs font-mono text-secondary mt-0.5">/{pg.slug}</p>
                        <p className="text-xs text-muted-text mt-1 line-clamp-2">{pg.metaDescription || 'No description set.'}</p>
                      </div>

                      <div className="pt-3 border-t border-card-border flex items-center justify-between text-[11px] text-muted-text">
                        <span>{pg.blocks?.length || 0} Content Blocks</span>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedPages = (db.pages || []).map((p) =>
                              p.id === pg.id ? { ...p, isPublished: !p.isPublished } : p
                            );
                            const updated = { ...db, pages: updatedPages };
                            setDb(updated);
                            handleSaveDB(updated);
                          }}
                          className="text-xs font-semibold text-primary hover:underline"
                        >
                          {pg.isPublished ? 'Unpublish' : 'Publish Live'}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB: HEADER & FOOTER EDITOR */}
          {activeTab === 'header_footer' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Header & Footer Settings</h1>
                  <p className="text-xs text-muted-text mt-1">Customize website logo, navigation menu links, CTA buttons, and footer copyright.</p>
                </div>

                <button
                  onClick={() => handleSaveDB(db)}
                  disabled={loading}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Header & Footer</span>
                </button>
              </div>

              {/* Header Editor Box */}
              <div className="glass p-6 rounded-3xl border-card-border space-y-6">
                <h2 className="text-base font-bold text-foreground border-b border-card-border pb-3 flex items-center space-x-2">
                  <Layout className="h-5 w-5 text-primary" />
                  <span>Navigation Header Settings</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-foreground">Site Logo Image URL</label>
                    <input
                      type="text"
                      value={headerNavState.logoUrl}
                      onChange={(e) => {
                        const updated = {
                          ...db,
                          headerNav: { ...headerNavState, logoUrl: e.target.value },
                        };
                        setDb(updated);
                      }}
                      className="w-full mt-1 px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs text-foreground"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground">Header CTA Button Text & Link</label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <input
                        type="text"
                        placeholder="Text (e.g. Book Free Trial)"
                        value={headerNavState.ctaText}
                        onChange={(e) => {
                          const updated = {
                            ...db,
                            headerNav: { ...headerNavState, ctaText: e.target.value },
                          };
                          setDb(updated);
                        }}
                        className="px-3 py-1.5 rounded-xl border border-card-border bg-background text-xs"
                      />
                      <input
                        type="text"
                        placeholder="URL (e.g. /book-free-trial)"
                        value={headerNavState.ctaLink}
                        onChange={(e) => {
                          const updated = {
                            ...db,
                            headerNav: { ...headerNavState, ctaLink: e.target.value },
                          };
                          setDb(updated);
                        }}
                        className="px-3 py-1.5 rounded-xl border border-card-border bg-background text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Menu Items Manager */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Navigation Links</h3>
                    <button
                      type="button"
                      onClick={() => {
                        const items = headerNavState.menuItems || [];
                        const newItem = { id: `nav_${Date.now()}`, label: 'New Link', url: '/' };
                        const updated = {
                          ...db,
                          headerNav: { ...headerNavState, menuItems: [...items, newItem] },
                        };
                        setDb(updated);
                      }}
                      className="flex items-center space-x-1 text-xs text-primary font-semibold hover:underline"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add Link</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {(headerNavState.menuItems || []).map((item, idx) => (
                      <div key={item.id || idx} className="flex items-center gap-2 bg-background/60 p-2.5 rounded-xl border border-card-border">
                        <input
                          type="text"
                          value={item.label}
                          onChange={(e) => {
                            const updatedItems = headerNavState.menuItems.map((m, i) =>
                              i === idx ? { ...m, label: e.target.value } : m
                            );
                            setDb({ ...db, headerNav: { ...headerNavState, menuItems: updatedItems } });
                          }}
                          className="px-3 py-1.5 rounded-lg border border-card-border bg-background text-xs font-semibold w-1/3"
                          placeholder="Label"
                        />
                        <input
                          type="text"
                          value={item.url}
                          onChange={(e) => {
                            const updatedItems = headerNavState.menuItems.map((m, i) =>
                              i === idx ? { ...m, url: e.target.value } : m
                            );
                            setDb({ ...db, headerNav: { ...headerNavState, menuItems: updatedItems } });
                          }}
                          className="px-3 py-1.5 rounded-lg border border-card-border bg-background text-xs flex-1 font-mono"
                          placeholder="URL (e.g. /about)"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedItems = headerNavState.menuItems.filter((_, i) => i !== idx);
                            setDb({ ...db, headerNav: { ...headerNavState, menuItems: updatedItems } });
                          }}
                          className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Editor Box */}
              <div className="glass p-6 rounded-3xl border-card-border space-y-6">
                <h2 className="text-base font-bold text-foreground border-b border-card-border pb-3">
                  Footer Settings
                </h2>

                <div>
                  <label className="text-xs font-bold text-foreground">Footer About Text</label>
                  <textarea
                    rows={2}
                    value={footerNavState.aboutText}
                    onChange={(e) => {
                      setDb({ ...db, footerNav: { ...footerNavState, aboutText: e.target.value } });
                    }}
                    className="w-full mt-1 p-3 rounded-xl border border-card-border bg-background text-xs text-foreground"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground">Copyright Text</label>
                  <input
                    type="text"
                    value={footerNavState.copyrightText}
                    onChange={(e) => {
                      setDb({ ...db, footerNav: { ...footerNavState, copyrightText: e.target.value } });
                    }}
                    className="w-full mt-1 px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs text-foreground"
                  />
                </div>
              </div>
            </div>
          )}
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
                  <p className="text-xs text-muted-text mt-1">Publish, edit rich content blocks, cover images, and tags for articles.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      const newArticle: BlogData = {
                        id: `blog-${Date.now()}`,
                        title: newBlog.title || 'New Quran Learning Article',
                        category: newBlog.category || 'Quran Learning Tips',
                        description: newBlog.description || 'Comprehensive guide on Quran recitation.',
                        readTime: newBlog.readTime || '5 min read',
                        slug: newBlog.slug ? newBlog.slug.toLowerCase().replace(/[^a-z0-9-]/g, '') : `article-${Date.now()}`,
                        coverImage: '/blog-kids-usa-1.jpg',
                        isPublished: true,
                        publishedAt: new Date().toISOString(),
                        blocks: [
                          {
                            id: `b_${Date.now()}`,
                            type: 'heading',
                            content: { text: newBlog.title || 'New Quran Learning Article', level: 1, align: 'left' },
                          },
                          {
                            id: `b_${Date.now() + 1}`,
                            type: 'paragraph',
                            content: { text: newBlog.description || 'Enter article body content here using the block editor.' },
                          },
                        ],
                      };
                      const updated = { ...db, blogs: [newArticle, ...(db.blogs || [])] };
                      setDb(updated);
                      setNewBlog({ title: '', category: 'Quran Learning Tips', description: '', readTime: '5 min read', slug: '' });
                      setEditingBlog(newArticle);
                      handleSaveDB(updated);
                    }}
                    className="flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-secondary text-white text-xs font-semibold shadow-md"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add & Edit Article</span>
                  </button>
                  <button
                    onClick={() => handleSaveDB(db)}
                    disabled={loading}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 transition-all"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save All Blogs</span>
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
                    onChange={(e) => {
                      const title = e.target.value;
                      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                      setNewBlog({ ...newBlog, title, slug: newBlog.slug || slug });
                    }}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs font-semibold text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Category (e.g. Tajweed Guides)"
                    value={newBlog.category}
                    onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Read Time (e.g. 5 min read)"
                    value={newBlog.readTime}
                    onChange={(e) => setNewBlog({ ...newBlog, readTime: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs text-foreground"
                  />
                  <input
                    type="text"
                    placeholder="URL Slug (e.g. tajweed-tips-kids)"
                    value={newBlog.slug}
                    onChange={(e) => setNewBlog({ ...newBlog, slug: e.target.value })}
                    className="px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs font-mono text-foreground"
                  />
                </div>
                <textarea
                  rows={2}
                  placeholder="Short description snippet..."
                  value={newBlog.description}
                  onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-card-border bg-background text-xs text-foreground"
                />
              </div>

              {/* Blog Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {db.blogs?.map((blog, idx) => (
                  <div key={blog.id || idx} className="glass p-5 rounded-3xl border-card-border flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase">
                          {blog.category}
                        </span>

                        <div className="flex items-center space-x-1">
                          <Link
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            className="p-1.5 rounded-lg hover:bg-foreground/5 text-muted-text hover:text-primary transition-colors"
                            title="View Live Article"
                          >
                            <Eye className="h-4 w-4" />
                          </Link>

                          <button
                            onClick={() => setEditingBlog(blog)}
                            className="p-1.5 rounded-lg hover:bg-primary/10 text-muted-text hover:text-primary transition-colors"
                            title="Edit Full Article Blocks"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>

                          <button
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete article "${blog.title}"?`)) {
                                const filtered = db.blogs.filter((_, i) => i !== idx);
                                const updated = { ...db, blogs: filtered };
                                setDb(updated);
                                handleSaveDB(updated);
                              }
                            }}
                            className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-text hover:text-red-500 transition-colors"
                            title="Delete Article"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-foreground mt-2">{blog.title}</h3>
                      <p className="text-xs text-muted-text line-clamp-2 mt-1">{blog.description}</p>
                    </div>

                    <div className="pt-3 border-t border-card-border flex items-center justify-between text-[11px] text-muted-text">
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

          {/* TAB: IMAGE ASSET & MEDIA MANAGER */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-extrabold text-foreground">Media Library & Image Manager</h1>
                  <p className="text-xs text-muted-text mt-1">Upload, search, copy URLs, or remove image assets across your website.</p>
                </div>
              </div>

              <MediaLibrary
                mediaList={db.mediaLibrary || []}
                onMediaUpdated={(updated) => {
                  const updatedDB = { ...db, mediaLibrary: updated };
                  setDb(updatedDB);
                  handleSaveDB(updatedDB);
                }}
              />
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

      {/* CMS Page Block Editor Drawer / Modal */}
      {editingPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-background border border-card-border rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-card-border flex items-center justify-between bg-card-bg">
              <div className="flex items-center space-x-3">
                <FileCode className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-base font-bold text-foreground">Block Editor — {editingPage.title}</h3>
                  <p className="text-xs font-mono text-secondary">/{editingPage.slug}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Link
                  href={`/${editingPage.slug}`}
                  target="_blank"
                  className="px-3 py-1.5 bg-foreground/10 text-foreground hover:text-primary text-xs font-semibold rounded-xl flex items-center space-x-1"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Preview Live</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    const updatedPages = (db.pages || []).map((p) =>
                      p.id === editingPage.id ? editingPage : p
                    );
                    const updated = { ...db, pages: updatedPages };
                    setDb(updated);
                    setEditingPage(null);
                    handleSaveDB(updated);
                  }}
                  className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-md"
                >
                  Save & Close
                </button>

                <button
                  onClick={() => setEditingPage(null)}
                  className="p-1.5 rounded-full hover:bg-foreground/10 text-muted-text hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* Page Meta settings */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-card-bg p-4 rounded-2xl border border-card-border">
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase">Page Title</label>
                  <input
                    type="text"
                    value={editingPage.title}
                    onChange={(e) => setEditingPage({ ...editingPage, title: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase">URL Slug</label>
                  <input
                    type="text"
                    value={editingPage.slug}
                    onChange={(e) => setEditingPage({ ...editingPage, slug: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase">SEO Meta Title</label>
                  <input
                    type="text"
                    value={editingPage.metaTitle}
                    onChange={(e) => setEditingPage({ ...editingPage, metaTitle: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                </div>
              </div>

              {/* Block Editor */}
              <BlockEditor
                blocks={editingPage.blocks || []}
                onChange={(updatedBlocks) => setEditingPage({ ...editingPage, blocks: updatedBlocks })}
                mediaList={db.mediaLibrary || []}
                onMediaUpdated={(updatedMedia) => setDb({ ...db, mediaLibrary: updatedMedia })}
              />
            </div>
          </div>
        </div>
      )}

      {/* Blog Article Block Editor Drawer / Modal */}
      {editingBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-background border border-card-border rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-card-border flex items-center justify-between bg-card-bg">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-base font-bold text-foreground">Article Editor — {editingBlog.title}</h3>
                  <p className="text-xs font-mono text-secondary">/blog/{editingBlog.slug}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Link
                  href={`/blog/${editingBlog.slug}`}
                  target="_blank"
                  className="px-3 py-1.5 bg-foreground/10 text-foreground hover:text-primary text-xs font-semibold rounded-xl flex items-center space-x-1"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Preview Live</span>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    const updatedBlogs = (db.blogs || []).map((b) =>
                      b.id === editingBlog.id ? editingBlog : b
                    );
                    const updated = { ...db, blogs: updatedBlogs };
                    setDb(updated);
                    setEditingBlog(null);
                    handleSaveDB(updated);
                  }}
                  className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-md"
                >
                  Save & Close
                </button>

                <button
                  onClick={() => setEditingBlog(null)}
                  className="p-1.5 rounded-full hover:bg-foreground/10 text-muted-text hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* Article Meta settings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-card-bg p-4 rounded-2xl border border-card-border">
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase">Article Title</label>
                  <input
                    type="text"
                    value={editingBlog.title}
                    onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground font-bold"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase">URL Slug</label>
                  <input
                    type="text"
                    value={editingBlog.slug}
                    onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground font-mono"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase">Category</label>
                  <input
                    type="text"
                    value={editingBlog.category}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full mt-1 px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-muted-text uppercase">Cover Image URL</label>
                  <input
                    type="text"
                    value={editingBlog.coverImage || ''}
                    onChange={(e) => setEditingBlog({ ...editingBlog, coverImage: e.target.value })}
                    placeholder="e.g. /blog-kids-usa-1.jpg"
                    className="w-full mt-1 px-3 py-1.5 text-xs bg-background border border-card-border rounded-lg text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-muted-text uppercase">Short Description / Snippet</label>
                <textarea
                  rows={2}
                  value={editingBlog.description}
                  onChange={(e) => setEditingBlog({ ...editingBlog, description: e.target.value })}
                  className="w-full mt-1 p-3 text-xs bg-background border border-card-border rounded-xl text-foreground"
                />
              </div>

              {/* Article Content Blocks */}
              <BlockEditor
                blocks={editingBlog.blocks || []}
                onChange={(updatedBlocks) => setEditingBlog({ ...editingBlog, blocks: updatedBlocks })}
                mediaList={db.mediaLibrary || []}
                onMediaUpdated={(updatedMedia) => setDb({ ...db, mediaLibrary: updatedMedia })}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
