import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { importList } from "../actions/index";

const TicketList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json"
      )
      .then((res) => dispatch(importList(res.data)));
  });

  return (
    <div className="main-list">
      {/* find-bar */}
      {/* main-list__header (Owner Reported Asset Status) */}
    </div>
  );
};

export default TicketList;
