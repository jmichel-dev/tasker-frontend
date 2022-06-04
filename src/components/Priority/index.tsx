import { Container } from "./styles";

interface PriorityProps {
  priority: "low" | "medium" | "high";
}

export const Priority: React.FC<PriorityProps> = ({ priority }) => {
  return <Container priority={priority}></Container>;
};
