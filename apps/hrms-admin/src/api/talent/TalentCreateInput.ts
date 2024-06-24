import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type TalentCreateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  goal?: string | null;
  position?: string | null;
  potential?: "Option1" | null;
};
