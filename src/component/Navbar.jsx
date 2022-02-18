import React from "react";
import { Layout, Menu, Input } from "antd";
const Header = Layout;
const { Search } = Input;

const Navbar = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Header>
      <div className="logo" />
      <Menu mode="horizontal" className="d-flex justify-content-center header">
        <Search
          style={{ maxWidth: "40%" }}
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          size="large"
        />
      </Menu>
    </Header>
  );
};

export default Navbar;
