import { Module } from "@nestjs/common";
import { MunicipioModuleBase } from "./base/municipio.module.base";
import { MunicipioService } from "./municipio.service";
import { MunicipioController } from "./municipio.controller";
import { MunicipioResolver } from "./municipio.resolver";

@Module({
  imports: [MunicipioModuleBase],
  controllers: [MunicipioController],
  providers: [MunicipioService, MunicipioResolver],
  exports: [MunicipioService],
})
export class MunicipioModule {}
