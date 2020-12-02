const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "SetFilter":
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
