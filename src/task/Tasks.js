import React from "react";
import Task from "./Task";

function Tasks({ tasklist }) {
  return (
    <div className="task-list">
      {tasklist?.map((d, index) => (
        <Task key={d + index} details={d} />
      ))}
    </div>
  );
}

export default Tasks;
