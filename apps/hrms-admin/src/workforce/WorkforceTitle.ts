import { Workforce as TWorkforce } from "../api/workforce/Workforce";

export const WORKFORCE_TITLE_FIELD = "id";

export const WorkforceTitle = (record: TWorkforce): string => {
  return record.id?.toString() || String(record.id);
};
