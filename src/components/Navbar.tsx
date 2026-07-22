'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, Lock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ adminLoggedIn }: { adminLoggedIn?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
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
            {menuItems.slice(0, 5).map((item) => (
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
                  href="#"
                  className="block px-4 py-2.5 text-xs font-semibold rounded-lg hover:bg-foreground/5 hover:text-primary text-foreground transition-all"
                >
                  🇬🇧 UK Classes
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

            {/* Admin Dashboard / Login Button */}
            <Link
              href={adminLoggedIn ? '/admin/dashboard' : '/admin/login'}
              className="flex items-center space-x-1.5 px-4  h-10 text-xs font-semibold rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Lock className="h-3.5 w-3.5" />
              <span>{adminLoggedIn ? 'Dashboard' : 'Admin'}</span>
            </Link>

            {/* CTA Button */}
            <Link
              href="#contact"
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
              {menuItems.slice(0, 5).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-primary transition-all"
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Locations Accordion/Group */}
              <div className="px-3 py-2 space-y-2">
                <span className="text-xs font-bold text-muted-text uppercase tracking-widest block mb-1">Our Locations</span>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/online-quran-classes-usa"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-2 px-3 rounded-xl border border-card-border bg-foreground/[0.02] text-xs font-bold hover:text-primary transition-colors text-foreground"
                  >
                    🇺🇸 USA Classes
                  </Link>
                  <Link
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center py-2 px-3 rounded-xl border border-card-border bg-foreground/[0.02] text-xs font-bold hover:text-primary transition-colors text-foreground"
                  >
                    🇬🇧 UK Classes
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
                <Link
                  href={adminLoggedIn ? '/admin/dashboard' : '/admin/login'}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-1.5 w-full py-2.5 rounded-full border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  <Lock className="h-4 w-4" />
                  <span>{adminLoggedIn ? 'Admin Dashboard' : 'Admin Login'}</span>
                </Link>
                <Link
                  href="#contact"
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
