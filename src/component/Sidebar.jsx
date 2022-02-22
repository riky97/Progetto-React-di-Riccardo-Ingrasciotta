import React, { useState } from "react";
import { Button, Drawer, Layout, Menu, Input } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";

import FooterWeb from "../FooterWeb";
const Header = Layout;
const { Search } = Input;

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const onSearch = (value) => console.log(value);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Header className="d-grid">
        <Menu mode="horizontal" className="sidebar">
          <MenuOutlined style={{ fontSize: 20 }} onClick={showDrawer} />
        </Menu>
      </Header>

      <Drawer
        title="Vegetarian Recipe"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="left"
        footer={<FooterWeb />}
        width={320}
      >
        <div className="home">
          <a href="/" className="a-home">
            {" "}
            <HomeOutlined /> Home
          </a>
        </div>
        <br />
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton="Filters"
          size="large"
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
