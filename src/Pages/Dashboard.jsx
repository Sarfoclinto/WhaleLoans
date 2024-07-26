import { Flex } from "antd";
import React from "react";
import Info from "../Components/Info";
import Account from "../Components/Account";

function Dashboard() {
  return (
    <div id="dashboard" className="p-5 h-full">
      <Flex className="w-full h-full" justify="space-between" gap={17}>
        <Info />
        <Account />
      </Flex>
    </div>
  );
}

export default Dashboard;
