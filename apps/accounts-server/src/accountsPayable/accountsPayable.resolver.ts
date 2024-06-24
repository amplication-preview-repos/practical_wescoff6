import * as graphql from "@nestjs/graphql";
import { AccountsPayableResolverBase } from "./base/accountsPayable.resolver.base";
import { AccountsPayable } from "./base/AccountsPayable";
import { AccountsPayableService } from "./accountsPayable.service";

@graphql.Resolver(() => AccountsPayable)
export class AccountsPayableResolver extends AccountsPayableResolverBase {
  constructor(protected readonly service: AccountsPayableService) {
    super(service);
  }
}
