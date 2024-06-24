import { Employee } from "../employee/Employee";

export type Performance = {
  comments: string | null;
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  reviewDate: Date | null;
  score: number | null;
  updatedAt: Date;
};
