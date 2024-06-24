import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const FinancialReportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="details" multiline source="details" />
        <DateTimeInput label="period" source="period" />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Create>
  );
};
