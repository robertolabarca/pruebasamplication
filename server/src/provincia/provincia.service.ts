import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProvinciaServiceBase } from "./base/provincia.service.base";

@Injectable()
export class ProvinciaService extends ProvinciaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
