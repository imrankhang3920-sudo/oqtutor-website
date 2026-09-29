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
  GraduationCap, Smile, Languages, Sparkles, ArrowRight,
  CheckCircle2, Clock, Calendar, HelpCircle, ChevronRight,
  Award, ShieldCheck, Star, Layers
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Online Quran Courses – 1-on-1 Classes for Kids & Adults | Free Trial',
  description: 'Explore online Quran courses for kids and adults, including Noorani Qaida, Quran Reading, Tajweed, Hifz, Tafseer, Islamic Studies, and Arabic at OQTutor.',
  alternates: {
    canonical: 'https://www.oqtutor.com/courses',
  },
  openGraph: {
    title: 'Online Quran Courses – 1-on-1 Classes for Kids & Adults | Free Trial',
    description: 'Explore online Quran courses for kids and adults, including Noorani Qaida, Quran Reading, Tajweed, Hifz, Tafseer, Islamic Studies, and Arabic at OQTutor.',
    url: 'https://www.oqtutor.com/courses',
    siteName: 'OQTutor',
    type: 'website',
    images: [
      {
        url: 'https://www.oqtutor.com/online-quran-classes-usa.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Quran Courses for Kids and Adults at OQTutor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Quran Courses – 1-on-1 Classes for Kids & Adults | Free Trial',
    description: 'Explore online Quran courses for kids and adults, including Noorani Qaida, Quran Reading, Tajweed, Hifz, Tafseer, Islamic Studies, and Arabic at OQTutor.',
    images: ['https://www.oqtutor.com/online-quran-classes-usa.jpg'],
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
  Award,
};

// Unified High-Value Course FAQs with Rich Internal Links
const courseFaqs: Array<{
  question: string;
  schemaAnswer: string;
  answer: React.ReactNode;
}> = [
  {
    question: 'Which online Quran course should a beginner start with?',
    schemaAnswer:
      'Noorani Qaida is the standard starting course for beginners of any age who cannot yet read Arabic script. It teaches the Arabic alphabet, correct pronunciation (Makharij), short vowels (Harakat), and letter connections. Once completed, students transition smoothly to Quran Reading.',
    answer: (
      <>
        <strong className="text-foreground">Noorani Qaida</strong> is generally the starting point for students of any age who cannot yet read Arabic or Quranic script confidently. It establishes letter recognition, articulation points (Makharij), short vowel markings (Harakat), and compound letter connections. Read our comprehensive{' '}
        <Link href="/blog/best-online-quran-classes-for-beginners" className="text-primary hover:underline font-semibold">
          beginner Quran classes guide
        </Link>{' '}
        or start directly with{' '}
        <Link href="/courses/noorani-qaida" className="text-primary hover:underline font-semibold">
          Noorani Qaida
        </Link>{' '}
        and{' '}
        <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">
          Quran Reading
        </Link>.
      </>
    ),
  },
  {
    question: 'What is the difference between Noorani Qaida and Quran Reading?',
    schemaAnswer:
      'Noorani Qaida focuses on the phonetic foundation—learning individual Arabic letters, vowel markers, and joint letter shapes through short exercises. The Quran Reading course applies those rules directly to reciting complete verses and chapters of the Holy Quran with proper flow and Waqf (stopping) rules.',
    answer: (
      <>
        <strong className="text-foreground">Noorani Qaida</strong> focuses on phonetic fundamentals—learning individual Arabic letters, vowel markers, and joint letter shapes through progressive exercises. The{' '}
        <Link href="/courses/quran-reading" className="text-primary hover:underline font-semibold">
          Quran Reading
        </Link>{' '}
        course applies those rules directly to reciting complete verses and Surahs of the Holy Quran with proper flow, breath control, and Waqf (stopping) rules.
      </>
    ),
  },
  {
    question: 'Which online Quran course is best for children?',
    schemaAnswer:
      'The appropriate program depends on your child\'s age, reading foundation, attention span, and goals. Young beginners (ages 4–6) usually start with Noorani Qaida, while older children who can read transition to Tajweed or short Surah memorization. Certified teachers use engaging digital Mushafs and interactive visual boards during 30-minute lessons.',
    answer: (
      <>
        The appropriate program depends on your child&apos;s age, reading foundation, attention span, and goals. Young beginners (ages 4–6) usually start with Noorani Qaida, while older children who can read transition to Tajweed or short Surah memorization. Online Quran learning is highly effective for children when taught through private 1-on-1 sessions with certified teachers using engaging digital Mushafs, interactive visual boards, and gentle encouragement during standard 30-minute lessons. Read our guide on{' '}
        <Link href="/blog/how-to-choose-best-online-quran-classes-for-kids-usa" className="text-primary hover:underline font-semibold">
          how to choose online Quran classes for kids
        </Link>{' '}
        or explore our dedicated{' '}
        <Link href="/courses/quran-for-kids" className="text-primary hover:underline font-semibold">
          Quran for Kids
        </Link>{' '}
        program.
      </>
    ),
  },
  {
    question: 'Which Quran course is best for adults and reverts?',
    schemaAnswer:
      'Adults can begin from complete beginner Noorani Qaida or choose reading correction, Tajweed, Hifz, or Tafseer based on personal background. All adult lessons are 100% private and 1-on-1, providing a patient, supportive, and confidential learning environment tailored to adult schedules.',
    answer: (
      <>
        Adults and reverts can begin from complete beginner Noorani Qaida or choose reading fluency, Tajweed correction, Hifz, or Tafseer based on personal background. All adult lessons are 100% private and 1-on-1, providing a patient, supportive, and confidential learning environment tailored to busy work and family schedules. See our guide to{' '}
        <Link href="/blog/best-online-quran-classes-usa-one-to-one-qualified-tutors" className="text-primary hover:underline font-semibold">
          1-on-1 Quran tutors in the USA
        </Link>{' '}
        or visit{' '}
        <Link href="/courses/quran-for-adults" className="text-primary hover:underline font-semibold">
          Quran for Adults
        </Link>.
      </>
    ),
  },
  {
    question: 'Can I choose a Quran course based on my current level?',
    schemaAnswer:
      'Yes. You can select a program aligned with your existing skill level—whether starting from zero, practicing reading fluency, perfecting Tajweed rules, memorizing Surahs, or studying Tafseer. See our Quran learning timeline and evaluate your level during a free trial session.',
    answer: (
      <>
        Yes. You can select a program aligned with your exact skill level—whether starting from zero, practicing reading fluency, perfecting Tajweed rules, memorizing Surahs, or studying Tafseer. Check our{' '}
        <Link href="/blog/how-long-does-it-take-for-a-child-to-complete-the-quran-online" className="text-primary hover:underline font-semibold">
          Quran learning timeline
        </Link>{' '}
        and evaluate your proficiency during a 3-day free trial where our teacher will assess your reading and recommend the ideal course.
      </>
    ),
  },
  {
    question: 'Do you offer Quran with Tajweed classes?',
    schemaAnswer:
      'Yes. Our dedicated Quran with Tajweed course covers essential rules including Makharij al-Huroof (articulation points), Sifaat (letter characteristics), Noon & Meem Sakinah rules, Ghunnah, Qalqalah, and Madd (elongation) under the direct supervision of qualified instructors.',
    answer: (
      <>
        Yes. Our dedicated{' '}
        <Link href="/courses/tajweed" className="text-primary hover:underline font-semibold">
          Quran with Tajweed
        </Link>{' '}
        course covers essential rules including Makharij al-Huroof (articulation points), Sifaat (letter characteristics), Noon &amp; Meem Sakinah rules, Ghunnah, Qalqalah, and Madd (elongation) under the direct supervision of qualified instructors.
      </>
    ),
  },
  {
    question: 'Do you offer an online Hifz (memorization) program?',
    schemaAnswer:
      'Yes. We offer structured one-on-one Hifz classes for students wishing to memorize Juz Amma, selected Surahs (such as Surah Yaseen, Al-Mulk, Al-Kahf), or the entire Quran. The curriculum uses the traditional Sabaq (new lesson), Sabqi (recent revision), and Manzil (cumulative revision) method.',
    answer: (
      <>
        Yes. We offer structured one-on-one{' '}
        <Link href="/courses/hifz" className="text-primary hover:underline font-semibold">
          Hifz-ul-Quran
        </Link>{' '}
        classes for students wishing to memorize Juz Amma, selected Surahs (such as Surah Yaseen, Al-Mulk, Al-Kahf), or the entire Quran. The curriculum uses the traditional Sabaq (new lesson), Sabqi (recent revision), and Manzil (cumulative revision) method.
      </>
    ),
  },
  {
    question: 'Do you offer Quran Tafseer and translation classes?',
    schemaAnswer:
      'Yes. Our online Quran Tafseer course provides word-by-word translation, contextual explanation (Asbab al-Nuzul), thematic reflections, and practical life lessons taught in accessible English or Urdu by certified Islamic scholars.',
    answer: (
      <>
        Yes. Our online{' '}
        <Link href="/courses/tafseer" className="text-primary hover:underline font-semibold">
          Quran Tafseer
        </Link>{' '}
        course provides word-by-word translation, contextual explanation (Asbab al-Nuzul), thematic reflections, and practical life lessons taught in accessible English or Urdu by certified Islamic scholars.
      </>
    ),
  },
  {
    question: 'What is included in the Islamic Studies course?',
    schemaAnswer:
      'Our Islamic Studies program covers core Aqeedah (Islamic beliefs), Seerah of Prophet Muhammad ﷺ, Hadith, basic Fiqh (cleanliness, Wudu, and Salah), daily Duas, and Islamic manners (Akhlaq) tailored for young children, teenagers, and adult beginners.',
    answer: (
      <>
        Our{' '}
        <Link href="/courses/islamic-studies" className="text-primary hover:underline font-semibold">
          Islamic Studies
        </Link>{' '}
        program covers core Aqeedah (Islamic beliefs), Seerah of Prophet Muhammad ﷺ, Hadith, basic Fiqh (cleanliness, Wudu, and Salah),{' '}
        <Link href="/courses/daily-duas" className="text-primary hover:underline font-semibold">
          daily Duas
        </Link>
        , and Islamic manners (Akhlaq) tailored for young children, teenagers, and adult beginners.
      </>
    ),
  },
  {
    question: 'Can I choose a female Quran teacher?',
    schemaAnswer:
      'Yes. We have qualified female Quran teachers (Alimas and Qariahs) available for sisters, young girls, and young children who prefer learning with a female instructor.',
    answer: (
      <>
        Yes. We have qualified female Quran teachers (Alimas and Qariahs) available for sisters, young girls, and young children who prefer learning with a certified{' '}
        <Link href="/courses/female-quran-teacher" className="text-primary hover:underline font-semibold">
          female Quran teacher
        </Link>{' '}
        in private 1-on-1 lessons.
      </>
    ),
  },
  {
    question: 'How long does an online Quran course typically take?',
    schemaAnswer:
      'Typical duration varies by course and student commitment. Noorani Qaida usually takes 2 to 3 months, Quran Reading takes 6 to 12 months, and Tajweed takes 6 to 8 months. Actual progress depends on the student\'s starting level, class frequency, and consistent home practice.',
    answer: (
      <>
        Typical duration varies by course and student commitment. Noorani Qaida usually takes 2 to 3 months, Quran Reading takes 6 to 12 months, and Tajweed takes 6 to 8 months. Actual progress depends on the student&apos;s starting level, class frequency (e.g. 3 to 5 days weekly), and consistent home practice. You can review our course comparison table above for complete details.
      </>
    ),
  },
  {
    question: 'Can I change courses later?',
    schemaAnswer:
      'Yes. Students can easily transition to higher-level courses (such as moving from Qaida to Quran Reading, or Reading to Tajweed and Hifz) or add supplementary subjects like Islamic Studies and Duas as their skills develop.',
    answer: (
      <>
        Yes. Students can easily transition to higher-level courses (such as moving from Qaida to Quran Reading, or Reading to Tajweed and Hifz) or add supplementary subjects like Islamic Studies, Salah, and Duas as their skills develop.
      </>
    ),
  },
];

// Decision Guide Mapping
const decisionGuideItems = [
  {
    situation: 'Complete beginner with no prior Arabic knowledge',
    recommendation: 'Noorani Qaida',
    slug: 'noorani-qaida',
    desc: 'Master Arabic letters, Makharij articulation, and phonetics.',
  },
  {
    situation: 'Recognize Arabic letters but need verse-reading practice',
    recommendation: 'Quran Reading',
    slug: 'quran-reading',
    desc: 'Transition from basic letters to fluent recitation with stopping rules.',
  },
  {
    situation: 'Can read Quran and want correct pronunciation & rules',
    recommendation: 'Quran with Tajweed',
    slug: 'tajweed',
    desc: 'Master classical rules including Ghunnah, Qalqalah, and Madd.',
  },
  {
    situation: 'Want to memorize selected Surahs or the entire Quran',
    recommendation: 'Hifz-ul-Quran',
    slug: 'hifz',
    desc: 'Systematic memorization with Sabaq, Sabqi, and Manzil revision.',
  },
  {
    situation: 'Want to understand Quranic meaning & historical context',
    recommendation: 'Quran Tafseer',
    slug: 'tafseer',
    desc: 'Word-by-word translation, Asbab al-Nuzul, and moral lessons.',
  },
  {
    situation: 'Want foundational Islamic knowledge, Fiqh, & Seerah',
    recommendation: 'Islamic Studies',
    slug: 'islamic-studies',
    desc: 'Essential beliefs (Aqeedah), prophetic stories, and Islamic character.',
  },
  {
    situation: 'Want to learn Quranic vocabulary & basic Arabic grammar',
    recommendation: 'Arabic Language Course',
    slug: 'arabic-language',
    desc: 'Understand classical Arabic roots, grammar patterns, and verses.',
  },
  {
    situation: 'Sister or child seeking a qualified female instructor',
    recommendation: 'Female Quran Teacher Classes',
    slug: 'female-quran-teacher',
    desc: 'Private, nurturing 1-on-1 classes with certified female scholars.',
  },
];

// Course Comparison Overview Table Data
const courseComparisonData = [
  {
    name: 'Noorani Qaida',
    href: '/courses/noorani-qaida',
    bestFor: 'Kids & adults',
    startingLevel: 'Complete beginner',
    duration: '2-3 months',
    mainGoal: 'Read Arabic letters and connect them into words',
  },
  {
    name: 'Quran Reading',
    href: '/courses/quran-reading',
    bestFor: 'All ages',
    startingLevel: 'Knows Arabic letters (or finished Qaida)',
    duration: '6-12 months',
    mainGoal: 'Read the Quran fluently and confidently',
  },
  {
    name: 'Quran with Tajweed',
    href: '/courses/tajweed',
    bestFor: 'Kids, teens & adults',
    startingLevel: 'Can read the Quran',
    duration: '6-8 months',
    mainGoal: 'Correct pronunciation and Tajweed rules',
  },
  {
    name: 'Hifz-ul-Quran',
    href: '/courses/hifz',
    bestFor: 'Kids & adults',
    startingLevel: 'Can read the Quran',
    duration: '2-4 years (custom pace)',
    mainGoal: 'Memorize selected Surahs or the whole Quran',
  },
  {
    name: 'Quran Tafseer',
    href: '/courses/tafseer',
    bestFor: 'Beginners to advanced, including reverts',
    startingLevel: 'Any level',
    duration: 'Ongoing (30-45 min sessions)',
    mainGoal: 'Understand meaning and context',
  },
  {
    name: 'Islamic Studies',
    href: '/courses/islamic-studies',
    bestFor: 'Kids & adults',
    startingLevel: 'Any level',
    duration: 'Ongoing',
    mainGoal: 'Aqeedah, Seerah, Fiqh and manners',
  },
  {
    name: 'Daily Duas',
    href: '/courses/daily-duas',
    bestFor: 'All ages',
    startingLevel: 'Any level',
    duration: '2 months',
    mainGoal: 'Memorize everyday supplications',
  },
  {
    name: 'Salah & Prayer',
    href: '/courses/salah-course',
    bestFor: 'Beginners',
    startingLevel: 'Any level',
    duration: '1 month',
    mainGoal: 'Wudu and Salah with correct postures and recitation',
  },
  {
    name: 'Arabic Language',
    href: '/courses/arabic-language',
    bestFor: 'Kids & adults',
    startingLevel: 'Can read Arabic script',
    duration: '4-6 months',
    mainGoal: 'Quranic vocabulary and basic grammar',
  },
];

export default async function CoursesPage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  const courses = dbData.courses || [];

  // Helper to retrieve courses by slugs with strict typing
  const getCoursesBySlugs = (...slugs: string[]) => 
    slugs.map((slug) => courses.find((c) => c.slug === slug)).filter((c): c is NonNullable<typeof c> => c !== undefined);

  // Grouped courses
  const beginnerCourses = getCoursesBySlugs('noorani-qaida', 'quran-reading');
  const tajweedCourses = getCoursesBySlugs('tajweed');
  const memorizationCourses = getCoursesBySlugs('hifz', 'tafseer');
  const islamicLearningCourses = getCoursesBySlugs('islamic-studies', 'daily-duas', 'salah-course');
  const arabicCourses = getCoursesBySlugs('arabic-language');
  const specializedPrograms = getCoursesBySlugs('quran-for-kids', 'quran-for-adults', 'female-quran-teacher');

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.oqtutor.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Courses',
        item: 'https://www.oqtutor.com/courses',
      },
    ],
  };

  // CollectionPage & ItemList Schema
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Online Quran Courses for Kids & Adults',
    description: 'Explore online Quran courses for kids and adults, including Noorani Qaida, Quran Reading, Tajweed, Hifz, Tafseer, Islamic Studies, and Arabic at OQTutor.',
    url: 'https://www.oqtutor.com/courses',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: courses.length,
      itemListElement: courses.map((course, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: course.title,
        url: `https://www.oqtutor.com/courses/${course.slug}`,
      })),
    },
  };

  // FAQ Schema for SEO Rich Snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: courseFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.schemaAnswer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar adminLoggedIn={adminLoggedIn} />

      <main className="flex-grow">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="bg-foreground/[0.02] border-b border-card-border/60 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-xs text-muted-text">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-muted-text/40">/</span>
              </li>
              <li className="font-semibold text-foreground" aria-current="page">
                Courses
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden bg-foreground/[0.01] border-b border-card-border">
          <div className="absolute inset-0 top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
              Course Directory & Hub
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
              Online Quran Courses for Kids & Adults
            </h1>
            <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
            
            {/* Introduction (~90 words) */}
            <p className="mt-6 text-base sm:text-lg text-muted-text max-w-3xl mx-auto leading-relaxed font-normal">
              OQTutor offers structured online Quran courses for children and adults at different learning levels. Students can start with Noorani Qaida, progress to Quran Reading and Tajweed, or choose Hifz, Tafseer, Islamic Studies, or Arabic based on their goals. Every program features personalized one-on-one learning with qualified male and female tutors, interactive materials, and flexible scheduling to fit busy family and work routines worldwide. Whether you are an absolute beginner or an advanced learner, our structured curriculum helps you achieve your Quranic goals at your own pace.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book-free-trial"
                className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-bold shadow-md shadow-primary/20 transition-all inline-flex items-center gap-2"
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-full border border-card-border bg-card hover:bg-foreground/5 text-foreground text-xs sm:text-sm font-semibold transition-all"
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>

        {/* Immediate Course-Finder / Decision Guide */}
        <section className="py-14 sm:py-16 bg-background border-b border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4 py-1 inline-block">
                Level Assessment Guide
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Which Online Quran Course Should I Choose?
              </h2>
              <p className="mt-3 text-sm text-muted-text">
                Match your current Quranic experience and learning goals to the appropriate OQTutor program below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {decisionGuideItems.map((item, idx) => (
                <div
                  key={idx}
                  className="glass rounded-2xl border border-card-border/80 p-5 flex flex-col justify-between hover:border-primary/40 hover:shadow-md transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-secondary mb-2.5">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-text">
                        Your Goal
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/90 font-medium mb-4 leading-snug">
                      {item.situation}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-card-border/60">
                    <span className="text-[10px] text-muted-text/80 uppercase font-semibold block mb-1">
                      Recommended Course
                    </span>
                    <Link
                      href={`/courses/${item.slug}`}
                      className="text-xs sm:text-sm font-bold text-primary group-hover:text-primary-hover flex items-center justify-between transition-colors"
                    >
                      <span>{item.recommendation}</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Helper CTA */}
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.03] p-6 text-center max-w-3xl mx-auto">
              <p className="text-sm text-foreground font-medium">
                Not sure about your exact starting level? Our instructors evaluate reading proficiency during your trial lesson.
              </p>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs font-bold">
                <Link href="/book-free-trial" className="text-primary hover:underline inline-flex items-center gap-1">
                  <span>Schedule Free Trial Evaluation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-muted-text/40">•</span>
                <Link href="/tutors" className="text-muted-text hover:text-foreground transition-colors">
                  Meet Our Tutors
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course Comparison Overview Table */}
        <section className="py-16 sm:py-20 bg-foreground/[0.01] border-b border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Course Comparison
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Compare All Online Quran Courses
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
                Review target audiences, starting prerequisites, estimated durations, and key learning goals across our full curriculum to find the right fit for you or your children.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-card-border glass shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[720px] text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-foreground/[0.04] border-b border-card-border text-foreground font-bold">
                      <th scope="col" className="py-4 px-5 sm:px-6">Course</th>
                      <th scope="col" className="py-4 px-5 sm:px-6">Best for</th>
                      <th scope="col" className="py-4 px-5 sm:px-6">Starting level</th>
                      <th scope="col" className="py-4 px-5 sm:px-6">Typical duration</th>
                      <th scope="col" className="py-4 px-5 sm:px-6">Main goal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border/60">
                    {courseComparisonData.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-primary/[0.03] transition-colors group"
                      >
                        <td className="py-4 px-5 sm:px-6 font-semibold whitespace-nowrap">
                          <Link
                            href={row.href}
                            className="text-primary hover:text-primary-hover font-bold inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-all"
                          >
                            <span>{row.name}</span>
                            <ArrowRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-foreground/90 whitespace-nowrap">
                          <span className="inline-block px-2.5 py-1 rounded-full text-xs bg-foreground/[0.04] border border-card-border font-medium text-foreground/80">
                            {row.bestFor}
                          </span>
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-muted-text leading-relaxed">
                          {row.startingLevel}
                        </td>
                        <td className="py-4 px-5 sm:px-6 whitespace-nowrap">
                          <span className="font-semibold text-secondary flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-primary shrink-0" />
                            {row.duration}
                          </span>
                        </td>
                        <td className="py-4 px-5 sm:px-6 text-muted-text leading-relaxed">
                          {row.mainGoal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Categorized Course Directory */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
            
            {/* Category 1: Quran Courses for Beginners */}
            <div>
              <div className="border-b border-card-border pb-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      Quran Courses for Beginners
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-text mt-0.5">
                      Foundational programs designed for students taking their first steps in Arabic letters and Quran recitation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {beginnerCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Category 2: Quran Recitation & Tajweed Courses */}
            <div>
              <div className="border-b border-card-border pb-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Volume2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      Quran Recitation & Tajweed Courses
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-text mt-0.5">
                      Master phonetics, articulation points (Makharij), and classical rules to recite with accuracy and melody.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tajweedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Category 3: Quran Memorization & Understanding */}
            <div>
              <div className="border-b border-card-border pb-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      Quran Memorization & Understanding
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-text mt-0.5">
                      Structured Hifz revision cycles and verse-by-verse Tafseer commentary for deep spiritual connection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {memorizationCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Category 4: Islamic Learning Courses */}
            <div>
              <div className="border-b border-card-border pb-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      Islamic Learning Courses
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-text mt-0.5">
                      Essential Islamic studies, step-by-step prayer guidance, and daily prophetic supplications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {islamicLearningCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Category 5: Arabic Language Course */}
            <div>
              <div className="border-b border-card-border pb-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Languages className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      Arabic Language Course
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-text mt-0.5">
                      Learn Quranic vocabulary, word roots, and fundamental grammar to understand verses in classical Arabic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {arabicCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Category 6: Dedicated Learner Programs (Kids, Adults, Female Teachers) */}
            <div className="pt-4">
              <div className="border-b border-card-border pb-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
                      Dedicated Programs by Learner Needs
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-text mt-0.5">
                      Specialized curricula tailored for children, adult learners, and families seeking female instructors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializedPrograms.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Duration & Progress Disclaimer */}
        <section className="py-6 bg-foreground/[0.015] border-y border-card-border/60">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
              <span className="font-semibold text-foreground">Note on Course Durations:</span> All stated completion timelines are typical estimates. Actual progress varies according to the student&apos;s starting level, age, lesson frequency (e.g., 2, 3, or 5 classes per week), and daily home practice.
            </p>
          </div>
        </section>



        {/* How OQTutor Online Courses Work */}
        <section className="py-16 sm:py-20 bg-foreground/[0.01] border-y border-card-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Simple Learning Process
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                How OQTutor Online Quran Courses Work
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm text-muted-text max-w-2xl mx-auto">
                Our standard lesson length is 30 minutes, providing focused, distraction-free one-on-one instruction tailored to your schedule.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass rounded-2xl border border-card-border p-6 relative">
                <span className="text-3xl font-black text-primary/20 absolute top-4 right-4">01</span>
                <h3 className="text-base font-bold text-foreground mb-2">1. Book Free Trial</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Register online in under a minute. No credit card or registration fee is required.
                </p>
              </div>

              <div className="glass rounded-2xl border border-card-border p-6 relative">
                <span className="text-3xl font-black text-primary/20 absolute top-4 right-4">02</span>
                <h3 className="text-base font-bold text-foreground mb-2">2. Level Evaluation</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Meet your certified male or female tutor for a friendly skill assessment and goals discussion.
                </p>
              </div>

              <div className="glass rounded-2xl border border-card-border p-6 relative">
                <span className="text-3xl font-black text-primary/20 absolute top-4 right-4">03</span>
                <h3 className="text-base font-bold text-foreground mb-2">3. 1-on-1 Live Lessons</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Attend 30-minute private lessons via Zoom or Skype with interactive digital boards and screen sharing.
                </p>
              </div>

              <div className="glass rounded-2xl border border-card-border p-6 relative">
                <span className="text-3xl font-black text-primary/20 absolute top-4 right-4">04</span>
                <h3 className="text-base font-bold text-foreground mb-2">4. Track Progress</h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Receive monthly progress updates, homework guidance, and certification upon course milestone completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Merged Course Guidance & FAQs Section */}
        <section className="py-16 sm:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 rounded-full px-4.5 py-1.5 inline-block">
                Course Guidance & FAQs
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Choosing the Right Course & Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mt-4 rounded-full" />
              <p className="mt-4 text-sm text-muted-text max-w-2xl mx-auto font-normal">
                Direct answers regarding course placement, beginner recommendations, child vs. adult learning paths, syllabus details, and tutors.
              </p>
            </div>

            <div className="space-y-4">
              {courseFaqs.map((faq, idx) => (
                <details 
                  key={idx}
                  className="group border border-card-border/70 rounded-2xl glass p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-foreground cursor-pointer select-none list-none">
                    <span className="pr-4">{faq.question}</span>
                    <span className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-primary">
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

            <div className="mt-8 text-center text-xs text-muted-text">
              Have questions about billing, makeup classes, or technical requirements? Visit our dedicated <Link href="/faq" className="text-primary hover:underline font-semibold">General FAQ Page</Link>.
            </div>
          </div>
        </section>

        {/* Final Conversion Section */}
        <section className="py-16 bg-foreground/[0.015] border-t border-card-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Not Sure Which Quran Course Is Right for You?
            </h2>
            <p className="text-sm sm:text-base text-muted-text max-w-2xl mx-auto leading-relaxed">
              Book a 3-day free trial. Our certified male and female scholars will evaluate your starting level, discuss your personal learning pace, and recommend the best starting course with no obligation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/book-free-trial"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-lg transition-all duration-300 font-bold text-sm"
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-card-border bg-card hover:bg-foreground/5 text-foreground transition-all duration-300 font-semibold text-sm"
              >
                <span>View Pricing</span>
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-muted-text">
              <Link href="/how-it-works" className="hover:text-primary transition-colors">
                How It Works
              </Link>
              <span>•</span>
              <Link href="/tutors" className="hover:text-primary transition-colors">
                Meet Verified Tutors
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer data={dbData.contact} />
    </div>
  );
}

// Subcomponent: Standardized Course Card
function CourseCard({ course }: { course: any }) {
  const IconComponent = iconMap[course.icon] || BookOpen;

  // Curate image alt text based on course
  const altTextMap: Record<string, string> = {
    'noorani-qaida': 'Noorani Qaida course for beginners learning Arabic letters and phonetics',
    'quran-reading': 'Student practicing Quran reading and verse connection in online class',
    'tajweed': 'Online Tajweed lesson focusing on classical pronunciation and recitation rules',
    'hifz': 'Student memorizing Holy Quran verses with certified Hafiz instructor',
    'tafseer': 'Quran Tafseer lesson explaining word meanings and historical context',
    'islamic-studies': 'Islamic studies course covering Aqeedah, Seerah, and daily manners',
    'daily-duas': 'Child learning daily Islamic supplications and protection prayers',
    'salah-course': 'Student learning step-by-step Wudu and Salah prayer postures',
    'arabic-language': 'Student studying classical Quranic Arabic vocabulary and grammar rules',
    'quran-for-kids': 'Child learning Quran online in an engaging one-on-one lesson',
    'quran-for-adults': 'Adult student practicing Quran recitation in private one-on-one class',
    'female-quran-teacher': 'Sister learning Quran online with certified female Quran scholar',
  };

  const altText = altTextMap[course.slug] || `${course.title} at OQTutor`;

  return (
    <div className="glass rounded-3xl border border-card-border overflow-hidden flex flex-col h-full hover:translate-y-[-4px] hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative group">
      {/* Header Image Cover */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-foreground/5">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <Image
          src={course.image}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={course.slug === 'noorani-qaida' || course.slug === 'quran-reading'}
        />
        {/* Floating Category Icon badge */}
        <div className="absolute top-4 left-4 z-20 p-2.5 rounded-xl bg-background/95 backdrop-blur-md text-primary border border-card-border/80 shadow-md">
          <IconComponent className="h-5 w-5" />
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
            Best for: {course.suitableFor}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          <Link href={`/courses/${course.slug}`}>
            {course.title.replace(/ \| .*/, '')}
          </Link>
        </h3>
        
        <p className="text-xs sm:text-sm text-muted-text leading-relaxed font-normal mb-6 flex-grow">
          {course.overview ? course.overview.slice(0, 160) + '...' : course.description}
        </p>

        {/* Card Bottom CTA Link */}
        <div className="pt-4 border-t border-card-border/60 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-muted-text/70 uppercase font-semibold">
              Typical Duration
            </span>
            <span className="text-xs text-foreground font-medium">
              {course.duration}
            </span>
          </div>
          
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
}
