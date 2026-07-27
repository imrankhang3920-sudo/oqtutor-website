import { Metadata } from 'next';
import { readDB } from '@/data/db';
import ContactPageClient from './ContactPageClient';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const hasParams = Object.keys(resolvedParams).length > 0;

  return {
    title: 'Contact Us | OQTutor Online Quran Academy',
    description: 'Get in touch with OQTutor. Reach our 24/7 academic support team via email, phone, or live WhatsApp chat for any general inquiries.',
    keywords: ['contact oqtutor', 'quran tutor phone number', 'support online quran', 'quran academy email'],
    alternates: {
      canonical: 'https://www.oqtutor.com/contact',
    },
    openGraph: {
      url: 'https://www.oqtutor.com/contact',
    },
    robots: hasParams ? {
      index: false,
      follow: true,
    } : {
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
