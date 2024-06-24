import { SelfServiceWhereInput } from "./SelfServiceWhereInput";
import { SelfServiceOrderByInput } from "./SelfServiceOrderByInput";

export type SelfServiceFindManyArgs = {
  where?: SelfServiceWhereInput;
  orderBy?: Array<SelfServiceOrderByInput>;
  skip?: number;
  take?: number;
};
