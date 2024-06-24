import { Module } from "@nestjs/common";
import { AccountsReceivableModuleBase } from "./base/accountsReceivable.module.base";
import { AccountsReceivableService } from "./accountsReceivable.service";
import { AccountsReceivableController } from "./accountsReceivable.controller";
import { AccountsReceivableResolver } from "./accountsReceivable.resolver";

@Module({
  imports: [AccountsReceivableModuleBase],
  controllers: [AccountsReceivableController],
  providers: [AccountsReceivableService, AccountsReceivableResolver],
  exports: [AccountsReceivableService],
})
export class AccountsReceivableModule {}
