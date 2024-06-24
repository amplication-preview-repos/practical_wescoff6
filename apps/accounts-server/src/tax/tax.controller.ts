import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TaxService } from "./tax.service";
import { TaxControllerBase } from "./base/tax.controller.base";

@swagger.ApiTags("taxes")
@common.Controller("taxes")
export class TaxController extends TaxControllerBase {
  constructor(protected readonly service: TaxService) {
    super(service);
  }
}
