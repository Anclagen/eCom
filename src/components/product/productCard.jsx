import React from "react";
import { Link } from "react-router-dom";
import { ProductContainer, ProductHeading, ProductImage, ProductLink } from "./productCard.styles";

export function ProductCard({product}){
  const {id, title, imageUrl, price, discountedPrice, rating, tags, reviews, description} = product
  return(
    <ProductContainer>
      <ProductHeading>{title}</ProductHeading>
      <ProductImage src={imageUrl} alt={title}/>
      <p>Price: {price === discountedPrice? `kr ${price}`:`kr ${discountedPrice}, save kr ${price - discountedPrice}`}</p>
      <ProductLink to={`product/${id}`}>View More</ProductLink>
    </ProductContainer>
  )
}