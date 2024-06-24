import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { BenefitTitle } from "../benefit/BenefitTitle";
import { LeaveTitle } from "../leave/LeaveTitle";
import { PayrollTitle } from "../payroll/PayrollTitle";
import { PerformanceTitle } from "../performance/PerformanceTitle";
import { SelfServiceTitle } from "../selfService/SelfServiceTitle";
import { TalentTitle } from "../talent/TalentTitle";
import { WorkforceTitle } from "../workforce/WorkforceTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="benefits"
          reference="Benefit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BenefitTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <DateTimeInput label="hireDate" source="hireDate" />
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="leaves"
          reference="Leave"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="payrolls"
          reference="Payroll"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayrollTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="performances"
          reference="Performance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PerformanceTitle} />
        </ReferenceArrayInput>
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="selfServices"
          reference="SelfService"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SelfServiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="talents"
          reference="Talent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TalentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workforces"
          reference="Workforce"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkforceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
