import { client } from "@/sanity/lib/client";
import { unstable_cache } from "next/cache";

export const getCategoriesWithProducts = unstable_cache(
  async () => {
    const query = `*[_type == "category"] {
      _id,
      title,
      "slug": slug.current,
      "products": *[_type == "product" && references(^._id)] | order(_createdAt desc) [0...8] {
        _id,
        name,
        "slug": slug.current,
        description,
        images,
        rawImage,
        isNewArrival,
        isFeatured
      }
    }`;

    return await client.fetch(query, {}, {
      next: { revalidate: 3600 }
    });
  },
  ["categories-with-products"],
  {
    revalidate: 3600,
    tags: ["products", "categories"]
  }
);

export async function getPaginatedProducts(page: number = 1, pageSize: number = 20, categorySlug?: string) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const filter = categorySlug 
    ? `&& references(*[_type == "category" && slug.current == $categorySlug][0]._id)` 
    : "";

  const query = `{
    "products": *[_type == "product" ${filter}] | order(_createdAt desc) [$start...$end] {
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      rawImage,
      isNewArrival,
      isFeatured
    },
    "total": count(*[_type == "product" ${filter}])
  }`;

  return await client.fetch(query, { start, end, categorySlug: categorySlug || "" }, {
    next: { revalidate: 3600 }
  });
}

export async function getProductsByCategory(
  slug: string, 
  page: number = 1, 
  pageSize: number = 20, 
  subCategorySlug?: string
) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const productFilter = subCategorySlug
    ? `&& references(*[_type == "subCategory" && slug.current == $subCategorySlug][0]._id)`
    : "";

  const query = `{
    "category": *[_type == "category" && slug.current == $slug][0] {
      _id,
      title,
      description
    },
    "subCategories": *[_type == "subCategory" && parentCategory._ref == *[_type == "category" && slug.current == $slug][0]._id] | order(title asc) {
      _id,
      title,
      "slug": slug.current
    },
    "products": *[_type == "product" && references(*[_type == "category" && slug.current == $slug][0]._id) ${productFilter}] | order(_createdAt desc) [$start...$end] {
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      rawImage,
      isNewArrival,
      isFeatured
    },
    "total": count(*[_type == "product" && references(*[_type == "category" && slug.current == $slug][0]._id) ${productFilter}])
  }`;

  return await client.fetch(query, { slug, start, end, subCategorySlug: subCategorySlug || "" }, {
    next: { revalidate: 3600 }
  });
}

export async function getAllCategories() {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 3600 } });
}

export const getLatestProducts = unstable_cache(
  async (limit: number = 10) => {
    const query = `*[_type == "product"] | order(_createdAt desc) [0...$limit] {
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      rawImage,
      isNewArrival,
      isFeatured,
      category-> {
        title,
        "slug": slug.current
      }
    }`;

    return await client.fetch(query, { limit }, {
      next: { revalidate: 3600 }
    });
  },
  ["latest-products-10"],
  {
    revalidate: 3600,
    tags: ["products"]
  }
);
