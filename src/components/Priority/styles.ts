import styled from "styled-components";

interface PriorityProps {
  priority: "low" | "medium" | "high";
}

const color = {
  low: "#228be6",
  medium: "#fcc419",
  high: "#E62E4D",
};

export const Container = styled.div<PriorityProps>`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${(props) => color[props.priority]};
  color: var(--shape);
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 1rem;
  text-transform: uppercase;

  display: inline-flex;
`;
