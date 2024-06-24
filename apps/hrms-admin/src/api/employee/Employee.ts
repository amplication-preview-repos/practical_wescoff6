import { Attendance } from "../attendance/Attendance";
import { Benefit } from "../benefit/Benefit";
import { Leave } from "../leave/Leave";
import { Payroll } from "../payroll/Payroll";
import { Performance } from "../performance/Performance";
import { SelfService } from "../selfService/SelfService";
import { Talent } from "../talent/Talent";
import { Workforce } from "../workforce/Workforce";

export type Employee = {
  attendances?: Array<Attendance>;
  benefits?: Array<Benefit>;
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  hireDate: Date | null;
  id: string;
  lastName: string | null;
  leaves?: Array<Leave>;
  payrolls?: Array<Payroll>;
  performances?: Array<Performance>;
  phone: string | null;
  selfServices?: Array<SelfService>;
  talents?: Array<Talent>;
  updatedAt: Date;
  workforces?: Array<Workforce>;
};
