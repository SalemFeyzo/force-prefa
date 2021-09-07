import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const ProductDetails = ({ product }) => {
  const { planImage, mainImage, perspectiveImage } = product

  const images = [
    {
      original: mainImage.formats.large.url,
      thumbnail: mainImage.formats.thumbnail.url,
    },
    {
      original: perspectiveImage.formats.large.url,
      thumbnail: perspectiveImage.formats.thumbnail.url,
    },
    {
      original: planImage.formats.large.url,
      thumbnail: planImage.formats.thumbnail.url,
    },
  ]

  return (
    <div className="container mx-auto bg-gray-400 rounded-md">
      <div className="grid gap-4 md:grid-cols-2 m-4 p-4 ">
        <div>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showNav={false}
            lazyLoad={true}
            thumbnailPosition="right"
            // autoPlay={true}
          />
        </div>
        <div>{product.title}</div>
      </div>
      <div className="m-4 p-4">{product.details}</div>
    </div>
  )
}

export default ProductDetails

// this code below cause an issue
// export async function getStaticPaths() {
//   const res = await fetch(`${process.env.API_URL}/products`)
//   const products = await res.json()

//   if (!products) {
//     return {
//       notFound: true,
//     }
//   }

//   const paths = products.map((product) => {
//     return {
//       params: {
//         id: product.id.toString(),
//       },
//     }
//   })

//   return {
//     paths,
//     fallback: true,
//   }
// }

// export async function getStaticProps(context) {
//   const id = context.params.id
//   const currentLocale = context.locale.toString()

//   const res = await fetch(`${process.env.API_URL}/products/${id}`)
//   const product = await res.json()

//   const matchedLocale = product.localizations.find(
//     (l) => l.locale === currentLocale,
//   )

//   let loclizedProduct = undefined
//   if (currentLocale !== product.locale) {
//     const loclizedProductRes = await fetch(
//       `${process.env.API_URL}/products/${matchedLocale.id}`,
//     )
//     loclizedProduct = await loclizedProductRes.json()
//   }

//   return {
//     props: {
//       product: loclizedProduct ? loclizedProduct : product,
//       messages: require(`../../locales/${context.locale}.json`),
//     },
//     revalidate: 60,
//   }
// }

export async function getServerSideProps(context) {
  const id = context.params.id
  const currentLocale = context.locale.toString()

  const res = await fetch(`${process.env.API_URL}/products/${id}`)
  const product = await res.json()

  const matchedLocale = product.localizations.find(
    (l) => l.locale === currentLocale,
  )

  let loclizedProduct = undefined
  if (currentLocale !== product.locale) {
    const loclizedProductRes = await fetch(
      `${process.env.API_URL}/products/${matchedLocale.id}`,
    )
    loclizedProduct = await loclizedProductRes.json()
  }

  return {
    props: {
      product: loclizedProduct ? loclizedProduct : product,
      messages: require(`../../locales/${context.locale}.json`),
    },
  }
}
