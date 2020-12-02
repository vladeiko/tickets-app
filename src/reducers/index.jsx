import ticketsReducer from "./tickets";
import filterReducer from "./filter";
import inputReducer from "./input";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  ticketsReducer,
  filterReducer,
  inputReducer,
});

export default allReducers;
