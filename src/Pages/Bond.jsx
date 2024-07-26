import React from "react";
import { Avatar, Button, Card, Flex, Table } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
function Bond() {
  const columns = [
    {
      title: "Bond",
      dataIndex: "bond",
      key: "bond",
      render: () => (
        <Flex gap={10} align="center">
          <Avatar src="src/assets/react.svg" />
          <span>BUSD</span>
        </Flex>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "ROI",
      dataIndex: "roi",
      key: "roi",
    },
    {
      title: "Purchased",
      dataIndex: "purchased",
      key: "purchased",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: () => <p>14 days</p>,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "duration",
      render: () => <Button>Bond</Button>,
    },
  ];

  const datasource = [
    {
      price: "$15.04",
      roi: "-76.09%",
      purchased: "$87.783",
      key: "1",
    },
    {
      price: "$15.04",
      roi: "-76.09%",
      purchased: "$87.783",
      key: "2",
    },
    {
      price: "$15.04",
      roi: "-76.09%",
      purchased: "$87.783",
      key: "3",
    },
  ];

  return (
    <Flex vertical className="w-full h-full p-5" gap={10}>
      <Flex vertical gap={5} className="">
        <h1 className="font-bold text-2xl">Bond (4,4)</h1>
        <p className="text-stone-400 font-semibold">
          <InfoCircleOutlined />
          <span> Treasury Balance: </span>
          <span className="text-black font-bold">$326,526</span>
        </p>
      </Flex>
      <Table
        rowSelection={{
          type: "checkbox",
          onSelect: ({ purchased }, selected, selectedRowKeys) => {
            console.log(purchased, selected, selectedRowKeys);
          },
        }}
        columns={columns}
        className="w-full "
        dataSource={datasource}
      />
      <Card>
        <Flex vertical gap={7}>
          <Flex gap={10} className="font-bold ">
            <InfoCircleOutlined />
            <span>Important</span>
          </Flex>
          <p className="pl-6 text-gray-400 font-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
            recusandae eveniet inventore vitae sunt corporis quibusdam earum.
            Illum sint voluptate incidunt quod veritatis velit temporibus
            consequatur, voluptas explicabo architecto officiis, doloremque
            molestiae?
          </p>
        </Flex>
      </Card>
    </Flex>
  );
}

export default Bond;
