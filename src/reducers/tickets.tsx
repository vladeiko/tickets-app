import { TicketType } from "../types/types";

const mainState: { tickets: [TicketType?]; currentId: number } = {
  tickets: [],
  currentId: -1,
};

const ticketsReducer = (state = mainState, action: any) => {
  switch (action.type) {
    case "ImportList": {
      return {
        tickets: action.payload.list.map((item: TicketType) => ({
          ...item,
          isSelected: false,
        })),
        currentId: state.currentId,
      };
    }

    case "ToggleStatus": {
      const ticketId: number = state.tickets.findIndex(
        (ticket: any) => ticket.ticketId === action.payload
      );

      const currentList = [...state.tickets];

      currentList[ticketId].isSelected = !currentList[ticketId].isSelected;

      if (state.currentId > -1) {
        currentList[state.currentId].isSelected = !currentList[state.currentId]
          .isSelected;
      }
      return {
        tickets: currentList,
        currentId: ticketId,
      };
    }

    default:
      return state;
  }
};

export default ticketsReducer;
