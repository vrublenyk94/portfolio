import { useTasks } from '../../queries.js'
import Task from '../task/task';
import './taskboard.css'

const Taskboard = () => {
    const { data: tasks, isLoading, error } = useTasks();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading tasks</div>;

    return (
        <ul className='taskboard'>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </ul>
    );
};

export default Taskboard;