import styled from "styled-components";

export const Wrapper = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
`;

export const HomeHeading = styled.h1`
  font-size: 3rem;
`;

export const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: 2rem;

  @media (min-width: 700px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
`;
