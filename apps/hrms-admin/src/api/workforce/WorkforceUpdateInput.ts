import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type WorkforceUpdateInput = {
  budget?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  schedule?: InputJsonValue;
};
