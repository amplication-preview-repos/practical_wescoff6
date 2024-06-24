import { Employee } from "../employee/Employee";
import { JsonValue } from "type-fest";

export type Workforce = {
  budget: number | null;
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  schedule: JsonValue;
  updatedAt: Date;
};
