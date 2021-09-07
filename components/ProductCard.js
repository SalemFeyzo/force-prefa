import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ProductCard = ({ product }) => {
  const router = useRouter()

  return (
    <Link href={`/products/${product.id}`} locale={router.locale}>
      <a>
        <div className="  border-4 border-black rounded-md bg-gradient-to-r from-yellow-400 via-yellow-100 to-yellow-400 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-200  hover:to-yellow-500">
          <Image
            src={product.mainImage.formats.medium.url}
            width="700px"
            height="400px"
            className="object-fill inset-0 mt-1"
          />
          <div
            className="p-2 font-bold"
            dir={router.locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <h2>{product.title}</h2>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProductCard
