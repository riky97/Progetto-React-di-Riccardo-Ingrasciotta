import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Breadcrumb, BackTop } from "antd";
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
      //console.log(res);
      //dispatch(allRecipe(res));
    };
    data();
  }, []);

  const getRecipe = async () => {
    //http://localhost:5000/results
    //https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian/&apiKey=${apiKey}
    //https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=100&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}
    ///https://api.spoonacular.com/recipes/findByIngredients?ingredients=carrots&number=10&limitLicense=true&ranking=1&ignorePantry=false&diet=vegetarian&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}
    //https://api.spoonacular.com/food/ingredients/search?sortDirection=asc&offset=606&number=10&diet=vegetarian&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}
    try {
      const res = await axios.get(`http://localhost:5000/results`);
      const data = await res.data;
      return data;
      //return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const ingredients = useSelector((state) => state.recipe);

  return (
    <>
      <Layout className="layout">
        {width <= 668 ? <Sidebar /> : <Navbar />}
        <Content
          style={width <= 992 ? { padding: "0 20px" } : { padding: "0 50px" }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <BreadcrumpTag ingredients={ingredients} recipes={recipes} />
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
