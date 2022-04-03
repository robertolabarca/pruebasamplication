import { Municipio as TMunicipio } from "../api/municipio/Municipio";

export const MUNICIPIO_TITLE_FIELD = "nombre";

export const MunicipioTitle = (record: TMunicipio): string => {
  return record.nombre || record.id;
};
