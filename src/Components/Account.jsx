import {
  ArrowLeftOutlined,
  DollarCircleFilled,
  InfoCircleOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Flex, Grid } from "antd";

function Account() {
  return (
    <Flex vertical gap={20} className="w-1/2">
      <Flex
        className="px-5 py-3 w-full bg-[#14121f] text-white rounded-lg text-xl"
        justify="space-between"
      >
        <Flex gap={10}>
          <DollarCircleFilled className="text-3xl" />
          <span className="font-semibold">$0.00</span>
        </Flex>
        <p className="text-base text-stone-400">Your Earnings / Day</p>
      </Flex>
      <Card className="h-4/5 border-2 border-gray px-0 bg-[#14121f] rounded-xl grid-rows-3">
        <Flex vertical className="w-full pt-5" gap={35}>
          <Flex className="border-b pb-7 px-3" vertical>
            <Flex justify="space-between" align="center" className="w-full">
              <p className="text-sm font-medium text-white">APY</p>
              <Avatar
                icon={<ArrowLeftOutlined className="text-base" />}
                className="hover:rotate-180 transition-all "
              />
            </Flex>
            <p className="text-white font-semibold text-3xl">257,900%</p>
          </Flex>
          {/* /////////////////////////// */}
          <Flex className="border-b pb-7 px-3" vertical>
            <Flex justify="space-between" align="center" className="w-full">
              <p className="text-sm font-medium text-white">
                Total Value Deposited
              </p>
              <Avatar
                icon={
                  <ArrowLeftOutlined className="text-sm text-black rotate-[130deg]" />
                }
                className="hover:rotate-180 transition-all bg-white"
              />
            </Flex>
            <p className="text-white font-semibold text-3xl">$571,320</p>
          </Flex>
          {/* ////////////////////////// */}
          <Flex className="pb-7 px-3" vertical>
            <Flex justify="space-between" align="center" className="w-full">
              <p className="text-sm font-medium text-white">Current Index</p>
              <Avatar
                icon={<ArrowLeftOutlined className="text-sm " />}
                className="hover:rotate-180 transition-all "
              />
            </Flex>
            <p className="text-white font-semibold text-3xl">
              1.99 <span className="text-base font-medium">HUMP</span>
            </p>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Account;
