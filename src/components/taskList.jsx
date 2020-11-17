import React from "react";

export default function TaskList(props) {
  return (
    <>
      <p>{props.nameOfTask} </p>
      <button className="edit" onClick={() => props.onEdit(props.nameOfTask)}>
        Edit
      </button>
      <button
        className="delete"
        onClick={() => props.onDelete(props.nameOfTask)}
      >
        Delete
      </button>
    </>
  );
}
