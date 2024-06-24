import { Module } from "@nestjs/common";
import { GeneralLedgerModuleBase } from "./base/generalLedger.module.base";
import { GeneralLedgerService } from "./generalLedger.service";
import { GeneralLedgerController } from "./generalLedger.controller";
import { GeneralLedgerResolver } from "./generalLedger.resolver";

@Module({
  imports: [GeneralLedgerModuleBase],
  controllers: [GeneralLedgerController],
  providers: [GeneralLedgerService, GeneralLedgerResolver],
  exports: [GeneralLedgerService],
})
export class GeneralLedgerModule {}
