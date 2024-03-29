import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
:root {
  --font-primary: "Inter", sans-serif;

  --color-primary: #27ae60;
  --color-primary-50: #93d7af;
  --color-secondary: #eb5757;
  --color-list: #FFFFFF

  --color-gray-100: #333333;
  --color-gray-50: #828282;
  --color-gray-40: #BDBDBD;
  --color-gray-20: #e0e0e0;
  --color-gray-0: #f5f5f5;
  

  --color-negative: #e60000;
  --color-warning: #ffcd07;
  --color-sucess: #168821;
  --color-info: #155bcb;
}

.colorPrimary {
  --color-primary: #27ae60;
}
.colorPrimary-50 {
  --color-primary-50: #93d7af;
}
.colorSecondary {
  --color-secondary: #eb5757;
}
.color-gray-100 {
  --color-gray-100: #333333;
}
.color-gray-50 {
  --color-gray-50: #828282;
}
.color-gray-20 {
  --color-gray-20: #e0e0e0;
}
.color-gray-0 {
  --color-gray-0: #f5f5f5;
}
.color-negative {
  --color-negative: #e60000;
}
.color-warning {
  --color-warning: #ffcd07;
}
.color-sucess {
  --color-sucess: #168821;
}
.color-info {
  --color-info: #155bcb;
}

div {
  font-family: var(--font-primary);
}

`;

export const Reset = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

button{
  cursor: pointer;
}
`;
