import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PROVINCIA_TITLE_FIELD } from "../provincia/ProvinciaTitle";

export const MunicipioShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
