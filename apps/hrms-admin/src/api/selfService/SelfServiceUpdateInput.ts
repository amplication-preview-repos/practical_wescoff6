import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type SelfServiceUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  functionality?: string | null;
};
