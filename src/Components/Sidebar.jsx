import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Avatar, Menu } from "antd";
import {
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
} from "@ant-design/icons";
import MenuItem from "antd/es/menu/MenuItem";
function Sidebar() {
  const [islight, setIsLight] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const bgColorStyle = {
    backgroundColor: islight ? "#eeee" : "#001529",
  };
  const [theme, setTheme] = useState(islight ? "#eeee" : "#001529");

  const iconStyles = {
    fontSize: "20px",
    color: islight ? "black" : "white",
  };

  const textStyles = {
    color: islight ? "black" : "white",
  };

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

  const footerMenu = [
    { icon: <DiscordFilled style={{ color: "gray", fontSize: "20px" }} /> },
    { icon: <GithubFilled style={{ color: "gray", fontSize: "20px" }} /> },
    { icon: <TwitterOutlined style={{ color: "gray", fontSize: "20px" }} /> },
    {
      icon: <MediumCircleFilled style={{ color: "gray", fontSize: "20px" }} />,
    },
  ];
  return (
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
      />
      <Footer
        className=" border-t h-fit"
        style={{
          backgroundColor: `${theme}`,
          padding: "0",
        }}
      >
        <Menu mode="horizontal" className="w-full  pt-3" style={bgColorStyle}>
          {footerMenu.map((obj, index) => {
            return <MenuItem itemIcon={obj.icon} key={index} />;
          })}
        </Menu>
      </Footer>
    </Sider>
  );
}

export default Sidebar;
