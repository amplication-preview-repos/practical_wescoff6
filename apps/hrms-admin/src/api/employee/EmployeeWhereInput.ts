import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { BenefitListRelationFilter } from "../benefit/BenefitListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveListRelationFilter } from "../leave/LeaveListRelationFilter";
import { PayrollListRelationFilter } from "../payroll/PayrollListRelationFilter";
import { PerformanceListRelationFilter } from "../performance/PerformanceListRelationFilter";
import { SelfServiceListRelationFilter } from "../selfService/SelfServiceListRelationFilter";
import { TalentListRelationFilter } from "../talent/TalentListRelationFilter";
import { WorkforceListRelationFilter } from "../workforce/WorkforceListRelationFilter";

export type EmployeeWhereInput = {
  attendances?: AttendanceListRelationFilter;
  benefits?: BenefitListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  hireDate?: DateTimeNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaves?: LeaveListRelationFilter;
  payrolls?: PayrollListRelationFilter;
  performances?: PerformanceListRelationFilter;
  phone?: StringNullableFilter;
  selfServices?: SelfServiceListRelationFilter;
  talents?: TalentListRelationFilter;
  workforces?: WorkforceListRelationFilter;
};
