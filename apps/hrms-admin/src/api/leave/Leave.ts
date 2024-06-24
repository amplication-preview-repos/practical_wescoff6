import { Employee } from "../employee/Employee";

export type Leave = {
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  leaveType?: "Option1" | null;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
