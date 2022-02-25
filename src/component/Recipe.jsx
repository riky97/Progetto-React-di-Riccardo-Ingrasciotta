import { Card, Tooltip, Image } from "antd";
import { useState } from "react";

import Meta from "antd/lib/card/Meta";
import { SettingOutlined, EyeOutlined } from "@ant-design/icons";

const Recipe = ({ recipe }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={
        <a href={`/recipe/${recipe.id}`}>
          <img style={{ width: 280 }} alt="Recipe" src={recipe.image} />
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
        className="meta-title"
        title={
          <Tooltip
            placement="top"
            color={"#87d068"}
            key={"#87d068"}
            title={recipe.title}
          >
            <a href={`/recipe/${recipe.id}`} style={{ color: "#1a1a1a" }}>
              {recipe.title}
            </a>
          </Tooltip>
        }
      />
    </Card>
  );
};

export default Recipe;
