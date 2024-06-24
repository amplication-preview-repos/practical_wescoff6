import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ComplianceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="complianceDate" source="complianceDate" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="standardName" source="standardName" />
      </SimpleForm>
    </Edit>
  );
};
