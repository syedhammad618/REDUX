const inState = {
  name: "hammad",
  wishes: ["eat ","and ", "code"]
};

const reducer = (state = inState, action) => {
  if (action.type == "CHANGE_NAME") {
    return Object.assign(
      {},
      {
        name: action.payload
      }
    );
  }
  return state;
};

export default reducer;
