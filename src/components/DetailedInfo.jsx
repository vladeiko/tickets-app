import { useSelector } from "react-redux";
import Err404 from "./404";

const DetailedInfo = (props) => {
  const ticketList = useSelector((state) => state.ticketsReducer.tickets);
  let currentTicket = ticketList.find(
    (item) => item.ticketId.toString() === props.match.params.ticketId
  );

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
              LAST UPDATED {currentTicket.lastUpdatedTime}
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
              <div className="grey-text">{currentTicket.reportedTime}</div>
            </div>
            <div className="info-part">
              <div className="dark-grey-text">Status</div>
              <div className="grey-text">{currentTicket.status}</div>
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
                <span className="location">{currentTicket.asset.kmFrom}</span>
                <span className="location">{currentTicket.asset.kmTo}</span>
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
