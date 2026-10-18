'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, ArrowRight, ShieldCheck, Sparkles, Clock, 
  Send, User, Mail, Phone, BookOpen, Users, MessageSquare 
} from 'lucide-react';

interface SingaporeLeadFormProps {
  className?: string;
  source?: string;
}

export default function SingaporeLeadForm({ className = '', source = 'singapore-hero' }: SingaporeLeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Noorani Qaida & Iqra Foundations',
    tutorGender: 'No Preference',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const courses = [
    'Noorani Qaida & Iqra Foundations',
    'Quran Reading with Tajweed',
    'Hifz (Memorization) Program',
    'Islamic Studies, Salah & Daily Duas',
    'Quran Translation & Tafseer',
  ];

  const tutorGenders = [
    { label: 'Female (Ustazah)', value: 'Female (Ustazah)' },
    { label: 'Male (Ustaz)', value: 'Male (Ustaz)' },
    { label: 'No Preference', value: 'No Preference' },
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/[^\d\s]/g, '');
    // format as 4-4 e.g. 8123 4567
    const digits = raw.replace(/\D/g, '').slice(0, 8);
    let formatted = digits;
    if (digits.length > 4) {
      formatted = `${digits.slice(0, 4)} ${digits.slice(4)}`;
    }
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in your name, email, and WhatsApp number.');
      setIsSubmitting(false);
      return;
    }

    try {
      const fullPhone = `+65 ${formData.phone.trim()}`;
      const messageContent = `[Singapore Trial Request] Preferred Tutor Gender: ${formData.tutorGender} | Selected Course: ${formData.course} | Source: ${source}`;

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: formData.name.trim(),
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: fullPhone,
          course: formData.course,
          country: 'Singapore',
          countryCode: 'SG',
          message: messageContent,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit. Please try again or chat with us on WhatsApp.');
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again or contact us directly on WhatsApp.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`relative glass rounded-3xl p-6 sm:p-8 shadow-2xl border border-primary/20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl ${className}`}>
      {/* Decorative gradient blur background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative mb-5 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-2">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Quick 60-Second Booking</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          Book Your 3-Day Free Trial
        </h3>
        <p className="text-xs text-muted-text mt-1">
          Singapore Standard Time (SGT) slots • No credit card required • $0 fee
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-8 space-y-4"
          >
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-inner">
              <CheckCircle className="h-9 w-9 text-primary animate-pulse" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-bold text-foreground">Trial Class Requested!</h4>
              <p className="text-sm text-muted-text max-w-sm mx-auto">
                Alhamdulillah! We have received your details. Our academic coordinator will reach out to you via WhatsApp or Email within 2 to 4 hours to confirm your tutor and SGT class time.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/15 text-xs text-foreground/80 space-y-1">
              <p className="font-semibold text-primary">Need an instant response?</p>
              <p>Chat directly with our team on WhatsApp for same-day scheduling:</p>
            </div>

            <a
              href={`https://wa.me/923478704442?text=${encodeURIComponent(
                `Assalamu Alaikum! I just booked a 3-day free trial on OQTutor for ${formData.course} in Singapore (Name: ${formData.name}). Please help me schedule my first lesson.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Connect on WhatsApp Now</span>
            </a>

            <button
              onClick={() => {
                setIsSuccess(false);
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  course: 'Noorani Qaida & Iqra Foundations',
                  tutorGender: 'No Preference',
                });
              }}
              className="text-xs text-muted-text hover:text-foreground underline pt-2 block mx-auto"
            >
              Book for another child / family member
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left relative">
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
                {error}
              </div>
            )}

            {/* Student / Parent Name */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                Parent / Student Full Name <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-text" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Nurul Huda / Muhammad Farhan"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                Email Address <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-text" />
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
              </div>
            </div>

            {/* WhatsApp with Singapore (+65) flag */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                WhatsApp Number (Singapore) <span className="text-primary">*</span>
              </label>
              <div className="flex rounded-xl border border-card-border bg-background overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary transition-all">
                <div className="flex items-center gap-1.5 px-3 bg-foreground/5 border-r border-card-border text-xs font-semibold text-foreground select-none">
                  <span className="text-base" role="img" aria-label="Singapore Flag">🇸🇬</span>
                  <span>+65</span>
                </div>
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-text" />
                  <input
                    type="tel"
                    required
                    placeholder="8123 4567"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full pl-9 pr-4 py-2.5 bg-transparent text-foreground text-sm focus:outline-none"
                  />
                </div>
              </div>
              <p className="text-[11px] text-muted-text mt-1">
                We will send class link &amp; coordinator details via WhatsApp.
              </p>
            </div>

            {/* Select Course */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                Select Course <span className="text-primary">*</span>
              </label>
              <div className="relative">
                <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-text pointer-events-none" />
                <select
                  value={formData.course}
                  onChange={e => setFormData(prev => ({ ...prev, course: e.target.value }))}
                  className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-card-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all appearance-none cursor-pointer"
                >
                  {courses.map(course => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted-text">
                  ▼
                </div>
              </div>
            </div>

            {/* Preferred Tutor Gender */}
            <div>
              <label className="block text-xs font-semibold text-foreground mb-1.5">
                Preferred Tutor Gender
              </label>
              <div className="grid grid-cols-3 gap-2">
                {tutorGenders.map(option => {
                  const isSelected = formData.tutorGender === option.value;
                  return (
                    <button
                      type="button"
                      key={option.value}
                      onClick={() => setFormData(prev => ({ ...prev, tutorGender: option.value }))}
                      className={`py-2 px-2 text-center rounded-xl text-xs font-semibold border transition-all ${
                        isSelected
                          ? 'bg-primary text-white border-primary shadow-sm'
                          : 'bg-background hover:bg-foreground/5 text-foreground/80 border-card-border'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-6 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Securing Your SGT Slot...</span>
                </>
              ) : (
                <>
                  <span>Confirm Free Trial Class</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Trust Micro-Bullets */}
            <div className="pt-2 flex items-center justify-between text-[11px] text-muted-text border-t border-card-border/60">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                <span>$0 Sign-up Fee</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-primary" />
                <span>Custom SGT Timings</span>
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-3.5 w-3.5 text-primary" />
                <span>1-on-1 Talaqqi</span>
              </span>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
