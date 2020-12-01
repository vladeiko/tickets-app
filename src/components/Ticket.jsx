import React from "react";
import { Link } from "react-router-dom";

const Ticket = ({ ticket }) => {
  return (
    <Link to={"/tickets/" + ticket.ticketId}>
      <div className="ticket-list-element" key={ticket.ticketId}>
        <div className="user-avatar">
          <img src={ticket.owner.avatar} className="avatar" />
        </div>
        <div className="reported">{ticket.reportedTime}</div>
        <div className="asset">{ticket.asset.name}</div>
        <div className="status">STA</div>
      </div>
    </Link>
  );
};

export default Ticket;
