import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/seo";
import { MapPin, Phone, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white shadow-sm transition-transform group-hover:rotate-[-5deg]">
                <Image
                  src="/logo.png"
                  alt="Rahi's Collection Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-rahi-red-500 leading-none tracking-tight">
                  RAHI&apos;S
                </span>
                <span className="font-accent text-rahi-red-500 text-sm leading-none">
                  Collection
                </span>
              </div>
            </Link>
            <p className="text-ink-600 leading-relaxed">
              Silchar&apos;s beloved family boutique. Quality clothes, jewellery, and stationery for every occasion.
            </p>
            <div className="flex gap-4">
              <a 
                href={SITE.social.instagram} 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ink-600 hover:scale-110 transition-all shadow-sm overflow-hidden p-2"
                aria-label="Instagram"
              >
                <Image src="/social-icons/instagram.png" alt="Instagram" width={24} height={24} className="object-contain" />
              </a>
              <a 
                href={SITE.social.facebook} 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ink-600 hover:scale-110 transition-all shadow-sm overflow-hidden p-2"
                aria-label="Facebook"
              >
                <Image src="/social-icons/facebook.png" alt="Facebook" width={24} height={24} className="object-contain" />
              </a>
              <a 
                href={SITE.whatsapp} 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ink-600 hover:scale-110 transition-all shadow-sm overflow-hidden p-2"
                aria-label="WhatsApp"
              >
                <Image src="/social-icons/whatsapp.png" alt="WhatsApp" width={24} height={24} className="object-contain" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-ink-900 mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/collections" className="text-ink-600 hover:text-rahi-red-500 transition-colors">All Collections</Link></li>
              <li><Link href="/lookbook" className="text-ink-600 hover:text-rahi-red-500 transition-colors">Festive Lookbook</Link></li>
              <li><Link href="/visit" className="text-ink-600 hover:text-rahi-red-500 transition-colors">Visit Our Shop</Link></li>
              <li><Link href="/about" className="text-ink-600 hover:text-rahi-red-500 transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Boutique Sections */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-ink-900 mb-6">Boutique</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/collections/ladies" className="text-ink-600 hover:text-rahi-red-500 transition-colors">Ladies Wear</Link></li>
              <li><Link href="/collections/gents" className="text-ink-600 hover:text-rahi-red-500 transition-colors">Gents Wear</Link></li>
              <li><Link href="/collections/kids" className="text-ink-600 hover:text-rahi-red-500 transition-colors">Kids Wear</Link></li>
              <li><Link href="/collections/jewellery" className="text-ink-600 hover:text-rahi-red-500 transition-colors">Jewellery & Gifts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold text-ink-900 mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-rahi-red-500 shrink-0" />
                <span className="text-ink-600">{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-rahi-red-500 shrink-0" />
                <div className="flex flex-col gap-1">
                  {SITE.phones.map(phone => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="text-ink-600 hover:text-rahi-red-500 transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-rahi-red-500 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="text-ink-600 hover:text-rahi-red-500 transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ink-400 text-sm">
            © {new Date().getFullYear()} Rahi&apos;s Collection. All rights reserved.
          </p>
          <p className="text-ink-400 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-rahi-red-500 fill-rahi-red-500" /> in Silchar
          </p>
        </div>
      </div>
    </footer>
  );
}
