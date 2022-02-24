import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Breadcrumb, BackTop, Pagination } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { UpCircleOutlined } from "@ant-design/icons";

import Navbar from "./component/Navbar";
import FooterWeb from "./FooterWeb";
import Sidebar from "./component/Sidebar";
import useWindowDimensions from "./component/UseWindowDimensions";
import Recipes from "./component/Recipes";
import InformationRecipe from "./component/InformationRecipe";

const { Content, Footer, Header } = Layout;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const data = async () => {
      const res = await getRecipe();
      setLoading(!loading);
      setRecipes(res);
    };
    data();
  }, []);

  const getRecipe = async () => {
    //http://localhost:5000/tasks
    //https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian/&apiKey=${apiKey}
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=100&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
      );
      const data = await res.data;

      return data.results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout className="layout">
        {width <= 600 ? <Sidebar /> : <Navbar />}

        <Content
          style={width <= 992 ? { padding: "0 20px" } : { padding: "0 50px" }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
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
                  element={<InformationRecipe />}
                />
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
