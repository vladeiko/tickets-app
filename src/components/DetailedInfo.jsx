import React, { useEffect } from "react";
import { useSelector } from "react-redux";

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
        <div className="detailed-info-container">
          <div className="detailed-info">
            <div className="no-selected">No ticket selected</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedInfo;
