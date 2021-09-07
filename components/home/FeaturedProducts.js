import ProductCard from '../ProductCard'

const FeaturedProducts = ({ featured }) => {
  return (
    <div className="grid gap-5 md:grid-cols-2  lg:grid-cols-3 grid-rows-2 ">
      {featured.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default FeaturedProducts
