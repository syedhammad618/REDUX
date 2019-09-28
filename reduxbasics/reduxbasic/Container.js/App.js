// import React from "react";
// import Main from "../Components/Main";
// import User from "../Components/User";
// import { connect } from "react-redux";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <Main changeUsername={() => this.props.setName("Maadi")} />
//         <User username={this.props.user.name} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     math: state.math
//   };
// };
// const mapdispatchToProps = dispatch => {
//   return {
//     setName: name => {
//       dispatch({
//         type: "SET_NAME",
//         payload: name
//       });
//     }
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapdispatchToProps
// )(App);

import React from "react";
import { Main } from "../Components/Main";
import { User } from "../Components/User";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main changeUsername={() => this.props.setName("Maadi")} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    math: state.math
  };
};
const mapdispatchToProps = dispatch => {
  return {
    setName: name => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapdispatchToProps
)(App);
