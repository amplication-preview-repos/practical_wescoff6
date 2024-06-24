import { TaxWhereInput } from "./TaxWhereInput";
import { TaxOrderByInput } from "./TaxOrderByInput";

export type TaxFindManyArgs = {
  where?: TaxWhereInput;
  orderBy?: Array<TaxOrderByInput>;
  skip?: number;
  take?: number;
};
