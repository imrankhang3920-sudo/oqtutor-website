import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MidPageFormSection from '@/components/MidPageFormSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import TutorTrustBlock from '@/components/TutorTrustBlock';
import Testimonials from '@/components/Testimonials';
import FAQ, { DEFAULT_HOMEPAGE_FAQS } from '@/components/FAQ';
import Contact from '@/components/Contact';
import ServingLocationsSection from '@/components/ServingLocationsSection';
import BlogPreview from '@/components/BlogPreview';
import HelpSection from '@/components/HelpSection';
import StickyFormButton from '@/components/StickyFormButton';
import ScrollTriggerForm from '@/components/ScrollTriggerForm';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { createFaqPageSchema, siteConfig } from '@/lib/structuredData';
import Script from 'next/script';


// Force dynamic rendering to fetch fresh data on every page load
export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const metaDescription = "Learn Quran Online | One to One Quran Classes for Kids and Adults. Certified male & female tutors for Tajweed, Hifz & Noorani Qaida. Book your free trial!";
  const metaTitle = "Learn Quran Online | One to One Quran Classes for Kids and Adults | OQTutor";

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: 'https://www.oqtutor.com/',
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: 'https://www.oqtutor.com/',
      images: [
        {
          url: 'https://www.oqtutor.com/logo.jpg',
          width: 1200,
          height: 630,
          alt: 'OQTutor Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: ['https://www.oqtutor.com/logo.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

import { getDBAsync } from '@/data/db';

export default async function HomePage() {
  const dbData = (await getDBAsync()) || {};
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  // Personalized & High-Conversion Hero Data
  const homepageHeroData = {
    ...(dbData.hero || {}),
    title: dbData.hero?.title || "Learn Quran Online at Your Own Pace with Expert Teachers",
    subtitle: dbData.hero?.subtitle || "Learn Quran online with one to one classes for kids and adults. Study Quran reading, Tajweed, memorization, and Islamic Studies with qualified male and female teachers from the comfort of home.",
    ctaText: dbData.hero?.ctaText || "Book Your 3-Day Free Trial",
    ctaLink: dbData.hero?.ctaLink || "#book-trial",
    whatsappText: dbData.hero?.whatsappText || "Chat on WhatsApp",
    whatsappNumber: dbData.hero?.whatsappNumber || "+923478704442",
    backgroundImage: dbData.hero?.backgroundImage || "https://images.unsplash.com/photo-1609599006353-e629f1d40968?q=80&w=1600&auto=format&fit=crop"
  };

  // Schema Markup Data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OQTutor",
    "url": "https://www.oqtutor.com",
    "description": "Online Quran academy providing personalized 1-on-1 Quran, Tajweed, and Islamic Studies classes with certified male and female tutors."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oqtutor.com"
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "OQTutor Online Quran Courses",
    "description": "Personalized online Quranic curriculum designed for students worldwide.",
    "itemListElement": (dbData.courses || []).slice(0, 8).map((c, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.description,
        "url": `https://www.oqtutor.com/courses/${c.slug}`,
        "educationalLevel": c.suitableFor || "All Ages",
        "inLanguage": ["en", "ar"],
        "provider": {
          "@type": "EducationalOrganization",
          "name": "OQTutor",
          "url": "https://www.oqtutor.com"
        }
      }
    }))
  };

  const homepageFaqs = (dbData.faqs && dbData.faqs.length >= 6) ? dbData.faqs.slice(0, 6) : DEFAULT_HOMEPAGE_FAQS;
  const faqSchema = createFaqPageSchema(homepageFaqs);

  const contactData = dbData.contact || {
    email: 'info@oqtutor.com',
    phone: '+1 (248) 782-6565',
    whatsapp: '+923478704442',
    location: 'USA, UK, Canada & Australia',
    aboutText: 'OQTutor provides personalized one-to-one online Quran classes with certified male and female tutors for kids and adults worldwide.'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Navbar adminLoggedIn={adminLoggedIn} headerConfig={dbData.headerNav} />
      
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero data={homepageHeroData} />

        {/* 2. Core Curriculum: Featured Quran Courses (Moved up for immediate discovery) */}
        <FeaturedCourses />

        {/* 3. NEW Trust Block: Meet Our Certified Male & Female Tutors */}
        <TutorTrustBlock />

        {/* 4. Real Stories, Real Results: What Parents & Students Say */}
        <Testimonials data={dbData.testimonials || []} />

        {/* 5. Simple Steps: How It Works */}
        <HowItWorksSection />

        {/* 6. Not Sure Where to Start? Let Us Help You! */}
        <HelpSection whatsappUrl={dbData.contact?.whatsapp} />

        {/* Compact Conversion CTA Banner */}
        <MidPageFormSection whatsappNumber={dbData.contact?.whatsapp} />

        {/* 7. Local Time Zones: Serving Muslim Families Worldwide */}
        <ServingLocationsSection />

        {/* 8. Guides & Articles: Educational Guides for Your Family's Quran Journey */}
        <BlogPreview />

        {/* 9. Questions & Answers: Frequently Asked Questions (Upgraded AEO FAQs) */}
        <FAQ data={homepageFaqs} />

        {/* 10. Primary Conversion Zone: Get in Touch / Book Your 3-Day Free Trial Form */}
        <Contact data={contactData} />
      </main>
      
      <Footer data={contactData} footerConfig={dbData.footerNav} />
      
      {/* Sticky & Scroll Trigger Conversion Boosters */}
      <StickyFormButton />
      <ScrollTriggerForm />
    </>
  );
}
