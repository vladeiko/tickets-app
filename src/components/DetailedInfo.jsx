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
          <div className="detailed-info__header">
            <div className="ticket-num">
              TICKET NO.
              <span className="span-text">{currentTicket.number}</span>
            </div>
            <div className="updated-date">
              LAST UPDATED {currentTicket.lastUpdatedTime}
            </div>
          </div>

          <div className="info-block">
            <div className="info-block__title">Owner</div>
          </div>

          <div className="info-block">
            <div className="info-block__title">Details</div>
          </div>

          <div className="info-block">
            <div className="info-block__title">Asset</div>
          </div>
        </div>
      ) : (
        <Err404 />
      )}
    </div>
  );
};

export default DetailedInfo;
