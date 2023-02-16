import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
