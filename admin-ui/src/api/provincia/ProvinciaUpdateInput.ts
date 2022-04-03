import { MunicipioUpdateManyWithoutProvinciasInput } from "./MunicipioUpdateManyWithoutProvinciasInput";

export type ProvinciaUpdateInput = {
  municipios?: MunicipioUpdateManyWithoutProvinciasInput;
  nombre?: string | null;
};
