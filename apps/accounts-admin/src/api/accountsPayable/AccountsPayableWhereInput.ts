import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AccountsPayableWhereInput = {
  amount?: FloatNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  vendorId?: StringNullableFilter;
};
