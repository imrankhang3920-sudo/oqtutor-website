import type { CourseData, FAQData } from '@/data/db';

export const siteConfig = {
  name: 'OQTutor',
  url: 'https://www.oqtutor.com',
  logo: 'https://www.oqtutor.com/logo.jpg',
  contactEmail: 'hello@oqtutor.com',
  social: {
    facebook: 'https://www.facebook.com/oqtutor',
    instagram: 'https://www.instagram.com/oqtutor/',
  },
};

export function createFaqPageSchema(faqs: FAQData[]) {
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
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    audience: {
      '@type': 'Audience',
      audienceType: course.suitableFor,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      duration: course.duration,
    },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.logo,
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};
