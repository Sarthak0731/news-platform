import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News Platform | Global News & Latest Updates",
  description: "Stay informed with latest news from around the world. Real-time coverage of Politics, Economy, Business, Geopolitics, Energy, Commodities and more across US, India, Europe and Global regions.",
  keywords: ["news", "global", "latest", "politics", "economy", "business", "geopolitics", "energy", "commodities"],
  authors: [{ name: "News Platform" }],
  creator: "News Platform",
  publisher: "News Platform",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://news-platform.com",
    title: "News Platform | Global News & Latest Updates",
    description: "Stay informed with latest news from around the world",
    siteName: "News Platform",
    images: [
      {
        url: "https://news-platform.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "News Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News Platform | Global News & Latest Updates",
    description: "Stay informed with latest news from around the world",
    images: ["https://news-platform.com/og-image.png"],
  },
  alternates: {
    canonical: "https://news-platform.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://news-platform.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
