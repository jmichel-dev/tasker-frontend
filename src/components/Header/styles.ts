import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--shape);
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: var(--primary);
    font-weight: 600;
  }

  button {
    padding: 0.5rem 1.5rem;
    border: none;
    background-color: var(--primary-dark);
    border-radius: 5px;
    font-weight: 600;
    font-size: 1rem;
    color: #fff;
    transition: filter 0.2s;

    &:hover,
    &:active {
      filter: brightness(0.9);
    }
  }
`;
