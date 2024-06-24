import * as graphql from "@nestjs/graphql";
import { TalentResolverBase } from "./base/talent.resolver.base";
import { Talent } from "./base/Talent";
import { TalentService } from "./talent.service";

@graphql.Resolver(() => Talent)
export class TalentResolver extends TalentResolverBase {
  constructor(protected readonly service: TalentService) {
    super(service);
  }
}
