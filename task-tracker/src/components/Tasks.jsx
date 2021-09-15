
import Task from './Task';

export default function Tasks ({tasks}) {

    return (
        <div>
            {
            tasks.map((task) => (
                <Task key={task.id} task={task}/> 
            ))
        }
        </div>
    )
}

