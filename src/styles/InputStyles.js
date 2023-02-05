import styled from "styled-components";

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
