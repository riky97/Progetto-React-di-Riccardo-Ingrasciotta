const searchIngredientsReducer = (state = [], action) => {
  state.push(action.type);
  return state;
};
export default searchIngredientsReducer;
