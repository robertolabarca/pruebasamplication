import { MunicipioCreateNestedManyWithoutProvinciasInput } from "./MunicipioCreateNestedManyWithoutProvinciasInput";

export type ProvinciaCreateInput = {
  municipios?: MunicipioCreateNestedManyWithoutProvinciasInput;
  nombre?: string | null;
};
