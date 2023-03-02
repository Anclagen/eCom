import { Link } from "react-router-dom"

function Home(){
  return(
    <main>
      <h1>Home Page</h1>
      <div>
        <Link to="/product/f99cafd2-bd40-4694-8b33-a6052f36b435">link to product page</Link>
      </div>
    </main>
  )
}

export default Home