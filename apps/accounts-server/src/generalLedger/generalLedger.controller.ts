import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GeneralLedgerService } from "./generalLedger.service";
import { GeneralLedgerControllerBase } from "./base/generalLedger.controller.base";

@swagger.ApiTags("generalLedgers")
@common.Controller("generalLedgers")
export class GeneralLedgerController extends GeneralLedgerControllerBase {
  constructor(protected readonly service: GeneralLedgerService) {
    super(service);
  }
}
