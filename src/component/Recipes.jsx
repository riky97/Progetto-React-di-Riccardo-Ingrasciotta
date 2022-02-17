import React from "react";

import Recipe from "./Recipe";
const apiKey = "e9a74a3703a74b43b3d8f2c5b3af6879";

const Recipes = ({ recipe }) => {
  return (
    <>
      {recipe.map((rec) => (
        <Recipe key={parseInt(rec.id)} recipe={rec} />
      ))}
    </>
  );
};

export default Recipes;
