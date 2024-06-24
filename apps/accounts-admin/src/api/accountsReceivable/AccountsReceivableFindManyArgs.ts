import { AccountsReceivableWhereInput } from "./AccountsReceivableWhereInput";
import { AccountsReceivableOrderByInput } from "./AccountsReceivableOrderByInput";

export type AccountsReceivableFindManyArgs = {
  where?: AccountsReceivableWhereInput;
  orderBy?: Array<AccountsReceivableOrderByInput>;
  skip?: number;
  take?: number;
};
