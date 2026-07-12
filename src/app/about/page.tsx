import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Mission from '@/components/Mission';
import { Heart, Shield, Award, Sparkles } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'About Us & Our Mission | Online Quran Tutor',
  description: 'Learn about OQTutor, our mission, values, and why we are Europe’s leading online Quran tutoring academy for kids and adults.',
  keywords: ['online quran academy mission', 'about oqtutor', 'quran learning principles', 'islamic tutoring values'],
};

export default async function AboutPage() {
  const dbData = readDB();

  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oqtutor.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Us",
        "item": "https://oqtutor.com/about"
      }
    ]
  };

  const coreValues = [
    { name: 'Authenticity & Trust', desc: 'All recitation parameters conform strictly to authentic classical Tajweed rules as transmitted by native scholars.', icon: Shield },
    { name: 'Excellence in Pedagogy', desc: 'We utilize interactive virtual whiteboards, customized revision schedules, and engaging games for young learners.', icon: Award },
    { name: 'Patience & Support', desc: 'Our tutors are trained to teach with kindness, encouraging students to build confidence and love for the Quran.', icon: Heart },
    { name: 'Accessible Learning', desc: 'Flexible hourly sessions available 24/7, making it easy for busy European families to learn from the safety of home.', icon: Sparkles },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow bg-background">
        
        {/* Header Hero */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Learn Our Story
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              About Online Quran Tutor
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              We are a dedicated global team of native Arabic scholars and certified tutors committed to bringing premium Quranic, Tajweed, and Islamic studies to Muslim families worldwide.
            </p>
          </div>
        </section>

        {/* Detailed Staggered About and Mission */}
        <About data={dbData.about} />
        <Mission data={dbData.mission} />

        {/* Core Values Section */}
        <section className="py-20 border-t border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-bold text-primary uppercase tracking-widest">Our Foundation</h2>
              <p className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Our Core Islamic Values
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-base sm:text-lg text-muted-text">
                Every class we deliver is guided by core principles that prioritize high-quality spiritual education and student well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="glass p-8 rounded-3xl border-card-border hover:shadow-lg transition-all duration-300">
                    <div className="p-3.5 rounded-2xl bg-primary/10 text-primary w-fit mb-6">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{val.name}</h3>
                    <p className="text-xs text-muted-text leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer data={dbData.contact} />
    </>
  );
}
