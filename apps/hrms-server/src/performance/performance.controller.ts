import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerformanceService } from "./performance.service";
import { PerformanceControllerBase } from "./base/performance.controller.base";

@swagger.ApiTags("performances")
@common.Controller("performances")
export class PerformanceController extends PerformanceControllerBase {
  constructor(protected readonly service: PerformanceService) {
    super(service);
  }
}
