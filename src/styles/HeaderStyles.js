import styled from "styled-components";

export const StyleHeaders = styled.header`
  width: 100%;
  display: flex;

  background-color: var(--color-gray-0);
  box-shadow: 0px 4px 6px -6px rgba(0, 0, 0, 0.35);

  padding: 10px 10px;
  gap: 10px;

  /*  */
  div {
    width: 100%;
    max-width: 1400px;
    min-width: 320px;
    height: auto;
    max-height: 160px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    /* padding: 20px 0; */
  }

  div > div {
    width: 220px;
    min-width: 220px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 30px;
    margin: 0 auto;
  }

  div > div > img {
    width: 160px;
    height: 37px;
    /* border: 1px solid gray; */
  }

  /* mobile media */

  @media screen and (min-width: 769px) and (max-width: 4044px) {
    div {
      justify-content: space-between;
    }

    div > div {
      margin: 0 30px;
    }
  }
`;
