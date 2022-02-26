import RecipeReducer from "./searchRecipe";
//import AllRecipeReducer from "./allRecipe";
import PathName from "./pathName";

import { combineReducers } from "redux";

const rooter = combineReducers({
  recipe: RecipeReducer,
  path: PathName,
});

export default rooter;
