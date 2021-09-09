import Home from '../components/home'

export default function HomePage({ products }) {
  return (
    <>
      <Home products={products} />
    </>
  )
}

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
