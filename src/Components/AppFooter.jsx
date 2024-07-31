import { useState } from "react";
import { Footer } from "antd/es/layout/layout";
import { Flex, Space } from "antd";
import { CheckOutlined } from "@ant-design/icons";

function AppFooter() {
  const [islight, setIsLight] = useState(true);

  const textStyles = {
    color: islight ? "black" : "white",
  };

  const bgColorStyle = {
    backgroundColor: islight ? "#eeee" : "#001529",
  };

  return (
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
  );
}

export default AppFooter;
