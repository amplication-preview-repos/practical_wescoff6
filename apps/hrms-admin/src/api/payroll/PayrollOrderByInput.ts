import { SortOrder } from "../../util/SortOrder";

export type PayrollOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  payDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
