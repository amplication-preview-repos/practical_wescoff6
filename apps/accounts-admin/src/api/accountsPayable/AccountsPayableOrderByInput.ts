import { SortOrder } from "../../util/SortOrder";

export type AccountsPayableOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  vendorId?: SortOrder;
};
