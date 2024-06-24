import { Employee } from "../employee/Employee";

export type Benefit = {
  benefitType?: "Option1" | null;
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  updatedAt: Date;
};
