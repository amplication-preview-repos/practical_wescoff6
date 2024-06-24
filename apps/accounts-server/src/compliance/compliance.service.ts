import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplianceServiceBase } from "./base/compliance.service.base";

@Injectable()
export class ComplianceService extends ComplianceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
