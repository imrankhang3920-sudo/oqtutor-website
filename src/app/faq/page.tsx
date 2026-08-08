import { Metadata } from 'next';
import { readDB } from '@/data/db';
import FAQPageClient from './FAQPageClient';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Online Quran Academy FAQ',
  description: 'Find answers to common questions about OQTutor, including class schedules, timezone adjustments, choosing female teachers, pricing, and trial registrations.',
  keywords: ['online quran academy FAQ', 'quran learning questions', 'online tajweed classes FAQ', 'hifz memorization answers'],
  alternates: {
    canonical: 'https://www.oqtutor.com/faq',
  },
  openGraph: {
    url: 'https://www.oqtutor.com/faq',
  },
};

export default async function FAQPage() {
  const dbData = readDB();

  // Create FAQ Schema JSON-LD dynamically
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dbData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQPageClient initialFaqs={dbData.faqs} contactData={dbData.contact} />
    </>
  );
}
