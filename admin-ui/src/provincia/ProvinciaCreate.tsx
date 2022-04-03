import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProvinciaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Nombre" source="nombre" />
      </SimpleForm>
    </Create>
  );
};
