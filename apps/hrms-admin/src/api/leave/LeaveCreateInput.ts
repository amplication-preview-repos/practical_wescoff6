import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type LeaveCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  leaveType?: "Option1" | null;
  startDate?: Date | null;
  status?: "Option1" | null;
};
