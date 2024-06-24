import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PayrollUpdateInput = {
  amount?: number | null;
  employee?: EmployeeWhereUniqueInput | null;
  payDate?: Date | null;
  status?: "Option1" | null;
};
