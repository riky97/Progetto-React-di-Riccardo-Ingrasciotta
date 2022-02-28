import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

import { List, Rate, Space, Collapse } from "antd";
import { useDispatch } from "react-redux";

import { UserOutlined, FieldTimeOutlined } from "@ant-design/icons";
import TableIngredient from "./TableIngredient";

import useWindowDimensions from "./UseWindowDimensions";

import { pathInformation } from "../actions";

const { Panel } = Collapse;

const InformationRecipe = () => {
  const [infoRecipe, setInfoRecipe] = useState([]);
  const [extendedIngredient, setExtendedIngredient] = useState([]);
  const [loading, setLoading] = useState(true);
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  //set info recipe
  useEffect(() => {
    const info = async () => {
      const data = await getRecipeInformation();
      setInfoRecipe([data]);
      setExtendedIngredient(data.extendedIngredients);
      setLoading(!loading);
      dispatch(pathInformation());
      //return data;
    };
    info();
  }, []);

  // get information recipe from server
  const getRecipeInformation = async () => {
    const href = window.location.href;
    const split = href.split("/");
    const idRecipe = split[split.length - 1];

    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${idRecipe}/information/?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
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
        loading={loading}
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

      <TableIngredient loading={loading} extIngredient={extendedIngredient} />
    </>
  );
};

export default InformationRecipe;
