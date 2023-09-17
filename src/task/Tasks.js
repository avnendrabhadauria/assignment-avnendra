import React from "react";
import Task from "./Task";

function Tasks({ tasklist, deleteTask, slotIndex }) {
  return (
    <div className="task-list">
      <table>
        <tr className="head">
          <th>Task</th>
          <th>Time</th>
          <th>Action</th>
        </tr>

        {tasklist?.map((d, index) => (
          <Task
            key={d + index}
            details={d}
            index={index}
            deleteTask={deleteTask}
            slotIndex={slotIndex}
          />
        ))}
      </table>
    </div>
  );
}

export default Tasks;
