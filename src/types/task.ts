enum Priority {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  priority: Priority;
  schedule: Date;
  doneAt?: Date;
  done: boolean;
}
