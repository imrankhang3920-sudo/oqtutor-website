import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/courses/arabic',
        destination: '/course/arabic-language',
        permanent: true,
      },
      {
        source: '/courses/tafseer',
        destination: '/course/islamic-studies',
        permanent: true,
      },
      {
        source: '/courses/islamic-studies',
        destination: '/course/islamic-studies',
        permanent: true,
      },
      {
        source: '/courses/noorani-qaida',
        destination: '/course/noorani-qaida',
        permanent: true,
      },
      {
        source: '/courses/quran-reading',
        destination: '/course/quran-reading',
        permanent: true,
      },
      {
        source: '/courses/tajweed',
        destination: '/course/quran-with-tajweed',
        permanent: true,
      },
      {
        source: '/courses/hifz',
        destination: '/course/hifz-quran',
        permanent: true,
      },
      {
        source: '/courses/kids-quran',
        destination: '/course/online-quran-classes-for-kids',
        permanent: true,
      },
      {
        source: '/courses/adults-quran',
        destination: '/course/online-quran-classes-for-adults',
        permanent: true,
      },
      {
        source: '/courses/daily-duas',
        destination: '/course/daily-duas',
        permanent: true,
      },
      {
        source: '/courses/salah-course',
        destination: '/course/salah-course',
        permanent: true,
      },
      {
        source: '/tutor/:slug*',
        destination: '/tutors',
        permanent: true,
      },
      {
        source: '/tutors/:slug*',
        destination: '/tutors',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
