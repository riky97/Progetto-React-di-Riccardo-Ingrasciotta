import React from "react";
import { Row, Col } from "antd";

import Recipe from "./Recipe";

const Recipes = ({ recipe }) => {
  return (
    <>
      <Row gutter={[8, 32]} align="middle" justify="center">
        {recipe.map((rec) => (
          <Col
            className="d-flex justify-content-center"
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
            xxl={{ span: 6 }}
            key={rec.id}
            span={8}
          >
            <Recipe key={rec.id} recipe={rec} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Recipes;
