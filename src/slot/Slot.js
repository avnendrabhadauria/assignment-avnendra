import "./slot.scss";

import { ReactComponent as Cancel } from "../assests/cancel.svg";
import { MINIMUM_TIME_FOR_SLOT } from "../constant";
import React from "react";
import Tasks from "../task/Tasks";

function Slot(props) {
  const { data, index, deleteItem, deleteTask } = props;
  const style = {};
  const timeOccupiedbyAllTask = data?.task?.reduce((innerTotal, innerData) => {
    return innerTotal + Number(innerData?.time);
  }, 0);
  if (timeOccupiedbyAllTask > MINIMUM_TIME_FOR_SLOT) {
    style.backgroundColor = "#79040a";
  }

  return (
    <div className="slot-placeholder">
      <div className="slot">
        <header className="slot-header">
          <div className="slot-title">
            <label style={style}>
              <strong>SLOT:</strong> {data?.slot}
            </label>
            <label>
              <strong>Time Assigned:</strong> {data?.timeCosumedByTasks}
            </label>
          </div>
          <div className="slot-cancel">
            <Cancel onClick={() => deleteItem(index)} />
          </div>
        </header>
        <Tasks
          tasklist={data?.task}
          deleteTask={deleteTask}
          slotIndex={index}
        />
      </div>
    </div>
  );
}

export default Slot;
