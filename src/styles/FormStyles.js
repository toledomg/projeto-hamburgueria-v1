import styled from "styled-components";

export const StyledForm = styled.form`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 15px;
  gap: 115px;

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
