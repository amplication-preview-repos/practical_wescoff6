import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type WorkforceWhereInput = {
  budget?: FloatNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  schedule?: JsonFilter;
};
