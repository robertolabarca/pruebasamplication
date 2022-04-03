import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { MunicipioTitle } from "../municipio/MunicipioTitle";

export const ProvinciaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="municipios"
          reference="Municipio"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MunicipioTitle} />
        </ReferenceArrayInput>
        <TextInput label="Nombre" source="nombre" />
      </SimpleForm>
    </Edit>
  );
};
