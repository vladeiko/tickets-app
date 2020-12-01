const mainState = { tickets: [] };

const ticketsReducer = (state = mainState, action) => {
  switch (action.type) {
    case "ImportList": {
      console.log(action.payload);
      return action.payload.list;
    }

    default:
      return state;
  }
};

export default ticketsReducer;
