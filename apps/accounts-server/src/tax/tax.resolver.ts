import * as graphql from "@nestjs/graphql";
import { TaxResolverBase } from "./base/tax.resolver.base";
import { Tax } from "./base/Tax";
import { TaxService } from "./tax.service";

@graphql.Resolver(() => Tax)
export class TaxResolver extends TaxResolverBase {
  constructor(protected readonly service: TaxService) {
    super(service);
  }
}
