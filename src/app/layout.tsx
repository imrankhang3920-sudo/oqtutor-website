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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
