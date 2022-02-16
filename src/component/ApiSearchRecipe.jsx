import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const ApiSearchRecipe = () => {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    const data = async () => {
      const res = await getRecipe();
      console.log(res);
      setRecipe([...res]);
    };
    data();
  });
  console.log("ccs");
  const getRecipe = async () => {
    const res = await axios.get(
      "https://api.spoonacular.com/recipes/information?apiKey=b15934b87b68488c9aa1d10cc6068159&complexSearch?query=pasta&maxFat=25&number=2"
    );
    const data = await res.data;
    return data;
  };
  return <div>ApiSearchRecipe</div>;
};

export default ApiSearchRecipe;
