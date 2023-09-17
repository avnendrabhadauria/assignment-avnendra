import "./task.scss";

import React from "react";

function Task({ details, index }) {
  return (
    <tr className="task row">
      <td className="table-cell-desc">{details?.description}</td>

      <td className="time">{details?.time}</td>
      {/* Details: {details?.description} Time {details?.time} */}
      <td className="action"></td>
    </tr>
  );
}

export default Task;
