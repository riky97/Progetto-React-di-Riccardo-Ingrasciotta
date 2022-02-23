import React from "react";
import { Layout, Menu, Input } from "antd";
import { HomeOutlined } from "@ant-design/icons";
const Header = Layout;
const { Search } = Input;

const Navbar = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Header className="d-grid">
      <Menu mode="horizontal" className="header">
        <div className="logo" style={{ fontSize: "1.5rem" }}>
          {" "}
          Vegetarian Recipe
        </div>
        <Search
          className="search-bar"
          placeholder="input search text"
          onSearch={onSearch}
          enterButton="Filters"
          size="large"
        />
        <div className="home">
          <a href="/" className="a-home">
            {" "}
            <HomeOutlined style={{ color: "#9cd590" }} />{" "}
          </a>
        </div>
      </Menu>
    </Header>
  );
};

export default Navbar;
