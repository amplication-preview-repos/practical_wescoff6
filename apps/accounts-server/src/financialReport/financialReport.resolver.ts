import * as graphql from "@nestjs/graphql";
import { FinancialReportResolverBase } from "./base/financialReport.resolver.base";
import { FinancialReport } from "./base/FinancialReport";
import { FinancialReportService } from "./financialReport.service";

@graphql.Resolver(() => FinancialReport)
export class FinancialReportResolver extends FinancialReportResolverBase {
  constructor(protected readonly service: FinancialReportService) {
    super(service);
  }
}
