import "./footer.scss";

import React, { useContext, useState } from "react";

import Context from "../context/UserContext";
import UserInputs from "./UserInputs";

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
        { slot: newSlot, mintimeOccupied: 30, task: [] },
      ];
      localStorage.setItem("dataLocal", JSON.stringify(finalData));
      return finalData;
    });
  };
  let actual_timeCosumedinTask = 0;
  let totaltimeCosumed = 0;

  data.forEach((outerData) => {
    let all_innerTaskTime = outerData?.task?.reduce((innerTotal, innerData) => {
      return innerTotal + Number(innerData?.time);
    }, 0);
    actual_timeCosumedinTask += all_innerTaskTime;
    const currectTime =
      all_innerTaskTime > outerData?.mintimeOccupied
        ? all_innerTaskTime
        : outerData?.mintimeOccupied;
    totaltimeCosumed += currectTime;
  });
  // const totalCosumedMins = data?.reduce((total, outerData) => {
  //   const timeOccupiedbyAllTask = outerData?.task?.reduce(
  //     (innerTotal, innerData) => {
  //       return innerTotal + Number(innerData?.time);
  //     },
  //     0
  //   );
  //   const currectTime =
  //     timeOccupiedbyAllTask > outerData?.mintimeOccupied
  //       ? timeOccupiedbyAllTask
  //       : outerData?.mintimeOccupied;

  //   return total + currectTime;
  // }, 0);
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
          <UserInputs toggle={openAddItems} />
        </div>
      )}
      {data?.length > 0 && (
        <div className="addSlot">
          <button
            className="btn-task"
            onClick={openAddItems}
            disabled={totalTime - actual_timeCosumedinTask <= 0}
          >
            <i className="plus"></i>
          </button>
          <p className="btn-task-desc">{`Add Task `}</p>
        </div>
      )}
      <div className="addSlot">
        <button
          className="btn-slot"
          onClick={addSlots}
          disabled={totalTime - (totaltimeCosumed + 30) < 0}
        >
          <i className="plus"></i>
        </button>
        <p>{`Total hrs Left ${totalTime - totaltimeCosumed} min `}</p>
      </div>
    </footer>
  );
}

export default Footer;
