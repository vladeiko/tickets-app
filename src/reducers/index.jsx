import ticketsReducer from "./tickets";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ticketsReducer,
});

export default allReducers;
