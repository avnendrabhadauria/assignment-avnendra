import "./slot.scss";

import React from "react";
import Tasks from "../task/Tasks";

function Slot(props) {
  const { data } = props;
  return (
    <div className="slot-placeholder">
      <div className="slot">
        <header className="slot-header">
          <div>
            <label>
              <strong>SLOT:</strong> {data?.slot}
            </label>
          </div>
        </header>
        <Tasks tasklist={data?.task} />
      </div>
    </div>
  );
}

export default Slot;
