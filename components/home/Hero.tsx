"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/seo";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sky-50 pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-8 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10 lg:mt-2">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-accent text-rahi-red-500 text-lg lg:text-2xl mb-6 block"
            >
              ✨ silchar&apos;s favourite family boutique
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-7xl lg:text-8xl text-ink-900 leading-[1.1] mb-8 tracking-tight"
            >
              RAHI&apos;S <br />
              <span className="flex items-center justify-center lg:justify-start gap-4">
                COLLECTION
                <motion.span
                  className="hidden lg:block"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <ArrowRight className="lg:w-16 lg:h-16 text-rahi-red-500" strokeWidth={1.5} />
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-ink-600 text-lg lg:text-xl max-w-lg mb-12 mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
            >
              Sarees, jewellery, stationery & everyday joy for every Bengali family. Discover the perfect blend of tradition and style.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-10 lg:mt-12"
            >
              <Button 
                size="lg" 
                asChild
                className="w-full sm:w-auto bg-rahi-red-500 hover:bg-rahi-red-600 text-white rounded-full px-8 sm:px-10 h-14 text-base sm:text-lg font-semibold shadow-lg shadow-rahi-red-500/20 transition-all hover:scale-105 active:scale-95"
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
                className="w-full sm:w-auto rounded-full border-2 border-ink-900 text-ink-900 px-8 sm:px-10 h-14 text-base sm:text-lg font-semibold bg-transparent hover:bg-ink-900 hover:text-sky-50 transition-all"
              >
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Image src="/social-icons/whatsapp.png" alt="WhatsApp" width={24} height={24} className="mr-2 object-contain shrink-0" />
                  WhatsApp us
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full aspect-[4/5] lg:aspect-square group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <Image
                src="/images/hero.png"
                alt="Elegant display of traditional sarees and designer boutique collections at Rahi's Collection"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
            
            {/* Background blob */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rahi-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-butter-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
