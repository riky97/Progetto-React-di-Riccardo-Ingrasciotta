import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import { List, Rate, Space } from "antd";
import {
  UserOutlined,
  LikeOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
const apiKey = "e9a74a3703a74b43b3d8f2c5b3af6879";

const InformationRecipe = () => {
  const [infoRecipe, setInfoRecipe] = useState([]);
  useEffect(() => {
    const info = async () => {
      const data = await getRecipeInformation();
      setInfoRecipe([data]);
      console.log(data);
      //return data;
    };
    info();
  }, []);
  const getRecipeInformation = async () => {
    const href = window.location.href;
    const idRecipe = href.substring(href.indexOf("recipe") + 7);

    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${idRecipe}/information/?apiKey=${apiKey}`
    );
    const data = res.data;
    return data;
  };
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={infoRecipe}
      renderItem={(item) => (
        <List.Item
          key={item.id}
          actions={[
            <Rate
              disabled
              defaultValue={item.aggregateLikes}
              key="list-vertical-star-rate"
              style={{ color: "#000" }}
            />,
            <IconText
              icon={UserOutlined}
              text={item.servings}
              key="list-vertical-servings-o"
            />,
            <IconText
              icon={FieldTimeOutlined}
              text={item.readyInMinutes + " min"}
              key="list-vertical-during"
            />,
          ]}
          extra={<img width={350} alt="logo" src={item.image} />}
        >
          <List.Item.Meta title={item.title} />
          {parse(item.summary)}
        </List.Item>
      )}
    />
  );
};

export default InformationRecipe;
