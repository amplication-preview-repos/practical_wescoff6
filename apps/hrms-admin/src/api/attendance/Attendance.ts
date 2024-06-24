import { Employee } from "../employee/Employee";

export type Attendance = {
  checkInTime: Date | null;
  checkOutTime: Date | null;
  createdAt: Date;
  date: Date | null;
  employee?: Employee | null;
  id: string;
  updatedAt: Date;
};
