import { Application } from "../application/Application";

export type Job = {
  applications?: Array<Application>;
  createdAt: Date;
  department: string | null;
  description: string | null;
  id: string;
  location: string | null;
  title: string | null;
  updatedAt: Date;
};
