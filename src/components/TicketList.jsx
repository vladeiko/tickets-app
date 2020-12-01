import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { importList } from "../actions/index";
import Ticket from "./Ticket";

const TicketList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.ticketsReducer.tickets);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
      )
      .then((res) => dispatch(importList(res.data)));
  }, []);

  return (
    <div className="main-list">
      {/* find-bar */}
      <div className="main-list-header">
        <div className="header-text">OWNER</div>
        <div className="header-text">REPORTED</div>
        <div className="header-text">ASSET</div>
        <div className="header-text">STATUS</div>
      </div>
      {/* List of elements */}
      <div className="tickets-list">
        {list ? (
          list.map((ticket) => <Ticket ticket={ticket} />)
        ) : (
          <div>No items</div>
        )}
      </div>
    </div>
  );
};

export default TicketList;
