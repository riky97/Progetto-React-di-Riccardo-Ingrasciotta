import React from "react";
import { Row, Col } from "antd";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";

import Recipe from "./Recipe";

const Recipes = ({ recipe }) => {
  if (document.getElementsByClassName("horizontal-scroll").length > 0) {
    (function () {
      Array.prototype.forEach.call(
        document.getElementsByClassName("horizontal-scroll"),
        function (element) {
          function scrollHorizontally(e) {
            e = window.event || e;
            var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
            element.scrollLeft -= delta * 80; // Multiplied by 40
            e.preventDefault();
          }

          if (element.addEventListener) {
            element.addEventListener("mousewheel", scrollHorizontally, false); // IE9, Chrome, Safari, Opera
            element.addEventListener(
              "DOMMouseScroll",
              scrollHorizontally,
              false
            ); // Firefox
          } else {
            element.attachEvent("onmousewheel", scrollHorizontally); // IE 6/7/8
          }
        }
      );
    })();
  }
  return (
    <>
      <h1>TOP {recipe.length} Vegetarian Recipes</h1>
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
      {/* <section>
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
      </section> */}
    </>
  );
};

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

export default Recipes;
