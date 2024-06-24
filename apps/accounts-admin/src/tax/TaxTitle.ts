import { Tax as TTax } from "../api/tax/Tax";

export const TAX_TITLE_FIELD = "taxName";

export const TaxTitle = (record: TTax): string => {
  return record.taxName?.toString() || String(record.id);
};
