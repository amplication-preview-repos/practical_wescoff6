import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TalentUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  goal?: string | null;
  position?: string | null;
  potential?: "Option1" | null;
};
