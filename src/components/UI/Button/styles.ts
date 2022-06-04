import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background-color: var(--green);
  color: #fff;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
