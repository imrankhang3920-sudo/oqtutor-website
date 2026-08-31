'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContactData } from '@/data/db';
import { Send, ShieldCheck, ChevronDown, Search } from 'lucide-react';
import { trackQualifyLead, trackPurchase, trackFacebookEvent, trackGAEvent } from '@/lib/analytics';

interface CountryItem {
  code: string;
  dialCode: string;
  name: string;
  flag: string;
  format: string;
}

const countriesData: CountryItem[] = [
  { code: 'GB', dialCode: '+44', name: 'United Kingdom', flag: '🇬🇧', format: 'xxxx xxxxxx' },
  { code: 'US', dialCode: '+1', name: 'United States', flag: '🇺🇸', format: 'xxx-xxx-xxxx' },
  { code: 'CA', dialCode: '+1', name: 'Canada', flag: '🇨🇦', format: 'xxx-xxx-xxxx' },
  { code: 'AU', dialCode: '+61', name: 'Australia', flag: '🇦🇺', format: 'xxx xxx xxx' },
  { code: 'PK', dialCode: '+92', name: 'Pakistan', flag: '🇵🇰', format: 'xxx xxxxxxx' },
  { code: 'DE', dialCode: '+49', name: 'Germany', flag: '🇩🇪', format: 'xxxx xxxxxxx' },
  { code: 'FR', dialCode: '+33', name: 'France', flag: '🇫🇷', format: 'x xx xx xx xx' },
  { code: 'SA', dialCode: '+966', name: 'Saudi Arabia', flag: '🇸🇦', format: 'x xxx xxxx' },
  { code: 'AE', dialCode: '+971', name: 'United Arab Emirates', flag: '🇦🇪', format: 'x xxx xxxx' },
  { code: 'IE', dialCode: '+353', name: 'Ireland', flag: '🇮🇪', format: 'xx xxx xxxx' },
  { code: 'NZ', dialCode: '+64', name: 'New Zealand', flag: '🇳🇿', format: 'xx xxx xxxx' },
  { code: 'ZA', dialCode: '+27', name: 'South Africa', flag: '🇿🇦', format: 'xx xxx xxxx' },
  { code: 'IN', dialCode: '+91', name: 'India', flag: '🇮🇳', format: 'xxxxx xxxxx' },
  { code: 'SG', dialCode: '+65', name: 'Singapore', flag: '🇸🇬', format: 'xxxx xxxx' },
  { code: 'MY', dialCode: '+60', name: 'Malaysia', flag: '🇲🇾', format: 'xx-xxx xxxx' },
  { code: 'QA', dialCode: '+974', name: 'Qatar', flag: '🇶🇦', format: 'xxxx xxxx' },
  { code: 'KW', dialCode: '+965', name: 'Kuwait', flag: '🇰🇼', format: 'xxxx xxxx' },
  { code: 'OM', dialCode: '+968', name: 'Oman', flag: '🇴🇲', format: 'xxxx xxxx' },
  { code: 'BH', dialCode: '+973', name: 'Bahrain', flag: '🇧🇭', format: 'xxxx xxxx' },
  { code: 'NL', dialCode: '+31', name: 'Netherlands', flag: '🇳🇱', format: 'x xx xx xx' },
  { code: 'BE', dialCode: '+32', name: 'Belgium', flag: '🇧🇪', format: 'xxx xx xx xx' },
  { code: 'CH', dialCode: '+41', name: 'Switzerland', flag: '🇨🇭', format: 'xx xxx xx xx' },
  { code: 'SE', dialCode: '+46', name: 'Sweden', flag: '🇸🇪', format: 'xx xxx xx xx' },
  { code: 'NO', dialCode: '+47', name: 'Norway', flag: '🇳🇴', format: 'xxx xx xxx' },
  { code: 'DK', dialCode: '+45', name: 'Denmark', flag: '🇩🇰', format: 'xx xx xx xx' },
  { code: 'FI', dialCode: '+358', name: 'Finland', flag: '🇫🇮', format: 'xx xxx xxxx' },
  { code: 'AT', dialCode: '+43', name: 'Austria', flag: '🇦🇹', format: 'xxx xxxxxxx' },
  { code: 'IT', dialCode: '+39', name: 'Italy', flag: '🇮🇹', format: 'xxx xxxxxxx' },
  { code: 'ES', dialCode: '+34', name: 'Spain', flag: '🇪🇸', format: 'xxx xxx xxx' },
  { code: 'TR', dialCode: '+90', name: 'Turkey', flag: '🇹🇷', format: 'xxx xxx xxxx' },
  { code: 'HK', dialCode: '+852', name: 'Hong Kong', flag: '🇭🇰', format: 'xxxx xxxx' },
  { code: 'JP', dialCode: '+81', name: 'Japan', flag: '🇯🇵', format: 'xx xxxx xxxx' },
];

