import { Job } from "../job/Job";

export type Application = {
  applicantName: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  job?: Job | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
