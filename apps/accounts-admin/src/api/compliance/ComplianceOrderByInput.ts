import { SortOrder } from "../../util/SortOrder";

export type ComplianceOrderByInput = {
  complianceDate?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  standardName?: SortOrder;
  updatedAt?: SortOrder;
};
