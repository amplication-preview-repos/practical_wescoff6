import { Employee } from "../employee/Employee";

export type SelfService = {
  createdAt: Date;
  employee?: Employee | null;
  functionality: string | null;
  id: string;
  updatedAt: Date;
};
