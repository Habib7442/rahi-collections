import type { Image } from "sanity";

export interface SubCategory {
  _id: string;
  title: string;
  slug: string;
  parentCategory?: Category;
}

export interface Product {
  _id: string;
  name: string;
  slug?: string;
  description?: string;
  images?: Image[];
  rawImage?: Image;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  category?: Category;
  subCategory?: SubCategory;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  products?: Product[];
}
