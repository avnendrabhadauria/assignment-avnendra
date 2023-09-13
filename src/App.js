import "./App.scss";
import "./icons.scss";

import React, { useState } from "react";

import Context from "./context/UserContext";
import Footer from "./footer/Footer";
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
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
