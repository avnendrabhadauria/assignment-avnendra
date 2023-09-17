import "./task.scss";

import { ReactComponent as Cancel } from "../assests/cancel.svg";
import React from "react";

function Task({ details, index, deleteTask, slotIndex }) {
  return (
    <tr className="task row">
      <td className="table-cell-desc">{details?.description}</td>

      <td className="time">{details?.time}</td>
      <td className="action">
        <div className="slot-cancel">
          <Cancel onClick={() => deleteTask(index, slotIndex)} />
        </div>
      </td>
    </tr>
  );
}

export default Task;
