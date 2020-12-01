import { useSelector } from "react-redux";
import Err404 from "./404";

const DetailedInfo = (props) => {
  const ticketList = useSelector((state) => state.ticketsReducer.tickets);
  let currentTicket = ticketList.find(
    (item) => item.ticketId.toString() === props.match.params.ticketId
  );

  return (
    <div className="detailed-info-container">
      {currentTicket ? (
        <div className="detailed-info">
          <div className="ticket-num">TICKET NO. {currentTicket.number}</div>
          <div className="last-updated">
            LAST UPDATED {currentTicket.lastUpdatedTime}
          </div>
        </div>
      ) : (
        <Err404 />
      )}
    </div>
  );
};

export default DetailedInfo;
