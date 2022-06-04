import React, { createContext, ReactNode, useState } from "react";
import { Task } from "../types/task";

type TaskRequest = Omit<Task, "id">;

interface TaskContextProps {
  tasks: Task[];
  createTask: (task: TaskRequest) => Promise<void>;
  toggleTaskDoneStatus: (id: number) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = async (task: TaskRequest) => {
    setTasks((currentTasks) => {
      const id = Math.random();

      return [...currentTasks, { id, ...task }];
    });
  };

  const toggleTaskDoneStatus = (id: number) => {
    const task = tasks.find((taskItem) => taskItem.id === id);

    if (!task) return;

    const taskUpdated = { ...task, done: !task.done };

    setTasks((currentTasks) => {
      const tasksFiltered = currentTasks.filter(
        (taskItem) => taskItem.id !== id
      );

      return [...tasksFiltered, taskUpdated];
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        toggleTaskDoneStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
