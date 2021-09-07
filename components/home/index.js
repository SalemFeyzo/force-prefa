import FeaturedProducts from './FeaturedProducts'

const Home = ({ products }) => {
  const featured = products.filter(
    (product) => product.featured === true,
  )

  return (
    <div>
      <div className="bg-factory-image  w-full h-96 bg-cover bg-bottom ">
        <div className=" w-full h-96 bg-gray-700 bg-opacity-75 flex justify-items-center">
          <div className="m-auto">
            <a href="#featured">
              <div>
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="featured" className=" pt-32 pb-60 px-4 ml-5 mr-5  ">
        <FeaturedProducts featured={featured} />
      </div>
    </div>
  )
}

export default Home
