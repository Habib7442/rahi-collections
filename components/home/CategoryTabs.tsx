"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/shared/ProductCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Suspense } from "react";

import { Category } from "@/lib/types";

interface CategoryTabsProps {
  categories: Category[];
}

function CategoryTabsContent({ categories }: CategoryTabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  if (!categories || categories.length === 0) return null;

  // Filter and prioritize "Ladies Wear" to be the first tab
  const activeCategories = categories
    .sort((a: any, b: any) => {
      if (a.slug === 'ladies-wear') return -1;
      if (b.slug === 'ladies-wear') return 1;
      return 0; // Maintain other categories' order
    });

  if (activeCategories.length === 0) return (
    <div className="text-center py-20 bg-background rounded-3xl border-2 border-dashed border-border">
      <p className="text-ink-400 font-serif text-xl italic">
        "Our latest collections are currently being curated. Check back soon!"
      </p>
    </div>
  );

  const defaultTab = activeCategories[0].slug;
  const categoryParam = searchParams.get("category");
  const currentTab = activeCategories.some(cat => cat.slug === categoryParam) 
    ? (categoryParam as string) 
    : defaultTab;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink-900 mb-4 tracking-tight"
          >
            Explore Our Collections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-accent text-rahi-red-600 text-2xl lg:text-3xl mb-4 rotate-[-1.5deg] inline-block"
          >
            handpicked style, curated just for you
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-[2px] w-36 bg-gradient-to-r from-transparent via-rahi-red-500 to-transparent mx-auto rounded-full mt-2"
          />
        </div>

        <Tabs 
          value={currentTab} 
          onValueChange={handleTabChange}
          className="w-full"
        >
          <div className="w-full overflow-x-auto no-scrollbar mb-12 pb-2 -mx-6 px-6 md:mx-0 md:px-0 flex md:justify-center">
            <TabsList className="bg-white border border-border p-1 rounded-full h-auto flex flex-nowrap w-max gap-1 md:gap-2 mx-auto md:mx-0">
              {activeCategories.map((category) => (
                <TabsTrigger
                  key={category._id}
                  value={category.slug}
                  className="rounded-full px-5 py-2 md:px-6 md:py-2.5 text-sm font-semibold data-[state=active]:bg-rahi-red-500 data-[state=active]:text-white transition-all whitespace-nowrap"
                >
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {activeCategories.map((category) => (
            <TabsContent key={category._id} value={category.slug} className="mt-0">
              {category.products && category.products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {category.products.map((product, index) => (
                    <ProductCard 
                      key={product._id} 
                      product={product} 
                      priority={index < 4 && category.slug === currentTab}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 mb-12 bg-white/50 rounded-3xl border border-dashed border-sky-200">
                  <p className="text-ink-500 font-accent text-lg">
                    New items arriving soon in this collection!
                  </p>
                </div>
              )}
              
              <div className="flex justify-center mt-12">
                <Button 
                  asChild
                  className="rounded-full border-2 border-ink-900 bg-white text-ink-900 hover:bg-ink-900 hover:text-white px-10 py-5 h-auto font-bold text-lg shadow-[4px_4px_0px_#1A1410] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <Link href={`/collections/${category.slug}`}>
                    View Full {category.title} Collection
                  </Link>
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>

      </div>
    </section>
  );
}

export default function CategoryTabs(props: CategoryTabsProps) {
  return (
    <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading collections...</div>}>
      <CategoryTabsContent {...props} />
    </Suspense>
  );
}