function formatPhoneNumber(value: string, format: string) {
  const digits = value.replace(/\D/g, '');
  let formatted = '';
  let digitIndex = 0;
  
  for (let i = 0; i < format.length && digitIndex < digits.length; i++) {
    if (format[i] === 'x') {
      formatted += digits[digitIndex++];
    } else {
      formatted += format[i];
    }
  }
  
  return formatted;
}

export default function BookFreeTrialClient({
  contactData,
  selectedPlan
}: {
  contactData: ContactData;
  selectedPlan?: string;
}) {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]); // Default to UK
  const [phoneVal, setPhoneVal] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    age: 'Under 5',
    country: 'United Kingdom',
    countryCode: 'GB',
    course: 'Noorani Qaida',
    preferredTime: 'Morning (08:00 - 12:00)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courses = [
    'Noorani Qaida',
    'Quran Reading',
    'Quran with Tajweed',
    'Hifz Program',
    'Islamic Studies',
    'Daily Duas',
    'Salah Course',
    'Arabic Reading'
  ];

  const timeSlots = [
    'Morning (08:00 - 12:00)',
    'Afternoon (12:00 - 16:00)',
    'Evening (16:00 - 20:00)',
    'Night (20:00 - 24:00)',
    'Flexible / 24h Any Time'
  ];

  useEffect(() => {
    trackGAEvent('book_free_trial_click', {
      event_category: 'CTA Click',
      event_label: 'Book Free Trial Button',
    });

    trackFacebookEvent('ViewContent', {
      content_name: 'Book Free Trial Page',
      content_category: 'CTA Click',
    });
  }, []);

  useEffect(() => {
    if (selectedPlan) {
      let price = 0;
      const lowerPlan = selectedPlan.toLowerCase();
      if (lowerPlan.includes('starter')) price = 30;
      else if (lowerPlan.includes('standard')) price = 40;
      else if (lowerPlan.includes('premium')) price = 50;

      if (price > 0) {
        trackPurchase(selectedPlan, price);
      }
    }
  }, [selectedPlan]);

  // Auto-detect country based on Timezone and Geolocation IP API
  useEffect(() => {
    // 1. Timezone heuristic
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let guessedCountry = countriesData.find(c => c.code === 'GB');

    if (tz.includes('London')) guessedCountry = countriesData.find(c => c.code === 'GB');
    else if (tz.includes('America/')) guessedCountry = countriesData.find(c => c.code === 'US');
    else if (tz.includes('Canada/')) guessedCountry = countriesData.find(c => c.code === 'CA');
    else if (tz.includes('Australia/')) guessedCountry = countriesData.find(c => c.code === 'AU');
    else if (tz.includes('Europe/Berlin') || tz.includes('Europe/Munich')) guessedCountry = countriesData.find(c => c.code === 'DE');
    else if (tz.includes('Europe/Paris')) guessedCountry = countriesData.find(c => c.code === 'FR');
    else if (tz.includes('Karachi')) guessedCountry = countriesData.find(c => c.code === 'PK');
    else if (tz.includes('Kolkata')) guessedCountry = countriesData.find(c => c.code === 'IN');
    
    if (guessedCountry) {
      setSelectedCountry(guessedCountry);
      setFormData(prev => ({
        ...prev,
        country: guessedCountry.name,
        countryCode: guessedCountry.code
      }));
    }

    // 2. Geolocation IP API check for absolute precision
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code) {
          const match = countriesData.find(c => c.code === data.country_code);
          if (match) {
            setSelectedCountry(match);
            setFormData(prev => ({
              ...prev,
              country: match.name,
              countryCode: match.code,
              phone: `${match.dialCode} ${formatPhoneNumber(phoneVal, match.format)}`.trim()
            }));
          }
        }
      })
      .catch(() => {});
  }, []);

  // Dropdown click outside listener
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectCountry = (country: CountryItem) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery('');
    
    const formatted = formatPhoneNumber(phoneVal, country.format);
    setPhoneVal(formatted);
    
    setFormData(prev => ({
      ...prev,
      phone: `${country.dialCode} ${formatted}`.trim(),
      country: country.name,
      countryCode: country.code
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const formatted = formatPhoneNumber(rawVal, selectedCountry.format);
    setPhoneVal(formatted);
    
    setFormData(prev => ({
      ...prev,
      phone: `${selectedCountry.dialCode} ${formatted}`.trim(),
      country: selectedCountry.name,
      countryCode: selectedCountry.code
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      trackQualifyLead(formData.course, formData.country);
      setPhoneVal('');
      setFormData({
        studentName: '',
        email: '',
        phone: '',
        age: 'Under 5',
        country: selectedCountry.name,
        countryCode: selectedCountry.code,
        course: 'Noorani Qaida',
        preferredTime: 'Morning (08:00 - 12:00)',
        message: '',
      });

      // Clear success notification after 10 seconds
      setTimeout(() => setIsSuccess(false), 10000);
    } catch (err: any) {
      console.error('Trial Form submission error:', err);
      setError(err?.message || 'Failed to submit form. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCountries = countriesData.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.dialCode.includes(searchQuery) ||
    c.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="flex-grow bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          
          {/* Form Card */}
          <div className="glass rounded-3xl border-card-border p-8 sm:p-10 shadow-2xl relative">
            
            {isSuccess && (
              <div className="absolute inset-0 bg-background/95 backdrop-blur-md rounded-3xl z-10 flex flex-col items-center justify-center text-center p-8">
                <div className="p-4 rounded-full bg-primary/15 text-primary mb-6">
                  <ShieldCheck className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Trial Application Received!</h3>
                <p className="text-xs text-muted-text max-w-md leading-relaxed mb-6">
                  JazakAllah Khair! We have registered your application. Our coordinator will contact you on your phone number or email within 24 hours to arrange your customized one-on-one sessions.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-all cursor-pointer"
                >
                  Submit Another Form
                </button>
              </div>
            )}

            <div className="text-center mb-8">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 inline-block mb-3">
                Free Trial
              </span>
              <h1 className="text-3xl font-extrabold text-foreground mb-2">Book Your 3 Free Trial Classes</h1>
              <p className="text-xs sm:text-sm text-muted-text leading-relaxed max-w-xl mx-auto">
                No credit card required. Fill out the form below and we will contact you on WhatsApp or Email within 24 hours to schedule your trials.
              </p>
            </div>
            
            {error && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-semibold leading-relaxed">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name - full width */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Student Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aisha Khan"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Email - half width */}
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone - half width */}
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Phone / WhatsApp Number
                  </label>
                  
                  <div className="relative" ref={dropdownRef}>
                    <div className="flex items-center w-full rounded-xl border border-card-border bg-background/50 text-foreground focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
                      {/* Country dropdown trigger */}
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1.5 px-3 py-3 hover:bg-foreground/[0.04] transition-colors rounded-l-xl border-r border-card-border text-sm font-semibold select-none cursor-pointer text-foreground bg-transparent"
                      >
                        <span className="text-base leading-none">{selectedCountry.flag}</span>
                        <span className="text-xs text-foreground/80 font-bold">{selectedCountry.dialCode}</span>
                        <ChevronDown className="h-3 w-3 text-muted-text" />
                      </button>
                      
                      {/* Phone Input field */}
                      <input
                        type="tel"
                        required
                        placeholder={selectedCountry.format.replace(/x/g, '9')}
                        value={phoneVal}
                        onChange={handlePhoneChange}
                        className="w-full bg-transparent px-3 py-3 text-sm focus:outline-none placeholder-muted-text/50"
                      />
                    </div>

                    {/* Country selector dropdown menu */}
                    {isOpen && (
                      <div className="absolute left-0 mt-2 w-72 max-h-64 bg-background border border-card-border rounded-2xl shadow-2xl p-2.5 z-20 flex flex-col animate-slide-down">
                        <div className="relative flex items-center mb-2 px-1">
                          <Search className="absolute left-3 h-3.5 w-3.5 text-muted-text pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Search country name or code..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-8 pr-3 py-2 bg-foreground/[0.03] border border-card-border rounded-xl text-xs focus:outline-none placeholder-muted-text/70"
                          />
                        </div>
                        
                        <div className="overflow-y-auto flex-grow space-y-0.5 custom-scrollbar max-h-48">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => handleSelectCountry(country)}
                                className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-xl text-xs hover:bg-foreground/[0.04] transition-colors cursor-pointer text-left ${
                                  selectedCountry.code === country.code
                                    ? 'bg-primary/10 text-primary font-bold'
                                    : 'text-foreground'
                                }`}
                              >
                                <span className="text-base leading-none">{country.flag}</span>
                                <span className="font-semibold">{country.dialCode}</span>
                                <span className="text-muted-text truncate ml-1">{country.name}</span>
                              </button>
                            ))
                          ) : (
                            <div className="text-[11px] text-muted-text text-center py-4">No countries found</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Age - half width */}
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Student Age Category
                  </label>
                  <select
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="Under 5">Under 5 years old</option>
                    <option value="5 to 12">5 to 12 years old</option>
                    <option value="13 to 18">13 to 18 years old</option>
                    <option value="Adult (18+)">Adult (18+)</option>
                  </select>
                </div>

                {/* Course - half width */}
                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Select Quran Course
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    {courses.map((crs, idx) => (
                      <option key={idx} value={crs}>{crs}</option>
                    ))}
                  </select>
                </div>

                {/* Class Time - full width */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Preferred Class Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Message - full width */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Special Instructions / Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please state if you require a Female Tutor or have specific learning schedules..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="h-4.5 w-4.5" />
                <span>{isSubmitting ? 'Submitting Form...' : 'Schedule My Free Trial Classes'}</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer data={contactData} />
    </>
  );
}
