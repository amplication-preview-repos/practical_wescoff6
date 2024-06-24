import { AttendanceUpdateManyWithoutEmployeesInput } from "./AttendanceUpdateManyWithoutEmployeesInput";
import { BenefitUpdateManyWithoutEmployeesInput } from "./BenefitUpdateManyWithoutEmployeesInput";
import { LeaveUpdateManyWithoutEmployeesInput } from "./LeaveUpdateManyWithoutEmployeesInput";
import { PayrollUpdateManyWithoutEmployeesInput } from "./PayrollUpdateManyWithoutEmployeesInput";
import { PerformanceUpdateManyWithoutEmployeesInput } from "./PerformanceUpdateManyWithoutEmployeesInput";
import { SelfServiceUpdateManyWithoutEmployeesInput } from "./SelfServiceUpdateManyWithoutEmployeesInput";
import { TalentUpdateManyWithoutEmployeesInput } from "./TalentUpdateManyWithoutEmployeesInput";
import { WorkforceUpdateManyWithoutEmployeesInput } from "./WorkforceUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutEmployeesInput;
  benefits?: BenefitUpdateManyWithoutEmployeesInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  hireDate?: Date | null;
  lastName?: string | null;
  leaves?: LeaveUpdateManyWithoutEmployeesInput;
  payrolls?: PayrollUpdateManyWithoutEmployeesInput;
  performances?: PerformanceUpdateManyWithoutEmployeesInput;
  phone?: string | null;
  selfServices?: SelfServiceUpdateManyWithoutEmployeesInput;
  talents?: TalentUpdateManyWithoutEmployeesInput;
  workforces?: WorkforceUpdateManyWithoutEmployeesInput;
};
