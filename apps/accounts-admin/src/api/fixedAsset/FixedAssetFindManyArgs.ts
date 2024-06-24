import { FixedAssetWhereInput } from "./FixedAssetWhereInput";
import { FixedAssetOrderByInput } from "./FixedAssetOrderByInput";

export type FixedAssetFindManyArgs = {
  where?: FixedAssetWhereInput;
  orderBy?: Array<FixedAssetOrderByInput>;
  skip?: number;
  take?: number;
};
