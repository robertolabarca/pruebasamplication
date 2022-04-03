import { StringFilter } from "../../util/StringFilter";
import { MunicipioListRelationFilter } from "../municipio/MunicipioListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProvinciaWhereInput = {
  id?: StringFilter;
  municipios?: MunicipioListRelationFilter;
  nombre?: StringNullableFilter;
};
