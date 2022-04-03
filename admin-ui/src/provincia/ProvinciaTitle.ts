import { Provincia as TProvincia } from "../api/provincia/Provincia";

export const PROVINCIA_TITLE_FIELD = "nombre";

export const ProvinciaTitle = (record: TProvincia): string => {
  return record.nombre || record.id;
};
