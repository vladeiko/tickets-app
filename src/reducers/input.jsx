const inputReducer = (state = "", action) => {
  switch (action.type) {
    case "SetInputValue":
      return action.payload;
    default:
      return state;
  }
};

export default inputReducer;
