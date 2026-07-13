import { Metadata } from 'next';
import { readDB } from '@/data/db';
import ContactPageClient from './ContactPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Book Free Trial Class | Contact Online Quran Academy',
  description: 'Book your 3 free trial online Quran classes. Form for parent name, student age, country selector, preferred times, and expert Tajweed or Hifz tutor matches.',
  keywords: ['book free trial quran', 'contact quran tutor', 'quran classes UK Europe', 'register online quran'],
  alternates: {
    canonical: '/contact',
  },
};

export default async function ContactPage() {
  const dbData = readDB();

  // Local Business Schema JSON-LD
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Online Quran Tutor (OQTutor)",
    "image": "https://oqtutor.com/logo.jpg",
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
