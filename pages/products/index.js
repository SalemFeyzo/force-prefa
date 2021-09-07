import ProductCard from '../../components/ProductCard'

const Products = ({ products }) => {
  return (
    <div className="p-3  grid gap-5  md:grid-cols-3 mx-16">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default Products

export async function getStaticProps(context) {
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
      messages: require(`../../locales/${context.locale}.json`),
    }, // will be passed to the page component as props
    revalidate: 60,
  }
}
