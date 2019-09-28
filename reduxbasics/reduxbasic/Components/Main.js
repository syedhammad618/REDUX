// import React from "react";

// export class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="row">
//           <div className="col-xs-12">
//             <h1>The Main Page</h1>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-xs-12">
//             <button
//               className="btn btn-primary"
//               onClick={() => this.props.changeUsername("Anna")}
//             >
//               Change the Username
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from "react";
export const Main = props => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-12">
          <h1>The Main Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <button
            className="btn btn-primary"
            onClick={() => props.changeUsername()}
          >
            Change the Username
          </button>
        </div>
      </div>
    </div>
  );
};
