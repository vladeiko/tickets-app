import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import TicketList from "./components/TicketList";
import DetailedInfo from "./components/DetailedInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-wrapper">
          <TicketList />
          <Route path="/:ticketId" component={DetailedInfo} />
          <Route path="/" component={DetailedInfo} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
