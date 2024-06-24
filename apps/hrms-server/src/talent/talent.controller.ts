import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TalentService } from "./talent.service";
import { TalentControllerBase } from "./base/talent.controller.base";

@swagger.ApiTags("talents")
@common.Controller("talents")
export class TalentController extends TalentControllerBase {
  constructor(protected readonly service: TalentService) {
    super(service);
  }
}
