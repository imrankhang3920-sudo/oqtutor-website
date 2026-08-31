import { Metadata } from 'next';
import { readDB } from '@/data/db';
import ContactPageClient from './ContactPageClient';
import { createContactPageSchema, createBreadcrumbSchema } from '@/lib/structuredData';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Contact Us | OQTutor - Online Quran Academy',
    description: 'Contact OQTutor for any questions regarding our online Quran classes, pricing, or schedules. Support is available 24/7 via phone, email, and WhatsApp.',
    keywords: ['contact oqtutor', 'quran tutor phone number', 'support online quran', 'quran academy email'],
    alternates: {
      canonical: 'https://www.oqtutor.com/contact',
    },
    openGraph: {
      url: 'https://www.oqtutor.com/contact',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ContactPage() {
  const dbData = readDB();

  const contactPageSchema = createContactPageSchema(dbData.contact);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient contactData={dbData.contact} />
    </>
  );
}
