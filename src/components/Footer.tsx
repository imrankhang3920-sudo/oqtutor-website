'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactData } from '@/data/db';
import Image from 'next/image';

export default function Footer({ data }: { data: ContactData }) {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing Plans', href: '/pricing' },
    { name: 'Our Tutors', href: '/tutors' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Book Trial', href: '/contact' },
  ];

  const coursesLinks = [
    { name: 'Noorani Qaida', href: '/courses/noorani-qaida' },
    { name: 'Quran Reading', href: '/courses/quran-reading' },
    { name: 'Quran with Tajweed', href: '/courses/tajweed' },
    { name: 'Hifz-ul-Quran', href: '/courses/hifz' },
    { name: 'Islamic Studies', href: '/courses/islamic-studies' },
    { name: 'Quran Classes USA', href: '/online-quran-classes-usa' },
    { name: 'Quran Classes UK', href: '/online-quran-classes-uk' },
    { name: 'Quran Classes Canada', href: '/online-quran-classes-canada' },
  ];

  const socialLinks = [
    { 
      href: 'https://web.facebook.com/profile.php?id=100093682086058', 
      label: 'Facebook',
      svg: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      )
    },
    { 
      href: '#', 
      label: 'Twitter',
      svg: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.95 4.57a10 10 0 01-2.82.77 4.96 4.96 0 002.16-2.72c-.95.57-2 .98-3.13 1.2a4.93 4.93 0 00-8.4 4.48c-4.1-.2-7.75-2.18-10.2-5.18a4.9 4.9 0 001.52 6.57c-.8-.03-1.55-.25-2.24-.62a4.93 4.93 0 003.95 4.83c-.72.2-1.48.23-2.22.08a4.93 4.93 0 004.6 3.42A9.9 9.9 0 010 19.54a13.94 13.94 0 007.55 2.21c9.06 0 14-7.5 14-14 0-.21 0-.42-.01-.63A10.06 10.06 0 0024 4.58z" />
        </svg>
      )
    },
    { 
      href: 'https://www.instagram.com/hadi.382011/', 
      label: 'Instagram',
      svg: (
        <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    { 
      href: '#', 
      label: 'Youtube',
      svg: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.108C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.555A3.002 3.002 0 00.5 6.163C0 8.07 0 12 0 12s0 3.93.5 5.837a3.002 3.002 0 002.11 2.108C4.47 20.5 12 20.5 12 20.5s7.53 0 9.388-.555a3.003 3.003 0 002.11-2.108C24 15.93 24 12 24 12s0-3.93-.5-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-foreground/[0.02] border-t border-card-border pt-20 pb-10 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Logo & About */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image
                src="/logo.jpg"
                alt="OQTutor Logo"
                width={40}
                height={40}
                loading="lazy"
                className="rounded-full object-contain bg-white border border-card-border shrink-0"
              />
              <span className="text-xl font-bold tracking-tight text-primary">
                OQ<span className="text-secondary">Tutor</span>
              </span>
            </Link>
            <p className="mt-6 text-sm text-muted-text leading-relaxed max-w-sm">
              {data.aboutText}
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3 mt-8">
              {socialLinks.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full glass border-card-border hover:bg-primary hover:text-white hover:border-transparent text-foreground/80 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.svg}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-text hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">Our Courses</h3>
            <ul className="space-y-3.5">
              {coursesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-text hover:text-primary transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-muted-text leading-relaxed">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{data.location}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-text">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">
                  {data.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-text">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${data.email}`} className="hover:text-primary transition-colors">
                  {data.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-card-border w-full mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-muted-text space-y-4 sm:space-y-0">
          <p suppressHydrationWarning>© {new Date().getFullYear()} OQTutor. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center sm:justify-end">
            <Link href="/privacy" className="hover:text-primary transition-colors font-medium">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary transition-colors font-medium">Terms & Conditions</Link>
            <Link href="/refund-policy" className="hover:text-primary transition-colors font-medium">Refund Policy</Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors font-medium">Cookie Policy</Link>
          </div>
        </div>
      </div>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
        {/* Pulsing background ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500/35 animate-ping" style={{ animationDuration: '2s' }} />
        
        <a
          href={data.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center space-x-2.5 cursor-pointer font-bold"
          aria-label="Chat on WhatsApp"
        >
          <svg className="h-5 w-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="text-xs uppercase font-bold tracking-wider select-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </footer>
  );
}
