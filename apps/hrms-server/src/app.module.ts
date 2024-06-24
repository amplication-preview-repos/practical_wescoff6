import { Module } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import { JobModule } from "./job/job.module";
import { ApplicationModule } from "./application/application.module";
import { WorkforceModule } from "./workforce/workforce.module";
import { PerformanceModule } from "./performance/performance.module";
import { PayrollModule } from "./payroll/payroll.module";
import { BenefitModule } from "./benefit/benefit.module";
import { LeaveModule } from "./leave/leave.module";
import { TalentModule } from "./talent/talent.module";
import { AttendanceModule } from "./attendance/attendance.module";
import { SelfServiceModule } from "./selfService/selfService.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    EmployeeModule,
    JobModule,
    ApplicationModule,
    WorkforceModule,
    PerformanceModule,
    PayrollModule,
    BenefitModule,
    LeaveModule,
    TalentModule,
    AttendanceModule,
    SelfServiceModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
