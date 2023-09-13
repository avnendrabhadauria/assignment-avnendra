import "./main.scss";

import React, { useContext } from "react";

import Content from "../content/Content";
import Context from "../context/UserContext";
import Signin from "../signin/Signin";

function Main(props) {
  const context = useContext(Context);
  return (
    <div className="main">
      <div>{context?.creds.userName === "" ? <Signin /> : <Content />}</div>
    </div>
  );
}

export default Main;
