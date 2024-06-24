/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Budget as PrismaBudget } from "@prisma/client";

export class BudgetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BudgetCountArgs, "select">): Promise<number> {
    return this.prisma.budget.count(args);
  }

  async budgets(args: Prisma.BudgetFindManyArgs): Promise<PrismaBudget[]> {
    return this.prisma.budget.findMany(args);
  }
  async budget(
    args: Prisma.BudgetFindUniqueArgs
  ): Promise<PrismaBudget | null> {
    return this.prisma.budget.findUnique(args);
  }
  async createBudget(args: Prisma.BudgetCreateArgs): Promise<PrismaBudget> {
    return this.prisma.budget.create(args);
  }
  async updateBudget(args: Prisma.BudgetUpdateArgs): Promise<PrismaBudget> {
    return this.prisma.budget.update(args);
  }
  async deleteBudget(args: Prisma.BudgetDeleteArgs): Promise<PrismaBudget> {
    return this.prisma.budget.delete(args);
  }
}
