"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { name: "Collections", href: "/collections" },
  { name: "Lookbook", href: "/lookbook" },
  { name: "Visit", href: "/visit" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-cream-200 py-4 lg:py-5" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-3 group">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-xl bg-white shadow-sm transition-transform group-hover:rotate-[-5deg]">
            <Image
              src="/logo.png"
              alt="Rahi's Collection Logo"
              fill
              sizes="(max-width: 768px) 40px, 48px"
              className="object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl lg:text-2xl font-bold text-ink-900 leading-none tracking-tight">
              RAHI&apos;S
            </span>
            <span className="font-accent text-rahi-red-500 text-sm lg:text-base leading-none">
              Collection
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-base font-medium transition-colors hover:text-rahi-red-500",
                pathname === link.href ? "text-rahi-red-500" : "text-ink-600"
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rahi-red-500 rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="rounded-full border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-white h-10 px-6"
          >
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              <Image src="/social-icons/whatsapp.png" alt="WhatsApp" width={20} height={20} className="mr-2 object-contain" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile Navigation (Sheet) */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-ink-900 transition-transform active:scale-90"
                aria-label="Toggle menu"
              >
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm bg-cream-50 border-l border-cream-200 p-0">
              <SheetHeader className="p-6 border-b border-cream-100">
                <SheetTitle className="flex items-center gap-3">
                  <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-white shadow-sm">
                    <Image 
                      src="/logo.png" 
                      alt="Logo" 
                      fill 
                      sizes="32px"
                      className="object-contain p-1" 
                    />
                  </div>
                  <span className="font-serif text-xl font-bold text-ink-900">RAHI&apos;S</span>
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation menu for Rahi&apos;s Collection boutique.
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col gap-6 py-12 px-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex flex-col"
                    >
                      <span className="font-serif text-4xl font-semibold text-ink-900 group-hover:text-rahi-red-500 transition-colors">
                        {link.name}
                      </span>
                      <span className="font-accent text-rahi-red-500 text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        explore ✨
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-12 left-6 right-6 flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="w-full bg-rahi-red-500 h-auto py-4 rounded-full shadow-lg shadow-rahi-red-500/20 transition-all hover:scale-105 active:scale-95 border-none"
                  asChild
                >
                  <a 
                    href={SITE.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-6 text-base font-semibold text-white gap-3"
                  >
                    <Image 
                      src="/social-icons/whatsapp.png" 
                      alt="WhatsApp" 
                      width={22} 
                      height={22} 
                      className="object-contain shrink-0" 
                    />
                    <span>Connect via WhatsApp</span>
                  </a>
                </Button>
                <div className="flex items-center justify-center gap-8 text-ink-400 mt-6">
                  <MapPin size={24} className="hover:text-rahi-red-500 transition-colors" />
                  <Link href="/visit" onClick={() => setIsOpen(false)}>
                    <Image src="/social-icons/instagram.png" alt="Instagram" width={24} height={24} className="opacity-50 hover:opacity-100 transition-opacity" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
