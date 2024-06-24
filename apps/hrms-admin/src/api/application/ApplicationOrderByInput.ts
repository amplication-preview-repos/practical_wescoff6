import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicantName?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  jobId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
