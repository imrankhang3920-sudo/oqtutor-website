'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ContactData } from '@/data/db';
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactPageClient({
  contactData
}: {
  contactData: ContactData;
}) {
  return (
    <>
      <Navbar />

      <main className="flex-grow bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Contact Our Support Team
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-2xl mx-auto leading-relaxed">
              Have questions about our courses, tutors, or scheduling? Our academic support coordinators are here to assist you 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Contact details list */}
            <div className="lg:col-span-6 space-y-6">
              <div className="glass p-8 rounded-3xl border-card-border shadow-lg">
                <h2 className="text-xl font-bold text-foreground mb-6">Contact Channels</h2>
                
                <div className="space-y-6">
                  
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider mb-1">Email Support</p>
                      <a 
                        href={`mailto:${contactData.email}`} 
                        className="text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors break-all"
                      >
                        {contactData.email}
                      </a>
                      <p className="text-xs text-muted-text mt-1">For general inquiries, support, and feedback.</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider mb-1">Call Us</p>
                      <a 
                        href={`tel:${contactData.phone.includes('|') ? contactData.phone.split('|')[0].replace(/[^0-9+]/g, '') : contactData.phone.replace(/[^0-9+]/g, '')}`} 
                        className="text-base sm:text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {contactData.phone}
                      </a>
                      <p className="text-xs text-muted-text mt-1">Direct support line for urgent schedule updates.</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider mb-1">Operating Hours</p>
                      <span className="text-base sm:text-lg font-semibold text-foreground">
                        Open 24 Hours / 7 Days
                      </span>
                      <p className="text-xs text-muted-text mt-1">Available worldwide across all timezone intervals.</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-text uppercase tracking-wider mb-1">Academy Location</p>
                      <span className="text-base sm:text-lg font-semibold text-foreground">
                        {contactData.location}
                      </span>
                      <p className="text-xs text-muted-text mt-1">Global digital academy coordinating online lessons.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Quick Actions & Map */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              
              {/* WhatsApp Quick Chat */}
              <a
                href={contactData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-3xl border border-card-border hover:border-emerald-600/30 bg-emerald-500/[0.02] flex items-center justify-between transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-600 group-hover:scale-105 transition-transform duration-300">
                    <MessageCircle className="h-8 w-8 fill-emerald-600/10" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-foreground">WhatsApp Live Support</h3>
                    <p className="text-xs sm:text-sm text-muted-text mt-1">Message our academic advisors instantly for custom plans.</p>
                  </div>
                </div>
                <span className="text-emerald-600 font-extrabold text-lg transition-transform group-hover:translate-x-1.5">&rarr;</span>
              </a>

              {/* Free Trial CTA card */}
              <div className="glass p-8 rounded-3xl border border-primary/20 bg-primary/5 flex flex-col justify-between shadow-lg space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Ready to Start Your Free Trial?</h3>
                  <p className="text-xs sm:text-sm text-muted-text mt-2 leading-relaxed">
                    Don't fill out general inquiry forms if you want classes. Go directly to our dedicated registration route to claim your 3 free trial sessions.
                  </p>
                </div>
                <Link
                  href="/book-free-trial"
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book Free Trial Classes</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* HQ Map card */}
              <div className="border border-card-border rounded-3xl overflow-hidden glass p-6 relative flex items-center justify-center text-center shadow-lg h-44">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="space-y-1.5">
                  <MapPin className="h-7 w-7 text-primary mx-auto mb-1" />
                  <h4 className="font-bold text-xs text-foreground">Academy HQ Islamabad, Pakistan</h4>
                  <p className="text-[10px] sm:text-xs text-muted-text max-w-md leading-relaxed mx-auto">
                    Operating remotely via coordinate centers across Islamic education hubs, teaching UK, USA, Canadian, and Australian audiences.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer data={contactData} />
    </>
  );
}
