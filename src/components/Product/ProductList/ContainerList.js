import styled from "styled-components";

export const UlList = styled.ul`
  width: 100%;
  max-width: 350px;
  min-width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;
  padding: 10px;

  overflow-x: auto;
  margin: 0 auto;

  /* Style ScrollBar - Barra de rolagem */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-50);
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /*  */

  @media screen and (min-width: 769px) and (max-width: 8044px) {
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
