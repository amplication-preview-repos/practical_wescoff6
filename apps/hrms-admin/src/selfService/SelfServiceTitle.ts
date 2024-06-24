import { SelfService as TSelfService } from "../api/selfService/SelfService";

export const SELFSERVICE_TITLE_FIELD = "id";

export const SelfServiceTitle = (record: TSelfService): string => {
  return record.id?.toString() || String(record.id);
};
