import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductContainer = styled.div`
  background-color: var(--secondary-bg);
  padding: 1.5rem;
  text-align: center;
  border-radius: 1rem;
`;

export const ProductHeading = styled.h2`
  color: red;
  margin-top: 0;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1.5rem;
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.8rem;
  background-color: darkblue;
  transition: all 0.5s;
  border-radius: 1rem;

  :hover {
    color: darkblue;
    background-color: white;
  }
`;

export const ProductPrice = styled.p``;

export const ProductDiscounted = styled.span``;
