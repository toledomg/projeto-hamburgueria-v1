import styled from "styled-components";

export const DivCart = styled.div`
  width: 380px;
  min-width: 320px;
  height: 100%;
  max-height: 800px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background: var(--color-gray-0);
  border-radius: 0px 0px 5px 5px;

  margin: 30px auto;

  gap: 20px;

  section {
    width: 100%;
    height: 65px;

    display: flex;
    justify-content: start;
    align-items: center;

    background-color: var(--color-primary);
    border-radius: 5px 5px 0px 0px;

    padding: 20px;
  }

  section > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--color-gray-0);
  }
`;

export const UlCart = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  gap: 16px;
`;
