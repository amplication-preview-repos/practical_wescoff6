import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  leaveType?: "Option1" | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
