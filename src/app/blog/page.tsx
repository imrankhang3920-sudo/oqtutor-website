import { Metadata } from 'next';
import { getDBAsync } from '@/data/db';
import BlogPageClient from './BlogPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Quran Learning Blog | Recitation Tips & Tajweed Guides',
  description: 'Explore parenting guides, Tajweed learning tips, Quran memorization techniques, and articles on Islamic education written by certified OQTutor scholars.',
  keywords: ['quran learning tips', 'tajweed guide online', 'islamic parenting', 'hifz techniques', 'learn noorani qaida'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    url: '/blog',
  },
};

export default async function BlogPage() {
  const dbData = await getDBAsync();

  return <BlogPageClient initialBlogs={dbData.blogs || []} contactData={dbData.contact} />;
}
