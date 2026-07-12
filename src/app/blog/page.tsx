import { Metadata } from 'next';
import { readDB } from '@/data/db';
import BlogPageClient from './BlogPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Quran Learning Blog & Tips | Online Quran Academy',
  description: 'Read parenting guides, Tajweed learning tips, Hifz techniques, and Islamic education resources written by certified scholars at OQTutor.',
  keywords: ['quran learning tips', 'tajweed guide online', 'islamic parenting', 'hifz techniques', 'learn noorani qaida'],
};

export default async function BlogPage() {
  const dbData = readDB();

  return <BlogPageClient initialBlogs={dbData.blogs} contactData={dbData.contact} />;
}
