import "./style.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";
import { getvalues } from "../helper";

function Select({ onChange, disabled }) {
  const { data } = useContext(Context);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  const { totaltimeCosumed } = getvalues(data);
  const toggilebtn = () => {
    !disabled && setToggle((prevState) => !prevState);
  };
  const onClick = (e) => {
    e.stopPropagation();

    const slot = e?.currentTarget?.attributes?.value?.value;
    setValue(slot);
    onChange({ currentTarget: { name: "slot", value: slot } });
    toggilebtn();
  };

  const filterData = data?.filter(({ slot, timeCosumedByTasks }) => {
    if (totaltimeCosumed < 480) {
      return true;
    } else {
      if (timeCosumedByTasks >= 30) {
        return false;
      } else return true;
    }
  });
  return (
    <div className="input-tag">
      <div className="dropdown 0" onClick={toggilebtn} aria-disabled={disabled}>
        <div className="dropbtn">{value ? value : "Select Slots"}</div>
        {toggle && (
          <div className="dropdown-content">
            {filterData?.map(({ slot }, index) => (
              <div key={slot + index} value={slot} onClick={onClick}>
                <p>{slot}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Select;
