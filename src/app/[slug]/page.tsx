import { getDBAsync } from '@/data/db';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageRenderer from '@/components/PageRenderer';
import { Metadata } from 'next';
import { verifyAdminToken } from '@/lib/auth';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const db = await getDBAsync();
  const page = (db.pages || []).find((p) => p.slug === slug && p.isPublished);

  if (!page) {
    return {
      title: 'Page Not Found | OQTutor',
    };
  }

  return {
    title: page.metaTitle || `${page.title} | OQTutor`,
    description: page.metaDescription || `Learn more about ${page.title} at OQTutor.`,
    alternates: {
      canonical: `https://www.oqtutor.com/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle || page.title,
      description: page.metaDescription || '',
      url: `https://www.oqtutor.com/${page.slug}`,
    },
  };
}

export default async function CustomPage({ params }: Props) {
  const { slug } = await params;
  const db = await getDBAsync();
  const page = (db.pages || []).find((p) => p.slug === slug && p.isPublished);

  if (!page) {
    notFound();
  }

  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  const isAdmin = token ? verifyAdminToken(token) : false;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar adminLoggedIn={isAdmin} headerConfig={db.headerNav} />

      <main className="flex-1 py-12 sm:py-16">
        <PageRenderer blocks={page.blocks || []} />
      </main>

      <Footer data={db.contact} footerConfig={db.footerNav} />
    </div>
  );
}
