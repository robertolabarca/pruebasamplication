import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MunicipioServiceBase } from "./base/municipio.service.base";

@Injectable()
export class MunicipioService extends MunicipioServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
