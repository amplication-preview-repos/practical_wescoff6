import { Module } from "@nestjs/common";
import { SelfServiceModuleBase } from "./base/selfService.module.base";
import { SelfServiceService } from "./selfService.service";
import { SelfServiceController } from "./selfService.controller";
import { SelfServiceResolver } from "./selfService.resolver";

@Module({
  imports: [SelfServiceModuleBase],
  controllers: [SelfServiceController],
  providers: [SelfServiceService, SelfServiceResolver],
  exports: [SelfServiceService],
})
export class SelfServiceModule {}
