import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import TicketList from "./components/TicketList";
import DetailedInfo from "./components/DetailedInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <TicketList />
        <Route path="/:ticketId" component={DetailedInfo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
