import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import { List, Rate, Space, Collapse } from "antd";
import {
  UserOutlined,
  LikeOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import TableIngredient from "./TableIngredient";

import useWindowDimensions from "./UseWindowDimensions";

const apiKey = "e9a74a3703a74b43b3d8f2c5b3af6879";
const { Panel } = Collapse;

const InformationRecipe = () => {
  const [infoRecipe, setInfoRecipe] = useState([]);
  const [extendedIngredient, setExtendedIngredient] = useState([]);
  const { height, width } = useWindowDimensions();

  //set info recipe
  useEffect(() => {
    const info = async () => {
      const data = await getRecipeInformation();
      setInfoRecipe([data]);
      setExtendedIngredient(data.extendedIngredients);
      console.log(data);
      //return data;
    };
    info();
  }, []);

  // get information recipe from server
  const getRecipeInformation = async () => {
    const href = window.location.href;
    const idRecipe = href.substring(href.indexOf("recipe") + 7);

    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${idRecipe}/information/?apiKey=${apiKey}`
    );
    const data = res.data;
    return data;
  };

  //create icon for list
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  // collapse description
  const collapseDescription = (descr) => {
    return (
      <Collapse className="collapse-description" defaultActiveKey={["1"]}>
        <Panel
          className="collpase-description-panel"
          header="Description recipe"
          key="1"
        >
          <p>{descr}</p>
        </Panel>
      </Collapse>
    );
  };

  return (
    <>
      <List
        itemLayout="vertical"
        size="small"
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
            extra={<img width={272} alt="logo" src={item.image} />}
          >
            <List.Item.Meta title={item.title} />

            {width <= 600
              ? collapseDescription(parse(item.summary))
              : parse(item.summary)}
          </List.Item>
        )}
      />

      <TableIngredient extIngredient={extendedIngredient} />
    </>
  );
};

export default InformationRecipe;
