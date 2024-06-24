import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type SelfServiceCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  functionality?: string | null;
};
