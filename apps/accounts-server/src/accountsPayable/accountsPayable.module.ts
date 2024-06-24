import { Module } from "@nestjs/common";
import { AccountsPayableModuleBase } from "./base/accountsPayable.module.base";
import { AccountsPayableService } from "./accountsPayable.service";
import { AccountsPayableController } from "./accountsPayable.controller";
import { AccountsPayableResolver } from "./accountsPayable.resolver";

@Module({
  imports: [AccountsPayableModuleBase],
  controllers: [AccountsPayableController],
  providers: [AccountsPayableService, AccountsPayableResolver],
  exports: [AccountsPayableService],
})
export class AccountsPayableModule {}
