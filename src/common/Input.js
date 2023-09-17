import "./style.scss";

import React from "react";
import Select from "./Select";

function Input({
  type = "text",
  placeholder = "Enter Username",
  name = "uname",
  required = false,
  htmlFor,
  label,
  value = "",
  onChange = () => {},
  min,
  max,
}) {
  let input = (
    <div className="input-element">
      <label htmlFor={htmlFor}>
        <b>{label}</b>
      </label>
      <input
        min={min}
        max={max}
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
  if (type === "dropdown") {
    input = (
      <div className="input-element">
        <label htmlFor={htmlFor}>
          <b>{label}</b>
        </label>
        <Select
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
  return input;
}

export default Input;
