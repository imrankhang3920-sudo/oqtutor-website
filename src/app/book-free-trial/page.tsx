import { Metadata } from 'next';
import { readDB } from '@/data/db';
import BookFreeTrialClient from './BookFreeTrialClient';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Book 3-Day Free Trial Online Quran Classes | OQTutor',
    description: 'Book a 3-day free trial of our online Quran classes. Choose your course, timezone, and tutor preference with no card details or contracts required.',
    keywords: ['book free trial quran', 'online quran classes trial', 'free quran trial', 'register online quran lessons'],
    alternates: {
      canonical: 'https://www.oqtutor.com/book-free-trial',
    },
    openGraph: {
      url: 'https://www.oqtutor.com/book-free-trial',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BookFreeTrialPage({ searchParams }: Props) {
  const dbData = readDB();
  const resolvedParams = await searchParams;
  const plan = typeof resolvedParams.plan === 'string' ? resolvedParams.plan : undefined;

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
      <BookFreeTrialClient contactData={dbData.contact} selectedPlan={plan} />
    </>
  );
}
