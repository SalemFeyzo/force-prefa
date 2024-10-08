import { Product } from "@/types/product";
import ProductCard from "./product-card";

const FeaturedProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-rows-2 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
