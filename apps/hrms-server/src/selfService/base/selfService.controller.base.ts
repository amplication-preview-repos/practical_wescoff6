/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SelfServiceService } from "../selfService.service";
import { SelfServiceCreateInput } from "./SelfServiceCreateInput";
import { SelfService } from "./SelfService";
import { SelfServiceFindManyArgs } from "./SelfServiceFindManyArgs";
import { SelfServiceWhereUniqueInput } from "./SelfServiceWhereUniqueInput";
import { SelfServiceUpdateInput } from "./SelfServiceUpdateInput";

export class SelfServiceControllerBase {
  constructor(protected readonly service: SelfServiceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SelfService })
  async createSelfService(
    @common.Body() data: SelfServiceCreateInput
  ): Promise<SelfService> {
    return await this.service.createSelfService({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        functionality: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SelfService] })
  @ApiNestedQuery(SelfServiceFindManyArgs)
  async selfServices(@common.Req() request: Request): Promise<SelfService[]> {
    const args = plainToClass(SelfServiceFindManyArgs, request.query);
    return this.service.selfServices({
      ...args,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        functionality: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SelfService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async selfService(
    @common.Param() params: SelfServiceWhereUniqueInput
  ): Promise<SelfService | null> {
    const result = await this.service.selfService({
      where: params,
      select: {
        createdAt: true,

        employee: {
          select: {
            id: true,
          },
        },

        functionality: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SelfService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSelfService(
    @common.Param() params: SelfServiceWhereUniqueInput,
    @common.Body() data: SelfServiceUpdateInput
  ): Promise<SelfService | null> {
    try {
      return await this.service.updateSelfService({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          functionality: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SelfService })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSelfService(
    @common.Param() params: SelfServiceWhereUniqueInput
  ): Promise<SelfService | null> {
    try {
      return await this.service.deleteSelfService({
        where: params,
        select: {
          createdAt: true,

          employee: {
            select: {
              id: true,
            },
          },

          functionality: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
