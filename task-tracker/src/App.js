
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import Tasks from './components/Tasks.jsx';

function App() {
  return (
    <div className="container">
      <Header title= "Task Tracker"/>
      <Button color="purple" text="Show Create a Task Bar"/>
      <Tasks/>
    </div>
  );
}

Header.defaultProps = {
  title:"Task Tracker as default"
}

export default App;
