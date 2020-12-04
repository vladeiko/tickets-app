import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { importList } from "../actions/index";
import Ticket from "./Ticket";
import FindBar from "./FindBar";

const TicketList = () => {
  const dispatch = useDispatch();

  const list = useSelector((state: any) => state.ticketsReducer.tickets);
  const filter = useSelector((state: any) => state.filterReducer);

  const currentList = list.filter((ticket: any) =>
    (ticket.owner.firstName + " " + ticket.owner.lastName).includes(filter)
  );

  useEffect(() => {
    const imporTicketList = async () => {
      const { data } = await axios.get("http://localhost:3001/posts/");
      dispatch(importList(data));
    };
    imporTicketList();
  }, [dispatch]);

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
          currentList.map((ticket: any) => (
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
