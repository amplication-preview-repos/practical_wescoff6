import { GeneralLedgerWhereInput } from "./GeneralLedgerWhereInput";
import { GeneralLedgerOrderByInput } from "./GeneralLedgerOrderByInput";

export type GeneralLedgerFindManyArgs = {
  where?: GeneralLedgerWhereInput;
  orderBy?: Array<GeneralLedgerOrderByInput>;
  skip?: number;
  take?: number;
};
