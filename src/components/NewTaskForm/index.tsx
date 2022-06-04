import React, { FormEvent, useState } from "react";
import { Task } from "../../types/task";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Container } from "./styles";

type TaskData = Omit<Task, "id">;

interface NewTaskFormProps {
  onCloseNewTaskModal: () => void;
}

export const NewTaskForm: React.FC<NewTaskFormProps> = ({
  onCloseNewTaskModal,
}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("1");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleChangeTaskDescription = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskDescription(e.target.value);
  };

  const handleChangeTaskPriority = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTaskPriority(e.target.value);
  };

  const handleNewTaskSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (taskTitle == "") return;

    const task: TaskData = {
      title: taskTitle,
      description: taskDescription,
      priority: Number(taskPriority),
      schedule: new Date(),
      done: false,
    };

    console.log("New task", task);
    cleanUpForm();
    onCloseNewTaskModal();
  };

  const cleanUpForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskPriority("1");
  };

  return (
    <Container onSubmit={handleNewTaskSubmit}>
      <h2>Criar uma nova atividade</h2>
      <Input
        type="text"
        placeholder="Título da atividade"
        value={taskTitle}
        onChange={handleChangeTitle}
      />
      <Input
        type="text"
        placeholder="Descrição da atividade"
        value={taskDescription}
        onChange={handleChangeTaskDescription}
      />
      <select value={taskPriority} onChange={handleChangeTaskPriority}>
        <option value="1">Baixa</option>
        <option value="2">Média</option>
        <option value="3">Alta</option>
      </select>
      <Button buttonText="Criar" type="submit" />
    </Container>
  );
};
