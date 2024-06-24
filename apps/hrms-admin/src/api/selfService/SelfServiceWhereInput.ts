import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SelfServiceWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  functionality?: StringNullableFilter;
  id?: StringFilter;
};
