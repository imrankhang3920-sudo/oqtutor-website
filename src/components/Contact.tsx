'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown, Search } from 'lucide-react';
import { ContactData } from '@/data/db';

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

export default function Contact({ data }: { data: ContactData }) {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]); // Default to UK
  const [phoneVal, setPhoneVal] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Noorani Qaida',
    message: '',
    country: 'United Kingdom',
    countryCode: 'GB',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const coursesList = [
    'Noorani Qaida',
    'Quran Reading',
    'Quran with Tajweed',
    'Hifz Program',
    'Islamic Studies',
    'Arabic Language',
    'Quran for Kids',
  ];

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
      setPhoneVal('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'Noorani Qaida',
        message: '',
        country: selectedCountry.name,
        countryCode: selectedCountry.code,
      });
      
      // Auto-hide success message after 10 seconds
      setTimeout(() => setIsSuccess(false), 10000);
    } catch (err: any) {
      console.error('Contact Form submission error:', err);
      setError(err?.message || 'Failed to submit form. Please check your connection and try again.');
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
    <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-t border-b border-card-border" id="contact">
      <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bottom-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
            Start Learning
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Get in Touch with Us
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-sm text-muted-text max-w-2xl mx-auto">
            Book your 3 free trial classes now. Speak to our coordinator to design a class schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Contact Details</h3>
                <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
                <p className="text-xs text-muted-text leading-relaxed">
                  We offer customer support around the clock. Contact us through email, phone, or direct WhatsApp support.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-text uppercase tracking-wider">Email Us</p>
                    <a href={`mailto:${data.email}`} className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors break-all">
                      {data.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-text uppercase tracking-wider">Call Us</p>
                    <a 
                      href={`tel:${data.phone.includes('|') ? data.phone.split('|')[0].replace(/[^0-9+]/g, '') : data.phone.replace(/[^0-9+]/g, '')}`} 
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-text uppercase tracking-wider">Our Location</p>
                    <p className="text-sm font-semibold text-foreground leading-relaxed">
                      {data.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA card */}
              <div className="glass p-6 rounded-2xl border-card-border flex items-center justify-between shadow-md">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-8 w-8 text-emerald-500 fill-emerald-500/10 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Need quick answers?</h4>
                    <p className="text-xs text-muted-text">WhatsApp support available worldwide</p>
                  </div>
                </div>
                <a
                  href={data.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl border-card-border p-8 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-foreground mb-1">Book a Free Trial Class</h3>
              <p className="text-xs text-muted-text mb-8">No commitment, 100% free introduction class.</p>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs font-semibold leading-relaxed">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-3 rounded-xl border border-card-border bg-background/50 text-foreground placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-5 py-3 rounded-xl border border-card-border bg-background/50 text-foreground placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Phone / WhatsApp
                    </label>
                    
                    <div className="relative" ref={dropdownRef}>
                      <div className="flex items-center w-full rounded-xl border border-card-border bg-background/50 text-foreground focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
                        {/* Country dropdown trigger */}
                        <button
                          type="button"
                          onClick={() => setIsOpen(!isOpen)}
                          className="flex items-center gap-1.5 px-3.5 py-3 hover:bg-foreground/[0.04] transition-colors rounded-l-xl border-r border-card-border text-sm font-semibold select-none cursor-pointer text-foreground bg-transparent"
                        >
                          <span className="text-base leading-none">{selectedCountry.flag}</span>
                          <span className="text-xs text-foreground/80 font-bold">{selectedCountry.dialCode}</span>
                          <ChevronDown className="h-3 w-3 text-muted-text" />
                        </button>
                        
                        {/* Phone Input field */}
                        <input
                          type="tel"
                          id="phone"
                          required
                          placeholder={selectedCountry.format.replace(/x/g, '9')}
                          value={phoneVal}
                          onChange={handlePhoneChange}
                          className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none placeholder-muted-text/50"
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

                  <div>
                    <label htmlFor="course" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Select Course
                    </label>
                    <select
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl border border-card-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
                    >
                      {coursesList.map((course) => (
                        <option key={course} value={course} className="bg-background text-foreground">
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Message / Special Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the student (age, current Quran reading level, preferred times, etc.)..."
                    className="w-full px-5 py-3 rounded-xl border border-card-border bg-background/50 text-foreground placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all resize-none"
                  />
                </div>

                <div className="relative">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Submit Request'}</span>
                    {!isSubmitting && <Send className="h-4.5 w-4.5" />}
                  </button>

                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-16 left-0 right-0 bg-primary border border-primary-light/10 text-white rounded-xl py-3 px-4 text-center text-sm font-semibold shadow-xl"
                      >
                        ✓ Thank you! Your request has been sent successfully. We will email/WhatsApp you shortly.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
