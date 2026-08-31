import type { CourseData, FAQData, BlogData, ContactData } from '@/data/db';

export const siteConfig = {
  name: 'OQTutor',
  legalName: 'Online Quran Tutor (OQTutor)',
  url: 'https://www.oqtutor.com',
  logo: 'https://www.oqtutor.com/logo.jpg',
  contactEmail: 'hello@oqtutor.com',
  contactPhone: '+1 (248) 782-6565',
  social: {
    facebook: 'https://www.facebook.com/oqtutor',
    instagram: 'https://www.instagram.com/oqtutor/',
  },
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: siteConfig.logo,
  image: siteConfig.logo,
  description: 'OQTutor is a premier online Quran academy providing personalized 1-on-1 Quran, Tajweed, and Islamic Studies classes with certified male and female tutors.',
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contactPhone,
    email: siteConfig.contactEmail,
    contactType: 'customer service',
    areaServed: 'Worldwide',
    availableLanguage: ['English', 'Arabic', 'Urdu'],
  },
};

export function createFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function createCourseSchema(course: CourseData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: `${siteConfig.url}/courses/${course.slug}`,
    inLanguage: ['en', 'ar'],
    educationalLevel: course.suitableFor || 'All Ages',
    provider: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.logo,
    },
    audience: {
      '@type': 'Audience',
      audienceType: course.suitableFor,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      name: '3-Day Free Trial',
      url: `${siteConfig.url}/book-free-trial`,
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      duration: course.duration,
    },
  };
}

function formatIsoDate(dateStr?: string): string | undefined {
  if (!dateStr) return undefined;
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) {
    return new Date(parsed).toISOString().split('T')[0];
  }
  return undefined;
}

export function createBlogPostSchema(blog: BlogData) {
  const publishedIso = formatIsoDate(blog.publishedAt) || '2026-07-01';
  const modifiedIso = formatIsoDate(blog.updatedAt) || publishedIso;
  const imageUrl = blog.coverImage
    ? (blog.coverImage.startsWith('http') ? blog.coverImage : `${siteConfig.url}${blog.coverImage.startsWith('/') ? '' : '/'}${blog.coverImage}`)
    : siteConfig.logo;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.description,
    url: `${siteConfig.url}/blog/${blog.slug}`,
    mainEntityOfPage: `${siteConfig.url}/blog/${blog.slug}`,
    image: [imageUrl],
    datePublished: publishedIso,
    dateModified: modifiedIso,
    author: {
      '@type': 'Organization',
      name: 'OQTutor Online Quran Academy',
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logo,
      },
    },
  };
}

export function createContactPageSchema(contact?: ContactData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact OQTutor',
    url: `${siteConfig.url}/contact`,
    description: 'Contact OQTutor for any questions regarding our online Quran classes, pricing, or schedules. Support is available 24/7.',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: siteConfig.logo,
      email: contact?.email || siteConfig.contactEmail,
      telephone: contact?.phone || siteConfig.contactPhone,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: contact?.phone || siteConfig.contactPhone,
        email: contact?.email || siteConfig.contactEmail,
        contactType: 'customer support',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Arabic', 'Urdu'],
      },
    },
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url.startsWith('/') ? '' : '/'}${item.url}`,
    })),
  };
}
