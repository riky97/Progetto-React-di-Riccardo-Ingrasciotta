import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Breadcrumb, BackTop, message } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { UpCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

import Navbar from "./component/Navbar";
import FooterWeb from "./component/FooterWeb";
import Sidebar from "./component/Sidebar";
import useWindowDimensions from "./component/UseWindowDimensions";
import Recipes from "./component/Recipes";
import InformationRecipe from "./component/InformationRecipe";
import BreadcrumpTag from "./component/BreadcrumpTag";
import SearchRecipe from "./component/SearchRecipe";

const { Content } = Layout;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const data = async () => {
      const res = await getRecipe();
      setLoading(!loading);
      setRecipes(res);
    };
    data();
  }, []);

  const getRecipe = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=50&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
      );
      const data = await res.data;

      return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  //search title
  const onSearch = (value) => {
    if (value !== "") {
      window.location.href = `/search/${value}`;
    } else {
      message.error("No empty string!", [1]);
    }
  };

  const path = useSelector((state) => state.path);

  return (
    <>
      <Layout className="layout">
        {width <= 668 ? (
          <Sidebar onSearch={onSearch} />
        ) : (
          <Navbar onSearch={onSearch} />
        )}
        <Content
          style={width <= 992 ? { padding: "0 20px" } : { padding: "0 50px" }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <BreadcrumpTag path={path} recipes={recipes} />
          </Breadcrumb>
          <div className="site-layout-content">
            <Router>
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<Recipes loading={loading} recipe={recipes} />}
                />
                <Route
                  exact
                  path="/home"
                  element={<Recipes loading={loading} recipe={recipes} />}
                />

                <Route
                  exact
                  path="/recipe/:id"
                  element={<InformationRecipe loading={loading} />}
                />
                <Route exact path="/search/:id" element={<SearchRecipe />} />
              </Routes>
            </Router>
          </div>
        </Content>
        <FooterWeb />
      </Layout>
      <BackTop
        style={
          width <= 992 ? { bottom: 15, right: 20 } : { bottom: 15, right: 50 }
        }
      >
        <UpCircleOutlined className="back-top" />
      </BackTop>
    </>
  );
}

export default App;
