import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FixedAssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="assetName" source="assetName" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
