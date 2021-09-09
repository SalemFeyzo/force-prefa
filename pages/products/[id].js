import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import ImageGallery from 'react-image-gallery'

const ProductDetails = ({ product }) => {
  const router = useRouter()
  const { planImages, mainImages, perspectiveImages } = product
  const t = useTranslations('productDetails')
  const main = mainImages.map((image) => {
    return {
      original: image.formats.medium.url,
      thumbnail: image.formats.thumbnail.url,
    }
  })
  const plan = planImages.map((image) => {
    return {
      original: image.formats.medium.url,
      thumbnail: image.formats.thumbnail.url,
    }
  })
  const prespective = perspectiveImages.map((image) => {
    return {
      original: image.formats.medium.url,
      thumbnail: image.formats.thumbnail.url,
    }
  })

  const images = main.concat(prespective, plan)

  return (
    <div
      className="container mx-auto bg-gray-300 rounded-md text-gray-900"
      dir={router.locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="grid gap-4 md:grid-cols-2 m-4 p-4 ">
        <div>
          <ImageGallery
            items={images}
            showPlayButton={true}
            showNav={false}
            lazyLoad={true}
            thumbnailPosition="bottom"
            // autoPlay={true}
          />
        </div>

        <div>
          <div className="p-3 text-xl font-bold text-yellow-700 md:text-2xl">
            <h1 className="">{product.title}</h1>
          </div>
          <div className="p-2 text-md font-bold text-lg">
            <h1>{t('features')}</h1>
          </div>
          <div className="divide-y-2 divide-gray-500 divide-solid">
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('rooms')}</h1>
              {product.rooms}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('spaceSize')}</h1>
              {product.spaceSize} {t('m')}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('wallHeight')}</h1>
              {product.wallHeight}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">
                {t('structuralSteel')}
              </h1>
              {product.structuralSteel}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">
                {t('exteriorWallPanels')}
              </h1>
              {product.exteriorWallPanels}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">
                {t('interiorWallPanels')}
              </h1>
              {product.interiorWallPanels}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('roof')}</h1>
              {product.roof}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">
                {t('roofInsulation')}
              </h1>
              {product.roofInsulation}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('exteriorDoor')}</h1>
              {product.exteriorDoor}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('interiorDoor')}</h1>
              {product.interiorDoor}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">
                {t('electricalInstallation')}
              </h1>
              {product.electricalInstallation}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('plumbing')}</h1>
              {product.plumbing}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('windows')}</h1>
              {product.windows}
            </div>
            <div className="flex justify-start p-2 text-md hover:bg-gray-200">
              <h1 className="mx-5 font-bold">{t('paint')}</h1>
              {product.paint}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

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
    },
  }
}

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
