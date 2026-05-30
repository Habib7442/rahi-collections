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
  images?: any[];
  rawImage?: any;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  subCategory?: SubCategory;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  products?: Product[];
}
