import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type WorkforceCreateInput = {
  budget?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  schedule?: InputJsonValue;
};
