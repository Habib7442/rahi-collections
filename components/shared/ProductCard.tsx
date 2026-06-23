"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/seo";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const allImages = [
    ...(product.images || []),
    ...(product.rawImage ? [product.rawImage] : []),
  ];

  const autoplayPlugin = React.useMemo(() => [Autoplay({ delay: 5000 })], []);

  React.useEffect(() => {
    if (!api) return;
    
    const frameId = requestAnimationFrame(() => {
      setCurrent(api.selectedScrollSnap());
    });

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    
    return () => {
      cancelAnimationFrame(frameId);
      api.off("select", onSelect);
    };
  }, [api]);

  if (allImages.length === 0) return null;

  const mainImage = allImages[0];

  const handleWhatsApp = () => {
    if (typeof window === "undefined") return;
    const imageUrl = mainImage ? urlFor(mainImage).url() : "";
    const message = `Hi Rahi's Collection, I'm interested in this product: *${product.name}*.\n\nProduct Image: ${imageUrl}\n\nCould you please provide more details?`;
    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-[1.8rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-200 flex flex-col h-full"
    >
      {/* Image Carousel */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Carousel 
          setApi={setApi}
          plugins={autoplayPlugin}
          className="w-full h-full"
        >
          <CarouselContent className="h-full ml-0">
            {allImages.map((img, index) => (
              <CarouselItem key={index} className="pl-0 h-full relative">
                <Image
                  src={urlFor(img).url()}
                  alt={`${product.name} - ${index + 1}`}
                  fill
                  priority={priority && index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dots Pagination */}
        {allImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {allImages.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === current ? "w-6 bg-white shadow-sm" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNewArrival && (
            <Badge className="bg-rahi-red-500 hover:bg-rahi-red-600 text-white border-none px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
              NEW
            </Badge>
          )}
          {product.isFeatured && (
            <Badge className="bg-butter-300 hover:bg-butter-300 text-ink-900 border border-ink-900/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
              FEATURED
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl text-ink-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-ink-600 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description || "Beautiful piece from our exclusive boutique collection."}
        </p>
        
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-medium text-ink-400 uppercase tracking-wider">
            Catalog Item
          </span>
          <div className="flex gap-1">
            {product.images && product.images.length > 1 && (
              <span className="text-[10px] bg-butter-100 text-ink-600 px-2 py-0.5 rounded-full border border-butter-300/40 font-bold">
                +{product.images.length - 1} More
              </span>
            )}
            {product.rawImage && (
              <span className="text-[10px] bg-rahi-red-50 text-rahi-red-600 px-2 py-0.5 rounded-full border border-rahi-red-100 font-bold">
                Raw View
              </span>
            )}
          </div>
        </div>

        <button 
          onClick={handleWhatsApp}
          className="w-full bg-white hover:bg-ink-900 text-ink-900 hover:text-white border-2 border-ink-900 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-sm"
        >
          <Image src="/social-icons/whatsapp.png" alt="WhatsApp" width={20} height={20} className="object-contain" />
          Enquire Now
        </button>
      </div>
    </motion.div>
  );
}
