import { Metadata } from 'next';
import { readDB } from '@/data/db';
import TutorsPageClient from './TutorsPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Certified Male & Female Online Quran Teachers | OQTutor',
  description: 'Study with certified male and female Quran tutors online. Our teachers hold authentic Ijazah qualifications. Select your preferred bilingual tutor.',
  keywords: ['online quran teacher', 'male quran tutor', 'female quran teacher', 'qualified quran tutors', 'private quran teacher'],
  alternates: {
    canonical: 'https://www.oqtutor.com/tutors',
  },
  openGraph: {
    url: 'https://www.oqtutor.com/tutors',
  },
};

export default async function TutorsPage() {
  const dbData = readDB();

  return <TutorsPageClient initialTutors={dbData.tutors} contactData={dbData.contact} />;
}
