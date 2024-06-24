import * as graphql from "@nestjs/graphql";
import { ComplianceResolverBase } from "./base/compliance.resolver.base";
import { Compliance } from "./base/Compliance";
import { ComplianceService } from "./compliance.service";

@graphql.Resolver(() => Compliance)
export class ComplianceResolver extends ComplianceResolverBase {
  constructor(protected readonly service: ComplianceService) {
    super(service);
  }
}
