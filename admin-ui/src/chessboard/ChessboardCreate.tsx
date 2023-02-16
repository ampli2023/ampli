import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ChessboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Level" source="level" />
        <NumberInput step={1} label="Size" source="size" />
      </SimpleForm>
    </Create>
  );
};
