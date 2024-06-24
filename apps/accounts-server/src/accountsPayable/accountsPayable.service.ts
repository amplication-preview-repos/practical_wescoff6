import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountsPayableServiceBase } from "./base/accountsPayable.service.base";

@Injectable()
export class AccountsPayableService extends AccountsPayableServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
