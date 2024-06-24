import { SortOrder } from "../../util/SortOrder";

export type PerformanceOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  reviewDate?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
