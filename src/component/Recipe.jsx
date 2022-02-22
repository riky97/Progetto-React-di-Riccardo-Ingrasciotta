import { Card, Tooltip, Image } from "antd";
import { useState } from "react";

import Meta from "antd/lib/card/Meta";
import { SettingOutlined, EyeOutlined } from "@ant-design/icons";

const Recipe = ({ recipe }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <a href={`/recipe/${recipe.id}`}>
          <img style={{ width: 300 }} alt="Recipe" src={recipe.image} />
        </a>
      }
      actions={[
        <EyeOutlined onClick={() => setVisible(true)} />,
        <a href={`/recipe/${recipe.id}`}>
          <SettingOutlined key="setting" />
        </a>,
      ]}
    >
      <Image
        style={{ display: "none" }}
        preview={{
          visible,
          src: recipe.image,
          onVisibleChange: (value) => {
            setVisible(value);
          },
        }}
      />
      <Meta
        title={
          <Tooltip
            placement="top"
            color={"#87d068"}
            key={"#87d068"}
            title={recipe.name}
          >
            {recipe.name}
          </Tooltip>
        }
      />
    </Card>
  );
};

export default Recipe;
