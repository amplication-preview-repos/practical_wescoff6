import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneralLedgerServiceBase } from "./base/generalLedger.service.base";

@Injectable()
export class GeneralLedgerService extends GeneralLedgerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
