import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["500", "700"],
});

import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  verification: {
    google: 'pUyyhMHqi3_G1clASDODqXt-_TuhXm_9',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeJsonLd = {
    "@type": "ClothingStore",
    "@id": `${SITE.url}/#store`,
    "name": SITE.name,
    "description": SITE.description,
    "image": `${SITE.url}${SITE.ogImage}`,
    "logo": `${SITE.url}${SITE.logo}`,
    "telephone": SITE.phones[0].replace(/\s/g, ""),
    "contactPoint": SITE.phones.map((phone) => ({
      "@type": "ContactPoint",
      "telephone": phone.replace(/\s/g, ""),
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Bengali", "Hindi"],
    })),
    "email": SITE.email,
    "url": SITE.url,
    "hasMap": SITE.mapsUrl,
    "areaServed": ["Silchar", "Cachar", "Assam"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near SUBHASHINI MEDICARE, Ghungoor",
      "addressLocality": "Silchar",
      "addressRegion": "Assam",
      "postalCode": "788014",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE.geo.latitude,
      "longitude": SITE.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "20:30"
      }
    ],
    "priceRange": "₹",
    "sameAs": [...SITE.sameAs]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      storeJsonLd,
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        "url": SITE.url,
        "name": SITE.name,
        "inLanguage": "en-IN",
        "publisher": { "@id": `${SITE.url}/#store` },
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        cormorant.variable,
        inter.variable,
        caveat.variable,
        "font-sans"
      )}
    >
      <body 
        suppressHydrationWarning 
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-rahi-red-100 selection:text-rahi-red-600"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
