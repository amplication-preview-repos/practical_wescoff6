import { ComplianceWhereInput } from "./ComplianceWhereInput";
import { ComplianceOrderByInput } from "./ComplianceOrderByInput";

export type ComplianceFindManyArgs = {
  where?: ComplianceWhereInput;
  orderBy?: Array<ComplianceOrderByInput>;
  skip?: number;
  take?: number;
};
