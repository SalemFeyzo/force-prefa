import { useEffect, useState } from 'react'
import NextApp from 'next/app'
import { useRouter } from 'next/router'
import { NextIntlProvider } from 'next-intl'
import MyProgressBar from '../components/MyProgressBar'
import WhatsApp from '../components/WhatsApp'
import Layout from '../components/layout'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/globals.css'

function MyApp({ Component, messages, pageProps }) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true))
    router.events.on('routeChangeComplete', () => setLoading(false))
    router.events.on('routeChangeError', () => setLoading(false))

    return () => {
      router.events.off('routeChangeStart', () => setLoading(true))
      router.events.off('routeChangeComplete', () =>
        setLoading(false),
      )
      router.events.off('routeChangeError', () => setLoading(false))
    }
  }, [router])

  return (
    <NextIntlProvider
      messages={{ ...messages, ...pageProps.messages }}
    >
      <MyProgressBar isAnimating={loading} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <WhatsApp />
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
