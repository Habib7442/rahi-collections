"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import { Product } from "@/lib/types";

interface TeaserMarqueeProps {
  products: Product[];
}

export default function TeaserMarquee({ products }: TeaserMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  if (!products || products.length === 0) return null;

  // Duplicate items twice to ensure smooth, infinite loop even on large monitors
  const marqueeItems = [...products, ...products, ...products];

  return (
    <div className="py-24 bg-white border-t border-cream-200 overflow-hidden relative">
      {/* Visual background accents */}
      <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 text-center relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl text-ink-900 mb-4 italic tracking-tight"
        >
          &ldquo;New collections arriving soon...&rdquo;
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-rahi-red-600 font-accent text-2xl lg:text-3xl font-semibold mb-2"
        >
          Stay tuned for Durga Puja 2026 Lookbook
        </motion.p>
        <p className="text-ink-600 text-sm tracking-widest uppercase font-medium">
          A sneak peek of our latest arrivals
        </p>
      </div>

      {/* Infinite Marquee Track (Left to Right) */}
      <div 
        className="w-full flex overflow-hidden py-4 select-none relative z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          // Dynamic play state on hover
          style={{ 
            gap: "2rem",
            animationPlayState: isPaused ? "paused" : "running"
          }}
          className="animate-marquee flex whitespace-nowrap"
        >
          {marqueeItems.map((product: Product, idx: number) => {
            const productImg = product.images?.[0] || product.rawImage;
            const fallbackImg = "/hero_bg.png";
            
            return (
              <div
                key={`${product._id}-${idx}`}
                className="w-[260px] md:w-[300px] shrink-0 bg-cream-50 hover:bg-cream-100 border border-cream-200 rounded-[1.8rem] p-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 select-none"
              >
                {/* Product Image Frame */}
                <div className="relative w-full aspect-[4/5] rounded-[1.4rem] overflow-hidden bg-cream-200 mb-4">
                  <Image
                    src={productImg ? urlFor(productImg).width(400).url() : fallbackImg}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-cover object-center pointer-events-none"
                  />
                  {/* Category Pill Tag */}
                  {product.category?.title && (
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-ink-900 border border-cream-200 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full pointer-events-none">
                      {product.category.title}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="px-2 pb-2 text-left">
                  <h3 className="font-serif text-lg text-ink-900 truncate mb-1 pointer-events-none">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-ink-600 font-medium truncate pointer-events-none">
                      {product.description ? product.description : "New season arrival"}
                    </span>
                    <Link
                      href={`/collections/${product.category?.slug || ""}`}
                      className="text-xs font-bold text-rahi-red-500 hover:text-rahi-red-600 shrink-0 select-none ml-2"
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
