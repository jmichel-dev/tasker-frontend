import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Container } from "./styles";

export const NewTaskForm: React.FC = () => {
  return (
    <Container>
      <h2>Criar uma nova atividade</h2>
      <Input type="text" placeholder="Título da atividade" />
      <Input type="text" placeholder="Descrição da atividade" />
      <select>
        <option value="">Defina a prioridade...</option>
        <option value="1">Baixa</option>
        <option value="2">Média</option>
        <option value="3">Alta</option>
      </select>
      <Button buttonText="Criar" type="submit" />
    </Container>
  );
};
