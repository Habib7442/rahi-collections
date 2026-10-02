import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/seo";
import { Metadata } from "next";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { getLookbookProducts } from "@/lib/sanity-queries";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Durga Puja 2026 Saree Lookbook",
  description:
    "The Rahi's Collection Puja saree edit — Banarasi, Maheshwari silk, zari, jamdani and Warli-print sarees, handpicked for Durga Puja 2026 in Silchar. Enquire on WhatsApp.",
  alternates: {
    canonical: "/lookbook",
  },
};

// Alternate tile heights for an editorial, magazine-style rhythm
const TILE_ASPECTS = ["aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[2/3]", "aspect-[4/5]", "aspect-[3/4]"];

function enquiryUrl(product: Product) {
  const imageUrl = product.images?.[0] ? urlFor(product.images[0]).width(800).url() : "";
  const message = `Hi Rahi's Collection, I saw this saree in your Puja lookbook: *${product.name}*.\n\nProduct Image: ${imageUrl}\n\nIs it available?`;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default async function LookbookPage() {
  let products: Product[] = [];
  try {
    products = (await getLookbookProducts("sarees", 12)) || [];
  } catch (error) {
    console.error("Failed to fetch lookbook products:", error);
  }

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 text-white">
          <div className="absolute inset-0 opacity-30">
            <Image
              src="/exterior_day.jpeg"
              alt=""
              fill
              priority
              sizes="100vw"
              quality={75}
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-ink-900/60 to-ink-900" />
          <div className="container relative z-10 mx-auto px-6 py-20 md:py-28 text-center">
            <span className="inline-block rotate-[-2deg] rounded-full bg-butter-300 px-4 py-1.5 text-sm font-bold text-ink-900 mb-6">
              Durga Puja 2026
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] mb-6">
              The Puja Saree Edit
            </h1>
            <p className="font-accent text-2xl md:text-3xl text-rahi-red-200 mb-4">
              draped in tradition, made for pandal-hopping
            </p>
            <p className="mx-auto max-w-2xl text-lg text-cream-100/80">
              Banarasi weaves, copper zari, Maheshwari silk and breezy jamdani — handpicked at our
              Ghungoor boutique for Silchar&apos;s most beautiful days of the year.
            </p>
          </div>
        </section>

        {/* Lookbook Grid */}
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-6">
            {products.length > 0 ? (
              <>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
                  <div>
                    <p className="font-accent text-2xl text-rahi-red-500 mb-1">this season&apos;s picks</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-semibold text-ink-900">
                      {products.length} looks for the festive days
                    </h2>
                  </div>
                  <p className="max-w-sm text-ink-600">
                    Tap any saree to ask about colours and availability on WhatsApp.
                  </p>
                </div>

                <div className="columns-2 md:columns-3 gap-4 md:gap-6">
                  {products.map((product, index) => {
                    const image = product.images![0];
                    return (
                      <a
                        key={product._id}
                        href={enquiryUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${product.name} on WhatsApp`}
                        className="group mb-4 md:mb-6 block break-inside-avoid"
                      >
                        <figure>
                          <div
                            className={cn(
                              "relative overflow-hidden rounded-[1.5rem] bg-cream-200 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl",
                              TILE_ASPECTS[index % TILE_ASPECTS.length]
                            )}
                          >
                            <Image
                              src={urlFor(image).width(800).url()}
                              alt={product.name}
                              fill
                              priority={index < 2}
                              sizes="(max-width: 768px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <span className="absolute left-3 top-3 rounded-full bg-cream-50/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-900 backdrop-blur-sm">
                              No. {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="absolute bottom-3 right-3 hidden md:inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              Enquire <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                          <figcaption className="px-1 pt-3">
                            <h3 className="font-serif text-lg md:text-xl font-semibold leading-snug text-ink-900 group-hover:text-rahi-red-500 transition-colors">
                              {product.name}
                            </h3>
                            {product.description && (
                              <p className="mt-1 max-md:hidden line-clamp-2 text-sm text-ink-600">
                                {product.description}
                              </p>
                            )}
                          </figcaption>
                        </figure>
                      </a>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="mx-auto max-w-2xl rounded-[1.5rem] border-2 border-dashed border-cream-200 bg-cream-100 px-6 py-20 text-center">
                <p className="font-serif text-2xl italic text-ink-600">
                  Our Puja lookbook is being styled right now. Drop us a WhatsApp message to see the
                  latest sarees first.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Visit CTA */}
        <section className="bg-cream-100 py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-ink-900 mb-4">
                See them in person before Puja
              </h2>
              <p className="text-lg text-ink-600 mb-8">
                Feel the fabric, match your blouse, and find your colour — our full saree range is
                waiting at the shop.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-ink-600 mb-10">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-rahi-red-500" /> Ghungoor, Silchar
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rahi-red-500" /> {SITE.hours}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/collections/ladies-wear?subcategory=sarees"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-rahi-red-500 px-8 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-rahi-red-600"
                >
                  Browse All Sarees <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/visit"
                  className="inline-flex items-center justify-center rounded-full border-2 border-ink-900 bg-cream-50 px-8 py-4 font-semibold text-ink-900 transition-colors hover:bg-ink-900 hover:text-white"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
