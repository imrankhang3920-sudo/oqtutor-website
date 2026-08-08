import { Metadata } from 'next';
import { readDB } from '@/data/db';
import ContactPageClient from './ContactPageClient';

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

  // Local Business Schema JSON-LD
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Online Quran Tutor (OQTutor)",
    "image": "https://www.oqtutor.com/logo.jpg",
    "telephone": dbData.contact.phone,
    "email": dbData.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": dbData.contact.location
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ContactPageClient contactData={dbData.contact} />
    </>
  );
}
