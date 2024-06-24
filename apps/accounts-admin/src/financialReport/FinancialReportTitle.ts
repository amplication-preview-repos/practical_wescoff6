import { FinancialReport as TFinancialReport } from "../api/financialReport/FinancialReport";

export const FINANCIALREPORT_TITLE_FIELD = "reportName";

export const FinancialReportTitle = (record: TFinancialReport): string => {
  return record.reportName?.toString() || String(record.id);
};
