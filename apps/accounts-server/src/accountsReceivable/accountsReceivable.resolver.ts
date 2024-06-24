import * as graphql from "@nestjs/graphql";
import { AccountsReceivableResolverBase } from "./base/accountsReceivable.resolver.base";
import { AccountsReceivable } from "./base/AccountsReceivable";
import { AccountsReceivableService } from "./accountsReceivable.service";

@graphql.Resolver(() => AccountsReceivable)
export class AccountsReceivableResolver extends AccountsReceivableResolverBase {
  constructor(protected readonly service: AccountsReceivableService) {
    super(service);
  }
}
