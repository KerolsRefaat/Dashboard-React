import {Layout} from "antd";
import TopHeader from "./Components/TopHeader";
import SideBar from "./Components/SideBar";
import SettingsList from "./Components/SettingsList";
import OrganizationSettings from "./Components/OrganizationSettings";

const App: React.FC = () => {  
  return (
<>
      <TopHeader />

        <Layout>

          <SideBar />

          <SettingsList />

          <OrganizationSettings/>
          
        </Layout>
        </>

  );
};

export default App;
