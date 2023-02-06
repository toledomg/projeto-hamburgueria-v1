import styled from "styled-components";

export const DivSearch = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 20px;
  gap: 16px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 10px;
  }

  div > h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 34px;

    color: var(--color-gray-100);
  }

  div > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 34px;

    color: var(--color-gray-50);
  }

  button {
    width: 100px;
    height: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    text-align: center;

    color: var(--color-gray-0);

    padding: 0px 10px;
    gap: 10px;

    background: var(--color-primary);

    border: 2px solid var(--color-primary);
    border-radius: 8px;
  }
`;
