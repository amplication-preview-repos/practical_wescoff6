import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkforceServiceBase } from "./base/workforce.service.base";

@Injectable()
export class WorkforceService extends WorkforceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
