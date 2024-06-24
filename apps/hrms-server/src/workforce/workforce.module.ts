import { Module } from "@nestjs/common";
import { WorkforceModuleBase } from "./base/workforce.module.base";
import { WorkforceService } from "./workforce.service";
import { WorkforceController } from "./workforce.controller";
import { WorkforceResolver } from "./workforce.resolver";

@Module({
  imports: [WorkforceModuleBase],
  controllers: [WorkforceController],
  providers: [WorkforceService, WorkforceResolver],
  exports: [WorkforceService],
})
export class WorkforceModule {}
