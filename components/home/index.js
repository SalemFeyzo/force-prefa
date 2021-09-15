import FeaturedProducts from './FeaturedProducts'

const Home = ({ products }) => {
  const featured = products.filter(
    (product) => product.featured === true,
  )

  return (
    <div>
      <div className="relative h-screen">
        <div className="bg-factory-image  w-full h-full bg-cover bg-center ">
          <div className=" w-full h-full bg-gray-700 bg-opacity-75 flex justify-items-center">
            <div className="mx-auto bottom-0">
              <button
                onClick={() =>
                  document.getElementById('featured').scrollIntoView({
                    behavior: 'smooth',
                  })
                }
              >
                <div>
                  <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path
                      className="a2"
                      d="M0 20 L30 52 L60 20"
                    ></path>
                    <path
                      className="a3"
                      d="M0 40 L30 72 L60 40"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="featured" className=" pt-32 pb-60 px-4 mx-5">
        <FeaturedProducts featured={featured} />
      </div>
    </div>
  )
}

export default Home
