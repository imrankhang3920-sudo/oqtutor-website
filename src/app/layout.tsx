import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "OQTutor | Online Quran Classes with Certified Male & Female Tutors",
  description: "Join OQTutor for one-to-one online Quran classes, Tajweed, Hifz, Noorani Qaida and Islamic Studies for kids and adults worldwide.",
  keywords: [
    "Online Quran Tutor",
    "Quran Classes",
    "Tajweed Classes",
    "Hifz Course",
    "Noorani Qaida",
    "Islamic Studies",
    "Online Quran Academy"
  ],
  authors: [{ name: "OQTutor Team" }],
  metadataBase: new URL("https://oqtutor.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.jpg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "OQTutor | Online Quran Classes with Certified Male & Female Tutors",
    description: "Join OQTutor for one-to-one online Quran classes, Tajweed, Hifz, Noorani Qaida and Islamic Studies for kids and adults worldwide.",
    url: "https://oqtutor.com",
    siteName: "OQTutor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "OQTutor Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "OQTutor | Online Quran Classes with Certified Male & Female Tutors",
    description: "Join OQTutor for one-to-one online Quran classes, Tajweed, Hifz, Noorani Qaida and Islamic Studies for kids and adults worldwide.",
    images: ["/logo.jpg"],
  },
};

import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-S1PPDJ7VKP';

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>

        {/* Organization Structured Data for Google Search Logo integration */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "OQTutor",
              "url": "https://oqtutor.com",
              "logo": "https://oqtutor.com/logo.jpg",
              "image": "https://oqtutor.com/logo.jpg",
              "description": "Join OQTutor for one-to-one online Quran classes, Tajweed, Hifz, Noorani Qaida and Islamic Studies for kids and adults worldwide.",
              "sameAs": [
                "https://web.facebook.com/profile.php?id=100093682086058",
                "https://www.instagram.com/hadi.382011/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+447490329339",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Arabic", "Urdu"]
              }
            })
          }}
        />
        
        {/* Google Analytics (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}
