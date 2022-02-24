import ingredientReducer from "./ingredients";

import { combineReducers } from "redux";

const rooter = combineReducers({
  ingredient: ingredientReducer,
});

export default rooter;
