import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { JobList } from "./job/JobList";
import { JobCreate } from "./job/JobCreate";
import { JobEdit } from "./job/JobEdit";
import { JobShow } from "./job/JobShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { WorkforceList } from "./workforce/WorkforceList";
import { WorkforceCreate } from "./workforce/WorkforceCreate";
import { WorkforceEdit } from "./workforce/WorkforceEdit";
import { WorkforceShow } from "./workforce/WorkforceShow";
import { PerformanceList } from "./performance/PerformanceList";
import { PerformanceCreate } from "./performance/PerformanceCreate";
import { PerformanceEdit } from "./performance/PerformanceEdit";
import { PerformanceShow } from "./performance/PerformanceShow";
import { PayrollList } from "./payroll/PayrollList";
import { PayrollCreate } from "./payroll/PayrollCreate";
import { PayrollEdit } from "./payroll/PayrollEdit";
import { PayrollShow } from "./payroll/PayrollShow";
import { BenefitList } from "./benefit/BenefitList";
import { BenefitCreate } from "./benefit/BenefitCreate";
import { BenefitEdit } from "./benefit/BenefitEdit";
import { BenefitShow } from "./benefit/BenefitShow";
import { LeaveList } from "./leave/LeaveList";
import { LeaveCreate } from "./leave/LeaveCreate";
import { LeaveEdit } from "./leave/LeaveEdit";
import { LeaveShow } from "./leave/LeaveShow";
import { TalentList } from "./talent/TalentList";
import { TalentCreate } from "./talent/TalentCreate";
import { TalentEdit } from "./talent/TalentEdit";
import { TalentShow } from "./talent/TalentShow";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { SelfServiceList } from "./selfService/SelfServiceList";
import { SelfServiceCreate } from "./selfService/SelfServiceCreate";
import { SelfServiceEdit } from "./selfService/SelfServiceEdit";
import { SelfServiceShow } from "./selfService/SelfServiceShow";
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
        title={"HRMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Job"
          list={JobList}
          edit={JobEdit}
          create={JobCreate}
          show={JobShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Workforce"
          list={WorkforceList}
          edit={WorkforceEdit}
          create={WorkforceCreate}
          show={WorkforceShow}
        />
        <Resource
          name="Performance"
          list={PerformanceList}
          edit={PerformanceEdit}
          create={PerformanceCreate}
          show={PerformanceShow}
        />
        <Resource
          name="Payroll"
          list={PayrollList}
          edit={PayrollEdit}
          create={PayrollCreate}
          show={PayrollShow}
        />
        <Resource
          name="Benefit"
          list={BenefitList}
          edit={BenefitEdit}
          create={BenefitCreate}
          show={BenefitShow}
        />
        <Resource
          name="Leave"
          list={LeaveList}
          edit={LeaveEdit}
          create={LeaveCreate}
          show={LeaveShow}
        />
        <Resource
          name="Talent"
          list={TalentList}
          edit={TalentEdit}
          create={TalentCreate}
          show={TalentShow}
        />
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="SelfService"
          list={SelfServiceList}
          edit={SelfServiceEdit}
          create={SelfServiceCreate}
          show={SelfServiceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
