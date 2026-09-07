import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MidPageFormSection from '@/components/MidPageFormSection';
import StickyFormButton from '@/components/StickyFormButton';
import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, MapPin, ArrowRight, Star, ShieldCheck, Clock, Users, BookOpen } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Online Quran Classes Worldwide | Locations & Time Zones – OQTutor',
    description: 'Explore live 1-on-1 online Quran classes available across USA, UK, Canada, Australia, and 20+ countries. Certified teachers, local schedules, free trial.',
    alternates: {
      canonical: 'https://www.oqtutor.com/locations',
    },
    openGraph: {
      title: 'Online Quran Classes Worldwide | Locations & Time Zones – OQTutor',
      description: 'Explore live 1-on-1 online Quran classes available across USA, UK, Canada, Australia, and 20+ countries.',
      url: 'https://www.oqtutor.com/locations',
    },
  };
}

export default async function LocationsHubPage() {
  const dbData = readDB();
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const locations = [
    {
      country: 'United States',
      flag: '🇺🇸',
      slug: '/locations/usa',
      badge: 'Popular Region',
      description: 'Classes scheduled across Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) time zones.',
      subLocations: [
        { name: 'Illinois (Chicago)', slug: '/locations/usa/illinois' },
        { name: 'Michigan (Detroit)', slug: '/locations/usa/michigan' },
        { name: 'New York (NYC)', slug: '/locations/usa/new-york' },
        { name: 'Texas (Houston, Dallas)', slug: '/locations/usa/texas' },
        { name: 'California (LA, Bay Area)', slug: '/locations/usa/california' },
      ],
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      slug: '/locations/uk',
      badge: 'GMT / BST Timing',
      description: 'Tailored for British Muslim families with after-school and weekend time slots.',
      subLocations: [
        { name: 'London & Greater London', slug: '/locations/uk/london' },
        { name: 'Birmingham & West Midlands', slug: '/locations/uk' },
        { name: 'Manchester & North West', slug: '/locations/uk' },
      ],
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      slug: '/locations/canada',
      badge: 'EST / PST Timing',
      description: 'Serving Toronto, Calgary, Vancouver, Ottawa, and all Canadian provinces in CAD pricing.',
      subLocations: [
        { name: 'Ontario (GTA, Ottawa)', slug: '/locations/canada' },
        { name: 'Alberta (Calgary, Edmonton)', slug: '/locations/canada' },
        { name: 'British Columbia (Vancouver)', slug: '/locations/canada' },
      ],
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      slug: '/locations/australia',
      badge: 'AEST / AWST Timing',
      description: 'Morning, evening, and weekend Quran lessons aligned with Australian school terms.',
      subLocations: [
        { name: 'Sydney & NSW', slug: '/locations/australia' },
        { name: 'Melbourne & Victoria', slug: '/locations/australia' },
        { name: 'Brisbane & Perth', slug: '/locations/australia' },
      ],
    },
  ];

  return (
    <>
      <Navbar adminLoggedIn={adminLoggedIn} headerConfig={dbData.headerNav} />

      <main className="flex-grow py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Globe className="h-3.5 w-3.5" />
              <span>Worldwide Coverage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
              Online Quran Classes by Location
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-text">
              We connect Muslim families across the globe with certified male and female scholars aligned with your exact local time zone.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="glass p-8 rounded-3xl border border-card-border hover:border-primary/30 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{loc.flag}</span>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {loc.country}
                      </h2>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {loc.badge}
                    </span>
                  </div>

                  <p className="text-sm text-muted-text leading-relaxed mb-6">
                    {loc.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-2">
                      Popular Cities & States:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {loc.subLocations.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.slug}
                          className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-xl border border-card-border bg-foreground/[0.02] text-foreground/80 hover:text-primary hover:border-primary/40 transition-colors"
                        >
                          <MapPin className="h-3 w-3 text-secondary" />
                          <span>{sub.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-card-border">
                  <Link
                    href={loc.slug}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md transition-all"
                  >
                    <span>View {loc.country} Classes & Schedules</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Section */}
          <MidPageFormSection />
        </div>
      </main>

      <Footer data={dbData.contact} footerConfig={dbData.footerNav} />
      <StickyFormButton />
    </>
  );
}
