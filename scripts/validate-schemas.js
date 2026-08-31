const fs = require('fs');
const path = require('path');

// Read db.json
const dbPath = path.join(__dirname, '../src/data/db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

console.log('--- Starting Comprehensive Schema Validation ---');

const siteConfig = {
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

const errors = [];

function validateSchema(name, schema) {
  try {
    const jsonStr = JSON.stringify(schema);
    const parsed = JSON.parse(jsonStr);
    
    if (!parsed['@context'] || !parsed['@context'].includes('schema.org')) {
      errors.push(`[${name}] Missing valid @context: ${parsed['@context']}`);
    }
    if (!parsed['@type']) {
      errors.push(`[${name}] Missing @type`);
    }

    // Specific type validations
    if (parsed['@type'] === 'Course') {
      if (!parsed.name || !parsed.description) {
        errors.push(`[${name}] Course missing name or description`);
      }
      if (!parsed.educationalLevel) {
        errors.push(`[${name}] Course missing educationalLevel`);
      }
      if (!parsed.inLanguage || !Array.isArray(parsed.inLanguage)) {
        errors.push(`[${name}] Course missing inLanguage array`);
      }
      if (!parsed.offers || parsed.offers.price === undefined) {
        errors.push(`[${name}] Course missing valid offers`);
      }
    }

    if (parsed['@type'] === 'BlogPosting') {
      if (!parsed.headline || !parsed.description) {
        errors.push(`[${name}] BlogPosting missing headline or description`);
      }
      if (!parsed.datePublished || !/^\d{4}-\d{2}-\d{2}/.test(parsed.datePublished)) {
        errors.push(`[${name}] BlogPosting invalid datePublished: ${parsed.datePublished}`);
      }
      if (!parsed.image || !Array.isArray(parsed.image) || !parsed.image[0].startsWith('http')) {
        errors.push(`[${name}] BlogPosting invalid absolute image URL: ${JSON.stringify(parsed.image)}`);
      }
      if (!parsed.author || !parsed.author.name) {
        errors.push(`[${name}] BlogPosting missing author name`);
      }
    }

    if (parsed['@type'] === 'FAQPage') {
      if (!parsed.mainEntity || !Array.isArray(parsed.mainEntity) || parsed.mainEntity.length === 0) {
        errors.push(`[${name}] FAQPage empty or missing mainEntity`);
      }
      parsed.mainEntity.forEach((q, i) => {
        if (!q.name || !q.acceptedAnswer || !q.acceptedAnswer.text) {
          errors.push(`[${name}] FAQ item ${i} missing question or answer`);
        }
      });
    }

    if (parsed['@type'] === 'BreadcrumbList') {
      if (!parsed.itemListElement || !Array.isArray(parsed.itemListElement) || parsed.itemListElement.length === 0) {
        errors.push(`[${name}] BreadcrumbList empty or missing itemListElement`);
      }
      parsed.itemListElement.forEach((item, i) => {
        if (!item.name || !item.item || !item.item.startsWith('http')) {
          errors.push(`[${name}] Breadcrumb item ${i} invalid url: ${item.item}`);
        }
      });
    }

    return true;
  } catch (err) {
    errors.push(`[${name}] JSON serialization/syntax error: ${err.message}`);
    return false;
  }
}

// 1. Organization Schema
const organizationSchema = {
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
validateSchema('Global Organization', organizationSchema);

// 2. Course Schemas
dbData.courses.forEach((course) => {
  const courseSchema = {
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
  validateSchema(`Course: ${course.slug}`, courseSchema);

  if (course.faqs && course.faqs.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: course.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    };
    validateSchema(`Course FAQs: ${course.slug}`, faqSchema);
  }
});

// 3. Blog Schemas
function formatIsoDate(dateStr) {
  if (!dateStr) return undefined;
  const parsed = Date.parse(dateStr);
  if (!isNaN(parsed)) {
    return new Date(parsed).toISOString().split('T')[0];
  }
  return undefined;
}

dbData.blogs.forEach((blog) => {
  const publishedIso = formatIsoDate(blog.publishedAt) || '2026-07-01';
  const modifiedIso = formatIsoDate(blog.updatedAt) || publishedIso;
  const imageUrl = blog.coverImage
    ? (blog.coverImage.startsWith('http') ? blog.coverImage : `${siteConfig.url}${blog.coverImage.startsWith('/') ? '' : '/'}${blog.coverImage}`)
    : siteConfig.logo;

  const blogSchema = {
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
  validateSchema(`Blog: ${blog.slug}`, blogSchema);
});

// 4. Contact Schema
const contactSchema = {
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
    email: dbData.contact.email,
    telephone: dbData.contact.phone,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contactPhone,
      email: dbData.contact.email,
      contactType: 'customer support',
      areaServed: 'Worldwide',
      availableLanguage: ['English', 'Arabic', 'Urdu'],
    },
  },
};
validateSchema('Contact Page', contactSchema);

console.log(`\nValidation complete. Total checks: ${1 + dbData.courses.length * 2 + dbData.blogs.length + 1}`);

if (errors.length === 0) {
  console.log('SUCCESS: All JSON-LD schemas passed validation with 0 errors.');
} else {
  console.error(`FAILED with ${errors.length} errors:`);
  errors.forEach((e) => console.error(' - ' + e));
  process.exit(1);
}
