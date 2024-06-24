import { AttendanceCreateNestedManyWithoutEmployeesInput } from "./AttendanceCreateNestedManyWithoutEmployeesInput";
import { BenefitCreateNestedManyWithoutEmployeesInput } from "./BenefitCreateNestedManyWithoutEmployeesInput";
import { LeaveCreateNestedManyWithoutEmployeesInput } from "./LeaveCreateNestedManyWithoutEmployeesInput";
import { PayrollCreateNestedManyWithoutEmployeesInput } from "./PayrollCreateNestedManyWithoutEmployeesInput";
import { PerformanceCreateNestedManyWithoutEmployeesInput } from "./PerformanceCreateNestedManyWithoutEmployeesInput";
import { SelfServiceCreateNestedManyWithoutEmployeesInput } from "./SelfServiceCreateNestedManyWithoutEmployeesInput";
import { TalentCreateNestedManyWithoutEmployeesInput } from "./TalentCreateNestedManyWithoutEmployeesInput";
import { WorkforceCreateNestedManyWithoutEmployeesInput } from "./WorkforceCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutEmployeesInput;
  benefits?: BenefitCreateNestedManyWithoutEmployeesInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
  leaves?: LeaveCreateNestedManyWithoutEmployeesInput;
  payrolls?: PayrollCreateNestedManyWithoutEmployeesInput;
  performances?: PerformanceCreateNestedManyWithoutEmployeesInput;
  phone?: string | null;
  selfServices?: SelfServiceCreateNestedManyWithoutEmployeesInput;
  talents?: TalentCreateNestedManyWithoutEmployeesInput;
  workforces?: WorkforceCreateNestedManyWithoutEmployeesInput;
};
