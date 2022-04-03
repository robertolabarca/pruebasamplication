import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ProvinciaList } from "./provincia/ProvinciaList";
import { ProvinciaCreate } from "./provincia/ProvinciaCreate";
import { ProvinciaEdit } from "./provincia/ProvinciaEdit";
import { ProvinciaShow } from "./provincia/ProvinciaShow";
import { MunicipioList } from "./municipio/MunicipioList";
import { MunicipioCreate } from "./municipio/MunicipioCreate";
import { MunicipioEdit } from "./municipio/MunicipioEdit";
import { MunicipioShow } from "./municipio/MunicipioShow";
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
        title={"Mi Primera App"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Provincia"
          list={ProvinciaList}
          edit={ProvinciaEdit}
          create={ProvinciaCreate}
          show={ProvinciaShow}
        />
        <Resource
          name="Municipio"
          list={MunicipioList}
          edit={MunicipioEdit}
          create={MunicipioCreate}
          show={MunicipioShow}
        />
      </Admin>
    </div>
  );
};

export default App;
