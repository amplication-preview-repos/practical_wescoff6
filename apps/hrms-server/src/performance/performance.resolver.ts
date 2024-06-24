import * as graphql from "@nestjs/graphql";
import { PerformanceResolverBase } from "./base/performance.resolver.base";
import { Performance } from "./base/Performance";
import { PerformanceService } from "./performance.service";

@graphql.Resolver(() => Performance)
export class PerformanceResolver extends PerformanceResolverBase {
  constructor(protected readonly service: PerformanceService) {
    super(service);
  }
}
