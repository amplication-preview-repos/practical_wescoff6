import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GeneralLedgerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="accountName" source="accountName" />
        <NumberInput label="balance" source="balance" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
