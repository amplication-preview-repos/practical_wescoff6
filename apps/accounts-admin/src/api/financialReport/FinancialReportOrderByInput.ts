import { SortOrder } from "../../util/SortOrder";

export type FinancialReportOrderByInput = {
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  period?: SortOrder;
  reportName?: SortOrder;
  updatedAt?: SortOrder;
};
