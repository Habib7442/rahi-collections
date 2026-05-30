"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-end md:justify-center overflow-hidden min-h-[92vh] pt-24 pb-12 md:py-32 bg-cream-50">

      {/* Full-width Background Image - fully clear and visible on all devices at 100% raw quality */}
      <img
        src="/hero_bg.png"
        alt="Rahi's Collection Storefront Background"
        className="object-cover object-[80%_25%] md:object-[68%_25%] lg:object-right absolute inset-0 w-full h-full z-0"
        loading="eager"
        fetchPriority="high"
      />

      {/* Smooth bottom-up cream gradient fade - covers bottom 48% of screen on mobile, and fades smoothly on desktop */}
      <div className="absolute inset-x-0 bottom-0 h-[48vh] md:h-[40vh] bg-gradient-to-t from-cream-50 via-cream-50/80 to-transparent z-10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 w-full">
        {/* Transparent container pushed to the bottom on mobile, left-aligned on desktop */}
        <div className="max-w-2xl md:max-w-3xl flex flex-col items-center md:items-start text-center md:text-left w-full mt-auto md:mt-0">

          {/* Elegant Straight Sub-title - ONLY visible on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:inline-flex items-center text-sm font-bold tracking-widest uppercase mb-4 text-rahi-red-600 cursor-default select-none"
          >
            <span>Silchar&apos;s favourite family boutique</span>
          </motion.div>

          {/* Vertical Two-Column Typography for Mobile - pushed to the left blank space */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.04
                }
              }
            }}
            className="md:hidden flex gap-5 select-none mb-10 self-start ml-2 xs:ml-4"
          >
            {/* Column 1: RAHI'S */}
            <div 
              style={{ WebkitTextStroke: "0.6px currentColor" }}
              className="flex flex-col items-center text-ink-900 font-serif font-bold text-[2.2rem] xs:text-[2.6rem] leading-[1.0] tracking-tighter"
            >
              {["R", "A", "H", "I", "'S"].map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="block select-none"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Column 2: COLLECTION */}
            <div 
              style={{ WebkitTextStroke: "0.6px currentColor" }}
              className="flex flex-col items-center text-rahi-red-500 font-serif font-bold italic text-[2.2rem] xs:text-[2.6rem] leading-[1.0] tracking-tighter"
            >
              {"COLLECTION".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="block select-none"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Giant Luxury Serif Typography - Tablet & Desktop Horizontal */}
          <h1 className="hidden md:block font-serif text-5xl md:text-7xl lg:text-[6rem] xl:text-[6.8rem] leading-[1.02] tracking-tight mb-8 font-bold text-ink-900">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="block font-bold text-ink-900 leading-none"
            >
              RAHI&apos;S
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-rahi-red-500 font-serif font-bold italic relative leading-none mt-2"
            >
              COLLECTION
            </motion.span>
          </h1>

          {/* Sub-Headline - ONLY visible on tablet & desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block relative max-w-xl mb-12"
          >
            <p className="text-ink-800 text-lg md:text-xl lg:text-2xl leading-relaxed font-medium">
              Sarees, jewellery, stationery & everyday joy for every Bengali family. Discover the perfect blend of tradition and modern style.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-rahi-red-500 hover:bg-rahi-red-600 text-white rounded-full px-10 h-14 lg:h-16 text-lg font-semibold shadow-lg shadow-rahi-red-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Link href="/collections" className="flex items-center justify-center gap-2">
                Browse Collections
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto rounded-full border-2 border-ink-900 text-ink-900 bg-white/50 hover:bg-ink-900 hover:text-white transition-all duration-300 h-14 lg:h-16 px-10 text-lg font-semibold backdrop-blur-sm shadow-sm"
            >
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <Image
                  src="/social-icons/whatsapp.png"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                  className="object-contain shrink-0"
                />
                WhatsApp us
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
