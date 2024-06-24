import { FixedAsset as TFixedAsset } from "../api/fixedAsset/FixedAsset";

export const FIXEDASSET_TITLE_FIELD = "assetName";

export const FixedAssetTitle = (record: TFixedAsset): string => {
  return record.assetName?.toString() || String(record.id);
};
