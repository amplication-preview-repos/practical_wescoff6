import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TaxServiceBase } from "./base/tax.service.base";

@Injectable()
export class TaxService extends TaxServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
