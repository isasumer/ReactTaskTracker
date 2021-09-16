import "./App.css";
import Header from "./components/Header";
import TaskList from "./components/TaskList.jsx";
import CreateTask from "./components/CreateTask.jsx";
import { useState } from "react";
import { initialState } from "./store/initialStates";

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [isTaskBarShowed, setIsTaskBarShowed] = useState(false);

  //  Create Task
  const onCreate = (task) => {
    const id = Date.now();
    const newTask = { id, ...task };
    setTasks((prevState) => [...prevState, newTask]);
  };

  //  Delete Task
  const onDelete = (deletedItemID) =>
    setTasks(tasks.filter((task) => task.id === !deletedItemID));

  //  Toggle Done

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  //  Toggle Show and Hide
  const toggleShow = () => setIsTaskBarShowed((prevState) => !prevState);

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        isTaskBarShowed={isTaskBarShowed}
        toggleShow={toggleShow}
      />
      {isTaskBarShowed && <CreateTask onCreate={onCreate} />}
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={onDelete} toggleDone={toggleDone} />
      ) : (
        <p>No Task to show</p>
      )}
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker as default",
};

export default App;
