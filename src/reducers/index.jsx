import SearchRecipeReducer from "./searchRecipe";
import PathNameReducer from "./pathName";

import { combineReducers } from "redux";

const rooter = combineReducers({
  title: SearchRecipeReducer,
  path: PathNameReducer,
});

export default rooter;
