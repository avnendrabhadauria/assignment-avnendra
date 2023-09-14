import "./task.scss";

import React from "react";

function Task({ details, index }) {
  return (
    <div className="task">
      Details: {details?.description} Time {details?.time}
    </div>
  );
}

export default Task;
