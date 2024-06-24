import * as graphql from "@nestjs/graphql";
import { GeneralLedgerResolverBase } from "./base/generalLedger.resolver.base";
import { GeneralLedger } from "./base/GeneralLedger";
import { GeneralLedgerService } from "./generalLedger.service";

@graphql.Resolver(() => GeneralLedger)
export class GeneralLedgerResolver extends GeneralLedgerResolverBase {
  constructor(protected readonly service: GeneralLedgerService) {
    super(service);
  }
}
