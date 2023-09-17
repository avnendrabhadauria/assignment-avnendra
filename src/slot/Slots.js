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
  const deleteTask = (taskIndex, slotIndex) => {
    let newData = context?.data?.slice();
    let [dta] = newData?.slice(slotIndex, slotIndex + 1);

    let tsk = dta?.task?.slice();
    const { slot } = tsk.splice(taskIndex, 1);
    dta.timeCosumedByTasks = dta.timeCosumedByTasks - Number(slot);
    newData[slotIndex].task = tsk;
    context.updateLocalAndState(newData);
  };
  return (
    <div className="slots">
      {context?.data?.map((d, index) => (
        <Slot
          key={d + index}
          index={index}
          data={d}
          deleteItem={deleteItem}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Slots;
