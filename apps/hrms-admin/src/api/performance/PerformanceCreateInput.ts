import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PerformanceCreateInput = {
  comments?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  reviewDate?: Date | null;
  score?: number | null;
};
