import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AttendanceWhereInput = {
  checkInTime?: DateTimeNullableFilter;
  checkOutTime?: DateTimeNullableFilter;
  date?: DateTimeNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
};
