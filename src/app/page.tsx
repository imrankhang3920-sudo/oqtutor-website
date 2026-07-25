import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

// Force dynamic rendering to fetch fresh data on every page load
export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const hasParams = Object.keys(resolvedParams).length > 0;

  return {
    alternates: {
      canonical: 'https://www.oqtutor.com/',
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

export default async function HomePage() {
  const dbData = readDB();
  
  // Check if admin is logged in
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const adminLoggedIn = token ? verifyAdminToken(token) : false;

  return (
    <>
      <Navbar adminLoggedIn={adminLoggedIn} />
      <main className="flex-grow">
        <Hero data={dbData.hero} />
        <About data={dbData.about} />
        <Features data={dbData.features} />
        <Courses data={dbData.courses} />
        <Testimonials data={dbData.testimonials} />
        <FAQ data={dbData.faqs} />
        <Contact data={dbData.contact} />
      </main>
      <Footer data={dbData.contact} />
    </>
  );
}
