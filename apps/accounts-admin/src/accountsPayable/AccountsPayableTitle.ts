import { AccountsPayable as TAccountsPayable } from "../api/accountsPayable/AccountsPayable";

export const ACCOUNTSPAYABLE_TITLE_FIELD = "vendorId";

export const AccountsPayableTitle = (record: TAccountsPayable): string => {
  return record.vendorId?.toString() || String(record.id);
};
