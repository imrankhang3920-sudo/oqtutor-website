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
    '/online-quran-classes-usa/new-york',
    '/online-quran-classes-uk',
    '/online-quran-classes-canada',
    '/locations/australia',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic SEO course subpages & 3. Dynamic blog subpages
  try {
    const dbData = readDB();
    const courseRoutes = dbData.courses.map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    const blogRoutes = (dbData.blogs || []).map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...courseRoutes, ...blogRoutes];
  } catch (error) {
    console.error('Sitemap generator failed to read dynamic courses or blogs:', error);
    return staticRoutes;
  }
}
