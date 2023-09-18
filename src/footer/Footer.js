import "./footer.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";
import { MINIMUM_TIME_FOR_SLOT } from "../constant";
import UserInputs from "./UserInputs";
import { getvalues } from "../helper";

function Footer(props) {
  const [state, setState] = useState(false);
  const {
    data,
    setData,
    creds: { totalTime },
  } = useContext(Context);
  const addSlots = () => {
    setData((prevState) => {
      const newSlot = `slot${prevState?.length + 1}`;
      let finalData = [
        ...prevState,
        {
          slot: newSlot,
          mintimeOccupied: MINIMUM_TIME_FOR_SLOT,
          task: [],
          timeCosumedByTasks: 0,
        },
      ];
      localStorage.setItem("dataLocal", JSON.stringify(finalData));
      return finalData;
    });
  };
  const { actual_timeCosumedinTask, totaltimeCosumed } = getvalues(data);

  if (state) {
    document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
  } else {
    document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;

    body.style.overflowY = "auto";
  }
  const openAddItems = () => {
    setState((prevState) => !prevState);
  };
  return (
    <footer className="footer">
      {state && (
        <div className="input-details-container">
          <UserInputs
            toggle={openAddItems}
            initialTime={totalTime - actual_timeCosumedinTask}
          />
        </div>
      )}
      {data?.length > 0 && (
        <div className="addSlot btn-task">
          <button
            onClick={openAddItems}
            disabled={totalTime - actual_timeCosumedinTask <= 0}
          >
            <i className="plus"></i>
          </button>
          <p className="btn-task-desc">{`Add Task `}</p>
          <p className="time-left">
            (Time left {totalTime - actual_timeCosumedinTask} Mins)
          </p>
        </div>
      )}
      <div className="addSlot btn-slot">
        <button
          onClick={addSlots}
          disabled={totalTime - (totaltimeCosumed + MINIMUM_TIME_FOR_SLOT) < 0}
        >
          <i className="plus"></i>
        </button>
        <p>Add Slots</p>
        <p className="time-left">
          (No Possible Slots{" "}
          {Math.floor((totalTime - totaltimeCosumed) / MINIMUM_TIME_FOR_SLOT)} )
        </p>
      </div>
    </footer>
  );
}

export default Footer;
