import React, { useState } from "react";
import { Drawer, Layout, Menu, Input } from "antd";
import { HomeOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";
import { searchTitle } from "../actions";

import FooterWeb from "./FooterWeb";
const Header = Layout;
const { Search } = Input;

const Sidebar = ({ onSearch }) => {
  const [visible, setVisible] = useState(false);

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
            style={{ gridColumn: 3, color: "yellowgreen" }}
          >
            <MenuOutlined
              style={{ fontSize: 20, color: "" }}
              onClick={showDrawer}
            />
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
        width="70%"
      >
        <div className="home">
          <a href="/" className="a-home">
            {" "}
            <HomeOutlined /> Home
          </a>
        </div>
        <br />
        <Search
          placeholder="Search recipe by Title"
          onSearch={onSearch}
          enterButton="Filters"
          size="large"
        />
      </Drawer>
    </>
  );
};

export default Sidebar;
