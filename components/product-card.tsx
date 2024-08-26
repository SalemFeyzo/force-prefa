import { Link } from "@/lib/navigation";
import Image from "next/image";
import { Product } from "@/types/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      href={{ pathname: "/products/[id]", params: { id: String(product.id) } }}
    >
      <div className="rounded-md border-4 border-black bg-gradient-to-r from-yellow-400 via-yellow-100 to-yellow-400 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-200 hover:to-yellow-500">
        <Image
          // src={product.mainImage}
          src="/images/factory.png"
          width={700}
          height={400}
          className="inset-0 mt-1 object-fill"
          alt={product.title}
        />
        <div className="p-2 font-bold">
          <h2>{product.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
