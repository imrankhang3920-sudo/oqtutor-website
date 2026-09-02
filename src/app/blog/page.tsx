import { Metadata } from 'next';
import { getDBAsync } from '@/data/db';
import BlogPageClient from './BlogPageClient';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{ page?: string; category?: string; search?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const pageNum = parseInt(resolvedParams.page || '1', 10) || 1;
  const pageSuffix = pageNum > 1 ? ` (Page ${pageNum})` : '';

  return {
    title: `Quran Learning Blog${pageSuffix} | Recitation Tips & Tajweed Guides`,
    description: `Explore parenting guides, Tajweed learning tips, Quran memorization techniques, and articles on Islamic education written by certified OQTutor scholars.${pageNum > 1 ? ` Browse page ${pageNum}.` : ''}`,
    keywords: ['quran learning tips', 'tajweed guide online', 'islamic parenting', 'hifz techniques', 'learn noorani qaida'],
    alternates: {
      canonical: 'https://www.oqtutor.com/blog',
    },
    openGraph: {
      url: pageNum > 1 ? `https://www.oqtutor.com/blog?page=${pageNum}` : 'https://www.oqtutor.com/blog',
      title: `Quran Learning Blog${pageSuffix} | Recitation Tips & Tajweed Guides`,
      description: 'Explore parenting guides, Tajweed learning tips, Quran memorization techniques, and articles on Islamic education written by certified OQTutor scholars.',
      siteName: 'OQTutor',
      type: 'website',
    },
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const dbData = await getDBAsync();
  const initialPage = parseInt(resolvedParams.page || '1', 10) || 1;
  const initialCategory = resolvedParams.category || 'All';
  const initialSearch = resolvedParams.search || '';

  return (
    <BlogPageClient
      initialBlogs={dbData.blogs || []}
      contactData={dbData.contact}
      initialPage={initialPage}
      initialCategory={initialCategory}
      initialSearch={initialSearch}
    />
  );
}
