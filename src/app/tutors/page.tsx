import { Metadata } from 'next';
import { readDB } from '@/data/db';
import TutorsPageClient from './TutorsPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Certified Male & Female Online Quran Tutors (1-on-1) – OQTutor',
  description: 'Learn with Ijazah-certified male and female online Quran tutors. Fluent in English, Urdu & Arabic, background-checked for kids, with a Free 1-on-1 Trial.',
  alternates: {
    canonical: 'https://www.oqtutor.com/tutors',
  },
  openGraph: {
    title: 'Certified Male & Female Online Quran Tutors (1-on-1) – OQTutor',
    description: 'Learn with Ijazah-certified male and female online Quran tutors. Fluent in English, Urdu & Arabic, background-checked for kids, with a Free 1-on-1 Trial.',
    url: 'https://www.oqtutor.com/tutors',
    siteName: 'OQTutor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified Male & Female Online Quran Tutors (1-on-1) – OQTutor',
    description: 'Learn with Ijazah-certified male and female online Quran tutors. Fluent in English, Urdu & Arabic, background-checked for kids, with a Free 1-on-1 Trial.',
  },
};

export default async function TutorsPage() {
  const dbData = readDB();

  return <TutorsPageClient initialTutors={dbData.tutors} contactData={dbData.contact} />;
}
