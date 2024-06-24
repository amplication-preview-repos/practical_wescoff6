import { SortOrder } from "../../util/SortOrder";

export type GeneralLedgerOrderByInput = {
  accountName?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
