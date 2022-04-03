import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ProvinciaTitle } from "../provincia/ProvinciaTitle";

export const MunicipioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
