import React from "react";
import Task from "./Task";

function Tasks({ tasklist, deleteTask, slotIndex }) {
  return (
    <div className="task-list">
      <table>
        <thead>
          <tr className="head">
            <th>Task</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasklist?.map((d, index) => (
            <Task
              key={d + index}
              details={d}
              index={index}
              deleteTask={deleteTask}
              slotIndex={slotIndex}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
