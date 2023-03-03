import { Link } from "react-router-dom"
import { baseURL } from "../../constants";
import { useAPI } from "../../hooks/API";
import { ProductCard } from "../../components/product/productCard";
import { Wrapper, HomeHeading, ProductGrid } from "./home.styles";

function Products({ products, isLoading, isError }) {
  if (isLoading) {
    return <div>Loading</div>;
  } 
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGrid>
  );
}

function Home(){
  const {data, isLoading, isError} = useAPI(baseURL);
  if(!isLoading){
    console.log(data)
  }
  
  return(
    <Wrapper>
      <HomeHeading>Home Page</HomeHeading>
      <Products products={data} isLoading={isLoading} isError={isError} />
    </Wrapper>
  )
}

export default Home