import { SortOrder } from "../../util/SortOrder";

export type BudgetOrderByInput = {
  amount?: SortOrder;
  budgetName?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
