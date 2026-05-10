import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
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

export const metadata: Metadata = {
  title: "Rahi's Collection · Clothes, Jewellery & Stationery in Silchar",
  description: "Silchar's beloved family boutique in Ghungoor. Sarees, kurtis, kids wear, imitation jewellery, and stationery — all under one roof.",
  metadataBase: new URL("https://rahicollections.store"),
  verification: {
    google: 'pUyyhMHqi3_G1clASDODqXt-_TuhXm_9',
  },
  robots: {
    index: true,
    follow: true,
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
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        fraunces.variable,
        inter.variable,
        caveat.variable,
        "font-sans"
      )}
    >
      <body 
        suppressHydrationWarning 
        className="min-h-full flex flex-col bg-cream-50 text-ink-900 selection:bg-rahi-red-100 selection:text-rahi-red-600"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
