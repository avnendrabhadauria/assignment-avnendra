import "./header.scss";

import React, { useContext } from "react";

import Context from "../context/UserContext";
import { initialState } from "../constant";

function Header(props) {
  const context = useContext(Context);
  const clearData = () => {
    context?.setCreds(initialState);
    localStorage.clear();
  };

  return (
    <header className="header">
      {context?.creds.userName && (
        <div className="header-section">
          <h1> Hi {` ${context?.creds.userName.slice(0, 4)} !`}</h1>
          <button onClick={clearData}>Logout</button>
        </div>
      )}
    </header>
  );
}

export default Header;
