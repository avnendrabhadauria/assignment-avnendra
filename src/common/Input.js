import "./style.scss";

import React from "react";

function Input({
  type = "text",
  placeholder = "Enter Username",
  name = "uname",
  required = false,
  htmlFor,
  label,
  value = "",
  onChange = () => {},
}) {
  return (
    <div className="input-element">
      <label htmlFor={htmlFor}>
        <b>{label}</b>
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required={required}
        className="input-tag"
      />
    </div>
  );
}

export default Input;
