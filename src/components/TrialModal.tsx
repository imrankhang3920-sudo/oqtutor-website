'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, Clock, ChevronDown, Search } from 'lucide-react';

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
  { code: 'NZ', dialCode: '+64', name: 'New Zealand', flag: '🇳🇿', format: 'xx xxx xxxx' },
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

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export default function TrialModal({
  isOpen,
  onClose,
  title = "Book Your Free Trial Class",
  subtitle = "30-minute personalized lesson. No credit card required."
}: TrialModalProps) {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
  const [phoneVal, setPhoneVal] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
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

  // Auto-detect country based on Timezone
  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let guessedCountry = countriesData.find(c => c.code === 'US');

    if (tz.includes('London')) guessedCountry = countriesData.find(c => c.code === 'GB');
    else if (tz.includes('America/')) guessedCountry = countriesData.find(c => c.code === 'US');
    else if (tz.includes('Canada/')) guessedCountry = countriesData.find(c => c.code === 'CA');
    else if (tz.includes('Australia/')) guessedCountry = countriesData.find(c => c.code === 'AU');
    else if (tz.includes('Karachi')) guessedCountry = countriesData.find(c => c.code === 'PK');

    if (guessedCountry) {
      setSelectedCountry(guessedCountry);
      setFormData(prev => ({
        ...prev,
        country: guessedCountry.name,
        countryCode: guessedCountry.code
      }));
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCountry = (country: CountryItem) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
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
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 4000);
    } catch (err: any) {
      setError(err?.message || 'Failed to book free trial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredCountries = countriesData.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.dialCode.includes(searchQuery)
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-card-border bg-background p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="text-left mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>100% Free • No Credit Card</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground tracking-tight">
                {title}
              </h2>
              <p className="text-sm text-muted-text mt-1">
                {subtitle}
              </p>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Trial Request Received!</h3>
                <p className="text-sm text-muted-text max-w-sm mx-auto">
                  Alhamdulillah! Our team will contact you within 2-4 hours to confirm your tutor schedule and lesson link.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Parent / Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Sarah Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-4 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Interested Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full h-11 px-3 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all"
                    >
                      {coursesList.map((c) => (
                        <option key={c} value={c} className="bg-background text-foreground">
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Phone & Country Selector */}
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="flex gap-2">
                    {/* Country Selector Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        className="h-11 px-3 flex items-center gap-1.5 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground hover:bg-foreground/5 transition-all"
                      >
                        <span>{selectedCountry.flag}</span>
                        <span className="font-mono text-xs">{selectedCountry.dialCode}</span>
                        <ChevronDown className="h-3.5 w-3.5 text-muted-text" />
                      </button>

                      {isCountryDropdownOpen && (
                        <div className="absolute left-0 top-full mt-1 w-64 max-h-56 overflow-y-auto rounded-xl border border-card-border bg-background p-1.5 shadow-xl z-50">
                          <div className="p-1.5 mb-1 border-b border-card-border">
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-foreground/[0.03] text-xs">
                              <Search className="h-3 w-3 text-muted-text" />
                              <input
                                type="text"
                                placeholder="Search country..."
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
                      className="flex-1 h-11 px-4 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Child&apos;s Age / Specific Requirements (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 7 years old beginner, prefer female tutor"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-11 px-4 text-sm rounded-xl border border-card-border bg-foreground/[0.02] text-foreground focus:outline-none focus:border-primary transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 cursor-pointer disabled:opacity-70 mt-2"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Book Free Trial Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-muted-text">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    <span>No credit card</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-secondary" />
                    <span>Takes 60 seconds</span>
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
