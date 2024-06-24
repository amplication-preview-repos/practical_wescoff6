import * as graphql from "@nestjs/graphql";
import { WorkforceResolverBase } from "./base/workforce.resolver.base";
import { Workforce } from "./base/Workforce";
import { WorkforceService } from "./workforce.service";

@graphql.Resolver(() => Workforce)
export class WorkforceResolver extends WorkforceResolverBase {
  constructor(protected readonly service: WorkforceService) {
    super(service);
  }
}
