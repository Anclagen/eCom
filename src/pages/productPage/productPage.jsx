import { Link } from "react-router-dom"

function ProductPage(){
  return(
    <main>
      <h1>A Product Page</h1>
      <div>
        <Link path="/cart">add and go to cart</Link>
      </div>
    </main>
  )
}

export default ProductPage