import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MunicipioService } from "./municipio.service";
import { MunicipioControllerBase } from "./base/municipio.controller.base";

@swagger.ApiTags("municipios")
@common.Controller("municipios")
export class MunicipioController extends MunicipioControllerBase {
  constructor(
    protected readonly service: MunicipioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
