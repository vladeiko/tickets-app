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
        <div>
          <div className="ticket-num">TICKET NO. {currentTicket.number}</div>
          <div className="last-updated">
            LAST UPDATED {currentTicket.lastUpdatedTime}
          </div>
          <div className="info-container"></div>
          <div className="info-container"></div>
          <div className="info-container"></div>
        </div>
      ) : null}
    </div>
  );
};

export default DetailedInfo;
