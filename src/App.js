import "./App.scss";
import "./icons.scss";

import React, { useState } from "react";

import Context from "./context/UserContext";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./maincontainer/Main";
import { initialState } from "./constant";

function App(props) {
  const token = localStorage.getItem("token");
  const dataLocal = localStorage.getItem("dataLocal");

  const [data, setData] = useState(() => {
    if (dataLocal) {
      return JSON.parse(dataLocal);
    } else {
      return [];
    }
  });
  const [creds, setCreds] = useState(() => {
    if (token) {
      return JSON.parse(token);
    } else {
      return initialState;
    }
  });
  const { Provider } = Context;
  return (
    <Provider value={{ creds, setCreds, data, setData }}>
      <div className="app">
        <div className="container">
          <Header />
          <Main />
          {token && <Footer />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
