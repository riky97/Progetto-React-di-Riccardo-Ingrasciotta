import Recipes from "./component/Recipes";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Breadcrumb, BackTop } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import { UpCircleOutlined } from "@ant-design/icons";

import Navbar from "./component/Navbar";
import FooterWeb from "./FooterWeb";
import Sidebar from "./component/Sidebar";
import useWindowDimensions from "./component/UseWindowDimensions";

const { Content, Footer, Header } = Layout;
const apiKey = "e9a74a3703a74b43b3d8f2c5b3af6879";

function App() {
  const [recipes, setRecipes] = useState([]);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const data = async () => {
      const res = await getRecipe();
      //console.log(res);
      setRecipes(res);
    };
    data();
  }, []);

  const getRecipe = async () => {
    //http://localhost:5000/tasks
    //https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian/&apiKey=${apiKey}
    try {
      const res = await axios.get(`http://localhost:5000/recipe`);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout className="layout">
        {width <= 600 ? <Sidebar /> : <Navbar />}

        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Router>
              <Routes>
                <Route exact path="/" element={<Recipes recipe={recipes} />} />
              </Routes>
            </Router>
          </div>
        </Content>
        <FooterWeb />
      </Layout>
      <BackTop>
        <UpCircleOutlined className="back-top" />
      </BackTop>
    </>
  );
}

export default App;
