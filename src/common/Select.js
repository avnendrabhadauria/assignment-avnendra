import "./style.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";

function Select({ onChange }) {
  const { data } = useContext(Context);
  const [, setToggle] = useState(true);
  const [value, setValue] = useState("");
  const onClick = (e) => {
    const slot = e?.target?.attributes?.value?.value;
    setValue(slot);
    onChange({ currentTarget: { name: "slot", value: slot } });
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="input-tag">
      <div className="dropdown" onClick={onClick}>
        <div className="dropbtn">{value ? value : "Select Slots"}</div>
        {true && (
          <div className="dropdown-content">
            {data?.map(({ slot }, index) => (
              <div key={slot + index} value={slot}>
                {slot}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
