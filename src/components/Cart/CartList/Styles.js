import styled from "styled-components";

export const LiCart = styled.li`
  font-family: var(--font-primary);
  width: 100%;
  max-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  img {
    width: 70px;
    height: 70px;

    background-color: var(--color-gray-20);
    border-radius: 5px;

    padding: 5px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  div > h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: var(--color-gray-100);
  }

  div > span {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    /* identical to box height, or 133% */

    /* grey-300 */

    color: var(--color-gray-50);
  }

  button {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: var(--color-gray-40);
    background: transparent;

    outline: none;
    border: none;
  }
`;
