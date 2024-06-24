import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  checkInTime?: SortOrder;
  checkOutTime?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
