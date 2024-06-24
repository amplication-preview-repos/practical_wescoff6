import { Benefit as TBenefit } from "../api/benefit/Benefit";

export const BENEFIT_TITLE_FIELD = "id";

export const BenefitTitle = (record: TBenefit): string => {
  return record.id?.toString() || String(record.id);
};
