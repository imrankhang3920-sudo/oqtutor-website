import { MetadataRoute } from 'next';
import { readDB } from '@/data/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.oqtutor.com';

  // 1. Static pages of the website
  const staticRoutes = [
    '',
    '/about',
    '/courses',
    '/pricing',
    '/tutors',
    '/faq',
    '/blog',
    '/contact',
    '/privacy',
    '/how-it-works',
    '/cookie-policy',
    '/terms-and-conditions',
    '/refund-policy',
    '/online-quran-classes-usa',
    '/online-quran-classes-uk',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic SEO course subpages
  try {
    const dbData = readDB();
    const courseRoutes = dbData.courses.map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [...staticRoutes, ...courseRoutes];
  } catch (error) {
    console.error('Sitemap generator failed to read dynamic courses:', error);
    return staticRoutes;
  }
}
