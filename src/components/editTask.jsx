import React from "react";

export default function EditTask(props) {
  const [taskName, settaskName] = React.useState("");
  return (
    <>
      <input
        type="text"
        className="editTask"
        value={taskName}
        onChange={(event) => settaskName(event.target.value)}
      />
      <button className="saveTask" onClick={() => props.onSave(taskName)}>
        Save
      </button>
    </>
  );
}
