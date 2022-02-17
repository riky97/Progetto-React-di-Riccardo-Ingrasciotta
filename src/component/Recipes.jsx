import React from "react";
import { Row, Col, Slider } from "antd";

import Recipe from "./Recipe";
const apiKey = "e9a74a3703a74b43b3d8f2c5b3af6879";

const Recipes = ({ recipe }) => {
  return (
    <>
      <Row gutter={[8, 32]}>
        {recipe.map((rec) => (
          <Col span={8}>
            <Recipe key={rec.id} recipe={rec} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
