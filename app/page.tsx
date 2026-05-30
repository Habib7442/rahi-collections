import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import CategoryTabs from "@/components/home/CategoryTabs";
import TeaserMarquee from "@/components/home/TeaserMarquee";
import { getCategoriesWithProducts, getLatestProducts } from "@/lib/sanity-queries";

export default async function Home() {
  let categories = [];
  let latestProducts = [];
  
  try {
    // Run both queries in parallel for peak loading performance
    const [categoriesData, productsData] = await Promise.all([
      getCategoriesWithProducts(),
      getLatestProducts(10),
    ]);
    categories = categoriesData || [];
    latestProducts = productsData || [];
  } catch (error) {
    console.error("Failed to fetch landing page data:", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        
        {/* Dynamic Collections Section */}
        <CategoryTabs categories={categories} />

        {/* Dynamic Teaser Marquee Section (Continuous Scroll Left-to-Right) */}
        <TeaserMarquee products={latestProducts} />
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
