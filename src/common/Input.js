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
  isDisabled = false,
}) {
  let input = (
    <div className="input-element">
      <label htmlFor={htmlFor} disable={isDisabled}>
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
        disabled={isDisabled}
      />
      {type === "number" && (
        <p className="max-count-p">max allowed: {max} mins</p>
      )}
    </div>
  );
  if (type === "dropdown") {
    input = (
      <div className="input-element" aria-disabled={isDisabled}>
        <label htmlFor={htmlFor}>
          <b>{label}</b>
        </label>
        <Select
          disabled={isDisabled}
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
