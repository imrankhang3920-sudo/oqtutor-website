import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CookieConsent from "@/components/CookieConsent";

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
  description: "Learn Quran online with certified tutors. Serving families in USA, UK, Canada, Australia, & worldwide. Tajweed, Hifz, & Noorani Qaida. Book your free trial!",
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
  metadataBase: new URL("https://www.oqtutor.com"),
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
      { url: "/logo_transparent.png?v=2", sizes: "any" }
    ],
    shortcut: "/logo_transparent.png?v=2",
    apple: "/logo_transparent.png?v=2",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "OQTutor | Online Quran Classes with Certified Male & Female Tutors",
    description: "Join OQTutor for one-to-one online Quran classes, Tajweed, Hifz, Noorani Qaida and Islamic Studies for kids and adults worldwide.",
    url: "https://www.oqtutor.com",
    siteName: "OQTutor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.oqtutor.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "OQTutor Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OQTutor | Online Quran Classes with Certified Male & Female Tutors",
    description: "Join OQTutor for one-to-one online Quran classes, Tajweed, Hifz, Noorani Qaida and Islamic Studies for kids and adults worldwide.",
    images: ["https://www.oqtutor.com/logo.jpg"],
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
      suppressHydrationWarning
    >
      <head>
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

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1196171388446085');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1196171388446085&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <CookieConsent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
