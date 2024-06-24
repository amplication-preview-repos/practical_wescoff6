import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkforceService } from "./workforce.service";
import { WorkforceControllerBase } from "./base/workforce.controller.base";

@swagger.ApiTags("workforces")
@common.Controller("workforces")
export class WorkforceController extends WorkforceControllerBase {
  constructor(protected readonly service: WorkforceService) {
    super(service);
  }
}
