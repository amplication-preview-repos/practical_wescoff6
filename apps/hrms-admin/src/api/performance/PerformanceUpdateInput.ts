import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type PerformanceUpdateInput = {
  comments?: string | null;
  employee?: EmployeeWhereUniqueInput | null;
  reviewDate?: Date | null;
  score?: number | null;
};
