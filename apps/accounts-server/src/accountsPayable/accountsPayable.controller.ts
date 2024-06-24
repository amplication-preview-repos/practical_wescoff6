import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountsPayableService } from "./accountsPayable.service";
import { AccountsPayableControllerBase } from "./base/accountsPayable.controller.base";

@swagger.ApiTags("accountsPayables")
@common.Controller("accountsPayables")
export class AccountsPayableController extends AccountsPayableControllerBase {
  constructor(protected readonly service: AccountsPayableService) {
    super(service);
  }
}
