import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TalentWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  goal?: StringNullableFilter;
  id?: StringFilter;
  position?: StringNullableFilter;
  potential?: "Option1";
};
