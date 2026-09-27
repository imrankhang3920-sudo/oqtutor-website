'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Shield, Settings, Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Read cookie consent status on mount
    const consentCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('cookie-consent='));

    if (!consentCookie) {
      setShowBanner(true);
    } else {
      try {
        const val = decodeURIComponent(consentCookie.split('=')[1]);
        if (val.startsWith('{')) {
          setPreferences(JSON.parse(val));
        }
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
  }, []);

  const setConsentCookie = (consentVal: typeof preferences) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // 1 year expiry
    document.cookie = `cookie-consent=${encodeURIComponent(
      JSON.stringify(consentVal)
    )}; expires=${expires.toUTCString()}; path=/; SameSite=Lax; Secure`;
  };

  const dismissBanner = () => {
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const allConsent = { essential: true, analytics: true, marketing: true };
    setPreferences(allConsent);
    setConsentCookie(allConsent);
    dismissBanner();
  };

  const handleRejectNonEssential = () => {
    const minimalConsent = { essential: true, analytics: false, marketing: false };
    setPreferences(minimalConsent);
    setConsentCookie(minimalConsent);
    dismissBanner();
  };

  const handleSavePreferences = () => {
    setConsentCookie(preferences);
    dismissBanner();
    setShowSettingsModal(false);
  };

  if (!showBanner && !showSettingsModal) return null;

  return (
    <>
      {/* Cookie Banner Bar - Fixed at bottom without altering document layout or shifting content */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie Consent Banner"
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-md text-white px-4 sm:px-6 lg:px-8 py-3 shadow-2xl border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs select-none"
        >
          {/* Left Text */}
          <div className="flex items-center gap-2 shrink-0 text-left">
            <Cookie className="h-4 w-4 text-[#10B981] shrink-0" />
            <span className="text-white/90 font-medium">
              We use cookies to improve your experience. Read our{' '}
              <Link
                href="/cookie-policy"
                className="text-[#10B981] hover:text-[#0D9488] font-bold underline transition-colors"
              >
                Cookie Policy
              </Link>.
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => setShowSettingsModal(true)}
              className="text-white/70 hover:text-white font-semibold transition-colors bg-transparent border-0 cursor-pointer text-xs px-2 py-1"
            >
              Preferences
            </button>

            <button
              onClick={handleRejectNonEssential}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white text-xs font-semibold transition-all cursor-pointer"
            >
              Reject Non-Essential
            </button>

            <button
              onClick={handleAcceptAll}
              className="px-4 py-1.5 rounded-full bg-[#10B981] hover:bg-[#0D9488] text-white text-xs font-bold transition-all cursor-pointer border border-transparent shadow-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowSettingsModal(false)} />
          
          <div className="bg-background border border-card-border text-foreground rounded-3xl p-6 sm:p-8 max-w-lg w-full relative z-10 shadow-2xl">
            <button
              onClick={() => setShowSettingsModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-foreground/5 transition-colors text-muted-text hover:text-foreground cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cookie Preferences</h3>
                <p className="text-xs text-muted-text mt-0.5">Customize your cookie preferences below</p>
              </div>
            </div>

            <div className="space-y-5 mb-8">
              {/* Essential Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-card-border">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">Essential Cookies</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                      Required
                    </span>
                  </div>
                  <p className="text-xs text-muted-text mt-1 leading-relaxed">
                    Necessary for the website to function securely and remember basic preferences. Cannot be disabled.
                  </p>
                </div>
                <div className="pt-1">
                  <input
                    type="checkbox"
                    disabled
                    checked
                    className="w-4 h-4 accent-primary cursor-not-allowed opacity-50"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-card-border">
                <div className="flex-1">
                  <span className="text-sm font-bold">Analytics & Performance</span>
                  <p className="text-xs text-muted-text mt-1 leading-relaxed">
                    Help us understand website traffic, detect slow pages, and improve the overall navigation experience.
                  </p>
                </div>
                <div className="pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-foreground/20 rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-card-border">
                <div className="flex-1">
                  <span className="text-sm font-bold">Marketing & Advertising</span>
                  <p className="text-xs text-muted-text mt-1 leading-relaxed">
                    Allow tracking of ad clicks and conversions from search engines or social media platforms.
                  </p>
                </div>
                <div className="pt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-foreground/20 rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowSettingsModal(false)}
                className="px-5 py-2.5 rounded-full border border-card-border hover:bg-foreground/5 text-xs font-bold transition-all cursor-pointer bg-transparent text-foreground"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 rounded-full bg-[#10B981] hover:bg-[#0D9488] text-white text-xs font-bold transition-all cursor-pointer border border-transparent shadow-md shadow-emerald-500/10 hover:shadow-lg"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
