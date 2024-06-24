import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FixedAssetServiceBase } from "./base/fixedAsset.service.base";

@Injectable()
export class FixedAssetService extends FixedAssetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
