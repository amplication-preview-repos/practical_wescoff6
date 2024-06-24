import { BenefitWhereInput } from "./BenefitWhereInput";
import { BenefitOrderByInput } from "./BenefitOrderByInput";

export type BenefitFindManyArgs = {
  where?: BenefitWhereInput;
  orderBy?: Array<BenefitOrderByInput>;
  skip?: number;
  take?: number;
};
