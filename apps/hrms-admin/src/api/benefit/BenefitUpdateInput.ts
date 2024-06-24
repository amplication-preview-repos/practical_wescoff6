import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type BenefitUpdateInput = {
  benefitType?: "Option1" | null;
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
};
