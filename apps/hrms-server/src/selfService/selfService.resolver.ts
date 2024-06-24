import * as graphql from "@nestjs/graphql";
import { SelfServiceResolverBase } from "./base/selfService.resolver.base";
import { SelfService } from "./base/SelfService";
import { SelfServiceService } from "./selfService.service";

@graphql.Resolver(() => SelfService)
export class SelfServiceResolver extends SelfServiceResolverBase {
  constructor(protected readonly service: SelfServiceService) {
    super(service);
  }
}
