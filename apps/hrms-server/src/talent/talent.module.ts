import { Module } from "@nestjs/common";
import { TalentModuleBase } from "./base/talent.module.base";
import { TalentService } from "./talent.service";
import { TalentController } from "./talent.controller";
import { TalentResolver } from "./talent.resolver";

@Module({
  imports: [TalentModuleBase],
  controllers: [TalentController],
  providers: [TalentService, TalentResolver],
  exports: [TalentService],
})
export class TalentModule {}
