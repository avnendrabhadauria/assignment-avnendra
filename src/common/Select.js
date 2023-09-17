import "./style.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";
import { getvalues } from "../helper";

function Select({ onChange }) {
  const { data } = useContext(Context);
  const [, setToggle] = useState(true);
  const [value, setValue] = useState("");
  const { totaltimeCosumed } = getvalues(data);
  const onClick = (e) => {
    const slot = e?.target?.attributes?.value?.value;
    setValue(slot);
    onChange({ currentTarget: { name: "slot", value: slot } });
    setToggle((prevState) => !prevState);
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
      <div className="dropdown" onClick={onClick}>
        <div className="dropbtn">{value ? value : "Select Slots"}</div>
        {true && (
          <div className="dropdown-content">
            {filterData?.map(({ slot }, index) => (
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
