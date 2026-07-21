import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/cgi-bin/',
          '/cgi-bin',
          '/cgi-bin/*',
        ],
      },
    ],
    sitemap: 'https://www.oqtutor.com/sitemap.xml',
  };
}
