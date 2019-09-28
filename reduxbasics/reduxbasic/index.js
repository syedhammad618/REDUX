import React from "react";
import ReactDOM from "react-dom";
import App from "./Container.js/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const mathReducer = (
  state = {
    result: 1,
    lastValue: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = Object.assign({}, state, {
        result: state.result + action.payload,
        lastValue: [...state.lastValue, action.payload]
      });

      break;
    case "SUBTRACT":
      state = Object.assign({}, state, {
        result: state.result - action.payload,
        lastValue: [...state.lastValue, action.payload]
      });

      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: "Hammad",
    age: 21
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = Object.assign({}, state, {
        name: action.payload
      });

      break;
    case "SET_AGE":
      state = Object.assign({}, state, {
        age: action.payload
      });

      break;
  }
  return state;
};

const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer })
);

store.subscribe(() => {
  console.log("stored updated", store.getState());
});

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
);
