import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ChevronDown, MapPin, Award, BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Online Quran Classes in the USA | State Directory | OQTutor",
    description: "Find certified 1-on-1 online Quran classes by state in the USA. Study Noorani Qaida, Tajweed, and Hifz with tutors. Flexible hours, free trial.",
    alternates: {
      canonical: "https://www.oqtutor.com/locations/usa",
    },
    openGraph: {
      url: "https://www.oqtutor.com/locations/usa",
    },
  };
}

export default async function USALocationsHubPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const customHeroData = {
    title: "Online Quran Classes in the USA",
    subtitle: "Welcome to OQTutor's United States national locations directory. We bring structured, one-on-one online Quran classes directly to Muslim families across America. All lessons are coordinated in your specific local time zone — including Eastern (EST/EDT), Central (CST/CDT), Mountain (MST/MDT), and Pacific (PST/PDT) zones. Find your state below to explore city-specific scheduling, pricing tiers, local review highlights, and matched Al-Azhar certified male and female scholars.",
    ctaText: "Book Free Placement Trial",
    ctaLink: "/book-free-trial",
    whatsappText: dbData.hero.whatsappText,
    whatsappNumber: dbData.hero.whatsappNumber,
    backgroundImage: dbData.hero.backgroundImage || "/hero-bg.jpg",
  };

  const activeStates = [
    {
      name: "Michigan",
      path: "/locations/michigan",
      desc: "Serving Dearborn, Detroit, Hamtramck, Ann Arbor, Lansing, and Grand Rapids. Schedule classes easily around busy school and prayer timings."
    },
    {
      name: "New York",
      path: "/online-quran-classes-usa/new-york",
      desc: "Customized for Brooklyn, Queens, Manhattan, Staten Island, and Long Island. Flexible slots matching EST/EDT school routines."
    }
  ];

  const comingSoonStates = [
    { name: "Texas (Houston, Dallas, Austin)" },
    { name: "California (Los Angeles, Bay Area, San Diego)" },
    { name: "Illinois (Chicago, Naperville, Aurora)" },
    { name: "Florida (Miami, Orlando, Tampa)" },
    { name: "New Jersey (Paterson, Jersey City, Clifton)" },
    { name: "Virginia (Fairfax, Alexandria, Richmond)" }
  ];

  return (
    <>
      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        <Hero data={customHeroData} />

        {/* State Directory Section */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-background">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Directory
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                Select Your State
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-xs sm:text-sm text-muted-text">
                Browse our state-specific online Quran academies to view pricing and match with local tutors.
              </p>
            </div>

            {/* Active States Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {activeStates.map((state) => (
                <div key={state.name} className="glass p-8 rounded-3xl border border-card-border flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{state.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal">
                      {state.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-card-border/40">
                    <Link href={state.path} className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-hover group">
                      <span>View State Classes</span>
                      <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Coming Soon States */}
            <div className="max-w-4xl mx-auto glass p-8 rounded-3xl border border-card-border/60 bg-foreground/[0.005]">
              <h3 className="text-base font-bold text-foreground mb-6 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-secondary inline-block animate-pulse" />
                <span>Expansion Cities &amp; States (Coming Soon):</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {comingSoonStates.map((state) => (
                  <div key={state.name} className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-foreground/[0.01] border border-card-border/40">
                    <CheckCircle className="h-4.5 w-4.5 text-muted-text/60 shrink-0" />
                    <span className="text-xs text-muted-text font-medium">{state.name}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-center text-muted-text/80 font-normal">
                Don't see your state? You can still register. Our general {" "}
                <Link href="/online-quran-classes-usa" className="text-primary hover:underline font-semibold">
                  Online Quran Classes USA
                </Link>{" "}
                program supports students in all 50 states.
              </p>
            </div>

          </div>
        </section>

        {/* Dynamic National Benefits Section */}
        <section className="py-16 md:py-24 border-t border-card-border bg-foreground/[0.01]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                  USA Operations
                </span>
                <h2 className="text-3xl font-extrabold text-foreground tracking-tight leading-tight">
                  One-on-One Quran Tutoring Built for American Muslim Homes
                </h2>
                <div className="h-1 w-16 bg-secondary rounded-full" />
                <p className="text-sm sm:text-base text-muted-text leading-relaxed font-normal">
                  Our national academy eliminates the logistical stress of driving back and forth to traditional physical centers in heavy traffic. OQTutor pairs your child (or you) with a dedicated online Quran tutor who conducts live, interactive sessions using high-definition screen sharing and digital Mushaf views. Pronunciation mistakes in {" "}
                  <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
                    Noorani Qaida
                  </Link>{" "}
                  or {" "}
                  <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
                    Tajweed
                  </Link>{" "}
                  are corrected immediately. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-background border border-card-border">
                    <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">1-on-1 Vetted Tutors</h4>
                      <p className="text-[11px] sm:text-xs text-muted-text mt-1">Get 100% focused correction from certified female and male instructors.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-background border border-card-border">
                    <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground">Time Zone Adaptive</h4>
                      <p className="text-[11px] sm:text-xs text-muted-text mt-1">Schedule morning, evening, or weekend classes that fit around secular routines.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative max-w-md w-full">
                  <div className="absolute inset-0 border-2 border-secondary/20 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                  <div className="glass p-3 rounded-3xl border-card-border overflow-hidden shadow-2xl relative bg-white">
                    <Image
                      src="/online-quran-classes-usa.jpg"
                      alt="Student learning Quran online in USA on computer"
                      width={450}
                      height={350}
                      className="w-full h-auto rounded-2xl object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="py-16 bg-background border-t border-card-border text-center">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Begin Your Quran Journey Today
            </h3>
            <p className="text-xs sm:text-sm text-muted-text max-w-lg mx-auto leading-relaxed font-normal">
              Register for a live placement trial session. Sit in with the matched tutor, evaluate their style, and receive a written starting plan — all for free.
            </p>
            <div className="pt-2">
              <Link href="/book-free-trial" className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300">
                <span>Schedule Free Placement Trial</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
