'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, Lock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ adminLoggedIn }: { adminLoggedIn?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCoursesExpanded, setMobileCoursesExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Tutors', href: '/tutors' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5">
            <img src="/logo.jpg" alt="OQTutor Logo" className="h-10 w-10 rounded-full object-contain bg-white border border-card-border shrink-0" />
            <span className="text-xl font-bold tracking-tight text-primary">
              OQ<span className="text-secondary">Tutor</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative group flex items-center">
              <Link
                href="/courses"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2 pr-1"
              >
                Courses
              </Link>
              <button className="text-foreground/60 hover:text-primary transition-colors cursor-pointer bg-transparent py-2">
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              
              <div className="absolute left-0 top-full mt-0 w-48 rounded-xl border border-card-border bg-background p-1.5 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/courses/noorani-qaida"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  Noorani Qaida
                </Link>
                <Link
                  href="/courses/quran-reading"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  Quran Reading
                </Link>
                <Link
                  href="/courses/tajweed"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  Quran with Tajweed
                </Link>
                <Link
                  href="/courses/hifz"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  Hifz-ul-Quran
                </Link>
                <Link
                  href="/courses/islamic-studies"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  Islamic Studies
                </Link>
                <Link
                  href="/courses/arabic-language"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  Arabic Language Course
                </Link>
              </div>
            </div>

            {menuItems.slice(2, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer bg-transparent py-2">
                <span>Locations</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute left-0 mt-0 w-44 rounded-xl border border-card-border bg-background p-1.5 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/online-quran-classes-usa"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  🇺🇸 USA Classes
                </Link>
                <Link
                  href="/online-quran-classes-usa/new-york"
                  className="block pl-8 pr-4 py-1.5 text-[11px] font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground/80 transition-all"
                >
                  └ New York
                </Link>
                <Link
                  href="/online-quran-classes-uk"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  🇬🇧 UK Classes
                </Link>
                <Link
                  href="/online-quran-classes-canada"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  🇨🇦 Canada Classes
                </Link>
                <Link
                  href="/locations/australia"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  🇦🇺 Australia Classes
                </Link>
              </div>
            </div>

            {menuItems.slice(5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Nav Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-foreground/5 text-foreground/80 hover:text-primary transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {!mounted ? <div className="h-5 w-5" /> : theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Admin Dashboard Button (Only visible if logged in) */}
            {adminLoggedIn && (
              <Link
                href="/admin/dashboard"
                className="flex items-center space-x-1.5 px-4  h-10 text-xs font-semibold rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Lock className="h-3.5 w-3.5" />
                <span>Dashboard</span>
              </Link>
            )}

            {/* CTA Button */}
            <Link
              href="/book-free-trial"
              className="flex items-center justify-center px-5 h-10 text-xs font-semibold rounded-full bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Book Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-foreground/5 text-foreground/80"
              aria-label="Toggle Theme"
            >
              {!mounted ? <div className="h-5 w-5" /> : theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-foreground/5 text-foreground/80"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-card-border bg-background"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-all"
              >
                Home
              </Link>

              {/* Courses Accordion Mobile */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileCoursesExpanded(!mobileCoursesExpanded)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-all text-left"
                >
                  <span>Courses</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCoursesExpanded ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {mobileCoursesExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 pr-3 py-1 space-y-1 bg-foreground/[0.01] rounded-lg"
                    >
                      <Link
                        href="/courses/noorani-qaida"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg py-2.5 px-3 text-sm font-medium text-muted-text hover:bg-foreground/5 hover:text-primary transition-all"
                      >
                        Noorani Qaida
                      </Link>
                      <Link
                        href="/courses/quran-reading"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg py-2.5 px-3 text-sm font-medium text-muted-text hover:bg-foreground/5 hover:text-primary transition-all"
                      >
                        Quran Reading
                      </Link>
                      <Link
                        href="/courses/tajweed"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg py-2.5 px-3 text-sm font-medium text-muted-text hover:bg-foreground/5 hover:text-primary transition-all"
                      >
                        Quran with Tajweed
                      </Link>
                      <Link
                        href="/courses/hifz"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg py-2.5 px-3 text-sm font-medium text-muted-text hover:bg-foreground/5 hover:text-primary transition-all"
                      >
                        Hifz-ul-Quran
                      </Link>
                      <Link
                        href="/courses/islamic-studies"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg py-2.5 px-3 text-sm font-medium text-muted-text hover:bg-foreground/5 hover:text-primary transition-all"
                      >
                        Islamic Studies
                      </Link>
                      <Link
                        href="/courses/arabic-language"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg py-2.5 px-3 text-sm font-medium text-muted-text hover:bg-foreground/5 hover:text-primary transition-all"
                      >
                        Arabic Language Course
                      </Link>
                      <Link
                        href="/courses"
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg py-2.5 px-3 text-sm font-bold text-primary hover:bg-foreground/5 hover:text-primary-hover transition-all"
                      >
                        View All Courses &rarr;
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {menuItems.slice(2, 5).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-all"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-2 space-y-2">
                <span className="text-xs font-bold text-muted-text uppercase tracking-widest block mb-1">Our Locations</span>
                <div className="grid grid-cols-4 gap-2">
                  <Link
                    href="/online-quran-classes-usa"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-2 px-1 rounded-xl border border-card-border bg-foreground/[0.02] text-[10px] font-bold hover:text-primary transition-colors text-foreground text-center"
                  >
                    🇺🇸 USA
                  </Link>
                  <Link
                    href="/online-quran-classes-uk"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-2 px-1 rounded-xl border border-card-border bg-foreground/[0.02] text-[10px] font-bold hover:text-primary transition-colors text-foreground text-center"
                  >
                    🇬🇧 UK
                  </Link>
                  <Link
                    href="/online-quran-classes-canada"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-2 px-1 rounded-xl border border-card-border bg-foreground/[0.02] text-[10px] font-bold hover:text-primary transition-colors text-foreground text-center"
                  >
                    🇨🇦 Canada
                  </Link>
                  <Link
                    href="/locations/australia"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-2 px-1 rounded-xl border border-card-border bg-foreground/[0.02] text-[10px] font-bold hover:text-primary transition-colors text-foreground text-center"
                  >
                    🇦🇺 Australia
                  </Link>
                </div>
                {/* City/State Sub-links */}
                <div className="pl-1 pt-1 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold text-muted-text/80 self-center">USA Cities:</span>
                  <Link
                    href="/online-quran-classes-usa/new-york"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center py-1 px-2.5 rounded-lg border border-card-border/60 bg-foreground/[0.01] text-[10px] font-semibold hover:text-primary transition-colors text-foreground"
                  >
                    New York
                  </Link>
                </div>
              </div>

              {menuItems.slice(5).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-card-border mt-4 pt-4 flex flex-col space-y-3">
                {adminLoggedIn && (
                  <Link
                    href="/admin/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                  >
                    <Lock className="h-4 w-4" />
                    <span>Admin Dashboard</span>
                  </Link>
                )}
                <Link
                  href="/book-free-trial"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-md shadow-primary/10"
                >
                  Book Free Trial
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
