import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FixedAssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="assetName" source="assetName" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
