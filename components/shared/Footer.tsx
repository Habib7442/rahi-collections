import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/seo";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-white/5 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative w-14 h-14 overflow-hidden rounded-2xl bg-white transition-transform duration-500 group-hover:rotate-[-8deg] shadow-xl">
                <Image
                  src="/logo.png"
                  alt="Rahi's Collection Logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white leading-none tracking-tight">
                  RAHI&apos;S
                </span>
                <span className="font-accent text-rahi-red-400 text-base leading-none mt-1">
                  Collection
                </span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed text-lg font-light">
              Silchar&apos;s beloved family boutique. Curating the finest sarees, jewellery, and essentials for the modern family.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', icon: '/social-icons/instagram.png', url: SITE.social.instagram },
                { name: 'Facebook', icon: '/social-icons/facebook.png', url: SITE.social.facebook },
                { name: 'WhatsApp', icon: '/social-icons/whatsapp.png', url: SITE.whatsapp }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300 backdrop-blur-sm group/icon"
                  aria-label={social.name}
                >
                  <Image 
                    src={social.icon} 
                    alt={social.name} 
                    width={24} 
                    height={24} 
                    className="object-contain opacity-80 group-hover/icon:opacity-100 transition-opacity" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:pl-10">
            <h4 className="font-serif text-xl font-semibold text-white mb-8 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rahi-red-500 rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/collections" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">All Collections</Link></li>
              <li><Link href="/lookbook" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">Festive Lookbook</Link></li>
              <li><Link href="/visit" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">Visit Our Shop</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">Our Story</Link></li>
            </ul>
          </div>

          {/* Boutique Sections */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-8 relative inline-block">
              Boutique
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rahi-red-500 rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/collections/ladies-wear" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">Ladies Wear</Link></li>
              <li><Link href="/collections/gents-wear" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">Gents Wear</Link></li>
              <li><Link href="/collections/kids-wear" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">Kids Wear</Link></li>
              <li><Link href="/collections/jewellery" className="text-white/60 hover:text-white hover:translate-x-1 transition-all inline-block">Jewellery & Gifts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-white mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-rahi-red-500 rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-rahi-red-500/10 transition-colors">
                  <MapPin className="w-5 h-5 text-rahi-red-500" />
                </div>
                <span className="text-white/60 text-sm leading-relaxed">{SITE.address}</span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-rahi-red-500/10 transition-colors">
                  <Phone className="w-5 h-5 text-rahi-red-500" />
                </div>
                <div className="flex flex-col gap-1">
                  {SITE.phones.map(phone => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-white/60 hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-rahi-red-500/10 transition-colors">
                  <Mail className="w-5 h-5 text-rahi-red-500" />
                </div>
                <a href={`mailto:${SITE.email}`} className="text-white/60 hover:text-white transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Card Section */}
        <div className="mb-20">
          <h4 className="font-serif text-xl font-semibold text-white mb-10 text-center flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-white/10"></span>
            Digital Business Card
            <span className="h-px w-12 bg-white/10"></span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative aspect-[1.75/1] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-white/5 transition-all duration-500 hover:border-rahi-red-500/30 hover:scale-[1.02]">
              <Image 
                src="/business_card/front.png" 
                alt="Rahi's Collection Business Card Front" 
                fill 
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="group relative aspect-[1.75/1] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/5 bg-white/5 transition-all duration-500 hover:border-rahi-red-500/30 hover:scale-[1.02]">
              <Image 
                src="/business_card/back.png" 
                alt="Rahi's Collection Business Card Back" 
                fill 
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm tracking-wide">
            © {new Date().getFullYear()} Rahi&apos;s Collection. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <p className="text-white/40 text-sm flex items-center gap-2 group">
              Made with <Heart size={14} className="text-rahi-red-500 fill-rahi-red-500 group-hover:scale-125 transition-transform" /> in Silchar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
