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
        <div className="logo">
          {" "}
          <h2>Vegetarian Recipe</h2>
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
            <HomeOutlined />{" "}
          </a>
        </div>
      </Menu>
    </Header>
  );
};

export default Navbar;
