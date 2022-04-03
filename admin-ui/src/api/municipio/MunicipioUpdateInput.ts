import { ProvinciaWhereUniqueInput } from "../provincia/ProvinciaWhereUniqueInput";

export type MunicipioUpdateInput = {
  idProvincia?: ProvinciaWhereUniqueInput;
  nombre?: string | null;
};
