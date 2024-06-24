import { Module } from "@nestjs/common";
import { FinancialReportModuleBase } from "./base/financialReport.module.base";
import { FinancialReportService } from "./financialReport.service";
import { FinancialReportController } from "./financialReport.controller";
import { FinancialReportResolver } from "./financialReport.resolver";

@Module({
  imports: [FinancialReportModuleBase],
  controllers: [FinancialReportController],
  providers: [FinancialReportService, FinancialReportResolver],
  exports: [FinancialReportService],
})
export class FinancialReportModule {}
