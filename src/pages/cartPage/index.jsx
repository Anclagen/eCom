import { Link } from "react-router-dom"

function CartPage(){
  return(
    <main>
      <h1>Cart Page</h1>
      <div>
        <Link path="cart/success">Success Page</Link>
      </div>
    </main>
  )
}

export default CartPage