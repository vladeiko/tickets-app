import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { createStore, compose } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  document.getElementById("root")
);
