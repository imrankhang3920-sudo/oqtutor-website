import { cookies } from 'next/headers';
import { readDB } from '@/data/db';
import { verifyAdminToken } from '@/lib/auth';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Tutors from '@/components/Tutors';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Force dynamic rendering to fetch fresh data on every page load
export const dynamic = 'force-dynamic';

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
        <Mission data={dbData.mission} />
        <Features data={dbData.features} />
        <Courses data={dbData.courses} />
        <Tutors data={dbData.tutors.slice(0, 4)} />
        <Testimonials data={dbData.testimonials} />
        <FAQ data={dbData.faqs} />
        <Contact data={dbData.contact} />
      </main>
      <Footer data={dbData.contact} />
    </>
  );
}
