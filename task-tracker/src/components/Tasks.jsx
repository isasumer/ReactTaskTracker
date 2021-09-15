import {useState} from 'react'
import { initialState } from '../store/initialStates';
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState (initialState);
    return (
        <div>
            {
            tasks.map((task) => (
                <Task key={task.id}>task={task}</Task>
            ))
        }
        </div>
    )
}

export default Tasks
