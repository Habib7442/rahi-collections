import { getPaginatedProducts, getAllCategories } from "@/lib/sanity-queries";
import ProductCard from "@/components/shared/ProductCard";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CollectionsPageProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function CollectionsPage({ searchParams }: CollectionsPageProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page || "1") || 1);
  const currentCategory = params.category;
  const pageSize = 20;

  let products = [];
  let total = 0;
  let categoriesData = [];

  try {
    const [paginatedData, allCategories] = await Promise.all([
      getPaginatedProducts(currentPage, pageSize, currentCategory),
      getAllCategories()
    ]);
    products = paginatedData.products;
    total = paginatedData.total;
    categoriesData = allCategories;
  } catch (error) {
    console.error("Failed to fetch collection data:", error);
  }

  // Prioritize "Ladies Wear" to be at the top
  const categories = [...categoriesData].sort((a: any, b: any) => {
    if (a.slug === 'ladies-wear') return -1;
    if (b.slug === 'ladies-wear') return 1;
    return (a.title || '').localeCompare(b.title || '');
  });

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow pb-20">
        {/* Header */}
        <div className="bg-sky-50 py-16 border-b border-sky-100">
          <div className="container mx-auto px-6">
            <h1 className="font-serif text-4xl md:text-5xl text-ink-900 mb-4">All Collections</h1>
            <p className="text-ink-600 max-w-2xl text-lg">
              Browse our entire catalog of premium sarees, kurtis, jewellery, and more. 
              Find the perfect piece for every occasion.
            </p>
          </div>
        </div>

        {/* Catalog Section */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Filter Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-28">
                <h3 className="font-serif text-xl text-ink-900 mb-6 flex items-center gap-2">
                  <span className="h-4 w-1 bg-rahi-red-500 rounded-full"></span>
                  Filter by Category
                </h3>
                <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
                  <Link 
                    href="/collections"
                    className={cn(
                      "px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                      !currentCategory 
                        ? "bg-ink-900 text-white shadow-lg shadow-ink-900/20" 
                        : "bg-white text-ink-600 hover:bg-sky-100 border border-sky-100"
                    )}
                  >
                    All Items
                  </Link>
                  {categories.map((category: any) => (
                    <Link 
                      key={category._id}
                      href={`/collections?category=${category.slug}`}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap",
                        currentCategory === category.slug
                          ? "bg-ink-900 text-white shadow-lg shadow-ink-900/20" 
                          : "bg-white text-ink-600 hover:bg-sky-100 border border-sky-100"
                      )}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Grid Content */}
            <div className="flex-grow">
              {products.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {products.map((product: any) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </div>

                  {/* Simple Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4">
                      <Button
                        variant="outline"
                        disabled={currentPage <= 1}
                        asChild={currentPage > 1}
                      >
                        {currentPage > 1 ? (
                          <Link href={`/collections?page=${currentPage - 1}${currentCategory ? `&category=${currentCategory}` : ""}`}>
                            Previous
                          </Link>
                        ) : (
                          <span>Previous</span>
                        )}
                      </Button>
                      
                      <span className="text-ink-600 font-medium">
                        Page {currentPage} of {totalPages}
                      </span>

                      <Button
                        variant="outline"
                        disabled={currentPage >= totalPages}
                        asChild={currentPage < totalPages}
                      >
                        {currentPage < totalPages ? (
                          <Link href={`/collections?page=${currentPage + 1}${currentCategory ? `&category=${currentCategory}` : ""}`}>
                            Next
                          </Link>
                        ) : (
                          <span>Next</span>
                        )}
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-20 bg-sky-50 rounded-[3rem] border-2 border-dashed border-sky-200">
                  <p className="text-ink-400 text-xl font-serif italic">No products found in this selection.</p>
                  <Button asChild variant="link" className="mt-4 text-rahi-red-500">
                    <Link href="/collections">Clear all filters</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
