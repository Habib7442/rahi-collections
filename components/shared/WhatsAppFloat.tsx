import Image from "next/image";
import { SITE } from "@/lib/seo";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <Image 
        src="/social-icons/whatsapp.png" 
        alt="WhatsApp" 
        width={32} 
        height={32} 
        className="w-8 h-8 lg:w-9 lg:h-9 object-contain" 
      />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-ink-900 px-3 py-1.5 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-cream-200">
        Chat with us!
      </span>
    </a>
  );
}
