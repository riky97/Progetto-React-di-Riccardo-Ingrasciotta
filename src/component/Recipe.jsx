import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Recipe = (props) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={props.recipe.image} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={props.recipe.title} description="This is the description" />
    </Card>
  );
};

export default Recipe;
