import { Module } from "@nestjs/common";
import { GeneralLedgerModule } from "./generalLedger/generalLedger.module";
import { AccountsPayableModule } from "./accountsPayable/accountsPayable.module";
import { TaxModule } from "./tax/tax.module";
import { InventoryModule } from "./inventory/inventory.module";
import { BudgetModule } from "./budget/budget.module";
import { FixedAssetModule } from "./fixedAsset/fixedAsset.module";
import { ComplianceModule } from "./compliance/compliance.module";
import { AccountsReceivableModule } from "./accountsReceivable/accountsReceivable.module";
import { FinancialReportModule } from "./financialReport/financialReport.module";
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
    GeneralLedgerModule,
    AccountsPayableModule,
    TaxModule,
    InventoryModule,
    BudgetModule,
    FixedAssetModule,
    ComplianceModule,
    AccountsReceivableModule,
    FinancialReportModule,
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
