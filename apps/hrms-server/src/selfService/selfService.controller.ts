import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SelfServiceService } from "./selfService.service";
import { SelfServiceControllerBase } from "./base/selfService.controller.base";

@swagger.ApiTags("selfServices")
@common.Controller("selfServices")
export class SelfServiceController extends SelfServiceControllerBase {
  constructor(protected readonly service: SelfServiceService) {
    super(service);
  }
}
