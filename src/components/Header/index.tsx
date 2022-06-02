import { Container, HeaderContainer } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <h2>Tasker</h2>
        <button>Nova task</button>
      </Container>
    </HeaderContainer>
  );
};
