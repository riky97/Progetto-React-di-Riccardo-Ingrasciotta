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
    try {
      const href = window.location.href;
      const split = href.split("/");
      const title = split[split.length - 1];

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
