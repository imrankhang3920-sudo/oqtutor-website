import { MetadataRoute } from 'next';
import { getDBAsync } from '@/data/db';

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
    '/locations/usa',
    '/online-quran-classes-for-kids-usa',
    '/locations/usa/california',
    '/locations/usa/illinois',
    '/locations/usa/michigan',
    '/locations/usa/new-york',
    '/locations/usa/texas',
    '/locations/uk',
    '/locations/uk/london',
    '/locations/canada',
    '/locations/australia',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Dynamic SEO course subpages & 3. Dynamic blog subpages
  try {
    const dbData = await getDBAsync();
    const courseRoutes = (dbData.courses || []).map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    const blogRoutes = (dbData.blogs || []).map((blog) => {
      let lastMod = new Date();
      const rawDate = blog.updatedAt || blog.publishedAt;
      if (rawDate) {
        const parsed = new Date(rawDate);
        if (!isNaN(parsed.getTime())) {
          lastMod = parsed;
        }
      }
      return {
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: lastMod,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      };
    });

    const customPageRoutes = (dbData.pages || [])
      .filter((p) => p.isPublished)
      .map((p) => ({
        url: `${baseUrl}/${p.slug}`,
        lastModified: new Date(p.updatedAt || Date.now()),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    return [...staticRoutes, ...courseRoutes, ...blogRoutes, ...customPageRoutes];
  } catch (error) {
    console.error('Sitemap generator failed to read dynamic courses, blogs, or pages:', error);
    return staticRoutes;
  }
}
