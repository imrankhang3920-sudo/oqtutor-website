'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  DatabaseSchema, 
  TutorData, 
  TestimonialData, 
  PricingData,
  FAQData,
  BlogData
} from '@/data/db';
import { 
  Home, 
  DollarSign, 
  Users, 
  MessageSquare, 
  Mail, 
  LogOut, 
  Save, 
  Plus, 
  Trash2, 
  Edit2, 
  X, 
  Check, 
  Globe,
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'homepage' | 'pricing' | 'tutors' | 'testimonials' | 'contact' | 'faqs' | 'blogs';

export default function AdminDashboardClient({ 
  initialData 
}: { 
  initialData: DatabaseSchema 
}) {
  const router = useRouter();
  const [db, setDb] = useState<DatabaseSchema>(initialData);
  const [activeTab, setActiveTab] = useState<Tab>('homepage');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Editor states for Tutors & Testimonials
  const [editingTutor, setEditingTutor] = useState<TutorData | null>(null);
  const [editingTestimonial, setEditingTestimonial] = useState<TestimonialData | null>(null);

  // Quick form state additions
  const [newTutor, setNewTutor] = useState<Partial<TutorData>>({
    name: '',
    experience: '',
    languages: [],
    specialization: '',
    photo: '',
    gender: 'male',
  });
  const [newLanguage, setNewLanguage] = useState('');

  const [newTestimonial, setNewTestimonial] = useState<Partial<TestimonialData>>({
    name: '',
    relation: '',
    location: '',
    rating: 5,
    text: '',
  });

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
        showMsg('Website data saved successfully!');
        router.refresh();
      } else {
        const err = await res.json();
        showMsg(err.error || 'Failed to save data', 'error');
      }
    } catch {
      showMsg('Network error. Failed to save.', 'error');
    } finally {
      setLoading(false);
    }
  };

  // --- TAB: Homepage handlers ---
  const handleHeroChange = (field: string, value: string) => {
    const updated = {
      ...db,
      hero: {
        ...db.hero,
        [field]: value,
      },
    };
    setDb(updated);
  };

  const handleAboutChange = (field: string, value: string) => {
    const updated = {
      ...db,
      about: {
        ...db.about,
        [field]: value,
      },
    };
    setDb(updated);
  };

  const handleMissionChange = (field: string, value: string) => {
    const updated = {
      ...db,
      mission: {
        ...db.mission,
        [field]: value,
      },
    };
    setDb(updated);
  };

  // --- TAB: Pricing handlers ---
  const handlePriceChange = (index: number, field: keyof PricingData, value: any) => {
    const updatedPricing = [...db.pricing];
    updatedPricing[index] = {
      ...updatedPricing[index],
      [field]: value,
    };
    setDb({ ...db, pricing: updatedPricing });
  };

  const handleAddPricingFeature = (index: number, featureText: string) => {
    if (!featureText.trim()) return;
    const updatedPricing = [...db.pricing];
    updatedPricing[index].features.push(featureText.trim());
    setDb({ ...db, pricing: updatedPricing });
  };

  const handleRemovePricingFeature = (index: number, featureIdx: number) => {
    const updatedPricing = [...db.pricing];
    updatedPricing[index].features.splice(featureIdx, 1);
    setDb({ ...db, pricing: updatedPricing });
  };

  // --- TAB: Tutors handlers ---
  const handleSaveTutor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTutor) return;

    const updatedTutors = db.tutors.map(t => 
      t.id === editingTutor.id ? editingTutor : t
    );

    const updatedDB = { ...db, tutors: updatedTutors };
    handleSaveDB(updatedDB);
    setEditingTutor(null);
  };

  const handleAddTutor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTutor.name || !newTutor.experience || !newTutor.specialization) {
      showMsg('Please fill in required fields', 'error');
      return;
    }

    const tutorToAdd: TutorData = {
      id: `tutor-${Date.now()}`,
      name: newTutor.name,
      experience: newTutor.experience,
      languages: newTutor.languages || ['English'],
      specialization: newTutor.specialization,
      photo: newTutor.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
      gender: newTutor.gender as 'male' | 'female',
    };

    const updatedDB = { ...db, tutors: [...db.tutors, tutorToAdd] };
    handleSaveDB(updatedDB);
    
    // Reset form
    setNewTutor({
      name: '',
      experience: '',
      languages: [],
      specialization: '',
      photo: '',
      gender: 'male',
    });
  };

  const handleDeleteTutor = (id: string) => {
    if (!confirm('Are you sure you want to delete this tutor?')) return;
    const updatedTutors = db.tutors.filter(t => t.id !== id);
    const updatedDB = { ...db, tutors: updatedTutors };
    handleSaveDB(updatedDB);
  };

  // --- TAB: Testimonials handlers ---
  const handleSaveTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTestimonial) return;

    const updatedReviews = db.testimonials.map(t => 
      t.id === editingTestimonial.id ? editingTestimonial : t
    );

    const updatedDB = { ...db, testimonials: updatedReviews };
    handleSaveDB(updatedDB);
    setEditingTestimonial(null);
  };

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTestimonial.name || !newTestimonial.relation || !newTestimonial.text) {
      showMsg('Please fill in required fields', 'error');
      return;
    }

    const reviewToAdd: TestimonialData = {
      id: `test-${Date.now()}`,
      name: newTestimonial.name,
      relation: newTestimonial.relation,
      location: newTestimonial.location || 'Global',
      rating: Number(newTestimonial.rating || 5),
      text: newTestimonial.text,
    };

    const updatedDB = { ...db, testimonials: [...db.testimonials, reviewToAdd] };
    handleSaveDB(updatedDB);

    // Reset form
    setNewTestimonial({
      name: '',
      relation: '',
      location: '',
      rating: 5,
      text: '',
    });
  };

  const handleDeleteTestimonial = (id: string) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;
    const updatedReviews = db.testimonials.filter(t => t.id !== id);
    const updatedDB = { ...db, testimonials: updatedReviews };
    handleSaveDB(updatedDB);
  };

  // --- TAB: Contact handlers ---
  const handleContactChange = (field: string, value: string) => {
    const updated = {
      ...db,
      contact: {
        ...db.contact,
        [field]: value,
      },
    };
    setDb(updated);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-foreground/[0.02] border-r border-card-border p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <span className="text-xl font-bold tracking-tight text-primary">
              OQ<span className="text-secondary">Tutor</span>
            </span>
            <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">Admin</span>
          </div>

          <nav className="space-y-1.5">
            {[
              { id: 'homepage', label: 'Homepage Content', icon: Home },
              { id: 'pricing', label: 'Pricing & Plans', icon: DollarSign },
              { id: 'tutors', label: 'Manage Tutors', icon: Users },
              { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
              { id: 'contact', label: 'Contact Settings', icon: Mail },
              { id: 'faqs', label: 'Manage FAQs', icon: HelpCircle },
              { id: 'blogs', label: 'Manage Blogs', icon: BookOpen },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as Tab);
                    setEditingTutor(null);
                    setEditingTestimonial(null);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md shadow-primary/15'
                      : 'text-foreground/80 hover:bg-foreground/5 hover:text-primary'
                  }`}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-card-border mt-8 pt-6 space-y-4">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-full border border-card-border hover:bg-foreground/5 text-sm font-semibold transition-colors"
          >
            <span>View Live Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 sm:p-10 max-w-6xl overflow-x-hidden">
        
        {/* Status notification */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-6 p-4 rounded-xl text-center text-sm font-semibold shadow-lg border ${
                message.type === 'success'
                  ? 'bg-primary border-primary-light/10 text-white'
                  : 'bg-red-500 border-red-400/10 text-white'
              }`}
            >
              {message.text}
            </motion.div>
          )}
        </AnimatePresence>

        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground capitalize">
              {activeTab === 'homepage' ? 'Hero & Core Content' : `${activeTab} Management`}
            </h1>
            <p className="text-xs text-muted-text mt-1">
              Configure and edit options displayed on the live platform.
            </p>
          </div>
          {activeTab !== 'tutors' && activeTab !== 'testimonials' && (
            <button
              onClick={() => handleSaveDB(db)}
              disabled={loading}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-lg disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              <span>{loading ? 'Saving...' : 'Save Configuration'}</span>
            </button>
          )}
        </header>

        {/* Tab Components */}
        <div className="glass p-6 sm:p-8 rounded-3xl border-card-border shadow-md">
          
          {/* TAB: HOMEPAGE */}
          {activeTab === 'homepage' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-card-border pb-3">Hero Section</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Hero Title
                  </label>
                  <input
                    type="text"
                    value={db.hero.title}
                    onChange={(e) => handleHeroChange('title', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Hero Subtitle
                  </label>
                  <textarea
                    rows={3}
                    value={db.hero.subtitle}
                    onChange={(e) => handleHeroChange('subtitle', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      CTA Button Text
                    </label>
                    <input
                      type="text"
                      value={db.hero.ctaText}
                      onChange={(e) => handleHeroChange('ctaText', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      CTA Link Anchor
                    </label>
                    <input
                      type="text"
                      value={db.hero.ctaLink}
                      onChange={(e) => handleHeroChange('ctaLink', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      WhatsApp Display Text
                    </label>
                    <input
                      type="text"
                      value={db.hero.whatsappText}
                      onChange={(e) => handleHeroChange('whatsappText', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      WhatsApp Number (incl. country code)
                    </label>
                    <input
                      type="text"
                      value={db.hero.whatsappNumber}
                      onChange={(e) => handleHeroChange('whatsappNumber', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Hero Background Image URL
                  </label>
                  <input
                    type="text"
                    value={db.hero.backgroundImage}
                    onChange={(e) => handleHeroChange('backgroundImage', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <p className="text-[10px] text-muted-text mt-1">Provide a direct high-quality Unsplash or external image address.</p>
                </div>

                {/* About Section Edit */}
                <h3 className="text-lg font-bold text-foreground mt-8 mb-4 border-b border-card-border pb-3">About OQTutor Section</h3>
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    About Section Title
                  </label>
                  <input
                    type="text"
                    value={db.about.title}
                    onChange={(e) => handleAboutChange('title', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    About Section Description Content
                  </label>
                  <textarea
                    rows={4}
                    value={db.about.content}
                    onChange={(e) => handleAboutChange('content', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    About Section Image URL
                  </label>
                  <input
                    type="text"
                    value={db.about.image}
                    onChange={(e) => handleAboutChange('image', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Mission Section Edit */}
                <h3 className="text-lg font-bold text-foreground mt-8 mb-4 border-b border-card-border pb-3">Our Mission Section</h3>
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Mission Section Title
                  </label>
                  <input
                    type="text"
                    value={db.mission.title}
                    onChange={(e) => handleMissionChange('title', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Mission Section Description Content
                  </label>
                  <textarea
                    rows={4}
                    value={db.mission.content}
                    onChange={(e) => handleMissionChange('content', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Mission Section Image URL
                  </label>
                  <input
                    type="text"
                    value={db.mission.image}
                    onChange={(e) => handleMissionChange('image', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: PRICING */}
          {activeTab === 'pricing' && (
            <div className="space-y-10">
              {db.pricing.map((plan, planIdx) => (
                <div key={plan.id} className="border-b border-card-border pb-8 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-bold text-primary">{plan.title} Plan</h3>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`popular-${plan.id}`}
                        checked={plan.isPopular}
                        onChange={(e) => handlePriceChange(planIdx, 'isPopular', e.target.checked)}
                        className="rounded text-primary focus:ring-primary h-4 w-4"
                      />
                      <label htmlFor={`popular-${plan.id}`} className="text-xs font-bold text-foreground/80 cursor-pointer">
                        Highlight as Popular
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                        Monthly Cost ($)
                      </label>
                      <input
                        type="text"
                        value={plan.price}
                        onChange={(e) => handlePriceChange(planIdx, 'price', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                        Frequency
                      </label>
                      <input
                        type="text"
                        value={plan.frequency}
                        onChange={(e) => handlePriceChange(planIdx, 'frequency', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                        Button Label
                      </label>
                      <input
                        type="text"
                        value={plan.ctaText}
                        onChange={(e) => handlePriceChange(planIdx, 'ctaText', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Features list management */}
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Plan Features Checklist
                    </label>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, featIdx) => (
                        <li key={featIdx} className="flex items-center justify-between bg-foreground/[0.02] px-4 py-2 rounded-lg border border-card-border">
                          <span className="text-sm text-foreground">{feature}</span>
                          <button
                            type="button"
                            onClick={() => handleRemovePricingFeature(planIdx, featIdx)}
                            className="text-red-500 hover:text-red-600 p-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* Add Feature input */}
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        id={`new-feature-input-${planIdx}`}
                        placeholder="Add a new feature (e.g. Basic Duas)"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            const val = e.currentTarget.value;
                            handleAddPricingFeature(planIdx, val);
                            e.currentTarget.value = '';
                          }
                        }}
                        className="flex-grow px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          const input = document.getElementById(`new-feature-input-${planIdx}`) as HTMLInputElement;
                          if (input) {
                            handleAddPricingFeature(planIdx, input.value);
                            input.value = '';
                          }
                        }}
                        className="px-4 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB: TUTORS */}
          {activeTab === 'tutors' && (
            <div className="space-y-8">
              
              {/* Tutor Modal Editor */}
              {editingTutor && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-background border border-card-border p-6 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                  >
                    <button 
                      onClick={() => setEditingTutor(null)}
                      className="absolute top-4 right-4 p-1 rounded-full hover:bg-foreground/5 text-muted-text"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <h3 className="text-lg font-bold mb-6 text-foreground">Edit Tutor Details</h3>

                    <form onSubmit={handleSaveTutor} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-foreground/80 mb-1.5">Tutor Name</label>
                        <input
                          type="text"
                          required
                          value={editingTutor.name}
                          onChange={(e) => setEditingTutor({ ...editingTutor, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-foreground/80 mb-1.5">Experience (e.g. 5 Years)</label>
                          <input
                            type="text"
                            required
                            value={editingTutor.experience}
                            onChange={(e) => setEditingTutor({ ...editingTutor, experience: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-foreground/80 mb-1.5">Gender</label>
                          <select
                            value={editingTutor.gender}
                            onChange={(e) => setEditingTutor({ ...editingTutor, gender: e.target.value as any })}
                            className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground/80 mb-1.5">Specialization / Focus</label>
                        <input
                          type="text"
                          required
                          value={editingTutor.specialization}
                          onChange={(e) => setEditingTutor({ ...editingTutor, specialization: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground/80 mb-1.5">Photo URL</label>
                        <input
                          type="text"
                          required
                          value={editingTutor.photo}
                          onChange={(e) => setEditingTutor({ ...editingTutor, photo: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                        />
                      </div>

                      {/* Languages Editor inside modal */}
                      <div>
                        <label className="block text-xs font-bold text-foreground/80 mb-1.5">Languages (comma separated)</label>
                        <input
                          type="text"
                          value={editingTutor.languages.join(', ')}
                          onChange={(e) => setEditingTutor({ 
                            ...editingTutor, 
                            languages: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
                          })}
                          className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                          placeholder="English, Arabic, Urdu"
                        />
                      </div>

                      <div className="flex space-x-2 pt-4">
                        <button
                          type="submit"
                          className="flex-grow py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold shadow-md shadow-primary/10"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingTutor(null)}
                          className="px-6 py-3 border border-card-border rounded-xl text-xs font-bold text-foreground"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              )}

              {/* Tutors Grid / List */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <h3 className="text-base font-bold text-foreground">Current Tutors ({db.tutors.length})</h3>
                {db.tutors.map((tutor) => (
                  <div 
                    key={tutor.id} 
                    className="flex items-center justify-between bg-foreground/[0.02] border border-card-border p-4 rounded-2xl gap-4 flex-wrap sm:flex-nowrap"
                  >
                    <div className="flex items-center space-x-4">
                      <img 
                        src={tutor.photo} 
                        alt={tutor.name} 
                        className="h-12 w-12 rounded-full object-cover shrink-0" 
                      />
                      <div>
                        <h4 className="font-bold text-sm text-foreground">{tutor.name}</h4>
                        <p className="text-[10px] text-muted-text mt-0.5">
                          {tutor.experience} Experience | Gender: <span className="capitalize">{tutor.gender}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setEditingTutor(tutor)}
                        className="p-2 border border-card-border text-foreground rounded-lg hover:bg-foreground/5 transition-colors"
                        title="Edit Tutor"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteTutor(tutor.id)}
                        className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                        title="Delete Tutor"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Tutor Form */}
              <div className="border-t border-card-border pt-8">
                <h3 className="text-base font-bold text-foreground mb-4">Add New Tutor</h3>
                <form onSubmit={handleAddTutor} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Tutor Name *</label>
                      <input
                        type="text"
                        required
                        value={newTutor.name}
                        onChange={(e) => setNewTutor({ ...newTutor, name: e.target.value })}
                        placeholder="e.g. Dr. Khalid Al-Faisal"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Experience *</label>
                      <input
                        type="text"
                        required
                        value={newTutor.experience}
                        onChange={(e) => setNewTutor({ ...newTutor, experience: e.target.value })}
                        placeholder="e.g. 7 Years"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Gender</label>
                      <select
                        value={newTutor.gender}
                        onChange={(e) => setNewTutor({ ...newTutor, gender: e.target.value as any })}
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Specialization *</label>
                      <input
                        type="text"
                        required
                        value={newTutor.specialization}
                        onChange={(e) => setNewTutor({ ...newTutor, specialization: e.target.value })}
                        placeholder="e.g. Hifz and Tajweed rules"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Photo URL</label>
                    <input
                      type="text"
                      value={newTutor.photo}
                      onChange={(e) => setNewTutor({ ...newTutor, photo: e.target.value })}
                      placeholder="e.g. https://images.unsplash.com/..."
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Languages text lists */}
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Languages Taught</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(newTutor.languages || []).map((lang, idx) => (
                        <span key={idx} className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                          <span>{lang}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const updatedLangs = [...(newTutor.languages || [])];
                              updatedLangs.splice(idx, 1);
                              setNewTutor({ ...newTutor, languages: updatedLangs });
                            }}
                            className="hover:text-red-500"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newLanguage}
                        onChange={(e) => setNewLanguage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            if (newLanguage.trim()) {
                              setNewTutor({ 
                                ...newTutor, 
                                languages: [...(newTutor.languages || []), newLanguage.trim()] 
                              });
                              setNewLanguage('');
                            }
                          }
                        }}
                        placeholder="e.g. English (Press Enter)"
                        className="flex-grow px-4 py-2 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:ring-2 focus:ring-primary"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          if (newLanguage.trim()) {
                            setNewTutor({ 
                              ...newTutor, 
                              languages: [...(newTutor.languages || []), newLanguage.trim()] 
                            });
                            setNewLanguage('');
                          }
                        }}
                        className="px-4 py-2 bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border rounded-xl text-xs font-bold"
                      >
                        Add Language
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-lg mt-4"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Create Tutor Profile</span>
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* TAB: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-8">
              
              {/* Testimonial Editor Modal */}
              {editingTestimonial && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-background border border-card-border p-6 rounded-3xl max-w-lg w-full shadow-2xl relative animate-in"
                  >
                    <button 
                      onClick={() => setEditingTestimonial(null)}
                      className="absolute top-4 right-4 p-1 rounded-full hover:bg-foreground/5 text-muted-text"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    <h3 className="text-lg font-bold mb-6 text-foreground">Edit Student Review</h3>

                    <form onSubmit={handleSaveTestimonial} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-foreground/80 mb-1.5">Reviewer Name</label>
                        <input
                          type="text"
                          required
                          value={editingTestimonial.name}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-foreground/80 mb-1.5">Relation (e.g. Parent)</label>
                          <input
                            type="text"
                            required
                            value={editingTestimonial.relation}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, relation: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-foreground/80 mb-1.5">Location</label>
                          <input
                            type="text"
                            required
                            value={editingTestimonial.location}
                            onChange={(e) => setEditingTestimonial({ ...editingTestimonial, location: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground/80 mb-1.5">Rating (1 to 5 Stars)</label>
                        <select
                          value={editingTestimonial.rating}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, rating: Number(e.target.value) })}
                          className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm"
                        >
                          <option value="5">5 Stars</option>
                          <option value="4">4 Stars</option>
                          <option value="3">3 Stars</option>
                          <option value="2">2 Stars</option>
                          <option value="1">1 Star</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground/80 mb-1.5">Review Text</label>
                        <textarea
                          rows={4}
                          required
                          value={editingTestimonial.text}
                          onChange={(e) => setEditingTestimonial({ ...editingTestimonial, text: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm resize-none"
                        />
                      </div>

                      <div className="flex space-x-2 pt-4">
                        <button
                          type="submit"
                          className="flex-grow py-3 bg-primary hover:bg-primary-hover text-white rounded-xl text-xs font-bold"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingTestimonial(null)}
                          className="px-6 py-3 border border-card-border rounded-xl text-xs font-bold text-foreground"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              )}

              {/* Reviews List */}
              <div className="grid grid-cols-1 gap-4 mb-8">
                <h3 className="text-base font-bold text-foreground">Current Testimonials ({db.testimonials.length})</h3>
                {db.testimonials.map((review) => (
                  <div 
                    key={review.id} 
                    className="bg-foreground/[0.02] border border-card-border p-4 rounded-2xl flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-bold text-sm text-foreground">{review.name}</h4>
                        <span className="text-[10px] text-muted-text">({review.relation} - {review.location})</span>
                      </div>
                      <p className="text-xs text-muted-text mt-1.5 line-clamp-2 italic">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={() => setEditingTestimonial(review)}
                        className="p-2 border border-card-border text-foreground rounded-lg hover:bg-foreground/5 transition-colors"
                        title="Edit Testimonial"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteTestimonial(review.id)}
                        className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                        title="Delete Testimonial"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Testimonial Form */}
              <div className="border-t border-card-border pt-8">
                <h3 className="text-base font-bold text-foreground mb-4">Add New Testimonial</h3>
                <form onSubmit={handleAddTestimonial} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Reviewer Name *</label>
                      <input
                        type="text"
                        required
                        value={newTestimonial.name}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                        placeholder="e.g. Sarah Khan"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Relation *</label>
                      <input
                        type="text"
                        required
                        value={newTestimonial.relation}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, relation: e.target.value })}
                        placeholder="e.g. Parent of Aisha"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Location</label>
                      <input
                        type="text"
                        value={newTestimonial.location}
                        onChange={(e) => setNewTestimonial({ ...newTestimonial, location: e.target.value })}
                        placeholder="e.g. London, UK"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Rating</label>
                    <select
                      value={newTestimonial.rating}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Testimonial Text *</label>
                    <textarea
                      rows={3}
                      required
                      value={newTestimonial.text}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
                      placeholder="Write review details..."
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-lg mt-4"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Create Testimonial</span>
                  </button>
                </form>
              </div>

            </div>
          )}

          {/* TAB: CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-card-border pb-3">Contact Settings</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Inquiry Email Address
                    </label>
                    <input
                      type="email"
                      value={db.contact.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Public Phone Number
                    </label>
                    <input
                      type="text"
                      value={db.contact.phone}
                      onChange={(e) => handleContactChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    WhatsApp Direct Chat Link
                  </label>
                  <input
                    type="text"
                    value={db.contact.whatsapp}
                    onChange={(e) => handleContactChange('whatsapp', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                  <p className="text-[10px] text-muted-text mt-1">Provide formatted WhatsApp URL, e.g., https://wa.me/1234567890</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Office / HQ Location Address
                  </label>
                  <input
                    type="text"
                    value={db.contact.location}
                    onChange={(e) => handleContactChange('location', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    About Description (Footer)
                  </label>
                  <textarea
                    rows={4}
                    value={db.contact.aboutText}
                    onChange={(e) => handleContactChange('aboutText', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-card-border pb-3">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {db.faqs.map((faq) => (
                  <div key={faq.id} className="p-4 rounded-xl border border-card-border bg-foreground/[0.01] flex flex-col justify-between space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-sm text-foreground">{faq.question}</div>
                      <button
                        onClick={() => {
                          const updatedFaqs = db.faqs.filter(f => f.id !== faq.id);
                          handleSaveDB({ ...db, faqs: updatedFaqs });
                        }}
                        className="text-red-500 hover:text-red-600 p-1"
                        title="Delete FAQ"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-xs text-muted-text">{faq.answer}</div>
                    <div className="text-[10px] bg-primary/10 text-primary px-2.5 py-0.5 rounded-full w-fit capitalize">{faq.category}</div>
                  </div>
                ))}
              </div>

              {/* Add FAQ form */}
              <div className="border-t border-card-border pt-6 mt-8">
                <h4 className="font-bold text-sm text-foreground mb-4">Add New FAQ</h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const q = (form.elements.namedItem('faqQuestion') as HTMLInputElement).value;
                    const a = (form.elements.namedItem('faqAnswer') as HTMLTextAreaElement).value;
                    const c = (form.elements.namedItem('faqCategory') as HTMLSelectElement).value;
                    
                    const newFaqItem: FAQData = {
                      id: `faq-${Date.now()}`,
                      question: q,
                      answer: a,
                      category: c as any
                    };

                    handleSaveDB({ ...db, faqs: [...db.faqs, newFaqItem] });
                    form.reset();
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Question</label>
                    <input
                      name="faqQuestion"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Answer</label>
                    <textarea
                      name="faqAnswer"
                      rows={3}
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Category</label>
                    <select
                      name="faqCategory"
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="general">General</option>
                      <option value="classes">Classes & Timings</option>
                      <option value="tutors">Tutors & Faculty</option>
                      <option value="pricing">Fees & Pricing</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-lg mt-4 animate-none"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Create FAQ</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB: BLOGS */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground mb-4 border-b border-card-border pb-3">Quran Learning Articles</h3>
              <div className="space-y-4">
                {db.blogs.map((blog) => (
                  <div key={blog.id} className="p-4 rounded-xl border border-card-border bg-foreground/[0.01] flex justify-between items-start">
                    <div>
                      <div className="font-bold text-sm text-foreground">{blog.title}</div>
                      <div className="text-xs text-muted-text mt-1">{blog.description}</div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">{blog.category}</span>
                        <span className="text-[10px] text-muted-text">{blog.readTime}</span>
                        <span className="text-[10px] text-muted-text font-mono">Slug: {blog.slug}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const updatedBlogs = db.blogs.filter(b => b.id !== blog.id);
                        handleSaveDB({ ...db, blogs: updatedBlogs });
                      }}
                      className="text-red-500 hover:text-red-600 p-1 shrink-0"
                      title="Delete Article"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Blog form */}
              <div className="border-t border-card-border pt-6 mt-8">
                <h4 className="font-bold text-sm text-foreground mb-4">Add New Blog Post</h4>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const t = (form.elements.namedItem('blogTitle') as HTMLInputElement).value;
                    const c = (form.elements.namedItem('blogCategory') as HTMLSelectElement).value;
                    const d = (form.elements.namedItem('blogDesc') as HTMLTextAreaElement).value;
                    const r = (form.elements.namedItem('blogReadTime') as HTMLInputElement).value;
                    const s = (form.elements.namedItem('blogSlug') as HTMLInputElement).value;
                    
                    const newBlogItem: BlogData = {
                      id: `blog-${Date.now()}`,
                      title: t,
                      category: c,
                      description: d,
                      readTime: r,
                      slug: s
                    };

                    handleSaveDB({ ...db, blogs: [...db.blogs, newBlogItem] });
                    form.reset();
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Title</label>
                      <input
                        name="blogTitle"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Category</label>
                      <select
                        name="blogCategory"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Quran Learning Tips">Quran Learning Tips</option>
                        <option value="Tajweed Guides">Tajweed Guides</option>
                        <option value="Parenting">Parenting</option>
                        <option value="Islamic Education">Islamic Education</option>
                        <option value="Hifz Tips">Hifz Tips</option>
                        <option value="Children's Learning">Children's Learning</option>
                        <option value="Beginner Quran Guides">Beginner Quran Guides</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">Read Time (e.g., 5 min read)</label>
                      <input
                        name="blogReadTime"
                        type="text"
                        required
                        placeholder="e.g. 5 min read"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 mb-1.5">URL Slug (e.g. tips-keep-kids-motivated)</label>
                      <input
                        name="blogSlug"
                        type="text"
                        required
                        placeholder="e.g. tips-keep-kids-motivated"
                        className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground/80 mb-1.5">Summary / Description</label>
                    <textarea
                      name="blogDesc"
                      rows={3}
                      required
                      placeholder="Brief article description for catalog..."
                      className="w-full px-4 py-2.5 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-lg mt-4 animate-none"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Create Blog Post</span>
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>

    </div>
  );
}
