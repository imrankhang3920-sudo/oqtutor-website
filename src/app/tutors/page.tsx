import { Metadata } from 'next';
import { readDB } from '@/data/db';
import TutorsPageClient from './TutorsPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Meet Our Online Quran Tutors | OQTutor',
  description: 'Learn with qualified male and female Quran tutors for kids and adults. Classes on Zoom or Google Meet. Book a 3-day free trial.',
  alternates: {
    canonical: 'https://www.oqtutor.com/tutors',
  },
  openGraph: {
    title: 'Meet Our Online Quran Tutors | OQTutor',
    description: 'Learn with qualified male and female Quran tutors for kids and adults. Classes on Zoom or Google Meet. Book a 3-day free trial.',
    url: 'https://www.oqtutor.com/tutors',
    siteName: 'OQTutor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Online Quran Tutors | OQTutor',
    description: 'Learn with qualified male and female Quran tutors for kids and adults. Classes on Zoom or Google Meet. Book a 3-day free trial.',
  },
};

export default async function TutorsPage() {
  const dbData = readDB();

  return <TutorsPageClient initialTutors={dbData.tutors} contactData={dbData.contact} />;
}
