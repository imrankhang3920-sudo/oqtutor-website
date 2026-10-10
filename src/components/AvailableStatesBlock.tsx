'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Globe, ArrowRight, Clock } from 'lucide-react';

interface AvailableStatesBlockProps {
  courseName?: string;
  className?: string;
}

export default function AvailableStatesBlock({
  courseName,
  className = ""
}: AvailableStatesBlockProps) {
  const states = [
    { name: 'Illinois', href: '/locations/usa/illinois', tz: 'CST' },
    { name: 'Michigan', href: '/locations/usa/michigan', tz: 'EST' },
    { name: 'New York', href: '/locations/usa/new-york', tz: 'EST' },
    { name: 'Texas', href: '/locations/usa/texas', tz: 'CST' },
    { name: 'California', href: '/locations/usa/california', tz: 'PST' },
    { name: 'New Jersey', href: '/locations/usa/new-jersey', tz: 'EST' },
  ];

  return (
    <div className={`glass p-6 sm:p-8 rounded-3xl border border-card-border my-10 relative overflow-hidden ${className}`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Globe className="h-3.5 w-3.5" />
            <span>Available Across the USA</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            {courseName ? `${courseName} Classes in Your State` : "Live 1-on-1 Classes in Your State"}
          </h3>
          <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
            Scheduled around your local school, work, and prayer times with certified male and female scholars.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {states.map((st) => (
            <Link
              key={st.name}
              href={st.href}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium border border-card-border hover:border-primary/40 hover:text-primary glass bg-foreground/[0.01] transition-all text-foreground/80 group"
            >
              <MapPin className="h-3.5 w-3.5 text-secondary group-hover:text-primary transition-colors shrink-0" />
              <span>{st.name}</span>
              <span className="text-[10px] text-muted-text/70 font-semibold uppercase">({st.tz})</span>
            </Link>
          ))}
          <Link
            href="/locations/usa"
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
          >
            <span>All US States &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
