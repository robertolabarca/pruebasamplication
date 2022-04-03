import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProvinciaResolverBase } from "./base/provincia.resolver.base";
import { Provincia } from "./base/Provincia";
import { ProvinciaService } from "./provincia.service";

@graphql.Resolver(() => Provincia)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProvinciaResolver extends ProvinciaResolverBase {
  constructor(
    protected readonly service: ProvinciaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
