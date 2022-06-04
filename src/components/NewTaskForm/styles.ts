import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid var(--input-border-color);
    background-color: var(--input-background);
    color: var(--text-body);

    font-weight: 400;
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
