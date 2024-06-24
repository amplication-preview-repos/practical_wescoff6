import { AccountsPayableWhereInput } from "./AccountsPayableWhereInput";
import { AccountsPayableOrderByInput } from "./AccountsPayableOrderByInput";

export type AccountsPayableFindManyArgs = {
  where?: AccountsPayableWhereInput;
  orderBy?: Array<AccountsPayableOrderByInput>;
  skip?: number;
  take?: number;
};
