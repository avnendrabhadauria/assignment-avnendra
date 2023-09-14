import "./footer.scss";

import React, { useContext } from "react";

import Context from "../context/UserContext";

function Footer(props) {
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
      // { [`count${count}`]: { title: "abc", desc: "abcd", index: 0 } }
    });
  };
  const totalCosumedMins = data?.reduce((total, d) => {
    return total + d?.timeOccupied;
  }, 0);
  return (
    <footer className="footer">
      {data?.length > 0 && (
        <div className="addSlot">
          <button
            className="btn-task"
            // onClick={addSlots}
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
