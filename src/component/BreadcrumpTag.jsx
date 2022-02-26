import React from "react";
import { Breadcrumb, Tag } from "antd";
import { useSelector } from "react-redux";

const BreadcrumpTag = ({ path, recipes }) => {
  const title = useSelector((state) => state.title);
  const color = [
    "magenta",
    "gold",
    "volcano",
    "lime",
    "green",
    "cyan",
    "geekblue",
    "purple",
  ];

  const pathName = (path) => {
    if (path === "home") {
      return (
        <Breadcrumb.Item>
          <Tag
            color={color[Math.floor(Math.random() * color.length)]}
            className="breadcrump-item-tag"
          >
            TOP {recipes.length} vegetarian recipes
          </Tag>
        </Breadcrumb.Item>
      );
    }
    if (path === "information") {
      return (
        <Breadcrumb.Item>
          <Tag
            color={color[Math.floor(Math.random() * color.length)]}
            className="breadcrump-item-tag"
          >
            Information recipe
          </Tag>
        </Breadcrumb.Item>
      );
    }
    if (path === "search") {
      return (
        <Breadcrumb.Item>
          <Tag
            color={color[Math.floor(Math.random() * color.length)]}
            className="breadcrump-item-tag"
          >
            Search by :{" "}
            {<span style={{ textTransform: "lowercase" }}>{title}</span>}
          </Tag>
        </Breadcrumb.Item>
      );
    }
  };

  return pathName(path);
};

export default BreadcrumpTag;
