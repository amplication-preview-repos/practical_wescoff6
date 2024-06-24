import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FixedAssetWhereInput = {
  assetName?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  value?: FloatNullableFilter;
};
