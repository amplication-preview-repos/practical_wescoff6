import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationWhereInput = {
  applicantName?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  status?: "Option1";
};
