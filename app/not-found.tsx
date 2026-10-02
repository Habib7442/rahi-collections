import Link from "next/link";
import { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import { SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-6 py-24 text-center">
          <span className="font-accent text-rahi-red-500 text-2xl rotate-[-2deg] inline-block mb-4">
            oops, wrong aisle!
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink-900 mb-6">
            Page not found
          </h1>
          <p className="text-ink-600 text-lg max-w-xl mx-auto mb-10">
            The page you&apos;re looking for has moved or no longer exists. Browse our latest
            collections or come say hello at the shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections"
              className="bg-rahi-red-500 hover:bg-rahi-red-600 text-white px-8 py-4 rounded-full font-semibold transition-transform hover:-translate-y-0.5"
            >
              Browse Collections
            </Link>
            <Link
              href="/visit"
              className="bg-cream-100 hover:bg-cream-200 text-ink-900 border-2 border-ink-900 px-8 py-4 rounded-full font-semibold"
            >
              Visit Our Shop
            </Link>
          </div>
          <p className="text-ink-400 text-sm mt-10">{SITE.address}</p>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
