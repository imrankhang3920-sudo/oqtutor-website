import { Metadata } from 'next';
import { readDB } from '@/data/db';
import TutorsPageClient from './TutorsPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Certified Quran Tutors | Male & Female Teachers Online',
  description: 'Learn Quran with our certified male and female Quran teachers. Native Arabic and bilingual tutors, standard qualifications, and customized child-friendly pedagogy.',
  keywords: ['online quran teacher', 'male quran tutor', 'female quran teacher', 'qualified quran tutors', 'private quran teacher'],
};

export default async function TutorsPage() {
  const dbData = readDB();

  return <TutorsPageClient initialTutors={dbData.tutors} contactData={dbData.contact} />;
}
