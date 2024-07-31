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
import { ExclamationCircleFilled } from "@ant-design/icons";
function Sidebar({ setHeaderInfo }) {
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
      headerinfo: (
        <p style={textStyles}>
          <ExclamationCircleFilled /> <span>1HUMP</span> = <span>$8.43</span>
        </p>
      ),
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
      headerinfo: (
        <p style={textStyles} className="font-bold text-lg">
          Stake
        </p>
      ),
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
      headerinfo: (
        <p style={textStyles} className="font-bold text-lg">
          Bond
        </p>
      ),
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
      headerinfo: (
        <p style={textStyles} className="font-bold text-lg">
          Calculator
        </p>
      ),
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
      headerinfo: (
        <p style={textStyles} className="font-bold text-lg">
          Vaults
        </p>
      ),
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
      headerinfo: (
        <p style={textStyles} className="font-bold text-lg">
          Leverage
        </p>
      ),
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
      headerinfo: (
        <p style={textStyles} className="font-bold text-lg">
          Flash Mint
        </p>
      ),
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
      headerinfo: (
        <p style={textStyles} className="font-bold text-lg">
          Label
        </p>
      ),
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

  const handleClick = (headerinfo) => {
    setHeaderInfo(headerinfo);
  };
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
        defaultSelectedKeys={["1"]}
        mode="inline"
        className=" h-5/6 py-3 mymenu"
      >
        {menu.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
            onClick={() => handleClick(item.headerinfo)}
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
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
