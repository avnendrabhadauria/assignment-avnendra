import React, { useContext } from "react";

import Context from "../context/UserContext";
import Slot from "./Slot";

function Slots() {
  const context = useContext(Context);
  const deleteItem = (index) => {
    let newData = context?.data?.slice();
    newData?.splice(index, 1);
    context.updateLocalAndState(newData);
  };
  return (
    <div className="slots">
      {context?.data?.map((d, index) => (
        <Slot key={d + index} index={index} data={d} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default Slots;
