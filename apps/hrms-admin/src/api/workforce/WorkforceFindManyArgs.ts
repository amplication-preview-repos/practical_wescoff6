import { WorkforceWhereInput } from "./WorkforceWhereInput";
import { WorkforceOrderByInput } from "./WorkforceOrderByInput";

export type WorkforceFindManyArgs = {
  where?: WorkforceWhereInput;
  orderBy?: Array<WorkforceOrderByInput>;
  skip?: number;
  take?: number;
};
