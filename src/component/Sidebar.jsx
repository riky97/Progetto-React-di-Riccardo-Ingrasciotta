import React, { useState } from "react";
import { Drawer, Layout, Menu, Input } from "antd";
import { HomeOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";

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
        <Menu
          mode="horizontal"
          className="sidebar"
          style={{ display: "grid", gridTemplateColumns: "1fr auto .2fr" }}
        >
          <div className="logo" style={{ gridColumn: 1 }}>
            {" "}
            Vegetarian Recipe
          </div>

          <div
            className="d-flex align-items-center"
            style={{ gridColumn: 3, color: "#" }}
          >
            <MenuOutlined style={{ fontSize: 20 }} onClick={showDrawer} />
          </div>
        </Menu>
      </Header>

      <Drawer
        title="Vegetarian Recipe"
        placement="left"
        closable={false}
        closeIcon={<CloseOutlined />}
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
