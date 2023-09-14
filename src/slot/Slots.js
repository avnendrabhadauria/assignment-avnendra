import React, { useContext } from "react";

import Context from "../context/UserContext";
import Slot from "./Slot";

function Slots() {
  const context = useContext(Context);

  return (
    <div className="slots">
      {context?.data?.map((d, index) => (
        <Slot key={d + index} index={index} data={d} />
      ))}
    </div>
  );
}

export default Slots;
