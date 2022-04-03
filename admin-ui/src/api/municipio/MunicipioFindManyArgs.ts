import { MunicipioWhereInput } from "./MunicipioWhereInput";
import { MunicipioOrderByInput } from "./MunicipioOrderByInput";

export type MunicipioFindManyArgs = {
  where?: MunicipioWhereInput;
  orderBy?: Array<MunicipioOrderByInput>;
  skip?: number;
  take?: number;
};
