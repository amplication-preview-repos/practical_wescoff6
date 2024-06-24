import { Talent as TTalent } from "../api/talent/Talent";

export const TALENT_TITLE_FIELD = "position";

export const TalentTitle = (record: TTalent): string => {
  return record.position?.toString() || String(record.id);
};
