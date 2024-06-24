import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SelfServiceServiceBase } from "./base/selfService.service.base";

@Injectable()
export class SelfServiceService extends SelfServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
