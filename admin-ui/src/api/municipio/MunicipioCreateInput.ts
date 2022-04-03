import { ProvinciaWhereUniqueInput } from "../provincia/ProvinciaWhereUniqueInput";

export type MunicipioCreateInput = {
  idProvincia: ProvinciaWhereUniqueInput;
  nombre?: string | null;
};
