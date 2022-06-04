import { useTask } from "../../hooks/useTask";
import { formatDate } from "../../utils/formatter";
import { Container } from "./styles";

export const ListTasks = () => {
  const { tasks } = useTask();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Nome da atividade</th>
            <th>Prioridade</th>
            <th>Criada em</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => {
              return (
                <tr>
                  <td>{task.done ? "Finalizado" : "Pendente"}</td>
                  <td>{task.title}</td>
                  <td>{task.priority}</td>
                  <td>{formatDate(task.schedule)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
};
