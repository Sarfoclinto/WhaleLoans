import {
  ExclamationCircleFilled,
  MoonFilled,
  SunFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { Header } from "antd/es/layout/layout";
import { Button, Flex } from "antd";
function AppHeader() {
  const [islight, setIsLight] = useState(true);

  const textStyles = {
    color: islight ? "black" : "white",
  };

  const bgColorStyle = {
    backgroundColor: islight ? "#eeee" : "#001529",
  };
  return (
    <Header
      className=" bg-white px-5 border-b h-[57px] border-l"
      style={bgColorStyle}
    >
      <Flex className="w-full h-full " align="center" justify="space-between">
        <p style={textStyles}>
          <ExclamationCircleFilled /> <span>1HUMP</span> = <span>$8.43</span>
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
  );
}

export default AppHeader;
