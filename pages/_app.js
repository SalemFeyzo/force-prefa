import { useEffect } from 'react'
import NextApp from 'next/app'
import { useRouter } from 'next/router'
import { NextIntlProvider } from 'next-intl'
import MyProgressBar from '../components/layout/navbar/MyProgressBar'
import { useProgressStore } from '../store'
import Layout from '../components/layout'
import 'react-image-gallery/styles/css/image-gallery.css'
import '../styles/globals.css'

function MyApp({ Component, messages, pageProps }) {
  const setIsAnimating = useProgressStore(
    (state) => state.setIsAnimating,
  )
  const isAnimating = useProgressStore((state) => state.isAnimating)
  const router = useRouter()
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true)
    }
    const handleStop = () => {
      setIsAnimating(false)
    }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <NextIntlProvider
      messages={{ ...messages, ...pageProps.messages }}
    >
      <MyProgressBar isAnimating={isAnimating} />
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
