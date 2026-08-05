'use client';

import { useEffect, useRef, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function TrackersContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Skip the very first trigger on initial render since the HTML head script
    // already fires the initial PageView event on page load.
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    // Fired on subsequent client-side route changes
    if (typeof window !== 'undefined') {
      // Track Facebook PageView
      if ((window as any).fbq) {
        try {
          (window as any).fbq('track', 'PageView');
          console.log(`[Meta Pixel Route Changed]: PageView at ${pathname}`);
        } catch (e) {
          console.error('Failed to track client-side Meta Pixel PageView:', e);
        }
      }

      // Track Google Analytics page view configuration
      if ((window as any).gtag) {
        try {
          const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-S1PPDJ7VKP';
          (window as any).gtag('config', gaId, {
            page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
          });
          console.log(`[GA Route Changed]: Config path ${pathname}`);
        } catch (e) {
          console.error('Failed to track client-side GA PageView:', e);
        }
      }
    }
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsTrackers() {
  return (
    <Suspense fallback={null}>
      <TrackersContent />
    </Suspense>
  );
}
