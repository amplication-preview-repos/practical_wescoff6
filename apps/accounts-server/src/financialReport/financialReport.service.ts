import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialReportServiceBase } from "./base/financialReport.service.base";

@Injectable()
export class FinancialReportService extends FinancialReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
