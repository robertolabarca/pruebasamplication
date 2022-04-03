import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ProvinciaTitle } from "../provincia/ProvinciaTitle";

export const MunicipioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="provincia.id"
          reference="Provincia"
          label="IDProvincia"
        >
          <SelectInput optionText={ProvinciaTitle} />
        </ReferenceInput>
        <TextInput label="Nombre" source="nombre" />
      </SimpleForm>
    </Create>
  );
};
