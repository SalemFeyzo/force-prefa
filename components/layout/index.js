import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './navbar/Header'
import Footer from './Footer'
import ScrollTop from './ScrollTop'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Head>
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
          <ScrollTop />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
