import { GeneralLedger as TGeneralLedger } from "../api/generalLedger/GeneralLedger";

export const GENERALLEDGER_TITLE_FIELD = "accountName";

export const GeneralLedgerTitle = (record: TGeneralLedger): string => {
  return record.accountName?.toString() || String(record.id);
};
