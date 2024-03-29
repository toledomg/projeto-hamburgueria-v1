import styled from "styled-components";

export const BtnMedium = styled.button`
  box-sizing: border-box;
  width: 130px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  gap: 10px;

  font-weight: 550;
  font-size: 16px;
  line-height: 19px;

  color: var(--color-gray-0);
  background: var(--color-primary);

  border: 2px solid var(--color-primary);
  border-radius: 8px;

  :disabled {
    color: var(--color-gray-50);
    background: var(--color-gray-20);
    border: 2px var(--color-gray-20);
  }

  :disabled:hover {
    color: var(--color-gray-0);
    background: var(--color-gray-50);
    border: 2px var(--color-gray-50);
  }

  :hover {
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
  }
`;
