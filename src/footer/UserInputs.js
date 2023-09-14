import "./userinput.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";
import Input from "../common/Input";
import { initialState } from "../constant";

function UserInputs({ toggle }) {
  const [taskItem, setTaskItem] = useState({
    description: "",
    time: 0,
    slot: "",
  });

  const { data, setData } = useContext(Context);

  const add = (e) => {
    e.preventDefault();
    let newData = JSON.parse(JSON.stringify(data));
    newData?.forEach((d) => {
      if (taskItem.slot === d.slot) {
        d.task.push(taskItem);
      }
    });
    setData(newData);
    localStorage.setItem("dataLocal", JSON.stringify(newData));
    toggle();
  };

  const onChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
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
            type="number"
            placeholder="Enter time in miniutes"
            name="time"
            required={true}
            label="Time"
            htmlFor="time"
            value={taskItem?.time}
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
