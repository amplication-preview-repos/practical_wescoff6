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
import { FinancialReportService } from "../financialReport.service";
import { FinancialReportCreateInput } from "./FinancialReportCreateInput";
import { FinancialReport } from "./FinancialReport";
import { FinancialReportFindManyArgs } from "./FinancialReportFindManyArgs";
import { FinancialReportWhereUniqueInput } from "./FinancialReportWhereUniqueInput";
import { FinancialReportUpdateInput } from "./FinancialReportUpdateInput";

export class FinancialReportControllerBase {
  constructor(protected readonly service: FinancialReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinancialReport })
  async createFinancialReport(
    @common.Body() data: FinancialReportCreateInput
  ): Promise<FinancialReport> {
    return await this.service.createFinancialReport({
      data: data,
      select: {
        createdAt: true,
        details: true,
        id: true,
        period: true,
        reportName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FinancialReport] })
  @ApiNestedQuery(FinancialReportFindManyArgs)
  async financialReports(
    @common.Req() request: Request
  ): Promise<FinancialReport[]> {
    const args = plainToClass(FinancialReportFindManyArgs, request.query);
    return this.service.financialReports({
      ...args,
      select: {
        createdAt: true,
        details: true,
        id: true,
        period: true,
        reportName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FinancialReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async financialReport(
    @common.Param() params: FinancialReportWhereUniqueInput
  ): Promise<FinancialReport | null> {
    const result = await this.service.financialReport({
      where: params,
      select: {
        createdAt: true,
        details: true,
        id: true,
        period: true,
        reportName: true,
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
  @swagger.ApiOkResponse({ type: FinancialReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFinancialReport(
    @common.Param() params: FinancialReportWhereUniqueInput,
    @common.Body() data: FinancialReportUpdateInput
  ): Promise<FinancialReport | null> {
    try {
      return await this.service.updateFinancialReport({
        where: params,
        data: data,
        select: {
          createdAt: true,
          details: true,
          id: true,
          period: true,
          reportName: true,
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
  @swagger.ApiOkResponse({ type: FinancialReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFinancialReport(
    @common.Param() params: FinancialReportWhereUniqueInput
  ): Promise<FinancialReport | null> {
    try {
      return await this.service.deleteFinancialReport({
        where: params,
        select: {
          createdAt: true,
          details: true,
          id: true,
          period: true,
          reportName: true,
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
