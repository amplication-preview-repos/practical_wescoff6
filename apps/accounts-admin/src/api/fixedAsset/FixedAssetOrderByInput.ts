import { SortOrder } from "../../util/SortOrder";

export type FixedAssetOrderByInput = {
  assetName?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
