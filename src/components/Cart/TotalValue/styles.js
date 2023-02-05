import styled from "styled-components";

export const DivTotal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  hr {
    width: 100%;
    border: 1px solid var(--color-gray-20);
    margin-top: 15px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div > h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-gray-100);
  }
  div > h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-gray-50);
  }

  button {
    display: flex;
    width: 343px;
    height: 60px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: var(--color-gray-50);

    background: var(--color-gray-20);

    border: 2px solid var(--color-gray-20);
    border-radius: 8px;

    padding: 0px 20px;
    gap: 10px;
  }
`;
