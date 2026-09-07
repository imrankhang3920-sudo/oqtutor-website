import { MetadataRoute } from 'next';
import { getDBAsync } from '@/data/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.oqtutor.com';
  const currentDate = new Date();

  // Core pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/courses`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/how-it-works`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tutors`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/book-free-trial`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/cookie-policy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/refund-policy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },

    // Location Hub
    { url: `${baseUrl}/locations`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },

    // Country Location Pages (Priority: 0.8)
    { url: `${baseUrl}/locations/usa`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/online-quran-classes-for-kids-usa`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/locations/uk`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/locations/canada`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/locations/australia`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },

    // State & City Location Pages (Priority: 0.7)
    { url: `${baseUrl}/locations/usa/california`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/locations/usa/illinois`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/locations/usa/michigan`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/locations/usa/new-york`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/locations/usa/texas`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/locations/uk/london`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.7 },
  ];

  // Dynamic Course & Blog Pages
  try {
    const dbData = await getDBAsync();
    
    const courseRoutes: MetadataRoute.Sitemap = (dbData.courses || []).map((course) => ({
      url: `${baseUrl}/courses/${course.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

    const blogRoutes: MetadataRoute.Sitemap = (dbData.blogs || []).map((blog) => {
      let lastMod = currentDate;
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
        changeFrequency: 'weekly',
        priority: 0.7,
      };
    });

    const customPageRoutes: MetadataRoute.Sitemap = (dbData.pages || [])
      .filter((p) => p.isPublished)
      .map((p) => ({
        url: `${baseUrl}/${p.slug}`,
        lastModified: new Date(p.updatedAt || Date.now()),
        changeFrequency: 'weekly',
        priority: 0.7,
      }));

    return [...staticRoutes, ...courseRoutes, ...blogRoutes, ...customPageRoutes];
  } catch (error) {
    console.error('Sitemap generator error:', error);
    return staticRoutes;
  }
}
