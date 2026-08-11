import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  BookOpen, CheckCircle, Clock, Calendar, Users, 
  Award, HelpCircle, ArrowRight, ShieldCheck, Star 
} from 'lucide-react';
import CoursePageClient from './CoursePageClient';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
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
  const authorName = course.authorName || 'Qari Imran Hussain (Ijazah Certified Senior Instructor)';

  return {
    title: course.seoTitle,
    description: course.metaDescription,
    authors: [{ name: authorName }],
    alternates: {
      canonical: canonicalUrl,
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
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.seoTitle,
      description: course.metaDescription,
      images: [course.image.startsWith('/') ? `${siteUrl}${course.image}` : course.image],
    },
    keywords: [course.focusKeyword, ...course.secondaryKeywords],
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const dbData = readDB();
  const course = dbData.courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  // Generate Schemas
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": course.title,
        "item": `https://oqtutor.com/courses/${course.slug}`
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "url": `https://oqtutor.com/courses/${course.slug}`,
    "inLanguage": "en",
    "educationalCredentialAwarded": "Ijazah Certification",
    "provider": {
      "@type": "Organization",
      "name": "Online Quran Tutor",
      "sameAs": "https://oqtutor.com"
    },
    "author": {
      "@type": "Person",
      "name": course.authorName || "Qari Imran Hussain",
      "jobTitle": "Senior Tajweed Instructor"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "duration": course.duration,
      "courseWorkload": course.classStructure
    },
    "offers": {
      "@type": "Offer",
      "category": "Trial",
      "price": "0.00",
      "priceCurrency": "USD",
      "eligibleRegion": {
        "@type": "Country",
        "name": "Global"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": course.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

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
      <CoursePageClient course={course} contactData={dbData.contact} testimonials={dbData.testimonials || []} />
      <Footer data={dbData.contact} />
    </>
  );
}
