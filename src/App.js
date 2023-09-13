import "./App.scss";

import React, { useState } from "react";

import Context from "./context/UserContext";
import Header from "./header/Header";
import Main from "./maincontainer/Main";
import { initialState } from "./constant";

function App(props) {
  const data = localStorage.getItem("token");
  const [creds, setCreds] = useState(() => {
    if (data) {
      return JSON.parse(data);
    } else {
      return initialState;
    }
  });
  const { Provider } = Context;
  return (
    <Provider value={{ creds, setCreds }}>
      <div className="app">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
