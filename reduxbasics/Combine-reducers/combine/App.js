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
import { anotherWish } from "./Action/Myaction";

function App(props) {
  console.log(props);
  const list = props.mywish.map(item => {
    return <p key={Math.random()}>{item}</p>;
  });
  return (
    <div>
      Redux
      <h1>my name catch from redux is:{props.myname}</h1>
      <h1>{list}</h1>
      <button
        onClick={() => {
          props.changeName();
        }}
      >
        change it
      </button>
      <br></br>
      <button
        onClick={() => {
          props.changeWish(Math.random());
        }}
      >
        Addwish
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    myname: state.name,
    mywish: state.wish
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeName: () => {
      dispatch(anotherName());
    },
    changeWish: wish => {
      dispatch(anotherWish(wish));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
