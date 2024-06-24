import { TalentWhereInput } from "./TalentWhereInput";
import { TalentOrderByInput } from "./TalentOrderByInput";

export type TalentFindManyArgs = {
  where?: TalentWhereInput;
  orderBy?: Array<TalentOrderByInput>;
  skip?: number;
  take?: number;
};
