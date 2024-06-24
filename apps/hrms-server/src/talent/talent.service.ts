import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TalentServiceBase } from "./base/talent.service.base";

@Injectable()
export class TalentService extends TalentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
