import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './navbar/Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo&display=swap"
          rel="stylesheet"
        />
        <title>Force Prefabrik</title>
      </Head>
      <div
        className={`bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700 ${
          router.locale === 'ar' ? 'font-cairo' : 'font-arial'
        } text-sm`}
      >
        <div className=" bg-main-background-image w-full h-full bg-no-repeat bg-cover bg-center ">
          <Header />
          <main>
            <div className="h-full">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
