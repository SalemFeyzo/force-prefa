import { unstable_setRequestLocale } from "next-intl/server";
import ProductCard from "@/components/product-card";
import PublicLayout from "@/components/public-layout";
import { products } from "@/data/products";

export default async function Products({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <PublicLayout>
      <div className="w-full">
        <h1>Products</h1>
        <div className="grid grid-cols-1 gap-3 p-4 text-gray-900 md:grid-cols-2">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </PublicLayout>
  );
}
