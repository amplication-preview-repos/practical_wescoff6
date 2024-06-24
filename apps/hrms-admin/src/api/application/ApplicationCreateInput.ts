import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";

export type ApplicationCreateInput = {
  applicantName?: string | null;
  email?: string | null;
  job?: JobWhereUniqueInput | null;
  status?: "Option1" | null;
};
