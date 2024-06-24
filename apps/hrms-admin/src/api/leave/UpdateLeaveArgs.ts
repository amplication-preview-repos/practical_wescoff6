import { LeaveWhereUniqueInput } from "./LeaveWhereUniqueInput";
import { LeaveUpdateInput } from "./LeaveUpdateInput";

export type UpdateLeaveArgs = {
  where: LeaveWhereUniqueInput;
  data: LeaveUpdateInput;
};
