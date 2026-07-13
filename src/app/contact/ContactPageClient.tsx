'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContactData } from '@/data/db';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPageClient({
  contactData
}: {
  contactData: ContactData;
}) {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    age: 'Under 5',
    country: 'United Kingdom',
    course: 'Noorani Qaida',
    preferredTime: 'Morning (08:00 - 12:00)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const countries = [
    'United Kingdom',
    'Germany',
    'France',
    'Belgium',
    'Netherlands',
    'Ireland',
    'Italy',
    'Spain',
    'Sweden',
    'Norway',
    'Denmark',
    'Switzerland',
    'Austria',
    'Other Europe',
    'United States',
    'Canada',
    'Australia',
    'Rest of World'
  ];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        studentName: '',
        email: '',
        phone: '',
        age: 'Under 5',
        country: 'United Kingdom',
        course: 'Noorani Qaida',
        preferredTime: 'Morning (08:00 - 12:00)',
        message: '',
      });

      setTimeout(() => setIsSuccess(false), 6000);
    }, 1500);
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        "name": "Contact",
        "item": "https://www.oqtutor.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="flex-grow bg-background">
        
        {/* Header Hero */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Free Booking
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Book Your 3 Free Trial Classes
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              No credit card required. Fill out the form below, and our academic support team will contact you on WhatsApp or Email within 24 hours to schedule your trials.
            </p>
          </div>
        </section>

        {/* Contact Page Content */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Form Card */}
              <div className="lg:col-span-7">
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
                        className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-all"
                      >
                        Submit Another Form
                      </button>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-foreground mb-2">Registration Form</h3>
                  <p className="text-xs text-muted-text mb-6">Provide student and preferred scheduling information.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      <div>
                        <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+44 7911 123456"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      <div>
                        <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                          Country of Residence
                        </label>
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-card-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        >
                          {countries.map((cnt, idx) => (
                            <option key={idx} value={cnt}>{cnt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      <div>
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
                    </div>

                    <div>
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

              {/* Sidebar Contacts */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4">Contact Details</h3>
                    <div className="h-1 w-16 bg-secondary mb-6 rounded-full" />
                    <p className="text-xs text-muted-text leading-relaxed">
                      We offer a customer support team that is available around the clock. Contact us through email, phone, or direct WhatsApp support.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Email Us</p>
                        <a href={`mailto:${contactData.email}`} className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors break-all">
                          {contactData.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Call Us</p>
                        <a href={`tel:${contactData.phone.replace(/[^0-9+]/g, '')}`} className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors">
                          {contactData.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Business Hours</p>
                        <span className="text-sm font-semibold text-foreground">
                          Open 24/7 for global online sessions
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider">Academy HQ Location</p>
                        <span className="text-sm font-semibold text-foreground">
                          {contactData.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Chat */}
                  <a
                    href={contactData.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass p-6 rounded-2xl border-card-border flex items-center justify-between hover:bg-foreground/[0.02] hover:border-emerald-600/30 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 group-hover:scale-105 transition-transform duration-300">
                        <MessageCircle className="h-6 w-6 fill-emerald-600/20" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-foreground">WhatsApp Advisor</h4>
                        <p className="text-[10px] text-muted-text">Chat with us instantly in real-time</p>
                      </div>
                    </div>
                    <span className="text-emerald-600 font-semibold text-xs">&rarr;</span>
                  </a>
                </div>

                {/* Google Map Placeholder */}
                <div className="mt-8 border border-card-border rounded-2xl overflow-hidden glass h-48 relative flex items-center justify-center text-center">
                  <div className="absolute inset-0 bg-primary/5 -z-10" />
                  <div className="p-6">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold text-xs text-foreground mb-1">HQ Islamabad, Pakistan</h4>
                    <p className="text-[10px] text-muted-text max-w-xs leading-relaxed">
                      Coordinates: Islamabad Expressway, Sector H-8, Pakistan. Teaching global European audiences remotely.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer data={contactData} />
    </>
  );
}
