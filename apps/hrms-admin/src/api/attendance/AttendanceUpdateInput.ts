import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AttendanceUpdateInput = {
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
