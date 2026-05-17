"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/seo";
import { ArrowRight, MessageCircle, Heart } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden min-h-[85vh] pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Image */}
      <Image
        src="/hero_bg.webp"
        alt="Rahi's Collection Storefront"
        fill
        priority
        className="object-cover object-center absolute inset-0 z-0"
      />
      {/* Side Gradient Overlay for text readability on the left, fully clear on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-0" />
      {/* Bottom fade for smooth section transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-0" />

      <div className="container mx-auto px-8 lg:px-6 relative z-10">
        <div className="flex flex-col items-start justify-center max-w-2xl">
          {/* Text Content */}
          <div className="text-left z-10 w-full relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <Heart className="w-5 h-5 lg:w-7 lg:h-7 text-rahi-red-500 fill-rahi-red-500/20" />
              <span className="font-accent text-rahi-red-600 text-xl lg:text-3xl font-bold">
                silchar&apos;s favourite family boutique
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] text-ink-900 leading-[1.05] mb-8 tracking-tight flex flex-col items-start"
            >
              <span className="mb-2">RAHI&apos;S</span>
              <span className="flex items-center gap-4">
                COLLECTION
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-ink-800 text-lg lg:text-2xl max-w-xl mb-12 leading-relaxed font-medium"
            >
              Sarees, jewellery, stationery & everyday joy for every Bengali family. Discover the perfect blend of tradition and style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-6 mt-10 lg:mt-12"
            >
              <Button 
                size="lg" 
                asChild
                className="w-full sm:w-auto bg-rahi-red-500 hover:bg-rahi-red-600 text-white rounded-full px-10 h-16 text-lg font-semibold shadow-lg shadow-rahi-red-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <Link href="/collections" className="flex items-center justify-center">
                  Browse Collections
                  <ArrowRight className="ml-2 w-5 h-5 shrink-0 hidden sm:block" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="w-full sm:w-auto rounded-full border-2 border-ink-900 text-ink-900 bg-white/50 backdrop-blur-sm px-10 h-16 text-lg font-semibold hover:bg-ink-900 hover:text-background transition-all"
              >
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Image src="/social-icons/whatsapp.png" alt="WhatsApp" width={24} height={24} className="mr-3 object-contain shrink-0" />
                  WhatsApp us
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
