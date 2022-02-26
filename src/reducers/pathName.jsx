const PathNameReducer = (state = "home", action) => {
  switch (action.type) {
    case "HOME":
      return (state = "home");
    case "INFORMATION":
      return (state = "information");
    case "SEARCH":
      return (state = "search");
    default:
      return state;
  }
};
export default PathNameReducer;
