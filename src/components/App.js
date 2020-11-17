import React from "react";
import "./../styles/App.css";
import TaskList from "./taskList";
import TaskForm from "./taskForm";
import EditTask from "./editTask";
function App() {
  const taskListArray = [{ desc: "Buy Candy" }, { desc: "Buy Car" }];
  const [taskItem, setTaskListArray] = React.useState(taskListArray);
  const [isdisplayEdit, setisdisplayEdit] = React.useState(false);
  const taskListArrayCopy = [...taskItem];
  const [editIndex, seteditIndex] = React.useState(0);
  const handleAdd = (newTaskName) => {
    if (newTaskName === "") {
      return;
    }
    taskListArrayCopy.push({ desc: newTaskName });
    setTaskListArray(taskListArrayCopy);
  };

  const handleEditClick = (taskNametoBeEdited) => {
    // console.log(taskNametoBeEdited);
    setisdisplayEdit(true);

    for (let i = 0; i < taskListArrayCopy.length; i++) {
      if (taskListArrayCopy[i].desc === taskNametoBeEdited) {
        seteditIndex(i);
        // console.log(editIndex);
        return;
      }
    }
  };
  const handleEditing = (editedTaskName) => {
    if (editedTaskName === "") {
      return;
    }

    // console.log(editedTaskName);
    // console.log(editIndex);
    // console.log(taskListArrayCopy[editIndex].desc);
    taskListArrayCopy[editIndex].desc = editedTaskName;
    // console.log(taskListArrayCopy[editIndex].desc);
    setTaskListArray(taskListArrayCopy);
    // console.log(taskListArrayCopy);
    setisdisplayEdit(false);
  };

  const handleDelete = (taskToBeDeleted) => {
    for (let i = 0; i < taskListArrayCopy.length; i++) {
      if (taskListArrayCopy[i].desc === taskToBeDeleted) {
        taskListArrayCopy.splice(i, 1);
        setTaskListArray(taskListArrayCopy);
        return;
      }
    }
  };

  return (
    <div id="main">
      <TaskForm onAdd={handleAdd} />
      <ol>
        {taskItem.map((task) => (
          <li className="list">
            <TaskList
              key={task.desc}
              nameOfTask={task.desc}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ol>
      {isdisplayEdit && <EditTask onSave={handleEditing} />}
    </div>
  );
}

export default App;
