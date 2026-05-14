import { getProductsByCategory, getAllCategories } from "@/lib/sanity-queries";
import ProductCard from "@/components/shared/ProductCard";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SITE } from "@/lib/seo";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getProductsByCategory(slug);
  
  if (!data.category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${data.category.title} Collections`,
    description: data.category.description || `Browse our latest collection of ${data.category.title} at ${SITE.name}. Premium quality and traditional designs.`,
    openGraph: {
      title: `${data.category.title} | ${SITE.name}`,
      description: data.category.description,
      url: `${SITE.url}/collections/${slug}`,
    },
    alternates: {
      canonical: `/collections/${slug}`,
    }
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const sParams = await searchParams;
  const currentPage = Math.max(1, parseInt(sParams.page || "1") || 1);
  const pageSize = 20;

  let category = null;
  let products = [];
  let total = 0;

  try {
    const data = await getProductsByCategory(slug, currentPage, pageSize);
    category = data.category;
    products = data.products;
    total = data.total;
  } catch (error) {
    console.error(`Failed to fetch category data for ${slug}:`, error);
  }

  if (!category) {
    notFound();
  }

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow pb-20">
        {/* Header */}
        <div className="bg-background py-16 border-b border-border">
          <div className="container mx-auto px-6">
            <Link 
              href="/collections" 
              className="text-rahi-red-500 font-bold text-sm uppercase tracking-widest mb-4 inline-block hover:translate-x-[-4px] transition-transform"
            >
              ← All Collections
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl text-ink-900 mb-4">{category.title}</h1>
            {category.description && (
              <p className="text-ink-600 max-w-2xl text-lg">
                {category.description}
              </p>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-6 py-12">
          {products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                      <Link href={`/collections/${slug}?page=${currentPage - 1}`}>Previous</Link>
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
                      <Link href={`/collections/${slug}?page=${currentPage + 1}`}>Next</Link>
                    ) : (
                      <span>Next</span>
                    )}
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-ink-400 text-xl font-serif italic">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
