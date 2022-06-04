import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      background: var(--shape);
      border-radius: 0.25rem;
      padding: 1rem 2rem;
      border: 0;
      color: var(--text-body);

      button {
        border: none;
        background: transparent;
      }

      &:first-child {
        width: 5rem;
      }

      &:nth-child(3) {
        color: var(--text-title);
        font-weight: 500;
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
    }
  }
`;
