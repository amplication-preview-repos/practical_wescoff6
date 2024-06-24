import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const FinancialReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="details" multiline source="details" />
        <DateTimeInput label="period" source="period" />
        <TextInput label="reportName" source="reportName" />
      </SimpleForm>
    </Edit>
  );
};
