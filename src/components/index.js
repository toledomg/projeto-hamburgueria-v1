import styled from "styled-components";
export { default as HeadersComponent } from "./Headers";
export { default as ProductListComponent } from "./Product/ProductList";

export const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-items: auto;
    gap: 16px;
  }

  @media screen and (min-width: 769px) and (max-width: 4044px) {
  }
`;
