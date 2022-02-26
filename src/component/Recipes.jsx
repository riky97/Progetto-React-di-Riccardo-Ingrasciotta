import React, { useEffect } from "react";
import { Row, Col, Table, List } from "antd";
import { useDispatch } from "react-redux";

import Recipe from "./Recipe";
import useWindowDimensions from "./UseWindowDimensions";

import { pathHome } from "../actions";

const Recipes = ({ loading, recipe }) => {
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pathHome());
  });

  return (
    <List
      grid={{
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 3,
        xxl: 4,
      }}
      loading={loading}
      pagination={{
        position: "top",
        className: "pagination-home",
        pageSize: width >= 1200 ? 20 : 10,
      }}
      dataSource={recipe}
      renderItem={(rec) => (
        <List.Item>
          <Recipe key={rec.id} recipe={rec} />
        </List.Item>
      )}
    />
  );
};

export default Recipes;
