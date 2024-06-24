import { Module } from "@nestjs/common";
import { ComplianceModuleBase } from "./base/compliance.module.base";
import { ComplianceService } from "./compliance.service";
import { ComplianceController } from "./compliance.controller";
import { ComplianceResolver } from "./compliance.resolver";

@Module({
  imports: [ComplianceModuleBase],
  controllers: [ComplianceController],
  providers: [ComplianceService, ComplianceResolver],
  exports: [ComplianceService],
})
export class ComplianceModule {}
