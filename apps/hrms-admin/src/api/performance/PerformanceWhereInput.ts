import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PerformanceWhereInput = {
  comments?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  reviewDate?: DateTimeNullableFilter;
  score?: FloatNullableFilter;
};
