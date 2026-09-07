'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Globe, ArrowRight } from 'lucide-react';

interface ServingLocationsProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function ServingLocationsSection({
  title = "Serving Muslim Families Worldwide",
  subtitle = "Interactive 1-on-1 Quran classes scheduled around your local time zone.",
  compact = false,
}: ServingLocationsProps) {
  const locationGroups = [
    {
      country: 'United States',
      flag: '🇺🇸',
      mainLink: '/locations/usa',
      cities: [
        { name: 'California', href: '/locations/usa/california' },
        { name: 'Illinois', href: '/locations/usa/illinois' },
        { name: 'Michigan', href: '/locations/usa/michigan' },
        { name: 'New York', href: '/locations/usa/new-york' },
        { name: 'Texas', href: '/locations/usa/texas' },
      ],
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      mainLink: '/locations/uk',
      cities: [
        { name: 'London', href: '/locations/uk/london' },
        { name: 'Birmingham', href: '/locations/uk' },
        { name: 'Manchester', href: '/locations/uk' },
        { name: 'Glasgow', href: '/locations/uk' },
      ],
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      mainLink: '/locations/canada',
      cities: [
        { name: 'Toronto & GTA', href: '/locations/canada' },
        { name: 'Calgary', href: '/locations/canada' },
        { name: 'Vancouver', href: '/locations/canada' },
        { name: 'Ottawa', href: '/locations/canada' },
      ],
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      mainLink: '/locations/australia',
      cities: [
        { name: 'Sydney (NSW)', href: '/locations/australia' },
        { name: 'Melbourne (VIC)', href: '/locations/australia' },
        { name: 'Brisbane (QLD)', href: '/locations/australia' },
        { name: 'Perth (WA)', href: '/locations/australia' },
      ],
    },
  ];

  if (compact) {
    return (
      <div className="p-6 rounded-3xl border border-card-border bg-foreground/[0.01] my-8">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="h-4 w-4 text-primary" />
          <h3 className="font-bold text-sm text-foreground">Classes Available in Your Area:</h3>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {locationGroups.map((group, idx) => (
            <Link
              key={idx}
              href={group.mainLink}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-card-border hover:border-primary/40 hover:text-primary transition-all text-foreground/80"
            >
              <span>{group.flag}</span>
              <span>{group.country}</span>
            </Link>
          ))}
          <Link
            href="/locations"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-all"
          >
            <span>All Locations &rarr;</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16 border-t border-card-border/50 bg-foreground/[0.01]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
            <Globe className="h-3.5 w-3.5" />
            <span>Local Time Zones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-text">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locationGroups.map((group, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-card-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{group.flag}</span>
                  <Link
                    href={group.mainLink}
                    className="font-bold text-base text-foreground hover:text-primary transition-colors"
                  >
                    {group.country}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {group.cities.map((city, cIdx) => (
                    <Link
                      key={cIdx}
                      href={city.href}
                      className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg border border-card-border/60 bg-foreground/[0.01] hover:text-primary hover:border-primary/40 transition-colors text-foreground/80"
                    >
                      <MapPin className="h-3 w-3 text-secondary shrink-0" />
                      <span>{city.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href={group.mainLink}
                className="text-xs font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1 mt-2"
              >
                <span>View Timetables</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/locations"
            className="text-xs font-bold text-muted-text hover:text-primary inline-flex items-center gap-1"
          >
            <span>View All Global Location Hubs & City Guides &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
