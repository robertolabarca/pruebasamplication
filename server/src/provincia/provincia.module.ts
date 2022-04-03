import { Module } from "@nestjs/common";
import { ProvinciaModuleBase } from "./base/provincia.module.base";
import { ProvinciaService } from "./provincia.service";
import { ProvinciaController } from "./provincia.controller";
import { ProvinciaResolver } from "./provincia.resolver";

@Module({
  imports: [ProvinciaModuleBase],
  controllers: [ProvinciaController],
  providers: [ProvinciaService, ProvinciaResolver],
  exports: [ProvinciaService],
})
export class ProvinciaModule {}
