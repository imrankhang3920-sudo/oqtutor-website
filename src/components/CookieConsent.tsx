'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Shield, Settings, Info } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Read cookie consent status on mount to prevent SSR mismatch
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

  const handleAcceptAll = () => {
    const allConsent = { essential: true, analytics: true, marketing: true };
    setPreferences(allConsent);
    setConsentCookie(allConsent);
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    const minimalConsent = { essential: true, analytics: false, marketing: false };
    setPreferences(minimalConsent);
    setConsentCookie(minimalConsent);
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    setConsentCookie(preferences);
    setShowBanner(false);
    setShowSettingsModal(false);
  };

  if (!showBanner && !showSettingsModal) return null;

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie Consent Banner"
          className="fixed top-0 left-0 w-full bg-black text-white py-5 px-4 sm:px-6 lg:px-8 z-50 shadow-2xl border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 animate-slide-down"
        >
          <div className="flex-1 max-w-4xl">
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              This website uses cookies to improve your experience, remember your preferences, analyze website traffic, and track ad conversions. By continuing to browse, you agree to our use of cookies.{' '}
              <Link
                href="/cookie-policy"
                className="text-[#10B981] hover:text-[#0D9488] font-semibold underline underline-offset-2 ml-1"
              >
                Learn More
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setShowSettingsModal(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 hover:border-[#10B981] hover:text-[#10B981] text-xs font-bold transition-all cursor-pointer bg-transparent"
            >
              <Settings className="h-3.5 w-3.5" />
              <span>Cookie Settings</span>
            </button>

            <button
              onClick={handleRejectNonEssential}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-transparent text-xs font-bold transition-all cursor-pointer text-white"
            >
              Reject Non-Essential
            </button>

            <button
              onClick={handleAcceptAll}
              className="px-5 py-2 rounded-full bg-[#10B981] hover:bg-[#0D9488] text-white text-xs font-bold shadow-md shadow-emerald-500/10 hover:shadow-lg transition-all cursor-pointer border border-transparent"
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
