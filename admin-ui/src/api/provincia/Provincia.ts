import { Municipio } from "../municipio/Municipio";

export type Provincia = {
  createdAt: Date;
  id: string;
  municipios?: Array<Municipio>;
  nombre: string | null;
  updatedAt: Date;
};
