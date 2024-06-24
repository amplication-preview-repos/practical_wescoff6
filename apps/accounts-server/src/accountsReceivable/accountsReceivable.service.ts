import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountsReceivableServiceBase } from "./base/accountsReceivable.service.base";

@Injectable()
export class AccountsReceivableService extends AccountsReceivableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
