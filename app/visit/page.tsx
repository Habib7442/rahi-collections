import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Our Shop",
  description: `Find Rahi's Collection in Ghungoor, Silchar. Check our opening hours, get driving directions, and see our storefront. Open Mon-Sat, 10 AM - 8:30 PM.`,
  alternates: {
    canonical: "/visit",
  },
};

export default function VisitPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-background py-20 border-b border-border">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-5xl md:text-6xl text-ink-900 mb-6">Visit Our Boutique</h1>
            <p className="text-ink-600 max-w-2xl mx-auto text-xl">
              Located in the heart of Ghungoor, Silchar. We'd love to see you in person!
            </p>
          </div>
        </div>

        <div className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Info Column */}
              <div>
                <div className="mb-12">
                  <h2 className="font-serif text-3xl text-ink-900 mb-6">Location & Hours</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="h-10 w-10 bg-rahi-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-rahi-red-500 font-bold">A</span>
                      </div>
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider text-xs mb-1">Our Address</p>
                        <p className="text-ink-700 text-lg">{SITE.address}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-10 w-10 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sky-600 font-bold">H</span>
                      </div>
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider text-xs mb-1">Opening Hours</p>
                        <p className="text-ink-700 text-lg">{SITE.hours}</p>
                        <p className="text-ink-400 text-sm mt-1">Closed on Sundays</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="h-10 w-10 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-600 font-bold">C</span>
                      </div>
                      <div>
                        <p className="font-bold text-ink-900 uppercase tracking-wider text-xs mb-1">Contact Us</p>
                        <div className="space-y-1">
                          {SITE.phones.map((phone) => (
                            <p key={phone} className="text-ink-700 text-lg">{phone}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100">
                  <h3 className="font-serif text-2xl text-ink-900 mb-4">Driving Directions</h3>
                  <p className="text-ink-600 mb-6">
                    Our boutique is conveniently located in Ghungoor, near Silchar Medical College. 
                    Look for the crimson red signboard of "Rahi's Collection".
                  </p>
                  <Link 
                    href="https://maps.google.com/?q=Rahi's+Collection+Ghungoor+Silchar" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-ink-900 px-6 py-3 rounded-full font-bold shadow-sm hover:shadow-md transition-all border border-sky-200"
                  >
                    Open in Google Maps
                  </Link>
                </div>
              </div>

              {/* Storefront Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl text-ink-900 mb-6 flex items-center gap-2">
                    <span className="h-px w-8 bg-rahi-red-200"></span>
                    Our Storefront
                  </h3>
                  <div className="grid grid-cols-1 gap-8">
                    <div className="group relative bg-sky-50 rounded-[2rem] overflow-hidden shadow-lg border-2 border-white transition-all duration-500 hover:shadow-2xl">
                      <div className="relative aspect-[4/3] w-full">
                        <Image 
                          src="/exterior_day.jpeg" 
                          alt="Rahi's Collection Storefront - Day View" 
                          fill 
                          sizes="(max-width: 768px) 100vw, 800px"
                          quality={85}
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-ink-900 shadow-sm border border-sky-100">
                        Day View
                      </div>
                    </div>
                    <div className="group relative bg-sky-50 rounded-[2rem] overflow-hidden shadow-lg border-2 border-white transition-all duration-500 hover:shadow-2xl">
                      <div className="relative aspect-[4/3] w-full">
                        <Image 
                          src="/exterior_night.jpeg" 
                          alt="Rahi's Collection Storefront - Night View" 
                          fill 
                          sizes="(max-width: 768px) 100vw, 800px"
                          quality={85}
                          className="object-contain p-4"
                        />
                      </div>
                      <div className="absolute bottom-4 left-4 bg-ink-900/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-white shadow-sm border border-white/10">
                        Night View
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-rahi-red-50 p-6 rounded-2xl border border-rahi-red-100">
                  <p className="text-rahi-red-700 font-serif italic text-center">
                    "Look for the bright crimson sign—we're easy to spot from the main road!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
