// export const anotherName = name => {
//   return {
//     type: "CHANGE_NAME",
//     payload: name
//   };
// };

// ====FOR FETCHING======

export const anotherName = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res2 => {
        dispatch({
          type: "CHANGE_NAME",
          payload: res2[0].name
        });
      });
  };
};

export const anotherWish = wish => {
  return {
    type: "ADD_WISH",
    payload: wish
  };
};
