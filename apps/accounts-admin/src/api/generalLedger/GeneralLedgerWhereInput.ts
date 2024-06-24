import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GeneralLedgerWhereInput = {
  accountName?: StringNullableFilter;
  balance?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
