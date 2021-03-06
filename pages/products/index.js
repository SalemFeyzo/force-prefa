import ProductCard from '../../components/ProductCard'

const Products = ({ products }) => {
  return (
    <div className="p-3 mx-5  grid gap-5  md:grid-cols-2 md:mx-12 lg:grid-cols-3 lg:mx-16">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default Products

export async function getServerSideProps(context) {
  const res = await fetch(
    `${process.env.API_URL}/products?_locale=${context.locale}`,
  )
  const products = await res.json()

  if (!products) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  }
}
