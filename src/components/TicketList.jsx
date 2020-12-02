import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { importList } from "../actions/index";
import Ticket from "./Ticket";
import FindBar from "./FindBar";

const TicketList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.ticketsReducer.tickets);
  const filter = useSelector((state) => state.filterReducer);

  const currentList = list.filter((ticket) =>
    (ticket.owner.firstName + " " + ticket.owner.lastName).includes(filter)
  );

  useEffect(async () => {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
    );
    dispatch(importList(data));
  }, []);

  return (
    <div className="main-list">
      <FindBar />
      <div className="tickets-list">
        <div className="main-list-header">
          <div className="header-text">OWNER</div>
          <div className="header-text">REPORTED</div>
          <div className="header-text">ASSET</div>
          <div className="header-text">STATUS</div>
        </div>
        {currentList ? (
          currentList.map((ticket) => (
            <Ticket ticket={ticket} key={ticket.ticketId} />
          ))
        ) : (
          <div>No items</div>
        )}
      </div>
    </div>
  );
};

export default TicketList;
