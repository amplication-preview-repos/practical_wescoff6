import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ComplianceWhereInput = {
  complianceDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  standardName?: StringNullableFilter;
};
