import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MunicipioResolverBase } from "./base/municipio.resolver.base";
import { Municipio } from "./base/Municipio";
import { MunicipioService } from "./municipio.service";

@graphql.Resolver(() => Municipio)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MunicipioResolver extends MunicipioResolverBase {
  constructor(
    protected readonly service: MunicipioService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
