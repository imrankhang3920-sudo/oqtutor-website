import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // 1. Rename redirects for changed course slugs (singular /course/* to new plural /courses/* paths)
      {
        source: '/course/quran-with-tajweed',
        destination: '/courses/tajweed',
        permanent: true,
      },
      {
        source: '/course/hifz-quran',
        destination: '/courses/hifz',
        permanent: true,
      },
      {
        source: '/course/quran-memorization-hifz',
        destination: '/courses/hifz',
        permanent: true,
      },
      {
        source: '/course/online-quran-classes-for-kids',
        destination: '/courses/quran-for-kids',
        permanent: true,
      },
      {
        source: '/course/online-quran-classes-for-adults',
        destination: '/courses/quran-for-adults',
        permanent: true,
      },
      // 2. Specific legacy /courses/* to new /courses/* re-mappings
      {
        source: '/courses/quran-with-tajweed',
        destination: '/courses/tajweed',
        permanent: true,
      },
      {
        source: '/courses/hifz-quran',
        destination: '/courses/hifz',
        permanent: true,
      },
      {
        source: '/courses/quran-memorization-hifz',
        destination: '/courses/hifz',
        permanent: true,
      },
      {
        source: '/courses/online-quran-classes-for-kids',
        destination: '/courses/quran-for-kids',
        permanent: true,
      },
      {
        source: '/courses/online-quran-classes-for-adults',
        destination: '/courses/quran-for-adults',
        permanent: true,
      },
      // 3. Old legacy WordPress mappings
      {
        source: '/courses/arabic',
        destination: '/courses/arabic-language',
        permanent: true,
      },
      {
        source: '/courses/kids-quran',
        destination: '/courses/quran-for-kids',
        permanent: true,
      },
      {
        source: '/courses/adults-quran',
        destination: '/courses/quran-for-adults',
        permanent: true,
      },
      // 4. Legacy tutor paths
      {
        source: '/tutor/:slug+',
        destination: '/tutors',
        permanent: true,
      },
      {
        source: '/tutors/:slug([^\\.]+)',
        destination: '/tutors',
        permanent: true,
      },
      // 5. General redirect: fallback to convert singular /course/:slug to plural /courses/:slug
      {
        source: '/course/:slug*',
        destination: '/courses/:slug*',
        permanent: true,
      },
      // 6. Legacy /cgi-bin requests redirect to homepage to prevent Vercel 403 response
      {
        source: '/cgi-bin/:slug*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
