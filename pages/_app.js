import { NextIntlProvider } from 'next-intl'
import Layout from '../components/layout'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  )
}

export default MyApp
