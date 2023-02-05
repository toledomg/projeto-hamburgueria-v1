import styled from "styled-components";

export const UlList = styled.ul`
  width: 100%;
  max-width: 1000px;
  min-width: 320px;
  display: flex;
  justify-content: start;
  align-items: center;

  gap: 20px;
  padding: 20px;

  overflow-x: auto;
  margin: 0 auto;

  @media screen and (min-width: 769px) and (max-width: 8044px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
