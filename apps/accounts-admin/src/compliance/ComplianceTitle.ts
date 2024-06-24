import { Compliance as TCompliance } from "../api/compliance/Compliance";

export const COMPLIANCE_TITLE_FIELD = "standardName";

export const ComplianceTitle = (record: TCompliance): string => {
  return record.standardName?.toString() || String(record.id);
};
