import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinancialReportService } from "./financialReport.service";
import { FinancialReportControllerBase } from "./base/financialReport.controller.base";

@swagger.ApiTags("financialReports")
@common.Controller("financialReports")
export class FinancialReportController extends FinancialReportControllerBase {
  constructor(protected readonly service: FinancialReportService) {
    super(service);
  }
}
