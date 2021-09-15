import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Tasks from "./components/Tasks.jsx";
import { useState } from "react";
import { initialState } from "./store/initialStates";

function App() {
  const [tasks, setTasks] = useState(initialState);

//  Create Task

//  Delete Task
const onDelete = (deletedItemID) => setTasks(tasks.filter((task) => task.id !==id))

//  Toggle Task

//  Toggle Show and Hide

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Button color="purple" text="Show Create a Task Bar" />
      <Tasks tasks = {tasks} onDelete= {onDelete}/>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker as default",
};

export default App;
