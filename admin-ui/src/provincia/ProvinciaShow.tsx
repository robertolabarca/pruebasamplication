import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROVINCIA_TITLE_FIELD } from "./ProvinciaTitle";

export const ProvinciaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre" source="nombre" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Municipio"
          target="ProvinciaId"
          label="Municipios"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="IDProvincia"
              source="provincia.id"
              reference="Provincia"
            >
              <TextField source={PROVINCIA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Nombre" source="nombre" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
