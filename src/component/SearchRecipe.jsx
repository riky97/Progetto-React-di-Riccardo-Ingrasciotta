import React, { useEffect, useState } from "react";
import { List } from "antd";
import axios from "axios";
import { pathSearch, searchTitle } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Recipe from "./Recipe";
import useWindowDimensions from "./UseWindowDimensions";

const SearchRecipe = ({ loading }) => {
  const { height, width } = useWindowDimensions();
  const [recipeTitle, setRecipeTitle] = useState([]);

  //https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&titleMatch=carrots&apiKey=${apiKey}
  const dispatch = useDispatch();
  useEffect(() => {
    const path = window.location.href;
    dispatch(searchTitle(path.substring(path.indexOf("search") + 7)));
    dispatch(pathSearch());
  });

  useEffect(() => {
    const data = async () => {
      const res = await getRecipeTitle();
      setRecipeTitle(res);
    };
    data();
  }, []);

  const getRecipeTitle = async () => {
    //http://localhost:5000/results
    //https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian/&apiKey=${apiKey}
    //https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&number=100&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}
    ///https://api.spoonacular.com/recipes/findByIngredients?ingredients=carrots&number=10&limitLicense=true&ranking=1&ignorePantry=false&diet=vegetarian&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}
    //https://api.spoonacular.com/food/ingredients/search?sortDirection=asc&offset=606&number=10&diet=vegetarian&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}
    try {
      const path = window.location.href;
      const title = path.substring(path.indexOf("search") + 7);
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&titleMatch=${title}&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
      );
      const data = await res.data;
      //return data;
      return data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
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
      dataSource={recipeTitle}
      renderItem={(rec) => (
        <List.Item>
          <Recipe key={rec.id} recipe={rec} />
        </List.Item>
      )}
    />
  );
};

export default SearchRecipe;
