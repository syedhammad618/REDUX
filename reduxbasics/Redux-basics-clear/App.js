// import React from "react";
// import { connect } from "react-redux";

// function App(props) {
//   console.log(props);

//   return (
//     <div>
//       Redux
//       <h1>my name catch from redux is:{props.myname}</h1>
//       <button
//         onClick={() => {
//           props.changeName("maadi");
//         }}
//       >
//         change it
//       </button>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     myname: state.name
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     changeName: name => {
//       dispatch({
//         type: "CHANGE_NAME",
//         payload: name
//       });
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

// ===========MAKING SEPERATE ACTION IN FOLDER
// import React from "react";
// import { connect } from "react-redux";
// import { anotherName } from "./Action/Myaction";

// function App(props) {
//   console.log(props);

//   return (
//     <div>
//       Redux
//       <h1>my name catch from redux is:{props.myname}</h1>
//       <h2>WISHES ARE:{props.wishes}</h2>
//       <button
//         onClick={() => {
//           props.changeName("maadi");
//         }}
//       >
//         change it
//       </button>
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     myname: state.name,
//     wishes: state.wishes
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     changeName: name => {
//       dispatch(anotherName(name));
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

// =======FOR FETCHING======
import React from "react";
import { connect } from "react-redux";
import { anotherName } from "./Action/Myaction";

function App(props) {
  console.log(props);

  return (
    <div>
      Redux
      <h1>my name catch from redux is:{props.myname}</h1>
      <h2>WISHES ARE:{props.wishes}</h2>
      <button
        onClick={() => {
          props.changeName();
        }}
      >
        change it
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    myname: state.name,
    wishes: state.wishes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: () => {
      dispatch(anotherName());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
