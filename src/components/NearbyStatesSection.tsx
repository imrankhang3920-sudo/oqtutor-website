'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, Globe, Compass } from 'lucide-react';

export interface StateInfo {
  id: string;
  name: string;
  path: string;
  timeZone: string;
  cities: string;
  description: string;
}

const ALL_STATES: StateInfo[] = [
  {
    id: 'illinois',
    name: 'Illinois',
    path: '/locations/usa/illinois',
    timeZone: 'Central Time (CST)',
    cities: 'Chicago, Naperville, Aurora, Joliet, Schaumburg, Skokie',
    description: '1-on-1 online Quran classes tailored for Chicagoland and Illinois families.'
  },
  {
    id: 'michigan',
    name: 'Michigan',
    path: '/locations/usa/michigan',
    timeZone: 'Eastern Time (EST)',
    cities: 'Dearborn, Detroit, Hamtramck, Ann Arbor, Grand Rapids',
    description: 'Live Quran reading and Tajweed lessons adapted to Michigan student schedules.'
  },
  {
    id: 'texas',
    name: 'Texas',
    path: '/locations/usa/texas',
    timeZone: 'Central Time (CST)',
    cities: 'Houston, Dallas, Austin, San Antonio, Fort Worth, Plano',
    description: 'Personalized online Quran tuition for Muslim households across Texas.'
  },
  {
    id: 'new-york',
    name: 'New York',
    path: '/locations/usa/new-york',
    timeZone: 'Eastern Time (EST)',
    cities: 'Brooklyn, Queens, Manhattan, Staten Island, Long Island',
    description: 'Flexible Eastern Time slots for kids, teens, and adults across New York.'
  },
  {
    id: 'new-jersey',
    name: 'New Jersey',
    path: '/locations/usa/new-jersey',
    timeZone: 'Eastern Time (EST)',
    cities: 'Jersey City, Edison, Paterson, Newark, Clifton, Princeton',
    description: 'Private 1-on-1 Quran tutors for students throughout New Jersey.'
  },
  {
    id: 'california',
    name: 'California',
    path: '/locations/usa/california',
    timeZone: 'Pacific Time (PST)',
    cities: 'Los Angeles, San Francisco Bay Area, San Diego, San Jose, Irvine',
    description: 'Pacific Time Quran tutoring with certified male and female scholars.'
  }
];

interface NearbyStatesSectionProps {
  currentState?: string;
  title?: string;
  subtitle?: string;
}

export default function NearbyStatesSection({
  currentState,
  title = "Also Serving Nearby US States",
  subtitle = "Looking for live online Quran classes in other states? Explore our state-specific programs."
}: NearbyStatesSectionProps) {
  const currentKey = currentState?.toLowerCase().trim();

  // Sort: prioritize pairing
  const states = ALL_STATES.filter((s) => s.id !== currentKey).sort((a, b) => {
    if (currentKey === 'illinois') {
      if (a.id === 'michigan' || a.id === 'texas') return -1;
      if (b.id === 'michigan' || b.id === 'texas') return 1;
    } else if (currentKey === 'michigan') {
      if (a.id === 'illinois' || a.id === 'texas') return -1;
      if (b.id === 'illinois' || b.id === 'texas') return 1;
    } else if (currentKey === 'texas') {
      if (a.id === 'illinois' || a.id === 'michigan') return -1;
      if (b.id === 'illinois' || b.id === 'michigan') return 1;
    } else if (currentKey === 'new-york') {
      if (a.id === 'new-jersey' || a.id === 'illinois') return -1;
      if (b.id === 'new-jersey' || b.id === 'illinois') return 1;
    } else if (currentKey === 'new-jersey') {
      if (a.id === 'new-york' || a.id === 'illinois') return -1;
      if (b.id === 'new-york' || b.id === 'illinois') return 1;
    } else if (currentKey === 'california') {
      if (a.id === 'illinois' || a.id === 'texas') return -1;
      if (b.id === 'illinois' || b.id === 'texas') return 1;
    }
    return 0;
  });

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-foreground/[0.01] border-t border-card-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-flex items-center gap-1.5 mb-3">
            <Compass className="h-3.5 w-3.5 text-primary" />
            <span>Regional Hubs</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight leading-tight">
            {title}
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-xs sm:text-sm text-muted-text font-normal max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {states.map((state) => (
            <div
              key={state.id}
              className="glass p-6 rounded-3xl border border-card-border hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0" />
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {state.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                    {state.timeZone.split(' ')[0]}
                  </span>
                </div>
                <p className="text-[11px] text-primary/90 font-medium">
                  {state.cities}
                </p>
                <p className="text-xs text-muted-text leading-relaxed font-normal">
                  {state.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-card-border/50">
                <Link
                  href={state.path}
                  className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Explore Quran Classes in {state.name}</span>
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/locations/usa"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-text hover:text-primary transition-colors glass px-5 py-2.5 rounded-full border border-card-border"
          >
            <Globe className="h-3.5 w-3.5 text-secondary" />
            <span>View All US Locations &amp; State Guides &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
