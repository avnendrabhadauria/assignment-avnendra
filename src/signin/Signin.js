import "./signin.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";
import Input from "../common/Input";
import { initialState } from "../constant";

function Signin(props) {
  const [creds, setCreds] = useState(initialState);

  const context = useContext(Context);

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", JSON.stringify(creds));
    context?.setCreds(creds);
    setCreds(initialState);
    const logalData = JSON.parse(localStorage.getItem("dataLocal")) ?? [];
    context?.setData(logalData);
  };
  const onChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCreds((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="signin">
      <form>
        <div>
          <Input
            type="text"
            placeholder="Enter username"
            name="userName"
            required={true}
            label="Username"
            htmlFor="user_name"
            value={creds?.userName}
            onChange={onChange}
          />

          <Input
            type="password"
            placeholder="Enter password"
            name="password"
            required={true}
            label="Password"
            htmlFor="user_password"
            value={creds?.password}
            onChange={onChange}
          />
          <div className="btn-form">
            <button
              disabled={creds?.password === "" || creds?.userName === ""}
              onClick={submit}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signin;
