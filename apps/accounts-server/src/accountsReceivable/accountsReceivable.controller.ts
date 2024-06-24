import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountsReceivableService } from "./accountsReceivable.service";
import { AccountsReceivableControllerBase } from "./base/accountsReceivable.controller.base";

@swagger.ApiTags("accountsReceivables")
@common.Controller("accountsReceivables")
export class AccountsReceivableController extends AccountsReceivableControllerBase {
  constructor(protected readonly service: AccountsReceivableService) {
    super(service);
  }
}
