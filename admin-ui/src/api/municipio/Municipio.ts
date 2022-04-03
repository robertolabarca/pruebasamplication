import { Provincia } from "../provincia/Provincia";

export type Municipio = {
  createdAt: Date;
  id: string;
  idProvincia?: Provincia;
  nombre: string | null;
  updatedAt: Date;
};
