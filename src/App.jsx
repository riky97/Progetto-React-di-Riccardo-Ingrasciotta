import Recipes from "./component/Recipes";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import axios from "axios";

function App() {
  const [recipes, setRecipes] = useState([]);

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
    const res = await axios.get(`http://localhost:5000/recipe`);
    const data = await res.data;
    return data;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Recipes recipe={recipes} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
