import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "description";

export const TaskTitle = (record: TTask): string => {
  return record.description || String(record.id);
};
