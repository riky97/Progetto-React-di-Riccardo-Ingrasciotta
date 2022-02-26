const searchRecipeReducer = (state = "", action) => {
  switch (action.type) {
    case "TITLE":
      return (state = action.value);
    default:
      return state;
  }
};
export default searchRecipeReducer;
