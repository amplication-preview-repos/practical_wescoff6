import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  createdAt?: SortOrder;
  department?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
