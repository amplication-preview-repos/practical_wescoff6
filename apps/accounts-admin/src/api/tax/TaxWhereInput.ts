import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TaxWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  rate?: FloatNullableFilter;
  taxName?: StringNullableFilter;
};
