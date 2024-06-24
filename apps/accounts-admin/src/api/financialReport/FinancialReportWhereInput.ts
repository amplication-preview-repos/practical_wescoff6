import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FinancialReportWhereInput = {
  details?: StringNullableFilter;
  id?: StringFilter;
  period?: DateTimeNullableFilter;
  reportName?: StringNullableFilter;
};
