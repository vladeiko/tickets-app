const inputReducer = (state: string = "", action: any) => {
  switch (action.type) {
    case "SetInputValue":
      return action.payload;
    default:
      return state;
  }
};

export default inputReducer;
