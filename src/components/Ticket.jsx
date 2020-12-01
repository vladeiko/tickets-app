import React from "react";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket-list-element" key={ticket.ticketId}>
      <div className="user-avatar">
        <img src={ticket.owner.avatar} className="avatar" />
      </div>
      <div className="reported">{ticket.reportedTime}</div>
      <div className="asset">{ticket.asset.name}</div>
      <div className="status">STA</div>
    </div>
  );
};

export default Ticket;
