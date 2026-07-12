import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  BookOpen, Volume2, Heart, Compass, Users, UserCheck, 
  GraduationCap, Smile, Languages, Sparkles, Check, ArrowRight 
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Quran & Arabic Courses | Online Quran Tutor',
  description: 'Structured online Quran courses: Noorani Qaida, Tajweed, Quran Reading, Hifz Program, Islamic Studies, Salah Course, and Arabic Reading for kids and adults.',
  keywords: ['learn quran online', 'quran classes for kids', 'quran classes for adults', 'quran with tajweed', 'noorani qaida online', 'hifz classes online'],
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

  return (
    <>
      {/* Insert JSON-LD Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow bg-background">
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
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed">
              We offer personalized one-on-one Quran classes designed for kids and adults. From learning how to read Arabic letters to mastering advanced Tajweed rules and Quran memorization (Hifz), our certified tutors guide you step-by-step.
            </p>
          </div>
        </section>

        {/* Detailed Courses Sections */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {dbData.courses.map((course, idx) => {
                const IconComponent = iconMap[course.icon] || BookOpen;
                const isEven = idx % 2 === 0;

                return (
                  <div
                    key={course.id}
                    id={course.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-card-border/60 pb-20 last:border-0 last:pb-0`}
                  >
                    {/* Text Details */}
                    <div className={`lg:col-span-7 ${isEven ? 'order-1' : 'order-1 lg:order-2'} flex flex-col items-start`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                          {course.suitableFor}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                        {course.title}
                      </h2>
                      <div className="h-1 w-16 bg-secondary mt-3 mb-5 rounded-full" />

                      <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6 font-normal">
                        {course.overview}
                      </p>

                      {/* Learning Outcomes */}
                      <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                        What You Will Learn (Learning Outcomes)
                      </h3>
                      <ul className="space-y-2.5 mb-8 w-full">
                        {course.learningOutcomes.map((outcome, outcomeIdx) => (
                          <li key={outcomeIdx} className="flex items-start space-x-3 text-sm text-foreground/80">
                            <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Course metadata tags */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-card-border pt-6 text-xs text-muted-text mb-8">
                        <div>
                          <span className="block font-bold text-foreground/60 uppercase tracking-wider text-[10px]">Estimated Duration</span>
                          <span className="font-semibold text-foreground mt-0.5 block">{course.duration}</span>
                        </div>
                        <div>
                          <span className="block font-bold text-foreground/60 uppercase tracking-wider text-[10px]">Class Structure</span>
                          <span className="font-semibold text-foreground mt-0.5 block">{course.classStructure}</span>
                        </div>
                        <div>
                          <span className="block font-bold text-foreground/60 uppercase tracking-wider text-[10px]">Recommended Age</span>
                          <span className="font-semibold text-foreground mt-0.5 block">{course.recommendedAge}</span>
                        </div>
                      </div>

                      {/* Call to Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Link
                          href={`/course/${course.slug}`}
                          className="flex items-center space-x-2 px-5 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-lg transition-all"
                        >
                          <span>Explore Syllabus</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          href="/contact"
                          className="flex items-center space-x-2 px-5 py-3 rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground border border-card-border text-xs font-semibold transition-all"
                        >
                          <span>Book Free Trial</span>
                        </Link>
                      </div>
                    </div>

                    {/* Course Picture Card */}
                    <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'} flex justify-center`}>
                      <div className="relative max-w-md w-full">
                        <div className={`absolute inset-0 border-2 ${isEven ? 'border-secondary/20 translate-x-4' : 'border-primary/20 -translate-x-4'} rounded-3xl translate-y-4 -z-10`} />
                        <div className="glass p-4 rounded-3xl border-card-border shadow-xl overflow-hidden relative">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-inner group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Floating Icon badge */}
                          <div className="absolute top-8 left-8 p-3 rounded-xl bg-background/95 backdrop-blur-md text-primary border border-card-border/80 shadow-md">
                            <IconComponent className="h-6 w-6" />
                          </div>
                          {/* Floating Mode badge */}
                          <div className="absolute bottom-8 right-8 px-4 py-1.5 rounded-full bg-background/95 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-widest border border-card-border/80 shadow-md">
                            100% 1-on-1 Class
                          </div>
                        </div>
                      </div>
                    </div>

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
