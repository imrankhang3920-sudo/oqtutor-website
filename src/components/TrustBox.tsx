'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, forceReload?: boolean) => void;
      init?: () => void;
    };
  }
}

export interface TrustBoxProps {
  templateId?: string;
  businessUnitId?: string;
  locale?: string;
  styleHeight?: string;
  styleWidth?: string;
  theme?: 'light' | 'dark';
  token?: string;
  sku?: string;
  starColor?: string;
  className?: string;
}

export default function TrustBox({
  templateId = process.env.NEXT_PUBLIC_TRUSTPILOT_TEMPLATE_ID || '56278e9abfbbba0bdcd568bc',
  businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID || '6a7808818667424ddffa7568',
  locale = 'en-US',
  styleHeight = '52px',
  styleWidth = '100%',
  theme = 'light',
  token = 'c320f70d-8610-4def-9904-7654110f4cb7',
  sku,
  starColor,
  className = '',
}: TrustBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50; // Check up to 10 seconds for Trustpilot script

    const loadWidget = () => {
      if (typeof window !== 'undefined' && window.Trustpilot && ref.current) {
        try {
          window.Trustpilot.loadFromElement(ref.current, true);
        } catch (err) {
          console.error('Error initializing Trustpilot widget:', err);
        }
        return true;
      }
      return false;
    };

    if (!loadWidget()) {
      const interval = setInterval(() => {
        attempts++;
        if (loadWidget() || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 200);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`trustpilot-widget ${className}`.trim()}
      data-locale={locale}
      data-template-id={templateId}
      data-businessunit-id={businessUnitId}
      data-style-height={styleHeight}
      data-style-width={styleWidth}
      data-theme={theme}
      {...(token ? { 'data-token': token } : {})}
      {...(sku ? { 'data-sku': sku } : {})}
      {...(starColor ? { 'data-stars': starColor } : {})}
    >
      <a
        href="https://www.trustpilot.com/review/oqtutor.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-text hover:underline"
      >
        Trustpilot
      </a>
    </div>
  );
}
