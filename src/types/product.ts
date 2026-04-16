export type ProductCategory =
  | "sparkling"
  | "still"
  | "mixer"
  | "flavoured"
  | "fruit-gems";

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  sparkling: "Sparkling",
  still: "Still",
  mixer: "Mixer",
  flavoured: "Flavoured",
  "fruit-gems": "Fruit Gems",
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  description: string;
  image: string;
  bgColor: string;
  bgColorDark: string;
  accentColor: string;
  textColor: "light" | "dark";
  category: ProductCategory;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  sizes: string[];
  features: string[];
  usageOccasions: string[];
};
