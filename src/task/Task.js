import "./task.scss";

import { ReactComponent as Cancel } from "../assests/cancel.svg";
import React from "react";

function Task({ details, index }) {
  return (
    <tr className="task row">
      <td className="table-cell-desc">{details?.description}</td>

      <td className="time">{details?.time}</td>
      {/* Details: {details?.description} Time {details?.time} */}
      <td className="action">
        <div className="slot-cancel">
          <Cancel onClick={() => {}} />
        </div>
      </td>
    </tr>
  );
}

export default Task;
