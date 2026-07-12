'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { ContactData } from '@/data/db';

export default function Contact({ data }: { data: ContactData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Noorani Qaida',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const coursesList = [
    'Noorani Qaida',
    'Quran Reading',
    'Quran with Tajweed',
    'Hifz-ul-Quran',
    'Quran Translation',
    'Islamic Studies for Kids',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'Noorani Qaida',
        message: '',
      });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Details Side */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Get In Touch</h2>
              <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Start Your Quran Journey Today
              </p>
              <div className="h-1 w-20 bg-secondary mt-4 rounded-full" />
              <p className="mt-6 text-sm sm:text-base text-muted-text leading-relaxed">
                Fill out the form to book your **100% Free Trial Class**. No credit card required. Our team will contact you within 24 hours to schedule your sessions.
              </p>
            </div>

            {/* Quick contact list */}
            <div className="space-y-6 my-10 lg:my-0">
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
                  <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`} className="text-base font-semibold text-foreground hover:text-primary transition-colors">
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
                  <p className="text-xs text-muted-text">Chat with us directly on WhatsApp</p>
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

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl border-card-border p-8 sm:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-foreground mb-1">Book a Free Trial Class</h3>
              <p className="text-xs text-muted-text mb-8">No commitment, 100% free introduction class.</p>

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
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +1 (555) 000-0000"
                      className="w-full px-5 py-3 rounded-xl border border-card-border bg-background/50 text-foreground placeholder:text-muted-text/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all"
                    />
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
                    className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
