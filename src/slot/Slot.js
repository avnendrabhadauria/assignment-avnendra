import "./slot.scss";

import { ReactComponent as Cancel } from "../assests/cancel.svg";
import React from "react";
import Tasks from "../task/Tasks";

function Slot(props) {
  const { data, index, deleteItem } = props;
  const style = {};
  const timeOccupiedbyAllTask = data?.task?.reduce((innerTotal, innerData) => {
    return innerTotal + Number(innerData?.time);
  }, 0);
  if (timeOccupiedbyAllTask > 30) {
    style.backgroundColor = "red";
  }

  return (
    <div className="slot-placeholder">
      <div className="slot">
        <header className="slot-header">
          <div className="slot-title">
            <label style={style}>
              <strong>SLOT:</strong> {data?.slot}
            </label>
          </div>
          <div className="slot-cancel">
            <Cancel onClick={() => deleteItem(index)} />
          </div>
        </header>
        <Tasks tasklist={data?.task} />
      </div>
    </div>
  );
}

export default Slot;
