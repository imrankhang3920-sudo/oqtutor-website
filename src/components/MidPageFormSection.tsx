'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ShieldCheck, Sparkles, Clock, Users, ChevronDown, Search } from 'lucide-react';

interface CountryItem {
  code: string;
  dialCode: string;
  name: string;
  flag: string;
  format: string;
}

const countriesData: CountryItem[] = [
  { code: 'US', dialCode: '+1', name: 'United States', flag: '🇺🇸', format: 'xxx-xxx-xxxx' },
  { code: 'GB', dialCode: '+44', name: 'United Kingdom', flag: '🇬🇧', format: 'xxxx xxxxxx' },
  { code: 'CA', dialCode: '+1', name: 'Canada', flag: '🇨🇦', format: 'xxx-xxx-xxxx' },
  { code: 'AU', dialCode: '+61', name: 'Australia', flag: '🇦🇺', format: 'xxx xxx xxx' },
  { code: 'PK', dialCode: '+92', name: 'Pakistan', flag: '🇵🇰', format: 'xxx xxxxxxx' },
  { code: 'AE', dialCode: '+971', name: 'UAE', flag: '🇦🇪', format: 'x xxx xxxx' },
  { code: 'SA', dialCode: '+966', name: 'Saudi Arabia', flag: '🇸🇦', format: 'x xxx xxxx' },
  { code: 'DE', dialCode: '+49', name: 'Germany', flag: '🇩🇪', format: 'xxxx xxxxxxx' },
  { code: 'FR', dialCode: '+33', name: 'France', flag: '🇫🇷', format: 'x xx xx xx xx' },
  { code: 'IE', dialCode: '+353', name: 'Ireland', flag: '🇮🇪', format: 'xx xxx xxxx' },
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

export default function MidPageFormSection() {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
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
    country: 'United States',
    countryCode: 'US',
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

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let guessed = countriesData.find(c => c.code === 'US');
    if (tz.includes('London')) guessed = countriesData.find(c => c.code === 'GB');
    else if (tz.includes('Canada/')) guessed = countriesData.find(c => c.code === 'CA');
    else if (tz.includes('Australia/')) guessed = countriesData.find(c => c.code === 'AU');
    else if (tz.includes('Karachi')) guessed = countriesData.find(c => c.code === 'PK');

    if (guessed) {
      setSelectedCountry(guessed);
      setFormData(prev => ({ ...prev, country: guessed.name, countryCode: guessed.code }));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err?.message || 'Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCountries = countriesData.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.dialCode.includes(searchQuery)
  );

  return (
    <section id="book-trial-section" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass p-8 sm:p-12 rounded-3xl border border-card-border shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Instant Confirmation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Ready to Start? Book Your Free Trial
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted-text">
              No credit card required. We&apos;ll match you with the perfect tutor.
            </p>
          </div>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4 max-w-md mx-auto"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <Check className="h-8 w-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Booking Confirmed!</h3>
              <p className="text-sm text-muted-text">
                JazakAllah Khair! Our academic coordinator will contact you shortly with your tutor profile and live classroom link.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-5 text-left">
              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Parent / Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Ali"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-12 px-4 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-12 px-4 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Course Selection */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Select Course *
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full h-12 px-3 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all"
                  >
                    {coursesList.map((c) => (
                      <option key={c} value={c} className="bg-background text-foreground">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Phone Number with Country Select */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="flex gap-2">
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="h-12 px-3 flex items-center gap-1.5 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground hover:bg-foreground/5 transition-all"
                      >
                        <span>{selectedCountry.flag}</span>
                        <span className="font-mono text-xs">{selectedCountry.dialCode}</span>
                        <ChevronDown className="h-3.5 w-3.5 text-muted-text" />
                      </button>

                      {isOpen && (
                        <div className="absolute left-0 top-full mt-1 w-64 max-h-56 overflow-y-auto rounded-xl border border-card-border bg-background p-1.5 shadow-xl z-50">
                          <div className="p-1.5 mb-1 border-b border-card-border">
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-foreground/[0.03] text-xs">
                              <Search className="h-3 w-3 text-muted-text" />
                              <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent focus:outline-none text-foreground"
                              />
                            </div>
                          </div>
                          {filteredCountries.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => handleSelectCountry(c)}
                              className="w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg hover:bg-foreground/5 text-foreground transition-colors text-left"
                            >
                              <span className="flex items-center gap-2">
                                <span>{c.flag}</span>
                                <span>{c.name}</span>
                              </span>
                              <span className="font-mono text-muted-text">{c.dialCode}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      required
                      placeholder={selectedCountry.format}
                      value={phoneVal}
                      onChange={handlePhoneChange}
                      className="flex-1 h-12 px-4 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all font-mono"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-base shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 mt-4"
                >
                  {isSubmitting ? (
                    <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm Free Trial Class</span>
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-text">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>No credit card required</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>Book in 60 seconds</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Choose Male or Female Tutor</span>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
