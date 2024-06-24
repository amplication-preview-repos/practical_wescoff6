import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GeneralLedgerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="accountName" source="accountName" />
        <NumberInput label="balance" source="balance" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
