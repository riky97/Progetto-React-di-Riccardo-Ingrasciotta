import React from "react";
import { Breadcrumb, Tag } from "antd";

const BreadcrumpTag = ({ ingredients, recipes }) => {
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

  return ingredients.length > 1 ? (
    <Breadcrumb.Item className="breadcrump-item">
      Filter by: {ingredients}
    </Breadcrumb.Item>
  ) : (
    <Breadcrumb.Item>
      <Tag
        color={color[Math.floor(Math.random() * color.length)]}
        className="breadcrump-item-tag"
      >
        ALL {recipes.length} vegetarian recipes
      </Tag>
    </Breadcrumb.Item>
  );
};

export default BreadcrumpTag;
