const mainState = { tickets: [] };

const ticketsReducer = (state = mainState, action) => {
  switch (action.type) {
    case "ImportList": {
      return {
        tickets: [...action.payload.list],
      };
    }

    default:
      return state;
  }
};

export default ticketsReducer;
