import { AccountsReceivable as TAccountsReceivable } from "../api/accountsReceivable/AccountsReceivable";

export const ACCOUNTSRECEIVABLE_TITLE_FIELD = "customerId";

export const AccountsReceivableTitle = (
  record: TAccountsReceivable
): string => {
  return record.customerId?.toString() || String(record.id);
};
