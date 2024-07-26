import { InfoCircleOutlined, WalletOutlined } from "@ant-design/icons";
import { Button, Card, Flex } from "antd";

function Info() {
  return (
    <Flex vertical gap={20} className="w-1/2">
      <Flex vertical gap={5}>
        <h1 className="font-semibold text-2xl">Single Stake (3,3)</h1>
        <p className="text-stone-400 font-semibold">
          <InfoCircleOutlined />
          <span> 7hrs, 9mins to next rebase</span>
        </p>
      </Flex>

      <Card className="h-4/5 border-2 border-gray ">
        <Flex
          vertical
          justify="center"
          align="center"
          className="w-full h-[375px] "
          gap={40}
        >
          <WalletOutlined className="text-7xl" />
          <Flex vertical gap={15}>
            <Button className="border-2 border-black font-semibold px-8 py-5">
              Connect Wallet
            </Button>
            <p className="text-stone-400 font-medium">
              Connect your wallet to stake HUMP
            </p>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Info;
