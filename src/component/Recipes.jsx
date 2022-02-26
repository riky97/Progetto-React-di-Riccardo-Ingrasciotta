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

// if (document.getElementsByClassName("horizontal-scroll").length > 0) {
//   (function () {
//     Array.prototype.forEach.call(
//       document.getElementsByClassName("horizontal-scroll"),
//       function (element) {
//         function scrollHorizontally(e) {
//           e = window.event || e;
//           var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
//           element.scrollLeft -= delta * 80; // Multiplied by 40
//           e.preventDefault();
//         }

//         if (element.addEventListener) {
//           element.addEventListener("mousewheel", scrollHorizontally, false); // IE9, Chrome, Safari, Opera
//           element.addEventListener(
//             "DOMMouseScroll",
//             scrollHorizontally,
//             false
//           ); // Firefox
//         } else {
//           element.attachEvent("onmousewheel", scrollHorizontally); // IE 6/7/8
//         }
//       }
//     );
//   })();
// }

/* <Table
        columns={4}
        pagination={{ position: ["bottomCenter"] }}
        dataSource={recipe.map((rec) => (
          <Recipe key={rec.id} recipe={rec} />
        ))}
      /> */
/* <h1>TOP {recipe.length} Vegetarian Recipes</h1>
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
      </Row> */
/* <section>
        <h1>TOP {recipe.length} Vegetarian Recipes (scroll)</h1>
        <section className="horizontal-scroll">
          <div className="row">
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
          </div>
        </section>
      </section> */

//OR
// const Recipes = ({ recipe }) => {
//   return (
//     <ScrollMenu
//       LeftArrow={LeftArrow}
//       RightArrow={RightArrow}
//       options={{
//         ratio: 0.9,
//         rootMargin: "5px",
//         threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
//       }}
//     >
//       {recipe.map((rec) => (
//         <Recipe key={rec.id} itemId={rec.id} recipe={rec} />
//       ))}
//     </ScrollMenu>
//   );
// };
