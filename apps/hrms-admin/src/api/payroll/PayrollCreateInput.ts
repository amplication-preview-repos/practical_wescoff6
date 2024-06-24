import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollCreateInput = {
  amount?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  payDate?: Date | null;
  status?: "Option1" | null;
};
