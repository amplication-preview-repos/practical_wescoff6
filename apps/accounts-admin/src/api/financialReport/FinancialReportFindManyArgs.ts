import { FinancialReportWhereInput } from "./FinancialReportWhereInput";
import { FinancialReportOrderByInput } from "./FinancialReportOrderByInput";

export type FinancialReportFindManyArgs = {
  where?: FinancialReportWhereInput;
  orderBy?: Array<FinancialReportOrderByInput>;
  skip?: number;
  take?: number;
};
