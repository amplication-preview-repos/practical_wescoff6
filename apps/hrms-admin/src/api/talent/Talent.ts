import { Employee } from "../employee/Employee";

export type Talent = {
  createdAt: Date;
  employee?: Employee | null;
  goal: string | null;
  id: string;
  position: string | null;
  potential?: "Option1" | null;
  updatedAt: Date;
};
