import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import Image from 'next/image';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  BookOpen, Volume2, Heart, Compass, Users, UserCheck, 
  GraduationCap, Smile, Languages, Sparkles, ArrowRight 
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Quran & Arabic Courses Index | Online Quran Tutor',
  description: 'Explore our structured online Quran and Arabic courses. Select from Noorani Qaida, Tajweed, Quran Reading, Hifz, Tafseer, Islamic Studies, and female tutors.',
  keywords: ['learn quran online', 'quran classes for kids', 'quran classes for adults', 'quran with tajweed', 'noorani qaida online', 'hifz classes online'],
  alternates: {
    canonical: 'https://www.oqtutor.com/courses',
  },
};

const iconMap: Record<string, React.ComponentType<any>> = {
  BookOpen,
  Volume2,
  Heart,
  Compass,
  Users,
  UserCheck,
  GraduationCap,
  Smile,
  Languages,
  Sparkles,
};

export default async function CoursesPage() {
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
        "name": "Courses",
        "item": "https://oqtutor.com/courses"
      }
    ]
  };

  // FAQ Schema for SEO Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dbData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Insert JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Insert JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Structured Curriculum
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Online Quran & Arabic Courses
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed font-normal">
              Choose from our selection of premium, one-on-one online courses designed for children and adults. Click on any course category below to explore full details, syllabus steps, and curriculum guidelines.
            </p>
          </div>
        </section>

        {/* Categories Grid Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dbData.courses.map((course) => {
                const IconComponent = iconMap[course.icon] || BookOpen;

                return (
                  <div
                    key={course.id}
                    className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col h-full hover:translate-y-[-6px] hover:shadow-xl transition-all duration-300 relative group"
                  >
                    {/* Header Image Cover */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-w-7xl) 33vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={course.slug === 'noorani-qaida' || course.slug === 'quran-reading'}
                      />
                      {/* Floating Category Icon badge */}
                      <div className="absolute top-4 left-4 z-25 p-2.5 rounded-xl bg-background/95 backdrop-blur-md text-primary border border-card-border/80 shadow-md">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2 block">
                        {course.suitableFor}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-sm text-muted-text leading-relaxed font-normal mb-8 flex-grow line-clamp-3">
                        {course.description}
                      </p>

                      {/* Card Bottom CTA Link */}
                      <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
                        <span className="text-xs text-muted-text/80 font-medium">
                          {course.duration}
                        </span>
                        
                        <Link
                          href={`/courses/${course.slug}`}
                          className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover group/link transition-all"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background border-t border-card-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Got Questions?
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm text-muted-text max-w-2xl mx-auto font-normal">
                Have questions about our online Quran courses, class setups, tutors, or fees? Explore our direct answers below.
              </p>
            </div>

            <div className="space-y-4">
              {dbData.faqs.map((faq, idx) => (
                <details 
                  key={faq.id || idx}
                  className="group border border-card-border/60 rounded-2xl glass p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-foreground cursor-pointer select-none list-none">
                    <span>{faq.question}</span>
                    <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
                      <svg className="h-5 w-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-3 text-xs sm:text-sm text-muted-text leading-relaxed font-normal border-t border-card-border/40 pt-3">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Book Trial Quick CTA */}
        <section className="py-12 bg-foreground/[0.01] border-t border-card-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Not Sure Where to Begin?</h2>
            <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
              Book a 3-day free trial. Our certified scholars will evaluate your level, understand your personal learning pace, and recommend the best starting course.
            </p>
            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-lg transition-all duration-300 font-bold text-sm"
              >
                <span>Register for Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </div>
  );
}
