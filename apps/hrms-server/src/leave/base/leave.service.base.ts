/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Leave as PrismaLeave,
  Employee as PrismaEmployee,
} from "@prisma/client";

export class LeaveServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LeaveCountArgs, "select">): Promise<number> {
    return this.prisma.leave.count(args);
  }

  async leaves(args: Prisma.LeaveFindManyArgs): Promise<PrismaLeave[]> {
    return this.prisma.leave.findMany(args);
  }
  async leave(args: Prisma.LeaveFindUniqueArgs): Promise<PrismaLeave | null> {
    return this.prisma.leave.findUnique(args);
  }
  async createLeave(args: Prisma.LeaveCreateArgs): Promise<PrismaLeave> {
    return this.prisma.leave.create(args);
  }
  async updateLeave(args: Prisma.LeaveUpdateArgs): Promise<PrismaLeave> {
    return this.prisma.leave.update(args);
  }
  async deleteLeave(args: Prisma.LeaveDeleteArgs): Promise<PrismaLeave> {
    return this.prisma.leave.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaEmployee | null> {
    return this.prisma.leave
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }
}
