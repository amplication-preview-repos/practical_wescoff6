import { SortOrder } from "../../util/SortOrder";

export type BenefitOrderByInput = {
  benefitType?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
