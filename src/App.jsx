import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Stake from "./Pages/Stake";
import Bond from "./Pages/Bond";
import Calculator from "./Pages/Calculator";
import Vaults from "./Pages/Vaults";
import Leverage from "./Pages/Leverage";
import FlashMint from "./Pages/FlashMint";
import Docs from "./Pages/Docs";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Sidebar from "./Components/Sidebar";
import AppHeader from "./Components/AppHeader";
import AppFooter from "./Components/AppFooter";
function App() {
  return (
    <div id="app" className="app w-full h-dvh ">
      <Router>
        <Layout className=" h-full pr-2">
          <Sidebar />
          <Layout>
            <AppHeader />
            <Content className="">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="stake" element={<Stake />} />
                <Route path="bond" element={<Bond />} />
                <Route path="calculator" element={<Calculator />} />
                <Route path="vaults" element={<Vaults />} />
                <Route path="leverage" element={<Leverage />} />
                <Route path="flashmint" element={<FlashMint />} />
                <Route path="docs" element={<Docs />} />
              </Routes>
            </Content>
            <AppFooter />
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
