import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ComplianceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="complianceDate" source="complianceDate" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="standardName" source="standardName" />
      </SimpleForm>
    </Create>
  );
};
