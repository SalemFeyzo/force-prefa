import Home from '../components/home'

export default function HomePage({ products }) {
  return (
    <>
      <Home products={products} />
    </>
  )
}

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
      messages: require(`../locales/${context.locale}.json`),
    }, // will be passed to the page component as props
    revalidate: 60,
  }
}
