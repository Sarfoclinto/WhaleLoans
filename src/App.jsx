import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Stake from "./Pages/Stake";
import Bond from "./Pages/Bond";
import Calculator from "./Pages/Calculator";
import Vaults from "./Pages/Vaults";
import Leverage from "./Pages/Leverage";
import FlashMint from "./Pages/FlashMint";
import Docs from "./Pages/Docs";
import Sider from "antd/es/layout/Sider";
import { useEffect, useState } from "react";
import { Avatar, Button, Flex, Layout, Menu, Space } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MenuItem from "antd/es/menu/MenuItem";
import {
  ExclamationCircleFilled,
  MoonFilled,
  SunFilled,
  CalculatorFilled,
  FileTextFilled,
  HomeFilled,
  LineChartOutlined,
  LockFilled,
  RocketFilled,
  ShopFilled,
  ThunderboltFilled,
  DiscordFilled,
  GithubFilled,
  TwitterOutlined,
  MediumCircleFilled,
  CheckOutlined,
} from "@ant-design/icons";
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [islight, setIsLight] = useState(true);
  const [theme, setTheme] = useState(islight ? "#eeee" : "#001529");

  const iconStyles = {
    fontSize: "20px",
    color: islight ? "black" : "white",
  };

  const textStyles = {
    color: islight ? "black" : "white",
  };

  const bgColorStyle = {
    backgroundColor: islight ? "#eeee" : "#001529",
  };

  // useEffect(() => {
  //   console.log(islight);
  // }, [islight]);

  const footerMenu = [
    { icon: <DiscordFilled style={{ color: "gray", fontSize: "20px" }} /> },
    { icon: <GithubFilled style={{ color: "gray", fontSize: "20px" }} /> },
    { icon: <TwitterOutlined style={{ color: "gray", fontSize: "20px" }} /> },
    {
      icon: <MediumCircleFilled style={{ color: "gray", fontSize: "20px" }} />,
    },
  ];

  const menu = [
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Dashboard
        </span>
      ),
      icon: (
        <Link to="/">
          <HomeFilled style={iconStyles} />
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Stake
        </span>
      ),
      icon: (
        <Link to="stake">
          <RocketFilled style={iconStyles} />
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Bond
        </span>
      ),
      icon: (
        <Link to="bond">
          <ShopFilled style={iconStyles} />
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Calculator
        </span>
      ),
      icon: (
        <Link to="calculator">
          <CalculatorFilled style={iconStyles} />
        </Link>
      ),
      key: "4",
    },
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Vaults
        </span>
      ),
      icon: (
        <Link to="vaults">
          <LockFilled style={iconStyles} />
        </Link>
      ),
      key: "5",
    },
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Leverage
        </span>
      ),
      icon: (
        <Link to="leverage">
          <LineChartOutlined style={iconStyles} />
        </Link>
      ),
      key: "6",
    },
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Flash Mint
        </span>
      ),
      icon: (
        <Link to="flashmint">
          <ThunderboltFilled style={iconStyles} />
        </Link>
      ),
      key: "7",
    },
    {
      label: (
        <span className="text-sm font-semibold " style={textStyles}>
          Label
        </span>
      ),
      icon: (
        <Link to="docs">
          <FileTextFilled style={iconStyles} />
        </Link>
      ),
      key: "8",
    },
  ];
  return (
    <div id="app" className="app w-full h-dvh ">
      <Router>
        <Layout className=" h-full pr-2">
          <Sider
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
            collapsed={collapsed}
            className=" flex flex-col h-full border-r"
            style={bgColorStyle}
          >
            <div className="w-full flex justify-center items-center border-b p-2">
              <div className=" h-10  self-center">
                <Avatar
                  src="src/assets/logo.png"
                  size={50}
                  onClick={() => setCollapsed(!collapsed)}
                />
              </div>
              <p className="font-bold text-lg">
                {!collapsed && (
                  <span style={{ color: islight ? "black" : "white" }}>
                    Whales Loans
                  </span>
                )}
              </p>
            </div>
            <Menu
              theme={islight ? "light" : "dark"}
              items={menu}
              defaultSelectedKeys={["1"]}
              mode="inline"
              className=" h-5/6 py-3 mymenu"
              // style={bgColorStyle}
            />
            <Footer
              className=" border-t h-fit"
              style={{
                backgroundColor: `${theme}`,
                padding: "0",
              }}
            >
              <Menu
                mode="horizontal"
                className="w-full  pt-3"
                style={bgColorStyle}
              >
                {footerMenu.map((obj, index) => {
                  return <MenuItem itemIcon={obj.icon} key={index} />;
                })}
              </Menu>
            </Footer>
          </Sider>
          <Layout>
            <Header
              className=" bg-white px-5 border-b h-[57px] border-l"
              style={bgColorStyle}
            >
              <Flex
                className="w-full h-full "
                align="center"
                justify="space-between"
              >
                <p style={textStyles}>
                  <ExclamationCircleFilled /> <span>1HUMP</span> ={" "}
                  <span>$8.43</span>
                </p>
                <Flex align="center" gap="middle">
                  <Button type="primary" className="bg-black">
                    Connect Wallet
                  </Button>
                  <Button
                    onClick={() => {
                      setIsLight((prev) => !prev);
                    }}
                    style={{ backgroundColor: `#eeee` }}
                  >
                    {islight ? <MoonFilled /> : <SunFilled />}
                  </Button>
                </Flex>
              </Flex>
            </Header>
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
            <Footer className=" h-[58px] border-t" style={bgColorStyle}>
              <Flex
                className="w-full h-full px-5 text-white"
                align="center"
                justify="space-between"
                style={textStyles}
              >
                <p>&copy;2022 Whale Loans| All rights reserved</p>
                <Flex gap={20}>
                  <Space direction="horizontal">
                    <CheckOutlined />
                    <p>KYC Verified</p>
                  </Space>
                  <Space direction="horizontal">
                    <CheckOutlined />
                    <p>MCN Ventures</p>
                  </Space>
                </Flex>
              </Flex>
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
