import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GeneralLedgerList } from "./generalLedger/GeneralLedgerList";
import { GeneralLedgerCreate } from "./generalLedger/GeneralLedgerCreate";
import { GeneralLedgerEdit } from "./generalLedger/GeneralLedgerEdit";
import { GeneralLedgerShow } from "./generalLedger/GeneralLedgerShow";
import { AccountsPayableList } from "./accountsPayable/AccountsPayableList";
import { AccountsPayableCreate } from "./accountsPayable/AccountsPayableCreate";
import { AccountsPayableEdit } from "./accountsPayable/AccountsPayableEdit";
import { AccountsPayableShow } from "./accountsPayable/AccountsPayableShow";
import { TaxList } from "./tax/TaxList";
import { TaxCreate } from "./tax/TaxCreate";
import { TaxEdit } from "./tax/TaxEdit";
import { TaxShow } from "./tax/TaxShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { BudgetList } from "./budget/BudgetList";
import { BudgetCreate } from "./budget/BudgetCreate";
import { BudgetEdit } from "./budget/BudgetEdit";
import { BudgetShow } from "./budget/BudgetShow";
import { FixedAssetList } from "./fixedAsset/FixedAssetList";
import { FixedAssetCreate } from "./fixedAsset/FixedAssetCreate";
import { FixedAssetEdit } from "./fixedAsset/FixedAssetEdit";
import { FixedAssetShow } from "./fixedAsset/FixedAssetShow";
import { ComplianceList } from "./compliance/ComplianceList";
import { ComplianceCreate } from "./compliance/ComplianceCreate";
import { ComplianceEdit } from "./compliance/ComplianceEdit";
import { ComplianceShow } from "./compliance/ComplianceShow";
import { AccountsReceivableList } from "./accountsReceivable/AccountsReceivableList";
import { AccountsReceivableCreate } from "./accountsReceivable/AccountsReceivableCreate";
import { AccountsReceivableEdit } from "./accountsReceivable/AccountsReceivableEdit";
import { AccountsReceivableShow } from "./accountsReceivable/AccountsReceivableShow";
import { FinancialReportList } from "./financialReport/FinancialReportList";
import { FinancialReportCreate } from "./financialReport/FinancialReportCreate";
import { FinancialReportEdit } from "./financialReport/FinancialReportEdit";
import { FinancialReportShow } from "./financialReport/FinancialReportShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Accounts"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GeneralLedger"
          list={GeneralLedgerList}
          edit={GeneralLedgerEdit}
          create={GeneralLedgerCreate}
          show={GeneralLedgerShow}
        />
        <Resource
          name="AccountsPayable"
          list={AccountsPayableList}
          edit={AccountsPayableEdit}
          create={AccountsPayableCreate}
          show={AccountsPayableShow}
        />
        <Resource
          name="Tax"
          list={TaxList}
          edit={TaxEdit}
          create={TaxCreate}
          show={TaxShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Budget"
          list={BudgetList}
          edit={BudgetEdit}
          create={BudgetCreate}
          show={BudgetShow}
        />
        <Resource
          name="FixedAsset"
          list={FixedAssetList}
          edit={FixedAssetEdit}
          create={FixedAssetCreate}
          show={FixedAssetShow}
        />
        <Resource
          name="Compliance"
          list={ComplianceList}
          edit={ComplianceEdit}
          create={ComplianceCreate}
          show={ComplianceShow}
        />
        <Resource
          name="AccountsReceivable"
          list={AccountsReceivableList}
          edit={AccountsReceivableEdit}
          create={AccountsReceivableCreate}
          show={AccountsReceivableShow}
        />
        <Resource
          name="FinancialReport"
          list={FinancialReportList}
          edit={FinancialReportEdit}
          create={FinancialReportCreate}
          show={FinancialReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
