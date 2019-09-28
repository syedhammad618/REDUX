// import { createStore } from "redux";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       state = state + action.payload;
//       break;
//     case "SUBTRACT":
//       state = state - action.payload;
//       break;
//   }
//   return state;
// };
// const store = createStore(reducer, 1);

// store.subscribe(() => {
//   console.log("stored updated", store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 100
// });
// store.dispatch({
//   type: "ADD",
//   payload: 22
// });
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 3
// });

// import { createStore } from "redux";
// const initialState = {
//   result: 1,
//   lastValue: []
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       state = Object.assign({}, state, {
//         result: state.result + action.payload,
//         lastValue: [...state.lastValue, action.payload]
//       });

//       break;
//     case "SUBTRACT":
//       state = Object.assign({}, state, {
//         result: state.result - action.payload,
//         lastValue: [...state.lastValue, action.payload]
//       });

//       break;
//   }
//   return state;
// };
// const store = createStore(reducer);

// store.subscribe(() => {
//   console.log("stored updated", store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 100
// });
// store.dispatch({
//   type: "ADD",
//   payload: 22
// });
// store.dispatch({
//   type: "SUBTRACT",
//   payload: 3
// });

// import { createStore, combineReducers, applyMiddleware } from "redux";

// const mathReducer = (
//   state = {
//     result: 1,
//     lastValue: []
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "ADD":
//       state = Object.assign({}, state, {
//         result: state.result + action.payload,
//         lastValue: [...state.lastValue, action.payload]
//       });

//       break;
//     case "SUBTRACT":
//       state = Object.assign({}, state, {
//         result: state.result - action.payload,
//         lastValue: [...state.lastValue, action.payload]
//       });

//       break;
//   }
//   return state;
// };

// const userReducer = (
//   state = {
//     name: "Hammad",
//     age: 21
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "SET_NAME":
//       state = Object.assign({}, state, {
//         name: action.payload
//       });

//       break;
//     case "SET_AGE":
//       state = Object.assign({}, state, {
//         age: action.payload
//       });

//       break;
//   }
//   return state;
// };

// const store = createStore(
//   combineReducers({ mathReducer: mathReducer, userReducer: userReducer })
// );

// store.subscribe(() => {
//   console.log("stored updated", store.getState());
// });

// store.dispatch({
//   type: "ADD",
//   payload: 100
// });

// store.dispatch({
//   type: "SUBTRACT",
//   payload: 3
// });

// store.dispatch({
//   type: "SET_AGE",
//   payload: 3
// });
