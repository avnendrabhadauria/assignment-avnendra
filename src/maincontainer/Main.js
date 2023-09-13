import "./main.scss";

import React from "react";
import Signin from "../signin/Signin";

function Main(props) {
  return (
    <div className="main">
      <div>
        <Signin />
      </div>
    </div>
  );
}

export default Main;
