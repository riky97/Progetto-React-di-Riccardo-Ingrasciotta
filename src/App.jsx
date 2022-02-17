import Recipes from "./component/Recipes";
import { useEffect, useState } from "react";
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
      <h1>hello world!</h1>
      <Recipes recipe={recipes} />
    </div>
  );
}

export default App;
