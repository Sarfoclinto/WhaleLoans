import React, { useState } from "react";
import { Avatar, Button, Card, Flex, Modal, Table } from "antd";
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

  const [datasource, setDataSource] = useState([
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
  ]);

  const [select, setSelect] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const deletedBonds = () => {
    setDataSource((prev) => {
      return prev.filter((data) => {
        return !select.map((selected) => selected.key).includes(data.key);
      });
    });
    setModalOpen(false);
  };
  return (
    <>
      <Modal
        open={modalOpen}
        closable
        onCancel={() => setModalOpen(false)}
        onOk={() => deletedBonds()}
      >
        <h1>
          Are you sure you want to delete the selected
          {select?.length > 1 ? " Bonds" : " Bond"}
        </h1>
      </Modal>
      <Flex vertical className="w-full h-full p-5" gap={10}>
        <Flex align="center" justify="space-between">
          <Flex vertical gap={5} className="">
            <h1 className="font-bold text-2xl">Bond (4,4)</h1>
            <p className="text-stone-400 font-semibold">
              <InfoCircleOutlined />
              <span> Treasury Balance: </span>
              <span className="text-black font-bold">$326,526</span>
            </p>
          </Flex>
          {select?.length > 0 && (
            <Button danger onClick={() => setModalOpen(true)}>
              Delete
            </Button>
          )}
        </Flex>
        <Table
          rowSelection={{
            type: "checkbox",
            onSelect: (_, selected, selectedRowKeys) => {
              setSelect(selectedRowKeys);
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
    </>
  );
}

export default Bond;
