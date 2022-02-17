import React from "react";
import { Card, Tooltip } from "antd";

import Meta from "antd/lib/card/Meta";
import { SettingOutlined } from "@ant-design/icons";

const Recipe = ({ recipe }) => {
  return (
    <a href={`/recipe/${recipe.id}`}>
      <Card
        style={{ width: 300, cursor: "pointer" }}
        cover={<img alt="example" src={recipe.image} />}
        actions={[<SettingOutlined key="setting" />]}
      >
        <Meta
          title={
            <Tooltip
              placement="top"
              color={"#87d068"}
              key={"#87d068"}
              title={recipe.title}
            >
              {recipe.title}
            </Tooltip>
          }
          description="This is the description"
        />
      </Card>
    </a>
  );
};

export default Recipe;
