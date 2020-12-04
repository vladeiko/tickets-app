import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleStatus } from "../actions/index";

const Ticket = ({ ticket }: any) => {
  const dispatch = useDispatch();

  const status = () => {
    if (ticket.status === "assigned") return "ASD";

    if (ticket.status === "unassigned") return "UNA";

    if (ticket.status === "completed") return "COM";
  };

  const handleClick = () => {
    dispatch(toggleStatus(ticket.ticketId));
  };

  const reportedTime = new Date(ticket.reportedTime).toLocaleString("en-GB");

  return (
    <Link to={"/tickets/" + ticket.ticketId}>
      <div
        className={
          "ticket-list-element" + (ticket.isSelected ? " selected" : "")
        }
        key={ticket.ticketId}
        onClick={handleClick}
      >
        <div className="user-avatar">
          <img src={ticket.owner.avatar} className="avatar" />
        </div>
        <div className="reported">{reportedTime}</div>
        <div className="asset">{ticket.asset.name}</div>
        <div
          className={
            "status" +
            (status() === "ASD"
              ? " assigned"
              : status() === "UNA"
              ? " unassigned"
              : status() === "COM"
              ? " completed"
              : "")
          }
        >
          {status()}
        </div>
      </div>
    </Link>
  );
};

export default Ticket;
