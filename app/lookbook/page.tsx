import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LookbookPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-ink-900 py-24 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-30">
            <Image 
              src="/exterior_day.jpeg" 
              alt="Rahi's Collection Storefront" 
              fill 
              sizes="100vw"
              quality={100}
              className="object-cover"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="font-serif text-5xl md:text-7xl mb-6">Seasonal Lookbook</h1>
            <p className="text-sky-100/80 max-w-2xl mx-auto text-xl font-accent">
              Curated styles for Silchar's most vibrant celebrations. 
              Discover the Rahi's Collection aesthetic.
            </p>
          </div>
        </div>

        {/* Lookbook Content */}
        <div className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <span className="text-rahi-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-8 block">
                Coming Soon
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-ink-900 mb-12 italic">
                &ldquo;Durga Puja 2026 Collection&rdquo;
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="aspect-[3/4] bg-sky-50 rounded-3xl overflow-hidden relative group">
                   <div className="absolute inset-0 flex items-center justify-center p-12 border-2 border-dashed border-sky-200 m-4 rounded-2xl">
                      <p className="text-ink-400 font-serif italic text-center">
                        Our photographers are currently capturing the latest festive sarees.
                      </p>
                   </div>
                </div>
                <div className="aspect-[3/4] bg-sky-50 rounded-3xl overflow-hidden relative group">
                   <div className="absolute inset-0 flex items-center justify-center p-12 border-2 border-dashed border-sky-200 m-4 rounded-2xl">
                      <p className="text-ink-400 font-serif italic text-center">
                        Exclusive designer wear previewing shortly.
                      </p>
                   </div>
                </div>
              </div>
              
              <p className="text-ink-600 text-lg mb-10">
                Want a first look? Follow us on Instagram or drop us a WhatsApp message to get notified when our digital lookbook goes live.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://instagram.com/rahicollections" 
                  target="_blank"
                  className="bg-ink-900 text-white px-8 py-4 rounded-full font-bold hover:bg-ink-800 transition-colors"
                >
                  Follow on Instagram
                </Link>
                <Link 
                  href="/collections" 
                  className="bg-white text-ink-900 border-2 border-ink-900 px-8 py-4 rounded-full font-bold hover:bg-sky-50 transition-colors"
                >
                  Browse Current Catalog
                </Link>
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
