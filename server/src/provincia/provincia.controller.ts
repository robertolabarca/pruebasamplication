import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProvinciaService } from "./provincia.service";
import { ProvinciaControllerBase } from "./base/provincia.controller.base";

@swagger.ApiTags("provincias")
@common.Controller("provincias")
export class ProvinciaController extends ProvinciaControllerBase {
  constructor(
    protected readonly service: ProvinciaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
