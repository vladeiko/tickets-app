import { useSelector } from "react-redux";
import Err404 from "./404";

const DetailedInfo = (props) => {
  const ticketList = useSelector((state) => state.ticketsReducer.tickets);

  const currentTicket = ticketList
    ? ticketList.find(
        (item) => item.ticketId.toString() === props.match.params.ticketId
      )
    : null;

  const status = () => {
    if (currentTicket.status === "assigned") return "ASD";

    if (currentTicket.status === "unassigned") return "UNA";

    if (currentTicket.status === "completed") return "COM";
  };

  // const lastUpdatedTime = new Date(
  //   currentTicket.lastUpdatedTime
  // ).toLocaleString("en-GB");

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
              LAST UPDATED{" "}
              {new Date(currentTicket.lastUpdatedTime).toLocaleString("en-GB")}
            </div>
          </div>

          <div className="info-block">
            <div className="info-block__title">Owner</div>
            <div className="info-container">
              <img className="info-ava" src={currentTicket.owner.avatar}></img>
              <div className="owner-description">
                <div className="text-grey">
                  {currentTicket.owner.firstName +
                    " " +
                    currentTicket.owner.lastName}
                </div>
                <div className="text-grey__comment">
                  {currentTicket.owner.specialities}
                </div>
              </div>
            </div>
          </div>

          <div className="info-block">
            <div className="info-block__title">Details</div>
            <div className="info-part">
              <div className="dark-grey-text">Reported</div>
              <div className="grey-text">
                {new Date(currentTicket.reportedTime).toLocaleString("en-GB")}
              </div>
            </div>
            <div className="info-part">
              <div className="dark-grey-text">Status</div>
              <div className={"status " + currentTicket.status}>{status()}</div>
            </div>
            <div className="info-part">
              <div className="dark-grey-text">Description</div>
              <div className="grey-text">{currentTicket.description}</div>
            </div>
          </div>

          <div className="info-block">
            <div className="info-block__title">Asset</div>
            <div className="info-part">
              <div className="dark-grey-text">Name</div>
              <div className="grey-text">{currentTicket.asset.name}</div>
            </div>
            <div className="info-part">
              <div className="dark-grey-text">GeoCode</div>
              <div className="grey-text">{currentTicket.asset.geoCode}</div>
            </div>
            <div className="info-part">
              <div className="dark-grey-text">Location</div>
              <div className="grey-text">
                <p className="location">{currentTicket.asset.kmFrom}</p>
                <p className="location">{currentTicket.asset.kmTo}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Err404 />
      )}
    </div>
  );
};

export default DetailedInfo;
