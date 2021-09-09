import NextApp from 'next/app'
import { NextIntlProvider } from 'next-intl'
import Layout from '../components/layout'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/globals.css'

function MyApp({ Component, messages, pageProps }) {
  return (
    <NextIntlProvider
      messages={{ ...messages, ...pageProps.messages }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextIntlProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async function getInitialProps(context) {
  const { locale } = context.router
  return {
    ...(await NextApp.getInitialProps(context)),
    messages: require(`../locales/${locale}.json`),
  }
}
