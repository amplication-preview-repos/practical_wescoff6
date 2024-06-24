import { SortOrder } from "../../util/SortOrder";

export type TaxOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  rate?: SortOrder;
  taxName?: SortOrder;
  updatedAt?: SortOrder;
};
