import { useMemo } from "react";
import { useTask } from "../../hooks/useTask";
import { formatDate } from "../../utils/formatter";
import { Priority } from "../Priority";
import { FaCheck } from "react-icons/fa";
import { Container } from "./styles";

interface PriorityProps {
  [key: number]: "low" | "medium" | "high";
}

export const ListTasks = () => {
  const priority: PriorityProps = useMemo(() => {
    return {
      1: "low",
      2: "medium",
      3: "high",
    };
  }, []);

  const { tasks } = useTask();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Status</th>
            <th>Nome da atividade</th>
            <th>Criada em</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => {
              return (
                <tr>
                  <td>
                    <Priority priority={priority[task.priority]} />
                  </td>
                  <td>{task.done ? "Finalizado" : "Pendente"}</td>
                  <td>{task.title}</td>
                  <td>{formatDate(task.schedule)}</td>
                  <td>
                    <button>
                      <FaCheck
                        size={18}
                        color={!task.done ? "#969CB3" : "#63e6be"}
                      />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
};
