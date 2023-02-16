import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ChessboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Level" source="level" />
        <NumberInput step={1} label="Size" source="size" />
      </SimpleForm>
    </Edit>
  );
};
