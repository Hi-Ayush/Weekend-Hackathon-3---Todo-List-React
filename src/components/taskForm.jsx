import React from "react";
export default function TaskForm(props) {
  const [taskName, settaskName] = React.useState("");
  return (
    <>
      <input
        type="text"
        className="task"
        // value={taskName}
        onChange={(event) => settaskName(event.target.value)}
      />
      <button id="btn" onClick={() => props.onAdd(taskName)}>
        Add
      </button>
    </>
  );
}
