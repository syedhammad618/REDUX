// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducer from "./reducers/Reducers";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// var mountNode = document.getElementById("app");
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   mountNode
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers/Reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
