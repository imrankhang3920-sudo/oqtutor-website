import { Metadata } from 'next';
import { readDB } from '@/data/db';
import TutorsPageClient from './TutorsPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Certified Male & Female Online Quran Tutors (1-on-1 Live Classes)',
  description: 'Study with certified male and female Quran tutors online. Our teachers hold authentic Ijazah qualifications. Select your preferred bilingual tutor.',
  alternates: {
    canonical: 'https://www.oqtutor.com/tutors',
  },
  openGraph: {
    title: 'Certified Male & Female Online Quran Tutors (1-on-1 Live Classes)',
    description: 'Study with certified male and female Quran tutors online. Our teachers hold authentic Ijazah qualifications. Select your preferred bilingual tutor.',
    url: 'https://www.oqtutor.com/tutors',
    siteName: 'OQTutor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Certified Male & Female Online Quran Tutors (1-on-1 Live Classes)',
    description: 'Study with certified male and female Quran tutors online. Our teachers hold authentic Ijazah qualifications. Select your preferred bilingual tutor.',
  },
};

export default async function TutorsPage() {
  const dbData = readDB();

  return <TutorsPageClient initialTutors={dbData.tutors} contactData={dbData.contact} />;
}
