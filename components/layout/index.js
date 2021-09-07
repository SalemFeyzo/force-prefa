import Image from 'next/image'
import Header from './navbar/Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className=" bg-gradient-to-b from-gray-800 via-gray-500 to-gray-700 font-arial text-sm ">
      <div className=" bg-main-background-image w-full h-full bg-no-repeat bg-cover bg-center ">
        <Header />
        <main>
          <div className="h-full">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
