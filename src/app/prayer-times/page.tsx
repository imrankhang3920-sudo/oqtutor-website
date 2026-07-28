import { Metadata } from 'next';
import { readDB } from '@/data/db';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrayerTimesClientPage from './PrayerTimesClientPage';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Prayer Times — Accurate Namaz Timings Worldwide | OQTutor',
  description: 'Get accurate daily prayer times worldwide. Calculate precise Fajr, Dhuhr, Asr, Maghrib, and Isha Namaz timings using your coordinates or city search.',
  alternates: {
    canonical: '/prayer-times',
  },
  openGraph: {
    url: '/prayer-times',
  },
};

export default async function PrayerTimesPage() {
  const dbData = readDB();

  return (
    <>
      <Navbar />
      <PrayerTimesClientPage contactData={dbData.contact} />
      <Footer data={dbData.contact} />
    </>
  );
}
