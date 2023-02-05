import styled from "styled-components";

export const StyledForm = styled.form`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  gap: 40px;

  width: 382px;
  height: 60px;

  background: #ffffff;
  /* grey-100 */

  border: 2px solid #e0e0e0;
  border-radius: 8px;

  :focus-within {
    border: 2px solid #333333;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 80%;

  font-family: var(--font-primary);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  padding: 10px;

  caret-color: var(--color-sucess);

  outline: none;
  border: none;

  ::placeholder {
    color: var(--color-gray-20);
  }
`;
