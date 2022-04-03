import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROVINCIA_TITLE_FIELD } from "../provincia/ProvinciaTitle";

export const MunicipioList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Municipios"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
