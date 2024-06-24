import { Module } from "@nestjs/common";
import { PayrollModuleBase } from "./base/payroll.module.base";
import { PayrollService } from "./payroll.service";
import { PayrollController } from "./payroll.controller";
import { PayrollResolver } from "./payroll.resolver";

@Module({
  imports: [PayrollModuleBase],
  controllers: [PayrollController],
  providers: [PayrollService, PayrollResolver],
  exports: [PayrollService],
})
export class PayrollModule {}
