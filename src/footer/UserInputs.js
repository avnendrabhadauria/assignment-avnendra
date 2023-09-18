import "./userinput.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";
import Input from "../common/Input";
import { getvalues } from "../helper";

function UserInputs({ toggle, initialTime }) {
  const [max, setMax] = useState(initialTime);
  const [taskItem, setTaskItem] = useState({
    description: "",
    time: 0,
    slot: "",
  });

  const {
    data,
    updateLocalAndState,
    creds: { totalTime },
  } = useContext(Context);
  const { totaltimeCosumed } = getvalues(data);

  const add = (e) => {
    e.preventDefault();
    let newData = JSON.parse(JSON.stringify(data));
    newData?.forEach((d) => {
      if (taskItem.slot === d.slot) {
        d.task.push(taskItem);
        d.timeCosumedByTasks += Number(taskItem?.time);
      }
    });

    updateLocalAndState(newData);
    toggle();
  };

  const onChange = ({ currentTarget }) => {
    let { name, value } = currentTarget;
    if (name === "slot") {
      const { mintimeOccupied, timeCosumedByTasks } = data?.filter(
        (d) => d.slot === value
      )?.[0];

      const leftTimeforSlot = totalTime - totaltimeCosumed;
      if (timeCosumedByTasks > mintimeOccupied) {
        setMax(leftTimeforSlot);
      } else {
        setMax(mintimeOccupied - timeCosumedByTasks + leftTimeforSlot);
      }
    } else if (name === "time") {
      if (value > max) {
        value = taskItem?.time;
      }
    }
    setTaskItem((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="userInput">
      <form>
        <div>
          <Input
            type="text"
            placeholder="Enter Task Description"
            name="description"
            required={true}
            label="Description"
            htmlFor="description"
            value={taskItem?.description}
            onChange={onChange}
          />
          <Input
            type="dropdown"
            placeholder="Select Slot"
            name="slot"
            required={true}
            label="Select Slot"
            htmlFor="slot"
            value={taskItem?.slot}
            onChange={onChange}
            isDisabled={!taskItem?.description}
          />
          <Input
            min="0"
            max={max}
            type="number"
            placeholder="Enter time in miniutes"
            name="time"
            required={true}
            label="Time (Mins)"
            htmlFor="time"
            value={taskItem?.time}
            onChange={onChange}
            isDisabled={!taskItem?.description}
          />

          <div className="btn-form">
            <button
              className="add-btn"
              disabled={
                taskItem?.description === "" ||
                taskItem?.time === 0 ||
                taskItem?.slot === ""
              }
              onClick={add}
            >
              Add
            </button>
            <button className="cancel-btn" onClick={toggle}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserInputs;
