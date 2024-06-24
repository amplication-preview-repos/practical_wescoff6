import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TaxCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="taxName" source="taxName" />
      </SimpleForm>
    </Create>
  );
};
