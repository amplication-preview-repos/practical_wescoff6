import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AttendanceCreateInput = {
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  date?: Date | null;
  employee?: EmployeeWhereUniqueInput | null;
};
