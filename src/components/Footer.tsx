'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactData } from '@/data/db';
import Image from 'next/image';
import { trackCloseConvertLead } from '@/lib/analytics';

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
    { name: 'Book Trial', href: '/book-free-trial' },
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
    { name: 'Quran Classes Australia', href: '/locations/australia' },
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
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:block sm:space-y-3.5">
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
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:block sm:space-y-3.5">
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
    </footer>
  );
}
