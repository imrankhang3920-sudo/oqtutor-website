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
 * Utility function to send event tracking calls to Meta Pixel (fbq).
 */
export function trackFacebookEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    try {
      (window as any).fbq('track', eventName, params);
      console.log(`[Meta Pixel Event Logged]: ${eventName}`, params);
    } catch (err) {
      console.error('Failed to log Meta Pixel event:', err);
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

  // Track Meta Pixel Contact Event
  trackFacebookEvent('Contact', {
    content_category: 'Lead Conversion',
    content_name: `Contact via ${channel}`
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

  // Track Meta Pixel Lead Event
  trackFacebookEvent('Lead', {
    content_category: 'Lead Capture',
    content_name: 'Free Trial Form Submission',
    currency: 'USD',
    value: 0,
    content_ids: [courseName.toLowerCase().replace(/\s+/g, '_')],
    content_type: 'product'
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

  // Track Meta Pixel InitiateCheckout Event (since clicking package CTA starts registration/checkout flow)
  trackFacebookEvent('InitiateCheckout', {
    content_name: planTitle,
    value: price,
    currency: currency,
    content_ids: [planTitle.toLowerCase().replace(/\s+/g, '_')],
    content_type: 'product'
  });
}
