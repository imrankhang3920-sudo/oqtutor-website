import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HelpSection from '@/components/HelpSection';
import Link from 'next/link';
import { 
  BookOpen, CheckCircle, Clock, Calendar, Users, 
  Award, HelpCircle, ArrowRight, ShieldCheck, Star 
} from 'lucide-react';
import CoursePageClient from './CoursePageClient';
import { createCourseSchema, createFaqPageSchema, createBreadcrumbSchema } from '@/lib/structuredData';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const dbData = readDB();
  return (dbData.courses || []).map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dbData = readDB();
  const course = dbData.courses.find((c) => c.slug === slug);

  if (!course) {
    return {};
  }

  const siteUrl = 'https://www.oqtutor.com';
  const canonicalUrl = `${siteUrl}/courses/${course.slug}`;
  const publishedTime = course.createdAt || '2025-01-15T00:00:00.000Z';
  const modifiedTime = course.updatedAt || new Date().toISOString();
  const authorName = course.authorName || 'OQTutor Quran Faculty';

  const imageAlt = course.slug === 'daily-duas' 
    ? 'Student learning daily duas online in a live 1-on-1 class with a tutor'
    : course.title;

  const metadata: Metadata = {
    title: course.seoTitle,
    description: course.metaDescription,
    authors: [{ name: authorName }],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: course.seoTitle,
      description: course.metaDescription,
      url: canonicalUrl,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [authorName],
      siteName: 'Online Quran Tutor',
      images: [
        {
          url: course.image.startsWith('/') ? `${siteUrl}${course.image}` : course.image,
          width: 800,
          height: 600,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.seoTitle,
      description: course.metaDescription,
      images: [course.image.startsWith('/') ? `${siteUrl}${course.image}` : course.image],
    },
  };

  return metadata;
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const dbData = readDB();
  const course = dbData.courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Generate Schemas
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Courses', url: '/courses' },
    { name: course.slug === 'daily-duas' ? 'Daily Duas' : course.title, url: `/courses/${course.slug}` },
  ]);

  let courseSchema = createCourseSchema(course);
  let faqSchema = createFaqPageSchema(course.faqs || []);

  if (course.slug === 'tafseer') {
    courseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Online Quran Tafseer Classes (1-on-1 Course for Adults/Kids)',
      description: 'Learn Quran Tafseer online with Ijazah-certified scholars. Deep word-by-word translation, historical context (Asbab al-Nuzul) & flexible 1-on-1 schedules.',
      url: 'https://www.oqtutor.com/courses/tafseer',
      inLanguage: ['en', 'ar'],
      educationalLevel: 'Beginners, Intermediate & Advanced (Kids & Adults)',
      provider: {
        '@type': 'Organization',
        name: 'OQTutor',
        url: 'https://www.oqtutor.com',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'PT30M',
      },
      offers: [
        {
          '@type': 'Offer',
          name: '1-on-1 Free Assessment Trial',
          price: '0',
          priceCurrency: 'USD',
          category: 'FreeTrial',
          url: 'https://www.oqtutor.com/book-free-trial',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Standard 1-on-1 Monthly Plan',
          price: '40.00',
          priceCurrency: 'USD',
          category: 'Subscription',
          url: 'https://www.oqtutor.com/pricing',
          availability: 'https://schema.org/InStock',
        },
      ],
    } as any;

    faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does the Online Quran Tafseer course take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The duration depends on your study goals and class frequency. Completing foundational Tafseer of Juz Amma (Juz 30) or selected famous Surahs typically takes 3 to 6 months with 2 to 3 lessons per week. A comprehensive verse-by-verse study of the entire Holy Quran spans 1.5 to 3 years of regular classes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can beginners or kids join Tafseer classes?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! Absolute beginners, reverts, and children aged 10 and above can readily join. No prior knowledge of the Arabic language is required, as lessons are taught in clear, fluent English with word-by-word translations, simplified root vocabulary, and engaging moral stories.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer female Tafseer teachers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, OQTutor has a dedicated faculty of certified, English-fluent female Islamic scholars (Alimahs) holding formal degrees in Islamic sciences. Sisters and young girls can learn comfortably in a 100% private, supportive one-on-one setting.',
          },
        },
      ],
    };
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />
      <CoursePageClient 
        course={course} 
        contactData={dbData.contact} 
        testimonials={dbData.testimonials || []} 
        pricing={dbData.pricing || []} 
      />
      <HelpSection whatsappUrl={dbData.contact?.whatsapp} />
      <Footer data={dbData.contact} />
    </>
  );
}
