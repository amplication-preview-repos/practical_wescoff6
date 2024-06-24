import { Module } from "@nestjs/common";
import { TaxModuleBase } from "./base/tax.module.base";
import { TaxService } from "./tax.service";
import { TaxController } from "./tax.controller";
import { TaxResolver } from "./tax.resolver";

@Module({
  imports: [TaxModuleBase],
  controllers: [TaxController],
  providers: [TaxService, TaxResolver],
  exports: [TaxService],
})
export class TaxModule {}
