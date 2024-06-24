import * as graphql from "@nestjs/graphql";
import { FixedAssetResolverBase } from "./base/fixedAsset.resolver.base";
import { FixedAsset } from "./base/FixedAsset";
import { FixedAssetService } from "./fixedAsset.service";

@graphql.Resolver(() => FixedAsset)
export class FixedAssetResolver extends FixedAssetResolverBase {
  constructor(protected readonly service: FixedAssetService) {
    super(service);
  }
}
