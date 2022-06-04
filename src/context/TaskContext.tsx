import React, { createContext, ReactNode, useState } from "react";
import { Task } from "../types/task";

type TaskRequest = Omit<Task, "id">;

interface TaskContextProps {
  tasks: Task[];
  createTask: (task: TaskRequest) => Promise<void>;
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
