const pathName = (state = "home", action) => {
  switch (action.type) {
    case "home":
      state = "home";
      break;
    case "information":
      state = "information";
      break;
    case "searchTitle":
      state = "searchTitle";
      break;
    default:
      return state;
  }
  return state;
};
export default pathName;
