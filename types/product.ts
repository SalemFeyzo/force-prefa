export type Product = {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  locale: "en" | "tr" | "ar";
  categoryId: string;
  featured: boolean;
};
