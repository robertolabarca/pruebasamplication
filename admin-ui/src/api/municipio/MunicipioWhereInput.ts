import { StringFilter } from "../../util/StringFilter";
import { ProvinciaWhereUniqueInput } from "../provincia/ProvinciaWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MunicipioWhereInput = {
  id?: StringFilter;
  idProvincia?: ProvinciaWhereUniqueInput;
  nombre?: StringNullableFilter;
};
