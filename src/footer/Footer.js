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
        { slot: newSlot, timeOccupied: 30, task: [] },
      ];
      localStorage.setItem("dataLocal", JSON.stringify(finalData));
      return finalData;
    });
  };
  const totalCosumedMins = data?.reduce((total, d) => {
    return total + d?.timeOccupied;
  }, 0);
  if (state) {
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
  } else {
    const scrollY =
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
            disabled={totalTime - (totalCosumedMins + 30) < 0}
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
          disabled={totalTime - (totalCosumedMins + 30) < 0}
        >
          <i className="plus"></i>
        </button>
        <p>{`Total hrs Left ${(totalTime - totalCosumedMins) / 60} hrs `}</p>
      </div>
    </footer>
  );
}

export default Footer;
