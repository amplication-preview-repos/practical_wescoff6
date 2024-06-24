import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FixedAssetService } from "./fixedAsset.service";
import { FixedAssetControllerBase } from "./base/fixedAsset.controller.base";

@swagger.ApiTags("fixedAssets")
@common.Controller("fixedAssets")
export class FixedAssetController extends FixedAssetControllerBase {
  constructor(protected readonly service: FixedAssetService) {
    super(service);
  }
}
