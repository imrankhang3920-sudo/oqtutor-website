'use client';

/**
 * Utility function to send event tracking calls to Google Analytics 4 (gtag.js).
 */
export function trackGAEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', eventName, {
        ...params,
        send_to: process.env.NEXT_PUBLIC_GA_ID || 'G-S1PPDJ7VKP',
      });
      console.log(`[GA Event Logged]: ${eventName}`, params);
    } catch (err) {
      console.error('Failed to log GA event:', err);
    }
  }
}

/**
 * Track user initiating chat or direct contact (Converted Lead goal).
 * Fired on WhatsApp click actions.
 */
export function trackCloseConvertLead(channel: string = 'WhatsApp') {
  trackGAEvent('close_convert_lead', {
    event_category: 'Lead Conversion',
    event_label: `Contact via ${channel}`,
    channel: channel
  });
}

/**
 * Track user submitting the trial booking form (Qualified Lead goal).
 * Fired on successful "Book Free Trial" form registration.
 */
export function trackQualifyLead(courseName: string, country: string) {
  trackGAEvent('qualify_lead', {
    event_category: 'Lead Capture',
    event_label: 'Free Trial Form Submission',
    selected_course: courseName,
    student_country: country
  });
}

/**
 * Track user clicking a package tier (Purchase / Subscription Intent goal).
 * Fired on pricing card CTA buttons.
 */
export function trackPurchase(planTitle: string, price: number, currency: string = 'USD') {
  trackGAEvent('purchase', {
    transaction_id: 'tx_' + Math.random().toString(36).substr(2, 9),
    value: price,
    currency: currency,
    items: [
      {
        item_id: planTitle.toLowerCase().replace(/\s+/g, '_'),
        item_name: planTitle,
        price: price,
        quantity: 1
      }
    ]
  });
}
