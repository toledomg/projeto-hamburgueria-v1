import styled from "styled-components";

export const DivCart = styled.section`
  width: 380px;
  min-width: 320px;
  height: auto;
  min-height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  background: var(--color-gray-0);
  border-radius: 0px 0px 5px 5px;

  margin: 0 auto;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  gap: 16px;
`;
