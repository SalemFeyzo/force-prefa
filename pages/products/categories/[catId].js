import { useRouter } from 'next/router'
import ProductCard from '../../../components/ProductCard'

const CategorizedProducts = ({ category }) => {
  const router = useRouter()
  return (
    <div dir={router.locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="bg-gradient-to-tr from-gray-300 via-gray-400 to-gray-500 py-4 px-20">
        <h1 className="text-2xl font-bold text-gray-900">
          {category && category.name}
        </h1>
      </div>
      <div className="p-3 mx-5  grid gap-5  md:grid-cols-2 md:mx-12 lg:grid-cols-3 lg:mx-16">
        {category.products &&
          category.products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default CategorizedProducts

export async function getServerSideProps(context) {
  const id = context.params.catId
  const currentLocale = context.locale.toString()

  const res = await fetch(`${process.env.API_URL}/categories/${id}`)
  const category = await res.json()

  const matchedLocale = category.localizations.find(
    (l) => l.locale === currentLocale,
  )

  let loclizedCategory = undefined
  if (currentLocale !== category.locale) {
    const loclizedCategoryRes = await fetch(
      `${process.env.API_URL}/categories/${matchedLocale.id}`,
    )
    loclizedCategory = await loclizedCategoryRes.json()
  }

  return {
    props: {
      category: loclizedCategory ? loclizedCategory : category,
    },
  }
}
