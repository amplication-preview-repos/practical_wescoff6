import * as graphql from "@nestjs/graphql";
import { BenefitResolverBase } from "./base/benefit.resolver.base";
import { Benefit } from "./base/Benefit";
import { BenefitService } from "./benefit.service";

@graphql.Resolver(() => Benefit)
export class BenefitResolver extends BenefitResolverBase {
  constructor(protected readonly service: BenefitService) {
    super(service);
  }
}
