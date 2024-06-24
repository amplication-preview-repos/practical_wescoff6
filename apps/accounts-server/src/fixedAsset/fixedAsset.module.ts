import { Module } from "@nestjs/common";
import { FixedAssetModuleBase } from "./base/fixedAsset.module.base";
import { FixedAssetService } from "./fixedAsset.service";
import { FixedAssetController } from "./fixedAsset.controller";
import { FixedAssetResolver } from "./fixedAsset.resolver";

@Module({
  imports: [FixedAssetModuleBase],
  controllers: [FixedAssetController],
  providers: [FixedAssetService, FixedAssetResolver],
  exports: [FixedAssetService],
})
export class FixedAssetModule {}
