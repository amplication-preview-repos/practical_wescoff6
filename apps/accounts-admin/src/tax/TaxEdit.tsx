import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const TaxEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="taxName" source="taxName" />
      </SimpleForm>
    </Edit>
  );
};
