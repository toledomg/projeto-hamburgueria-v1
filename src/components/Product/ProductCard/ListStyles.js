import styled from "styled-components";

export const LiCart = styled.li`
  font-family: var(--font-primary);
  width: 300px;
  height: 346px;

  background: var(--color-list);

  border: 2px solid var(--color-gray-20);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  gap: 10px;

  img {
    width: 296px;
    height: 150px;

    background-color: var(--color-gray-0);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    object-fit: contain;
    aspect-ratio: 3/2;
    /* mix-blend-mode: color-burn; */
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    gap: 16px;
    padding: 10px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #a9a9a9;
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: var(--color-primary);
  }

  :hover {
    border-color: var(--color-gray-50);
  }
`;
